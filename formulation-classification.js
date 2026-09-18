/**
 * Page Logic: formulation-classification.js
 */

function initializeFormulationPage() {
  const btnAnalyze = document.getElementById('btn-analyze-formulation');
  const btnExport = document.getElementById('btn-export-classification');

  if (btnAnalyze) {
    btnAnalyze.addEventListener('click', runFormulationAnalysis);
  }

  if (btnExport) {
    btnExport.addEventListener('click', exportAssessmentSummary);
  }
}

function runFormulationAnalysis() {
  const name = document.getElementById('formulation-name')?.value.trim() || 'Custom Formulation';
  const ingredients = document.getElementById('formulation-ingredients')?.value.trim() || '';
  const source = document.getElementById('formulation-source')?.value.trim() || '';
  const method = document.getElementById('formulation-method')?.value.trim() || '';
  const tkRadio = document.querySelector('input[name="tk_indicator"]:checked')?.value || 'yes';
  const novelty = document.getElementById('formulation-novelty')?.value || 'modified_synergy';

  // Deterministic Analysis Logic
  let classification = "Traditional Ayurvedic Formulation";
  let tkRisk = "High (Prior Art in Treatises)";
  let tkRiskClass = "high";
  let priorArtRisk = "High (TKDL Indexed)";
  let priorArtRiskClass = "high";
  let ipPath = "Process patent only (Requires synergistic proof)";
  let regulatoryNotes = "Under Rule 158B of the Drugs and Cosmetics Rules, this requires classical First Schedule textual citation for manufacturing license (Form 25D). Section 3(p) of the Patents Act strictly bars product patents unless surprising in-vitro synergy is proven.";
  let confidence = 88;

  if (novelty === 'traditional_classical') {
    classification = "Classical Ayurvedic Medicine (Shastriya)";
    tkRisk = "High (Direct Classical Recipe)";
    tkRiskClass = "high";
    priorArtRisk = "High (Section 3(p) Bar)";
    priorArtRiskClass = "high";
    ipPath = "Non-patentable under Section 3(p); Trademark & GI only";
    regulatoryNotes = "Classified as Classical Medicine under Schedule 1 treatises. Eligible for Form 25D license without human clinical trials. Unpatentable as traditional knowledge.";
    confidence = 96;
  } else if (novelty === 'modified_synergy') {
    classification = "Traditional Formulation with Synergistic Bio-enhancement";
    tkRisk = "High (Component Treatises Found)";
    tkRiskClass = "high";
    priorArtRisk = "Medium (Novel Ratio/Bioavailability)";
    priorArtRiskClass = "medium";
    ipPath = "Process patent & synergistic composition (Requires CI data)";
    regulatoryNotes = "Requires proving supra-additive therapeutic index over individual ingredients to overcome Section 3(e) & 3(p). Biological Diversity Act (Form I or III) clearance is mandatory.";
    confidence = 87;
  } else if (novelty === 'novel_fraction') {
    classification = "Standardized Phytopharmaceutical Drug Extract";
    tkRisk = "Low (Purified Fraction)";
    tkRiskClass = "low";
    priorArtRisk = "Low (Novel Characterization)";
    priorArtRiskClass = "low";
    ipPath = "Patentable Composition of Matter & Extraction Method";
    regulatoryNotes = "Evaluated under the Central Drugs Standard Control Organization (CDSCO) Phytopharmaceutical Guidelines (2015). Requires Phase I-III clinical trial data and safety pharmacology.";
    confidence = 92;
  } else if (novelty === 'novel_delivery') {
    classification = "Novel Ayurvedic Drug Delivery System (Phytosome/Nano)";
    tkRisk = "Low (Carrier Novelty)";
    tkRiskClass = "low";
    priorArtRisk = "Low-Medium (Known Herb, Novel Matrix)";
    priorArtRiskClass = "medium";
    ipPath = "Patentable Formulation Composition (Novel Carrier/Release)";
    regulatoryNotes = "Patentable subject matter under Section 2(1)(j) as an inventive formulation. Safety and pharmacokinetic bioavailability enhancement data required under AYUSH DCGI co-regulations.";
    confidence = 90;
  }

  // Update DOM Elements
  const resBadge = document.getElementById('res-classification-badge');
  const resTitle = document.getElementById('res-formulation-title');
  const resSummary = document.getElementById('res-formulation-summary');
  const resTkRisk = document.getElementById('res-tk-risk');
  const resPriorArt = document.getElementById('res-prior-art-risk');
  const resIpPath = document.getElementById('res-ip-path');
  const resConfidence = document.getElementById('res-confidence-val');
  const resRegulatory = document.getElementById('res-regulatory-notes');

  if (resBadge) {
    resBadge.textContent = classification;
    resBadge.className = `classification-tag-badge ${tkRiskClass === 'low' ? 'novel' : 'traditional'}`;
  }
  if (resTitle) resTitle.textContent = name;
  if (resSummary) resSummary.textContent = `Assessed against Indian Patents Act (Sec 3(p)), Rule 158B Drugs & Cosmetics Act, and Biological Diversity Act. Origin: ${source || 'Domestic'}`;
  
  if (resTkRisk) {
    resTkRisk.textContent = tkRisk;
    resTkRisk.className = `risk-pill ${tkRiskClass}`;
  }
  if (resPriorArt) {
    resPriorArt.textContent = priorArtRisk;
    resPriorArt.className = `risk-pill ${priorArtRiskClass}`;
  }
  if (resIpPath) resIpPath.textContent = ipPath;
  if (resConfidence) resConfidence.textContent = `${confidence}%`;
  if (resRegulatory) resRegulatory.textContent = regulatoryNotes;

  // If user is viewing in a non-English language, localize the newly generated result elements
  if (typeof localizePageContent === 'function' && typeof APP_STATE !== 'undefined' && APP_STATE.language && APP_STATE.language !== 'en') {
    localizePageContent(APP_STATE.language);
  }

  showToast('Formulation analysis completed successfully', 'success');
  logAuditEvent('Formulation Classified', `${name} classified as ${classification}`);

  // Save to recent activity in localStorage
  try {
    const raw = localStorage.getItem('ipsakti_recent_activity');
    const acts = raw ? JSON.parse(raw) : [];
    acts.unshift({
      title: "Formulation Classification",
      detail: `Classified: ${name.substring(0, 32)}...`,
      time: "Just now",
      url: "formulation-classification.html",
      icon: "🧪"
    });
    localStorage.setItem('ipsakti_recent_activity', JSON.stringify(acts.slice(0, 6)));
  } catch (e) {}
}

function exportAssessmentSummary() {
  const name = document.getElementById('res-formulation-title')?.textContent || 'Formulation Assessment';
  const badge = document.getElementById('res-classification-badge')?.textContent || '';
  const tkRisk = document.getElementById('res-tk-risk')?.textContent || '';
  const ipPath = document.getElementById('res-ip-path')?.textContent || '';
  const reg = document.getElementById('res-regulatory-notes')?.textContent || '';
  const conf = document.getElementById('res-confidence-val')?.textContent || '87%';

  const content = `=====================================================
IP-SAKTI Sahayak — Formulation Classification Report
=====================================================
Formulation Name: ${name}
Classification:   ${badge}
Confidence Score: ${conf}
Traditional Knowledge Risk: ${tkRisk}
Recommended IP Pathway:     ${ipPath}

Regulatory & Licensing Guidance:
${reg}

Statutory Caution:
This document is generated by the IP-SAKTI Sahayak educational prototype. It does not constitute formal legal counsel or patent grant certification.
=====================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `IP-SAKTI-Classification-${name.replace(/\s+/g, '_')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Assessment report exported successfully', 'success');
  logAuditEvent('Assessment Exported', `Exported summary for ${name}`);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFormulationPage);
} else {
  initializeFormulationPage();
}
