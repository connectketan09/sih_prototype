/**
 * Page Logic: index.js (Home Dashboard)
 */

function initializeHomePage() {
  // 1. Listen for jurisdiction updates
  window.addEventListener('jurisdictionChanged', (e) => {
    const jur = e.detail.jurisdiction;
    const jurLabel = document.getElementById('dashboard-jurisdiction-indicator');
    if (jurLabel) {
      jurLabel.textContent = jur === 'india' ? 'India Statutory' : 'International WIPO';
    }
  });

  // 2. Render Recent Activity from localStorage or defaults
  renderRecentActivity();
}

function renderRecentActivity() {
  const container = document.getElementById('dashboard-recent-activity-list');
  if (!container) return;

  const defaultActivities = [
    { title: "AI Assistant", detail: "Question about Ashwagandha IP & Section 3(p)", time: "2m ago", url: "ai-assistant.html", icon: "💬" },
    { title: "Formulation Classification", detail: "Classification completed: Withania-Brahmi Synergistic Extract", time: "12m ago", url: "formulation-classification.html", icon: "🧪" },
    { title: "ABS Compliance", detail: "Analysis completed: Madhya Pradesh SBB Form I", time: "18m ago", url: "abs-compliance.html", icon: "🌿" },
    { title: "Knowledge Graph", detail: "Node explored: Ashwagandha (Withania somnifera)", time: "25m ago", url: "knowledge-graph.html", icon: "🕸️" }
  ];

  try {
    const stored = localStorage.getItem('ipsakti_recent_activity');
    const activities = stored ? JSON.parse(stored) : defaultActivities;

    container.innerHTML = activities.slice(0, 4).map(act => `
      <a href="${act.url}" class="activity-item">
        <div class="activity-item-left">
          <div class="activity-icon-wrap">${act.icon}</div>
          <div>
            <div class="activity-name">${act.title}</div>
            <div class="activity-detail">${act.detail}</div>
          </div>
        </div>
        <div class="activity-time">${act.time}</div>
      </a>
    `).join('');
  } catch (err) {
    console.warn('Could not render recent activity:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeHomePage);
} else {
  initializeHomePage();
}
