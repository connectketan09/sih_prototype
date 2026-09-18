/**
 * Page Logic: tkdl-prior-art.js
 */

const TKDL_DATABASE = [
  {
    id: "TKDL-AYU-2024-891",
    title: "Ashwagandhadya Ghrita (Withania somnifera compound in Medicated Ghee)",
    treatise: "Charaka Samhita &bull; Chikitsa Sthana (Rasayanadhyaya, Verse 88-92)",
    plant: "Withania somnifera (Ashwagandha)",
    preparation: "Ghrita (Lipid infusion)",
    indication: "Medhya Rasayana (Cognitive enhancer & adaptogenic tonic)",
    ipcCode: "A61K 36/81 (Withania), A61P 25/28",
    similarity: "94% Match",
    jurisdiction: "India / International Prior Art",
    status: "Verified Prior Art",
    excerpt: "अश्वगन्धा घृतं मेध्यं बल्यं रसायनमुत्तमम्... (Charaka Samhita). Formulated by simmering Withania somnifera decoction and paste in pure cow ghee for cognitive rejuvenation and physical stamina.",
    citationsCount: 14
  },
  {
    id: "TKDL-AYU-2024-412",
    title: "Brahmi Ghrita (Bacopa monnieri Memory Formulation)",
    treatise: "Astanga Hridaya &bull; Uttarasthana (Unmada Pratishedha, Verse 23-26)",
    plant: "Bacopa monnieri (Brahmi)",
    preparation: "Ghrita (Medicated clarified butter)",
    indication: "Smriti Vardhaka (Memory vitalizer, neuro-protection)",
    ipcCode: "A61K 36/68, A61P 25/00",
    similarity: "91% Match",
    jurisdiction: "India / International Prior Art",
    status: "Verified Prior Art",
    excerpt: "ब्राह्मीघृतं स्मृतिकरं मेधावर्धकमुत्तमम्... Indicated for memory enhancement, concentration disorders, and emotional stabilization.",
    citationsCount: 22
  },
  {
    id: "TKDL-AYU-2024-105",
    title: "Haridra Khanda (Curcuma longa Anti-Allergic Granules)",
    treatise: "Bhavaprakasha Nighantu &bull; Madhyama Khanda (Sheetapitta Udarda Adhikara)",
    plant: "Curcuma longa (Haridra)",
    preparation: "Khanda (Confectionery / Granules)",
    indication: "Shotha & Sheetapitta (Anti-allergic, anti-inflammatory)",
    ipcCode: "A61K 36/9066, A61P 29/00",
    similarity: "96% Match",
    jurisdiction: "India / International Prior Art",
    status: "Verified Prior Art",
    excerpt: "हरिद्रा खण्ड संयुक्तं शमयेत् सर्व वातपित्त शोथम्... Classical formulation combining Curcuma longa with milk, ghee, and warming spices for allergic dermatoses.",
    citationsCount: 38
  },
  {
    id: "TKDL-AYU-2024-633",
    title: "Nimba Taila (Azadirachta indica Medicated Oil)",
    treatise: "Sushruta Samhita &bull; Chikitsa Sthana (Kushtha Chikitsitam, Verse 14-17)",
    plant: "Azadirachta indica (Neem)",
    preparation: "Taila (Medicated Sesame Oil)",
    indication: "Krimighna & Kushthahara (Antimicrobial & dermatological cleanser)",
    ipcCode: "A61K 36/58, A61P 31/04",
    similarity: "88% Match",
    jurisdiction: "India / International Prior Art",
    status: "Verified Prior Art",
    excerpt: "निम्ब तैलं कृमिहरं कुष्ठनाशनमुत्तमम्... Formulated from Azadirachta indica seed oil processed with decoction of bitter bark for resistant skin conditions.",
    citationsCount: 19
  },
  {
    id: "TKDL-AYU-2024-340",
    title: "Yogaraja Guggulu (Commiphora mukul Joint Resilience Tablet)",
    treatise: "Bhaishajya Ratnavali &bull; Vatavyadhi Chikitsa (Verse 89-94)",
    plant: "Commiphora mukul (Guggulu)",
    preparation: "Vati / Guggulu (Oleoresin tablets)",
    indication: "Vatavyadhi & Sandhivata (Osteoarthritis & anti-inflammatory)",
    ipcCode: "A61K 36/328, A61P 19/02",
    similarity: "92% Match",
    jurisdiction: "India / International Prior Art",
    status: "Verified Prior Art",
    excerpt: "योगराज गुग्गुलुः श्रेष्ठः सर्ववातविकारनुत्... Commiphora mukul purified with Triphala decoction for chronic joint stiffness and musculoskeletal disorders.",
    citationsCount: 29
  },
  {
    id: "TKDL-AYU-2024-772",
    title: "Triphala Churna (Three Myrobalans Digestive Formulation)",
    treatise: "Charaka Samhita &bull; Sutrasthana (Annapanavidhi Adhyaya, Verse 42)",
    plant: "Terminalia chebula, Terminalia bellirica, Emblica officinalis",
    preparation: "Churna (Fine powdered mixture)",
    indication: "Deepana, Pachana, Rasayana (Antioxidant digestive & metabolic tonic)",
    ipcCode: "A61K 36/185, A61P 1/00",
    similarity: "95% Match",
    jurisdiction: "India / International Prior Art",
    status: "Verified Prior Art",
    excerpt: "त्रिफला सर्व रोगाणां प्रशमनी परमा हिता... Equal proportions of Haritaki, Bibhitaki, and Amalaki used as an ocular, metabolic, and systemic Rasayana.",
    citationsCount: 51
  }
];

function initializeTKDLPage() {
  renderTKDLResults(TKDL_DATABASE);

  const searchInput = document.getElementById('tkdl-search-input');
  const searchBtn = document.getElementById('tkdl-search-btn');
  const categoryFilter = document.getElementById('tkdl-filter-category');
  const useFilter = document.getElementById('tkdl-filter-use');

  function triggerSearch() {
    const q = searchInput?.value.trim().toLowerCase() || '';
    const cat = categoryFilter?.value || 'all';
    const use = useFilter?.value || 'all';

    const filtered = TKDL_DATABASE.filter(item => {
      const matchText = !q || item.title.toLowerCase().includes(q) || item.plant.toLowerCase().includes(q) || item.indication.toLowerCase().includes(q);
      const matchCat = cat === 'all' || item.treatise.toLowerCase().includes(cat);
      const matchUse = use === 'all' || item.indication.toLowerCase().includes(use);
      return matchText && matchCat && matchUse;
    });

    renderTKDLResults(filtered);
    showToast(`Found ${filtered.length} prior-art references`, 'info');
    logAuditEvent('TKDL Search', `Queried TKDL for "${q || 'All'}"`);
  }

  if (searchBtn) searchBtn.addEventListener('click', triggerSearch);
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') triggerSearch();
    });
  }
  if (categoryFilter) categoryFilter.addEventListener('change', triggerSearch);
  if (useFilter) useFilter.addEventListener('change', triggerSearch);
}

function renderTKDLResults(results) {
  const container = document.getElementById('tkdl-results-list');
  if (!container) return;

  if (results.length === 0) {
    container.innerHTML = `
      <div style="background:#fff; border:1px solid var(--border-light); border-radius:var(--border-radius-lg); padding:32px; text-align:center;">
        <h4 style="color:var(--color-primary); margin-bottom:6px;">No Prior Art Found</h4>
        <p style="font-size:0.84rem; color:var(--text-muted);">Try relaxing your filter parameters or searching for botanical names like <em>Withania</em> or <em>Curcuma</em>.</p>
      </div>`;
    return;
  }

  container.innerHTML = results.map(item => `
    <div class="tkdl-result-card">
      <div class="tkdl-card-header">
        <span class="tkdl-ref-id">${item.id}</span>
        <span class="tkdl-similarity-badge">${item.similarity}</span>
      </div>
      <h3 class="tkdl-source-title">${item.title}</h3>
      <div class="tkdl-source-ancient">${item.treatise}</div>
      <div class="tkdl-details-row">
        <div><strong>Primary Plant:</strong><br>${item.plant}</div>
        <div><strong>Dosage Form:</strong><br>${item.preparation}</div>
        <div><strong>Documented Use:</strong><br>${item.indication}</div>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:14px; border-top:1px solid var(--border-subtle); padding-top:10px;">
        <div style="font-size:0.75rem; color:var(--text-muted);">
          IPC Symbol: <code>${item.ipcCode}</code> &bull; Patent Citations: ${item.citationsCount}
        </div>
        <button class="btn-secondary-pill" style="font-size:0.78rem; padding:6px 14px;" onclick="openTKDLDetailModal('${item.id}')">
          View Treatise Excerpt &rarr;
        </button>
      </div>
    </div>
  `).join('');
}

function openTKDLDetailModal(refId) {
  const item = TKDL_DATABASE.find(r => r.id === refId);
  if (!item) return;

  const modal = document.getElementById('source-modal');
  const title = document.getElementById('source-modal-title');
  const body = document.getElementById('source-modal-body');

  if (modal && title && body) {
    title.textContent = `TKDL Prior-Art: ${item.id}`;
    body.innerHTML = `
      <div style="background:var(--bg-app); border:1px solid var(--border-light); border-radius:var(--border-radius-md); padding:14px; margin-bottom:14px;">
        <div style="font-size:0.75rem; font-weight:700; color:var(--color-sage); text-transform:uppercase;">
          Classical Treatise Source &bull; ${item.treatise}
        </div>
        <h4 style="font-size:1.1rem; font-weight:700; color:var(--color-primary); margin:6px 0;">
          ${item.title}
        </h4>
        <div style="font-size:0.8rem; color:var(--text-muted);">
          International Patent Classification: <strong>${item.ipcCode}</strong>
        </div>
      </div>

      <div style="margin-bottom:14px; font-size:0.86rem; line-height:1.6;">
        <strong style="color:var(--color-primary);">Ancient Sanskrit/Tamil Shloka Excerpt:</strong>
        <div style="background:#FAFBF8; border-left:3px solid var(--color-accent-gold); padding:10px 14px; font-style:italic; margin-top:4px;">
          "${item.excerpt}"
        </div>
      </div>

      <div style="margin-bottom:14px; font-size:0.84rem;">
        <strong>Section 3(p) Patent Examiner Significance:</strong>
        <p style="color:var(--text-secondary); margin-top:2px;">
          This citation is indexed in the CSIR-TKDL repository under bilateral agreements with the EPO and USPTO. Any attempt to claim this formulation or its obvious equivalents without proving surprising synergy is subject to pre-grant opposition and Section 3(p) rejection.
        </p>
      </div>

      <div style="background:#FFFBEB; border:1px solid #FCD34D; border-radius:var(--border-radius-sm); padding:8px 12px; font-size:0.76rem; color:#92400E;">
        Notice: Prior-Art Pointer only. Formal validity opinions require registered patent counsel.
      </div>
    `;

    modal.classList.add('active');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTKDLPage);
} else {
  initializeTKDLPage();
}
