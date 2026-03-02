 # 🌾 CropAI — Smart Crop Recommendation System

> An AI-powered web application that recommends the best crops for farmers based on soil nutrients and environmental conditions, using simulated Machine Learning models with yield predictions, fertilizer advice, and risk analysis.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange)

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Problem Statement](#-problem-statement)
- [Key Features](#-key-features)
- [Smart Farmer Assistant](#-smart-farmer-assistant)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [How It Works](#-how-it-works)
- [ML Models Explained](#-ml-models-explained)
- [Crop Knowledge Base](#-crop-knowledge-base)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [API Integration](#-api-integration)
- [Future Enhancements](#-future-enhancements)
- [What I Learned](#-what-i-learned)

---

## 🌱 About the Project

**CropAI** is an intelligent crop recommendation system that helps farmers and agricultural enthusiasts make data-driven decisions about which crops to grow. The user inputs 7 key parameters about their soil and local climate, selects one of 3 ML model simulations, and receives:

- **Top 5 crop recommendations** ranked by suitability score
- **Yield predictions** (estimated kg/acre)
- **Fertilizer dosage recommendations** (Urea, DAP, MOP)
- **Risk assessment** (Low / Medium / High)
- **Feature importance analysis** — which input parameter influenced the result most
- **Interactive dashboard** with Chart.js visualizations
- **Side-by-side crop comparison** table (15 metrics)
- **History tracking** with localStorage persistence
- **CSV export** and **print report** functionality

The application is a **pure frontend** project (no backend server required) and runs entirely in the browser.

---

## 🎯 Problem Statement

Indian farmers often struggle with **crop selection** due to:

1. **Lack of data** — They rely on tradition rather than soil testing results
2. **Climate variability** — Changing weather patterns make old practices unreliable
3. **No decision support tools** — Existing resources are either too technical or inaccessible
4. **Fertilizer overuse/underuse** — Without recommendations, farmers waste money or damage soil

**CropAI solves this** by providing an easy-to-use web interface where farmers (or agricultural advisors) input soil test results and local weather data, and receive actionable recommendations powered by rule-based ML model simulations.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **3 ML Models** | Random Forest, Decision Tree, and XGBoost (simulated scoring engines) |
| 🌾 **22 Crop Database** | Grains, pulses, fruits, vegetables, oilseeds, fibers, plantations |
| 📊 **Feature Importance** | Visual bar chart showing which input parameter matters most |
| 📈 **Interactive Dashboard** | Chart.js bar chart (all 22 crops) + doughnut chart (crop types) |
| ⚖️ **Crop Comparison** | Side-by-side table comparing 2–3 crops across 15 metrics |
| 🧪 **Fertilizer Advice** | Calculates Urea/DAP/MOP dosage based on current soil vs optimal levels |
| 📦 **Yield Prediction** | Estimated yield (kg/acre) based on suitability score |
| ⚠️ **Risk Assessment** | Color-coded badges (Low ✅ / Medium ⚠️ / High ❌) |
| 🌤️ **Weather API** | OpenWeatherMap integration with demo fallback for 12 Indian cities |
| 📍 **Region Auto-fill** | Select region (North/South/East/West/Central/NE India) → auto-populates climate values |
| 🌙 **Dark/Light Mode** | Toggle with localStorage persistence |
| 📜 **Prediction History** | Last 20 predictions saved in localStorage, reloadable anytime |
| 📄 **CSV Export** | Download full prediction report as a `.csv` file |
| 🖨️ **Print Report** | Browser print dialog with print-optimized CSS |
| 💡 **Input Tooltips** | Farmer-friendly explanations for each parameter |
| 📱 **Responsive Design** | Breakpoints at 1024px, 900px, and 500px |
| 🎨 **Color-coded Cards** | Green (≥85%), Yellow (65–84%), Red (<65%) result cards |
| ✨ **Animations** | Scroll reveal, floating orbs, pulsing dots, sliding bars |
| 🌾 **Smart Farmer Assistant** | Guided step-by-step questionnaire that converts field observations into estimated NPK/pH/climate values — no lab needed |

---

## 🌾 Smart Farmer Assistant

> **Dual-mode input system** — The app supports both precise lab values AND simple field-based observations, making it accessible to farmers without soil testing labs.

### The Problem
Most farmers don't have access to soil testing labs. Asking them to enter exact Nitrogen, Phosphorus, and Potassium values is unrealistic.

### The Solution
The **Smart Farmer Assistant** is a guided 7-step questionnaire that asks simple, visual questions about the farmer's field:

| Step | Question | Options | Estimated Value |
|------|----------|---------|----------------|
| 1 | 🌿 What color are your leaves? | Pale yellow / Normal green / Dark green | N: 30 / 60 / 90 |
| 2 | 🌸 How are roots & flowers? | Poor / Normal / Strong | P: 25 / 50 / 85 |
| 3 | 🍂 How are leaf edges? | Brown/burnt / Average / Strong | K: 25 / 55 / 95 |
| 4 | ⚗️ What's your soil like? | Acidic / Neutral / Alkaline | pH: 5.5 / 6.8 / 7.8 |
| 5 | 🌡️ How's the weather? | Cold / Moderate / Hot | T: 18 / 26 / 34°C |
| 6 | 💧 How's the air moisture? | Dry / Moist / Humid | H: 35 / 55 / 80% |
| 7 | 🌦️ How's the rainfall? | Little / Moderate / Heavy | R: 35 / 80 / 160mm |

### How It Works Technically

```
Field Observations (radio buttons)
        ↓
estimateNitrogen() / estimatePhosphorus() / ... (7 converter functions)
        ↓
Estimated numeric values
        ↓
Same ML scoring engine (RF / DT / XGBoost)
        ↓
Crop recommendations with full report
```

### What This Makes The System

✅ **Rule-Based Expert System** (symptom → estimated value conversion)  
+  
✅ **Machine Learning Model** (scoring engine)  
=  
🔥 **Hybrid Intelligent Agriculture System**

### Interview Talking Point
> *"I designed a dual-mode AI crop advisory system that supports both lab-based inputs and symptom-based expert estimation for rural accessibility — combining rule-based expert systems with ML scoring models."*

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Structure** | HTML5 | Semantic markup, form validation, accessibility |
| **Styling** | CSS3 | Custom properties (variables), Grid/Flexbox, `clamp()`, animations, `@media` queries, print styles |
| **Logic** | Vanilla JavaScript (ES6+) | Scoring engines, DOM manipulation, state management, async/await |
| **Charts** | Chart.js 4.x (CDN) | Bar chart (suitability), Doughnut chart (crop type distribution) |
| **Weather** | OpenWeatherMap API | Real-time temperature, humidity, rainfall data |
| **Storage** | localStorage | Dark mode preference, prediction history |
| **Fonts** | Google Fonts | Playfair Display (headings), DM Sans (body) |
| **Version Control** | Git + GitHub | Source code management |

> **No frameworks, no build tools, no dependencies to install.** The app runs by simply opening `index.html` in a browser.

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────┐
│                    USER INTERFACE                     │
│  ┌──────┐ ┌──────────┐ ┌─────────┐ ┌─────────────┐  │
│  │ Hero │ │ Predict  │ │ Results │ │  Dashboard  │  │
│  │      │ │  Form    │ │  Cards  │ │  (Chart.js) │  │
│  └──────┘ └────┬─────┘ └────▲────┘ └──────▲──────┘  │
│                │            │              │          │
│           ┌────▼────────────┴──────────────┘          │
│           │         PREDICTION ENGINE                 │
│           │  ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│           │  │ Random   │ │ Decision │ │ XGBoost  │  │
│           │  │ Forest   │ │   Tree   │ │ Ensemble │  │
│           │  └──────────┘ └──────────┘ └──────────┘  │
│           │         ▲ Gaussian Scoring ▲              │
│           └─────────┼──────────────────┘              │
│                     │                                 │
│     ┌───────────────┼───────────────────┐             │
│     │    CROP KNOWLEDGE BASE (22 crops)  │             │
│     │  • Optimal parameter ranges (N,P,K,│             │
│     │    pH, Temp, Humidity, Rainfall)    │             │
│     │  • Season, growing period, diseases│             │
│     │  • Fertilizer ratios, yield ranges │             │
│     └────────────────────────────────────┘             │
│                                                       │
│  ┌────────────────┐  ┌───────────┐  ┌──────────────┐  │
│  │ Weather API    │  │ Compare   │  │  History     │  │
│  │ (OpenWeather)  │  │  Engine   │  │ (localStorage│  │
│  └────────────────┘  └───────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────┘
```

### Data Flow

```
User Input (7 params) → Validation → Scoring Engine → Sort & Rank
    → Render Cards → Feature Importance → Yield Prediction
    → Fertilizer Calc → Risk Assessment → Dashboard Charts
    → Save to History → Enable Compare/Export
```

---

## 🔬 How It Works

### Step 1: Input Collection
The user enters **7 parameters**:

| Parameter | Symbol | Range | What it measures |
|-----------|--------|-------|------------------|
| Nitrogen | N | 0–140 | Leaf & stem growth nutrient |
| Phosphorus | P | 0–145 | Root development & flowering |
| Potassium | K | 0–205 | Disease resistance & plant strength |
| Soil pH | pH | 0–14 | Acidity/alkalinity of soil |
| Temperature | T | -10–55°C | Average ambient temperature |
| Humidity | H | 0–100% | Relative atmospheric humidity |
| Rainfall | R | 0–300mm | Average monthly rainfall |

### Step 2: Scoring
Each crop is scored against the user's inputs. The **Gaussian-like scoring function** works as:

```
score(value, [low, high]) =
  if value ∈ [low, high]:  1 − |value − midpoint| / (halfRange × 3)
  if value outside range:   max(0, 1 − distance / (halfRange + 20))
```

This gives a smooth curve where values perfectly in the middle of the optimal range score ~1.0, and values far outside score close to 0.

### Step 3: Model Selection
The user picks one of 3 models. Each model applies the scoring differently:

| Model | Technique | Simulated Accuracy |
|-------|-----------|-------------------|
| 🌲 Random Forest | Weighted Gaussian scoring (pH weighted 1.3×, N weighted 1.2×) | 97.2% |
| 🌳 Decision Tree | Binary threshold — counts how many params fall in optimal range | 93.8% |
| ⚡ XGBoost | Ensemble: 70% RF + 30% DT + nutrient balance interaction term | 98.1% |

### Step 4: Results
Top 5 crops are displayed with:
- Confidence score (60–99%)
- Color-coded card (green/yellow/red)
- Risk badge
- Yield estimate
- Fertilizer recommendation
- Feature importance bar chart

---

## 🤖 ML Models Explained

> **Important for HR:** These are **rule-based simulations** of ML model behavior, not trained neural networks. They demonstrate understanding of how these algorithms conceptually work.

### Random Forest (Simulated)
- Uses **weighted parameter scoring** — pH and nitrogen are given more importance
- Each parameter is scored using a Gaussian-like function
- Final score = weighted average of all 7 parameter scores
- **Real-world analogy:** Like having multiple decision trees "vote" on the best crop

### Decision Tree (Simulated)
- Uses **binary threshold checks** — is each parameter within the optimal range?
- Score = (number of in-range parameters) / 7
- Simple and interpretable, but less nuanced
- **Real-world analogy:** Like a flowchart — "Is temperature 20–35°C? Yes → next check"

### XGBoost (Simulated)
- **Ensemble of RF and DT:** 70% Random Forest score + 30% Decision Tree score
- Adds an **interaction term** (nutrient balance bonus) for N:P ratio
- Slightly more accurate due to combining strengths of both models
- **Real-world analogy:** Like boosting — each model corrects the previous one's errors

### Feature Importance
After prediction, the system shows which input parameter had the **most influence** on the result:
- Calculated by measuring how far each parameter's score deviates from 0.5 (neutral)
- Parameters that strongly match or strongly mismatch the optimal range have high importance
- Displayed as horizontal percentage bars

---

## 🌿 Crop Knowledge Base

The app includes **22 crops** across 7 categories:

| Category | Crops |
|----------|-------|
| 🌾 **Grains** | Rice, Wheat, Maize |
| 🫘 **Pulses** | Chickpea, Lentil |
| 🍎 **Fruits** | Mango, Banana, Grapes, Apple, Watermelon, Papaya |
| 🥔 **Vegetables** | Potato, Tomato, Onion |
| 🌻 **Oilseeds** | Soybean, Groundnut, Mustard |
| 🌼 **Fiber** | Cotton, Jute |
| 🥥 **Plantation** | Coconut, Coffee |
| 🎋 **Cash Crop** | Sugarcane |

Each crop stores:
- `emoji` — visual identifier
- `name`, `type` — classification
- `season` — Kharif/Rabi/Annual/Perennial
- `growingPeriod` — days to harvest
- `waterReq` — Low/Medium/High/Very High
- `yieldRange` — [min, max] kg/acre
- `tags` — key characteristics
- `diseases` — common threats
- `fertilizer` — optimal Urea/DAP/MOP in kg/acre
- `base` — optimal ranges for all 7 input parameters

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (VS Code recommended)
- (Optional) [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) VS Code extension for live reload

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/cropai.git

# 2. Navigate to the project
cd cropai

# 3. Open in VS Code
code .

# 4. Option A: Open index.html directly in browser
open index.html

# 4. Option B: Use Five Server (right-click index.html → "Open with Five Server")

# 4. Option C: Use Python HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Enable Live Weather Data (Optional)
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api) (free tier)
2. Get your API key
3. Open `js/script.js` and add your key:
   ```javascript
   const CONFIG = {
     WEATHER_API_KEY: 'your_api_key_here', // ← Add here
     ...
   };
   ```

---

## 📁 Folder Structure

```
project-agri/
├── index.html              # Main HTML page (335 lines)
│                            #   - Navigation with dark mode toggle
│                            #   - Hero section with stats
│                            #   - Prediction form (7 inputs + model selector)
│                            #   - Results section (cards + charts)
│                            #   - Compare, History, How it Works sections
│                            #   - Footer
│
├── css/
│   └── styles.css           # Complete stylesheet (~750 lines)
│                            #   - CSS custom properties (light + dark themes)
│                            #   - Responsive breakpoints (1024px, 900px, 500px)
│                            #   - Animations (fadeUp, slideIn, float, pulse, spin)
│                            #   - Print-optimized styles
│                            #   - Color-coded result cards
│
├── js/
│   └── script.js            # Application logic (~975 lines)
│                            #   - CONFIG object (API keys, settings)
│                            #   - cropData (22 crops knowledge base)
│                            #   - regionData (6 Indian agricultural regions)
│                            #   - 3 scoring engines (RF, DT, XGBoost)
│                            #   - Weather API integration + demo fallback
│                            #   - Feature importance calculator
│                            #   - Fertilizer recommendation engine
│                            #   - Yield prediction module
│                            #   - Risk assessment system
│                            #   - Chart.js dashboard rendering
│                            #   - localStorage history management
│                            #   - CSV export + print functionality
│                            #   - Dark mode + scroll animations
│
├── .github/
│   └── copilot-instructions.md  # AI assistant context file
│
└── README.md                # This file
```

---

## 🌤️ API Integration

### OpenWeatherMap API
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather`
- **Method:** GET with query params `?q={city}&appid={key}&units=metric`
- **Data used:** `main.temp` (temperature), `main.humidity`, `rain.1h` or estimated rainfall
- **Demo mode:** When no API key is set, uses hardcoded weather data for 12 Indian cities (Delhi, Mumbai, Chennai, Kolkata, Bangalore, Hyderabad, Pune, Jaipur, Lucknow, Ahmedabad, Shimla, Guwahati)

### Chart.js CDN
- **URL:** `https://cdn.jsdelivr.net/npm/chart.js@4/dist/chart.umd.min.js`
- **Loaded with:** `defer` attribute (non-blocking)
- **Graceful degradation:** If CDN fails, dashboard is skipped (app still works)

---

## 📊 Sample Test Values

Use these to quickly test the application:

| Scenario | N | P | K | pH | Temp | Humidity | Rainfall | Expected Top Crop |
|----------|---|---|---|----|------|----------|----------|-------------------|
| Rice paddy | 90 | 42 | 43 | 6.5 | 28 | 82 | 200 | 🌾 Rice |
| Wheat field | 120 | 45 | 45 | 7.0 | 18 | 55 | 75 | 🌿 Wheat |
| Apple orchard | 20 | 130 | 200 | 6.2 | 15 | 50 | 150 | 🍎 Apple |
| Cotton farm | 120 | 60 | 70 | 7.0 | 30 | 50 | 80 | 🌼 Cotton |
| Coffee estate | 100 | 35 | 60 | 5.5 | 22 | 75 | 200 | ☕ Coffee |

---

## 🔮 Future Enhancements

- [ ] **Backend ML Models** — Train actual Random Forest / XGBoost models with Python (scikit-learn) and serve via Flask/FastAPI
- [ ] **User Authentication** — Login system to save predictions per user
- [ ] **Soil Sensor Integration** — IoT sensor data input via MQTT/WebSocket
- [ ] **Crop Disease Prediction** — Image-based disease detection using CNN
- [ ] **Market Price Integration** — Real-time mandi prices to suggest most profitable crops
- [ ] **Multi-language Support** — Hindi, Tamil, Telugu, Bengali translations
- [ ] **PWA (Progressive Web App)** — Offline support with service workers
- [ ] **Deployment** — Host on Vercel / Netlify / GitHub Pages

---

## 📚 What I Learned

Building CropAI gave me hands-on experience with:

| Skill | How I Applied It |
|-------|------------------|
| **Frontend Development** | Built a complete SPA with HTML5, CSS3, and vanilla JS — no framework dependency |
| **CSS Architecture** | Used custom properties for theming (light/dark mode), Grid + Flexbox for layouts, `clamp()` for fluid typography, and `@media` queries for responsive design |
| **JavaScript (ES6+)** | Async/await for API calls, template literals for dynamic HTML, destructuring, arrow functions, array methods (`.map`, `.filter`, `.sort`, `.reduce`), localStorage API |
| **Algorithm Design** | Implemented Gaussian-like scoring functions, weighted averaging, ensemble methods (combining RF + DT scores), and feature importance ranking |
| **API Integration** | Consumed OpenWeatherMap REST API with error handling and demo fallback |
| **Data Visualization** | Created interactive charts (bar + doughnut) with Chart.js, including dynamic theme updates |
| **State Management** | Managed app state (dark mode, selected model, results, charts) in a centralized `appState` object |
| **Error Handling** | Graceful degradation for CDN failures, try-catch wrappers, user-friendly error messages |
| **UX/UI Design** | Agricultural-themed color palette, input tooltips for farmers, loading animations, scroll reveal effects, color-coded confidence indicators |
| **Version Control** | Git workflow — init, add, commit, push to GitHub |

---

## 🧑‍💻 How to Explain This Project to HR

### One-liner
> "I built an AI-powered crop recommendation web app that analyzes soil and climate data to suggest the best crops with yield predictions and fertilizer advice."

### 30-second pitch
> "CropAI is a smart agriculture web application I built from scratch using HTML, CSS, and JavaScript. It takes 7 inputs about soil nutrients and weather conditions, runs them through 3 simulated ML scoring models — Random Forest, Decision Tree, and XGBoost — and recommends the top 5 crops out of 22 in the database. Each recommendation includes a confidence score, estimated yield, fertilizer dosage, and risk assessment. It also has a real-time weather API integration, interactive Chart.js dashboard, dark mode, prediction history, CSV export, and crop comparison. The entire app runs client-side with no backend, demonstrating my understanding of frontend architecture, algorithm design, API integration, and data visualization."

### Key talking points for HR
1. **Problem-solving** — Identified a real agricultural problem and built a data-driven solution
2. **Full-stack thinking** — Though frontend-only, the architecture is designed to plug in a real ML backend
3. **Algorithm knowledge** — Implemented 3 different scoring approaches (weighted, threshold, ensemble)
4. **API experience** — Integrated OpenWeatherMap with error handling and fallback
5. **UI/UX awareness** — Tooltips for non-technical users, color coding, responsive design
6. **Data handling** — localStorage persistence, CSV export, state management
7. **Code quality** — Organized 975-line JS file with clear sections, error handling, and graceful degradation

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with 🌱 and ♥ for smarter farming
</p>
   