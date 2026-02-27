// ── CropAI — Crop Knowledge Base ──
const cropData = {
  rice: {
    emoji: '🌾',
    season: 'Kharif (Jun–Nov)',
    tags: ['Wet soil', 'High humidity', 'Waterlogged'],
    base: { n: [60, 120], p: [30, 60], k: [30, 60], ph: [5.5, 7], t: [20, 37], h: [70, 100], r: [150, 300] }
  },
  wheat: {
    emoji: '🌿',
    season: 'Rabi (Nov–Mar)',
    tags: ['Cool climate', 'Well-drained', 'Moderate rain'],
    base: { n: [100, 140], p: [30, 60], k: [30, 60], ph: [6, 8], t: [10, 25], h: [40, 70], r: [50, 100] }
  },
  maize: {
    emoji: '🌽',
    season: 'Kharif (Jun–Oct)',
    tags: ['Warm weather', 'Fertile soil', 'Moderate water'],
    base: { n: [80, 120], p: [40, 80], k: [40, 80], ph: [5.5, 7.5], t: [18, 35], h: [50, 80], r: [50, 100] }
  },
  cotton: {
    emoji: '🌼',
    season: 'Kharif (May–Dec)',
    tags: ['Dry spells', 'Sandy loam', 'Long season'],
    base: { n: [100, 140], p: [40, 80], k: [40, 100], ph: [6, 8], t: [20, 40], h: [40, 70], r: [60, 120] }
  },
  sugarcane: {
    emoji: '🎋',
    season: 'Annual (Jan–Dec)',
    tags: ['Tropical', 'Heavy rain', 'Deep soil'],
    base: { n: [100, 140], p: [30, 60], k: [100, 205], ph: [6, 8], t: [20, 38], h: [60, 90], r: [100, 250] }
  },
  chickpea: {
    emoji: '🫘',
    season: 'Rabi (Oct–Mar)',
    tags: ['Dry', 'Sandy loam', 'Low rainfall'],
    base: { n: [30, 60], p: [60, 100], k: [60, 100], ph: [6, 8], t: [15, 30], h: [30, 60], r: [30, 80] }
  },
  mango: {
    emoji: '🥭',
    season: 'Summer (Apr–Jun)',
    tags: ['Tropical', 'Deep roots', 'Dry season'],
    base: { n: [20, 60], p: [20, 60], k: [30, 80], ph: [5.5, 7.5], t: [24, 40], h: [40, 70], r: [40, 100] }
  },
  banana: {
    emoji: '🍌',
    season: 'Tropical (Year-round)',
    tags: ['High water', 'Rich soil', 'Warm'],
    base: { n: [80, 120], p: [75, 100], k: [50, 120], ph: [5.5, 7], t: [22, 38], h: [70, 100], r: [100, 200] }
  },
  grapes: {
    emoji: '🍇',
    season: 'Winter (Nov–Feb)',
    tags: ['Dry', 'Rocky soil', 'Low rain'],
    base: { n: [100, 140], p: [100, 145], k: [150, 205], ph: [5.5, 7.5], t: [8, 30], h: [30, 60], r: [20, 60] }
  },
  apple: {
    emoji: '🍎',
    season: 'Autumn (Sep–Nov)',
    tags: ['Cold winter', 'Hilly terrain', 'Mild summer'],
    base: { n: [0, 40], p: [120, 145], k: [190, 205], ph: [5.5, 7], t: [0, 24], h: [40, 60], r: [100, 200] }
  },
  lentil: {
    emoji: '🫛',
    season: 'Rabi (Oct–Mar)',
    tags: ['Cool', 'Light soil', 'Less water'],
    base: { n: [10, 40], p: [60, 100], k: [20, 50], ph: [6, 8.5], t: [10, 25], h: [30, 60], r: [30, 80] }
  },
  jute: {
    emoji: '🌿',
    season: 'Kharif (Mar–Aug)',
    tags: ['Alluvial soil', 'High rain', 'Warm'],
    base: { n: [60, 100], p: [30, 60], k: [30, 60], ph: [6, 7.5], t: [24, 37], h: [70, 100], r: [150, 250] }
  },
};

// ── Scoring Engine ──

/**
 * Score a single parameter value against a crop's ideal range.
 * Uses Gaussian-like distribution rewarding values within optimal range.
 */
function score(val, range) {
  const [lo, hi] = range;
  if (val === '' || val === null || isNaN(val)) return 0.5;
  const v = parseFloat(val);
  const mid = (lo + hi) / 2;
  const half = (hi - lo) / 2;
  if (v >= lo && v <= hi) return 1 - Math.abs(v - mid) / (half * 3);
  const dist = v < lo ? lo - v : v - hi;
  return Math.max(0, 1 - dist / (half + 20));
}

/**
 * Compute overall suitability score for a crop given user inputs.
 */
function computeScore(inputs, crop) {
  const b = cropData[crop].base;
  const keys = ['n', 'p', 'k', 'ph', 't', 'h', 'r'];
  const vals = [inputs.n, inputs.p, inputs.k, inputs.ph, inputs.t, inputs.h, inputs.r];
  let total = 0;
  keys.forEach((k, i) => total += score(vals[i], b[k]));
  return total / keys.length;
}

/**
 * Rule-based crop recommendation (demo fallback).
 * Returns top 3 crops sorted by suitability score.
 */
function ruleBasedCrop(inputs) {
  const scores = {};
  Object.keys(cropData).forEach(crop => {
    scores[crop] = computeScore(inputs, crop);
  });
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([crop, s]) => ({ crop, score: Math.min(0.99, 0.72 + s * 0.27) }));
}

// ── Prediction Handler ──

async function predictCrop() {
  const inputs = {
    n: document.getElementById('nitrogen').value,
    p: document.getElementById('phosphorus').value,
    k: document.getElementById('potassium').value,
    ph: document.getElementById('ph').value,
    t: document.getElementById('temperature').value,
    h: document.getElementById('humidity').value,
    r: document.getElementById('rainfall').value,
  };

  // Validate all fields are filled
  const missing = Object.values(inputs).some(v => v === '');
  if (missing) {
    alert('Please fill in all 7 parameters before predicting.');
    return;
  }

  // Loading state
  const btn = document.querySelector('.predict-btn');
  btn.classList.add('loading');
  btn.disabled = true;

  // Simulate API delay (replace with real fetch)
  await new Promise(r => setTimeout(r, 1600));

  /* ── Replace this block with real API call ──
  const res = await fetch('/api/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inputs)
  });
  const data = await res.json();
  const results = data.recommendations; // [{crop, score}, ...]
  */

  const results = ruleBasedCrop(inputs);

  btn.classList.remove('loading');
  btn.disabled = false;

  renderResults(inputs, results);
}

// ── Render Results ──

function renderResults(inputs, results) {
  // Input summary
  document.getElementById('inputSummary').innerHTML = `
    <div class="summary-item"><div class="summary-val">${inputs.n || '—'}</div><div class="summary-key">Nitrogen</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.p || '—'}</div><div class="summary-key">Phosphorus</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.k || '—'}</div><div class="summary-key">Potassium</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.ph || '—'}</div><div class="summary-key">pH</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.t || '—'}°</div><div class="summary-key">Temp (°C)</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.h || '—'}%</div><div class="summary-key">Humidity</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.r || '—'}</div><div class="summary-key">Rainfall (mm)</div></div>
    <div class="summary-item"><div class="summary-val" style="color:var(--leaf)">${results.length}</div><div class="summary-key">Crops found</div></div>
  `;

  // Result cards
  const grid = document.getElementById('resultGrid');
  grid.innerHTML = results.map((r, i) => {
    const c = cropData[r.crop];
    const pct = Math.round(r.score * 100);
    return `
      <div class="crop-card ${i === 0 ? 'top-pick' : ''}">
        <span class="crop-emoji">${c.emoji}</span>
        <div class="crop-name">${r.crop.charAt(0).toUpperCase() + r.crop.slice(1)}</div>
        <div class="crop-season">📅 ${c.season}</div>
        <div class="confidence-bar-wrap">
          <div class="confidence-label">
            <span>Suitability Score</span>
            <span><strong>${pct}%</strong></span>
          </div>
          <div class="confidence-bar">
            <div class="confidence-fill" data-width="${pct}"></div>
          </div>
        </div>
        <div class="crop-tags">
          ${c.tags.map(t => `<span class="crop-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Show result section
  const rs = document.getElementById('result-section');
  rs.classList.add('visible');
  rs.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Animate confidence bars
  setTimeout(() => {
    document.querySelectorAll('.confidence-fill').forEach(el => {
      el.style.width = el.dataset.width + '%';
    });
  }, 300);
}

// ── Navigation ──

function navTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetForm() {
  document.getElementById('result-section').classList.remove('visible');
  setTimeout(() => navTo('predict'), 100);
}

// ── Scroll Reveal Observer ──

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
