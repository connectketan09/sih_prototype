/**
 * Page Logic: abs-compliance.js
 */

function initializeABSPage() {
  const btnRun = document.getElementById('btn-run-abs');
  if (btnRun) {
    btnRun.addEventListener('click', runABSAssessment);
  }
}

function runABSAssessment() {
  const resource = document.getElementById('abs-resource-name')?.value.trim() || 'Withania somnifera';
  const location = document.getElementById('abs-location')?.value || 'mp';
  const purpose = document.querySelector('input[name="abs_purpose"]:checked')?.value || 'commercial';
  const entity = document.getElementById('abs-entity')?.value || 'indian_company';
  const tkFlag = document.querySelector('input[name="abs_tk"]:checked')?.value || 'yes';

  const stateNames = {
    mp: 'Madhya Pradesh SBB',
    kerala: 'Kerala State Biodiversity Board',
    rajasthan: 'Rajasthan SBB',
    uttarakhand: 'Uttarakhand SBB',
    karnataka: 'Karnataka Biodiversity Board',
    international: 'International / Non-Indian Origin'
  };

  let risk = "ABS Approval Mandatory (Section 7 BDA)";
  let riskClass = "traditional";
  let authority = `${stateNames[location] || 'State SBB'} & National Biodiversity Authority`;
  let formFiling = "Form I (Prior Intimation to SBB)";
  let levy = "0.1% - 0.5% ex-factory gross sales";
  let confidence = 93;

  let checklistItems = [
    { title: "Prior Intimation to SBB (Form I)", sub: "Submit Form I with verified botanical sourcing details prior to manufacturing.", checked: true },
    { title: "Biodiversity Management Committee (BMC) Consultation", sub: "Verify local Peoples Biodiversity Register (PBR) entries at the Gram Panchayat.", checked: true },
    { title: "Form III Clearance for Patent Protection", sub: "Mandatory prior NBA approval under Section 6 before any patent grant.", checked: false }
  ];

  if (entity === 'foreign_entity') {
    risk = "Strict NBA Prior Approval Required (Section 3 BDA)";
    riskClass = "traditional";
    authority = "National Biodiversity Authority (NBA Chennai) & MoEFCC";
    formFiling = "Form I to NBA (Mandatory Pre-Access Grant)";
    levy = "Up to 2.0% - 5.0% purchase price or 0.5% turnover";
    confidence = 96;
    checklistItems = [
      { title: "Section 3 NBA Prior Approval", sub: "Foreign entities or Indian companies with any foreign equity cannot access resources without NBA order.", checked: true },
      { title: "Execution of Mutually Agreed Terms (MAT)", sub: "Formal agreement signed with NBA governing commercial royalties and benefit sharing.", checked: false },
      { title: "Local Community Consent & Nagoya Compliance", sub: "International access certificate of compliance (IRCC) generated via Nagoya ABS Clearing-House.", checked: false }
    ];
  } else if (entity === 'indian_individual' && purpose === 'research') {
    risk = "Statutory Exemption Applicable (Section 5 / Sec 7 Proviso)";
    riskClass = "novel";
    authority = "Local Biodiversity Management Committee (BMC)";
    formFiling = "Exempt from commercial ABS levy";
    levy = "Nil (Exempt for non-commercial research/practitioners)";
    confidence = 94;
    checklistItems = [
      { title: "Maintain Sourcing Verification Receipt", sub: "Document local cultivator purchase for traceability.", checked: true },
      { title: "Section 4 Restriction", sub: "Ensure research results are not transferred to foreign entities without Form II clearance.", checked: true }
    ];
  } else if (location === 'international') {
    risk = "Nagoya Protocol / Import Compliance";
    riskClass = "novel";
    authority = "Customs & International ABS National Focal Point";
    formFiling = "Prior Informed Consent (PIC) & MAT from Origin Country";
    levy = "Determined by country of genetic origin",
    confidence = 88;
    checklistItems = [
      { title: "Verify Country of Origin ABS Legislation", sub: "Confirm biological resource was legally acquired with valid export permit.", checked: true },
      { title: "Phytosanitary & CITES Clearance", sub: "Ensure species is not listed in CITES Appendix II or endangered schedules.", checked: true }
    ];
  }

  // Update DOM Elements
  const badge = document.getElementById('abs-risk-badge');
  const heading = document.getElementById('abs-framework-heading');
  const filingCode = document.getElementById('abs-filing-code');
  const levyRate = document.getElementById('abs-levy-rate');
  const checklistContainer = document.querySelector('.checklist-container');

  if (badge) {
    badge.textContent = risk;
    badge.className = `classification-tag-badge ${riskClass}`;
  }
  if (heading) heading.textContent = `Applicable Authority: ${authority}`;
  if (filingCode) filingCode.textContent = formFiling;
  if (levyRate) levyRate.textContent = levy;

  if (checklistContainer) {
    checklistContainer.innerHTML = checklistItems.map((chk, i) => `
      <div class="checklist-item">
        <input type="checkbox" class="checklist-checkbox" id="chk-abs-${i}" ${chk.checked ? 'checked' : ''}>
        <div>
          <label for="chk-abs-${i}" class="checklist-text-title">${chk.title}</label>
          <div class="checklist-text-sub">${chk.sub}</div>
        </div>
      </div>
    `).join('');
  }

  // If viewing in a non-English language, localize newly added checklist and results
  if (typeof localizePageContent === 'function' && typeof APP_STATE !== 'undefined' && APP_STATE.language && APP_STATE.language !== 'en') {
    localizePageContent(APP_STATE.language);
  }

  showToast('ABS statutory assessment generated successfully', 'success');
  logAuditEvent('ABS Assessment Run', `Evaluated ABS for ${resource} (${entity})`);

  // Save to recent activity
  try {
    const raw = localStorage.getItem('ipsakti_recent_activity');
    const acts = raw ? JSON.parse(raw) : [];
    acts.unshift({
      title: "ABS Compliance",
      detail: `Evaluated: ${resource} under ${authority.substring(0, 24)}...`,
      time: "Just now",
      url: "abs-compliance.html",
      icon: "🌿"
    });
    localStorage.setItem('ipsakti_recent_activity', JSON.stringify(acts.slice(0, 6)));
  } catch (e) {}
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeABSPage);
} else {
  initializeABSPage();
}
