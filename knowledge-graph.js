/**
 * IP-SAKTI Sahayak — Knowledge Graph Canvas Engine
 * Pure HTML5 Canvas + Vanilla JavaScript force-directed knowledge graph.
 * Zero external libraries.
 */

document.addEventListener('DOMContentLoaded', () => {
  initKnowledgeGraph();

  // Apply persisted language to graph data (after common.js has restored APP_STATE)
  const savedLang = (() => {
    try { return localStorage.getItem('selectedLanguage') || localStorage.getItem('ipsakti_lang') || 'en'; }
    catch (_) { return 'en'; }
  })();
  if (savedLang && savedLang !== 'en') {
    // Delay slightly to let common.js finish its own DOM localization first
    setTimeout(() => localizeGraphData(savedLang), 400);
  }

  // React to future language changes dispatched by common.js applyLanguage()
  window.addEventListener('languageChanged', (e) => {
    const lang = (e && e.detail && e.detail.language) ? e.detail.language : 'en';
    localizeGraphData(lang);
  });
});

const GRAPH_NODES = [
  {
    id: 'ayurveda',
    label: 'Ayurveda',
    category: 'botanical',
    color: '#1B5E20',
    radius: 36,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Classical Indian System of Medicine',
    description: 'Ancient healthcare system codifying 5,000+ formulations across Charaka Samhita, Sushruta Samhita, and Astanga Hridaya. Serves as foundational prior art precluding Section 3(p) patent monopolies.',
    statutes: ['Drugs & Cosmetics Act 1st Schedule', 'Ayurvedic Pharmacopoeia of India (API)', 'Section 3(p) Patents Act 1970'],
    actionUrl: 'ai-assistant.html?query=Classical%20Ayurvedic%20prior%20art%20and%20Section%203p'
  },
  {
    id: 'ashwagandha',
    label: 'Ashwagandha',
    category: 'botanical',
    color: '#2E7D32',
    radius: 32,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Withania somnifera (L.) Dunal',
    description: 'High-value Rasayana botanical widely exported for adaptogenic use. Subject of extensive international patent disputes, mandatory TKDL cross-referencing, and NBA benefit-sharing compliance.',
    statutes: ['Biological Diversity Act Sec. 3 & 7', 'TKDL TKRC Code A61K 36/81', 'Rule 158B PPAM Licensing'],
    actionUrl: 'ai-assistant.html?query=Ashwagandha%20patentability%20and%20ABS%20compliance'
  },
  {
    id: 'formulation',
    label: 'Formulation',
    category: 'botanical',
    color: '#388E3C',
    radius: 30,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Classical (Shastric) vs PPAM',
    description: 'Distinguishes Classical formulations manufactured exactly per First Schedule texts from Patent or Proprietary Ayurvedic Medicines (PPAM) incorporating novel excipients, delivery systems, or synergists.',
    statutes: ['Drugs & Cosmetics Rules 1945 Rule 158B', 'Schedule E(1) Toxic Botanical Limits'],
    actionUrl: 'formulation-classification.html'
  },
  {
    id: 'tkdl',
    label: 'TKDL',
    category: 'treaty',
    color: '#00838F',
    radius: 34,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Traditional Knowledge Digital Library',
    description: 'Pioneering CSIR-AYUSH repository containing 4.3 lakh formulations transcribed in 5 international languages into Traditional Knowledge Resource Classification (TKRC) to defeat bio-piracy at global patent offices.',
    statutes: ['IPC Concordance Agreement', 'WIPO Access Agreements (EPO, USPTO, JPO)'],
    actionUrl: 'tkdl-prior-art.html'
  },
  {
    id: 'tk',
    label: 'Traditional Knowledge',
    category: 'legal',
    color: '#C67D0A',
    radius: 34,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Sui Generis Cultural Heritage',
    description: 'Knowledge, innovations, and practices of indigenous communities. Under Indian law (Sec 3(p)), traditional knowledge or an aggregation of known properties is non-patentable subject matter.',
    statutes: ['Section 3(p) Indian Patents Act', 'CBD Article 8(j)', 'WIPO GRATK Treaty 2024'],
    actionUrl: 'ai-assistant.html?query=Section%203p%20traditional%20knowledge%20exceptions'
  },
  {
    id: 'patent',
    label: 'Patent',
    category: 'legal',
    color: '#D97706',
    radius: 34,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Exclusive Monopoly Right (20 Yrs)',
    description: 'Statutory 20-year monopoly requiring novelty, inventive step, and industrial applicability. In Ayurvedic inventions, standard extraction without verified synergism fails Section 3(e) and 3(p).',
    statutes: ['Indian Patents Act 1970 Sec 2(1)(j)', 'Section 3(e) Synergism Doctrine', 'Section 10(4)(ii)(D) Origin Disclosure'],
    actionUrl: 'ip-regulatory-guidance.html'
  },
  {
    id: 'abs',
    label: 'ABS',
    category: 'legal',
    color: '#E65100',
    radius: 30,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Access and Benefit Sharing',
    description: 'Fair and equitable sharing of benefits arising from utilization of biological resources. Mandates ex-factory levies (0.1% to 0.5%) payable to National Biodiversity Authority and local Biodiversity Management Committees.',
    statutes: ['Biological Diversity Act 2002 Sec 21', 'Nagoya Protocol Article 5', 'ABS Regulations 2014'],
    actionUrl: 'abs-compliance.html'
  },
  {
    id: 'nba',
    label: 'NBA',
    category: 'authority',
    color: '#08281B',
    radius: 32,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'National Biodiversity Authority',
    description: 'Statutory autonomous body established in 2003 headquartered in Chennai. Regulates bio-resource access by non-Indians (Form I) and prior approval for applying for intellectual property rights (Form III).',
    statutes: ['Section 8 & 19 Biological Diversity Act', 'Section 6 IPR Approval Form III'],
    actionUrl: 'abs-compliance.html'
  },
  {
    id: 'ayush',
    label: 'AYUSH',
    category: 'authority',
    color: '#0D3B28',
    radius: 34,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Ministry of AYUSH (Govt of India)',
    description: 'Apex union ministry overseeing Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homoeopathy education, manufacturing standards, pharmacopoeias (PCIM&H), and international regulatory harmonization.',
    statutes: ['Drugs & Cosmetics Act Chapter IV-A', 'Ayurvedic Pharmacopoeia Committee', 'TKDL Joint Custodian'],
    actionUrl: 'sources-citations.html'
  },
  {
    id: 'wipo',
    label: 'WIPO',
    category: 'treaty',
    color: '#0277BD',
    radius: 32,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'World Intellectual Property Organization',
    description: 'UN specialized agency in Geneva administering Paris Convention, PCT, and the landmark 2024 Treaty on IP, Genetic Resources and Associated Traditional Knowledge (GRATK) establishing mandatory origin disclosure.',
    statutes: ['WIPO GRATK Treaty 2024', 'Patent Cooperation Treaty (PCT)', 'IGC on IP and Genetic Resources'],
    actionUrl: 'sources-citations.html'
  },
  {
    id: 'regulatory',
    label: 'Regulatory Framework',
    category: 'legal',
    color: '#455A64',
    radius: 32,
    x: 0, y: 0, vx: 0, vy: 0,
    subtitle: 'Good Manufacturing Practices & Licensing',
    description: 'Comprehensive statutory licensing administered by State Licensing Authorities (SLA) under CDSCO/AYUSH. Enforces Schedule T (GMP compliance), heavy metal testing, and safety studies.',
    statutes: ['Schedule T (GMP)', 'Gazette GSR 716(E) Stability Guidelines', 'Ayurveda Siddha Unani Drugs Technical Advisory Board (ASUDTAB)'],
    actionUrl: 'ip-regulatory-guidance.html'
  }
];

// ─── Frozen English originals — NEVER mutated ───────────────────────────────
// Deep-clone of every user-visible string in GRAPH_NODES and GRAPH_EDGES.
// Used as the authoritative source when translating or restoring English.
const GRAPH_NODES_EN = GRAPH_NODES.map(n => ({
  id:          n.id,
  label:       n.label,
  subtitle:    n.subtitle,
  description: n.description,
  statutes:    Array.isArray(n.statutes) ? [...n.statutes] : []
}));

const GRAPH_EDGES = [
  { source: 'ayurveda', target: 'ashwagandha', label: 'Codifies in Charaka' },
  { source: 'ayurveda', target: 'tk', label: 'Living Heritage of' },
  { source: 'ayurveda', target: 'formulation', label: 'Prescribes Classical Recipes' },
  { source: 'ayurveda', target: 'ayush', label: 'Regulated by' },
  
  { source: 'ashwagandha', target: 'tkdl', label: 'Indexed in 4,300 Shlokas' },
  { source: 'ashwagandha', target: 'abs', label: 'Requires NBA Form I / III' },
  { source: 'ashwagandha', target: 'formulation', label: 'Key Active Botanical' },
  
  { source: 'tkdl', target: 'tk', label: 'Digitizes & Translates' },
  { source: 'tkdl', target: 'patent', label: 'Prior-Art Defense at EPO/USPTO' },
  { source: 'tkdl', target: 'wipo', label: 'Concordance with IPC' },
  
  { source: 'tk', target: 'patent', label: 'Barred under Section 3(p)' },
  { source: 'tk', target: 'wipo', label: 'Protected under 2024 Treaty' },
  
  { source: 'patent', target: 'nba', label: 'Mandatory Sec. 6 Clearance' },
  { source: 'patent', target: 'formulation', label: 'Excludes Simple Mixtures (3e)' },
  
  { source: 'abs', target: 'nba', label: 'Enforced by' },
  { source: 'abs', target: 'regulatory', label: 'Precondition for Export' },
  
  { source: 'nba', target: 'ayush', label: 'Inter-Ministerial Consultation' },
  
  { source: 'formulation', target: 'regulatory', label: 'Governed by Rule 158B' },
  { source: 'regulatory', target: 'ayush', label: 'Notified by' }
];

// Frozen English originals for edges
const GRAPH_EDGES_EN = GRAPH_EDGES.map(e => ({ source: e.source, target: e.target, label: e.label }));

// ─── Knowledge Graph Translation Layer ───────────────────────────────────────
/**
 * Translate all user-visible graph labels into `lang` using the shared
 * TranslationCache + callBhashiniTranslate from common.js.
 *
 * Rules:
 *  - Always translates FROM frozen English originals (never re-translates).
 *  - Skips node IDs, edge source/target, actionUrl, colors, numbers.
 *  - Uses synchronous cache pass first (0ms), then parallel network fetch.
 *  - On English: restores originals and returns immediately.
 */
async function localizeGraphData(lang) {
  if (!lang || lang === 'en') {
    // Restore English originals to runtime nodes/edges
    GRAPH_NODES_EN.forEach(orig => {
      const node = GRAPH_NODES.find(n => n.id === orig.id);
      if (!node) return;
      node.label       = orig.label;
      node.subtitle    = orig.subtitle;
      node.description = orig.description;
      node.statutes    = [...orig.statutes];
    });
    GRAPH_EDGES_EN.forEach((orig, i) => {
      GRAPH_EDGES[i].label = orig.label;
    });
    // Refresh inspector if a node is selected
    if (selectedNode) selectNode(selectedNode);
    // Restore legend badge text from HTML originals
    _restoreGraphLegend();
    return;
  }

  // Prefer fetchTranslation (deduplicates in-flight requests) from common.js;
  // fall back to callBhashiniTranslate if fetchTranslation isn't exposed yet.
  const cache     = (typeof TranslationCache !== 'undefined') ? TranslationCache : null;
  const translate = (typeof fetchTranslation !== 'undefined') ? fetchTranslation
                  : (typeof callBhashiniTranslate !== 'undefined') ? callBhashiniTranslate
                  : null;
  if (!cache || !translate) return; // common.js not loaded yet

  // ── Step 1: Collect all unique English strings to translate ─────────────────
  // Key: English source string. Value: array of setter callbacks.
  const pending = new Map(); // string → [{ apply: fn }]

  // Returns true for binomial scientific names (e.g. "Withania somnifera (L.) Dunal")
  // which must NOT be translated per user requirements.
  // Pattern: Genus (capitalized) + species epithet (lowercase, NOT a common English word).
  // Common English words like "and", "of", "the", "by", "for" would never be species epithets.
  const COMMON_EN_WORDS = new Set(['and','of','the','by','for','in','on','at','to','a','an',
    'is','are','was','were','has','have','had','with','as','or','nor','not','than','but']);
  const _isScientificName = (str) => {
    const parts = str.trim().split(/\s+/);
    if (parts.length < 2) return false;
    const genus = parts[0];
    const species = parts[1];
    // Genus must start with capital, species must be fully lowercase and not a common EN word
    return /^[A-Z][a-z]{3,}$/.test(genus) &&
           /^[a-z]{4,}$/.test(species) &&
           !COMMON_EN_WORDS.has(species);
  };

  const enqueue = (enStr, applyFn) => {
    if (!enStr || !enStr.trim()) return;
    if (!pending.has(enStr)) pending.set(enStr, []);
    pending.get(enStr).push(applyFn);
  };

  GRAPH_NODES_EN.forEach(orig => {
    const node = GRAPH_NODES.find(n => n.id === orig.id);
    if (!node) return;

    enqueue(orig.label, (t) => { node.label = t; });
    // Skip scientific names in subtitle (binomial nomenclature)
    if (!_isScientificName(orig.subtitle)) {
      enqueue(orig.subtitle, (t) => { node.subtitle = t; });
    }
    enqueue(orig.description, (t) => { node.description = t; });
    // Statutes contain legal identifiers (act names, section numbers) — translate readable parts
    orig.statutes.forEach((s, si) => {
      enqueue(s, (t) => { node.statutes[si] = t; });
    });
  });

  GRAPH_EDGES_EN.forEach((orig, i) => {
    enqueue(orig.label, (t) => { GRAPH_EDGES[i].label = t; });
  });

  // ── Step 2: Synchronous cache pass (0ms, no network) ────────────────────────
  const missing = [];
  for (const [enStr] of pending.entries()) {
    const cached = cache.get('en', lang, enStr);
    if (cached) {
      pending.get(enStr).forEach(fn => fn(cached));
    } else {
      missing.push(enStr);
    }
  }

  // Refresh inspector immediately with cached results
  if (selectedNode) selectNode(selectedNode);

  // ── Step 3: Fully parallel network fetch for uncached strings ──────────────
  //    fetchTranslation() deduplicates concurrent requests for the same string.
  if (missing.length > 0) {
    await Promise.all(missing.map(async (enStr) => {
      const trans = await translate(enStr, lang);
      if (trans) {
        // fetchTranslation already writes to cache; only apply to data fields
        pending.get(enStr).forEach(fn => fn(trans));
      }
    }));
    // Refresh inspector after all translations arrive
    if (selectedNode) selectNode(selectedNode);
  }

  // Translate legend badge text in the DOM
  await _localizeGraphLegend(lang);
}

/** Translate the four canvas-overlay legend badge labels in the DOM. */
async function _localizeGraphLegend(lang) {
  const badges = document.querySelectorAll('.canvas-overlay-legend .legend-badge');
  if (!badges.length) return;
  const cache     = (typeof TranslationCache !== 'undefined') ? TranslationCache : null;
  const translate = (typeof fetchTranslation !== 'undefined') ? fetchTranslation
                  : (typeof callBhashiniTranslate !== 'undefined') ? callBhashiniTranslate
                  : null;
  if (!cache || !translate) return;

  // Store original texts first (sync)
  const items = [];
  for (const badge of badges) {
    const dot = badge.querySelector('.legend-color-dot');
    if (!dot) continue;
    if (!badge.hasAttribute('data-orig-legend')) {
      const textNode = Array.from(badge.childNodes).find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
      if (!textNode) continue;
      badge.setAttribute('data-orig-legend', textNode.textContent.trim());
    }
    const enText = badge.getAttribute('data-orig-legend');
    if (enText) items.push({ badge, enText });
  }

  // Translate all 4 legend labels in parallel
  await Promise.all(items.map(async ({ badge, enText }) => {
    const trans = await translate(enText, lang);
    if (trans) {
      const textNodes = Array.from(badge.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
      textNodes.forEach(n => { n.textContent = ' ' + trans; });
    }
  }));
}

/** Restore English legend badge text from stored originals. */
function _restoreGraphLegend() {
  const badges = document.querySelectorAll('.canvas-overlay-legend .legend-badge');
  badges.forEach(badge => {
    const orig = badge.getAttribute('data-orig-legend');
    if (!orig) return;
    const textNodes = Array.from(badge.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
    textNodes.forEach(n => { n.textContent = ' ' + orig; });
  });
}

let canvas, ctx;
let width = 800, height = 640;
let scale = 1.0;
let panX = 0, panY = 0;
let isDragging = false;
let isPanning = false;
let startX = 0, startY = 0;
let draggedNode = null;
let selectedNode = null;
let hoveredNode = null;
let isPhysicsActive = true;
let animFrameId = null;
let activeCategoryFilter = 'all';

function initKnowledgeGraph() {
  canvas = document.getElementById('knowledge-canvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Initialize node positions in a nice circle around center
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) * 0.32;
  GRAPH_NODES.forEach((node, idx) => {
    const angle = (idx / GRAPH_NODES.length) * 2 * Math.PI;
    node.x = cx + r * Math.cos(angle) + (Math.random() - 0.5) * 40;
    node.y = cy + r * Math.sin(angle) + (Math.random() - 0.5) * 40;
    node.vx = 0;
    node.vy = 0;
  });

  bindCanvasEvents();
  bindGraphControls();

  // Select initial node (Ashwagandha) for instant inspection
  selectNode(GRAPH_NODES.find(n => n.id === 'ashwagandha'));

  // Start animation loop
  runSimulationLoop();
}

function resizeCanvas() {
  const container = document.getElementById('canvas-container');
  if (!container || !canvas) return;
  width = container.clientWidth;
  height = container.clientHeight;

  // Set real pixel resolution
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
}

function runSimulationLoop() {
  if (isPhysicsActive) {
    updatePhysics();
  }
  renderGraph();
  animFrameId = requestAnimationFrame(runSimulationLoop);
}

function updatePhysics() {
  const cx = width / 2;
  const cy = height / 2;
  const kRepulse = 4200;
  const kSpring = 0.045;
  const defaultSpringLen = 130;
  const damping = 0.78;

  // Node repulsion
  for (let i = 0; i < GRAPH_NODES.length; i++) {
    const n1 = GRAPH_NODES[i];
    for (let j = i + 1; j < GRAPH_NODES.length; j++) {
      const n2 = GRAPH_NODES[j];
      const dx = n2.x - n1.x;
      const dy = n2.y - n1.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1) dist = 1;

      const force = kRepulse / (dist * dist);
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;

      n1.vx -= fx;
      n1.vy -= fy;
      n2.vx += fx;
      n2.vy += fy;
    }

    // Center gravity
    const cdx = cx - n1.x;
    const cdy = cy - n1.y;
    n1.vx += cdx * 0.008;
    n1.vy += cdy * 0.008;
  }

  // Edge springs
  GRAPH_EDGES.forEach(edge => {
    const s = GRAPH_NODES.find(n => n.id === edge.source);
    const t = GRAPH_NODES.find(n => n.id === edge.target);
    if (!s || !t) return;

    const dx = t.x - s.x;
    const dy = t.y - s.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const delta = dist - defaultSpringLen;
    const force = delta * kSpring;

    const fx = (dx / dist) * force;
    const fy = (dy / dist) * force;

    s.vx += fx;
    s.vy += fy;
    t.vx -= fx;
    t.vy -= fy;
  });

  // Apply velocity & damping
  GRAPH_NODES.forEach(n => {
    if (n === draggedNode) return; // Don't move user-dragged node
    n.vx *= damping;
    n.vy *= damping;
    n.x += n.vx;
    n.y += n.vy;

    // Soft boundary confinement
    const pad = n.radius + 20;
    if (n.x < pad) { n.x = pad; n.vx = 0; }
    if (n.x > width - pad) { n.x = width - pad; n.vx = 0; }
    if (n.y < pad) { n.y = pad; n.vy = 0; }
    if (n.y > height - pad) { n.y = height - pad; n.vy = 0; }
  });
}

function renderGraph() {
  if (!ctx || !canvas) return;
  const dpr = window.devicePixelRatio || 1;
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.scale(dpr, dpr);

  // Background subtle grid
  drawGridDots();

  // Apply pan & zoom
  ctx.translate(panX, panY);
  ctx.scale(scale, scale);

  // Draw Edges
  GRAPH_EDGES.forEach(edge => {
    const s = GRAPH_NODES.find(n => n.id === edge.source);
    const t = GRAPH_NODES.find(n => n.id === edge.target);
    if (!s || !t) return;

    const isConnected = selectedNode && (s.id === selectedNode.id || t.id === selectedNode.id);
    const isFilteredOut = activeCategoryFilter !== 'all' && 
      (s.category !== activeCategoryFilter && t.category !== activeCategoryFilter);

    ctx.save();
    if (isFilteredOut) {
      ctx.globalAlpha = 0.15;
    } else if (isConnected) {
      ctx.strokeStyle = '#0D3B28';
      ctx.lineWidth = 2.8;
      ctx.globalAlpha = 0.9;
    } else {
      ctx.strokeStyle = '#D8E2D5';
      ctx.lineWidth = 1.4;
      ctx.globalAlpha = 0.6;
    }

    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(t.x, t.y);
    ctx.stroke();

    // Edge label if selected
    if (isConnected) {
      const midX = (s.x + t.x) / 2;
      const midY = (s.y + t.y) / 2;
      ctx.font = '10px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#08281B';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Label pill background
      const textWidth = ctx.measureText(edge.label).width;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
      ctx.fillRect(midX - textWidth / 2 - 4, midY - 8, textWidth + 8, 16);
      ctx.strokeStyle = '#A3D9B8';
      ctx.lineWidth = 0.8;
      ctx.strokeRect(midX - textWidth / 2 - 4, midY - 8, textWidth + 8, 16);

      ctx.fillStyle = '#0D3B28';
      ctx.fillText(edge.label, midX, midY);
    }
    ctx.restore();
  });

  // Draw Nodes
  GRAPH_NODES.forEach(node => {
    const isSelected = selectedNode && selectedNode.id === node.id;
    const isHovered = hoveredNode && hoveredNode.id === node.id;
    const isMatchFilter = activeCategoryFilter === 'all' || node.category === activeCategoryFilter;

    ctx.save();
    if (!isMatchFilter) {
      ctx.globalAlpha = 0.2;
    }

    // Selected Halo
    if (isSelected) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius + 8, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(46, 125, 50, 0.16)';
      ctx.fill();
      ctx.strokeStyle = '#2E7D32';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    } else if (isHovered) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius + 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(13, 59, 40, 0.1)';
      ctx.fill();
    }

    // Node Circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
    
    // Gradient fill
    const grad = ctx.createRadialGradient(node.x - 6, node.y - 6, 2, node.x, node.y, node.radius);
    grad.addColorStop(0, lightenColor(node.color, 25));
    grad.addColorStop(1, node.color);
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.lineWidth = isSelected ? 3 : 2;
    ctx.strokeStyle = '#FFFFFF';
    ctx.stroke();

    // Node Label
    ctx.font = `600 ${node.radius > 32 ? 11 : 10}px "Plus Jakarta Sans", sans-serif`;
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
    ctx.shadowBlur = 4;
    ctx.fillText(node.label, node.x, node.y);

    ctx.restore();
  });

  ctx.restore();
}

function drawGridDots() {
  ctx.save();
  ctx.fillStyle = '#E5EADF';
  const step = 28;
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      ctx.fillRect(x, y, 1.2, 1.2);
    }
  }
  ctx.restore();
}

function bindCanvasEvents() {
  canvas.addEventListener('mousedown', (e) => {
    const pos = getCanvasPos(e);
    const hit = getNodeAtPos(pos.x, pos.y);

    if (hit) {
      draggedNode = hit;
      isDragging = true;
      selectNode(hit);
    } else {
      isPanning = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (isDragging && draggedNode) {
      const pos = getCanvasPos(e);
      draggedNode.x = pos.x;
      draggedNode.y = pos.y;
      draggedNode.vx = 0;
      draggedNode.vy = 0;
    } else if (isPanning) {
      panX = e.clientX - startX;
      panY = e.clientY - startY;
    } else {
      // Hover detection
      const pos = getCanvasPos(e);
      const hit = getNodeAtPos(pos.x, pos.y);
      if (hit !== hoveredNode) {
        hoveredNode = hit;
        canvas.style.cursor = hit ? 'pointer' : 'grab';
      }
    }
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    isPanning = false;
    draggedNode = null;
  });

  // Canvas zoom on wheel
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = 1.08;
    if (e.deltaY < 0) {
      scale = Math.min(scale * zoomFactor, 2.2);
    } else {
      scale = Math.max(scale / zoomFactor, 0.55);
    }
  }, { passive: false });
}

function getCanvasPos(e) {
  const rect = canvas.getBoundingClientRect();
  const screenX = e.clientX - rect.left;
  const screenY = e.clientY - rect.top;
  return {
    x: (screenX - panX) / scale,
    y: (screenY - panY) / scale
  };
}

function getNodeAtPos(x, y) {
  for (let i = GRAPH_NODES.length - 1; i >= 0; i--) {
    const n = GRAPH_NODES[i];
    const dx = x - n.x;
    const dy = y - n.y;
    if (Math.sqrt(dx * dx + dy * dy) <= n.radius) {
      return n;
    }
  }
  return null;
}

function selectNode(node) {
  selectedNode = node;
  const emptyState = document.getElementById('inspector-empty');
  const detail = document.getElementById('inspector-detail');

  if (!node) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (detail) detail.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (detail) detail.classList.remove('hidden');

  // Populate Inspector
  const badge = document.getElementById('insp-category-badge');
  const title = document.getElementById('insp-title');
  const subtitle = document.getElementById('insp-subtitle');
  const desc = document.getElementById('insp-description');
  const linksCount = document.getElementById('insp-links-count');
  const linksList = document.getElementById('insp-links-list');
  const statutesList = document.getElementById('insp-statutes-list');
  const actionQuery = document.getElementById('insp-action-query');

  if (badge) {
    badge.textContent = capitalize(node.category);
    badge.style.borderColor = node.color;
    badge.style.color = node.color;
  }
  if (title) title.textContent = node.label;
  if (subtitle) subtitle.textContent = node.subtitle;
  if (desc) desc.textContent = node.description;
  if (actionQuery && node.actionUrl) actionQuery.href = node.actionUrl;

  // Connected links
  const connections = [];
  GRAPH_EDGES.forEach(e => {
    if (e.source === node.id) {
      const targetNode = GRAPH_NODES.find(n => n.id === e.target);
      if (targetNode) connections.push({ node: targetNode, label: e.label, dir: '&rarr;' });
    } else if (e.target === node.id) {
      const sourceNode = GRAPH_NODES.find(n => n.id === e.source);
      if (sourceNode) connections.push({ node: sourceNode, label: e.label, dir: '&larr;' });
    }
  });

  if (linksCount) linksCount.textContent = connections.length;
  if (linksList) {
    linksList.innerHTML = connections.map(c => `
      <div class="insp-link-item" onclick="jumpToNode('${c.node.id}')">
        <div>
          <span class="link-target-name">${c.node.label}</span>
          <span class="link-rel-badge">(${c.label})</span>
        </div>
        <span style="color: var(--color-primary); font-weight: 700;">${c.dir}</span>
      </div>
    `).join('');
  }

  if (statutesList && node.statutes) {
    statutesList.innerHTML = node.statutes.map(s => `
      <span class="insp-tag">${escapeHtml(s)}</span>
    `).join('');
  }

  if (window.logAuditEvent) {
    window.logAuditEvent('GRAPH_INSPECT_NODE', `Explored knowledge node: ${node.label}`);
  }
}

function jumpToNode(nodeId) {
  const target = GRAPH_NODES.find(n => n.id === nodeId);
  if (target) {
    selectNode(target);
  }
}

function bindGraphControls() {
  // Zoom In
  const zoomInBtn = document.getElementById('btn-zoom-in');
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      scale = Math.min(scale * 1.2, 2.4);
    });
  }

  // Zoom Out
  const zoomOutBtn = document.getElementById('btn-zoom-out');
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      scale = Math.max(scale / 1.2, 0.5);
    });
  }

  // Reset View
  const resetBtn = document.getElementById('btn-reset-view');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      scale = 1.0;
      panX = 0;
      panY = 0;
    });
  }

  // Toggle Physics
  const togglePhysBtn = document.getElementById('btn-toggle-physics');
  if (togglePhysBtn) {
    togglePhysBtn.addEventListener('click', () => {
      isPhysicsActive = !isPhysicsActive;
      togglePhysBtn.style.color = isPhysicsActive ? 'var(--color-primary)' : '#9E9E9E';
      if (window.showToast) {
        window.showToast(isPhysicsActive ? 'Layout physics resumed' : 'Layout physics paused');
      }
    });
  }

  // Category Filter
  const filterSelect = document.getElementById('graph-filter-select');
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      activeCategoryFilter = e.target.value;
    });
  }

  // Search Jump
  const searchInput = document.getElementById('graph-node-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) return;
      const match = GRAPH_NODES.find(n => n.label.toLowerCase().includes(q) || n.subtitle.toLowerCase().includes(q));
      if (match) {
        selectNode(match);
      }
    });
  }
}

function lightenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
