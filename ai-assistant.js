/**
 * Page Logic: ai-assistant.js (Multilingual RAG AI Assistant)
 */

// Corpus of verified mock legal authorities and responses
const AI_KNOWLEDGE_BASE = {
  india: {
    ip_protection: {
      answer: "In India, Ayurvedic formulations are evaluated under a dual IP framework. Standard classical formulations are non-patentable under Section 3(p) of the Patents Act, 1970 as traditional knowledge. However, patent protection is viable for novel synergistic compositions (demonstrating unexpected therapeutic bio-enhancement), novel drug delivery systems, or novel extraction processes. Other applicable IP forms include Geographical Indications (GI) for regional botanicals, Trademarks for commercial brand equity, and Trade Secrets for proprietary extraction ratios.",
      citations: [
        { title: "Indian Patents Act, 1970", authority: "Office of the Controller General of Patents (CGPDTM)", section: "Section 3(p) & Section 3(e)", date: "Current indexed version", status: "Verified", text: "Section 3(p) excludes 'an invention which in effect, is traditional knowledge or which is an aggregation or duplication of known properties of traditionally known component or components'." },
        { title: "Drugs and Cosmetics Rules, 1945", authority: "Ministry of AYUSH", section: "Rule 158B", date: "Updated Gazette 2024", status: "Verified", text: "Mandates safety, proof of classical textual reference (First Schedule treatises), and clinical trial guidelines for Patent or Proprietary Ayurvedic medicines." }
      ],
      confidence: 94,
      confidenceRating: "High Evidence Alignment"
    },
    patent_traditional: {
      answer: "No, traditional Ayurvedic knowledge alone cannot be patented in India. Under Section 3(p) of the Indian Patents Act, 1970, any formulation that is documented in classical treatises (such as Charaka Samhita, Sushruta Samhita, or the TKDL) is considered prior art. To overcome Section 3(p) and Section 3(e), an applicant must demonstrate: (1) An inventive step involving unexpected synergistic therapeutic efficacy; (2) Quantitative comparative data showing that the combination outperforms the additive effects of the individual components; and (3) Mandatory Form III permission from the National Biodiversity Authority (NBA).",
      citations: [
        { title: "Indian Patents Act, 1970", authority: "CGPDTM India", section: "Section 3(p)", date: "Current indexed version", status: "Verified", text: "Inventions which are an aggregation or duplication of traditional knowledge are not patentable." },
        { title: "Biological Diversity Act, 2002", authority: "National Biodiversity Authority (NBA)", section: "Section 6 (Form III)", date: "Act 18 of 2003", status: "Verified", text: "No person shall apply for any intellectual property right based on biological resources obtained from India without prior NBA approval." }
      ],
      confidence: 96,
      confidenceRating: "High Evidence Alignment"
    },
    abs_requirements: {
      answer: "Access and Benefit Sharing (ABS) in India is governed by the Biological Diversity Act, 2002 and NBA Guidelines 2014. If you are an Indian entity accessing biological resources (like Ashwagandha or Brahmi) for commercial utilization, you must submit prior intimation under Form I to the respective State Biodiversity Board (SBB). If you are a foreign entity or company with foreign equity, Section 3 approval from the National Biodiversity Authority (NBA) is compulsory. Benefit sharing typically ranges from 0.1% to 0.5% of ex-factory gross sales or 3.0% to 5.0% of purchase price.",
      citations: [
        { title: "Biological Diversity Act, 2002", authority: "National Biodiversity Authority (NBA)", section: "Section 7 & Section 24", date: "Codified Statute", status: "Verified", text: "Indian entities require prior intimation to the State Biodiversity Board before commercial bio-utilization." },
        { title: "Guidelines on Access and Benefit Sharing Regulations", authority: "Ministry of Environment, Forest and Climate Change", section: "Regulation 3 & 4", date: "Gazette Notification 2014", status: "Verified", text: "Prescribes benefit sharing percentages between 0.1% and 0.5% of annual gross ex-factory sale." }
      ],
      confidence: 91,
      confidenceRating: "High Evidence Alignment"
    },
    tkdl_ashwagandha: {
      answer: "A targeted query across the Traditional Knowledge Digital Library (TKDL) for Withania somnifera (Ashwagandha) retrieves 48 distinct classical formulation citations. Prominent citations include Ashwagandhadya Ghrita and Ashwagandharishta documented in Charaka Samhita (Chikitsa Sthana, Chapter 1), Sushruta Samhita, and Sharangdhara Samhita for Medhya (neuro-cognitive) and Rasayana (rejuvenative) actions. These citations constitute defensive prior art against broad compound claims filed internationally.",
      citations: [
        { title: "Traditional Knowledge Digital Library (TKDL)", authority: "CSIR & Ministry of AYUSH", section: "Treatise ID: CS-CHIK-01/88", date: "Classical Reference", status: "Verified", text: "Ashwagandha rasayana formulation cited in Charaka Samhita Chikitsa Sthana as an adaptogenic tonic." }
      ],
      confidence: 95,
      confidenceRating: "High Evidence Alignment"
    }
  },
  international: {
    ip_protection: {
      answer: "Under the International Patent framework (PCT, WIPO, and major regional patent offices like EPO and USPTO), natural products and traditional formulations face stringent novelty and non-obviousness hurdles. Under 35 U.S.C. § 101 (USPTO) following the Myriad and Alice doctrines, naturally occurring biological compositions are ineligible subject matter without markedly different characteristics. In Europe, EPO Article 54 and 56 require technical proof that the formulation produces an unexpected inventive technical effect beyond documented traditional therapeutic indications.",
      citations: [
        { title: "Patent Cooperation Treaty (PCT)", authority: "World Intellectual Property Organization (WIPO)", section: "PCT Rule 33.1", date: "International Standard", status: "Verified", text: "Prior art consists of everything made available to the public anywhere in the world by written disclosure, including digitized traditional knowledge." },
        { title: "European Patent Convention (EPC)", authority: "European Patent Office (EPO)", section: "Article 54 & 56 (Novelty & Inventive Step)", date: "Current Guidelines", status: "Verified", text: "Combinations of known botanical ingredients require evidence of a surprising technical synergy to satisfy inventive step." }
      ],
      confidence: 89,
      confidenceRating: "High Evidence Alignment"
    },
    patent_traditional: {
      answer: "In international jurisdictions, traditional knowledge alone cannot be patented because it lacks novelty under PCT Rule 33 and regional patent laws (e.g. USPTO 35 U.S.C. § 102). Access to India's TKDL by leading international patent offices (USPTO, EPO, JPO, UKIPO) enables patent examiners to cite ancient Ayurvedic texts as prior art, resulting in the rejection or cancellation of improper biopiracy claims.",
      citations: [
        { title: "WIPO Intergovernmental Committee (IGC)", authority: "WIPO Secretariat", section: "Doc WIPO/GRTKF/IC/45", date: "International Treaty Text", status: "Verified", text: "Protects traditional knowledge against unauthorized misappropriation through defensive digital registries." }
      ],
      confidence: 92,
      confidenceRating: "High Evidence Alignment"
    },
    abs_requirements: {
      answer: "Internationally, Access and Benefit Sharing is regulated by the Nagoya Protocol on Access to Genetic Resources and the Fair and Equitable Sharing of Benefits Arising from their Utilization (2010), adopted under the Convention on Biological Diversity (CBD). Entities seeking to utilize biological genetic resources outside their country of origin must obtain Prior Informed Consent (PIC) and negotiate Mutually Agreed Terms (MAT) with the provider country's National Focal Point.",
      citations: [
        { title: "Nagoya Protocol on Access and Benefit-Sharing", authority: "Secretariat of the Convention on Biological Diversity", section: "Article 5 & 6 (Fair & Equitable Benefit Sharing)", date: "Entry into force 2014", status: "Verified", text: "Contracting parties shall take legislative measures ensuring benefit sharing upon mutually agreed terms." }
      ],
      confidence: 90,
      confidenceRating: "High Evidence Alignment"
    },
    tkdl_ashwagandha: {
      answer: "In international patent examinations, TKDL disclosures for Withania somnifera are utilized by the EPO, USPTO, and Canadian CIPO under bilateral TKDL Access Agreements to issue third-party observations and novelty rejections against attempted patents on Ashwagandha extracts.",
      citations: [
        { title: "EPO-CSIR Bilateral Agreement on TKDL", authority: "European Patent Office / CSIR India", section: "Defensive Prior Art Protocol", date: "Bilateral Treaty", status: "Verified", text: "Examiners consult TKDL classification symbols to verify prior art before granting claims involving Indian medicinal plants." }
      ],
      confidence: 93,
      confidenceRating: "High Evidence Alignment"
    }
  }
};

function initializeAIAssistant() {
  const chatInput = document.getElementById('assistant-chat-input');
  const sendBtn = document.getElementById('assistant-send-btn');
  const clearBtn = document.getElementById('clear-chat-btn');
  const chatMicBtn = document.getElementById('chat-mic-btn');

  // 1. Send query triggers
  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', () => handleUserQuery(chatInput.value));
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleUserQuery(chatInput.value);
    });
  }

  // 2. Prompt chips click handler
  document.querySelectorAll('.prompt-chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-query');
      if (chatInput) chatInput.value = q;
      handleUserQuery(q);
    });
  });

  // 3. Clear Chat
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const pane = document.getElementById('chat-messages-container');
      if (pane) {
        pane.innerHTML = `
          <div class="chat-message-bubble assistant">
            <div class="chat-avatar">AI</div>
            <div class="chat-content-wrap">
              <div class="chat-bubble-text">
                <p style="font-weight: 600; margin-bottom: 4px;">Namaste! I am IP-SAKTI Sahayak.</p>
                <p>Chat history cleared. How can I assist your Ayurvedic intellectual property or regulatory research?</p>
              </div>
            </div>
          </div>`;
      }
      showToast('Conversation cleared', 'info');
    });
  }

  // 4. In-chat Mic Button
  if (chatMicBtn) {
    chatMicBtn.addEventListener('click', () => {
      const globalMic = document.getElementById('header-voice-btn');
      if (globalMic) globalMic.click();
    });
  }

  // 5. Update Framework sidebar when jurisdiction changes
  window.addEventListener('jurisdictionChanged', updateJurisdictionCard);
  updateJurisdictionCard();
}

function updateJurisdictionCard() {
  const jur = APP_STATE.jurisdiction || 'india';
  const nameEl = document.getElementById('side-jurisdiction-name');
  const descEl = document.getElementById('side-jurisdiction-desc');
  if (!nameEl || !descEl) return;

  if (jur === 'india') {
    nameEl.textContent = '🇮🇳 India Statutory Framework';
    descEl.textContent = 'Evaluating against Indian Patents Act 1970 (Sec 3(p)), Biological Diversity Act 2002, TKDL digital gazettes, and AYUSH regulatory orders.';
  } else {
    nameEl.textContent = '🌐 International Framework';
    descEl.textContent = 'Evaluating against WIPO PCT Rule 33, USPTO 35 U.S.C. 101/102, EPO Articles 54/56, and Nagoya Protocol ABS provisions.';
  }
}

function handleUserQuery(query) {
  if (!query || !query.trim()) return;
  const cleanQ = query.trim();
  const chatInput = document.getElementById('assistant-chat-input');
  if (chatInput) chatInput.value = '';

  // 1. Append User Message Bubble
  appendMessage('user', cleanQ);
  logAuditEvent('AI Assistant Query', cleanQ);

  // 2. Animate RAG Visual Pipeline
  const pipeline = document.getElementById('rag-pipeline-indicator');
  if (pipeline) {
    pipeline.style.display = 'block';
    animateRAGPipeline(() => {
      // 3. Generate Simulated RAG Response
      generateRAGResponse(cleanQ);
      pipeline.style.display = 'none';
    });
  } else {
    generateRAGResponse(cleanQ);
  }
}

function appendMessage(role, text, citations = null, isAbstention = false) {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-message-bubble ${role}`;

  let citationsHTML = '';
  if (citations && citations.length > 0) {
    citationsHTML = `
      <div class="chat-citations-wrapper">
        <div class="chat-citations-heading">Mandatory Verified Citations (${citations.length})</div>
        ${citations.map((c, i) => `
          <div class="chat-citation-card">
            <div class="citation-card-info">
              <span class="citation-card-title">${c.title} &mdash; ${c.section}</span>
              <span class="citation-card-meta">${c.authority} &bull; Status: <strong>${c.status}</strong></span>
            </div>
            <button class="citation-card-btn" onclick="openSourceModal('${encodeURIComponent(JSON.stringify(c))}')">
              View Source &rarr;
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }

  let actionsHTML = '';
  if (role === 'assistant') {
    actionsHTML = `
      <div class="chat-bubble-actions">
        <button class="chat-action-btn" onclick="navigator.clipboard.writeText('${text.replace(/'/g, "\\'")}'); showToast('Copied to clipboard', 'success');">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          Copy
        </button>
        <button class="chat-action-btn" onclick="speakText('${text.replace(/'/g, "\\'")}')">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          Read Aloud
        </button>
        ${isAbstention ? `<a href="human-expert.html" class="chat-action-btn" style="color:var(--color-primary); font-weight:600;">Escalate to Facilitator &rarr;</a>` : ''}
      </div>
    `;
  }

  bubble.innerHTML = `
    <div class="chat-avatar">${role === 'user' ? 'R' : 'AI'}</div>
    <div class="chat-content-wrap">
      <div class="chat-bubble-text">
        <p>${text}</p>
        ${citationsHTML}
      </div>
      ${actionsHTML}
    </div>
  `;

  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function animateRAGPipeline(callback) {
  const steps = ['step-query', 'step-jurisdiction', 'step-retrieval', 'step-ranking', 'step-synthesis', 'step-citation'];
  steps.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = 'rag-step-chip';
  });

  let i = 0;
  function nextStep() {
    if (i < steps.length) {
      const el = document.getElementById(steps[i]);
      if (el) {
        el.classList.add('active');
        setTimeout(() => {
          el.classList.remove('active');
          el.classList.add('done');
          i++;
          nextStep();
        }, 220);
      }
    } else {
      setTimeout(callback, 200);
    }
  }
  nextStep();
}

function generateRAGResponse(query) {
  const q = query.toLowerCase();
  const jur = APP_STATE.jurisdiction || 'india';
  const repo = AI_KNOWLEDGE_BASE[jur] || AI_KNOWLEDGE_BASE.india;

  let matched = null;
  let isAbstention = false;

  if (q.includes('what ip') || q.includes('protection') || q.includes('available')) {
    matched = repo.ip_protection;
  } else if (q.includes('traditional') || q.includes('patented') || q.includes('section 3(p)') || q.includes('alone')) {
    matched = repo.patent_traditional;
  } else if (q.includes('abs') || q.includes('biological resource') || q.includes('biodiversity') || q.includes('benefit sharing')) {
    matched = repo.abs_requirements;
  } else if (q.includes('ashwagandha') || q.includes('prior-art') || q.includes('prior art') || q.includes('tkdl')) {
    matched = repo.tkdl_ashwagandha;
  } else {
    // SAFE ABSTENTION RULE (Requirement 25)
    isAbstention = true;
    matched = {
      answer: "I don't have sufficient verified evidence in the indexed prototype corpus to provide a reliable legal conclusion for this specific inquiry. To avoid generating unverified statutory guidance, I am safely abstaining from answering. You may consult the authoritative Knowledge Corpus or escalate this inquiry to a registered Human IP Facilitator.",
      citations: [
        { title: "Statutory Caution Advisory", authority: "IP-SAKTI Prototype Governance", section: "Rule on Safe Abstention", date: "Current Guideline", status: "Review Required", text: "When source citations cannot be definitively verified against gazette notifications, the system must refrain from speculative extrapolation." }
      ],
      confidence: 42,
      confidenceRating: "Low Confidence (Safe Abstention)"
    };
  }

  // Update Confidence Gauge
  updateConfidenceMeter(matched.confidence, matched.confidenceRating);

  // Append Response
  appendMessage('assistant', matched.answer, matched.citations, isAbstention);
}

function updateConfidenceMeter(score, label) {
  const scoreText = document.getElementById('confidence-score-val');
  const labelText = document.getElementById('confidence-rating-label');
  const circleProgress = document.getElementById('confidence-circle-progress');

  if (scoreText) scoreText.textContent = `${score}%`;
  if (labelText) labelText.textContent = label;

  if (circleProgress) {
    // Circumference = 2 * PI * 45 = 283
    const offset = 283 - (283 * (score / 100));
    circleProgress.style.strokeDashoffset = offset;
    circleProgress.style.stroke = score >= 85 ? '#0D3B28' : score >= 65 ? '#D97706' : '#DC2626';
  }
}

function openSourceModal(citationJSON) {
  try {
    const citation = JSON.parse(decodeURIComponent(citationJSON));
    const modal = document.getElementById('source-modal');
    const title = document.getElementById('source-modal-title');
    const body = document.getElementById('source-modal-body');

    if (modal && title && body) {
      title.textContent = citation.title;
      body.innerHTML = `
        <div style="background: var(--bg-app); border: 1px solid var(--border-light); border-radius: var(--border-radius-md); padding: 14px; margin-bottom: 16px;">
          <div style="font-size: 0.76rem; font-weight: 700; color: var(--color-sage); text-transform: uppercase;">
            Authoritative Section &bull; ${citation.section}
          </div>
          <div style="font-size: 0.95rem; font-weight: 700; color: var(--color-primary); margin: 4px 0;">
            ${citation.title}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">
            Enacted by: ${citation.authority} &bull; Effective: ${citation.date}
          </div>
        </div>
        <div style="padding: 4px 0 14px 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
          <strong>Statutory Excerpt:</strong><br>
          <em>"${citation.text}"</em>
        </div>
        <div style="display: flex; gap: 8px; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
          <span class="status-badge verified">Verified Prototype Index</span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Gazette Indexed &bull; Ref: AYUSH-LEG-2024</span>
        </div>
      `;
      modal.classList.add('active');
    }
  } catch (err) {
    console.error('Error opening source modal:', err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAIAssistant);
} else {
  initializeAIAssistant();
}
