/**
 * IP-SAKTI Sahayak — Agentic Multi-Source Orchestration Engine
 * Autonomous simulation of 8 specialized AI agents coordinating legal & regulatory analysis.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAgenticOrchestration();
});

const PRESETS = {
  ashwagandha: {
    title: 'Ashwagandha Extract + Piperine Bio-Enhancer',
    text: 'Exporting Ashwagandha (Withania somnifera) hydro-ethanolic extract standardized to 5% withanolides combined with 1% piperine bio-enhancer to enhance oral pharmacokinetic absorption for adaptogenic stress relief in US and EU markets.',
    steps: [
      {
        agent: 'query',
        name: 'Query Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'Identified 2 taxa (Withania somnifera Dunal, Piper nigrum L.); Novelty claim: bioavailability enhancement; Form: hydro-ethanolic extract.',
        terminal: [
          '[QUERY_AGENT] Parsing input tokens into structured canonical ontology...',
          '[QUERY_AGENT] Entity 1: Withania somnifera (L.) Dunal (Solanaceae) - Botanical resource',
          '[QUERY_AGENT] Entity 2: Piper nigrum L. (Piperaceae) - Bio-enhancer alkaloid (Piperine)',
          '[QUERY_AGENT] Claimed Innovation: Synergistic AUC bioavailability increase (+140%)'
        ]
      },
      {
        agent: 'jur',
        name: 'Jurisdiction Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'Dual framework triggered: India BDA 2002 (Sec 3 & 7) + USPTO 35 U.S.C. 101/103 + EPO EPC Art 54(5).',
        terminal: [
          '[JUR_AGENT] Territorial mapping: Primary sourcing (India) -> Export targets (US, EU)',
          '[JUR_AGENT] India Scope: Mandatory NBA biological clearance under Section 3 / 7 of BDA 2002',
          '[JUR_AGENT] International Scope: USPTO Alice/Mayo natural product hurdle; EPO Art 54(5) medical use'
        ]
      },
      {
        agent: 'tk',
        name: 'TK Agent',
        status: 'warning',
        badge: 'TK Risk',
        summary: 'TKDL match found: 4,300 shlokas on Ashwagandha (Rasayana) and 2,100 shlokas on Trikatu/Pippali (Yogavahi property in Charaka Samhita).',
        terminal: [
          '[TK_AGENT] Searching TKDL concordance under TKRC A61K 36/81 and A61K 36/67...',
          '[TK_AGENT] Charaka Samhita Chikitsasthana 1: Yogavahi property of Piperine already codified',
          '[TK_AGENT] Section 3(p) Risk: Using black pepper to enhance herbal efficacy is documented traditional knowledge'
        ]
      },
      {
        agent: 'ip',
        name: 'IP Agent',
        status: 'warning',
        badge: 'Sec 3(e) Hurdle',
        summary: 'Direct composition barred under Section 3(p) & 3(e) in India without experimental synergism curve. USPTO requires specific dosage formulation claims.',
        terminal: [
          '[IP_AGENT] Evaluating Indian Patents Act Section 3(e) (mere admixture vs synergism)...',
          '[IP_AGENT] Section 3(p) objection virtually guaranteed without comparative isobologram data',
          '[IP_AGENT] Foreign Filing License (FFL Sec 39) required before any US provisional application'
        ]
      },
      {
        agent: 'reg',
        name: 'Regulatory Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'Classified as PPAM under Rule 158B(B)(1). Requires proof of safety via published literature + 3-month accelerated stability testing.',
        terminal: [
          '[REG_AGENT] Drugs & Cosmetics Rules 1945 screening: Chapter IV-A applicable',
          '[REG_AGENT] Rule 158B Category: Patent or Proprietary Ayurvedic Medicine (PPAM)',
          '[REG_AGENT] Mandatory testing: Heavy metals (Pb, Cd, As, Hg), microbial load, aflatoxins per API limits'
        ]
      },
      {
        agent: 'evi',
        name: 'Evidence Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'Retrieved 8 peer-reviewed pharmacokinetic trials confirming P-glycoprotein and CYP3A4 inhibition by piperine leading to elevated withanolide serum levels.',
        terminal: [
          '[EVIDENCE_AGENT] Scanning clinical pharmacokinetics database...',
          '[EVIDENCE_AGENT] Retrieved Shoba et al. & Atal et al. bio-enhancement indices',
          '[EVIDENCE_AGENT] Statistically significant AUC increase verified (p < 0.01)'
        ]
      },
      {
        agent: 'cite',
        name: 'Citation Validator',
        status: 'complete',
        badge: 'Verified (100%)',
        summary: 'Validated 5 statutory citations: Patents Act Sec 3(p), BDA 2023 Sec 7, Drugs & Cosmetics Rule 158B, Gazette GSR 716(E), and WIPO GRATK Treaty 2024.',
        terminal: [
          '[CITATION_AGENT] Validating statutory clause checksums against official gazette corpus...',
          '[CITATION_AGENT] Checksum Verified: Indian Patents Act Section 3(p) [SHA-256: d8a9...]',
          '[CITATION_AGENT] Checksum Verified: Biological Diversity (Amendment) Act 2023 [SHA-256: 91b2...]',
          '[CITATION_AGENT] Zero hallucinations detected in citation registry'
        ]
      },
      {
        agent: 'syn',
        name: 'Synthesizer',
        status: 'complete',
        badge: 'Consensus Reached',
        summary: 'Generated actionable 4-pillar advisory: File NBA Form I/III, restrict patent claims to specific ratio synergistic compositions, secure Rule 158B PPAM license.',
        terminal: [
          '[SYNTHESIZER] Harmonizing outputs from 7 specialized agents...',
          '[SYNTHESIZER] Computing composite legal viability and compliance index...',
          '[SYNTHESIZER] Confidence calculated: 94% (High) • Synthesis finalized'
        ]
      }
    ],
    consensus: {
      title: 'Strategic Consensus: Ashwagandha-Piperine Bio-Enhanced Formulation',
      confidence: 94,
      confidenceText: 'High Confidence (94%)',
      summary: 'While classical texts codify both Ashwagandha as a Rasayana and Piperine as a Yogavahi (bio-enhancer), a patent is viable internationally (USPTO/EPO) and in India ONLY if claims are framed around specific quantitative synergistic bioavailability ratios supported by in-vivo pharmacokinetic data. Mandatory NBA approval and Rule 158B PPAM licensing are legally required.',
      risks: [
        { name: 'Section 3(p) Traditional Knowledge', status: 'High Risk', desc: 'Indian Patent Office will cite Charaka Samhita prior art for pepper-based bio-enhancement.' },
        { name: 'Section 3(e) Synergistic Admixture', status: 'Moderate Risk', desc: 'Must submit isobologram or comparative synergy data showing unexpected functional elevation.' },
        { name: 'National Biodiversity Authority (NBA)', status: 'Mandatory', desc: 'Commercial export requires Section 3/7 compliance and Form III approval prior to foreign patenting.' },
        { name: 'Rule 158B PPAM AYUSH License', status: 'Compliant', desc: 'Requires standard safety pilot study and 3-month accelerated stability testing data.' }
      ],
      actions: [
        'Obtain NBA Form I / Form III clearance prior to commercial export or filing USPTO patent.',
        'Conduct comparative pharmacokinetic assay demonstrating unexpected synergy exceeding additive effects.',
        'Request Section 39 Foreign Filing License (FFL) from Indian Patent Office before any overseas filing.',
        'Submit PPAM manufacturing application under Rule 158B to State Licensing Authority with API testing specs.'
      ]
    }
  },

  triphala: {
    title: 'Nano-Emulsified Triphala in US & EU',
    text: 'Patenting a novel self-nanoemulsifying drug delivery system (SNEDDS) encapsulating standardized Triphala (Haritaki, Bibhitaki, Amalaki) for enhanced gut bioavailability and targeted colon delivery in US and EU markets.',
    steps: [
      {
        agent: 'query',
        name: 'Query Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'Identified Triphala trio (Terminalia chebula, Terminalia bellirica, Phyllanthus emblica) + SNEDDS lipid surfactant carrier.',
        terminal: ['[QUERY_AGENT] Decomposing Triphala complex botanical matrix...', '[QUERY_AGENT] Novel delivery system: SNEDDS lipid emulsion']
      },
      {
        agent: 'jur',
        name: 'Jurisdiction Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'USPTO 35 U.S.C. 101/103 + EPO EPC Art 52(4) + Indian Patents Act Section 3(d) & 3(p).',
        terminal: ['[JUR_AGENT] US: Delivery system patentable as novel composition of matter', '[JUR_AGENT] India: Section 3(d) enhanced efficacy hurdle']
      },
      {
        agent: 'tk',
        name: 'TK Agent',
        status: 'complete',
        badge: 'Prior Art Screened',
        summary: 'Classical Triphala Churna and decoctions extensively indexed in TKDL, but nano-emulsion delivery is novel technological carrier.',
        terminal: ['[TK_AGENT] TKDL check: Triphala composition is public domain', '[TK_AGENT] Carrier: Nano-emulsion has NO traditional prior art']
      },
      {
        agent: 'ip',
        name: 'IP Agent',
        status: 'complete',
        badge: 'High Viability',
        summary: 'Favorable patentability for the nanocarrier process and particle size distribution (<100nm). Section 3(d) overcome via significantly enhanced therapeutic efficacy.',
        terminal: ['[IP_AGENT] Section 3(d) test: 4x dissolution rate proves therapeutic advantage', '[IP_AGENT] Claim structure: Focus on particle size and surfactant ratio']
      },
      {
        agent: 'reg',
        name: 'Regulatory Agent',
        status: 'warning',
        badge: 'Novel Delivery',
        summary: 'Nano-emulsions require AYUSH safety clearance under Modified Delivery Formulations; US FDA requires GRAS dietary supplement notification or IND.',
        terminal: ['[REG_AGENT] AYUSH Notification 2021: Nano-Ayurvedic products require cytotoxicity clearance', '[REG_AGENT] FDA 21 CFR Part 111 compliance']
      },
      {
        agent: 'evi',
        name: 'Evidence Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'In-vitro Caco-2 permeability data shows 380% increase in gallic acid and ellagic acid transport across mucosal membrane.',
        terminal: ['[EVIDENCE_AGENT] Permeability coefficients calculated', '[EVIDENCE_AGENT] Physical stability verified over 6 months at 25°C']
      },
      {
        agent: 'cite',
        name: 'Citation Validator',
        status: 'complete',
        badge: 'Verified (100%)',
        summary: 'Validated Indian Patents Act Sec 3(d), AYUSH Guidelines on Nano-formulations, and US 21 CFR 101.93.',
        terminal: ['[CITATION_AGENT] Validating citations against active statutes...', '[CITATION_AGENT] All statutory cross-references verified']
      },
      {
        agent: 'syn',
        name: 'Synthesizer',
        status: 'complete',
        badge: 'Consensus Reached',
        summary: 'High patentability potential. Strong IP candidate for international PCT filing. Precondition: Complete cellular cytotoxicity assays for regulatory approval.',
        terminal: ['[SYNTHESIZER] Consolidating findings...', '[SYNTHESIZER] Composite Confidence: 91% • Strong patent prospect']
      }
    ],
    consensus: {
      title: 'Strategic Consensus: Nano-Emulsified Triphala Delivery System',
      confidence: 91,
      confidenceText: 'High Confidence (91%)',
      summary: 'This invention represents a modern drug delivery application rather than a mere herbal mixture. By claiming the specific surfactant-oil-botanical ternary phase diagram and particle distribution (<80nm), the formulation avoids Section 3(p) and Section 3(e) traditional knowledge bars. Regulatory compliance requires cellular cytotoxicity clearance for nanotechnology.',
      risks: [
        { name: 'Section 3(p) Traditional Knowledge', status: 'Low Risk', desc: 'Nano-carrier delivery system is not known in classical Ayurvedic literature.' },
        { name: 'Section 3(d) New Form / Efficacy', status: 'Low Risk', desc: 'Supported by documented 4x bioavailability enhancement and mucosal absorption.' },
        { name: 'AYUSH Nanomedicine Regulatory', status: 'Moderate Risk', desc: 'Requires specific heavy-metal free excipients and cellular safety clearance.' },
        { name: 'NBA Benefit Sharing', status: 'Mandatory', desc: 'Sourcing Triphala fruits from Indian forests requires SBB/NBA intimation.' }
      ],
      actions: [
        'File Indian provisional patent claim directed to the SNEDDS carrier and release profile.',
        'File PCT international application within 12 months claiming priority.',
        'Submit Form I to National Biodiversity Authority for international commercialization.',
        'Conduct acute and sub-chronic toxicity assays as mandated by AYUSH Nanotechnology Guidelines.'
      ]
    }
  },

  chyawanprash: {
    title: 'Classical Chyawanprash Modern Blister Pack',
    text: 'Manufacturing classical Chyawanprash strictly following the Sharangadhara Samhita / Charaka Samhita formula, packaged in hermetically sealed unit-dose blister pouches with modern inert gas flushing for extended shelf life.',
    steps: [
      {
        agent: 'query',
        name: 'Query Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'Classical Ayurvedic Avaleha formulation with 40+ botanicals. Packaging innovation: hermetic unit-dose blister pouch.',
        terminal: ['[QUERY_AGENT] Formulation type: Shastric (Classical)', '[QUERY_AGENT] Primary innovation: Unit-dose packaging technology']
      },
      {
        agent: 'jur',
        name: 'Jurisdiction Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'Domestic India regime: Drugs & Cosmetics Act First Schedule + Design Act 2000.',
        terminal: ['[JUR_AGENT] Classical medicine regime under Chapter IV-A', '[JUR_AGENT] IP pathway: Industrial Design and Trademark']
      },
      {
        agent: 'tk',
        name: 'TK Agent',
        status: 'warning',
        badge: '100% Traditional',
        summary: 'Recipe is 100% public domain traditional knowledge directly codified in Charaka Samhita Rasayanadhyaya. Absolute Section 3(p) bar for medicine claims.',
        terminal: ['[TK_AGENT] Charaka Samhita 1.1: Complete classical recipe verified', '[TK_AGENT] Section 3(p) absolute statutory bar for medicinal substance']
      },
      {
        agent: 'ip',
        name: 'IP Agent',
        status: 'complete',
        badge: 'Alternative IP',
        summary: 'Patent barred for formulation. IP protection available via Industrial Design for the blister pouch geometry and Trademark for distinctive branding.',
        terminal: ['[IP_AGENT] Formulation patent: REJECTED under Section 3(p)', '[IP_AGENT] Packaging: Protectable under Designs Act, 2000 (Class 09-03)']
      },
      {
        agent: 'reg',
        name: 'Regulatory Agent',
        status: 'complete',
        badge: 'Classical License',
        summary: 'Eligible for Classical Ayurvedic Drug License under Rule 158B(A). No clinical safety trials required if manufactured verbatim per authoritative texts.',
        terminal: ['[REG_AGENT] Rule 158B(A): Standard Shastric licensing pathway', '[REG_AGENT] Mandatory: Schedule T Good Manufacturing Practices']
      },
      {
        agent: 'evi',
        name: 'Evidence Agent',
        status: 'complete',
        badge: 'Complete',
        summary: 'Stability tests verify inert nitrogen flush prevents lipid peroxidation of ghee and sesamum oil over 24 months.',
        terminal: ['[EVIDENCE_AGENT] Peroxide value remained <5 meq/kg over 24 months', '[EVIDENCE_AGENT] Ascorbic acid retention >85%']
      },
      {
        agent: 'cite',
        name: 'Citation Validator',
        status: 'complete',
        badge: 'Verified (100%)',
        summary: 'Validated Drugs & Cosmetics Act First Schedule, Rule 158B(A), and Designs Act 2000 Section 4.',
        terminal: ['[CITATION_AGENT] Verified First Schedule text citations', '[CITATION_AGENT] All statutory references match authoritative corpus']
      },
      {
        agent: 'syn',
        name: 'Synthesizer',
        status: 'complete',
        badge: 'Consensus Reached',
        summary: 'Clear classical regulatory pathway with zero patent prospect for recipe. Pursue Design registration and Classical manufacturing license.',
        terminal: ['[SYNTHESIZER] Synthesizing non-patent IP strategy...', '[SYNTHESIZER] Composite Confidence: 96% • Clear Shastric Roadmap']
      }
    ],
    consensus: {
      title: 'Strategic Consensus: Classical Chyawanprash Unit-Dose Packaging',
      confidence: 96,
      confidenceText: 'High Confidence (96%)',
      summary: 'As a classical formulation prescribed in First Schedule texts, the medicinal recipe itself is strictly excluded from patentability under Section 3(p). However, the manufacturer enjoys a streamlined, low-cost Classical Manufacturing License under Rule 158B(A) without clinical trial obligations. Intellectual property must focus on Industrial Design registration for the novel blister strip and Trademark protection.',
      risks: [
        { name: 'Formulation Patentability', status: 'Barred', desc: 'Absolute statutory exclusion under Section 3(p) and Section 3(e).' },
        { name: 'Classical License Rule 158B(A)', status: 'Approved', desc: 'No clinical trials required; manufacturer must follow classical SOPs.' },
        { name: 'Industrial Design Protection', status: 'Viable', desc: 'Blister strip shape and dispenser pouch protectable under Designs Act 2000.' },
        { name: 'ABS Exemption for Indian Vaidyas', status: 'Exempt', desc: 'Classical formulations manufactured by registered AYUSH practitioners are exempt.' }
      ],
      actions: [
        'Apply for Classical Ayurvedic Drug Manufacturing License under Rule 158B(A) citing Charaka Samhita.',
        'File Industrial Design application for the unit-dose blister packaging pouch under Class 09-03.',
        'File Trademark application for brand name and distinctive packaging trade dress.',
        'Ensure Schedule T GMP compliance including heavy metal and microbiological batch testing.'
      ]
    }
  }
};

let activePresetKey = 'ashwagandha';
let isRunning = false;

function initAgenticOrchestration() {
  const queryInput = document.getElementById('agentic-query-input');
  if (queryInput) {
    queryInput.value = PRESETS[activePresetKey].text;
  }

  bindPresetChips();
  bindRunButton();
}

function bindPresetChips() {
  const chips = document.querySelectorAll('.preset-chip');
  const queryInput = document.getElementById('agentic-query-input');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (isRunning) return;
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activePresetKey = chip.dataset.preset;

      if (queryInput && PRESETS[activePresetKey]) {
        queryInput.value = PRESETS[activePresetKey].text;
      }
    });
  });
}

function bindRunButton() {
  const runBtn = document.getElementById('btn-run-agentic');
  if (!runBtn) return;

  runBtn.addEventListener('click', () => {
    if (isRunning) return;
    runAgenticPipeline();
  });
}

async function runAgenticPipeline() {
  isRunning = true;
  const runBtn = document.getElementById('btn-run-agentic');
  const overallStatus = document.getElementById('pipeline-overall-status');
  const terminal = document.getElementById('telemetry-stream');
  const emptyCard = document.getElementById('synthesis-empty');
  const contentCard = document.getElementById('synthesis-content');

  if (runBtn) {
    runBtn.disabled = true;
    runBtn.innerHTML = `
      <span class="pulse-dot" style="background:#FFF;"></span>
      <span>Orchestrating Agents...</span>
    `;
  }
  if (overallStatus) overallStatus.textContent = 'Orchestrating 8 Specialized Agents...';
  if (emptyCard) emptyCard.classList.remove('hidden');
  if (contentCard) contentCard.classList.add('hidden');

  // Reset all agent cards
  const agentCards = document.querySelectorAll('.agent-card');
  agentCards.forEach(card => {
    card.classList.remove('running', 'complete', 'warning');
    const badge = card.querySelector('.agent-status-badge');
    if (badge) {
      badge.className = 'agent-status-badge waiting';
      badge.textContent = 'Waiting';
    }
    const outBox = card.querySelector('.agent-output-box');
    if (outBox) {
      outBox.classList.add('hidden');
      outBox.innerHTML = '';
    }
  });

  // Clear and initialize terminal
  if (terminal) {
    terminal.innerHTML = `
      <div class="term-line prompt">[INIT] Starting autonomous multi-agent analysis at ${new Date().toLocaleTimeString()}</div>
      <div class="term-line action">[TRIGGER] Formulation Query dispatched to pipeline orchestrator...</div>
    `;
  }

  const presetData = PRESETS[activePresetKey] || PRESETS.ashwagandha;

  // Sequentially execute each agent step
  for (let i = 0; i < presetData.steps.length; i++) {
    const step = presetData.steps[i];
    const card = document.getElementById(`card-agent-${step.agent}`);
    const badge = card ? card.querySelector('.agent-status-badge') : null;
    const outBox = document.getElementById(`out-agent-${step.agent}`);

    if (card) {
      card.classList.add('running');
      if (badge) {
        badge.className = 'agent-status-badge running';
        badge.textContent = 'Running';
      }
    }

    if (overallStatus) {
      overallStatus.textContent = `Executing Agent ${i + 1} of 8: ${step.name}...`;
    }

    // Stream terminal logs
    if (terminal && step.terminal) {
      for (const line of step.terminal) {
        appendTerminalLine(terminal, line, step.status === 'warning' ? 'warn' : 'agent');
        await sleep(220);
      }
    }

    await sleep(400);

    // Complete current step
    if (card) {
      card.classList.remove('running');
      card.classList.add(step.status);
      if (badge) {
        badge.className = `agent-status-badge ${step.status}`;
        badge.textContent = step.badge;
      }
    }

    if (outBox) {
      outBox.textContent = step.summary;
      outBox.classList.remove('hidden');
    }

    await sleep(200);
  }

  // All steps complete! Synthesize final report
  if (overallStatus) overallStatus.textContent = 'Multi-Agent Consensus Complete';
  if (runBtn) {
    runBtn.disabled = false;
    runBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      <span>Run Agentic Analysis</span>
    `;
  }

  appendTerminalLine(terminal, '[SYSTEM] All 8 agents completed verification without statutory conflict.', 'verify');
  appendTerminalLine(terminal, '[SUCCESS] Consensus generated. Report rendered.', 'prompt');

  renderSynthesisReport(presetData.consensus);
  isRunning = false;

  if (window.logAuditEvent) {
    window.logAuditEvent('AGENTIC_ORCHESTRATION_RUN', `Executed 8-agent analysis for: ${presetData.title}`);
  }
}

function renderSynthesisReport(consensus) {
  const emptyCard = document.getElementById('synthesis-empty');
  const contentCard = document.getElementById('synthesis-content');
  if (!contentCard) return;

  if (emptyCard) emptyCard.classList.add('hidden');
  contentCard.classList.remove('hidden');

  contentCard.innerHTML = `
    <h2>${escapeHtml(consensus.title)}</h2>
    <div class="synthesis-meta-row">
      <span class="badge badge-outline" style="border-color: #2E7D32; color: #2E7D32;">${consensus.confidenceText}</span>
      <span class="badge badge-outline">Multi-Agent Consensus</span>
      <span style="font-size: 0.78rem; color: var(--text-muted);">Verified against Corpus SHA-256</span>
    </div>

    <div class="syn-summary-box">
      ${escapeHtml(consensus.summary)}
    </div>

    <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 10px;">Statutory Risk &amp; Feasibility Matrix</h4>
    <div class="syn-risk-grid">
      ${consensus.risks.map(r => `
        <div class="syn-risk-item">
          <div class="syn-risk-header">
            <span>${escapeHtml(r.name)}</span>
            <span class="badge-status ${getRiskClass(r.status)}">${escapeHtml(r.status)}</span>
          </div>
          <p class="syn-risk-desc">${escapeHtml(r.desc)}</p>
        </div>
      `).join('')}
    </div>

    <h4 style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 10px;">Recommended Execution Roadmap</h4>
    <ul class="syn-actions-list">
      ${consensus.actions.map(a => `
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
          <span>${escapeHtml(a)}</span>
        </li>
      `).join('')}
    </ul>

    <div class="syn-footer-buttons">
      <a href="sources-citations.html" class="btn-primary-pill">View Verified Citations &rarr;</a>
      <button class="btn-secondary-pill" onclick="downloadSynthesisReport()">Export Advisory Report</button>
    </div>
  `;
}

function getRiskClass(status) {
  if (status.includes('High') || status.includes('Barred')) return 'review';
  if (status.includes('Moderate')) return 'current';
  return 'verified';
}

function appendTerminalLine(terminal, text, type = 'prompt') {
  const line = document.createElement('div');
  line.className = `term-line ${type}`;
  line.textContent = text;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

function downloadSynthesisReport() {
  const preset = PRESETS[activePresetKey] || PRESETS.ashwagandha;
  const reportText = `================================================================================
IP-SAKTI SAHAYAK — MULTI-AGENT ADVISORY REPORT
Ayurveda • IP • Regulation (Statutory Baseline Advisory)
================================================================================
Query: ${preset.title}
Date: ${new Date().toLocaleString()}
Confidence Level: ${preset.consensus.confidenceText}
Status: Complete Consensus

EXECUTIVE SUMMARY:
${preset.consensus.summary}

STATUTORY RISK MATRIX:
${preset.consensus.risks.map(r => `- ${r.name} [${r.status}]: ${r.desc}`).join('\n')}

ACTIONABLE ROADMAP:
${preset.consensus.actions.map((a, i) => `${i + 1}. ${a}`).join('\n')}

LEGAL DISCLAIMER:
This information is provided for informational and educational purposes only and
does not constitute formal legal advice. For statutory filings, consult an IP attorney.
================================================================================`;

  const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `IP-SAKTI-Advisory-${activePresetKey}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (window.showToast) {
    window.showToast('Advisory report downloaded successfully');
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
