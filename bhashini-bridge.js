/**
 * IP-SAKTI Sahayak — Bhashini API Bridge (bhashini-bridge.js)
 * =============================================================
 * Provides a lightweight client to communicate with the Flask
 * api_backend for Bhashini translation services.
 *
 * ARCHITECTURE:
 *   This file handles ONLY user-query and AI-response translation.
 *   The existing common.js TRANSLATIONS dictionary continues to handle
 *   all static UI text (nav, labels, buttons, etc.) — that system is
 *   NOT replaced or modified.
 *
 * USE CASES:
 *   1. Translate a user's multilingual query → English before sending to AI.
 *   2. Translate an AI response → user's language before displaying.
 *   3. Future: detect input language automatically.
 *
 * SECURITY:
 *   All Bhashini API calls go through the Flask backend (localhost:5000).
 *   No API keys are present in this file or anywhere in the frontend.
 *
 * USAGE:
 *   // Translate text
 *   const result = await BhashiniAPI.translate('नमस्कार', 'mr', 'en');
 *   if (result.success) {
 *     console.log(result.translated_text);  // "Hello"
 *   }
 *
 *   // Check backend health
 *   const health = await BhashiniAPI.health();
 *
 *   // Get supported languages
 *   const langs = BhashiniAPI.getSupportedLanguages();
 */

const BhashiniAPI = (() => {

  // Backend base URL — matches Flask port in api_backend/app.py
  const BACKEND_BASE_URL = 'http://127.0.0.1:5050';

  // Request timeout in milliseconds
  const REQUEST_TIMEOUT_MS = 35000;

  /**
   * Supported Bhashini NMT language codes.
   * Mirror of BHASHINI_SUPPORTED_LANGUAGES in app.py.
   * Must be kept in sync when new languages are added to the backend.
   */
  const SUPPORTED_LANGUAGES = {
    en: 'English',
    hi: 'Hindi',
    mr: 'Marathi',
    gu: 'Gujarati',
    ta: 'Tamil',
    te: 'Telugu',
    bn: 'Bengali',
    kn: 'Kannada',
    ml: 'Malayalam',
    pa: 'Punjabi',
    or: 'Odia',
    as: 'Assamese',
    ur: 'Urdu',
    sa: 'Sanskrit',
  };

  /**
   * Languages not yet supported by Bhashini NMT — marked Coming Soon.
   */
  const COMING_SOON_LANGUAGES = {
    khn: 'Khandeshi',
  };

  /**
   * Internal fetch wrapper with AbortController timeout.
   * Returns { ok, status, data } or throws on network error.
   */
  async function _apiFetch(path, options = {}) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(`${BACKEND_BASE_URL}${path}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = { success: false, error: `Non-JSON response from backend (HTTP ${response.status})` };
      }

      return { ok: response.ok, status: response.status, data };
    } catch (err) {
      if (err.name === 'AbortError') {
        throw new Error('Request to IP-SAKTI backend timed out. Make sure the Flask server is running.');
      }
      throw new Error(`Could not reach IP-SAKTI backend at ${BACKEND_BASE_URL}. Is Flask running? (${err.message})`);
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // -------------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------------

  /**
   * health()
   * Check if the Flask backend is running.
   *
   * @returns {Promise<{success: boolean, message: string, bhashini_configured: boolean}>}
   */
  async function health() {
    try {
      const { data } = await _apiFetch('/api/health', { method: 'GET' });
      return data;
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  /**
   * translate(text, sourceLang, targetLang)
   * Translate text using Bhashini via the Flask backend.
   *
   * @param {string} text           — The text to translate
   * @param {string} sourceLang     — ISO-639-1 source language code (e.g. 'mr')
   * @param {string} targetLang     — ISO-639-1 target language code (e.g. 'en')
   * @returns {Promise<{success: boolean, translated_text?: string, error?: string}>}
   *
   * @example
   *   const result = await BhashiniAPI.translate('नमस्कार', 'mr', 'en');
   *   // { success: true, translated_text: 'Hello' }
   */
  async function translate(text, sourceLang, targetLang) {
    if (!text || !text.trim()) {
      return { success: false, error: 'Text cannot be empty' };
    }
    if (!sourceLang || !targetLang) {
      return { success: false, error: 'Source and target language codes are required' };
    }
    // Same language — no-op
    if (sourceLang === targetLang) {
      return { success: true, translated_text: text };
    }

    try {
      const { data } = await _apiFetch('/api/translate', {
        method: 'POST',
        body: JSON.stringify({
          text: text.trim(),
          source_language: sourceLang,
          target_language: targetLang,
        }),
      });
      return data;
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  /**
   * getSupportedLanguages()
   * Returns the map of supported Bhashini language codes.
   *
   * @returns {{ [code: string]: string }}
   */
  function getSupportedLanguages() {
    return { ...SUPPORTED_LANGUAGES };
  }

  /**
   * getComingSoonLanguages()
   * Returns languages that are planned but not yet supported by Bhashini NMT.
   *
   * @returns {{ [code: string]: string }}
   */
  function getComingSoonLanguages() {
    return { ...COMING_SOON_LANGUAGES };
  }

  /**
   * isLanguageSupported(code)
   * Returns true if the given language code is supported by Bhashini NMT.
   *
   * @param {string} code — ISO-639-1 language code
   * @returns {boolean}
   */
  function isLanguageSupported(code) {
    return Object.prototype.hasOwnProperty.call(SUPPORTED_LANGUAGES, code);
  }

  /**
   * isLanguageComingSoon(code)
   * Returns true if the language is planned but not yet supported.
   *
   * @param {string} code — ISO-639-1 language code
   * @returns {boolean}
   */
  function isLanguageComingSoon(code) {
    return Object.prototype.hasOwnProperty.call(COMING_SOON_LANGUAGES, code);
  }

  // Expose public interface
  return {
    health,
    translate,
    getSupportedLanguages,
    getComingSoonLanguages,
    isLanguageSupported,
    isLanguageComingSoon,
    BACKEND_BASE_URL,
  };

})();

// Make available globally
if (typeof window !== 'undefined') {
  window.BhashiniAPI = BhashiniAPI;
}
