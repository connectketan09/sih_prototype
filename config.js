/**
 * IP-SAKTI Sahayak — Runtime Configuration
 *
 * LOCAL DEVELOPMENT:
 *   Backend runs on http://127.0.0.1:5050 (Flask)
 *   Set BACKEND_URL to that address.
 *
 * GITHUB PAGES / PRODUCTION:
 *   The Flask backend is not available on GitHub Pages.
 *   Set BACKEND_URL to your deployed backend URL (e.g. Render, Railway).
 *   If no backend is deployed, the site still works as a full UI prototype;
 *   only the live Bhashini translation will gracefully degrade.
 *
 * HOW TO DEPLOY BACKEND:
 *   See api_backend/README.md for Render/Railway one-click deploy instructions.
 */
window.IPSAKTI_CONFIG = {
  // Change this to your deployed backend URL when hosting remotely.
  // Leave as localhost for local development.
  BACKEND_URL: 'http://127.0.0.1:5050'
};
