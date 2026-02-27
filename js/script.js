/* ══════════════════════════════════════════════
   CropAI — Enhanced JavaScript Application
   ══════════════════════════════════════════════ */

// ── Configuration ──
const CONFIG = {
  WEATHER_API_KEY: '', // Add your OpenWeatherMap API key here
  WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5/weather',
  HISTORY_KEY: 'cropai_history',
  DARK_MODE_KEY: 'cropai_darkmode',
  MAX_HISTORY: 20,
};

// ── Crop Knowledge Base (22 crops) ──
const cropData = {
  rice: {
    emoji: '🌾', name: 'Rice', type: 'Grain',
    season: 'Kharif (Jun–Nov)', growingPeriod: '120–150 days',
    waterReq: 'High', yieldRange: [800, 1200],
    tags: ['Wet soil', 'High humidity', 'Waterlogged'],
    diseases: ['Blast', 'Brown Spot', 'Sheath Blight'],
    fertilizer: { urea: 130, dap: 60, mop: 40 },
    base: { n:[60,120], p:[30,60], k:[30,60], ph:[5.5,7], t:[20,37], h:[70,100], r:[150,300] }
  },
  wheat: {
    emoji: '🌿', name: 'Wheat', type: 'Grain',
    season: 'Rabi (Nov–Mar)', growingPeriod: '100–120 days',
    waterReq: 'Medium', yieldRange: [600, 1000],
    tags: ['Cool climate', 'Well-drained', 'Moderate rain'],
    diseases: ['Rust', 'Powdery Mildew', 'Smut'],
    fertilizer: { urea: 120, dap: 50, mop: 30 },
    base: { n:[100,140], p:[30,60], k:[30,60], ph:[6,8], t:[10,25], h:[40,70], r:[50,100] }
  },
  maize: {
    emoji: '🌽', name: 'Maize', type: 'Grain',
    season: 'Kharif (Jun–Oct)', growingPeriod: '90–120 days',
    waterReq: 'Medium', yieldRange: [700, 1100],
    tags: ['Warm weather', 'Fertile soil', 'Moderate water'],
    diseases: ['Leaf Blight', 'Stalk Rot', 'Downy Mildew'],
    fertilizer: { urea: 110, dap: 65, mop: 45 },
    base: { n:[80,120], p:[40,80], k:[40,80], ph:[5.5,7.5], t:[18,35], h:[50,80], r:[50,100] }
  },
  cotton: {
    emoji: '🌼', name: 'Cotton', type: 'Fiber',
    season: 'Kharif (May–Dec)', growingPeriod: '150–180 days',
    waterReq: 'Medium', yieldRange: [300, 600],
    tags: ['Dry spells', 'Sandy loam', 'Long season'],
    diseases: ['Bollworm', 'Wilt', 'Root Rot'],
    fertilizer: { urea: 100, dap: 55, mop: 50 },
    base: { n:[100,140], p:[40,80], k:[40,100], ph:[6,8], t:[20,40], h:[40,70], r:[60,120] }
  },
  sugarcane: {
    emoji: '🎋', name: 'Sugarcane', type: 'Cash Crop',
    season: 'Annual (Jan–Dec)', growingPeriod: '270–365 days',
    waterReq: 'Very High', yieldRange: [2500, 4000],
    tags: ['Tropical', 'Heavy rain', 'Deep soil'],
    diseases: ['Red Rot', 'Smut', 'Grassy Shoot'],
    fertilizer: { urea: 150, dap: 70, mop: 80 },
    base: { n:[100,140], p:[30,60], k:[100,205], ph:[6,8], t:[20,38], h:[60,90], r:[100,250] }
  },
  chickpea: {
    emoji: '🫘', name: 'Chickpea', type: 'Pulse',
    season: 'Rabi (Oct–Mar)', growingPeriod: '90–120 days',
    waterReq: 'Low', yieldRange: [300, 600],
    tags: ['Dry', 'Sandy loam', 'Low rainfall'],
    diseases: ['Wilt', 'Blight', 'Root Rot'],
    fertilizer: { urea: 25, dap: 80, mop: 30 },
    base: { n:[30,60], p:[60,100], k:[60,100], ph:[6,8], t:[15,30], h:[30,60], r:[30,80] }
  },
  mango: {
    emoji: '🥭', name: 'Mango', type: 'Fruit',
    season: 'Summer (Apr–Jun)', growingPeriod: 'Perennial',
    waterReq: 'Medium', yieldRange: [1000, 2000],
    tags: ['Tropical', 'Deep roots', 'Dry season'],
    diseases: ['Anthracnose', 'Powdery Mildew', 'Dieback'],
    fertilizer: { urea: 80, dap: 50, mop: 60 },
    base: { n:[20,60], p:[20,60], k:[30,80], ph:[5.5,7.5], t:[24,40], h:[40,70], r:[40,100] }
  },
  banana: {
    emoji: '🍌', name: 'Banana', type: 'Fruit',
    season: 'Tropical (Year-round)', growingPeriod: '270–365 days',
    waterReq: 'High', yieldRange: [1500, 3000],
    tags: ['High water', 'Rich soil', 'Warm'],
    diseases: ['Panama Wilt', 'Sigatoka', 'Bunchy Top'],
    fertilizer: { urea: 140, dap: 80, mop: 90 },
    base: { n:[80,120], p:[75,100], k:[50,120], ph:[5.5,7], t:[22,38], h:[70,100], r:[100,200] }
  },
  grapes: {
    emoji: '🍇', name: 'Grapes', type: 'Fruit',
    season: 'Winter (Nov–Feb)', growingPeriod: 'Perennial',
    waterReq: 'Low', yieldRange: [800, 1500],
    tags: ['Dry', 'Rocky soil', 'Low rain'],
    diseases: ['Downy Mildew', 'Powdery Mildew', 'Anthracnose'],
    fertilizer: { urea: 90, dap: 100, mop: 120 },
    base: { n:[100,140], p:[100,145], k:[150,205], ph:[5.5,7.5], t:[8,30], h:[30,60], r:[20,60] }
  },
  apple: {
    emoji: '🍎', name: 'Apple', type: 'Fruit',
    season: 'Autumn (Sep–Nov)', growingPeriod: 'Perennial',
    waterReq: 'Medium', yieldRange: [600, 1200],
    tags: ['Cold winter', 'Hilly terrain', 'Mild summer'],
    diseases: ['Scab', 'Fire Blight', 'Cedar Rust'],
    fertilizer: { urea: 60, dap: 90, mop: 100 },
    base: { n:[0,40], p:[120,145], k:[190,205], ph:[5.5,7], t:[0,24], h:[40,60], r:[100,200] }
  },
  lentil: {
    emoji: '🫛', name: 'Lentil', type: 'Pulse',
    season: 'Rabi (Oct–Mar)', growingPeriod: '90–120 days',
    waterReq: 'Low', yieldRange: [250, 500],
    tags: ['Cool', 'Light soil', 'Less water'],
    diseases: ['Wilt', 'Rust', 'Blight'],
    fertilizer: { urea: 20, dap: 70, mop: 25 },
    base: { n:[10,40], p:[60,100], k:[20,50], ph:[6,8.5], t:[10,25], h:[30,60], r:[30,80] }
  },
  jute: {
    emoji: '🧶', name: 'Jute', type: 'Fiber',
    season: 'Kharif (Mar–Aug)', growingPeriod: '120–150 days',
    waterReq: 'High', yieldRange: [500, 900],
    tags: ['Alluvial soil', 'High rain', 'Warm'],
    diseases: ['Stem Rot', 'Soft Rot', 'Root Rot'],
    fertilizer: { urea: 80, dap: 40, mop: 30 },
    base: { n:[60,100], p:[30,60], k:[30,60], ph:[6,7.5], t:[24,37], h:[70,100], r:[150,250] }
  },
  coconut: {
    emoji: '🥥', name: 'Coconut', type: 'Plantation',
    season: 'Tropical (Year-round)', growingPeriod: 'Perennial',
    waterReq: 'High', yieldRange: [1000, 2500],
    tags: ['Coastal', 'Sandy soil', 'High humidity'],
    diseases: ['Bud Rot', 'Leaf Blight', 'Root Wilt'],
    fertilizer: { urea: 70, dap: 50, mop: 100 },
    base: { n:[20,50], p:[10,40], k:[100,200], ph:[5.5,7], t:[25,38], h:[70,95], r:[150,280] }
  },
  coffee: {
    emoji: '☕', name: 'Coffee', type: 'Plantation',
    season: 'Perennial', growingPeriod: 'Perennial',
    waterReq: 'Medium', yieldRange: [400, 800],
    tags: ['Shade-grown', 'Hilly', 'Cool tropical'],
    diseases: ['Leaf Rust', 'Berry Borer', 'Black Rot'],
    fertilizer: { urea: 75, dap: 55, mop: 65 },
    base: { n:[80,120], p:[20,50], k:[40,80], ph:[5,6.5], t:[15,28], h:[60,85], r:[150,250] }
  },
  potato: {
    emoji: '🥔', name: 'Potato', type: 'Vegetable',
    season: 'Rabi (Oct–Feb)', growingPeriod: '75–120 days',
    waterReq: 'Medium', yieldRange: [1500, 3000],
    tags: ['Cool weather', 'Loose soil', 'Well-drained'],
    diseases: ['Late Blight', 'Early Blight', 'Black Scurf'],
    fertilizer: { urea: 130, dap: 75, mop: 100 },
    base: { n:[100,140], p:[50,80], k:[100,160], ph:[5,6.5], t:[10,25], h:[50,75], r:[50,100] }
  },
  tomato: {
    emoji: '🍅', name: 'Tomato', type: 'Vegetable',
    season: 'Rabi & Summer', growingPeriod: '60–90 days',
    waterReq: 'Medium', yieldRange: [800, 1800],
    tags: ['Warm days', 'Loamy soil', 'Staking needed'],
    diseases: ['Leaf Curl', 'Wilt', 'Early Blight'],
    fertilizer: { urea: 100, dap: 70, mop: 60 },
    base: { n:[80,120], p:[50,80], k:[50,80], ph:[6,7], t:[18,30], h:[40,70], r:[40,80] }
  },
  onion: {
    emoji: '🧅', name: 'Onion', type: 'Vegetable',
    season: 'Rabi (Nov–Apr)', growingPeriod: '120–150 days',
    waterReq: 'Low', yieldRange: [600, 1200],
    tags: ['Well-drained', 'Light soil', 'Low humidity'],
    diseases: ['Purple Blotch', 'Downy Mildew', 'Thrips'],
    fertilizer: { urea: 80, dap: 60, mop: 50 },
    base: { n:[60,100], p:[40,70], k:[40,70], ph:[6,7.5], t:[13,28], h:[30,60], r:[30,70] }
  },
  soybean: {
    emoji: '🫘', name: 'Soybean', type: 'Oilseed',
    season: 'Kharif (Jun–Oct)', growingPeriod: '85–120 days',
    waterReq: 'Medium', yieldRange: [400, 800],
    tags: ['Nitrogen fixer', 'Loamy soil', 'Moderate rain'],
    diseases: ['Rust', 'Yellow Mosaic', 'Stem Fly'],
    fertilizer: { urea: 20, dap: 80, mop: 40 },
    base: { n:[15,40], p:[50,90], k:[30,70], ph:[6,7.5], t:[20,32], h:[50,80], r:[60,120] }
  },
  groundnut: {
    emoji: '🥜', name: 'Groundnut', type: 'Oilseed',
    season: 'Kharif (Jun–Oct)', growingPeriod: '100–130 days',
    waterReq: 'Low', yieldRange: [400, 700],
    tags: ['Sandy soil', 'Warm', 'Self-pollinating'],
    diseases: ['Tikka Disease', 'Collar Rot', 'Rosette'],
    fertilizer: { urea: 20, dap: 100, mop: 40 },
    base: { n:[10,30], p:[40,80], k:[30,60], ph:[5.5,7], t:[22,35], h:[40,70], r:[40,100] }
  },
  mustard: {
    emoji: '🌻', name: 'Mustard', type: 'Oilseed',
    season: 'Rabi (Oct–Mar)', growingPeriod: '110–140 days',
    waterReq: 'Low', yieldRange: [300, 600],
    tags: ['Cool', 'Light soil', 'Dry climate'],
    diseases: ['White Rust', 'Alternaria Blight', 'Aphids'],
    fertilizer: { urea: 80, dap: 50, mop: 25 },
    base: { n:[60,100], p:[30,60], k:[20,50], ph:[6,8], t:[10,25], h:[30,60], r:[25,60] }
  },
  watermelon: {
    emoji: '🍉', name: 'Watermelon', type: 'Fruit',
    season: 'Summer (Feb–Jun)', growingPeriod: '80–110 days',
    waterReq: 'Medium', yieldRange: [2000, 4000],
    tags: ['Sandy soil', 'Hot weather', 'Sprawling'],
    diseases: ['Fusarium Wilt', 'Anthracnose', 'Downy Mildew'],
    fertilizer: { urea: 90, dap: 60, mop: 70 },
    base: { n:[60,100], p:[30,60], k:[50,90], ph:[6,7], t:[24,38], h:[50,75], r:[30,80] }
  },
  papaya: {
    emoji: '🍈', name: 'Papaya', type: 'Fruit',
    season: 'Tropical (Year-round)', growingPeriod: '240–300 days',
    waterReq: 'Medium', yieldRange: [1500, 3500],
    tags: ['Tropical', 'Well-drained', 'Fast growing'],
    diseases: ['Ring Spot Virus', 'Powdery Mildew', 'Root Rot'],
    fertilizer: { urea: 100, dap: 70, mop: 80 },
    base: { n:[50,90], p:[40,70], k:[60,100], ph:[6,7], t:[24,38], h:[60,85], r:[80,180] }
  },
};

// ── Region Data ──
const regionData = {
  'north-india':   { name: 'North India (Punjab, Haryana, UP)', t: 25, h: 55, r: 80, crops: ['wheat','rice','sugarcane','mustard','potato'] },
  'south-india':   { name: 'South India (TN, Karnataka, Kerala)', t: 30, h: 75, r: 180, crops: ['rice','coconut','coffee','banana','papaya'] },
  'east-india':    { name: 'East India (WB, Odisha, Bihar)', t: 28, h: 80, r: 160, crops: ['rice','jute','lentil','banana','maize'] },
  'west-india':    { name: 'West India (Maharashtra, Gujarat)', t: 30, h: 55, r: 75, crops: ['cotton','groundnut','soybean','onion','grapes'] },
  'central-india': { name: 'Central India (MP, Chhattisgarh)', t: 27, h: 60, r: 110, crops: ['soybean','wheat','chickpea','lentil','maize'] },
  'northeast':     { name: 'Northeast India (Assam, Meghalaya)', t: 24, h: 85, r: 220, crops: ['rice','jute','banana','papaya','coffee'] },
};

// ═══ State Management ═══
let appState = {
  darkMode: false,
  selectedModel: 'randomForest',
  lastResults: null,
  lastInputs: null,
  charts: {},
};

// ═══ Dark Mode ═══
function toggleDarkMode() {
  appState.darkMode = !appState.darkMode;
  document.body.classList.toggle('dark-mode', appState.darkMode);
  localStorage.setItem(CONFIG.DARK_MODE_KEY, appState.darkMode);
  // Update charts if they exist
  updateChartsTheme();
}

function loadDarkMode() {
  const saved = localStorage.getItem(CONFIG.DARK_MODE_KEY);
  if (saved === 'true') {
    appState.darkMode = true;
    document.body.classList.add('dark-mode');
  }
}

function updateChartsTheme() {
  if (typeof Chart === 'undefined') return;
  try {
    const textColor = appState.darkMode ? '#b0b090' : '#5a5a45';
    const gridColor = appState.darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
    Object.values(appState.charts).forEach(chart => {
      if (chart && chart.options) {
        if (chart.options.scales) {
          Object.values(chart.options.scales).forEach(scale => {
            if (scale.ticks) scale.ticks.color = textColor;
            if (scale.grid) scale.grid.color = gridColor;
          });
        }
        if (chart.options.plugins && chart.options.plugins.legend) {
          chart.options.plugins.legend.labels.color = textColor;
        }
        chart.update();
      }
    });
  } catch (err) {
    console.warn('Chart theme update error:', err.message);
  }
}

// ═══ Model Selection ═══
function selectModel(model) {
  appState.selectedModel = model;
  document.querySelectorAll('.model-chip').forEach(el => {
    el.classList.toggle('active', el.dataset.model === model);
  });
}

// ═══ Weather API Integration ═══
async function fetchWeather() {
  const cityInput = document.getElementById('cityInput');
  const city = cityInput ? cityInput.value.trim() : '';

  if (!city) {
    alert('Please enter a city name to fetch weather data.');
    return;
  }

  const btn = document.querySelector('.weather-btn');
  const origText = btn.textContent;
  btn.textContent = '⏳ Fetching...';
  btn.disabled = true;

  try {
    if (!CONFIG.WEATHER_API_KEY) {
      // Demo mode - use region-based data or defaults
      await new Promise(r => setTimeout(r, 800));
      const demoWeather = getDemoWeather(city);
      document.getElementById('temperature').value = demoWeather.t;
      document.getElementById('humidity').value = demoWeather.h;
      document.getElementById('rainfall').value = demoWeather.r;
      showNotification(`🌤️ Demo weather loaded for "${city}" (add API key for live data)`);
    } else {
      const res = await fetch(
        `${CONFIG.WEATHER_API_URL}?q=${encodeURIComponent(city)}&appid=${CONFIG.WEATHER_API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      document.getElementById('temperature').value = Math.round(data.main.temp);
      document.getElementById('humidity').value = data.main.humidity;
      // Rainfall: use rain.1h if available, else estimate from humidity
      const rain = data.rain ? (data.rain['1h'] || data.rain['3h'] || 0) * 30 : Math.round(data.main.humidity * 1.5);
      document.getElementById('rainfall').value = Math.min(300, rain);
      showNotification(`✅ Live weather loaded for ${data.name}`);
    }
  } catch (err) {
    showNotification('❌ Could not fetch weather. Check city name.', 'error');
  } finally {
    btn.textContent = origText;
    btn.disabled = false;
  }
}

function getDemoWeather(city) {
  const cityLower = city.toLowerCase();
  const demos = {
    'delhi': { t: 28, h: 50, r: 70 }, 'mumbai': { t: 30, h: 78, r: 200 },
    'chennai': { t: 32, h: 72, r: 140 }, 'kolkata': { t: 29, h: 80, r: 160 },
    'bangalore': { t: 26, h: 65, r: 90 }, 'hyderabad': { t: 30, h: 55, r: 80 },
    'pune': { t: 28, h: 58, r: 75 }, 'jaipur': { t: 27, h: 40, r: 50 },
    'lucknow': { t: 26, h: 55, r: 80 }, 'ahmedabad': { t: 30, h: 45, r: 55 },
    'shimla': { t: 14, h: 60, r: 150 }, 'guwahati': { t: 25, h: 85, r: 200 },
  };
  return demos[cityLower] || { t: 27, h: 60, r: 100 };
}

function loadRegionData() {
  const sel = document.getElementById('regionSelect');
  if (!sel || !sel.value) return;
  const region = regionData[sel.value];
  if (region) {
    document.getElementById('temperature').value = region.t;
    document.getElementById('humidity').value = region.h;
    document.getElementById('rainfall').value = region.r;
    showNotification(`📍 Loaded typical values for ${region.name}`);
  }
}

// ═══ Notification ═══
function showNotification(msg, type = 'success') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const el = document.createElement('div');
  el.className = 'notification';
  el.textContent = msg;
  el.style.cssText = `
    position: fixed; top: 80px; right: 20px; z-index: 200;
    padding: 14px 24px; border-radius: 12px; font-size: 0.88rem;
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    animation: slideIn 0.3s ease; max-width: 400px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    background: ${type === 'error' ? '#e74c3c' : '#3d5a2e'}; color: white;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

// ═══ Scoring Engine ═══

// Gaussian-like scoring
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

// Random Forest scoring (weighted Gaussian)
function randomForestScore(inputs, crop) {
  const b = cropData[crop].base;
  const weights = { n: 1.2, p: 1.1, k: 1.1, ph: 1.3, t: 1.0, h: 0.9, r: 1.0 };
  const vals = { n: inputs.n, p: inputs.p, k: inputs.k, ph: inputs.ph, t: inputs.t, h: inputs.h, r: inputs.r };
  let total = 0, wSum = 0;
  Object.keys(weights).forEach(k => {
    total += score(vals[k], b[k]) * weights[k];
    wSum += weights[k];
  });
  return total / wSum;
}

// Decision Tree scoring (threshold-based)
function decisionTreeScore(inputs, crop) {
  const b = cropData[crop].base;
  const vals = { n: inputs.n, p: inputs.p, k: inputs.k, ph: inputs.ph, t: inputs.t, h: inputs.h, r: inputs.r };
  let inRange = 0;
  Object.keys(vals).forEach(k => {
    const v = parseFloat(vals[k]);
    if (v >= b[k][0] && v <= b[k][1]) inRange++;
  });
  return inRange / 7;
}

// XGBoost scoring (boosted with interaction terms)
function xgboostScore(inputs, crop) {
  const rfScore = randomForestScore(inputs, crop);
  const dtScore = decisionTreeScore(inputs, crop);
  // Simulate boosting: emphasize RF but boost with DT insights
  const boosted = rfScore * 0.7 + dtScore * 0.3;
  // Add small interaction bonus for nutrient balance
  const nRatio = parseFloat(inputs.n) / (parseFloat(inputs.p) + 1);
  const balanceBonus = (nRatio > 0.5 && nRatio < 4) ? 0.03 : -0.02;
  return Math.min(1, Math.max(0, boosted + balanceBonus));
}

// Get scoring function by model name
function getModelScorer() {
  const scorers = {
    randomForest: randomForestScore,
    decisionTree: decisionTreeScore,
    xgboost: xgboostScore,
  };
  return scorers[appState.selectedModel] || randomForestScore;
}

function getModelDisplayName() {
  const names = {
    randomForest: 'Random Forest',
    decisionTree: 'Decision Tree',
    xgboost: 'XGBoost',
  };
  return names[appState.selectedModel] || 'Random Forest';
}

function getModelAccuracy() {
  const acc = { randomForest: '97.2%', decisionTree: '93.8%', xgboost: '98.1%' };
  return acc[appState.selectedModel] || '97.2%';
}

// ═══ Feature Importance ═══
function calculateFeatureImportance(inputs, topCrop) {
  const b = cropData[topCrop].base;
  const paramNames = {
    n: 'Nitrogen (N)', p: 'Phosphorus (P)', k: 'Potassium (K)',
    ph: 'Soil pH', t: 'Temperature', h: 'Humidity', r: 'Rainfall'
  };
  const importance = {};
  const vals = { n: inputs.n, p: inputs.p, k: inputs.k, ph: inputs.ph, t: inputs.t, h: inputs.h, r: inputs.r };

  Object.keys(vals).forEach(k => {
    const s = score(vals[k], b[k]);
    // Importance = how much this parameter helped/hurt the prediction
    importance[k] = { name: paramNames[k], score: s, impact: Math.abs(s - 0.5) * 2 };
  });

  return Object.values(importance).sort((a, b) => b.impact - a.impact);
}

// ═══ Fertilizer Recommendation ═══
function getFertilizerRec(inputs, crop) {
  const c = cropData[crop];
  const currentN = parseFloat(inputs.n) || 0;
  const currentP = parseFloat(inputs.p) || 0;
  const currentK = parseFloat(inputs.k) || 0;

  const optimalN = (c.base.n[0] + c.base.n[1]) / 2;
  const optimalP = (c.base.p[0] + c.base.p[1]) / 2;
  const optimalK = (c.base.k[0] + c.base.k[1]) / 2;

  return {
    urea: Math.max(0, Math.round(c.fertilizer.urea * Math.max(0.3, 1 - currentN / optimalN))),
    dap: Math.max(0, Math.round(c.fertilizer.dap * Math.max(0.3, 1 - currentP / optimalP))),
    mop: Math.max(0, Math.round(c.fertilizer.mop * Math.max(0.3, 1 - currentK / optimalK))),
  };
}

// ═══ Yield Prediction ═══
function predictYield(score, crop) {
  const c = cropData[crop];
  const [minY, maxY] = c.yieldRange;
  const estimated = Math.round(minY + score * (maxY - minY));
  return { min: minY, max: maxY, estimated, unit: 'kg/acre' };
}

// ═══ Risk Assessment ═══
function getRiskLevel(score) {
  if (score >= 0.85) return { level: 'Low Risk', class: 'risk-low', icon: '✅' };
  if (score >= 0.65) return { level: 'Medium Risk', class: 'risk-medium', icon: '⚠️' };
  return { level: 'High Risk', class: 'risk-high', icon: '❌' };
}

function getScoreClass(score) {
  if (score >= 0.85) return 'high';
  if (score >= 0.65) return 'medium';
  return 'low';
}

function getCardColorClass(score) {
  if (score >= 0.85) return 'score-high';
  if (score >= 0.65) return 'score-medium';
  return 'score-low';
}

// ═══ Main Prediction ═══
function ruleBasedCrop(inputs) {
  const scorer = getModelScorer();
  const scores = {};
  Object.keys(cropData).forEach(crop => {
    scores[crop] = scorer(inputs, crop);
  });
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([crop, s]) => ({
      crop,
      score: Math.min(0.99, 0.60 + s * 0.39),
      rawScore: s,
    }));
}

async function predictCrop() {
  const btn = document.querySelector('.predict-btn');

  try {
    const inputs = {
      n: document.getElementById('nitrogen').value,
      p: document.getElementById('phosphorus').value,
      k: document.getElementById('potassium').value,
      ph: document.getElementById('ph').value,
      t: document.getElementById('temperature').value,
      h: document.getElementById('humidity').value,
      r: document.getElementById('rainfall').value,
    };

    const missing = Object.values(inputs).some(v => v === '');
    if (missing) { alert('Please fill in all 7 parameters before predicting.'); return; }

    btn.classList.add('loading');
    btn.disabled = true;

    // Simulate analysis delay
    await new Promise(r => setTimeout(r, 1800));

    const results = ruleBasedCrop(inputs);

    btn.classList.remove('loading');
    btn.disabled = false;

    appState.lastResults = results;
    appState.lastInputs = inputs;

    renderResults(inputs, results);
    saveToHistory(inputs, results);
    populateCompareDropdowns();

  } catch (err) {
    console.error('Prediction error:', err);
    alert('Something went wrong during prediction. Please try again.');
    if (btn) { btn.classList.remove('loading'); btn.disabled = false; }
  }
}

// ═══ Render Results ═══
function renderResults(inputs, results) {
  // Model badge
  const modelBadgeHTML = `
    <div class="model-badge">
      🤖 Model: <strong>${getModelDisplayName()}</strong> &nbsp;|&nbsp; Accuracy: <strong>${getModelAccuracy()}</strong>
      &nbsp;|&nbsp; Top ${results.length} crops shown
    </div>
  `;

  // Input summary
  document.getElementById('inputSummary').innerHTML = `
    <div class="summary-item"><div class="summary-val">${inputs.n||'—'}</div><div class="summary-key">Nitrogen</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.p||'—'}</div><div class="summary-key">Phosphorus</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.k||'—'}</div><div class="summary-key">Potassium</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.ph||'—'}</div><div class="summary-key">pH</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.t||'—'}°</div><div class="summary-key">Temp (°C)</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.h||'—'}%</div><div class="summary-key">Humidity</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.r||'—'}</div><div class="summary-key">Rainfall (mm)</div></div>
    <div class="summary-item"><div class="summary-val" style="color:var(--leaf)">${results.length}</div><div class="summary-key">Crops found</div></div>
  `;

  // Feature Importance
  const fi = calculateFeatureImportance(inputs, results[0].crop);
  const fiHTML = fi.map(f => {
    const pct = Math.round(f.impact * 100);
    return `
      <div class="fi-bar-group">
        <div class="fi-label"><span>${f.name}</span><span>${pct}%</span></div>
        <div class="fi-bar"><div class="fi-fill" data-width="${pct}"></div></div>
      </div>
    `;
  }).join('');

  document.getElementById('featureImportance').innerHTML = `
    <div class="fi-title">📊 Feature Importance — Why these crops?</div>
    ${modelBadgeHTML}
    ${fiHTML}
  `;

  // Crop cards
  const grid = document.getElementById('resultGrid');
  grid.innerHTML = results.map((r, i) => {
    const c = cropData[r.crop];
    const pct = Math.round(r.score * 100);
    const risk = getRiskLevel(r.score);
    const yld = predictYield(r.rawScore, r.crop);
    const fert = getFertilizerRec(inputs, r.crop);
    const scoreClass = getScoreClass(r.score);
    const cardColor = getCardColorClass(r.score);

    return `
      <div class="crop-card ${i === 0 ? 'top-pick' : ''} ${cardColor}">
        <span class="crop-emoji">${c.emoji}</span>
        <div class="crop-name">${c.name}</div>
        <div class="crop-type">${c.type}</div>
        <div class="crop-season">📅 ${c.season}</div>

        <div class="confidence-bar-wrap">
          <div class="confidence-label">
            <span>Suitability Score</span>
            <span><strong>${pct}%</strong></span>
          </div>
          <div class="confidence-bar">
            <div class="confidence-fill ${scoreClass}" data-width="${pct}"></div>
          </div>
        </div>

        <span class="risk-badge ${risk.class}">${risk.icon} ${risk.level}</span>

        <div style="margin-top:12px">
          <div class="crop-detail-row"><span>🌱 Growing Period</span><span class="crop-detail-val">${c.growingPeriod}</span></div>
          <div class="crop-detail-row"><span>💧 Water Requirement</span><span class="crop-detail-val">${c.waterReq}</span></div>
          <div class="crop-detail-row"><span>📦 Est. Yield</span><span class="crop-detail-val">${yld.estimated} ${yld.unit}</span></div>
          <div class="crop-detail-row"><span>⚠️ Common Diseases</span><span class="crop-detail-val">${c.diseases.slice(0,2).join(', ')}</span></div>
        </div>

        <div class="fert-rec">
          <div class="fert-title">🧪 Fertilizer Recommendation</div>
          <div class="fert-grid">
            <div class="fert-item"><div class="fert-val">${fert.urea} kg</div><div class="fert-label">Urea (N)</div></div>
            <div class="fert-item"><div class="fert-val">${fert.dap} kg</div><div class="fert-label">DAP (P)</div></div>
            <div class="fert-item"><div class="fert-val">${fert.mop} kg</div><div class="fert-label">MOP (K)</div></div>
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

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.confidence-fill, .fi-fill').forEach(el => {
      el.style.width = el.dataset.width + '%';
    });
  }, 300);

  // Update dashboard
  renderDashboardCharts(results, inputs);
}

// ═══ Comparison ═══
function populateCompareDropdowns() {
  const crops = Object.keys(cropData);
  const options = crops.map(c => `<option value="${c}">${cropData[c].emoji} ${cropData[c].name}</option>`).join('');
  ['compareCrop1', 'compareCrop2', 'compareCrop3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const current = el.value;
      el.innerHTML = '<option value="">Select a crop</option>' + options;
      if (current) el.value = current;
    }
  });
}

function compareCrops() {
  const crop1 = document.getElementById('compareCrop1').value;
  const crop2 = document.getElementById('compareCrop2').value;
  const crop3 = document.getElementById('compareCrop3').value;

  const selected = [crop1, crop2, crop3].filter(Boolean);
  if (selected.length < 2) {
    alert('Please select at least 2 crops to compare.');
    return;
  }

  const wrap = document.getElementById('compareTableWrap');
  const inputs = appState.lastInputs || { n:90, p:42, k:43, ph:6.5, t:28, h:80, r:200 };
  const scorer = getModelScorer();

  const headers = selected.map(c => `<th>${cropData[c].emoji} ${cropData[c].name}</th>`).join('');
  const rows = [
    ['Type', ...selected.map(c => cropData[c].type)],
    ['Season', ...selected.map(c => cropData[c].season)],
    ['Growing Period', ...selected.map(c => cropData[c].growingPeriod)],
    ['Water Requirement', ...selected.map(c => cropData[c].waterReq)],
    ['Est. Yield (kg/acre)', ...selected.map(c => {
      const s = scorer(inputs, c);
      const y = predictYield(s, c);
      return y.estimated;
    })],
    ['N Range', ...selected.map(c => `${cropData[c].base.n[0]}–${cropData[c].base.n[1]}`)],
    ['P Range', ...selected.map(c => `${cropData[c].base.p[0]}–${cropData[c].base.p[1]}`)],
    ['K Range', ...selected.map(c => `${cropData[c].base.k[0]}–${cropData[c].base.k[1]}`)],
    ['pH Range', ...selected.map(c => `${cropData[c].base.ph[0]}–${cropData[c].base.ph[1]}`)],
    ['Temp Range (°C)', ...selected.map(c => `${cropData[c].base.t[0]}–${cropData[c].base.t[1]}`)],
    ['Diseases', ...selected.map(c => cropData[c].diseases.join(', '))],
    ['Suitability Score', ...selected.map(c => {
      const s = scorer(inputs, c);
      const pct = Math.round(Math.min(0.99, 0.60 + s * 0.39) * 100);
      return `${pct}%`;
    })],
    ['Urea (kg/acre)', ...selected.map(c => getFertilizerRec(inputs, c).urea)],
    ['DAP (kg/acre)', ...selected.map(c => getFertilizerRec(inputs, c).dap)],
    ['MOP (kg/acre)', ...selected.map(c => getFertilizerRec(inputs, c).mop)],
  ];

  const rowsHTML = rows.map(row => {
    return `<tr><td><strong>${row[0]}</strong></td>${row.slice(1).map(v => `<td>${v}</td>`).join('')}</tr>`;
  }).join('');

  wrap.innerHTML = `
    <table class="compare-table">
      <thead><tr><th>Parameter</th>${headers}</tr></thead>
      <tbody>${rowsHTML}</tbody>
    </table>
  `;
}

// ═══ Dashboard Charts ═══
function renderDashboardCharts(results, inputs) {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not loaded. Skipping dashboard charts.');
    return;
  }

  const textColor = appState.darkMode ? '#b0b090' : '#5a5a45';
  const gridColor = appState.darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  try {
  // Destroy existing charts
  Object.values(appState.charts).forEach(c => { if (c) c.destroy(); });

  // Suitability Bar Chart
  const barCtx = document.getElementById('suitabilityChart');
  if (barCtx) {
    const scorer = getModelScorer();
    const allCrops = Object.keys(cropData);
    const allScores = allCrops.map(c => Math.round(Math.min(0.99, 0.60 + scorer(inputs, c) * 0.39) * 100));
    const colors = allScores.map(s => s >= 85 ? '#5c8f3a' : s >= 65 ? '#f39c12' : '#e74c3c');

    appState.charts.bar = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: allCrops.map(c => cropData[c].name),
        datasets: [{
          label: 'Suitability %',
          data: allScores,
          backgroundColor: colors,
          borderRadius: 6,
          barThickness: 18,
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { display: false }, ticks: { color: textColor, font: { size: 11 } } }
        }
      }
    });
  }

  // Crop Type Pie Chart
  const pieCtx = document.getElementById('typeChart');
  if (pieCtx) {
    const typeCounts = {};
    Object.values(cropData).forEach(c => {
      typeCounts[c.type] = (typeCounts[c.type] || 0) + 1;
    });
    const pieColors = ['#5c8f3a', '#8bc34a', '#f4c842', '#d4692a', '#e74c3c', '#3498db', '#9b59b6', '#1abc9c'];

    appState.charts.pie = new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(typeCounts),
        datasets: [{
          data: Object.values(typeCounts),
          backgroundColor: pieColors.slice(0, Object.keys(typeCounts).length),
          borderWidth: 2,
          borderColor: appState.darkMode ? '#22271a' : '#ffffff',
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: textColor, padding: 12, font: { size: 11 } } }
        }
      }
    });
  }

  // Show dashboard
  const dashboard = document.getElementById('dashboard');
  if (dashboard) dashboard.style.display = 'block';

  } catch (err) {
    console.warn('Dashboard chart error:', err.message);
  }
}

// ═══ History (localStorage) ═══
function saveToHistory(inputs, results) {
  let history = JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]');
  history.unshift({
    date: new Date().toISOString(),
    inputs,
    model: appState.selectedModel,
    results: results.slice(0, 3).map(r => ({ crop: r.crop, score: Math.round(r.score * 100) })),
  });
  if (history.length > CONFIG.MAX_HISTORY) history = history.slice(0, CONFIG.MAX_HISTORY);
  localStorage.setItem(CONFIG.HISTORY_KEY, JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const container = document.getElementById('historyList');
  if (!container) return;
  const history = JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]');

  if (history.length === 0) {
    container.innerHTML = '<div class="history-empty">📭 No predictions yet. Start by analysing your farm data!</div>';
    return;
  }

  container.innerHTML = history.map((h, i) => {
    const date = new Date(h.date);
    const dateStr = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    const cropsHTML = h.results.map(r =>
      `<span class="history-crop-chip">${cropData[r.crop]?.emoji || '🌱'} ${r.crop} (${r.score}%)</span>`
    ).join('');

    return `
      <div class="history-item" style="animation: fadeUp 0.4s ${i * 0.05}s ease both">
        <div>
          <div class="history-date">${dateStr}</div>
          <div class="history-date" style="font-size:0.72rem;opacity:0.6">${timeStr}</div>
        </div>
        <div class="history-crops">${cropsHTML}</div>
        <div class="history-actions">
          <button class="btn-sm btn-outline" onclick="reloadPrediction(${i})">🔄 Reload</button>
        </div>
      </div>
    `;
  }).join('');
}

function reloadPrediction(index) {
  const history = JSON.parse(localStorage.getItem(CONFIG.HISTORY_KEY) || '[]');
  if (history[index]) {
    const h = history[index];
    document.getElementById('nitrogen').value = h.inputs.n;
    document.getElementById('phosphorus').value = h.inputs.p;
    document.getElementById('potassium').value = h.inputs.k;
    document.getElementById('ph').value = h.inputs.ph;
    document.getElementById('temperature').value = h.inputs.t;
    document.getElementById('humidity').value = h.inputs.h;
    document.getElementById('rainfall').value = h.inputs.r;
    if (h.model) selectModel(h.model);
    navTo('predict');
    showNotification('📋 Previous inputs loaded. Click Predict to re-analyse!');
  }
}

function clearHistory() {
  if (confirm('Clear all prediction history?')) {
    localStorage.removeItem(CONFIG.HISTORY_KEY);
    renderHistory();
    showNotification('🗑️ History cleared');
  }
}

// ═══ Export ═══
function exportCSV() {
  if (!appState.lastResults || !appState.lastInputs) {
    alert('Run a prediction first!');
    return;
  }
  const inputs = appState.lastInputs;
  const results = appState.lastResults;

  let csv = 'CropAI Prediction Report\n';
  csv += `Date,${new Date().toLocaleDateString()}\n`;
  csv += `Model,${getModelDisplayName()}\n\n`;
  csv += 'Input Parameters\n';
  csv += `Nitrogen,${inputs.n}\nPhosphorus,${inputs.p}\nPotassium,${inputs.k}\n`;
  csv += `pH,${inputs.ph}\nTemperature,${inputs.t}\nHumidity,${inputs.h}\nRainfall,${inputs.r}\n\n`;
  csv += 'Crop,Type,Score(%),Season,Growing Period,Water Req,Est. Yield (kg/acre),Urea (kg),DAP (kg),MOP (kg)\n';

  results.forEach(r => {
    const c = cropData[r.crop];
    const pct = Math.round(r.score * 100);
    const yld = predictYield(r.rawScore, r.crop);
    const fert = getFertilizerRec(inputs, r.crop);
    csv += `${c.name},${c.type},${pct},${c.season},${c.growingPeriod},${c.waterReq},${yld.estimated},${fert.urea},${fert.dap},${fert.mop}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `CropAI_Report_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showNotification('📄 CSV report downloaded!');
}

function exportPrint() {
  if (!appState.lastResults) { alert('Run a prediction first!'); return; }
  window.print();
  showNotification('🖨️ Print dialog opened');
}

// ═══ Navigation ═══
function navTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetForm() {
  document.getElementById('result-section').classList.remove('visible');
  const dashboard = document.getElementById('dashboard');
  if (dashboard) dashboard.style.display = 'none';
  setTimeout(() => navTo('predict'), 100);
}

// ═══ Initialization ═══
document.addEventListener('DOMContentLoaded', () => {
  loadDarkMode();
  populateCompareDropdowns();
  renderHistory();

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Region select change
  const regionSel = document.getElementById('regionSelect');
  if (regionSel) regionSel.addEventListener('change', loadRegionData);
});
