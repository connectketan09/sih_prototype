# IP-SAKTI Sahayak — API Backend

This folder (`api_backend/`) is the **central, secure API layer** for IP-SAKTI Sahayak.

All external API calls (Bhashini translation, future LLM, RAG, speech services) are handled here — **never in the browser**.

---

## 1. What Is This?

`api_backend/` is a **Python Flask** server that:

- Receives API requests from the existing frontend (HTML/CSS/JS).
- Securely proxies those requests to external services (e.g. Bhashini).
- Returns clean JSON responses to the frontend.
- Keeps all API keys server-side, **never exposed to the browser**.

---

## 2. Architecture

```
Existing Frontend (HTML / CSS / JS)
        ↓   fetch('http://localhost:5000/api/translate')
Flask Backend (api_backend/app.py)
        ↓   requests → Bhashini API (two-step)
Bhashini NMT (meity-auth.ulcacontrib.org + dhruva-api.bhashini.gov.in)
        ↓
Flask response JSON
        ↓
Existing Frontend (updates UI)
```

---

## 3. Prerequisites

- Python 3.10 or later
- macOS / Linux terminal

---

## 4. Setup Steps

### Step 1 — Create a virtual environment

```bash
cd api_backend
python3 -m venv venv
```

### Step 2 — Activate the virtual environment

```bash
source venv/bin/activate
```

You should see `(venv)` in your prompt.

### Step 3 — Install dependencies

```bash
pip install -r requirements.txt
```

---

## 5. Configure API Keys

Open `api_backend/.env` and replace the placeholder values:

```env
# Your ULCA User ID (shown in your Bhashini profile)
BHASHINI_USER_ID="PUT HERE YOUR ULCA USER ID"

# Your ULCA API Key — used as ulcaApiKey in Pipeline Config call
BHASHINI_UDYAT_API_KEY="PUT HERE YOUR UDYAT API KEY"

# Your Inference API Key — used as Authorization in Pipeline Compute call
BHASHINI_INFERENCE_API_KEY="PUT HERE YOUR INFERENCE API KEY"
```

**Where to get these credentials:**

1. Register at: https://bhashini.gov.in/ulca/user/register
2. Log in and go to **My Profile → API Keys**
3. Copy your **User ID**, **ULCA API Key**, and **Inference API Key**

> ⚠️ **NEVER** commit `.env` to Git. It is already listed in `.gitignore`.

---

## 6. Start the Flask Backend

```bash
# Make sure virtual environment is active
source venv/bin/activate

# Start Flask
python app.py
```

You should see:

```
IP-SAKTI Sahayak API Backend starting
Port    : 5000
Debug   : True
Bhashini: CONFIGURED  (or: NOT CONFIGURED — add keys to .env)
```

The backend runs at: **http://localhost:5000**

---

## 7. Test the Health Endpoint

```bash
curl http://localhost:5000/api/health
```

Expected response:

```json
{
  "success": true,
  "message": "IP-SAKTI API Backend is running",
  "service": "IP-SAKTI Sahayak API",
  "version": "1.0.0",
  "bhashini_configured": true
}
```

If `bhashini_configured` is `false`, your `.env` credentials are not yet filled in.

---

## 8. Test the Translation Endpoint

```bash
curl -X POST http://localhost:5000/api/translate \
  -H "Content-Type: application/json" \
  -d '{"text": "नमस्कार", "source_language": "mr", "target_language": "en"}'
```

Expected success response:

```json
{
  "success": true,
  "translated_text": "Hello"
}
```

Expected error (credentials not set):

```json
{
  "success": false,
  "error": "Bhashini API credentials are not configured..."
}
```

---

## 9. How the Frontend Communicates

The existing frontend JavaScript (`common.js`) calls:

```javascript
fetch('http://localhost:5000/api/translate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: 'आयुर्वेदिक औषधांसाठी पेटंट कसे मिळवावे?',
    source_language: 'mr',
    target_language: 'en'
  })
})
```

The backend handles everything else. **No API keys ever reach the browser.**

---

## 10. Supported Languages (Bhashini NMT)

| Code | Language   |
|------|------------|
| en   | English    |
| hi   | Hindi      |
| mr   | Marathi    |
| gu   | Gujarati   |
| ta   | Tamil      |
| te   | Telugu     |
| bn   | Bengali    |
| kn   | Kannada    |
| ml   | Malayalam  |
| pa   | Punjabi    |
| or   | Odia       |
| as   | Assamese   |
| ur   | Urdu       |
| sa   | Sanskrit   |

**Khandeshi (khn):** Not currently supported by Bhashini NMT. Marked as "Coming Soon" in the application. The architecture is ready for a future alternative solution.

---

## 11. Keeping `.env` Private

The `.gitignore` already protects `.env`.

To verify it will never be committed:

```bash
git check-ignore -v .env
# Should output: .gitignore:.env
```

---

## 12. Future Endpoints

The following endpoints can be added to `app.py` without restructuring the frontend:

| Endpoint              | Purpose                         |
|-----------------------|---------------------------------|
| POST /api/detect-language | Auto-detect input language  |
| POST /api/speech-to-text  | Bhashini ASR                |
| POST /api/text-to-speech  | Bhashini TTS                |
| POST /api/ask             | LLM query (future)          |
| POST /api/rag             | RAG pipeline (future)       |
| GET  /api/sources         | Knowledge sources listing   |

---

## 13. Bhashini API Reference

Official documentation: https://bhashini.gitbook.io/bhashini-apis/

The backend implements the standard **two-step Bhashini integration**:

1. **Pipeline Config Call** → `POST https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/getModelsPipeline`
   - Headers: `userID`, `ulcaApiKey`
   - Purpose: Get the `serviceId` and `callbackUrl` for the requested language pair

2. **Pipeline Compute Call** → `POST https://dhruva-api.bhashini.gov.in/services/inference/pipeline`
   - Headers: `Authorization` (Inference API Key)
   - Purpose: Perform the actual translation
