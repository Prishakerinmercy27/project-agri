# CropAI Copilot Instructions

## Project Overview
**CropAI** is an intelligent crop recommendation web application using machine learning to suggest the best crops based on farm parameters. The frontend is a single-page HTML/CSS/JavaScript application with embedded scoring logic and UI/UX focused on agricultural decision-making.

## Architecture

### Frontend Structure (Single HTML File)
- **Visual Design**: Uses CSS custom properties (`--earth`, `--moss`, `--leaf`, `--sprout`, `--sun`) for theming
- **Sections**: Hero (hero section), Predict form (#predict), Results (#result-section), How It Works (#how)
- **JavaScript**: Client-side prediction engine with rule-based crop matching (no backend dependency for demo)

### Core Prediction Engine
The `ruleBasedCrop()` function scores crops by comparing input parameters against a `cropData` knowledge base:
- **Scoring Formula**: `score()` function uses Gaussian distribution to reward values within optimal ranges
- **7 Input Parameters**: Nitrogen (N), Phosphorus (P), Potassium (K), pH, Temperature, Humidity, Rainfall
- **Top 3 Results**: Returns best 3 crops sorted by suitability score (0–99%)
- **Crop Database**: 12 crops with emoji, season, tags, and valid ranges for each parameter

### Crop Data Structure
Each crop stores:
```javascript
{
  emoji: '🌾',           // Visual identifier
  season: 'Kharif (Jun–Nov)',  // Growing season
  tags: ['Wet soil', ...],      // Key characteristics
  base: {                        // Valid parameter ranges
    n: [60, 120], p: [30, 60], k: [30, 60], 
    ph: [5.5, 7], t: [20, 37], h: [70, 100], r: [150, 300]
  }
}
```

## Key Developer Workflows

### Integrating Backend API
Replace the demo `ruleBasedCrop()` call with actual ML predictions:
```javascript
// In predictCrop(), replace:
// const results = ruleBasedCrop(inputs);
// With:
const res = await fetch('/api/predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(inputs)
});
const data = await res.json();
const results = data.recommendations; // [{crop, score}, ...]
```

### Adding New Crops
1. Add crop entry to `cropData` object with all 7 parameter ranges
2. Update tags (show crop characteristics users should know)
3. Set emoji (visual identifier in results)
4. Define season and optimal growing conditions

### Customizing Scoring
- Modify `score()` function to adjust tolerance for out-of-range values
- Weight different parameters differently by adjusting divisor in `computeScore()` (currently equal weight)
- Change top-N results by modifying `.slice(0, 3)` in `ruleBasedCrop()`

## Design System & Styling Patterns

### Color Variables
- **Neutrals**: `--earth` (dark), `--soil`, `--cream` (light), `--mist`
- **Agricultural**: `--moss`, `--leaf`, `--sprout` (greens), `--sun` (accent yellow)
- **Structure**: All padding/margins use multiples of 4px (4, 8, 12, 16, 20, 28, 40, 60, 80, 100px)

### Common Patterns
- **Navigation**: Fixed header with blur backdrop
- **Hero**: Two-column grid with floating orb animation + orbiting dots
- **Forms**: Input groups with labels, placeholders, hints, and `min`/`max` validation
- **Result Cards**: Show emoji, name, season, confidence bar, and tags
- **Animations**: `fadeUp` entrance, `float` continuous, `pulse` accent dots, `spin` orbits

## Conventions & Patterns

### JavaScript Naming
- `id="..."` selectors use kebab-case (e.g., `#nitrogen`, `#result-section`)
- Functions use camelCase and are action-oriented: `predictCrop()`, `renderResults()`, `navTo()`
- Const objects in PascalCase: `cropData`

### HTML Structure
- Use semantic sections with `id` for navigation targets
- Input groups always have: `<label>`, `<input>`, `<span class="input-hint">`
- Result rendering is dynamic via `innerHTML` (no templating library)

### CSS Organization
- Variables first, then resets, then component layers (nav, hero, form, results)
- Animations defined inline with `@keyframes`
- Uses `clamp()` for fluid typography responsive to viewport width
- Grid layouts preferred over Flexbox for multi-column sections

## Integration Points & Dependencies

### External Libraries
- **Fonts**: Google Fonts (Playfair Display serif for headers, DM Sans sans-serif for body)
- **No front-end framework**: Pure vanilla JavaScript
- **No ML library**: Predictions delegated to backend API (to be connected)

### Data Flow
1. User enters 7 parameters in form
2. `predictCrop()` validates and sends to backend (currently uses demo function)
3. Backend returns array of `{crop, score}` objects
4. `renderResults()` renders input summary and crop cards
5. Confidence bars animate in with `setTimeout()`

### Responsive Breakpoints
- Design uses viewport-relative units (`vw`, `clamp()`)
- Mobile-first not implemented; assumes desktop-first with no explicit breakpoints

## Common Tasks

### Test Prediction Logic
- Open browser console and call `computeScore({n:90, p:42, k:43, ph:6.5, t:28, h:80, r:200}, 'rice')` to score manually
- Adjust crop ranges in `cropData` and re-run to see score impact

### Modify Form Validation
- Update input `min`/`max` attributes to change acceptable ranges
- Adjust validation check in `predictCrop()` if adding/removing parameters

### Add Seasonal Recommendations
- Extend `renderResults()` to show planting windows based on current month
- Cross-reference crop `.season` with JavaScript `Date.now()` logic
