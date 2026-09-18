"""
IP-SAKTI Sahayak — API Backend
Central Flask API layer for IP-SAKTI Sahayak.
Handles external service integrations server-side.
"""

import os
import logging

import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS


load_dotenv()


logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s — %(message)s",
    datefmt="%Y-%m-%dT%H:%M:%S",
)

logger = logging.getLogger("ipsakti.api")


BHASHINI_USER_ID = os.getenv("BHASHINI_USER_ID", "")
BHASHINI_UDYAT_API_KEY = os.getenv("BHASHINI_UDYAT_API_KEY", "")
BHASHINI_INFERENCE_API_KEY = os.getenv("BHASHINI_INFERENCE_API_KEY", "")


BHASHINI_CONFIG_ENDPOINT = (
    "https://meity-auth.ulcacontrib.org/"
    "ulca/apis/v0/model/getModelsPipeline"
)

BHASHINI_INFERENCE_ENDPOINT = (
    "https://dhruva-api.bhashini.gov.in/"
    "services/inference/pipeline"
)

BHASHINI_DEFAULT_PIPELINE_ID = "64392f96daac500b55c543cd"

BHASHINI_SUPPORTED_LANGUAGES = {
    "en": "English",
    "hi": "Hindi",
    "mr": "Marathi",
    "gu": "Gujarati",
    "ta": "Tamil",
    "te": "Telugu",
    "bn": "Bengali",
    "kn": "Kannada",
    "ml": "Malayalam",
    "pa": "Punjabi",
    "or": "Odia",
    "as": "Assamese",
    "ur": "Urdu",
    "sa": "Sanskrit",
}

BHASHINI_UNSUPPORTED_LANGUAGES = {
    "khn": "Khandeshi",
}

BHASHINI_REQUEST_TIMEOUT = 30


app = Flask(__name__)

PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_DIR = PROJECT_ROOT

CORS(
    app,
    resources={
        r"/api/*": {
            "origins": [
                "http://127.0.0.1:*",
                "http://localhost:*",
                "null",
            ]
        }
    },
    supports_credentials=False,
)


def _credentials_configured():
    return bool(
        BHASHINI_USER_ID
        and BHASHINI_USER_ID != "PUT HERE YOUR ULCA USER ID"
        and BHASHINI_UDYAT_API_KEY
        and BHASHINI_UDYAT_API_KEY != "PUT HERE YOUR UDYAT API KEY"
        and BHASHINI_INFERENCE_API_KEY
        and BHASHINI_INFERENCE_API_KEY != "PUT HERE YOUR INFERENCE API KEY"
    )


def _get_bhashini_pipeline_config(source_language, target_language):
    headers = {
        "userID": BHASHINI_USER_ID,
        "ulcaApiKey": BHASHINI_UDYAT_API_KEY,
        "Content-Type": "application/json",
    }

    payload = {
        "pipelineTasks": [
            {
                "taskType": "translation",
                "config": {
                    "language": {
                        "sourceLanguage": source_language,
                        "targetLanguage": target_language,
                    }
                },
            }
        ],
        "pipelineRequestConfig": {
            "pipelineId": BHASHINI_DEFAULT_PIPELINE_ID,
        },
    }

    logger.info(
        "Bhashini config request: %s -> %s",
        source_language,
        target_language,
    )

    response = requests.post(
        BHASHINI_CONFIG_ENDPOINT,
        headers=headers,
        json=payload,
        timeout=BHASHINI_REQUEST_TIMEOUT,
    )

    logger.info(
        "Bhashini config response status: %s",
        response.status_code,
    )

    response.raise_for_status()

    try:
        data = response.json()
    except ValueError as exc:
        raise ValueError(
            "Bhashini config returned non-JSON response"
        ) from exc

    if not isinstance(data, dict):
        raise ValueError(
            "Bhashini config returned an invalid response"
        )

    return data


def _find_translation_config(config_response):
    pipeline_response = config_response.get(
        "pipelineResponseConfig",
        [],
    )

    if not isinstance(pipeline_response, list):
        raise ValueError(
            "Invalid Bhashini pipelineResponseConfig"
        )

    for item in pipeline_response:
        if not isinstance(item, dict):
            continue

        task_type = item.get("taskType")

        if task_type != "translation":
            continue

        configs = item.get("config", [])

        if isinstance(configs, dict):
            configs = [configs]

        if not isinstance(configs, list):
            continue

        for config in configs:
            if isinstance(config, dict):
                return config

    raise ValueError(
        "No translation configuration found in Bhashini response"
    )


def _extract_service_and_endpoint(config_response):
    translation_config = _find_translation_config(
        config_response
    )

    service_id = translation_config.get("serviceId")

    if not service_id:
        raise ValueError(
            "Bhashini translation serviceId was not returned"
        )

    endpoint_config = config_response.get(
        "pipelineInferenceAPIEndPoint",
        {},
    )

    if not isinstance(endpoint_config, dict):
        endpoint_config = {}

    callback_url = endpoint_config.get("callbackUrl")

    if not callback_url:
        callback_url = BHASHINI_INFERENCE_ENDPOINT

    inference_key = endpoint_config.get(
        "inferenceApiKey",
        {},
    )

    auth_name = None
    auth_value = None

    if isinstance(inference_key, dict):
        auth_name = inference_key.get("name")
        auth_value = inference_key.get("value")

    if not auth_name or not auth_value:
        auth_name = "Authorization"
        auth_value = BHASHINI_INFERENCE_API_KEY

    if not auth_value:
        raise ValueError(
            "Bhashini inference authorization is missing"
        )

    return (
        service_id,
        callback_url,
        auth_name,
        auth_value,
    )


def _call_bhashini_inference(
    text,
    source_language,
    target_language,
    service_id,
    callback_url,
    auth_name,
    auth_value,
):
    headers = {
        auth_name: auth_value,
        "Content-Type": "application/json",
    }

    payload = {
        "pipelineTasks": [
            {
                "taskType": "translation",
                "config": {
                    "language": {
                        "sourceLanguage": source_language,
                        "targetLanguage": target_language,
                    },
                    "serviceId": service_id,
                },
            }
        ],
        "inputData": {
            "input": [
                {
                    "source": text,
                }
            ],
        },
    }

    logger.info(
        "Bhashini inference request: serviceId=%s, text_len=%d",
        service_id,
        len(text),
    )

    response = requests.post(
        callback_url,
        headers=headers,
        json=payload,
        timeout=BHASHINI_REQUEST_TIMEOUT,
    )

    logger.info(
        "Bhashini inference response status: %s",
        response.status_code,
    )

    response.raise_for_status()

    try:
        data = response.json()
    except ValueError as exc:
        raise ValueError(
            "Bhashini inference returned non-JSON response"
        ) from exc

    if not isinstance(data, dict):
        raise ValueError(
            "Bhashini inference returned invalid response"
        )

    pipeline_response = data.get(
        "pipelineResponse",
        [],
    )

    if not isinstance(pipeline_response, list):
        raise ValueError(
            "Invalid Bhashini pipelineResponse"
        )

    for task_output in pipeline_response:
        if not isinstance(task_output, dict):
            continue

        if task_output.get("taskType") != "translation":
            continue

        output_items = task_output.get(
            "output",
            [],
        )

        if not isinstance(output_items, list):
            continue

        for output_item in output_items:
            if not isinstance(output_item, dict):
                continue

            translated = output_item.get("target")

            if translated:
                return translated

    error_message = data.get("error")

    if error_message:
        raise ValueError(
            f"Bhashini inference error: {error_message}"
        )

    raise ValueError(
        "Bhashini returned no translated text"
    )


@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify(
        {
            "success": True,
            "message": "IP-SAKTI API Backend is running",
            "service": "IP-SAKTI Sahayak API",
            "version": "1.0.0",
            "bhashini_configured": _credentials_configured(),
        }
    ), 200


@app.route("/api/translate", methods=["POST"])
def translate():
    if not request.is_json:
        return jsonify(
            {
                "success": False,
                "error": (
                    "Request must be JSON with "
                    "Content-Type: application/json"
                ),
            }
        ), 400

    try:
        body = request.get_json(
            force=True,
            silent=False,
        )
    except Exception:
        return jsonify(
            {
                "success": False,
                "error": "Invalid JSON in request body",
            }
        ), 400

    if not isinstance(body, dict):
        return jsonify(
            {
                "success": False,
                "error": "Request body must be a JSON object",
            }
        ), 400

    text = str(
        body.get("text", "")
    ).strip()

    source_language = str(
        body.get("source_language", "")
    ).strip().lower()

    target_language = str(
        body.get("target_language", "")
    ).strip().lower()

    if not text:
        return jsonify(
            {
                "success": False,
                "error": "Field 'text' is required",
            }
        ), 400

    if len(text) > 5000:
        return jsonify(
            {
                "success": False,
                "error": (
                    "Text exceeds maximum allowed "
                    "length of 5000 characters"
                ),
            }
        ), 400

    if not source_language:
        return jsonify(
            {
                "success": False,
                "error": "Field 'source_language' is required",
            }
        ), 400

    if not target_language:
        return jsonify(
            {
                "success": False,
                "error": "Field 'target_language' is required",
            }
        ), 400

    if source_language in BHASHINI_UNSUPPORTED_LANGUAGES:
        return jsonify(
            {
                "success": False,
                "error": (
                    "Khandeshi is not currently supported "
                    "by the configured Bhashini NMT service."
                ),
                "coming_soon": True,
            }
        ), 422

    if target_language in BHASHINI_UNSUPPORTED_LANGUAGES:
        return jsonify(
            {
                "success": False,
                "error": (
                    "Khandeshi is not currently supported "
                    "by the configured Bhashini NMT service."
                ),
                "coming_soon": True,
            }
        ), 422

    if source_language not in BHASHINI_SUPPORTED_LANGUAGES:
        return jsonify(
            {
                "success": False,
                "error": (
                    f"Unsupported source language: "
                    f"{source_language}"
                ),
            }
        ), 400

    if target_language not in BHASHINI_SUPPORTED_LANGUAGES:
        return jsonify(
            {
                "success": False,
                "error": (
                    f"Unsupported target language: "
                    f"{target_language}"
                ),
            }
        ), 400

    if source_language == target_language:
        return jsonify(
            {
                "success": True,
                "translated_text": text,
                "note": (
                    "Source and target languages "
                    "are the same."
                ),
            }
        ), 200

    if not _credentials_configured():
        return jsonify(
            {
                "success": False,
                "error": (
                    "Bhashini API credentials are not "
                    "configured in api_backend/.env"
                ),
            }
        ), 503

    try:
        config_response = _get_bhashini_pipeline_config(
            source_language,
            target_language,
        )

        (
            service_id,
            callback_url,
            auth_name,
            auth_value,
        ) = _extract_service_and_endpoint(
            config_response
        )

        translated_text = _call_bhashini_inference(
            text=text,
            source_language=source_language,
            target_language=target_language,
            service_id=service_id,
            callback_url=callback_url,
            auth_name=auth_name,
            auth_value=auth_value,
        )

        logger.info(
            "Translation successful: %s -> %s",
            source_language,
            target_language,
        )

        return jsonify(
            {
                "success": True,
                "translated_text": translated_text,
                "source_language": source_language,
                "target_language": target_language,
            }
        ), 200

    except requests.exceptions.Timeout:
        logger.error(
            "Bhashini request timed out"
        )

        return jsonify(
            {
                "success": False,
                "error": (
                    "Bhashini API request timed out. "
                    "Please try again."
                ),
            }
        ), 504

    except requests.exceptions.ConnectionError:
        logger.error(
            "Bhashini connection error"
        )

        return jsonify(
            {
                "success": False,
                "error": (
                    "Could not reach the Bhashini API."
                ),
            }
        ), 503

    except requests.exceptions.HTTPError as exc:
        status_code = (
            exc.response.status_code
            if exc.response is not None
            else 0
        )

        logger.error(
            "Bhashini HTTP error: %s",
            status_code,
        )

        if exc.response is not None:
            try:
                error_body = exc.response.json()
                logger.error(
                    "Bhashini error response: %s",
                    error_body,
                )
            except ValueError:
                logger.error(
                    "Bhashini raw error response: %s",
                    exc.response.text[:1000],
                )

        if status_code == 401:
            message = (
                "Bhashini authentication failed. "
                "Check the credentials in .env."
            )
        elif status_code == 403:
            message = (
                "Bhashini access denied. "
                "Check API key permissions."
            )
        elif status_code == 429:
            message = (
                "Bhashini rate limit exceeded. "
                "Please try again later."
            )
        else:
            message = (
                f"Bhashini API returned HTTP "
                f"{status_code}."
            )

        return jsonify(
            {
                "success": False,
                "error": message,
            }
        ), 502

    except ValueError as exc:
        logger.error(
            "Bhashini response/config error: %s",
            exc,
        )

        return jsonify(
            {
                "success": False,
                "error": str(exc),
            }
        ), 502

    except Exception as exc:
        logger.exception(
            "Unexpected translation error: %s",
            exc,
        )

        return jsonify(
            {
                "success": False,
                "error": (
                    "An unexpected error occurred."
                ),
            }
        ), 500


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path.startswith("api/"):
        return jsonify({
            "success": False,
            "error": "Endpoint not found."
        }), 404

    if path:
        file_path = os.path.join(FRONTEND_DIR, path)

        if os.path.isfile(file_path):
            return send_from_directory(FRONTEND_DIR, path)

    return send_from_directory(FRONTEND_DIR, "index.html")


@app.errorhandler(404)
def not_found(error):
    return jsonify(
        {
            "success": False,
            "error": "Endpoint not found.",
        }
    ), 404


@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify(
        {
            "success": False,
            "error": (
                "HTTP method not allowed for this endpoint."
            ),
        }
    ), 405


@app.errorhandler(500)
def internal_error(error):
    logger.exception(
        "Unhandled server error: %s",
        error,
    )

    return jsonify(
        {
            "success": False,
            "error": "Internal server error.",
        }
    ), 500


if __name__ == "__main__":
    port = int(
        os.getenv(
            "FLASK_PORT",
            "5050",
        )
    )

    debug = os.getenv(
        "FLASK_DEBUG",
        "True",
    ).lower() in (
        "true",
        "1",
        "yes",
    )

    logger.info("=" * 60)
    logger.info(
        "IP-SAKTI Sahayak API Backend starting"
    )
    logger.info(
        "Port    : %d",
        port,
    )
    logger.info(
        "Debug   : %s",
        debug,
    )
    logger.info(
        "Bhashini: %s",
        (
            "CONFIGURED"
            if _credentials_configured()
            else "NOT CONFIGURED"
        ),
    )
    logger.info("=" * 60)

    app.run(
        host="127.0.0.1",
        port=port,
        debug=debug,
    )