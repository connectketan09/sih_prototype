/**
 * Page Logic: ip-regulatory-guidance.js
 */

const IP_DOMAINS_DATA = [
  {
    id: "patents",
    title: "Patents",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    authorityIndia: "Indian Patent Office (CGPDTM)",
    authorityIntl: "WIPO / PCT / USPTO / EPO",
    summary: "Protection for novel and inventive processes, synergistic compositions, and delivery formulations. Strict Section 3(p) non-patentability bars classical herbal mixtures.",
    eligibility: "Must satisfy Novelty (Section 2(1)(j)), Inventive Step (unexpected synergy), and Industrial Applicability. Traditional recipes are excluded under Section 3(p).",
    ayurvedaRelevance: "Critical for modernizing Ayurveda: enables protection of proprietary hydro-alcoholic fractions, nano-emulsions, and bio-enhancer synergistic ratios (e.g. piperine combinations).",
    indiaPathway: "File provisional/complete specification with Form 1 and Form 2 at Indian Patent Office. Mandatory Form III filing with National Biodiversity Authority (NBA) if utilizing Indian biological resources. Address Section 3(p) and 3(e) prior-art objections with quantitative synergistic evidence.",
    intlPathway: "File international PCT application designating target member states within 12 months of priority date. Satisfy USPTO 35 U.S.C. 101/102 non-naturally occurring criteria or EPO Article 56 inventive step hurdles against TKDL prior-art citations.",
    citations: "Indian Patents Act 1970 Sec 3(p), Sec 3(e); Biological Diversity Act 2002 Sec 6; PCT Rule 33.1.",
    confidence: 95
  },
  {
    id: "gi",
    title: "Geographical Indications (GI)",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    authorityIndia: "GI Registry, Chennai (CGPDTM)",
    authorityIntl: "WIPO Lisbon System & TRIPS",
    summary: "Protects Ayurvedic herbs, traditional formulations, and botanical products originating from a specific geographic region with unique environmental qualities.",
    eligibility: "Requires proving that reputation, quality, or characteristics are attributable exclusively to the geographic origin and human heritage of the territory.",
    ayurvedaRelevance: "Vital for indigenous medicinal plants and preparations: e.g. Malabar Pepper, Navara Rice (Ayurvedic Panchakarma), Alleppey Green Cardamom, and Coorg Green Cardamom.",
    indiaPathway: "Submit Form GI-1 with applicant association of producers, statement of case, historical evidence from ancient treatises, and geographical map to the GI Registry in Chennai under the GI Act, 1999.",
    intlPathway: "Seek protection through bilateral trade agreements or through international registration under the Geneva Act of the Lisbon Agreement on Appellations of Origin.",
    citations: "Geographical Indications of Goods (Registration and Protection) Act, 1999; TRIPS Agreement Article 22-24.",
    confidence: 92
  },
  {
    id: "trademarks",
    title: "Trademarks",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8M12 8v8"></path></svg>`,
    authorityIndia: "Trade Marks Registry, CGPDTM",
    authorityIntl: "WIPO Madrid System",
    summary: "Secures distinctive brand names, logos, slogans, and product packaging aesthetics in Class 5 (Medicinal preparations) and Class 3 (Herbal cosmetics).",
    eligibility: "Must be distinctive and capable of distinguishing goods. Cannot be merely descriptive of herbal ingredients (e.g. cannot trademark generic 'Ashwagandha Churna').",
    ayurvedaRelevance: "The most powerful commercial asset for Ayurvedic companies: allows establishing consumer trust and brand exclusivity while classical formulations remain open in the public domain.",
    indiaPathway: "File online Form TM-A with Trade Marks Registry under Class 5. Conduct prior-clearing trademark search to avoid deceptive similarity with registered pharmaceutical trademarks.",
    intlPathway: "File an international application under the Madrid Protocol via the Indian Trade Marks Registry to obtain reciprocal brand protection across 130+ member countries.",
    citations: "Trade Marks Act, 1999; Nice Classification (Class 5 & Class 3); Madrid Protocol.",
    confidence: 96
  },
  {
    id: "copyright",
    title: "Copyright",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path></svg>`,
    authorityIndia: "Copyright Office, Department for Promotion of Industry and Internal Trade",
    authorityIntl: "Berne Convention / WIPO Copyright Treaty",
    summary: "Protects original literary and scientific expressions: modern commentary on ancient Ayurvedic treatises, clinical trial manuals, proprietary software algorithms, and dosage databases.",
    eligibility: "Original expression fixed in a tangible medium. Ideas, classical treatise Sanskrit texts, and raw biological facts cannot be copyrighted.",
    ayurvedaRelevance: "Protects digital health apps, automated Prakriti diagnostic tools, proprietary clinical study dossiers, and educational training materials in Ayurveda.",
    indiaPathway: "Register work through Form XIV with the Copyright Office. Provide copies of original text, code, or documentation. Protection extends for author's lifetime plus 60 years.",
    intlPathway: "Automatic reciprocal copyright protection across 180+ countries under the Berne Convention without mandatory local re-registration.",
    citations: "Copyright Act, 1957 (amended 2012); Berne Convention for the Protection of Literary and Artistic Works.",
    confidence: 90
  },
  {
    id: "designs",
    title: "Industrial Designs",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    authorityIndia: "Design Wing, Patent Office Kolkata",
    authorityIntl: "WIPO Hague Agreement",
    summary: "Protects unique aesthetic visual features: novel packaging bottles, Ayurvedic therapeutic apparatus (e.g. specialized Shirodhara pots, Panchakarma tables, mist dispensers).",
    eligibility: "Must be new or original in shape, configuration, pattern, or ornamentation. Cannot protect functional mechanical principles.",
    ayurvedaRelevance: "Differentiates consumer herbal products on retail shelves and secures ergonomic designs of clinical Panchakarma treatment equipment.",
    indiaPathway: "Submit Form 1 with representation sheets (orthographic views) to the Patent Office Design Wing in Kolkata under the Designs Act, 2000. Grants initial protection for 10 years, renewable for 5 years.",
    intlPathway: "Utilize the Hague System for the International Registration of Industrial Designs to secure multi-country design rights with a single international filing.",
    citations: "Designs Act, 2000; Locarno Classification for Industrial Designs.",
    confidence: 88
  },
  {
    id: "tradesecrets",
    title: "Trade Secrets",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    authorityIndia: "Common Law / Indian Contract Act, 1872",
    authorityIntl: "TRIPS Article 39 / Defend Trade Secrets Act",
    summary: "Protects confidential business information: secret ingredient blending ratios, proprietary microbial fermentation starter cultures, and optimized temperature heating profiles.",
    eligibility: "Must possess commercial value from being secret and be subject to reasonable efforts by the company to maintain confidentiality.",
    ayurvedaRelevance: "Often superior to patents for manufacturing techniques (e.g. Asava/Arishta bio-fermentation cultures) where patent disclosure would surrender proprietary know-how without reliable enforcement.",
    indiaPathway: "Protected under common law of breach of confidence and Indian Contract Act, 1872 (Section 27). Maintain non-disclosure agreements (NDAs), non-compete clauses, and segmented cleanroom manufacturing access.",
    intlPathway: "Enforced under TRIPS Article 39 (Undisclosed Information) and national trade secret statutes such as the US Defend Trade Secrets Act (DTSA) and EU Trade Secrets Directive.",
    citations: "Indian Contract Act, 1872; TRIPS Agreement Article 39 (Protection of Undisclosed Information).",
    confidence: 85
  },
  {
    id: "plantvariety",
    title: "Plant Variety Rights (PPV&FR)",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>`,
    authorityIndia: "PPV&FR Authority, New Delhi",
    authorityIntl: "UPOV Convention",
    summary: "Protects newly bred, distinct varieties of medicinal plants with standardized alkaloid yields or enhanced agronomic resilience.",
    eligibility: "Must satisfy DUS criteria: Distinctness, Uniformity, and Stability, plus Novelty for new commercial varieties.",
    ayurvedaRelevance: "Enables breeders and herbal universities to protect elite germplasm of Withania somnifera, Rauvolfia serpentina, or Ocimum sanctum with guaranteed bioactive constituent levels.",
    indiaPathway: "File application with PPV&FR Authority under the Protection of Plant Varieties and Farmers' Rights Act, 2001. Provides unique recognition of Farmers' Rights and benefit-sharing for traditional agro-communities.",
    intlPathway: "File for Plant Breeder's Rights (PBR) in member states of the International Union for the Protection of New Varieties of Plants (UPOV Convention).",
    citations: "Protection of Plant Varieties and Farmers' Rights Act, 2001; UPOV 1991 Act.",
    confidence: 89
  },
  {
    id: "tk_protection",
    title: "Traditional Knowledge (TKDL)",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    authorityIndia: "CSIR & Ministry of AYUSH",
    authorityIntl: "WIPO IGC on Genetic Resources & TK",
    summary: "Defensive and positive protection of millennia-old Ayurvedic medical heritage against biopiracy and unauthorized commercial monopolization.",
    eligibility: "Codified classical medical treatises dating back centuries (Charaka, Sushruta, Vagbhata, Siddha texts, Unani pharmacopoeias).",
    ayurvedaRelevance: "Defends 4.5+ lakh classical formulations translated into 5 international languages (English, German, French, Japanese, Spanish) accessible to global patent examiners.",
    indiaPathway: "Defended primarily through the Traditional Knowledge Digital Library (TKDL) and statutory exclusions like Section 3(p) of the Patents Act and Section 7/24 of the Biological Diversity Act.",
    intlPathway: "International Access Agreements between CSIR India and major patent offices (EPO, USPTO, JPO, CIPO, IP Australia) to ensure prior art citations prevent erroneous patents.",
    citations: "CSIR TKDL Registry; Biological Diversity Act 2002; WIPO/GRTKF/IC Treaty Negotiations.",
    confidence: 96
  }
];

function initializeIPGuidancePage() {
  renderIPCards();
  window.addEventListener('jurisdictionChanged', renderIPCards);
}

function renderIPCards() {
  const container = document.getElementById('ip-cards-container');
  if (!container) return;

  const jur = APP_STATE.jurisdiction || 'india';

  container.innerHTML = IP_DOMAINS_DATA.map(item => `
    <div class="ip-category-card" onclick="openIPDetailModal('${item.id}')">
      <div>
        <div class="ip-card-icon">${item.icon}</div>
        <h3 class="ip-card-title">${item.title}</h3>
        <div class="ip-card-authority">
          ${jur === 'india' ? item.authorityIndia : item.authorityIntl}
        </div>
        <p class="ip-card-summary">${item.summary}</p>
      </div>
      <div class="ip-card-btn-row">
        <span class="ip-card-link-text">Explore Guidance</span>
        <span style="color: var(--color-primary); font-weight: 700;">&rarr;</span>
      </div>
    </div>
  `).join('');
}

function openIPDetailModal(domainId) {
  const item = IP_DOMAINS_DATA.find(d => d.id === domainId);
  if (!item) return;

  const modal = document.getElementById('ip-detail-modal');
  const title = document.getElementById('ip-modal-title');
  const body = document.getElementById('ip-modal-body');
  const askBtn = document.getElementById('ip-modal-query-btn');
  const jur = APP_STATE.jurisdiction || 'india';

  if (modal && title && body) {
    title.textContent = `${item.title} — Intellectual Property Guidance`;
    body.innerHTML = `
      <div style="background: var(--bg-app); border: 1px solid var(--border-light); border-radius: var(--border-radius-md); padding: 14px; margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-size: 0.74rem; font-weight: 700; color: var(--color-sage); text-transform: uppercase;">
            ${jur === 'india' ? '🇮🇳 India Statutory Pathway' : '🌐 International Pathway'}
          </span>
          <span class="status-badge verified">Confidence: ${item.confidence}%</span>
        </div>
        <div style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary);">
          ${jur === 'india' ? item.authorityIndia : item.authorityIntl}
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.86rem; line-height: 1.55;">
        <div>
          <strong style="color: var(--color-primary);">Eligibility &amp; Statutory Criteria:</strong>
          <p style="color: var(--text-secondary); margin-top: 2px;">${item.eligibility}</p>
        </div>

        <div>
          <strong style="color: var(--color-primary);">Ayurveda &amp; Herbal Industry Relevance:</strong>
          <p style="color: var(--text-secondary); margin-top: 2px;">${item.ayurvedaRelevance}</p>
        </div>

        <div style="background: ${jur === 'india' ? '#EFF7F1' : '#EFF6FF'}; border-left: 3px solid ${jur === 'india' ? '#176B36' : '#1E40AF'}; padding: 10px 14px; border-radius: 4px;">
          <strong style="color: ${jur === 'india' ? '#176B36' : '#1E40AF'};">
            ${jur === 'india' ? '🇮🇳 Recommended India Filing Procedure:' : '🌐 Recommended International Procedure:'}
          </strong>
          <p style="color: var(--text-primary); margin-top: 4px;">
            ${jur === 'india' ? item.indiaPathway : item.intlPathway}
          </p>
        </div>

        <div>
          <strong style="color: var(--text-muted); font-size: 0.78rem; text-transform: uppercase;">Authoritative References:</strong>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${item.citations}</p>
        </div>
      </div>
    `;

    if (askBtn) {
      askBtn.onclick = () => {
        window.location.href = `ai-assistant.html?q=${encodeURIComponent(`What are the requirements for ${item.title} in Ayurveda?`)}`;
      };
    }

    modal.classList.add('active');
    logAuditEvent('IP Guidance Viewed', `Explored ${item.title} guidance under ${jur.toUpperCase()}`);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeIPGuidancePage);
} else {
  initializeIPGuidancePage();
}
