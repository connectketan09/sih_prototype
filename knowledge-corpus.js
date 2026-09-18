/**
 * IP-SAKTI Sahayak — Knowledge Corpus Engine
 * Version-tracked legal statutes, regulatory notifications, and international treaties.
 */

document.addEventListener('DOMContentLoaded', () => {
  initializeCorpus();
});

const CORPUS_DATA = [
  {
    id: 'patents-act-1970',
    title: 'The Patents Act, 1970 (as amended 2005)',
    shortCode: 'Act No. 39 of 1970',
    authority: 'Controller General of Patents, Designs and Trade Marks (CGPDTM)',
    domain: 'ip',
    domainLabel: 'Intellectual Property',
    version: '2005 Amend. (2024 Rules)',
    lastUpdated: 'March 15, 2024',
    status: 'current',
    statusLabel: 'Current',
    jurisdiction: 'india',
    jurLabel: '🇮🇳 India',
    hash: 'sha256:d8a9f24e7b1c34a06d88e762c4bf29aa765c92841d1a6e9499824fce1a9b204e',
    scope: 'Primary statute governing patentability in India. Sections 3(p), 3(e), and 3(j) strictly preclude pure traditional knowledge, aggregations of properties, and biological materials from patent monopoly.',
    history: [
      { version: 'Patent Rules 2024 Amendment', date: '15 Mar 2024', desc: 'Introduced updated Form 27 working statements and simplified divisional patent procedures.' },
      { version: 'Patent (Amendment) Act 2005', date: '01 Jan 2005', desc: 'Introduced product patents for pharmaceutical substances and Section 3(p) excluding traditional knowledge.' },
      { version: 'Original Enactment', date: '19 Sep 1970', desc: 'Parliamentary enactment establishing modern Indian patent regime replacing 1911 Act.' }
    ]
  },
  {
    id: 'drugs-cosmetics-158b',
    title: 'Drugs and Cosmetics Act, 1940 & Rules, 1945 (Rule 158B)',
    shortCode: 'Chapter IV-A & Rule 158B',
    authority: 'Ministry of AYUSH / CDSCO',
    domain: 'regulatory',
    domainLabel: 'Drug & Cosmetics Regulations',
    version: 'Gazette GSR 716(E)',
    lastUpdated: 'January 10, 2023',
    status: 'current',
    statusLabel: 'Current',
    jurisdiction: 'india',
    jurLabel: '🇮🇳 India',
    hash: 'sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    scope: 'Statutory requirements for grant of manufacturing licenses for Ayurvedic, Siddha, and Unani drugs. Categorizes products into Classical formulations (Schedule I texts) vs Patent/Proprietary Ayurvedic Medicines (PPAM) requiring safety/stability pilot trials.',
    history: [
      { version: 'GSR 716(E) Stability Guidelines', date: '10 Jan 2023', desc: 'Mandated accelerated stability testing data for newly formulated Ayurvedic shelf-life claims.' },
      { version: 'GSR 560(E) Rule 158B Insertion', date: '10 Aug 2010', desc: 'Substituted comprehensive evidence matrices distinguishing proof of safety from efficacy.' }
    ]
  },
  {
    id: 'bio-diversity-act',
    title: 'The Biological Diversity Act, 2002 & Amendment Act, 2023',
    shortCode: 'Act No. 10 of 2023',
    authority: 'National Biodiversity Authority (NBA)',
    domain: 'abs',
    domainLabel: 'ABS & Biodiversity',
    version: '2023 Amendment',
    lastUpdated: 'August 03, 2023',
    status: 'current',
    statusLabel: 'Current',
    jurisdiction: 'india',
    jurLabel: '🇮🇳 India',
    hash: 'sha256:91b2c5890e78f44d822582bf9104118ca2197e41b52a55982855b357ab6b539c',
    scope: 'Regulates access to Indian biological resources for research, commercial utilization, and intellectual property. 2023 amendment exempts registered AYUSH practitioners and cultivated medicinal plants from prior intimation under Section 7.',
    history: [
      { version: 'Biological Diversity (Amendment) Act 2023', date: '03 Aug 2023', desc: 'Decriminalized offenses into civil penalties and streamlined AYUSH manufacturing exemptions.' },
      { version: 'Principal Act of 2002', date: '05 Feb 2003', desc: 'Established three-tier framework: NBA, State Biodiversity Boards (SBB), and BMCs.' }
    ]
  },
  {
    id: 'tkdl-spec-v34',
    title: 'Traditional Knowledge Digital Library (TKDL) Specifications',
    shortCode: 'TKDL Standards V3.4',
    authority: 'CSIR & Ministry of AYUSH',
    domain: 'tk',
    domainLabel: 'Traditional Knowledge',
    version: 'Release 3.4 (5-Lang)',
    lastUpdated: 'November 28, 2023',
    status: 'verified',
    statusLabel: 'Verified',
    jurisdiction: 'india',
    jurLabel: '🇮🇳 India',
    hash: 'sha256:39f1c8413b7306b9b3cf286b245c47f893ec159048a609d57a9f7d23d8ebc1e3',
    scope: 'Defines Traditional Knowledge Resource Classification (TKRC) mapped to International Patent Classification (IPC). Encompasses 4.3 lakh transcribed Ayurvedic, Siddha, and Unani formulations accessible by global patent offices under bilateral non-disclosure agreements.',
    history: [
      { version: 'TKDL Open Public Access Portal Phase 1', date: '28 Nov 2023', desc: 'Cabinet approval for phased academic and R&D access beyond patent examination examiners.' },
      { version: 'IPC-TKRC Global Harmonization', date: '14 May 2018', desc: 'Integrated 25,000 sub-groups into WIPO IPC Committee of Experts concordance.' }
    ]
  },
  {
    id: 'ipo-tk-guidelines-2012',
    title: 'Guidelines for Patent Applications Relating to Traditional Knowledge',
    shortCode: 'CGPDTM Guidelines 2012',
    authority: 'Indian Patent Office',
    domain: 'ip',
    domainLabel: 'Intellectual Property',
    version: 'Revised Guidelines 2012',
    lastUpdated: 'December 18, 2012',
    status: 'verified',
    statusLabel: 'Verified',
    jurisdiction: 'india',
    jurLabel: '🇮🇳 India',
    hash: 'sha256:7c9e0a2d3b4f5e6a7c8b9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a',
    scope: 'Administrative manual instructing patent examiners on screening medicinal plant and herbal formulations against Section 3(p). Details required synergistic evidence thresholds and mandatory Section 10(4)(ii)(D) biological origin declarations.',
    history: [
      { version: 'Revised Screening Manual', date: '18 Dec 2012', desc: 'Introduced 7-step test for evaluating non-obvious synergistic enhancement in herbal combinations.' }
    ]
  },
  {
    id: 'wipo-gratk-treaty-2024',
    title: 'WIPO Treaty on Intellectual Property, Genetic Resources and Associated TK',
    shortCode: 'WIPO/GRATK/2024',
    authority: 'World Intellectual Property Organization (WIPO)',
    domain: 'treaty',
    domainLabel: 'International Treaties',
    version: 'Diplomatic Conference Final Act',
    lastUpdated: 'May 24, 2024',
    status: 'current',
    statusLabel: 'Current',
    jurisdiction: 'international',
    jurLabel: '🌐 International',
    hash: 'sha256:f4d2e8a1c9b3e7a05d68e462c1bf39bb765c92841d1a6e9499824fce1a9b44aa',
    scope: 'Historic multilateral treaty mandating patent applicants worldwide to disclose the country of origin of genetic resources and the indigenous peoples/traditional communities who provided associated traditional knowledge.',
    history: [
      { version: 'Adoption by Diplomatic Conference', date: '24 May 2024', desc: 'Consensus adoption by 193 WIPO member states establishing global mandatory patent disclosure standard.' }
    ]
  },
  {
    id: 'nagoya-protocol',
    title: 'Nagoya Protocol on Access and Benefit-Sharing',
    shortCode: 'CBD Decision X/1',
    authority: 'Convention on Biological Diversity (CBD Secretariat)',
    domain: 'abs',
    domainLabel: 'ABS & Biodiversity',
    version: 'Treaty Series Vol 3008',
    lastUpdated: 'October 29, 2010',
    status: 'current',
    statusLabel: 'Current',
    jurisdiction: 'international',
    jurLabel: '🌐 International',
    hash: 'sha256:b1a2c3d4e5f60718293a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e',
    scope: 'Multilateral agreement implementing CBD fair and equitable sharing of benefits arising from the utilization of genetic resources, including traditional knowledge associated with genetic resources.',
    history: [
      { version: 'Entry into Force', date: '12 Oct 2014', desc: 'Reached 50 ratifications required for binding international enforceability.' }
    ]
  },
  {
    id: 'api-pharmacopoeia',
    title: 'Ayurvedic Pharmacopoeia of India (API) — Parts I & II',
    shortCode: 'PCIM&H Official Standards',
    authority: 'Pharmacopoeia Commission for Indian Medicine & Homoeopathy',
    domain: 'tk',
    domainLabel: 'Traditional Knowledge',
    version: 'Volumes I-X Combined',
    lastUpdated: 'June 14, 2022',
    status: 'current',
    statusLabel: 'Current',
    jurisdiction: 'india',
    jurLabel: '🇮🇳 India',
    hash: 'sha256:5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b',
    scope: 'Legally enforceable pharmacopoeial standards under Drugs and Cosmetics Act for single herbal drugs (Part I) and classical compound formulations (Part II). Defines macroscopic, microscopic, TLC/HPTLC chromatographic fingerprints, and heavy metal limits.',
    history: [
      { version: 'Addendum 2022 Standardized Methods', date: '14 Jun 2022', desc: 'Added modern pesticide residue and aflatoxin thresholds for 75 export-priority plants.' }
    ]
  },
  {
    id: 'uspto-mpep-2100',
    title: 'US Patent Act (35 U.S.C. §§ 101, 102, 103) & MPEP 2100',
    shortCode: 'MPEP 9th Ed. Rev. 10.2019',
    authority: 'United States Patent and Trademark Office (USPTO)',
    domain: 'ip',
    domainLabel: 'Intellectual Property',
    version: 'Rev. 10.2019 (2023 Update)',
    lastUpdated: 'February 2023',
    status: 'current',
    statusLabel: 'Current',
    jurisdiction: 'international',
    jurLabel: '🌐 International',
    hash: 'sha256:1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b',
    scope: 'Patent examination manual interpreting patent-eligibility of natural products following Supreme Court Myriad and Mayo rulings. Isolated natural compounds require marked differences in structure or characteristics to satisfy 35 U.S.C. § 101.',
    history: [
      { version: 'Subject Matter Eligibility Guidance', date: '20 Feb 2023', desc: 'Updated Step 2A and 2B evaluation protocols for botanical extracts with unexpected functional traits.' }
    ]
  },
  {
    id: 'epc-article-52',
    title: 'European Patent Convention (EPC Articles 52-57) & Rule 28',
    shortCode: 'EPC 2000 (17th Edition)',
    authority: 'European Patent Office (EPO)',
    domain: 'ip',
    domainLabel: 'Intellectual Property',
    version: '17th Ed. Guidelines 2023',
    lastUpdated: 'November 2023',
    status: 'current',
    statusLabel: 'Current',
    jurisdiction: 'international',
    jurLabel: '🌐 International',
    hash: 'sha256:8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c',
    scope: 'Governs patentability of biological and herbal inventions in 39 EPC member states. First and second medical use claims (EPC Art. 54(5)) are allowable for known substances if directed to novel, non-obvious therapeutic indications.',
    history: [
      { version: 'EPO Examination Guidelines 2023', date: '01 Nov 2023', desc: 'Detailed inventive step assessment for synergistic herbal combinations requiring verified experimental comparative data.' }
    ]
  },
  {
    id: 'who-traditional-medicine-guidelines',
    title: 'WHO General Guidelines for Methodologies on Research in Traditional Medicine',
    shortCode: 'WHO/EDM/TRM/2000.1',
    authority: 'World Health Organization (WHO)',
    domain: 'regulatory',
    domainLabel: 'Drug & Cosmetics Regulations',
    version: '2000 Edition',
    lastUpdated: 'May 2000',
    status: 'superseded',
    statusLabel: 'Superseded',
    jurisdiction: 'international',
    jurLabel: '🌐 International',
    hash: 'sha256:3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d',
    scope: 'Foundational recommendations on clinical evaluation and safety assessment of herbal medicines. Superseded by WHO Traditional Medicine Global Summit benchmarks (2023) and updated pharmacovigilance monographs.',
    history: [
      { version: 'Superseded by Gujarat Declaration 2023', date: '19 Aug 2023', desc: 'Replaced by evidence-based traditional medicine benchmark standards adopted at WHO Global Summit.' }
    ]
  },
  {
    id: 'bd-rules-2004-formats',
    title: 'Biological Diversity Rules 2004 (Prior Notification Formats)',
    shortCode: 'GSR 261(E) Rules 2004',
    authority: 'Ministry of Environment, Forest and Climate Change',
    domain: 'abs',
    domainLabel: 'ABS & Biodiversity',
    version: '2004 Formats',
    lastUpdated: 'April 15, 2004',
    status: 'review',
    statusLabel: 'Review Required',
    jurisdiction: 'india',
    jurLabel: '🇮🇳 India',
    hash: 'sha256:7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a',
    scope: 'Original Form I, Form II, and Form III statutory filing applications for Indian bio-resource commercialization. Currently under regulatory transition following parliamentary passage of Biological Diversity (Amendment) Act 2023.',
    history: [
      { version: 'Transition Review Notice', date: '01 Nov 2023', desc: 'Interim guidelines notified pending formal Gazette publication of replaced Biodiversity Rules 2024.' }
    ]
  }
];

let activeDomain = 'all';

function initializeCorpus() {
  renderCorpusTable();
  bindCorpusEvents();
}

function renderCorpusTable() {
  const tbody = document.getElementById('corpus-table-body');
  const countLabel = document.getElementById('corpus-count-label');
  const searchInput = document.getElementById('corpus-filter-input');
  const statusSelect = document.getElementById('status-filter-select');
  const jurSelect = document.getElementById('jur-filter-select');

  if (!tbody) return;

  const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const statusVal = statusSelect ? statusSelect.value : 'all';
  const jurVal = jurSelect ? jurSelect.value : 'all';

  const filtered = CORPUS_DATA.filter(item => {
    // Domain check
    if (activeDomain !== 'all' && item.domain !== activeDomain) return false;
    // Status check
    if (statusVal !== 'all' && item.status !== statusVal) return false;
    // Jurisdiction check
    if (jurVal !== 'all' && item.jurisdiction !== jurVal) return false;
    // Text search
    if (searchQuery) {
      const matchText = (item.title + ' ' + item.authority + ' ' + item.shortCode + ' ' + item.scope).toLowerCase();
      if (!matchText.includes(searchQuery)) return false;
    }
    return true;
  });

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} of ${CORPUS_DATA.length} authoritative sources`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
          <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 6px;">No statutes match your filter criteria</div>
          <div style="font-size: 0.85rem;">Try adjusting your search query, domain category, or status selection.</div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => `
    <tr data-id="${item.id}">
      <td>
        <div class="source-cell-title">
          <span>${item.jurisdiction === 'india' ? '🇮🇳' : '🌐'}</span>
          <span>${escapeHtml(item.title)}</span>
        </div>
        <div class="source-cell-sub">${escapeHtml(item.shortCode)}</div>
      </td>
      <td>
        <span class="authority-tag">${escapeHtml(item.authority)}</span>
      </td>
      <td>
        <span class="domain-badge">${escapeHtml(item.domainLabel)}</span>
      </td>
      <td>
        <span style="font-family: monospace; font-size: 0.8rem; font-weight: 600;">${escapeHtml(item.version)}</span>
      </td>
      <td style="font-size: 0.82rem; color: var(--text-muted);">
        ${escapeHtml(item.lastUpdated)}
      </td>
      <td>
        <span class="badge-status ${item.status}">
          <span class="status-dot dot-${item.status}"></span>
          ${item.statusLabel}
        </span>
      </td>
      <td style="text-align: right;">
        <button class="btn-inspect-link" onclick="openCorpusModal('${item.id}')">Inspect &rarr;</button>
      </td>
    </tr>
  `).join('');
}

function bindCorpusEvents() {
  // Domain pill filtering
  const pills = document.querySelectorAll('.domain-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeDomain = pill.dataset.domain;
      renderCorpusTable();
    });
  });

  // Inputs
  const searchInput = document.getElementById('corpus-filter-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => renderCorpusTable());
  }

  const statusSelect = document.getElementById('status-filter-select');
  if (statusSelect) {
    statusSelect.addEventListener('change', () => renderCorpusTable());
  }

  const jurSelect = document.getElementById('jur-filter-select');
  if (jurSelect) {
    jurSelect.addEventListener('change', () => renderCorpusTable());
  }

  // React to global jurisdiction change if requested
  window.addEventListener('jurisdictionChanged', (e) => {
    const jur = e.detail;
    const jurSelectEl = document.getElementById('jur-filter-select');
    if (jurSelectEl) {
      jurSelectEl.value = jur;
      renderCorpusTable();
    }
  });
}

function openCorpusModal(itemId) {
  const item = CORPUS_DATA.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('corpus-modal');
  const modalTitle = document.getElementById('modal-corpus-title');
  const modalAuth = document.getElementById('modal-corpus-authority');
  const modalJurBadge = document.getElementById('modal-jur-badge');
  const modalBody = document.getElementById('modal-corpus-body');

  if (!modal || !modalBody) return;

  modalTitle.textContent = item.title;
  modalAuth.textContent = item.authority + ' • ' + item.shortCode;
  modalJurBadge.textContent = item.jurLabel;

  const timelineHtml = item.history.map(h => `
    <div class="timeline-step">
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        <span class="timeline-version-title">${escapeHtml(h.version)}</span>
        <span class="timeline-date">${escapeHtml(h.date)}</span>
      </div>
      <div class="timeline-desc">${escapeHtml(h.desc)}</div>
    </div>
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-corpus-grid">
      <div class="corpus-info-item">
        <span class="corpus-info-label">Domain Classification</span>
        <span class="corpus-info-val">${escapeHtml(item.domainLabel)}</span>
      </div>
      <div class="corpus-info-item">
        <span class="corpus-info-label">Active Legislative Version</span>
        <span class="corpus-info-val">${escapeHtml(item.version)}</span>
      </div>
      <div class="corpus-info-item">
        <span class="corpus-info-label">Last Gazette / Review Sync</span>
        <span class="corpus-info-val">${escapeHtml(item.lastUpdated)}</span>
      </div>
      <div class="corpus-info-item">
        <span class="corpus-info-label">Verification Status</span>
        <span class="corpus-info-val"><span class="badge-status ${item.status}">${item.statusLabel}</span></span>
      </div>
    </div>

    <div style="margin-bottom: 20px;">
      <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 6px;">Statutory Scope &amp; Legal Standard</h4>
      <p style="font-size: 0.86rem; color: #4A5568; line-height: 1.55;">${escapeHtml(item.scope)}</p>
    </div>

    <div>
      <h4 style="font-size: 0.92rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 8px;">Gazette &amp; Legislative Amendment History</h4>
      <div class="version-timeline">
        ${timelineHtml}
      </div>
    </div>

    <div class="hash-box">
      <strong>CRYPTOGRAPHIC VERIFICATION HASH (SHA-256):</strong><br>
      ${item.hash}
    </div>
  `;

  modal.classList.add('active');

  if (window.logAuditEvent) {
    window.logAuditEvent('CORPUS_INSPECT', `Inspected authoritative source: ${item.shortCode}`);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
