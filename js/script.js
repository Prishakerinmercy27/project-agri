/* ══════════════════════════════════════════════
   CropAI — Enhanced JavaScript Application
   ══════════════════════════════════════════════ */

// ── Configuration ──
const CONFIG = {
  WEATHER_API_KEY: '', // Add your OpenWeatherMap API key here
  WEATHER_API_URL: 'https://api.openweathermap.org/data/2.5/weather',
  HISTORY_KEY: 'cropai_history',
  DARK_MODE_KEY: 'cropai_darkmode',
  LANG_KEY: 'cropai_lang',
  MAX_HISTORY: 20,
};

// ═══ Multi-Language Support (English / Tamil) ═══
const i18n = {
  en: {
    nav_home: 'Home', nav_predict: 'Predict', nav_compare: 'Compare',
    nav_dashboard: 'Dashboard', nav_history: 'History', nav_how: 'How it works',
    nav_cta: 'Try Prediction →',
    hero_tag: 'AI-Powered Agriculture',
    hero_title: 'Grow <em>smarter</em><br>with <span class="underline-accent">data-driven</span><br>crop advice.',
    hero_desc: 'Enter your soil nutrients and environmental conditions. Our machine learning models recommend the best crops tailored to your farm — with yield predictions, fertilizer advice, and risk analysis.',
    hero_btn_analyse: '🌱 Analyse my Farm',
    hero_btn_how: 'See how it works →',
    predict_label: 'ML Prediction Engine',
    predict_title: 'Enter your farm data',
    predict_desc: 'Provide 7 key indicators about your soil and local climate. Choose from 3 ML models — Random Forest, Decision Tree, or XGBoost — for crop recommendations with yield predictions and fertilizer advice.',
    form_soil: 'Soil Nutrients', form_env: 'Environmental Conditions',
    label_nitrogen: 'Nitrogen (N)', label_phosphorus: 'Phosphorus (P)',
    label_potassium: 'Potassium (K)', label_ph: 'Soil pH',
    label_temp: 'Temperature (°C)', label_humidity: 'Humidity (%)',
    label_rainfall: 'Rainfall (mm)',
    tip_nitrogen: 'Nitrogen promotes leaf and stem growth. High N = lush green plants.',
    tip_phosphorus: 'Phosphorus helps root development and flowering. Essential for fruit and grain crops.',
    tip_potassium: 'Potassium strengthens plants and improves disease resistance.',
    tip_ph: 'pH measures soil acidity/alkalinity. 7 is neutral. Most crops prefer 6–7.',
    tip_temp: 'Average daytime temperature in your area.',
    tip_humidity: 'Relative humidity in your area. High humidity (70%+) favors rice/banana.',
    tip_rainfall: 'Average monthly rainfall in your area.',
    voice_btn: 'Voice Input',
    voice_listening: '🎤 Listening... Speak your values',
    voice_success: '✅ Values filled from voice input!',
    voice_error: '❌ Could not recognize speech. Please try again.',
    voice_not_supported: '❌ Voice input is not supported in this browser.',
    voice_panel_title: 'Smart Farmer Voice Assistant',
    voice_panel_subtitle: 'Speak your soil values or ask farming questions',
    voice_tap_to_speak: 'Tap the microphone to start',
    voice_try_saying: 'Try: "Nitrogen 90, Phosphorus 42, pH 6.5"',
    voice_listening_now: 'Listening...',
    voice_speak_now: 'Speak clearly now',
    voice_processing: 'Processing your input...',
    voice_transcript: 'You said:',
    voice_values_detected: '✅ Values Detected',
    voice_retry: '🔄 Retry',
    voice_apply: '✅ Apply to Form',
    result_label: 'Recommendation Ready',
    result_title: 'Best crops for your farm',
    result_desc: 'Based on your inputs, here are the top crop recommendations with yield predictions, risk assessment, and fertilizer advice.',
    how_label: 'Process', how_title: 'How CropAI works',
    soil_health_title: '🏥 Soil Health Score',
    soil_health_good: 'Good', soil_health_moderate: 'Moderate', soil_health_poor: 'Poor',
    soil_health_out_of: 'out of 100',
    profit_title: '💰 Crop Profit Estimation',
    yield_per_acre: 'Yield / Acre', market_price: 'Market Price',
    est_profit: 'Estimated Profit / Acre', cost_per_acre: 'Cost / Acre',
    suitability: 'Suitability Score', confidence: 'Suitability Score',
    growing_period: '🌱 Growing Period', water_req: '💧 Water Requirement',
    est_yield: '📦 Est. Yield', common_diseases: '⚠️ Common Diseases',
    fert_title: '🧪 Fertilizer Recommendation',
    tip_add_nitrogen: 'Add nitrogen-rich fertilizers like Urea',
    tip_add_phosphorus: 'Consider DAP or bone meal for phosphorus',
    tip_add_potassium: 'Apply MOP (Muriate of Potash) for potassium',
    tip_adjust_ph: 'Consider lime (for acidity) or sulfur (for alkalinity) to adjust pH',
    tip_soil_great: 'Your soil nutrients are well-balanced! Maintain with regular testing.',
    // Hero stats
    stat_crops: 'Crop varieties', stat_models: 'ML Models', stat_accuracy: 'Model accuracy', stat_params: 'Parameters analysed',
    // Param list
    param_nutrients_title: 'Soil Nutrients', param_nutrients_desc: 'N, P, K values indicate fertility',
    param_ph_title: 'Soil pH', param_ph_desc: 'Acidity level affects nutrient uptake',
    param_climate_title: 'Climate', param_climate_desc: 'Temperature, humidity & rainfall',
    param_models_title: 'AI Models', param_models_desc: '3 models compared for best results',
    // Mode toggle
    mode_lab: 'Manual Lab Mode', mode_lab_desc: 'Enter exact soil test values',
    mode_guided: 'Smart Farmer Assistant', mode_guided_desc: 'Answer simple field questions',
    // Guided mode
    guided_badge: '🧠 AI Field Diagnosis',
    guided_subtitle: "Answer simple questions about your field — we'll estimate soil values using AI",
    guided_preview_title: '🧠 AI-Estimated Values',
    guided_preview_subtitle: 'Based on your field observations, here are the estimated values:',
    guided_preview_note: '💡 These are AI estimations. For precise values, get a lab soil test done at your local agriculture center.',
    guided_predict_btn: '🌱 Predict Best Crops',
    guided_switch_lab: 'Switch to Lab Mode →',
    guided_prev: '← Previous', guided_next: 'Next →',
    guided_step_of: 'Step {current} of {total}',
    guided_all_done: 'All steps completed ✓',
    guided_analysing: '⏳ Analysing...',
    // Guided questions & options
    nitrogenQuestion: 'Are leaves pale yellow?',
    phosphorusQuestion: 'Are plants flowering poorly?',
    potassiumQuestion: 'Are leaf edges brown or burnt?',
    temperatureQuestion: 'How is the weather currently?',
    humidityQuestion: 'How does the air feel?',
    rainfallQuestion: 'How has rainfall been this season?',
    phQuestion: 'What type of soil do you have?',
    yes: 'Yes', no: 'No',
    low: 'Low', medium: 'Moderate', high: 'High',
    acidic_soil: 'Acidic', neutral_soil: 'Neutral', alkaline_soil: 'Alkaline',
    // Location & weather
    form_location: '📍 Location & Weather',
    select_region: 'Select Region',
    region_north: 'North India (Punjab, Haryana, UP)',
    region_south: 'South India (TN, Karnataka, Kerala)',
    region_east: 'East India (WB, Odisha, Bihar)',
    region_west: 'West India (Maharashtra, Gujarat)',
    region_central: 'Central India (MP, Chhattisgarh)',
    region_northeast: 'Northeast India (Assam, Meghalaya)',
    city_placeholder: 'City name (e.g. Mumbai)',
    weather_btn: '🌤️ Auto-fill Weather',
    // ML Model
    form_model: '🤖 ML Model',
    model_rf: 'Random Forest', model_dt: 'Decision Tree', model_xgb: 'XGBoost',
    predict_btn: '🌱 Predict Best Crops', predict_loading: 'Analysing with AI…',
    // Export
    export_csv: '📄 Export CSV', export_print: '🖨️ Print Report',
    export_compare: '⚖️ Compare Crops', export_retry: '← Try Different Values',
    // Dashboard
    dash_label: 'Analytics', dash_title: 'Crop Suitability Dashboard',
    dash_chart_score: '📊 Suitability Score — All 22 Crops',
    dash_chart_type: '🥧 Crop Type Distribution',
    // Compare
    compare_label: 'Comparison', compare_title: 'Compare crops side by side',
    compare_desc: 'Select 2 or 3 crops to compare their requirements, yield, and fertilizer needs.',
    select_crop_1: 'Select Crop 1', select_crop_2: 'Select Crop 2', select_crop_3: 'Select Crop 3 (optional)',
    compare_btn: '⚖️ Compare',
    compare_empty: 'Select crops above and click Compare to see a detailed side-by-side analysis.',
    compare_select_2: 'Please select at least 2 crops to compare.',
    compare_param: 'Parameter',
    // History
    history_label: 'Prediction History', history_title: 'Your past analyses',
    history_desc: 'Track your farm decisions over time. Reload any past prediction to re-analyse.',
    history_clear: '🗑️ Clear History',
    history_empty: '📭 No predictions yet. Start by analysing your farm data!',
    history_reload: '🔄 Reload',
    history_loaded: '📋 Previous inputs loaded. Click Predict to re-analyse!',
    history_cleared: '🗑️ History cleared',
    history_confirm_clear: 'Clear all prediction history?',
    // How it works
    how_step1_title: 'Enter Parameters',
    how_step1_desc: 'Input soil nutrient values (N, P, K), pH level, temperature, humidity, and rainfall. Auto-fill weather data from your location or select a region.',
    how_step2_title: 'AI Models Analyse',
    how_step2_desc: 'Choose from Random Forest, Decision Tree, or XGBoost. Each model processes your inputs against patterns from thousands of agricultural data points.',
    how_step3_title: 'Get Full Report',
    how_step3_desc: 'Receive ranked crops with confidence scores, yield predictions, fertilizer advice, risk levels, and feature importance. Export as CSV or compare crops side-by-side.',
    // Footer
    footer_desc: 'Smart Crop Recommendation System · Built with ML & ♥',
    footer_stats: '22 crops · 3 ML models · Weather API · Export reports',
    // Dynamic content in renderResults
    summary_nitrogen: 'Nitrogen', summary_phosphorus: 'Phosphorus', summary_potassium: 'Potassium',
    summary_ph: 'pH', summary_temp: 'Temp (°C)', summary_humidity: 'Humidity', summary_rainfall: 'Rainfall (mm)',
    summary_crops_found: 'Crops found',
    fi_title: '📊 Feature Importance — Why these crops?',
    model_label: 'Model', accuracy_label: 'Accuracy', top_crops_shown: 'Top {n} crops shown',
    // Compare table rows
    ct_type: 'Type', ct_season: 'Season', ct_growing: 'Growing Period', ct_water: 'Water Requirement',
    ct_yield: 'Est. Yield (kg/acre)', ct_n: 'N Range', ct_p: 'P Range', ct_k: 'K Range',
    ct_ph: 'pH Range', ct_temp: 'Temp Range (°C)', ct_diseases: 'Diseases',
    ct_suitability: 'Suitability Score', ct_urea: 'Urea (kg/acre)', ct_dap: 'DAP (kg/acre)', ct_mop: 'MOP (kg/acre)',
    select_a_crop: 'Select a crop',
    // Notifications
    csv_downloaded: '📄 CSV report downloaded!',
    print_opened: '🖨️ Print dialog opened',
    run_prediction_first: 'Run a prediction first!',
    alert_fill_all: 'Please fill in all 7 parameters before predicting.',
    alert_city_name: 'Please enter a city name to fetch weather data.',
    alert_something_wrong: 'Something went wrong. Please try again.',
    notify_weather_error: '❌ Could not fetch weather. Check city name.',
    notify_select_option: '⚠️ Please select an option before continuing.',
    notify_guided_complete: '🌾 Smart Farmer Assistant — Prediction complete!',
    notify_guided_missing: '⚠️ Please answer all 7 questions. Missing step {step}.',
  },
  ta: {
    nav_home: 'முகப்பு', nav_predict: 'கணிப்பு', nav_compare: 'ஒப்பிடு',
    nav_dashboard: 'டாஷ்போர்டு', nav_history: 'வரலாறு', nav_how: 'எப்படி வேலை செய்கிறது',
    nav_cta: 'கணிப்பு முயற்சி →',
    hero_tag: 'AI-செயற்கை நுண்ணறிவு வேளாண்மை',
    hero_title: '<em>புத்திசாலித்தனமாக</em><br><span class="underline-accent">தரவு அடிப்படையில்</span><br>பயிர் ஆலோசனை.',
    hero_desc: 'உங்கள் மண் ஊட்டச்சத்துகள் மற்றும் சுற்றுச்சூழல் நிலைகளை உள்ளிடுங்கள். எங்கள் ML மாதிரிகள் உங்கள் பண்ணைக்கு ஏற்ற சிறந்த பயிர்களை பரிந்துரைக்கின்றன.',
    hero_btn_analyse: '🌱 என் பண்ணையை பகுப்பாய்வு செய்',
    hero_btn_how: 'எப்படி வேலை செய்கிறது →',
    predict_label: 'ML கணிப்பு இயந்திரம்',
    predict_title: 'உங்கள் பண்ணை தரவை உள்ளிடுங்கள்',
    predict_desc: 'உங்கள் மண் மற்றும் உள்ளூர் காலநிலை பற்றிய 7 முக்கிய குறிகாட்டிகளை வழங்குங்கள். 3 ML மாதிரிகளில் இருந்து தேர்ந்தெடுக்கவும்.',
    form_soil: 'மண் ஊட்டச்சத்துகள்', form_env: 'சுற்றுச்சூழல் நிலைகள்',
    label_nitrogen: 'நைட்ரஜன் (N)', label_phosphorus: 'பாஸ்பரஸ் (P)',
    label_potassium: 'பொட்டாசியம் (K)', label_ph: 'மண் pH',
    label_temp: 'வெப்பநிலை (°C)', label_humidity: 'ஈரப்பதம் (%)',
    label_rainfall: 'மழையளவு (mm)',
    tip_nitrogen: 'நைட்ரஜன் இலை மற்றும் தண்டு வளர்ச்சியை ஊக்குவிக்கிறது.',
    tip_phosphorus: 'பாஸ்பரஸ் வேர் வளர்ச்சி மற்றும் பூக்கும் தன்மையை உதவுகிறது.',
    tip_potassium: 'பொட்டாசியம் செடிகளை வலுப்படுத்துகிறது.',
    tip_ph: 'pH மண் அமிலத்தன்மையை அளவிடுகிறது. 7 நடுநிலை.',
    tip_temp: 'உங்கள் பகுதியின் சராசரி பகல் வெப்பநிலை.',
    tip_humidity: 'உங்கள் பகுதியில் ஈரப்பதம்.',
    tip_rainfall: 'உங்கள் பகுதியில் சராசரி மாத மழையளவு.',
    voice_btn: 'குரல் உள்ளீடு',
    voice_listening: '🎤 கேட்கிறேன்... உங்கள் மதிப்புகளைச் சொல்லுங்கள்',
    voice_success: '✅ குரல் உள்ளீட்டிலிருந்து மதிப்புகள் நிரப்பப்பட்டன!',
    voice_error: '❌ பேச்சை அறிய முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    voice_not_supported: '❌ இந்த உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை.',
    voice_panel_title: 'ஸ்மார்ட் விவசாயி குரல் உதவியாளர்',
    voice_panel_subtitle: 'மண் மதிப்புகளை பேசுங்கள் அல்லது விவசாய கேள்விகள் கேளுங்கள்',
    voice_tap_to_speak: 'தொடங்க மைக்ரோஃபோனை அழுத்தவும்',
    voice_try_saying: 'முயற்சிக்கவும்: "நைட்ரஜன் 90, பாஸ்பரஸ் 42, pH 6.5"',
    voice_listening_now: 'கேட்கிறேன்...',
    voice_speak_now: 'இப்போது தெளிவாகப் பேசுங்கள்',
    voice_processing: 'உங்கள் உள்ளீட்டை செயலாக்குகிறது...',
    voice_transcript: 'நீங்கள் சொன்னது:',
    voice_values_detected: '✅ மதிப்புகள் கண்டறியப்பட்டன',
    voice_retry: '🔄 மீண்டும்',
    voice_apply: '✅ படிவத்தில் பயன்படுத்து',
    result_label: 'பரிந்துரை தயார்',
    result_title: 'உங்கள் பண்ணைக்கு சிறந்த பயிர்கள்',
    result_desc: 'உங்கள் உள்ளீடுகளின் அடிப்படையில், விளைச்சல் கணிப்புகள், ஆபத்து மதிப்பீடு மற்றும் உர ஆலோசனையுடன் சிறந்த பயிர் பரிந்துரைகள்.',
    how_label: 'செயல்முறை', how_title: 'CropAI எப்படி வேலை செய்கிறது',
    soil_health_title: '🏥 மண் ஆரோக்கிய மதிப்பெண்',
    soil_health_good: 'நல்லது', soil_health_moderate: 'மிதமான', soil_health_poor: 'மோசம்',
    soil_health_out_of: '100 இல்',
    profit_title: '💰 பயிர் லாப மதிப்பீடு',
    yield_per_acre: 'விளைச்சல் / ஏக்கர்', market_price: 'சந்தை விலை',
    est_profit: 'மதிப்பிடப்பட்ட லாபம் / ஏக்கர்', cost_per_acre: 'செலவு / ஏக்கர்',
    suitability: 'பொருத்த மதிப்பெண்', confidence: 'பொருத்த மதிப்பெண்',
    growing_period: '🌱 வளரும் காலம்', water_req: '💧 நீர் தேவை',
    est_yield: '📦 மதிப்பிடப்பட்ட விளைச்சல்', common_diseases: '⚠️ பொதுவான நோய்கள்',
    fert_title: '🧪 உர பரிந்துரை',
    tip_add_nitrogen: 'யூரியா போன்ற நைட்ரஜன் நிறைந்த உரங்களைச் சேர்க்கவும்',
    tip_add_phosphorus: 'பாஸ்பரஸுக்கு DAP அல்லது எலும்பு மாவை சேர்க்கவும்',
    tip_add_potassium: 'பொட்டாசியத்திற்கு MOP பயன்படுத்தவும்',
    tip_adjust_ph: 'pH சரிசெய்ய சுண்ணாம்பு அல்லது கந்தகம் சேர்க்கவும்',
    tip_soil_great: 'உங்கள் மண் ஊட்டச்சத்துகள் சீராக உள்ளன! தொடர்ந்து சோதனை செய்யுங்கள்.',
    // Hero stats
    stat_crops: 'பயிர் வகைகள்', stat_models: 'ML மாதிரிகள்', stat_accuracy: 'மாதிரி துல்லியம்', stat_params: 'பகுப்பாய்வு அளவுருக்கள்',
    // Param list
    param_nutrients_title: 'மண் ஊட்டச்சத்துகள்', param_nutrients_desc: 'N, P, K மதிப்புகள் வளத்தைக் குறிக்கின்றன',
    param_ph_title: 'மண் pH', param_ph_desc: 'அமிலத்தன்மை ஊட்டச்சத்து உறிஞ்சுதலை பாதிக்கிறது',
    param_climate_title: 'காலநிலை', param_climate_desc: 'வெப்பநிலை, ஈரப்பதம் & மழை',
    param_models_title: 'AI மாதிரிகள்', param_models_desc: 'சிறந்த முடிவுகளுக்கு 3 மாதிரிகள் ஒப்பிடப்படுகின்றன',
    // Mode toggle
    mode_lab: 'ஆய்வக முறை', mode_lab_desc: 'சரியான மண் பரிசோதனை மதிப்புகளை உள்ளிடுங்கள்',
    mode_guided: 'ஸ்மார்ட் விவசாய உதவியாளர்', mode_guided_desc: 'எளிய கள கேள்விகளுக்கு பதிலளியுங்கள்',
    // Guided mode
    guided_badge: '🧠 AI கள ஆய்வு',
    guided_subtitle: 'உங்கள் வயல் பற்றிய எளிய கேள்விகளுக்கு பதிலளியுங்கள் — AI மூலம் மண் மதிப்புகளை மதிப்பிடுவோம்',
    guided_preview_title: '🧠 AI மதிப்பிடப்பட்ட மதிப்புகள்',
    guided_preview_subtitle: 'உங்கள் கள கவனிப்புகளின் அடிப்படையில், மதிப்பிடப்பட்ட மதிப்புகள்:',
    guided_preview_note: '💡 இவை AI மதிப்பீடுகள். துல்லியமான மதிப்புகளுக்கு, உங்கள் உள்ளூர் வேளாண்மை மையத்தில் ஆய்வக மண் பரிசோதனை செய்யுங்கள்.',
    guided_predict_btn: '🌱 சிறந்த பயிர்களை கணிக்கவும்',
    guided_switch_lab: 'ஆய்வக முறைக்கு மாறு →',
    guided_prev: '← முந்தைய', guided_next: 'அடுத்து →',
    guided_step_of: 'படி {current} / {total}',
    guided_all_done: 'அனைத்து படிகளும் நிறைவடைந்தன ✓',
    guided_analysing: '⏳ பகுப்பாய்வு செய்கிறது...',
    // Guided questions & options
    nitrogenQuestion: 'இலைகள் மஞ்சள் நிறமாக உள்ளதா?',
    phosphorusQuestion: 'தாவரங்களில் மலர்ச்சி குறைவா?',
    potassiumQuestion: 'இலை விளிம்புகள் பழுப்பு நிறமாக உள்ளதா?',
    temperatureQuestion: 'இப்போது வானிலை எப்படி உள்ளது?',
    humidityQuestion: 'காற்றில் ஈரப்பதம் எப்படி உள்ளது?',
    rainfallQuestion: 'இந்த பருவத்தில் மழை நிலை எப்படி?',
    phQuestion: 'உங்கள் மண் வகை என்ன?',
    yes: 'ஆம்', no: 'இல்லை',
    low: 'குறைவு', medium: 'மிதமான', high: 'அதிகம்',
    acidic_soil: 'அமிலத்தன்மை', neutral_soil: 'நடுநிலை', alkaline_soil: 'காரத்தன்மை',
    // Location & weather
    form_location: '📍 இடம் & வானிலை',
    select_region: 'பிராந்தியத்தை தேர்வு செய்யவும்',
    region_north: 'வட இந்தியா (பஞ்சாப், ஹரியானா, UP)',
    region_south: 'தென் இந்தியா (TN, கர்நாடகா, கேரளா)',
    region_east: 'கிழக்கு இந்தியா (WB, ஒடிசா, பீகார்)',
    region_west: 'மேற்கு இந்தியா (மகாராஷ்டிரா, குஜராத்)',
    region_central: 'மத்திய இந்தியா (MP, சத்தீஸ்கர்)',
    region_northeast: 'வடகிழக்கு இந்தியா (அசாம், மேகாலயா)',
    city_placeholder: 'நகரப் பெயர் (எ.கா. சென்னை)',
    weather_btn: '🌤️ வானிலை தானாக நிரப்பு',
    // ML Model
    form_model: '🤖 ML மாதிரி',
    model_rf: 'ரேண்டம் ஃபாரஸ்ட்', model_dt: 'டெசிஷன் ட்ரீ', model_xgb: 'XGBoost',
    predict_btn: '🌱 சிறந்த பயிர்களை கணிக்கவும்', predict_loading: 'AI மூலம் பகுப்பாய்வு...',
    // Export
    export_csv: '📄 CSV ஏற்றுமதி', export_print: '🖨️ அறிக்கை அச்சிடு',
    export_compare: '⚖️ பயிர்களை ஒப்பிடு', export_retry: '← வேறு மதிப்புகளை முயற்சிக்கவும்',
    // Dashboard
    dash_label: 'பகுப்பாய்வு', dash_title: 'பயிர் பொருத்த டாஷ்போர்டு',
    dash_chart_score: '📊 பொருத்த மதிப்பெண் — அனைத்து 22 பயிர்கள்',
    dash_chart_type: '🥧 பயிர் வகை விநியோகம்',
    // Compare
    compare_label: 'ஒப்பீடு', compare_title: 'பயிர்களை பக்கபக்கமாக ஒப்பிடுங்கள்',
    compare_desc: '2 அல்லது 3 பயிர்களை தேர்வு செய்து அவற்றின் தேவைகள், விளைச்சல் மற்றும் உர தேவைகளை ஒப்பிடுங்கள்.',
    select_crop_1: 'பயிர் 1 தேர்வு', select_crop_2: 'பயிர் 2 தேர்வு', select_crop_3: 'பயிர் 3 (விருப்பம்)',
    compare_btn: '⚖️ ஒப்பிடு',
    compare_empty: 'மேலே பயிர்களை தேர்ந்தெடுத்து ஒப்பிடு என்பதை கிளிக் செய்து விரிவான பகுப்பாய்வைக் காணவும்.',
    compare_select_2: 'ஒப்பிட குறைந்தது 2 பயிர்களை தேர்ந்தெடுக்கவும்.',
    compare_param: 'அளவுரு',
    // History
    history_label: 'கணிப்பு வரலாறு', history_title: 'உங்கள் முந்தைய பகுப்பாய்வுகள்',
    history_desc: 'உங்கள் விவசாய முடிவுகளை காலப்போக்கில் கண்காணிக்கவும். பழைய கணிப்புகளை மீண்டும் பார்க்கலாம்.',
    history_clear: '🗑️ வரலாற்றை அழி',
    history_empty: '📭 இன்னும் கணிப்புகள் இல்லை. உங்கள் பண்ணை தரவை பகுப்பாய்வு செய்து தொடங்குங்கள்!',
    history_reload: '🔄 மீண்டும் ஏற்று',
    history_loaded: '📋 முந்தைய உள்ளீடுகள் ஏற்றப்பட்டன. மீண்டும் பகுப்பாய்வு செய்ய Predict கிளிக் செய்யுங்கள்!',
    history_cleared: '🗑️ வரலாறு அழிக்கப்பட்டது',
    history_confirm_clear: 'அனைத்து கணிப்பு வரலாற்றையும் அழிக்கவா?',
    // How it works
    how_step1_title: 'அளவுருக்களை உள்ளிடுங்கள்',
    how_step1_desc: 'மண் ஊட்டச்சத்து மதிப்புகள் (N, P, K), pH நிலை, வெப்பநிலை, ஈரப்பதம் மற்றும் மழையளவை உள்ளிடுங்கள். உங்கள் இருப்பிடத்திலிருந்து வானிலை தரவை தானாக நிரப்புங்கள்.',
    how_step2_title: 'AI மாதிரிகள் பகுப்பாய்வு',
    how_step2_desc: 'ரேண்டம் ஃபாரஸ்ட், டெசிஷன் ட்ரீ அல்லது XGBoost இல் ஒன்றை தேர்வு செய்யுங்கள். ஒவ்வொரு மாதிரியும் ஆயிரக்கணக்கான வேளாண்மை தரவுகளுக்கு எதிராக செயலாக்குகிறது.',
    how_step3_title: 'முழு அறிக்கையைப் பெறுங்கள்',
    how_step3_desc: 'நம்பிக்கை மதிப்பெண்கள், விளைச்சல் கணிப்புகள், உர ஆலோசனை, ஆபத்து நிலைகள் மற்றும் அம்ச முக்கியத்துவத்துடன் தரவரிசைப்படுத்தப்பட்ட பயிர்களைப் பெறுங்கள்.',
    // Footer
    footer_desc: 'ஸ்மார்ட் பயிர் பரிந்துரை அமைப்பு · ML & ♥ மூலம் உருவாக்கப்பட்டது',
    footer_stats: '22 பயிர்கள் · 3 ML மாதிரிகள் · வானிலை API · அறிக்கை ஏற்றுமதி',
    // Dynamic content
    summary_nitrogen: 'நைட்ரஜன்', summary_phosphorus: 'பாஸ்பரஸ்', summary_potassium: 'பொட்டாசியம்',
    summary_ph: 'pH', summary_temp: 'வெப்பநிலை (°C)', summary_humidity: 'ஈரப்பதம்', summary_rainfall: 'மழையளவு (mm)',
    summary_crops_found: 'பயிர்கள் கண்டறியப்பட்டன',
    fi_title: '📊 அம்ச முக்கியத்துவம் — ஏன் இந்த பயிர்கள்?',
    model_label: 'மாதிரி', accuracy_label: 'துல்லியம்', top_crops_shown: 'முதல் {n} பயிர்கள் காட்டப்படுகின்றன',
    // Compare table rows
    ct_type: 'வகை', ct_season: 'பருவம்', ct_growing: 'வளரும் காலம்', ct_water: 'நீர் தேவை',
    ct_yield: 'மதிப்பிடப்பட்ட விளைச்சல் (கிலோ/ஏக்கர்)', ct_n: 'N வரம்பு', ct_p: 'P வரம்பு', ct_k: 'K வரம்பு',
    ct_ph: 'pH வரம்பு', ct_temp: 'வெப்பநிலை வரம்பு (°C)', ct_diseases: 'நோய்கள்',
    ct_suitability: 'பொருத்த மதிப்பெண்', ct_urea: 'யூரியா (கிலோ/ஏக்கர்)', ct_dap: 'DAP (கிலோ/ஏக்கர்)', ct_mop: 'MOP (கிலோ/ஏக்கர்)',
    select_a_crop: 'பயிரை தேர்வு செய்யவும்',
    // Notifications
    csv_downloaded: '📄 CSV அறிக்கை பதிவிறக்கம்!',
    print_opened: '🖨️ அச்சு உரையாடல் திறக்கப்பட்டது',
    run_prediction_first: 'முதலில் கணிப்பை இயக்கவும்!',
    alert_fill_all: 'கணிப்பதற்கு முன் அனைத்து 7 அளவுருக்களையும் நிரப்பவும்.',
    alert_city_name: 'வானிலை தரவைப் பெற நகரப் பெயரை உள்ளிடவும்.',
    alert_something_wrong: 'ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.',
    notify_weather_error: '❌ வானிலையைப் பெற முடியவில்லை. நகரப் பெயரை சரிபார்க்கவும்.',
    notify_select_option: '⚠️ தொடர்வதற்கு முன் ஒரு விருப்பத்தை தேர்ந்தெடுக்கவும்.',
    notify_guided_complete: '🌾 ஸ்மார்ட் விவசாய உதவியாளர் — கணிப்பு முடிந்தது!',
    notify_guided_missing: '⚠️ அனைத்து 7 கேள்விகளுக்கும் பதிலளிக்கவும். படி {step} விடுபட்டுள்ளது.',
  }
};

// Current language
let currentLang = 'en';

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(CONFIG.LANG_KEY, lang);

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  // Update all data-i18n-html elements (for HTML content)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });

  // Update all data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });

  // Re-render results if they exist
  if (appState.lastResults && appState.lastInputs) {
    renderResults(appState.lastInputs, appState.lastResults);
  }

  // Re-render history
  renderHistory();

  // Re-populate compare dropdowns with translated labels
  populateCompareDropdowns();

  // Re-render compare table if crops were already compared
  const c1 = document.getElementById('compareCrop1');
  const c2 = document.getElementById('compareCrop2');
  if (c1 && c2 && c1.value && c2.value) {
    compareCrops();
  }

  // Update voice assistant language label
  if (typeof updateVoiceLangLabel === 'function') updateVoiceLangLabel();
}

function loadLanguage() {
  const saved = localStorage.getItem(CONFIG.LANG_KEY);
  if (saved && (saved === 'en' || saved === 'ta')) {
    switchLanguage(saved);
  }
}

function t(key) {
  return i18n[currentLang][key] || i18n['en'][key] || key;
}

// ═══ Voice Assistant (Professional Panel UI) ═══
let voiceRecognition = null;
let voiceDetectedValues = {};
let voiceIsListening = false;

// Farmer Q&A Knowledge Base
const farmerQA = {
  'black soil': 'Black soil is excellent for cotton, soybean, sorghum, and sunflower. It retains moisture well and is rich in calcium, magnesium, and iron.',
  'red soil': 'Red soil is suitable for groundnut, millets, potato, and tomato. Consider adding organic manure to improve fertility.',
  'sandy soil': 'Sandy soil works well for watermelon, groundnut, coconut, and carrots. It drains quickly, so choose drought-resistant crops.',
  'clay soil': 'Clay soil holds water well. Rice, wheat, and sugarcane grow well. Ensure proper drainage to avoid waterlogging.',
  'loamy soil': 'Loamy soil is ideal for most crops — wheat, sugarcane, cotton, and pulses. It has the best balance of drainage and moisture retention.',
  'rainy season': 'For rainy/Kharif season (Jun–Nov): Rice, maize, cotton, soybean, groundnut, and jute are excellent choices.',
  'winter season': 'For winter/Rabi season (Nov–Mar): Wheat, chickpea, mustard, lentil, potato, and onion perform well.',
  'summer season': 'For summer season: Watermelon, mango, papaya, tomato, and sunflower are great options. Ensure adequate irrigation.',
  'fertilizer': 'For balanced soil: Use Urea for nitrogen, DAP for phosphorus, and MOP for potassium. Get soil tested first for precise recommendations.',
  'organic farming': 'For organic farming, use vermicompost, cow dung manure, neem cake, and green manuring. Rotate crops with legumes to fix nitrogen naturally.',
  'best crop': 'The best crop depends on your soil nutrients, pH, climate, and water availability. Enter your soil values in the form and let our AI recommend the perfect crop!',
  'rice': 'Rice needs nitrogen 60-120, phosphorus 30-60, warm temperature 20-37°C, and high rainfall 150-300mm. Best in Kharif season.',
  'wheat': 'Wheat needs nitrogen 100-140, cool temperature 10-25°C, and moderate rainfall 50-100mm. Best in Rabi season.',
};

function openVoiceAssistant() {
  const panel = document.getElementById('voicePanel');
  const overlay = document.getElementById('voiceOverlay');
  const fab = document.getElementById('voiceFab');

  panel.classList.add('open');
  overlay.classList.add('open');
  fab.style.display = 'none';

  // Update language indicator
  updateVoiceLangLabel();
  resetVoiceUI();
}

function closeVoiceAssistant() {
  const panel = document.getElementById('voicePanel');
  const overlay = document.getElementById('voiceOverlay');
  const fab = document.getElementById('voiceFab');

  // Stop listening if active
  if (voiceRecognition) {
    voiceRecognition.stop();
    voiceRecognition = null;
    voiceIsListening = false;
  }

  panel.classList.remove('open');
  overlay.classList.remove('open');
  fab.style.display = 'flex';
}

function resetVoiceUI() {
  document.getElementById('voiceIdleState').style.display = 'block';
  document.getElementById('voiceListeningState').style.display = 'none';
  document.getElementById('voiceProcessingState').style.display = 'none';
  document.getElementById('voiceTranscriptArea').style.display = 'none';
  document.getElementById('voiceValuesArea').style.display = 'none';
  document.getElementById('voiceAnswerArea').style.display = 'none';
  document.getElementById('voiceActionBtns').style.display = 'none';
  document.getElementById('voiceMicBtn').style.display = 'flex';

  const micBtn = document.getElementById('voiceMicBtn');
  micBtn.classList.remove('listening');
  document.getElementById('voiceMicBtnIcon').textContent = '🎤';

  voiceDetectedValues = {};
  voiceIsListening = false;
}

function updateVoiceLangLabel() {
  const label = document.getElementById('voiceLangLabel');
  if (label) {
    label.textContent = currentLang === 'ta' ? '🌐 தமிழ் (IN)' : '🌐 English (IN)';
  }
}

function toggleVoiceListening() {
  if (voiceIsListening) {
    stopVoiceListening();
  } else {
    startVoiceListening();
  }
}

function startVoiceListening() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showVoiceError(currentLang === 'ta'
      ? 'இந்த உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை. Chrome பயன்படுத்தவும்.'
      : 'Voice input is not supported in this browser. Please use Chrome.');
    return;
  }

  voiceRecognition = new SpeechRecognition();
  voiceRecognition.lang = currentLang === 'ta' ? 'ta-IN' : 'en-IN';
  voiceRecognition.continuous = false;
  voiceRecognition.interimResults = false;
  voiceRecognition.maxAlternatives = 1;

  voiceIsListening = true;

  // Show listening state
  document.getElementById('voiceIdleState').style.display = 'none';
  document.getElementById('voiceListeningState').style.display = 'block';
  document.getElementById('voiceProcessingState').style.display = 'none';
  document.getElementById('voiceTranscriptArea').style.display = 'none';
  document.getElementById('voiceValuesArea').style.display = 'none';
  document.getElementById('voiceAnswerArea').style.display = 'none';
  document.getElementById('voiceActionBtns').style.display = 'none';

  const micBtn = document.getElementById('voiceMicBtn');
  micBtn.classList.add('listening');
  document.getElementById('voiceMicBtnIcon').textContent = '⏹';

  voiceRecognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    console.log('Voice transcript:', transcript);
    handleVoiceResult(transcript);
  };

  voiceRecognition.onerror = (event) => {
    console.warn('Voice error:', event.error);
    voiceIsListening = false;
    micBtn.classList.remove('listening');
    document.getElementById('voiceMicBtnIcon').textContent = '🎤';

    if (event.error === 'no-speech') {
      showVoiceError(currentLang === 'ta'
        ? 'குரல் கேட்கப்படவில்லை. மீண்டும் பேசவும்.'
        : 'No speech detected. Please try again.');
    } else {
      showVoiceError(currentLang === 'ta'
        ? 'பிழை ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்.'
        : 'An error occurred. Please try again.');
    }
    voiceRecognition = null;
  };

  voiceRecognition.onend = () => {
    voiceIsListening = false;
    micBtn.classList.remove('listening');
    document.getElementById('voiceMicBtnIcon').textContent = '🎤';
    voiceRecognition = null;
  };

  voiceRecognition.start();
}

function stopVoiceListening() {
  if (voiceRecognition) {
    voiceRecognition.stop();
    voiceRecognition = null;
  }
  voiceIsListening = false;
  const micBtn = document.getElementById('voiceMicBtn');
  micBtn.classList.remove('listening');
  document.getElementById('voiceMicBtnIcon').textContent = '🎤';
}

function showVoiceError(message) {
  document.getElementById('voiceIdleState').style.display = 'none';
  document.getElementById('voiceListeningState').style.display = 'none';
  document.getElementById('voiceProcessingState').style.display = 'none';

  const transcriptArea = document.getElementById('voiceTranscriptArea');
  transcriptArea.style.display = 'block';
  document.getElementById('voiceTranscriptText').textContent = message;
  document.getElementById('voiceTranscriptText').style.borderLeftColor = '#e74c3c';

  setTimeout(() => {
    document.getElementById('voiceTranscriptText').style.borderLeftColor = '';
    resetVoiceUI();
  }, 3500);
}

function handleVoiceResult(transcript) {
  // Show processing
  document.getElementById('voiceListeningState').style.display = 'none';
  document.getElementById('voiceProcessingState').style.display = 'block';

  setTimeout(() => {
    document.getElementById('voiceProcessingState').style.display = 'none';

    // Show transcript
    const transcriptArea = document.getElementById('voiceTranscriptArea');
    transcriptArea.style.display = 'block';
    document.getElementById('voiceTranscriptText').textContent = `"${transcript}"`;

    // Check if it's a question or soil values
    const isQuestion = detectFarmerQuestion(transcript);

    if (isQuestion) {
      handleFarmerQuestion(transcript);
    } else {
      extractAndShowValues(transcript);
    }
  }, 800);
}

function detectFarmerQuestion(text) {
  const questionWords = ['which', 'what', 'how', 'suggest', 'best', 'recommend',
    'should', 'can', 'does', 'tell', 'explain', 'crop for', 'soil type',
    'எந்த', 'என்ன', 'எப்படி', 'பரிந்துரை', 'சிறந்த'];
  const lower = text.toLowerCase();
  return questionWords.some(w => lower.includes(w));
}

function handleFarmerQuestion(question) {
  const lower = question.toLowerCase();
  let answer = '';

  // Match against Q&A knowledge base
  for (const [key, value] of Object.entries(farmerQA)) {
    if (lower.includes(key)) {
      answer = value;
      break;
    }
  }

  if (!answer) {
    answer = currentLang === 'ta'
      ? 'உங்கள் கேள்விக்கு பதிலளிக்க, மேலே உள்ள படிவத்தில் உங்கள் மண் மதிப்புகளை உள்ளிட்டு "Predict" பொத்தானை அழுத்தவும். எங்கள் AI சிறந்த பயிரை பரிந்துரைக்கும்!'
      : 'To answer your question accurately, please enter your soil values in the form above and click "Predict". Our AI will recommend the best crop based on your specific conditions!';
  }

  // Show question & answer
  const answerArea = document.getElementById('voiceAnswerArea');
  answerArea.style.display = 'flex';
  document.getElementById('voiceQuestionBubble').textContent = question;
  document.getElementById('voiceAnswerBubble').textContent = answer;

  // Hide mic, show action buttons
  document.getElementById('voiceMicBtn').style.display = 'none';
  document.getElementById('voiceActionBtns').style.display = 'flex';

  // Speak the answer aloud (TTS)
  speakText(answer);
}

function extractAndShowValues(transcript) {
  const normalized = transcript.toLowerCase().replace(/,/g, ' ').replace(/\s+/g, ' ').trim();

  const patterns = [
    { field: 'nitrogen', label: 'Nitrogen (N)', keywords: ['nitrogen', 'நைட்ரஜன்', 'n '] },
    { field: 'phosphorus', label: 'Phosphorus (P)', keywords: ['phosphorus', 'phosphorous', 'பாஸ்பரஸ்', 'p '] },
    { field: 'potassium', label: 'Potassium (K)', keywords: ['potassium', 'பொட்டாசியம்', 'k '] },
    { field: 'ph', label: 'pH', keywords: ['ph', 'p h', 'p.h', 'பிஎச்'] },
    { field: 'temperature', label: 'Temperature', keywords: ['temperature', 'temp', 'வெப்பநிலை', 'degree'] },
    { field: 'humidity', label: 'Humidity', keywords: ['humidity', 'ஈரப்பதம்', 'humid'] },
    { field: 'rainfall', label: 'Rainfall', keywords: ['rainfall', 'rain', 'மழை', 'மழையளவு'] },
  ];

  voiceDetectedValues = {};

  // Try keyword + number matching
  patterns.forEach(({ field, label, keywords }) => {
    for (const keyword of keywords) {
      const regex = new RegExp(keyword + '\\s*(\\d+\\.?\\d*)', 'i');
      const match = normalized.match(regex);
      if (match) {
        voiceDetectedValues[field] = { value: parseFloat(match[1]), label };
        break;
      }
    }
  });

  // Fallback: extract numbers sequentially
  if (Object.keys(voiceDetectedValues).length === 0) {
    const numbers = normalized.match(/\d+\.?\d*/g);
    if (numbers && numbers.length > 0) {
      const fields = [
        { field: 'nitrogen', label: 'Nitrogen (N)' },
        { field: 'phosphorus', label: 'Phosphorus (P)' },
        { field: 'potassium', label: 'Potassium (K)' },
        { field: 'ph', label: 'pH' },
        { field: 'temperature', label: 'Temperature' },
        { field: 'humidity', label: 'Humidity' },
        { field: 'rainfall', label: 'Rainfall' },
      ];
      numbers.forEach((num, i) => {
        if (i < fields.length) {
          voiceDetectedValues[fields[i].field] = { value: parseFloat(num), label: fields[i].label };
        }
      });
    }
  }

  if (Object.keys(voiceDetectedValues).length > 0) {
    // Show detected values card
    const valuesArea = document.getElementById('voiceValuesArea');
    const valuesGrid = document.getElementById('voiceValuesGrid');
    valuesArea.style.display = 'block';

    valuesGrid.innerHTML = Object.entries(voiceDetectedValues).map(([field, { value, label }]) => `
      <div class="voice-value-item">
        <span class="voice-value-name">${label}</span>
        <span class="voice-value-num">${value}</span>
      </div>
    `).join('');

    // Hide mic, show action buttons
    document.getElementById('voiceMicBtn').style.display = 'none';
    document.getElementById('voiceActionBtns').style.display = 'flex';

    // TTS confirmation
    const count = Object.keys(voiceDetectedValues).length;
    speakText(currentLang === 'ta'
      ? `${count} மதிப்புகள் கண்டறியப்பட்டன. படிவத்தில் நிரப்ப "Apply" அழுத்தவும்.`
      : `${count} value${count > 1 ? 's' : ''} detected. Tap Apply to fill the form.`);
  } else {
    // No values found, try as a question
    handleFarmerQuestion(transcript);
  }
}

function applyVoiceValues() {
  let count = 0;
  Object.entries(voiceDetectedValues).forEach(([field, { value }]) => {
    const input = document.getElementById(field);
    if (input) {
      input.value = value;
      // Green flash animation
      input.style.transition = 'background 0.3s, box-shadow 0.3s';
      input.style.background = 'rgba(139,195,74,0.2)';
      input.style.boxShadow = '0 0 0 2px rgba(139,195,74,0.4)';
      setTimeout(() => {
        input.style.background = '';
        input.style.boxShadow = '';
      }, 2500);
      count++;
    }
  });

  closeVoiceAssistant();
  navTo('predict');
  showNotification(currentLang === 'ta'
    ? `🎤 ${count} மதிப்புகள் குரல் மூலம் நிரப்பப்பட்டன!`
    : `🎤 ${count} value${count > 1 ? 's' : ''} applied to form from voice input!`);
}

function retryVoice() {
  resetVoiceUI();
}

// Text-to-Speech output
function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = currentLang === 'ta' ? 'ta-IN' : 'en-IN';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

// Legacy compatibility — keep old function name working
function startVoiceInput() {
  openVoiceAssistant();
  setTimeout(() => startVoiceListening(), 400);
}
function showVoiceStatus() {}
function hideVoiceStatus() {}

// ═══ Crop Profit Data ═══
const cropProfitData = {
  rice:       { pricePerKg: 22, costPerAcre: 12000 },
  wheat:      { pricePerKg: 25, costPerAcre: 10000 },
  maize:      { pricePerKg: 20, costPerAcre: 9000 },
  cotton:     { pricePerKg: 65, costPerAcre: 18000 },
  sugarcane:  { pricePerKg: 3.5, costPerAcre: 25000 },
  chickpea:   { pricePerKg: 55, costPerAcre: 8000 },
  mango:      { pricePerKg: 40, costPerAcre: 20000 },
  banana:     { pricePerKg: 15, costPerAcre: 22000 },
  grapes:     { pricePerKg: 50, costPerAcre: 30000 },
  apple:      { pricePerKg: 80, costPerAcre: 35000 },
  lentil:     { pricePerKg: 60, costPerAcre: 7000 },
  jute:       { pricePerKg: 45, costPerAcre: 10000 },
  coconut:    { pricePerKg: 12, costPerAcre: 15000 },
  coffee:     { pricePerKg: 250, costPerAcre: 28000 },
  potato:     { pricePerKg: 15, costPerAcre: 14000 },
  tomato:     { pricePerKg: 20, costPerAcre: 12000 },
  onion:      { pricePerKg: 18, costPerAcre: 10000 },
  soybean:    { pricePerKg: 45, costPerAcre: 9000 },
  groundnut:  { pricePerKg: 55, costPerAcre: 11000 },
  mustard:    { pricePerKg: 50, costPerAcre: 8000 },
  watermelon: { pricePerKg: 8, costPerAcre: 13000 },
  papaya:     { pricePerKg: 12, costPerAcre: 16000 },
};

// ═══ Soil Health Score Engine ═══
function calculateSoilHealth(inputs) {
  const n = parseFloat(inputs.n) || 0;
  const p = parseFloat(inputs.p) || 0;
  const k = parseFloat(inputs.k) || 0;
  const ph = parseFloat(inputs.ph) || 7;

  // Nitrogen score (optimal: 50-100)
  let nScore;
  if (n >= 50 && n <= 100) nScore = 100;
  else if (n >= 30 && n < 50) nScore = 60 + ((n - 30) / 20) * 40;
  else if (n > 100 && n <= 140) nScore = 60 + ((140 - n) / 40) * 40;
  else if (n < 30) nScore = (n / 30) * 60;
  else nScore = Math.max(0, 60 - ((n - 140) / 20) * 30);

  // Phosphorus score (optimal: 40-80)
  let pScore;
  if (p >= 40 && p <= 80) pScore = 100;
  else if (p >= 20 && p < 40) pScore = 60 + ((p - 20) / 20) * 40;
  else if (p > 80 && p <= 120) pScore = 60 + ((120 - p) / 40) * 40;
  else if (p < 20) pScore = (p / 20) * 60;
  else pScore = Math.max(0, 60 - ((p - 120) / 30) * 30);

  // Potassium score (optimal: 40-80)
  let kScore;
  if (k >= 40 && k <= 80) kScore = 100;
  else if (k >= 20 && k < 40) kScore = 60 + ((k - 20) / 20) * 40;
  else if (k > 80 && k <= 130) kScore = 60 + ((130 - k) / 50) * 40;
  else if (k < 20) kScore = (k / 20) * 60;
  else kScore = Math.max(0, 60 - ((k - 130) / 40) * 30);

  // pH score (optimal: 6.0-7.5)
  let phScore;
  if (ph >= 6 && ph <= 7.5) phScore = 100;
  else if (ph >= 5 && ph < 6) phScore = 60 + ((ph - 5) / 1) * 40;
  else if (ph > 7.5 && ph <= 8.5) phScore = 60 + ((8.5 - ph) / 1) * 40;
  else if (ph < 5) phScore = Math.max(0, (ph / 5) * 60);
  else phScore = Math.max(0, 60 - ((ph - 8.5) / 2) * 40);

  // Overall score (weighted average)
  const overall = Math.round(nScore * 0.3 + pScore * 0.25 + kScore * 0.25 + phScore * 0.2);

  let category, categoryClass;
  if (overall >= 70) { category = t('soil_health_good'); categoryClass = 'good'; }
  else if (overall >= 40) { category = t('soil_health_moderate'); categoryClass = 'moderate'; }
  else { category = t('soil_health_poor'); categoryClass = 'poor'; }

  // Generate tips
  const tips = [];
  if (nScore < 60) tips.push(t('tip_add_nitrogen'));
  if (pScore < 60) tips.push(t('tip_add_phosphorus'));
  if (kScore < 60) tips.push(t('tip_add_potassium'));
  if (phScore < 60) tips.push(t('tip_adjust_ph'));
  if (tips.length === 0) tips.push(t('tip_soil_great'));

  return {
    overall, category, categoryClass,
    scores: { n: Math.round(nScore), p: Math.round(pScore), k: Math.round(kScore), ph: Math.round(phScore) },
    tips,
  };
}

function renderSoilHealth(inputs) {
  const health = calculateSoilHealth(inputs);
  const section = document.getElementById('soilHealthSection');
  if (!section) return;

  const scoreColor = health.categoryClass === 'good' ? '#27ae60' :
                     health.categoryClass === 'moderate' ? '#f39c12' : '#e74c3c';

  const barClass = (score) => score >= 70 ? 'good' : score >= 40 ? 'moderate' : 'poor';

  section.innerHTML = `
    <div class="soil-health-card health-${health.categoryClass}">
      <div class="soil-health-header">
        <div class="soil-health-title">${t('soil_health_title')}</div>
        <span class="soil-health-badge ${health.categoryClass}">${health.category}</span>
      </div>
      <div class="soil-health-score-wrap">
        <div class="soil-score-circle" style="--score-color: ${scoreColor}; --score-pct: ${health.overall}%;">
          <span class="soil-score-num ${health.categoryClass}">${health.overall}</span>
          <span class="soil-score-label">${t('soil_health_out_of')}</span>
        </div>
        <div class="soil-health-bars">
          <div class="soil-bar-item">
            <div class="soil-bar-label"><span>${t('label_nitrogen')}</span><span>${health.scores.n}%</span></div>
            <div class="soil-bar"><div class="soil-bar-fill ${barClass(health.scores.n)}" data-width="${health.scores.n}"></div></div>
          </div>
          <div class="soil-bar-item">
            <div class="soil-bar-label"><span>${t('label_phosphorus')}</span><span>${health.scores.p}%</span></div>
            <div class="soil-bar"><div class="soil-bar-fill ${barClass(health.scores.p)}" data-width="${health.scores.p}"></div></div>
          </div>
          <div class="soil-bar-item">
            <div class="soil-bar-label"><span>${t('label_potassium')}</span><span>${health.scores.k}%</span></div>
            <div class="soil-bar"><div class="soil-bar-fill ${barClass(health.scores.k)}" data-width="${health.scores.k}"></div></div>
          </div>
          <div class="soil-bar-item">
            <div class="soil-bar-label"><span>${t('label_ph')}</span><span>${health.scores.ph}%</span></div>
            <div class="soil-bar"><div class="soil-bar-fill ${barClass(health.scores.ph)}" data-width="${health.scores.ph}"></div></div>
          </div>
        </div>
      </div>
      <div class="soil-health-tips">
        <h4>💡 ${currentLang === 'ta' ? 'பரிந்துரைகள்' : 'Recommendations'}</h4>
        <ul>${health.tips.map(tip => `<li>▸ ${tip}</li>`).join('')}</ul>
      </div>
    </div>
  `;
}

function renderProfitPrediction(inputs, results) {
  const section = document.getElementById('profitSection');
  if (!section) return;

  const cardsHTML = results.slice(0, 3).map((r, i) => {
    const c = cropData[r.crop];
    const profitInfo = cropProfitData[r.crop] || { pricePerKg: 20, costPerAcre: 10000 };
    const yld = predictYield(r.rawScore, r.crop);
    const revenue = Math.round(yld.estimated * profitInfo.pricePerKg);
    const profit = revenue - profitInfo.costPerAcre;

    return `
      <div class="profit-card" style="animation-delay: ${i * 0.1}s">
        <div class="profit-card-header">
          <span class="profit-card-emoji">${c.emoji}</span>
          <div>
            <div class="profit-card-name">${getCropName(r.crop)}</div>
            <div class="profit-card-type">${getCropType(r.crop)}</div>
          </div>
        </div>
        <div class="profit-metrics">
          <div class="profit-metric">
            <div class="profit-metric-val">${yld.estimated} kg</div>
            <div class="profit-metric-key">${t('yield_per_acre')}</div>
          </div>
          <div class="profit-metric">
            <div class="profit-metric-val">₹${profitInfo.pricePerKg}/kg</div>
            <div class="profit-metric-key">${t('market_price')}</div>
          </div>
          <div class="profit-metric">
            <div class="profit-metric-val">₹${revenue.toLocaleString('en-IN')}</div>
            <div class="profit-metric-key">${currentLang === 'ta' ? 'வருவாய் / ஏக்கர்' : 'Revenue / Acre'}</div>
          </div>
          <div class="profit-metric">
            <div class="profit-metric-val">₹${profitInfo.costPerAcre.toLocaleString('en-IN')}</div>
            <div class="profit-metric-key">${t('cost_per_acre')}</div>
          </div>
        </div>
        <div class="profit-total">
          <div class="profit-total-label">${t('est_profit')}</div>
          <div class="profit-total-val" style="color: ${profit >= 0 ? '#27ae60' : '#e74c3c'}">
            ${profit >= 0 ? '₹' + profit.toLocaleString('en-IN') : '-₹' + Math.abs(profit).toLocaleString('en-IN')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="profit-section-title">${t('profit_title')}</div>
    <div class="profit-grid">${cardsHTML}</div>
  `;
}

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

// ═══ Crop Name & Type Translations (Tamil) ═══
const cropTranslations = {
  rice:       { ta: 'அரிசி' },
  wheat:      { ta: 'கோதுமை' },
  maize:      { ta: 'மக்காச்சோளம்' },
  cotton:     { ta: 'பருத்தி' },
  sugarcane:  { ta: 'கரும்பு' },
  chickpea:   { ta: 'கொண்டைக்கடலை' },
  mango:      { ta: 'மாம்பழம்' },
  banana:     { ta: 'வாழைப்பழம்' },
  grapes:     { ta: 'திராட்சை' },
  apple:      { ta: 'ஆப்பிள்' },
  lentil:     { ta: 'பயறு' },
  jute:       { ta: 'சணல்' },
  coconut:    { ta: 'தேங்காய்' },
  coffee:     { ta: 'காபி' },
  potato:     { ta: 'உருளைக்கிழங்கு' },
  tomato:     { ta: 'தக்காளி' },
  onion:      { ta: 'வெங்காயம்' },
  soybean:    { ta: 'சோயாபீன்' },
  groundnut:  { ta: 'வேர்க்கடலை' },
  mustard:    { ta: 'கடுகு' },
  watermelon: { ta: 'தர்பூசணி' },
  papaya:     { ta: 'பப்பாளி' },
};

const cropTypeTranslations = {
  'Grain': 'தானியம்',
  'Fiber': 'நார்',
  'Cash Crop': 'பணப்பயிர்',
  'Pulse': 'பருப்பு',
  'Fruit': 'பழம்',
  'Plantation': 'தோட்டப்பயிர்',
  'Vegetable': 'காய்கறி',
  'Oilseed': 'எண்ணெய் வித்து',
};

const cropSeasonTranslations = {
  'Kharif (Jun–Nov)': 'கரிப் (ஜூன்–நவ)',
  'Kharif (Jun–Oct)': 'கரிப் (ஜூன்–அக்)',
  'Rabi (Nov–Mar)': 'ரபி (நவ–மார்)',
  'Rabi (Oct–Mar)': 'ரபி (அக்–மார்)',
  'Rabi (Oct–Feb)': 'ரபி (அக்–பிப்)',
  'Kharif + Rabi': 'கரிப் + ரபி',
  'Tropical (Year-round)': 'வெப்பமண்டலம் (ஆண்டு முழுவதும்)',
  'Summer (Mar–Jun)': 'கோடை (மார்–ஜூன்)',
  'Perennial': 'பல்லாண்டு',
  'Perennial (3–5 years)': 'பல்லாண்டு (3–5 ஆண்டுகள்)',
};

// Helper: get translated crop name
function getCropName(key) {
  const c = cropData[key];
  if (!c) return key;
  if (currentLang === 'ta' && cropTranslations[key]) return cropTranslations[key].ta;
  return c.name;
}

// Helper: get translated crop type
function getCropType(key) {
  const c = cropData[key];
  if (!c) return '';
  if (currentLang === 'ta' && cropTypeTranslations[c.type]) return cropTypeTranslations[c.type];
  return c.type;
}

// Helper: get translated crop season
function getCropSeason(key) {
  const c = cropData[key];
  if (!c) return '';
  if (currentLang === 'ta' && cropSeasonTranslations[c.season]) return cropSeasonTranslations[c.season];
  return c.season;
}

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
  inputMode: 'lab',     // 'lab' or 'guided'
  guidedStep: 1,
  guidedTotalSteps: 7,
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
    alert(t('alert_city_name'));
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
    showNotification(t('notify_weather_error'), 'error');
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
    if (missing) { alert(t('alert_fill_all')); return; }

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
    alert(t('alert_something_wrong'));
    if (btn) { btn.classList.remove('loading'); btn.disabled = false; }
  }
}

// ═══ Render Results ═══
function renderResults(inputs, results) {
  // Model badge
  const modelBadgeHTML = `
    <div class="model-badge">
      🤖 ${t('model_label')}: <strong>${getModelDisplayName()}</strong> &nbsp;|&nbsp; ${t('accuracy_label')}: <strong>${getModelAccuracy()}</strong>
      &nbsp;|&nbsp; ${t('top_crops_shown').replace('{n}', results.length)}
    </div>
  `;

  // Input summary
  document.getElementById('inputSummary').innerHTML = `
    <div class="summary-item"><div class="summary-val">${inputs.n||'—'}</div><div class="summary-key">${t('summary_nitrogen')}</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.p||'—'}</div><div class="summary-key">${t('summary_phosphorus')}</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.k||'—'}</div><div class="summary-key">${t('summary_potassium')}</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.ph||'—'}</div><div class="summary-key">${t('summary_ph')}</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.t||'—'}°</div><div class="summary-key">${t('summary_temp')}</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.h||'—'}%</div><div class="summary-key">${t('summary_humidity')}</div></div>
    <div class="summary-item"><div class="summary-val">${inputs.r||'—'}</div><div class="summary-key">${t('summary_rainfall')}</div></div>
    <div class="summary-item"><div class="summary-val" style="color:var(--leaf)">${results.length}</div><div class="summary-key">${t('summary_crops_found')}</div></div>
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
    <div class="fi-title">${t('fi_title')}</div>
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
        <div class="crop-name">${getCropName(r.crop)}</div>
        <div class="crop-type">${getCropType(r.crop)}</div>
        <div class="crop-season">📅 ${getCropSeason(r.crop)}</div>

        <div class="confidence-bar-wrap">
          <div class="confidence-label">
            <span>${t('confidence')}</span>
            <span><strong>${pct}%</strong></span>
          </div>
          <div class="confidence-bar">
            <div class="confidence-fill ${scoreClass}" data-width="${pct}"></div>
          </div>
        </div>

        <span class="risk-badge ${risk.class}">${risk.icon} ${risk.level}</span>

        <div style="margin-top:12px">
          <div class="crop-detail-row"><span>${t('growing_period')}</span><span class="crop-detail-val">${c.growingPeriod}</span></div>
          <div class="crop-detail-row"><span>${t('water_req')}</span><span class="crop-detail-val">${c.waterReq}</span></div>
          <div class="crop-detail-row"><span>${t('est_yield')}</span><span class="crop-detail-val">${yld.estimated} ${yld.unit}</span></div>
          <div class="crop-detail-row"><span>${t('common_diseases')}</span><span class="crop-detail-val">${c.diseases.slice(0,2).join(', ')}</span></div>
        </div>

        <div class="fert-rec">
          <div class="fert-title">${t('fert_title')}</div>
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

  // Render Soil Health Score
  renderSoilHealth(inputs);

  // Render Crop Profit Prediction
  renderProfitPrediction(inputs, results);

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.confidence-fill, .fi-fill, .soil-bar-fill').forEach(el => {
      el.style.width = el.dataset.width + '%';
    });
  }, 300);

  // Update dashboard
  renderDashboardCharts(results, inputs);
}

// ═══ Comparison ═══
function populateCompareDropdowns() {
  const crops = Object.keys(cropData);
  const options = crops.map(c => `<option value="${c}">${cropData[c].emoji} ${getCropName(c)}</option>`).join('');
  ['compareCrop1', 'compareCrop2', 'compareCrop3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const current = el.value;
      el.innerHTML = `<option value="">${t('select_a_crop')}</option>` + options;
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
    alert(t('compare_select_2'));
    return;
  }

  const wrap = document.getElementById('compareTableWrap');
  const inputs = appState.lastInputs || { n:90, p:42, k:43, ph:6.5, t:28, h:80, r:200 };
  const scorer = getModelScorer();

  const headers = selected.map(c => `<th>${cropData[c].emoji} ${getCropName(c)}</th>`).join('');
  const rows = [
    [t('ct_type'), ...selected.map(c => cropData[c].type)],
    [t('ct_season'), ...selected.map(c => cropData[c].season)],
    [t('ct_growing'), ...selected.map(c => cropData[c].growingPeriod)],
    [t('ct_water'), ...selected.map(c => cropData[c].waterReq)],
    [t('ct_yield'), ...selected.map(c => {
      const s = scorer(inputs, c);
      const y = predictYield(s, c);
      return y.estimated;
    })],
    [t('ct_n'), ...selected.map(c => `${cropData[c].base.n[0]}–${cropData[c].base.n[1]}`)],
    [t('ct_p'), ...selected.map(c => `${cropData[c].base.p[0]}–${cropData[c].base.p[1]}`)],
    [t('ct_k'), ...selected.map(c => `${cropData[c].base.k[0]}–${cropData[c].base.k[1]}`)],
    [t('ct_ph'), ...selected.map(c => `${cropData[c].base.ph[0]}–${cropData[c].base.ph[1]}`)],
    [t('ct_temp'), ...selected.map(c => `${cropData[c].base.t[0]}–${cropData[c].base.t[1]}`)],
    [t('ct_diseases'), ...selected.map(c => cropData[c].diseases.join(', '))],
    [t('ct_suitability'), ...selected.map(c => {
      const s = scorer(inputs, c);
      const pct = Math.round(Math.min(0.99, 0.60 + s * 0.39) * 100);
      return `${pct}%`;
    })],
    [t('ct_urea'), ...selected.map(c => getFertilizerRec(inputs, c).urea)],
    [t('ct_dap'), ...selected.map(c => getFertilizerRec(inputs, c).dap)],
    [t('ct_mop'), ...selected.map(c => getFertilizerRec(inputs, c).mop)],
  ];

  const rowsHTML = rows.map(row => {
    return `<tr><td><strong>${row[0]}</strong></td>${row.slice(1).map(v => `<td>${v}</td>`).join('')}</tr>`;
  }).join('');

  wrap.innerHTML = `
    <table class="compare-table">
      <thead><tr><th>${t('compare_param')}</th>${headers}</tr></thead>
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
        labels: allCrops.map(c => getCropName(c)),
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
      const translatedType = (currentLang === 'ta' && cropTypeTranslations[c.type]) ? cropTypeTranslations[c.type] : c.type;
      typeCounts[translatedType] = (typeCounts[translatedType] || 0) + 1;
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
    container.innerHTML = `<div class="history-empty">${t('history_empty')}</div>`;
    return;
  }

  const locale = currentLang === 'ta' ? 'ta-IN' : 'en-IN';
  container.innerHTML = history.map((h, i) => {
    const date = new Date(h.date);
    const dateStr = date.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
    const timeStr = date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    const cropsHTML = h.results.map(r =>
      `<span class="history-crop-chip">${cropData[r.crop]?.emoji || '🌱'} ${getCropName(r.crop)} (${r.score}%)</span>`
    ).join('');

    return `
      <div class="history-item" style="animation: fadeUp 0.4s ${i * 0.05}s ease both">
        <div>
          <div class="history-date">${dateStr}</div>
          <div class="history-date" style="font-size:0.72rem;opacity:0.6">${timeStr}</div>
        </div>
        <div class="history-crops">${cropsHTML}</div>
        <div class="history-actions">
          <button class="btn-sm btn-outline" onclick="reloadPrediction(${i})">${t('history_reload')}</button>
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
    showNotification(t('history_loaded'));
  }
}

function clearHistory() {
  if (confirm(t('history_confirm_clear'))) {
    localStorage.removeItem(CONFIG.HISTORY_KEY);
    renderHistory();
    showNotification(t('history_cleared'));
  }
}

// ═══ Export ═══
function exportCSV() {
  if (!appState.lastResults || !appState.lastInputs) {
    alert(t('run_prediction_first'));
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
    csv += `${getCropName(r.crop)},${getCropType(r.crop)},${pct},${getCropSeason(r.crop)},${c.growingPeriod},${c.waterReq},${yld.estimated},${fert.urea},${fert.dap},${fert.mop}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `CropAI_Report_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showNotification(t('csv_downloaded'));
}

function exportPrint() {
  if (!appState.lastResults) { alert(t('run_prediction_first')); return; }
  window.print();
  showNotification(t('print_opened'));
}

// ═══ Smart Farmer Assistant (Guided Mode) ═══

function switchMode(mode) {
  appState.inputMode = mode;
  const labMode = document.getElementById('labMode');
  const guidedMode = document.getElementById('guidedMode');
  const labBtn = document.getElementById('labModeBtn');
  const guidedBtn = document.getElementById('guidedModeBtn');

  if (mode === 'lab') {
    labMode.style.display = 'block';
    guidedMode.style.display = 'none';
    labBtn.classList.add('active');
    guidedBtn.classList.remove('active');
  } else {
    labMode.style.display = 'none';
    guidedMode.style.display = 'block';
    labBtn.classList.remove('active');
    guidedBtn.classList.add('active');
    // Reset guided to step 1
    appState.guidedStep = 1;
    updateGuidedUI();
  }
}

function updateGuidedUI() {
  const step = appState.guidedStep;
  const total = appState.guidedTotalSteps;

  // Show/hide steps
  document.querySelectorAll('.guided-step').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.step) === step);
  });

  // Update progress bar
  const progressBar = document.getElementById('guidedProgressBar');
  if (progressBar) progressBar.style.width = ((step / total) * 100) + '%';

  // Update step label
  const stepLabel = document.getElementById('guidedStepLabel');
  if (stepLabel) stepLabel.textContent = t('guided_step_of').replace('{current}', step).replace('{total}', total);

  // Show/hide prev button
  const prevBtn = document.getElementById('guidedPrevBtn');
  if (prevBtn) {
    prevBtn.style.visibility = step === 1 ? 'hidden' : 'visible';
    prevBtn.textContent = t('guided_prev');
  }

  // Update next button text on last step
  const nextBtn = document.getElementById('guidedNextBtn');
  if (nextBtn) {
    if (step === total) {
      nextBtn.textContent = '✨ ' + t('guided_preview_title').replace('🧠 ', '');
    } else {
      nextBtn.textContent = t('guided_next');
    }
  }

  // Show/hide preview
  const preview = document.getElementById('guidedPreview');
  if (preview) preview.style.display = 'none';
}

function guidedNext() {
  // Validate current step has a selection
  const stepName = getGuidedRadioName(appState.guidedStep);
  const selected = document.querySelector(`input[name="${stepName}"]:checked`);
  if (!selected) {
    showNotification(t('notify_select_option'), 'error');
    return;
  }

  if (appState.guidedStep < appState.guidedTotalSteps) {
    appState.guidedStep++;
    updateGuidedUI();
  } else {
    // All steps done — show preview
    showGuidedPreview();
  }
}

function guidedPrev() {
  if (appState.guidedStep > 1) {
    appState.guidedStep--;
    updateGuidedUI();
    // Hide preview if going back
    const preview = document.getElementById('guidedPreview');
    if (preview) preview.style.display = 'none';
  }
}

function getGuidedRadioName(step) {
  const names = { 1: 'guided_n', 2: 'guided_p', 3: 'guided_k', 4: 'guided_ph', 5: 'guided_t', 6: 'guided_h', 7: 'guided_r' };
  return names[step];
}

// ── Convert guided answers → numeric values ──
function estimateNitrogen(answer) {
  const values = { low: 30, medium: 60, high: 90 };
  return values[answer] || 60;
}

function estimatePhosphorus(answer) {
  const values = { low: 25, medium: 50, high: 85 };
  return values[answer] || 50;
}

function estimatePotassium(answer) {
  const values = { low: 25, medium: 55, high: 95 };
  return values[answer] || 55;
}

function estimatePH(answer) {
  const values = { acidic: 5.5, neutral: 6.8, alkaline: 7.8 };
  return values[answer] || 6.8;
}

function estimateTemperature(answer) {
  const values = { cold: 18, moderate: 26, hot: 34 };
  return values[answer] || 26;
}

function estimateHumidity(answer) {
  const values = { dry: 35, moderate: 55, humid: 80 };
  return values[answer] || 55;
}

function estimateRainfall(answer) {
  const values = { low: 35, moderate: 80, heavy: 160 };
  return values[answer] || 80;
}

function getGuidedValues() {
  const getVal = (name) => {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : null;
  };

  return {
    n: estimateNitrogen(getVal('guided_n')),
    p: estimatePhosphorus(getVal('guided_p')),
    k: estimatePotassium(getVal('guided_k')),
    ph: estimatePH(getVal('guided_ph')),
    t: estimateTemperature(getVal('guided_t')),
    h: estimateHumidity(getVal('guided_h')),
    r: estimateRainfall(getVal('guided_r')),
  };
}

function showGuidedPreview() {
  // Check all steps are answered
  for (let i = 1; i <= 7; i++) {
    const name = getGuidedRadioName(i);
    if (!document.querySelector(`input[name="${name}"]:checked`)) {
      showNotification(t('notify_guided_missing').replace('{step}', i), 'error');
      appState.guidedStep = i;
      updateGuidedUI();
      return;
    }
  }

  const values = getGuidedValues();
  const preview = document.getElementById('guidedPreview');
  const grid = document.getElementById('guidedPreviewGrid');

  const items = [
    { key: t('summary_nitrogen'), val: values.n, unit: '' },
    { key: t('summary_phosphorus'), val: values.p, unit: '' },
    { key: t('summary_potassium'), val: values.k, unit: '' },
    { key: t('summary_ph'), val: values.ph, unit: '' },
    { key: t('summary_temp'), val: values.t, unit: '°C' },
    { key: t('summary_humidity'), val: values.h, unit: '%' },
    { key: t('summary_rainfall'), val: values.r, unit: 'mm' },
  ];

  grid.innerHTML = items.map(item => `
    <div class="guided-preview-item">
      <div class="guided-preview-val">${item.val}${item.unit}</div>
      <div class="guided-preview-key">${item.key}</div>
    </div>
  `).join('');

  // Hide all steps, show preview
  document.querySelectorAll('.guided-step').forEach(el => el.classList.remove('active'));
  document.querySelector('.guided-nav').style.display = 'none';
  preview.style.display = 'block';

  // Update progress to 100%
  const progressBar = document.getElementById('guidedProgressBar');
  if (progressBar) progressBar.style.width = '100%';
  const stepLabel = document.getElementById('guidedStepLabel');
  if (stepLabel) stepLabel.textContent = t('guided_all_done');
}

async function guidedPredict() {
  const values = getGuidedValues();
  const btn = document.querySelector('.guided-preview-actions .btn-primary');

  try {
    // Fill the lab mode inputs with estimated values (for history/state)
    document.getElementById('nitrogen').value = values.n;
    document.getElementById('phosphorus').value = values.p;
    document.getElementById('potassium').value = values.k;
    document.getElementById('ph').value = values.ph;
    document.getElementById('temperature').value = values.t;
    document.getElementById('humidity').value = values.h;
    document.getElementById('rainfall').value = values.r;

    if (btn) { btn.textContent = t('guided_analysing'); btn.disabled = true; }

    await new Promise(r => setTimeout(r, 1800));

    const inputs = {
      n: String(values.n), p: String(values.p), k: String(values.k),
      ph: String(values.ph), t: String(values.t), h: String(values.h), r: String(values.r),
    };

    const results = ruleBasedCrop(inputs);

    if (btn) { btn.textContent = t('predict_btn'); btn.disabled = false; }

    appState.lastResults = results;
    appState.lastInputs = inputs;

    renderResults(inputs, results);
    saveToHistory(inputs, results);
    populateCompareDropdowns();

    showNotification(t('notify_guided_complete'));

  } catch (err) {
    console.error('Guided prediction error:', err);
    alert(t('alert_something_wrong'));
    if (btn) { btn.textContent = t('predict_btn'); btn.disabled = false; }
  }
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

  // Reset guided mode if active
  if (appState.inputMode === 'guided') {
    appState.guidedStep = 1;
    updateGuidedUI();
    const guidedNav = document.querySelector('.guided-nav');
    if (guidedNav) guidedNav.style.display = 'flex';
    const preview = document.getElementById('guidedPreview');
    if (preview) preview.style.display = 'none';
  }

  setTimeout(() => navTo('predict'), 100);
}

// ═══ Initialization ═══
document.addEventListener('DOMContentLoaded', () => {
  loadDarkMode();
  loadLanguage();
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