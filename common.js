/**
 * IP-SAKTI Sahayak — Global Common Engine (common.js)
 * Multilingual Translation (7 Languages), Jurisdiction Management,
 * Web Speech API Voice Assistant, Global Search, Audit Logging & Mobile Navigation.
 */

// =============================================================================
// 1. MULTILINGUAL TRANSLATION DICTIONARY (7 Supported Languages)
// =============================================================================
const TRANSLATIONS = {
  en: {
    brand_subtitle: "Ayurveda • IP • Regulation",
    nav_core_copilot: "CORE CO-PILOT",
    nav_home: "Home",
    nav_ai_assistant: "AI Assistant",
    nav_formulation: "Formulation Classification",
    nav_ip_guidance: "IP + Regulatory Guidance",
    nav_abs: "ABS Compliance",
    nav_knowledge_repos: "KNOWLEDGE REPOSITORIES",
    nav_tkdl: "TKDL / Prior Art",
    nav_corpus: "Knowledge Corpus",
    nav_graph: "Knowledge Graph",
    nav_agentic: "AGENTIC & EVIDENCE",
    nav_agentic_analysis: "Agentic Analysis",
    nav_sources: "Sources & Citations",
    nav_governance: "GOVERNANCE & QUALITY",
    nav_human_expert: "Human Expert",
    nav_privacy: "Privacy & Security",
    nav_evaluation: "Evaluation",
    sidebar_dpdp: "DPDP-Aligned Prototype",
    sidebar_legal_disclaimer: "This information is provided for informational and educational purposes only and does not constitute legal advice.",
    search_placeholder: "Ask about Ayurveda IP, regulation or compliance...",
    jurisdiction_india: "India",
    jurisdiction_intl: "International",
    profile_user: "Researcher",
    notif_title: "Regulatory Alerts",
    notif_item1_title: "Gazette Update: Rule 158B",
    notif_item1_sub: "Ministry of AYUSH updated evidence requirements for classical formulations.",
    notif_mark_read: "Mark all as read",
    hero_welcome: "Welcome to",
    hero_heading: "Your AI Assistant for Ayurveda IP & Regulatory Guidance",
    hero_wisdom_tag: "Ancient Wisdom Meets Modern Intelligence",
    hero_desc: "Get multilingual, source-cited guidance on intellectual property, traditional knowledge and regulatory requirements.",
    btn_ask_ipsakti: "Ask IP-SAKTI",
    btn_classify_formulation: "Classify Formulation",
    insights_title: "Quick Insights",
    metric_sources_label: "Total Sources",
    metric_areas_label: "Knowledge Areas",
    metric_langs_label: "Languages Supported",
    metric_jurisdiction_label: "Jurisdiction",
    metric_jurisdiction_val: "India + International",
    quote_text: "Empowering innovation in Ayurveda through intellectual property and regulatory excellence.",
    badge_multilingual: "Multilingual",
    badge_rag: "RAG Powered",
    badge_source_cited: "Source Cited",
    badge_dual_jurisdiction: "India + International",
    badge_kg: "Knowledge Graph",
    card_ai_title: "AI Assistant",
    card_ai_desc: "Ask questions and get source-cited guidance on IP, TK and AYUSH compliance.",
    card_formulation_title: "Formulation Classification",
    card_formulation_desc: "Classify your formulation with AI assistance into classical or novel IP pathways.",
    card_ip_title: "IP + Regulatory Guidance",
    card_ip_desc: "Get guidance on IP rights (patents, GI, trademark) and regulatory requirements.",
    card_abs_title: "ABS Compliance",
    card_abs_desc: "Check access and benefit sharing requirements under Biological Diversity Act.",
    card_tkdl_title: "TKDL / Prior Art",
    card_tkdl_desc: "Search traditional knowledge repositories and prior art references.",
    card_corpus_title: "Knowledge Corpus",
    card_corpus_desc: "Explore authoritative, version-tracked legal and regulatory sources.",
    recent_activity_title: "Recent Activity",
    view_all_link: "View All",
    footer_slogan: "Traditional Knowledge | Modern Technology | A Sustainable Future"
  },
  hi: {
    brand_subtitle: "आयुर्वेद • बौद्धिक संपदा • विनियामक",
    nav_core_copilot: "मुख्य सह-पायलट",
    nav_home: "होम (मुख्य पृष्ठ)",
    nav_ai_assistant: "एआई सहायक",
    nav_formulation: "योग वर्गीकरण (Formulation)",
    nav_ip_guidance: "आईपी एवं विनियामक मार्गदर्शन",
    nav_abs: "एबीएस अनुपालन (ABS)",
    nav_knowledge_repos: "ज्ञान भंडार (Repositories)",
    nav_tkdl: "टीकेडीएल / पूर्व कला (TKDL)",
    nav_corpus: "वैधानिक ज्ञान संग्रह",
    nav_graph: "ज्ञान ग्राफ (Knowledge Graph)",
    nav_agentic: "एजेंटिक विश्लेषण एवं साक्ष्य",
    nav_agentic_analysis: "एजेंटिक विश्लेषण",
    nav_sources: "स्रोत एवं उद्धरण (Citations)",
    nav_governance: "शासन एवं गुणवत्ता",
    nav_human_expert: "मानव विशेषज्ञ संपर्क",
    nav_privacy: "गोपनीयता एवं सुरक्षा",
    nav_evaluation: "सटीकता मूल्यांकन",
    sidebar_dpdp: "डीपीडीपी-संरेखित प्रोटोटाइप",
    sidebar_legal_disclaimer: "यह जानकारी केवल सूचनात्मक एवं शैक्षणिक उद्देश्यों के लिए प्रदान की गई है और यह कानूनी सलाह नहीं है।",
    search_placeholder: "आयुर्वेद आईपी, नियमन या अनुपालन के बारे में पूछें...",
    jurisdiction_india: "भारत",
    jurisdiction_intl: "अंतर्राष्ट्रीय",
    profile_user: "शोधकर्ता (Researcher)",
    notif_title: "विनियामक अलर्ट",
    notif_item1_title: "राजपत्र अद्यतन: नियम 158B",
    notif_item1_sub: "आयुष मंत्रालय ने शास्त्रीय योगों के लिए साक्ष्य आवश्यकताओं को अद्यतन किया।",
    notif_mark_read: "सभी को पढ़ा हुआ चिह्नित करें",
    hero_welcome: "स्वागत है",
    hero_heading: "आयुर्वेद आईपी और विनियामक मार्गदर्शन के लिए आपका एआई सहायक",
    hero_wisdom_tag: "प्राचीन ज्ञान और आधुनिक बुद्धिमत्ता का संगम",
    hero_desc: "बौद्धिक संपदा, पारंपरिक ज्ञान और विनियामक आवश्यकताओं पर बहुभाषी, स्रोत-उद्धृत मार्गदर्शन प्राप्त करें।",
    btn_ask_ipsakti: "आईपी-शक्ति से पूछें",
    btn_classify_formulation: "योग का वर्गीकरण करें",
    insights_title: "त्वरित अंतर्दृष्टि",
    metric_sources_label: "कुल स्रोत",
    metric_areas_label: "ज्ञान क्षेत्र",
    metric_langs_label: "समर्थित भाषाएँ",
    metric_jurisdiction_label: "अधिकार क्षेत्र",
    metric_jurisdiction_val: "भारत + अंतर्राष्ट्रीय",
    quote_text: "बौद्धिक संपदा और विनियामक उत्कृष्टता के माध्यम से आयुर्वेद में नवाचार को सशक्त बनाना।",
    badge_multilingual: "बहुभाषी",
    badge_rag: "आरएजी संचालित",
    badge_source_cited: "स्रोत उद्धृत",
    badge_dual_jurisdiction: "भारत + अंतर्राष्ट्रीय",
    badge_kg: "ज्ञान ग्राफ",
    card_ai_title: "एआई सहायक",
    card_ai_desc: "प्रश्न पूछें और आईपी, टीके और आयुष अनुपालन पर स्रोत-उद्धृत मार्गदर्शन प्राप्त करें।",
    card_formulation_title: "योग वर्गीकरण",
    card_formulation_desc: "एआई सहायता से अपने योग को शास्त्रीय या नवीन आईपी मार्गों में वर्गीकृत करें।",
    card_ip_title: "आईपी और विनियामक मार्गदर्शन",
    card_ip_desc: "आईपी अधिकारों (पेटेंट, जीआई, ट्रेडमार्क) और विनियामक आवश्यकताओं पर मार्गदर्शन प्राप्त करें।",
    card_abs_title: "एबीएस अनुपालन",
    card_abs_desc: "जैविक विविधता अधिनियम के तहत पहुंच और लाभ साझाकरण आवश्यकताओं की जांच करें।",
    card_tkdl_title: "टीकेडीएल / पूर्व कला",
    card_tkdl_desc: "पारंपरिक ज्ञान भंडार और पूर्व कला संदर्भों की खोज करें।",
    card_corpus_title: "ज्ञान संग्रह",
    card_corpus_desc: "प्रामाणिक, संस्करण-ट्रैक किए गए कानूनी और विनियामक स्रोतों का अन्वेषण करें।",
    recent_activity_title: "हाल की गतिविधि",
    view_all_link: "सभी देखें",
    footer_slogan: "पारंपरिक ज्ञान | आधुनिक तकनीक | एक सतत भविष्य"
  },
  mr: {
    brand_subtitle: "आयुर्वेद • बौद्धिक संपदा • नियमन",
    nav_core_copilot: "मुख्य सह-पायलट",
    nav_home: "मुख्यपृष्ठ (Home)",
    nav_ai_assistant: "एआय सहाय्यक",
    nav_formulation: "औषध योग वर्गीकरण",
    nav_ip_guidance: "आयपी आणि नियामक मार्गदर्शन",
    nav_abs: "एबीएस अनुपालन (ABS)",
    nav_knowledge_repos: "ज्ञान भांडार",
    nav_tkdl: "टीकेडीएल / पूर्व कला",
    nav_corpus: "कायदेशीर ज्ञान संग्रह",
    nav_graph: "ज्ञान आलेख (Graph)",
    nav_agentic: "एजंटिक विश्लेषण व पुरावे",
    nav_agentic_analysis: "एजंटिक विश्लेषण",
    nav_sources: "स्रोत आणि संदर्भ",
    nav_governance: "प्रशासन व गुणवत्ता",
    nav_human_expert: "तज्ज्ञ सल्लागार",
    nav_privacy: "गोपनीयता आणि सुरक्षा",
    nav_evaluation: "मूल्यमापन",
    sidebar_dpdp: "डीपीडीपी-संरेखित प्रारूप",
    sidebar_legal_disclaimer: "ही माहिती केवळ शैक्षणिक हेतूंसाठी आहे आणि कायदेशीर सल्ला मानली जाऊ नये.",
    search_placeholder: "आयुर्वेद आयपी, नियमन किंवा अनुपालनाबद्दल विचारा...",
    jurisdiction_india: "भारत",
    jurisdiction_intl: "आंतरराष्ट्रीय",
    profile_user: "संशोधक (Researcher)",
    notif_title: "नियामक सूचना",
    notif_item1_title: "राजपत्र सुधारणा: नियम 158B",
    notif_item1_sub: "आयुष मंत्रालयाने शास्त्रीय औषध योगांसाठी पुरावे अद्यतनित केले.",
    notif_mark_read: "सर्व वाचलेले चिन्हांकित करा",
    hero_welcome: "स्वागत आहे",
    hero_heading: "आयुर्वेद आयपी व नियामक मार्गदर्शनासाठी आपले एआय सहाय्यक",
    hero_wisdom_tag: "प्राचीन ज्ञान आणि आधुनिक बुद्धिमत्तेचा संगम",
    hero_desc: "बौद्धिक संपदा, पारंपरिक ज्ञान आणि नियामक गरजांवर बहुभाषिक, संदर्भ-सहित मार्गदर्शन मिळवा.",
    btn_ask_ipsakti: "आयपी-शक्तीला विचारा",
    btn_classify_formulation: "योग वर्गीकरण करा",
    insights_title: "महत्त्वाची आकडेवारी",
    metric_sources_label: "एकूण स्रोत",
    metric_areas_label: "ज्ञान क्षेत्रे",
    metric_langs_label: "समर्थित भाषा",
    metric_jurisdiction_label: "अधिकारक्षेत्र",
    metric_jurisdiction_val: "भारत + आंतरराष्ट्रीय",
    quote_text: "बौद्धिक संपदा आणि नियामक उत्कृष्टतेद्वारे आयुर्वेदातील नाविन्यपूर्णतेला बळकट करणे.",
    badge_multilingual: "बहुभाषिक",
    badge_rag: "RAG संचलित",
    badge_source_cited: "स्रोत उद्धृत",
    badge_dual_jurisdiction: "भारत + आंतरराष्ट्रीय",
    badge_kg: "ज्ञान आलेख",
    card_ai_title: "एआय सहाय्यक",
    card_ai_desc: "प्रश्न विचारा आणि आयपी, टीके व आयुष नियमांवर खात्रीशीर मार्गदर्शन मिळवा.",
    card_formulation_title: "औषध योग वर्गीकरण",
    card_formulation_desc: "आपल्या औषध योगाचे शास्त्रीय अथवा नवीन आयपी मार्गांमध्ये वर्गीकरण करा.",
    card_ip_title: "आयपी व नियामक मार्गदर्शन",
    card_ip_desc: "पेटंट, जीआय, ट्रेडमार्क आणि नियामक नियमांबद्दल सखोल मार्गदर्शन मिळवा.",
    card_abs_title: "एबीएस अनुपालन",
    card_abs_desc: "जैवविविधता कायद्याअंतर्गत प्रवेश आणि लाभ वाटप तपासणी करा.",
    card_tkdl_title: "टीकेडीएल / पूर्व कला",
    card_tkdl_desc: "पारंपरिक ज्ञान ग्रंथ आणि पूर्व कला संदर्भांचा शोध घ्या.",
    card_corpus_title: "ज्ञान संग्रह",
    card_corpus_desc: "अधिकृत आणि सुधारित कायदेशीर नियमावलींचे अन्वेषण करा.",
    recent_activity_title: "अलीकडील घडामोडी",
    view_all_link: "सर्व पहा",
    footer_slogan: "पारंपरिक ज्ञान | आधुनिक तंत्रज्ञान | शाश्वत भविष्य"
  },
  gu: {
    brand_subtitle: "આયુર્વેદ • બૌદ્ધિક સંપદા • નિયમન",
    nav_core_copilot: "મુખ્ય સહ-પાયલોટ",
    nav_home: "હોમ (મુખ્ય પૃષ્ઠ)",
    nav_ai_assistant: "એઆઈ સહાયક",
    nav_formulation: "યોગ વર્ગીકરણ (Formulation)",
    nav_ip_guidance: "આઈપી અને નિયમનકારી માર્ગદર્શન",
    nav_abs: "એબીએસ અનુપાલન (ABS)",
    nav_knowledge_repos: "જ્ઞાન ભંડાર",
    nav_tkdl: "ટીકેડીએલ / પૂર્વ કળા",
    nav_corpus: "કાયદાકીય જ્ઞાન સંગ્રહ",
    nav_graph: "જ્ઞાન ગ્રાફ (Knowledge Graph)",
    nav_agentic: "એજન્ટિક વિશ્લેષણ અને પુરાવા",
    nav_agentic_analysis: "એજન્ટિક વિશ્લેષણ",
    nav_sources: "સ્ત્રોતો અને સંદર્ભો",
    nav_governance: "શાસન અને ગુણવત્તા",
    nav_human_expert: "માનવ નિષ્ણાત સહાય",
    nav_privacy: "ગોપનીયતા અને સુરક્ષા",
    nav_evaluation: "મૂલ્યાંકન",
    sidebar_dpdp: "ડીપીડીપી-સુસંગત પ્રોટોટાઇપ",
    sidebar_legal_disclaimer: "આ માહિતી માત્ર શૈક્ષણિક હેતુઓ માટે આપવામાં આવી છે અને તે કાનૂની સલાહ નથી.",
    search_placeholder: "આયુર્વેદ આઈપી, નિયમન અથવા અનુપાલન વિશે પૂછો...",
    jurisdiction_india: "ભારત",
    jurisdiction_intl: "આંતરરાષ્ટ્રીય",
    profile_user: "સંશોધક (Researcher)",
    notif_title: "નિયમનકારી સૂચનાઓ",
    notif_item1_title: "ગેઝેટ સુધારો: નિયમ 158B",
    notif_item1_sub: "આયુષ મંત્રાલયે શાસ્ત્રીય યોગો માટે પુરાવાઓ અપડેટ કર્યા.",
    notif_mark_read: "બધા વાંચેલા ચિહ્નિત કરો",
    hero_welcome: "સ્વાગત છે",
    hero_heading: "આયુર્વેદ આઈપી અને નિયમનકારી માર્ગદર્શન માટે તમારા એઆઈ સહાયક",
    hero_wisdom_tag: "પ્રાચીન જ્ઞાન અને આધુનિક બુદ્ધિનો સમન્વય",
    hero_desc: "બૌદ્ધિક સંપદા, પરંપરાગત જ્ઞાન અને નિયમનકારી માળખા પર બહુભાષી માર્ગદર્શન મેળવો.",
    btn_ask_ipsakti: "આઈપી-શક્તિને પૂછો",
    btn_classify_formulation: "યોગનું વર્ગીકરણ કરો",
    insights_title: "ઝડપી માહિતી",
    metric_sources_label: "કુલ સ્ત્રોતો",
    metric_areas_label: "જ્ઞાન ક્ષેત્રો",
    metric_langs_label: "સમર્થિત ભાષાઓ",
    metric_jurisdiction_label: "અધિકાર ક્ષેત્ર",
    metric_jurisdiction_val: "ભારત + આંતરરાષ્ટ્રીય",
    quote_text: "બૌદ્ધિક સંપત્તિ અને નિયમનકારી શ્રેષ્ઠતા દ્વારા આયુર્વેદમાં નવીનતાનું સશક્તિકરણ.",
    badge_multilingual: "બહુભાષી",
    badge_rag: "RAG સંચાલિત",
    badge_source_cited: "સ્ત્રોત ટાંકેલ",
    badge_dual_jurisdiction: "ભારત + આંતરરાષ્ટ્રીય",
    badge_kg: "જ્ઞાન ગ્રાફ",
    card_ai_title: "એઆઈ સહાયક",
    card_ai_desc: "પ્રશ્નો પૂછો અને આઈપી, ટીકે અને આયુષ નિયમો પર આધારભૂત માર્ગદર્શન મેળવો.",
    card_formulation_title: "યોગ વર્ગીકરણ",
    card_formulation_desc: "એઆઈ સહાયથી તમારા યોગને શાસ્ત્રીય અથવા નવીન આઈપી માર્ગોમાં વર્ગીકૃત કરો.",
    card_ip_title: "આઈપી અને નિયમનકારી માર્ગદર્શન",
    card_ip_desc: "પેટન્ટ, જીઆઈ, ટ્રેડમાર્ક અને નિયમનકારી બાબતો અંગે માર્ગદર્શન મેળવો.",
    card_abs_title: "એબીએસ અનુપાલન",
    card_abs_desc: "જૈવિક વિવિધતા અધિનિયમ હેઠળ એક્સેસ અને લાભ વહેંચણી ચકાસો.",
    card_tkdl_title: "ટીકેડીએલ / પૂર્વ કળા",
    card_tkdl_desc: "પરંપરાગત જ્ઞાન ભંડાર અને પૂર્વ સંદર્ભો શોધો.",
    card_corpus_title: "જ્ઞાન સંગ્રહ",
    card_corpus_desc: "અધિકૃત, આવૃત્તિ-ટ્રેક કરેલા કાયદાકીય સ્ત્રોતો તપાસો.",
    recent_activity_title: "તાજેતરની પ્રવૃત્તિ",
    view_all_link: "બધું જુઓ",
    footer_slogan: "પરંપરાગત જ્ઞાન | આધુનિક ટેકનોલોજી | ટકાઉ ભવિષ્ય"
  },
  ta: {
    brand_subtitle: "ஆயுர்வேதம் • அறிவுசார் சொத்துரிமை • ஒழுங்குமுறை",
    nav_core_copilot: "முதன்மை வழிகாட்டி",
    nav_home: "முகப்பு (Home)",
    nav_ai_assistant: "ஏஐ உதவியாளர்",
    nav_formulation: "மருந்து வகைப்பாடு (Formulation)",
    nav_ip_guidance: "ஐபி மற்றும் ஒழுங்குமுறை வழிகாட்டல்",
    nav_abs: "ஏபிஎஸ் இணக்கம் (ABS)",
    nav_knowledge_repos: "அறிவு களஞ்சியங்கள்",
    nav_tkdl: "டிகேடிஎல் / முந்தைய கலை",
    nav_corpus: "சட்ட அறிவுத் தொகுப்பு",
    nav_graph: "அறிவு வரைபடம் (Knowledge Graph)",
    nav_agentic: "முகவர் பகுப்பாய்வு & சான்றுகள்",
    nav_agentic_analysis: "முகவர் பகுப்பாய்வு",
    nav_sources: "மூலங்கள் & மேற்கோள்கள்",
    nav_governance: "நிர்வாகம் & தரம்",
    nav_human_expert: "மனித நிபுணர் உதவி",
    nav_privacy: "தனியுரிமை & பாதுகாப்பு",
    nav_evaluation: "மதிப்பீடு",
    sidebar_dpdp: "டிபிடிபி-இணைந்த மாதிரி",
    sidebar_legal_disclaimer: "இந்தத் தகவல் கல்வி நோக்கங்களுக்காக மட்டுமே வழங்கப்படுகிறது, சட்ட ஆலோசனையாகக் கருதப்படாது.",
    search_placeholder: "ஆயுர்வேத ஐபி, ஒழுங்குமுறை அல்லது இணக்கம் பற்றி கேட்கவும்...",
    jurisdiction_india: "இந்தியா",
    jurisdiction_intl: "சர்வதேசம்",
    profile_user: "ஆராய்ச்சியாளர் (Researcher)",
    notif_title: "ஒழுங்குமுறை எச்சரிக்கைகள்",
    notif_item1_title: "அரசிதழ் புதுப்பிப்பு: விதி 158B",
    notif_item1_sub: "பாரம்பரிய மருந்துகளுக்கான சான்றுத் தேவைகளை ஆயுஷ் அமைச்சகம் புதுப்பித்துள்ளது.",
    notif_mark_read: "அனைத்தையும் படித்ததாகக் குறிக்கவும்",
    hero_welcome: "வரவேற்கிறோம்",
    hero_heading: "ஆயுர்வேத ஐபி மற்றும் ஒழுங்குமுறை வழிகாட்டலுக்கான உங்கள் ஏஐ உதவியாளர்",
    hero_wisdom_tag: "பண்டைய ஞானமும் நவீன அறிவாற்றலும் இணையும் இடம்",
    hero_desc: "அறிவுசார் சொத்துரிமை, பாரம்பரிய அறிவு மற்றும் ஒழுங்குமுறை தேவைகள் குறித்து பலமொழி வழிகாட்டல் பெறுங்கள்.",
    btn_ask_ipsakti: "ஐபி-சக்தியிடம் கேளுங்கள்",
    btn_classify_formulation: "மருந்தை வகைப்படுத்துங்கள்",
    insights_title: "விரைவு விவரங்கள்",
    metric_sources_label: "மொத்த ஆதாரங்கள்",
    metric_areas_label: "அறிவுப் பிரிவுகள்",
    metric_langs_label: "ஆதரிக்கப்படும் மொழிகள்",
    metric_jurisdiction_label: "அதிகார வரம்பு",
    metric_jurisdiction_val: "இந்தியா + சர்வதேசம்",
    quote_text: "அறிவுசார் சொத்துரிமை மற்றும் ஒழுங்குமுறை மூலம் ஆயுர்வேத கண்டுபிடிப்புகளை மேம்படுத்துதல்.",
    badge_multilingual: "பலமொழி",
    badge_rag: "RAG மூலம் இயங்கும்",
    badge_source_cited: "ஆதாரம் குறிப்பிடப்பட்டது",
    badge_dual_jurisdiction: "இந்தியா + சர்வதேசம்",
    badge_kg: "அறிவு வரைபடம்",
    card_ai_title: "ஏஐ உதவியாளர்",
    card_ai_desc: "கேள்விகளைக் கேட்டு ஐபி, டிகே மற்றும் ஆயுஷ் இணக்கம் பற்றிய வழிகாட்டலைப் பெறுங்கள்.",
    card_formulation_title: "மருந்து வகைப்பாடு",
    card_formulation_desc: "உங்கள் தயாரிப்பை பாரம்பரிய அல்லது புதிய ஐபி வழிகளில் வகைப்படுத்துங்கள்.",
    card_ip_title: "ஐபி & ஒழுங்குமுறை வழிகாட்டல்",
    card_ip_desc: "காப்புரிமை, புவிசார் குறியீடு, வர்த்தக முத்திரை பற்றிய வழிகாட்டலைப் பெறுங்கள்.",
    card_abs_title: "ஏபிஎஸ் இணக்கம்",
    card_abs_desc: "உயிரியல் பன்முகத்தன்மை சட்டத்தின் கீழ் அணுகல் மற்றும் பயன் பகிர்வு தேவைகளை சரிபார்க்கவும்.",
    card_tkdl_title: "டிகேடிஎல் / முந்தைய கலை",
    card_tkdl_desc: "பாரம்பரிய அறிவு களஞ்சியங்கள் மற்றும் முந்தைய கலை ஆதாரங்களைத் தேடுங்கள்.",
    card_corpus_title: "அறிவுத் தொகுப்பு",
    card_corpus_desc: "அதிகாரப்பூர்வ சட்ட மற்றும் ஒழுங்குமுறை ஆதாரங்களை ஆராயுங்கள்.",
    recent_activity_title: "சமீபத்திய செயல்பாடு",
    view_all_link: "அனைத்தையும் காண்க",
    footer_slogan: "பாரம்பரிய அறிவு | நவீன தொழில்நுட்பம் | நிலையான எதிர்காலம்"
  },
  te: {
    brand_subtitle: "ఆయుర్వేదం • మేధో సంపత్తి • నియంత్రణ",
    nav_core_copilot: "కోర్ కో-పైలట్",
    nav_home: "హోమ్ (Home)",
    nav_ai_assistant: "ఏఐ అసిస్టెంట్",
    nav_formulation: "ఫార్ములేషన్ వర్గీకరణ",
    nav_ip_guidance: "ఐపీ & నియంత్రణ మార్గదర్శకత్వం",
    nav_abs: "ఏబీఎస్ సమ్మతి (ABS)",
    nav_knowledge_repos: "జ్ఞాన నిల్వలు (Repositories)",
    nav_tkdl: "టీకేడీఎల్ / పూర్వ కళ",
    nav_corpus: "చట్టపరమైన జ్ఞాన సముదాయం",
    nav_graph: "నాలెడ్జ్ గ్రాఫ్ (Knowledge Graph)",
    nav_agentic: "ఏజెంటిక్ విశ్లేషణ & ఆధారాలు",
    nav_agentic_analysis: "ఏజెంటిక్ విశ్లేషణ",
    nav_sources: "మూలాలు & ఉల్లేఖనాలు",
    nav_governance: "పాలన & నాణ్యత",
    nav_human_expert: "మానవ నిపుణుల సంప్రదింపు",
    nav_privacy: "గోప్యత & భద్రత",
    nav_evaluation: "మూల్యాంకనం",
    sidebar_dpdp: "DPDP-అనుకూల ప్రోటోటైప్",
    sidebar_legal_disclaimer: "ఈ సమాచారం విద్యా మరియు సమాచార ప్రయోజనాల కోసం మాత్రమే అందించబడింది, చట్టపరమైన సలహా కాదు.",
    search_placeholder: "ఆయుర్వేద ఐపీ, నియంత్రణ లేదా సమ్మతి గురించి అడగండి...",
    jurisdiction_india: "భారతదేశం",
    jurisdiction_intl: "అంతర్జాతీయ",
    profile_user: "పరిశోధకుడు (Researcher)",
    notif_title: "నియంత్రణ హెచ్చరికలు",
    notif_item1_title: "గెజిట్ నవీకరణ: రూల్ 158B",
    notif_item1_sub: "క్లాసికల్ ఫార్ములేషన్ల కోసం ఆయుష్ మంత్రిత్వ శాఖ ఆధారాల నిబంధనలను నవీకరించింది.",
    notif_mark_read: "అన్నీ చదివినట్లు గుర్తించండి",
    hero_welcome: "స్వాగతం",
    hero_heading: "ఆయుర్వేద ఐపీ & నియంత్రణ మార్గదర్శకత్వం కోసం మీ ఏఐ సహాయకుడు",
    hero_wisdom_tag: "ప్రాచీన విజ్ఞానం మరియు ఆధునిక మేధస్సుల సమ్మేళనం",
    hero_desc: "మేధో సంపత్తి, సాంప్రదాయ విజ్ఞానం మరియు నియంత్రణ నిబంధనలపై బహుభాషా మార్గదర్శకత్వం పొందండి.",
    btn_ask_ipsakti: "ఐపీ-శక్తిని అడగండి",
    btn_classify_formulation: "ఫార్ములేషన్ వర్గీకరించండి",
    insights_title: "త్వరిత వివరాలు",
    metric_sources_label: "మొత్తం మూలాలు",
    metric_areas_label: "జ్ఞాన రంగాలు",
    metric_langs_label: "మద్దతు ఉన్న భాషలు",
    metric_jurisdiction_label: "అధికార పరిధి",
    metric_jurisdiction_val: "భారతదేశం + అంతర్జాతీయ",
    quote_text: "మేధో సంపత్తి మరియు నియంత్రణ నైపుణ్యం ద్వారా ఆయుర్వేదంలో ఆవిష్కరణలను ప్రోత్సహించడం.",
    badge_multilingual: "బహుభాషా",
    badge_rag: "RAG ఆధారిత",
    badge_source_cited: "మూలం ఉదహరించబడింది",
    badge_dual_jurisdiction: "భారతదేశం + అంతర్జాతీయ",
    badge_kg: "నాలెడ్జ్ గ్రాఫ్",
    card_ai_title: "ఏఐ అసిస్టెంట్",
    card_ai_desc: "ప్రశ్నలు అడగండి మరియు ఐపీ, టీకే మరియు ఆయుష్ నిబంధనలపై ఆధారాలతో కూడిన మార్గదర్శకత్వం పొందండి.",
    card_formulation_title: "ఫార్ములేషన్ వర్గీకరణ",
    card_formulation_desc: "మీ ఔషధ మిశ్రమాన్ని క్లాసికల్ లేదా నవల ఐపీ మార్గాలుగా వర్గీకరించండి.",
    card_ip_title: "ఐపీ & నియంత్రణ మార్గదర్శకత్వం",
    card_ip_desc: "పేటెంట్లు, జీఐ, ట్రేడ్‌మార్క్‌ల హక్కుల గురించి మార్గదర్శకత్వం పొందండి.",
    card_abs_title: "ఏబీఎస్ సమ్మతి",
    card_abs_desc: "జీవ వైవిధ్య చట్టం క్రింద ప్రాప్యత మరియు ప్రయోజనాల భాగస్వామ్యాన్ని తనిఖీ చేయండి.",
    card_tkdl_title: "టీకేడీఎల్ / పూర్వ కళ",
    card_tkdl_desc: "సాంప్రదాయ విజ్ఞాన నిల్వలు మరియు పూర్వ కళా సూచనలను శోధించండి.",
    card_corpus_title: "జ్ఞాన సముదాయం",
    card_corpus_desc: "ప్రామాణిక చట్టపరమైన మరియు నియంత్రణ పత్రాలను అన్వేషించండి.",
    recent_activity_title: "ఇటీవలి కార్యాచరణ",
    view_all_link: "అన్నీ చూడండి",
    footer_slogan: "సాంప్రదాయ విజ్ఞానం | ఆధునిక సాంకేతికత | సుస్థిర భవిష్యత్తు"
  },
  bn: {
    brand_subtitle: "আয়ুর্বেদ • মেধা সম্পদ • নিয়ন্ত্রণ",
    nav_core_copilot: "মূল কো-পাইলট",
    nav_home: "হোম (Home)",
    nav_ai_assistant: "এআই সহকারী",
    nav_formulation: "ফর্মুলেশন শ্রেণীকরণ",
    nav_ip_guidance: "আইপি ও নিয়ন্ত্রক নির্দেশিকা",
    nav_abs: "এবিএস সম্মতি (ABS)",
    nav_knowledge_repos: "জ্ঞান ভাণ্ডার (Repositories)",
    nav_tkdl: "টিকেডিএল / পূর্ববর্তী শিল্প",
    nav_corpus: "আইনি জ্ঞান সংগ্রহ",
    nav_graph: "নলেজ গ্রাফ (Knowledge Graph)",
    nav_agentic: "এজেন্টিক বিশ্লেষণ ও প্রমাণ",
    nav_agentic_analysis: "এজেন্টিক বিশ্লেষণ",
    nav_sources: "উৎস ও উদ্ধৃতি (Citations)",
    nav_governance: "শাসন ও গুণমান",
    nav_human_expert: "মানব বিশেষজ্ঞ পরামর্শ",
    nav_privacy: "গোপনীয়তা ও নিরাপত্তা",
    nav_evaluation: "মূল্যায়ন",
    sidebar_dpdp: "ডিপিডিপি-সম্মত প্রোটোটাইপ",
    sidebar_legal_disclaimer: "এই তথ্য শুধুমাত্র শিক্ষামূলক ও তথ্যগত উদ্দেশ্যে প্রদান করা হয়েছে এবং আইনি পরামর্শ হিসেবে গণ্য নয়।",
    search_placeholder: "আয়ুর্বেদ আইপি, নিয়ন্ত্রণ বা সম্মতি সম্পর্কে জিজ্ঞাসা করুন...",
    jurisdiction_india: "ভারত",
    jurisdiction_intl: "আন্তর্জাতিক",
    profile_user: "গবেষক (Researcher)",
    notif_title: "নিয়ন্ত্রক সতর্কতা",
    notif_item1_title: "গেজেট আপডেট: নিয়ম 158B",
    notif_item1_sub: "আয়ুষ মন্ত্রণালয় ধ্রুপদী ফর্মুলেশনের জন্য প্রমাণের প্রয়োজনীয়তা আপডেট করেছে।",
    notif_mark_read: "সব পঠিত হিসেবে চিহ্নিত করুন",
    hero_welcome: "স্বাগতম",
    hero_heading: "আয়ুর্বেদ আইপি এবং নিয়ন্ত্রক নির্দেশিকার জন্য আপনার এআই সহকারী",
    hero_wisdom_tag: "প্রাচীন জ্ঞান এবং আধুনিক বুদ্ধিমত্তার মেলবন্ধন",
    hero_desc: "মেধা সম্পদ, ঐতিহ্যগত জ্ঞান এবং নিয়ন্ত্রক কাঠামোর উপর বহুভাষিক, উৎস-উদ্ধৃত নির্দেশিকা পান।",
    btn_ask_ipsakti: "আইপি-শক্তিকে জিজ্ঞাসা করুন",
    btn_classify_formulation: "ফর্মুলেশন শ্রেণীবদ্ধ করুন",
    insights_title: "সংক্ষিপ্ত বিবরণ",
    metric_sources_label: "মোট উৎস",
    metric_areas_label: "জ্ঞান ক্ষেত্র",
    metric_langs_label: "সমর্থিত ভাষা",
    metric_jurisdiction_label: "এখতিয়ার",
    metric_jurisdiction_val: "ভারত + আন্তর্জাতিক",
    quote_text: "মেধা সম্পদ এবং নিয়ন্ত্রক উৎকর্ষের মাধ্যমে আয়ুর্বেদে উদ্ভাবনকে শক্তিশালী করা।",
    badge_multilingual: "বহুভাষিক",
    badge_rag: "RAG চালিত",
    badge_source_cited: "উৎস উদ্ধৃত",
    badge_dual_jurisdiction: "ভারত + আন্তর্জাতিক",
    badge_kg: "নলেজ গ্রাফ",
    card_ai_title: "এআই সহকারী",
    card_ai_desc: "প্রশ্ন করুন এবং আইপি, টিকে এবং আয়ুষ সম্মতির বিষয়ে উৎস-উদ্ধৃত নির্দেশিকা পান।",
    card_formulation_title: "ফর্মুলেশন শ্রেণীকরণ",
    card_formulation_desc: "এআই সহায়তায় আপনার ফর্মুলেশনকে ঐতিহ্যগত বা নতুন আইপি পথে শ্রেণীবদ্ধ করুন।",
    card_ip_title: "আইপি ও নিয়ন্ত্রক নির্দেশিকা",
    card_ip_desc: "পেটেন্ট, জিআই, ট্রেডমার্ক এবং নিয়ন্ত্রক প্রয়োজনীয়তা সম্পর্কিত তথ্য পান।",
    card_abs_title: "এবিএস সম্মতি",
    card_abs_desc: "জৈব বৈচিত্র্য আইনের অধীনে প্রবেশাধিকার এবং সুবিধা ভাগাভাগির শর্তাবলী পরীক্ষা করুন।",
    card_tkdl_title: "টিকেডিএল / পূর্ববর্তী শিল্প",
    card_tkdl_desc: "ঐতিহ্যগত জ্ঞান ভাণ্ডার এবং পূর্ববর্তী শিল্পের তথ্য অনুসন্ধান করুন।",
    card_corpus_title: "জ্ঞান সংগ্রহ",
    card_corpus_desc: "প্রামাণ্য এবং সংশোধিত আইনি নথিপত্র অনুসন্ধান করুন।",
    recent_activity_title: "সাম্প্রতিক কার্যকলাপ",
    view_all_link: "সব দেখুন",
    footer_slogan: "ঐতিহ্যবাহী জ্ঞান | আধুনিক প্রযুক্তি | একটি টেকসই ভবিষ্যৎ"
  }
};

// =============================================================================
// 2. STATE INITIALIZATION & LOCALSTORAGE MANAGEMENT
// =============================================================================
const APP_STATE = {
  language: localStorage.getItem('selectedLanguage') || localStorage.getItem('ipsakti_lang') || 'en',
  jurisdiction: localStorage.getItem('ipsakti_jurisdiction') || 'india',
  voiceActive: false
};

// Master list of all 14 Bhashini-supported languages
const ALL_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', badge: 'EN', supported: true },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', badge: 'HI', supported: true },
  { code: 'mr', name: 'Marathi', native: 'मराठी', badge: 'MR', supported: true },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', badge: 'GU', supported: true },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', badge: 'TA', supported: true },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', badge: 'TE', supported: true },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', badge: 'BN', supported: true },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', badge: 'KN', supported: true },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', badge: 'ML', supported: true },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', badge: 'PA', supported: true },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', badge: 'OR', supported: true },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া', badge: 'AS', supported: true },
  { code: 'ur', name: 'Urdu', native: 'اردو', badge: 'UR', supported: true },
  { code: 'sa', name: 'Sanskrit', native: 'संस्कृतम्', badge: 'SA', supported: true }
];

// Native script labels for all languages
const LANG_DISPLAY_NAMES = {
  en: 'English',
  hi: 'हिन्दी',
  mr: 'मराठी',
  gu: 'ગુજરાતી',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  bn: 'বাংলা',
  kn: 'ಕನ್ನಡ',
  ml: 'മലയാളം',
  pa: 'ਪੰਜਾਬੀ',
  or: 'ଓଡ଼ିଆ',
  as: 'অসমীয়া',
  ur: 'اردو',
  sa: 'संस्कृतम्'
};

// =============================================================================
// 3. BHASHINI FULL-PAGE LOCALIZATION ENGINE
// =============================================================================

// Embedded pre-warmed dictionary for zero-delay initial rendering across test pages
const BHASHINI_PREBUILT_TRANSLATIONS = {"hi": {"Ayurvedic Formulation Classifier": "आयुर्वेदिक सूत्रीकरण वर्गीकरणकर्ता", "Patentability & Regulatory Pre-Check": "पेटेंट योग्यता और नियामक पूर्व-जांच", "Evaluate your formulation composition, traditional knowledge exposure, Section 3(p) non-patentability risk, and regulatory licensing pathway under Rule 158B.": "नियम 158बी के तहत अपनी सूत्रीकरण संरचना, पारंपरिक ज्ञान प्रदर्शन, धारा 3 (पी) गैर-पेटेंट जोखिम और नियामक लाइसेंस मार्ग का मूल्यांकन करें।", "This is an informational prototype assessment and not legal advice. Formal novelty and freedom-to-operate require certified patent agent drafting.": "यह एक सूचनात्मक प्रोटोटाइप मूल्यांकन है न कि कानूनी सलाह। औपचारिक नवीनता और संचालन की स्वतंत्रता के लिए प्रमाणित पेटेंट एजेंट ड्राफ्टिंग की आवश्यकता होती है।", "Formulation Parameters": "सूत्रीकरण मापदंड", "Formulation Name / Code": "सूत्रीकरण नाम/कोड", "Botanical Ingredients (Botanical Names & Proportions)": "वानस्पतिक सामग्री (वानस्पतिक नाम और अनुपात)", "Plant / Biological Source Origin": "पादप/जैविक स्रोत उत्पत्ति", "Preparation Method": "तैयारी की विधि", "Intended Therapeutic / Health Use": "इच्छित उपचारात्मक/स्वास्थ्य उपयोग", "Documented in Classical Ayurvedic Texts?": "शास्त्रीय आयुर्वेदिक ग्रंथों में प्रलेखित?", "Yes (Charaka, Sushruta, Astanga Hridaya, etc.)": "हां (चरक, सुश्रुत, अष्टांग हृदय, आदि)", "No (Entirely Novel Formulation)": "नहीं (पूरी तरह से नया सूत्रीकरण)", "Novelty & Inventive Step Claim": "नवीनता और आविष्कारशील कदम का दावा", "Modified Synergy / Enhanced Bioavailability (Bio-enhancer ratio)": "संशोधित तालमेल/उन्नत जैव उपलब्धता (जैव-वर्धक अनुपात)", "Classical Traditional Formulation (Exact classical recipe)": "शास्त्रीय पारंपरिक सूत्रीकरण (सटीक शास्त्रीय विधि)", "Novel Isolated Active Fraction / Phytopharmaceutical": "नोवेल आइसोलेटेड एक्टिव फ्रैक्शन/फाइटोफार्मास्युटिकल", "Novel Drug Delivery System (Nano-liposomal, Phytosome)": "नवीन औषधि वितरण प्रणाली (नैनो-लिपोसोमल, फाइटोसोम)", "Analyze Formulation": "सूत्रीकरण का विश्लेषण करें", "Traditional Formulation with Synergistic Bio-enhancement": "सहक्रियात्मक जैव-संवर्धन के साथ पारंपरिक सूत्रीकरण", "Ashwagandha-Brahmi Neuro-Cognitive Extract": "अश्वगंधा-ब्राह्मी न्यूरो-संज्ञानात्मक निष्कर्षण", "Assessed against Indian Patents Act (Sec 3(p)), Rule 158B Drugs & Cosmetics Act, and Biological Diversity Act. Origin: Madhya Pradesh": "भारतीय पेटेंट अधिनियम (धारा 3 (पी)), नियम 158 बी ड्रग्स एंड कॉस्मेटिक्स अधिनियम और जैविक विविधता अधिनियम के खिलाफ मूल्यांकन किया गया। उत्पत्तिः मध्य प्रदेश", "Traditional Knowledge Risk": "पारंपरिक ज्ञान जोखिम", "High (Component Treatises Found)": "उच्च (घटक ग्रंथ पाए गए)", "Prior-Art Risk": "पूर्व-कला जोखिम", "Medium (Novel Ratio/Bioavailability)": "मध्यम (नवीन अनुपात/जैव उपलब्धता)", "Potential IP Route": "संभावित आईपी मार्ग", "Process patent & synergistic composition (Requires CI data)": "प्रक्रिया पेटेंट और सहक्रियात्मक संरचना (सी. आई. डेटा की आवश्यकता होती है)", "Analysis Confidence": "विश्लेषण विश्वास", "Regulatory Considerations & Licensing:": "विनियामक विचार और अनुज्ञप्तिः", "Requires proving supra-additive therapeutic index over individual ingredients to overcome Section 3(e) & 3(p). Biological Diversity Act (Form I or III) clearance is mandatory.": "धारा 3 (ई) और 3 (पी) को दूर करने के लिए अलग-अलग अवयवों पर अति-योजक चिकित्सीय सूचकांक साबित करने की आवश्यकता होती है। जैविक विविधता अधिनियम (प्रपत्र I या III) मंजूरी अनिवार्य है।", "Export Assessment Summary": "निर्यात मूल्यांकन सारांश", "Escalate to Expert": "विशेषज्ञ तक बढ़ाएँ", "Access & Benefit Sharing (ABS) Helper": "अभिगम और लाभ साझाकरण (एबीएस) सहायक", "Biological Diversity Act, 2002": "जैविक विविधता अधिनियम, 2002", "Determine mandatory compliance under the National Biodiversity Authority (NBA), State Biodiversity Boards (SBB), and the Nagoya Protocol before commercializing Indian medicinal flora.": "भारतीय औषधीय वनस्पतियों का व्यावसायीकरण करने से पहले राष्ट्रीय जैव विविधता प्राधिकरण (एन. बी. ए.), राज्य जैव विविधता बोर्ड (एस. बी. बी.) और नागोया प्रोटोकॉल के तहत अनिवार्य अनुपालन निर्धारित करें।", "Statutory Notice: Section 7 requires prior intimation to State Biodiversity Boards. Foreign entities must obtain Section 3 NBA approval prior to accessing Indian biological resources.": "वैधानिक सूचनाः धारा 7 में राज्य जैव विविधता बोर्डों को पूर्व सूचना देने की आवश्यकता है। विदेशी संस्थाओं को भारतीय जैविक संसाधनों तक पहुँचने से पहले धारा 3 एन. बी. ए. अनुमोदन प्राप्त करना होगा।", "Resource Access Details": "संसाधन अभिगम विवरण", "Biological Resource (Botanical Name)": "जैविक संसाधन (वानस्पतिक नाम)", "Sourcing State / Territory": "स्रोत राज्य/क्षेत्र", "Purpose of Access": "पहुँच का उद्देश्य", "Commercial Utilization": "व्यावसायिक उपयोग", "Academic / Non-commercial Research": "अकादमिक/गैर-वाणिज्यिक अनुसंधान", "Applicant Entity Legal Status": "आवेदक इकाई की कानूनी स्थिति", "Indian Incorporated Entity (Section 7, BDA)": "भारतीय निगमित संस्था (धारा 7, बीडीए)", "Foreign Entity / NRI / Non-Indian Shareholding (Section 3, BDA)": "विदेशी संस्था/एनआरआई/गैर-भारतीय हिस्सेदारी (धारा 3, बीडीए)", "Individual Indian Citizen / Vaidya / Local Practitioner": "व्यक्तिगत भारतीय नागरिक/वैद्य/स्थानीय व्यवसायी", "Traditional Knowledge Involved?": "पारंपरिक ज्ञान शामिल है?", "Yes (Tribal / Community TK)": "हाँ (जनजातीय/सामुदायिक टीके)", "No (Independent Botanical Sourcing)": "नहीं (स्वतंत्र वनस्पति स्रोत)", "Check ABS Requirements": "एबीएस आवश्यकताओं की जाँच करें", "ABS Assessment Result": "एबीएस मूल्यांकन परिणाम", "ABS Approval Mandatory (Section 7 BDA)": "एबीएस अनुमोदन अनिवार्य (धारा 7 बीडीए)", "Applicable Authority": "लागू प्राधिकरण", "Filing Requirement": "दाखिल करने की आवश्यकता", "Form I (Prior Intimation to SBB)": "प्रपत्र I (एस. बी. बी. को पूर्व सूचना)", "Benefit Sharing Levy": "लाभ साझाकरण शुल्क", "Statutory Compliance Checklist": "वैधानिक अनुपालन चेकलिस्ट", "Multilingual AI Research Assistant": "बहुभाषी ए. आई. अनुसंधान सहायक", "RAG-Powered Co-Pilot": "आरएजी-संचालित सह-पायलट", "Ask questions about Ayurvedic intellectual property, Section 3(p) non-patentability barriers, Access and Benefit Sharing (ABS) under the Biological Diversity Act, and TKDL prior art. Every response cites verified legal authorities.": "आयुर्वेदिक बौद्धिक संपदा, धारा 3 (पी) गैर-पेटेंट बाधाओं, जैविक विविधता अधिनियम के तहत पहुंच और लाभ साझाकरण (एबीएस) और टीकेडीएल पूर्व कला के बारे में प्रश्न पूछें। प्रत्येक प्रतिक्रिया सत्यापित कानूनी अधिकारियों का हवाला देती है।", "Clear Conversation": "साफ बातचीत", "Simulated Prototype Guidance: AI responses provide educational synthesis from indexed statutory frameworks and do not constitute formal legal counsel.": "सिम्युलेटेड प्रोटोटाइप गाइडेंसः ए. आई. प्रतिक्रियाएं अनुक्रमित वैधानिक ढांचे से शैक्षिक संश्लेषण प्रदान करती हैं और औपचारिक कानूनी सलाहकार का गठन नहीं करती हैं।", "Simulated RAG Retrieval Pipeline": "सिम्युलेटेड आरएजी पुनर्प्राप्ति पाइपलाइन", "1. Query Analysis": "1. पूछताछ विश्लेषण", "2. Jurisdiction Filter": "2. क्षेत्राधिकार फ़िल्टर", "3. Knowledge Retrieval": "3. ज्ञान की प्राप्ति", "4. Source Ranking": "4. स्रोत रैंकिंग", "5. Answer Generation": "5. उत्तर पीढ़ी", "6. Citation Verification": "6. उद्धरण सत्यापन", "What IP protection is available for an Ayurvedic formulation?": "आयुर्वेदिक फार्मूलेशन के लिए कौन सी आईपी सुरक्षा उपलब्ध है?", "Can this traditional formulation be patented in India?": "क्या इस पारंपरिक फार्मूलेशन को भारत में पेटेंट कराया जा सकता है?", "What ABS requirements apply to this biological resource?": "इस जैविक संसाधन पर कौन सी एबीएस आवश्यकताएँ लागू होती हैं?", "Find prior-art references for Ashwagandha formulations.": "अश्वगंधा सूत्रीकरण के लिए पूर्व-कला संदर्भ खोजें।", "Can traditional knowledge alone be patented?": "क्या केवल पारंपरिक ज्ञान का पेटेंट कराया जा सकता है?", "Active Statutory Framework": "सक्रिय सांविधिक ढांचा", "Selected Jurisdiction Model": "चयनित क्षेत्राधिकार मॉडल", "Simulated Confidence Meter": "सिम्युलेटेड विश्वास मीटर", "Overall Evidence Alignment": "समग्र साक्ष्य संरेखण", "Send Message": "संदेश भेजें", "Type your query...": "अपनी क्वेरी .......... टाइप करें", "Ask IP-SAKTI": "आई. पी.-शक्ति से पूछें", "Explore specialized guidance across all 8 branches of intellectual property and biological regulation. Toggle between India and International jurisdictions above to compare statutory pathways in real-time.": "बौद्धिक संपदा और जैविक विनियमन की सभी 8 शाखाओं में विशेष मार्गदर्शन का अन्वेषण करें। वास्तविक समय में वैधानिक मार्गों की तुलना करने के लिए ऊपर दिए गए भारत और अंतर्राष्ट्रीय क्षेत्राधिकारों के बीच टॉगल करें।", "Ticket Subject": "टिकट विषय", "Statutory Notice: Prototype / DPDP-Aligned Design": "वैधानिक सूचनाः प्रोटोटाइप/डी. पी. डी. पी.-संरेखित डिजाइन", "Statute / Legal Instrument": "क़ानून/कानूनी साधन", "AI Assistant": "एआई सहायक", "Audit Details": "लेखापरीक्षा विवरण", "Ticket ID": "टिकट आईडी", "Target Jurisdiction": "लक्षित क्षेत्राधिकार", "Superseded": "सुपरसीड", "High (TKDL Indexed)": "उच्च (टीकेडीएल अनुक्रमित)", "Total Sources": "कुल स्रोत", "Privacy & Security": "गोपनीयता और सुरक्षा", "Prior Intimation to SBB (Form I)": "एस. बी. बी. को पूर्व सूचना (प्रपत्र I)", "Escalate to Facilitator": "फैसिलिटेटर तक बढ़ाएँ", "Submit to Facilitator Queue": "फैसिलिटेटर कतार में जमा करें", "Waiting": "इंतजार कर रहे हैं", "India + International": "भारत + अंतर्राष्ट्रीय", "Click node to inspect • Drag node to reposition • Scroll or pinch to zoom": "निरीक्षण के लिए नोड पर क्लिक करें; पुनर्स्थापना के लिए नोड को खींचें; ज़ूम करने के लिए स्क्रॉल करें या चुटकी लें", "Charaka Samhita": "चरक संहिता", "Shri K. S. Ramanathan": "श्री के. एस. रामनाथन", "Version Audited": "संस्करण का लेखा-परीक्षण किया गया", "2. TKDL & Prior-Art Audit": "2. टीकेडीएल और पूर्व-कला लेखापरीक्षा", "Visual ontology mapping Ayurvedic botanicals, traditional knowledge treatises, statutory patent barriers, ABS compliance authorities, and international IP treaties.": "आयुर्वेदिक वनस्पति विज्ञान, पारंपरिक ज्ञान ग्रंथों, वैधानिक पेटेंट बाधाओं, एबीएस अनुपालन प्राधिकरणों और अंतर्राष्ट्रीय आईपी संधियों का दृश्य ऑन्टोलॉजी मानचित्रण।", "Showing 10 authoritative citations": "10 आधिकारिक उद्धरण दिखा रहे हैं", "Verified": "सत्यापित किया गया", "e.g. Standardized Withanolide Oral Lipid Delivery System": "उदा. मानकीकृत विथानोलाइड ओरल लिपिड डिलीवरी सिस्टम", "Ticket: IPS-2026-0481": "टिकटः आईपीएस-2026-0481", "All Entity Categories": "सभी इकाई श्रेणियाँ", "Query in AI Assistant →": "ए. आई. सहायक में पूछताछ", "🧪 Nano-Emulsified Triphala in US & EU": "अमेरिका और यूरोपीय संघ में नैनो-पायसीकृत त्रिफला", "All Treatises": "सभी ग्रंथ", "e.g. Cognitive enhancement and neuro-protection": "उदा. संज्ञानात्मक वृद्धि और तंत्रिका-सुरक्षा", "Run ABS Assessment": "एबीएस मूल्यांकन चलाएँ", "Timestamp": "टाइमस्टैम्प", "All Domains": "सभी डोमेन", "Classify your formulation with AI assistance into classical or novel IP pathways.": "ए. आई. की सहायता से अपने सूत्रीकरण को शास्त्रीय या नए आई. पी. मार्गों में वर्गीकृत करें।", "In Progress": "प्रगति में", "SLA Remaining: 18h 42m": "एस. एल. ए. शेष 18 घंटे 42 मीटर", "Real-Time Session Audit Trail": "रियल-टाइम सत्र लेखापरीक्षा ट्रेल", "Languages Supported": "समर्थित भाषाएँ", "AYUSH Licensing & GMP": "आयुष लाइसेंस और जीएमपी", "Directs your formulation dossier to the Government Facilitator Queue.": "अपने फॉर्मूलेशन डोजियर को सरकारी फैसिलिटेटर कतार को निर्देशित करता है।", "Biodiversity Management Committee (BMC) Consultation": "जैव विविधता प्रबंधन समिति (बी. एम. सी.) परामर्श", "Find node (e.g. Ashwagandha, NBA, Patent...)": "नोड खोजें (जैसे अश्वगंधा, एन. बी. ए., पेटेंट ..........)", "Evaluated under the Central Drugs Standard Control Organization (CDSCO) Phytopharmaceutical Guidelines (2015). Requires Phase I-III clinical trial data and safety pharmacology.": "केंद्रीय औषधि मानक नियंत्रण संगठन (सी. डी. एस. सी. ओ.) फाइटोफार्मास्युटिकल दिशानिर्देश (2015) के तहत मूल्यांकन किया गया। चरण I-III नैदानिक परीक्षण डेटा और सुरक्षा फार्माकोलॉजी की आवश्यकता होती है।", "Priority": "प्राथमिकता", "Extracts botanical taxa, therapeutic indications, novelty statements, and processing methods.": "वानस्पतिक वर्गीकरण, चिकित्सीय संकेत, नवीनता कथन और प्रसंस्करण विधियों को निकालता है।", "Kerala (State SBB)": "केरल (राज्य एस. बी. बी)", "Deterministic logging": "निर्धारक लॉगिंग", "Scientific Pharmacokinetics": "वैज्ञानिक फार्माकोकाइनेटिक्स", "7 Indic languages parity": "7 भारतीय भाषाओं की समानता", "🇮🇳 India Statutory Framework": "भारत सांविधिक ढांचा", "Retd. Joint Controller of Patents & Designs (CGPDTM)": "सेवानिवृत्त हुए। पेटेंट और डिजाइन के संयुक्त नियंत्रक (सी. जी. पी. डी. टी. एम.)", "Review Required": "समीक्षा की आवश्यकता है", "Governing Statutes & Authorities": "शासी क़ानून और प्राधिकरण", "Citation %": "उद्धरण%", "Ask questions and get source-cited guidance on IP, TK and AYUSH compliance.": "प्रश्न पूछें और आईपी, टीके और आयुष अनुपालन पर स्रोत-उद्धृत मार्गदर्शन प्राप्त करें।", "Classify Formulation": "वर्गीकरण सूत्रीकरण", "Search formulation, plant, traditional use or preparation (e.g. Ashwagandha, Rasayana, Ghrita)...": "खोज सूत्रीकरण, पौधा, पारंपरिक उपयोग या तैयारी (जैसे अश्वगंधा, रसायन, घृता) ..........", "Consensus & Strategy Advisory": "सर्वसम्मति और रणनीति परामर्श", "Privacy, Audit & DPDP-Aligned Governance": "गोपनीयता, लेखापरीक्षा और डी. पी. डी. पी.-संरेखित शासन", "Up to 2.0% - 5.0% purchase price or 0.5% turnover": "2.0%-5.0% खरीद मूल्य या 0.5% कारोबार", "Version Tracking & Legislative Integrity Assurance": "संस्करण ट्रैकिंग और विधायी सत्यनिष्ठा आश्वासन", "Domain": "डोमेन", "This knowledge corpus utilizes deterministic SHA-256 cryptographic verification hashes to ensure source fidelity against official Gazettes of India, WIPO treaties, and Ministry of AYUSH regulatory circulars. It provides informational baseline guidance only.": "यह ज्ञान कोष भारत के आधिकारिक राजपत्रों, डब्ल्यू. आई. पी. ओ. संधियों और आयुष मंत्रालय के नियामक परिपत्रों के खिलाफ स्रोत निष्ठा सुनिश्चित करने के लिए निर्धारक एस. एच. ए.-256 क्रिप्टोग्राफिक सत्यापन हैश का उपयोग करता है। यह केवल सूचनात्मक आधारभूत मार्गदर्शन प्रदान करता है।", "Remembers your chosen language (7 Indic languages) and jurisdiction across page navigation.": "पेज नेविगेशन में आपकी चुनी हुई भाषा (7 भारतीय भाषाएँ) और अधिकार क्षेत्र को याद करता है।", "Human Expert Facilitation": "मानव विशेषज्ञ सुविधा", "Prior Art in Treatises": "ग्रंथों में पूर्व कला", "International Only": "केवल अंतर्राष्ट्रीय", "Statutory Clauses": "सांविधिक खंड", "3. TK Agent": "3. टीके एजेंट", "Traditional Knowledge & TKDL": "पारंपरिक ज्ञान और टीकेडीएल", "Ayurvedic Entity / Statute": "आयुर्वेदिक इकाई/कानून", "Tamper-Evident Audit Log": "टैम्पर-एविडेंट लेखापरीक्षा लॉग", "Patentability & Section 3 Barriers": "पेटेंट योग्यता और धारा 3 बाधाएं", "Tamper-Evident Auditability": "टैम्पर-एविडेंट लेखापरीक्षाबिलिटी", "Showing 12 authoritative sources": "12 आधिकारिक स्रोत दिखा रहे हैं", "e.g. Dr. Anandita Roy": "उदा. डॉ. आनंदिता रॉय", "🌍 Dual (India + Global Filings)": "दोहरी (भारत + वैश्विक फाइलिंग)", "0 Events": "0 घटनाएँ", "Jurisdiction": "अधिकारिता", "Prototype Output": "प्रोटोटाइप आउटपुट", "High (Direct Classical Recipe)": "उच्च (प्रत्यक्ष शास्त्रीय विधि)", "Ayurveda IP & Regulatory Guidance": "आयुर्वेद आईपी और नियामक मार्गदर्शन", "Gazette Sync": "राजपत्र समन्वय", "Granular permissions enabled": "दानेदार अनुमतियाँ सक्रिय की गईं", "Search classical Sanskrit, Tamil, and Persian treatises for formulations, plant names, preparations, and documented therapeutic uses to assess novelty barriers under Section 3(p).": "धारा 3 (पी) के तहत नवीनता बाधाओं का आकलन करने के लिए सूत्रीकरण, पौधों के नाम, तैयारी और प्रलेखित चिकित्सीय उपयोग के लिए शास्त्रीय संस्कृत, तमिल और फारसी ग्रंथों की खोज करें।", "Authority": "प्राधिकरण", "0.1% - 0.5% ex-factory gross sales": "0.1%-0.5% पूर्व-कारखाने की सकल बिक्री", "Direct Phone Briefing": "डायरेक्ट फोन ब्रीफिंग", "Safe Abstention Fallbacks": "सुरक्षित परहेज़ फ़ॉलबैक", "High Evidence Alignment": "उच्च साक्ष्य संरेखण", "Jurisdiction:": "अधिकार क्षेत्रः", "Autonomous Multi-Agent Pipeline": "स्वायत्त बहु-एजेंट पाइपलाइन", "WIPO": "डब्ल्यूआईपीओ", "Sources & Citations": "स्रोत और उद्धरण", "Close": "बंद करें", "Execution of Mutually Agreed Terms (MAT)": "पारस्परिक रूप से सहमत शर्तों (एमएटी) का निष्पादन", "Registered Patent Agent • Ayurvedic Pharmacology Ph.D.": "पंजीकृत पेटेंट एजेंट आयुर्वेद फार्माकोलॉजी पीएचडी।", "Statutory Links": "वैधानिक लिंक", "Ayurveda IP & Regulatory Knowledge Graph": "आयुर्वेद आईपी और नियामक ज्ञान ग्राफ", "Detailed description...": "विस्तृत विवरण ..........", "Version": "संस्करण", "RV": "आरवी", "Traditional Knowledge | Modern Technology | A Sustainable Future": "पारंपरिक ज्ञान। आधुनिक प्रौद्योगिकी। एक सतत भविष्य", "Applicable Authority: Madhya Pradesh SBB & National Biodiversity Authority": "लागू प्राधिकरणः मध्य प्रदेश एस. बी. बी. और राष्ट्रीय जैव विविधता प्राधिकरण", "5. Regulatory Agent": "5. नियामक अभिकर्ता", "🇮🇳 India Only (Patents Act & BDA)": "केवल भारत (पेटेंट अधिनियम और बीडीए)", "Pending Stage 2": "लंबित चरण 2", "1. Query Agent": "1. पूछताछ एजेंट", "Formal Written Legal Opinion": "औपचारिक लिखित कानूनी राय", "Rajasthan (State SBB)": "राजस्थान (राज्य एस. बी. बी.)", "Simulated Multi-Agent Runtime": "सिम्युलेटेड मल्टी-एजेंट रनटाइम", "These benchmark evaluations simulate testing against 150+ legal edge-cases curated from Patent Office decisions, National Biodiversity Authority orders, and published High Court rulings. In production, this suite runs continuously via automated CI/CD assertion pipelines.": "ये मानक मूल्यांकन पेटेंट कार्यालय के निर्णयों, राष्ट्रीय जैव विविधता प्राधिकरण के आदेशों और प्रकाशित उच्च न्यायालय के फैसलों से क्यूरेट किए गए 150 से अधिक कानूनी बढ़त-मामलों के खिलाफ परीक्षण का अनुकरण करते हैं। उत्पादन में, यह सुइट स्वचालित सी. आई./सी. डी. अभिकथन पाइपलाइनों के माध्यम से लगातार चलता है।", "Seamlessly escalate high-stakes formulation patents, Section 3(p) examination objections, and National Biodiversity Authority compliance to accredited AYUSH patent attorneys.": "मान्यता प्राप्त आयुष पेटेंट वकीलों के लिए उच्च-दांव वाले निर्माण पेटेंट, धारा 3 (पी) परीक्षा आपत्तियों और राष्ट्रीय जैव विविधता प्राधिकरण के अनुपालन को निर्बाध रूप से बढ़ाना।", "Tests Section 3(e) synergism requirements, Section 3(j) biological exclusions, and inventive step claims.": "परीक्षण धारा 3 (ई) सहक्रियात्मक आवश्यकताएँ, धारा 3 (जे) जैविक बहिष्करण और आविष्कारशील कदम दावे।", "Maps territorial applicability across India Patent Act 1970 vs USPTO 35 U.S.C. / EPO EPC.": "मानचित्र भारत पेटेंट अधिनियम 1970 बनाम यू. एस. पी. टी. ओ. 35 यू. एस. सी./ई. पी. ओ. ई. पी. सी. में क्षेत्रीय प्रयोज्यता।", "TKDL": "टीकेडीएल", "Adv. Dr. Rajeshwari Vaidya": "अधिवक्ता डॉ. राजेश्वरी वैद्य", "Need Specialist Review?": "विशेषज्ञ समीक्षा की आवश्यकता है?", "View All": "सभी देखें", "Active logs captured during your current session across all 13 modules.": "आपके वर्तमान सत्र के दौरान सभी 13 मॉड्यूल में सक्रिय लॉग लिए गए हैं।", "Verify Corpus Checksums": "कार्पस चेकसम की जाँच करें", "Under Rule 158B of the Drugs and Cosmetics Rules, this requires classical First Schedule textual citation for manufacturing license (Form 25D). Section 3(p) of the Patents Act strictly bars product patents unless surprising in-vitro synergy is proven.": "औषधि और प्रसाधन सामग्री नियमों के नियम 158बी के तहत, इसके लिए विनिर्माण लाइसेंस (प्रपत्र 25डी) के लिए शास्त्रीय प्रथम अनुसूची पाठ्य उद्धरण की आवश्यकता होती है। पेटेंट अधिनियम की धारा 3 (पी) उत्पाद पेटेंट को तब तक सख्ती से प्रतिबंधित करती है जब तक कि आश्चर्यजनक इन-विट्रो तालमेल साबित न हो जाए।", "Describe the Ayurvedic formulation, novelty claim, intended therapeutic indication, and target jurisdiction...": "आयुर्वेदिक सूत्रीकरण, नवीनता दावा, इच्छित चिकित्सीय संकेत और लक्ष्य क्षेत्राधिकार का वर्णन करें", "Synthesized Consensus Awaiting Run": "संश्लेषित सर्वसम्मति प्रतीक्षा दौड़", "Gathers peer-reviewed trials, bioavailability enhancement data, and mechanistic biological assays.": "सहकर्मी-समीक्षित परीक्षण, जैव उपलब्धता वृद्धि डेटा और यंत्रवत जैविक परख एकत्र करता है।", "Explore authoritative, version-tracked legal and regulatory sources.": "आधिकारिक, संस्करण-ट्रैक किए गए कानूनी और नियामक स्रोतों का अन्वेषण करें।", "Prototype / DPDP-Aligned Design": "प्रोटोटाइप/डी. पी. डी. पी.-संरेखित डिजाइन", "Evaluation Dashboard": "मूल्यांकन डैशबोर्ड", "100% Client-Side": "100 प्रतिशत ग्राहक पक्ष", "Completed": "पूरा किया", "Governance & Quality": "शासन और गुणवत्ता", "e.g. Ashwagandha-Ghrita Synergy Compound": "उदा. अश्वगंधा-घृता सिनर्जी यौगिक", "Human IP Facilitator Escalation Network": "ह्यूमन आईपी फैसिलिटेटर एस्केलेशन नेटवर्क", "Detail the specific patent claim, prior-art objection, TKDL citation, or ABS benefit sharing challenge you are facing...": "विशिष्ट पेटेंट दावा, पूर्व-कला आपत्ति, टीकेडीएल प्रशस्ति पत्र, या एबीएस लाभ साझा करने की चुनौती का विवरण दें जिसका आप सामना कर रहे हैं", "Multilingual Quality": "बहुभाषी गुणवत्ता", "Assigned": "नियुक्त किया गया", "+91 98765 43210": "+ 91 98765 43210", "Action Event": "एक्शन इवेंट", "Get multilingual, source-cited guidance on intellectual property, traditional knowledge and regulatory requirements.": "बौद्धिक संपदा, पारंपरिक ज्ञान और नियामक आवश्यकताओं पर बहुभाषी, स्रोत-उद्धृत मार्गदर्शन प्राप्त करें।", "Agentic Pipeline Simulation & Multi-Source Orchestration": "एजेंटिक पाइपलाइन सिमुलेशन और मल्टी-सोर्स ऑर्केस्ट्रेशन", "Purpose Limitation": "उद्देश्य सीमा", "This screen simulates the Human-in-the-Loop escalation protocol designed for national innovation centers. Submission stores deterministic ticket records in local session storage and demonstrates stage tracking.": "यह स्क्रीन राष्ट्रीय नवाचार केंद्रों के लिए डिज़ाइन किए गए ह्यूमन-इन-द-लूप एस्केलेशन प्रोटोकॉल का अनुकरण करती है। प्रस्तुति स्थानीय सत्र भंडारण में निर्धारक टिकट रिकॉर्ड को संग्रहीत करती है और स्टेज ट्रैकिंग का प्रदर्शन करती है।", "Prototype Facilitation Protocol & Institutional Triage": "प्रोटोटाइप सुविधा प्रोटोकॉल और संस्थागत ट्राइएज", "Ontology Graph Architecture & Pure HTML5 Canvas Implementation": "ऑन्टोलॉजी ग्राफ आर्किटेक्चर और शुद्ध एच. टी. एम. एल. 5 कैनवस कार्यान्वयन", "Expected Statutory Behavior": "अपेक्षित सांविधिक व्यवहार", "Karnataka (State SBB)": "कर्नाटक (राज्य एस. बी. बी.)", "Verify local Peoples Biodiversity Register (PBR) entries at the Gram Panchayat.": "ग्राम पंचायत में स्थानीय जन जैव विविधता रजिस्टर (पी. बी. आर.) प्रविष्टियों का सत्यापन करें।", "Madhya Pradesh (State SBB)": "मध्य प्रदेश (राज्य एस. बी. बी)", "Statutory Exemption Applicable (Section 5 / Sec 7 Proviso)": "वैधानिक छूट लागू (धारा 5/धारा 7 प्रावधान)", "Rigorous test-suite auditing statutory accuracy, citation correctness, safe abstention on unsupported queries, and Indic multilingual translation fidelity.": "कठोर परीक्षण-सूट लेखापरीक्षा वैधानिक सटीकता, उद्धरण शुद्धता, असमर्थित प्रश्नों पर सुरक्षित बहिष्कार और भारतीय बहुभाषी अनुवाद निष्ठा।", "4. Formal Advisory Delivery": "4. औपचारिक सलाहकार वितरण", "anandita@institute.ac.in": "anandita@institute.ac.in", "International Treaties": "अंतर्राष्ट्रीय संधियाँ", "Medhya (Cognitive)": "मध्य (संज्ञानात्मक)", "safely abstain": "सुरक्षित रूप से दूर रहें", "Patentable Formulation Composition (Novel Carrier/Release)": "पेटेंट योग्य सूत्रीकरण संरचना (नया वाहक/विमोचन)", "Carrier Novelty": "वाहक नवीनता", "18.4 KB": "18.4 केबी", "Query / Test Scenario": "पूछताछ/परीक्षण परिदृश्य", "Regulatory & Institutional Bodies": "विनियामक और संस्थागत निकाय", "7. Citation Validator": "7. उद्धरण सत्यापनकर्ता", "Queries Charaka, Sushruta, and TKRC concordance to screen for Section 3(p) anticipating citations.": "धारा 3 (पी) के लिए अपेक्षित उद्धरणों के लिए चरक, सुश्रुत और टी. के. आर. सी. से पूछताछ।", "e.g. Wild harvested roots from Madhya Pradesh, India": "उदा. मध्य प्रदेश, भारत से जंगली कटाई की जड़ें", "Global Treaties & Repositories": "वैश्विक संधियाँ और भंडार", "Download Opinion Memo (.txt)": "ओपिनियन मेमो (. tXT) डाउनलोड करें", "Client-side data isolation, granular consent controls, tamper-evident session audit logging, and single-click complete data erasure aligned with India's DPDP Act, 2023.": "ग्राहक-पक्ष डेटा अलगाव, बारीक सहमति नियंत्रण, छेड़छाड़-स्पष्ट सत्र लेखापरीक्षा लॉगिंग, और भारत के डी. पी. डी. पी. अधिनियम, 2023 के साथ संरेखित एकल-क्लिक पूर्ण डेटा विलोपन।", "Rule 158B PPAM Licensing": "नियम १५८बी पी. पी. ए. एम. अनुज्ञप्ति", "Statutes & IP Doctrines": "क़ानून और आईपी सिद्धांत", "Knowledge Corpus": "ज्ञान कोष", "Filter Category:": "फ़िल्टर श्रेणीः", "Evaluation Suite v2.4": "मूल्यांकन सुइट वर्जन 2.4", "For complex clinical trials or borderline inventive steps, request formal evaluation from a registered Patent Agent.": "जटिल नैदानिक परीक्षणों या सीमा रेखा आविष्कारशील चरणों के लिए, एक पंजीकृत पेटेंट एजेंट से औपचारिक मूल्यांकन का अनुरोध करें।", "Exempt from commercial ABS levy": "वाणिज्यिक एबीएस शुल्क से छूट", "Uttarakhand (State SBB)": "उत्तराखंड (राज्य एस. बी. बी.)", "Agentic Analysis": "अभिकर्मक विश्लेषण", "Logs timestamps of legal source inspections, jurisdiction switches, and ticket submissions.": "कानूनी स्रोत निरीक्षणों, अधिकार क्षेत्र स्विचों और टिकट प्रस्तुतियों की समय-सीमा दर्ज करता है।", "AI": "एआई", "Your Escalated Facilitation Requests": "आपके बढ़े हुए सुविधा अनुरोध", "Filters:": "फ़िल्टरः", "Ask about Ayurveda IP, regulation or compliance...": "आयुर्वेद आईपी, विनियमन या अनुपालन के बारे में पूछें ..........", "Local Biodiversity Management Committee (BMC)": "स्थानीय जैव विविधता प्रबंधन समिति (बी. एम. सी.)", "Get guidance on IP rights (patents, GI, trademark) and regulatory requirements.": "आईपी अधिकारों (पेटेंट, जीआई, ट्रेडमार्क) और नियामक आवश्यकताओं पर मार्गदर्शन प्राप्त करें।", "Run Agentic Analysis": "अभिकर्ता विश्लेषण चलाएँ", "IP + Regulatory Guidance": "आई. पी. + नियामक मार्गदर्शन", "Empowering innovation in Ayurveda through intellectual property and regulatory excellence.": "बौद्धिक संपदा और नियामक उत्कृष्टता के माध्यम से आयुर्वेद में नवाचार को सशक्त बनाना।", "Illustrative Prototype Metrics": "सचित्र प्रोटोटाइप मेट्रिक्स", "Session Query Caching": "सत्र पूछताछ कैशिंग", "I assist researchers, clinicians, and Ayurvedic entrepreneurs with intellectual property protection, Section 3(p) non-patentability evaluations, Access and Benefit Sharing (ABS) compliance, and TKDL prior-art identification. How can I assist your research today?": "मैं बौद्धिक संपदा संरक्षण, धारा 3 (पी) गैर-पेटेंट योग्यता मूल्यांकन, पहुंच और लाभ साझाकरण (एबीएस) अनुपालन, और टीकेडीएल पूर्व-कला पहचान के साथ शोधकर्ताओं, चिकित्सकों और आयुर्वेदिक उद्यमियों की सहायता करता हूं। आज मैं आपके शोध में कैसे मदद कर सकता हूँ?", "Prior-Art Pointer Notice: This database is a prototype reference search demonstrating prior-art identification. It does not constitute a definitive or exhaustive patentability search.": "पूर्व-कला सूचक सूचनाः यह डेटाबेस पूर्व-कला पहचान का प्रदर्शन करने वाला एक प्रोटोटाइप संदर्भ खोज है। यह एक निश्चित या संपूर्ण पेटेंट योग्यता खोज का गठन नहीं करता है।", "Welcome to": "स्वागत है", "Every significant action (RAG query, jurisdiction switch, classification run) generates an indelible timestamped local audit event.": "प्रत्येक महत्वपूर्ण कार्रवाई (आर. ए. जी. क्वैरी, अधिकार क्षेत्र परिवर्तन, वर्गीकरण रन) एक अमिट टाइमस्टैम्प्ड स्थानीय लेखापरीक्षा घटना उत्पन्न करती है।", "This visualization runs on a custom zero-dependency spring-embedded force simulation on native HTML5 Canvas. Node associations reflect codified statutory cross-references in the Indian Patents Act, Biological Diversity Act 2002/2023, and WIPO treaties.": "यह विज़ुअलाइज़ेशन देशी एच. टी. एम. एल. 5 कैनवास पर एक कस्टम शून्य-निर्भरता स्प्रिंग-एम्बेडेड बल अनुकरण पर चलता है। नोड संघ भारतीय पेटेंट अधिनियम, जैविक विविधता अधिनियम 2002/2023 और डब्ल्यू. आई. पी. ओ. संधियों में संहिताबद्ध वैधानिक क्रॉस-संदर्भों को दर्शाते हैं।", "Search by statute, section (e.g. 3(p), Rule 158B), authority, or treatise...": "कानून, धारा (जैसे 3 (पी), नियम 158 बी), प्राधिकरण, या ग्रंथ .......... द्वारा खोजें", "Search traditional knowledge repositories and prior art references.": "पारंपरिक ज्ञान भंडार और पूर्व कला संदर्भ खोजें।", "IP & Regulatory Guidance Hub": "आईपी एंड रेगुलेटरी गाइडेंस हब", "Defensive Prior-Art Database": "रक्षात्मक पूर्व-कला डाटाबेस", "Local Audit Logging": "स्थानीय लेखापरीक्षा लॉगिंग", "Session Security & Storage Limitation": "सत्र सुरक्षा और भंडारण सीमा", "National Biodiversity Authority (NBA Chennai) & MoEFCC": "राष्ट्रीय जैव विविधता प्राधिकरण (एनबीए चेन्नई) और एमओईएफसीसी", "Astanga Hridaya": "अष्टांग हृदय", "WARN Only": "केवल चेतावनी", "Language": "भाषा", "Agentic & Evidence": "अभिकर्ता और साक्ष्य", "Digital Personal Data Protection (DPDP) Core Principles": "डिजिटल व्यक्तिगत डेटा संरक्षण (डी. पी. डी. पी.) के मुख्य सिद्धांत", "Namaste! I am IP-SAKTI Sahayak.": "नमस्ते! मैं आई. पी. शक्ति सहायक हूँ।", "Routine Advisory (48–72h)": "नियमित सलाह (48-72 घंटे)", "Active Session Storage": "सक्रिय सत्र भंडारण", "Executing test cases across legal domains...": "कानूनी डोमेन .......... में परीक्षण मामलों को निष्पादित करना", "Patent": "पेटेंट", "Knowledge Areas": "ज्ञान के क्षेत्र", "Synthesizes actionable IP strategy, filing roadmap, ABS obligations, and risk mitigation checklist.": "कार्रवाई योग्य आईपी रणनीति, फाइलिंग रोडमैप, एबीएस दायित्वों और जोखिम शमन चेकलिस्ट को संश्लेषित करता है।", "Last Updated": "अंतिम बार अद्यतन किया गया", "Rasayana (Rejuvenation)": "रसायन (कायाकल्प)", "Formulation Classification": "सूत्रीकरण वर्गीकरण", "Ashwagandha": "अश्वगंधा", "RAG Quality & Regulatory Benchmark Evaluation": "आर. ए. जी. गुणवत्ता और विनियामक मानक मूल्यांकन", "All Indications": "सभी संकेत", "Evaluating against Indian Patents Act 1970 (Sec 3(p)), Biological Diversity Act 2002, TKDL digital gazettes, and AYUSH regulatory orders.": "भारतीय पेटेंट अधिनियम 1970 (धारा 3 (पी)), जैविक विविधता अधिनियम 2002, टीकेडीएल डिजिटल राजपत्र और आयुष नियामक आदेशों के खिलाफ मूल्यांकन।", "Source Cited": "स्रोत उद्धृत किया गया", "6. Evidence Agent": "6. साक्ष्य अभिकर्ता", "Request Facilitator Assistance": "सुविधा प्रदाता सहायता का अनुरोध करें", "Zero cloud storage • Local isolation": "शून्य बादल भंडारण-स्थानीय अलगाव", "Form I to NBA (Mandatory Pre-Access Grant)": "एन. बी. ए. के लिए फॉर्म I (अनिवार्य पूर्व-प्रवेश अनुदान)", "Status": "स्थिति", "Granular consent is captured through clear affirmative toggles before caching any search preferences, language, or escalation tickets.": "किसी भी खोज वरीयताओं, भाषा या वृद्धि टिकट को कैश करने से पहले स्पष्ट सकारात्मक टॉगल के माध्यम से दानेदार सहमति ली जाती है।", "Patent Office (CGPDTM)": "पेटेंट कार्यालय (सी. जी. पी. डी. टी. एम.)", "Multilingual": "बहुभाषी", "Ticket IPS-2026-XXXX": "आई. पी. एस.-2026-XXXX टिकट", "PASS Only": "केवल पास करें", "Patentable subject matter under Section 2(1)(j) as an inventive formulation. Safety and pharmacokinetic bioavailability enhancement data required under AYUSH DCGI co-regulations.": "एक आविष्कारशील सूत्रीकरण के रूप में धारा 2 (1) (जे) के तहत पेटेंट योग्य विषय वस्तु। आयुष डी. सी. जी. आई. सह-विनियमनों के तहत आवश्यक सुरक्षा और फार्माकोकाइनेटिक जैव उपलब्धता वृद्धि डेटा।", "Zero cross-site tracking, third-party cookies, or background telemetry. Data persists only within the client browser origin.": "शून्य क्रॉस-साइट ट्रैकिंग, तृतीय-पक्ष कुकीज़, या पृष्ठभूमि टेलीमेट्री। डेटा केवल क्लाइंट ब्राउज़र मूल के भीतर बना रहता है।", "Statutory Hallucination Defense": "वैधानिक मतिभ्रम रक्षा", "Weekly": "साप्ताहिक", "Statutory legal alignment": "वैधानिक कानूनी संरेखण", "Authoritative Knowledge Corpus": "आधिकारिक ज्ञान कोष", "Statutory Scope & Legal Context": "वैधानिक दायरा और कानूनी संदर्भ", "User Consent Status": "उपयोगकर्ता की सहमति की स्थिति", "Configure how IP-SAKTI Sahayak maintains your local research workspace.": "कॉन्फ़िगर करें कि आईपी-शक्ति सहायक आपके स्थानीय अनुसंधान कार्यस्थल को कैसे बनाए रखता है।", "RAG Powered": "आर. ए. जी. संचालित", "Classical Ayurvedic Medicine (Shastriya)": "शास्त्रीय आयुर्वेदिक चिकित्सा (शास्त्रीय)", "Determines Rule 158B PPAM evidence protocols, Schedule T GMP conditions, and stability study mandates.": "नियम 158बी पी. पी. ए. एम. साक्ष्य प्रोटोकॉल, अनुसूची टी. जी. एम. पी. स्थितियाँ और स्थिरता अध्ययन आदेश निर्धारित करता है।", "Save Consent Preferences": "सहमति वरीयताएँ सहेजें", "🌿 Ashwagandha Extract + Piperine Bio-Enhancer": "अश्वगंधा एक्सट्रैक्ट + पाइपरिन बायो-एनहांसर", "Check access and benefit sharing requirements under Biological Diversity Act.": "जैविक विविधता अधिनियम के तहत पहुंच और लाभ साझा करने की आवश्यकताओं की जांच करें।", "Local Community Consent & Nagoya Compliance": "स्थानीय समुदाय की सहमति और नागोया अनुपालन", "Urgent Patent Filing (24h SLA)": "तत्काल पेटेंट फाइलिंग (24 घंटे एस. एल. ए.)", "Contact Preference": "संपर्क वरीयता", "National Biodiversity Authority": "राष्ट्रीय जैव विविधता प्राधिकरण", "Confidence Indicator": "विश्वास सूचक", "Search": "खोजें", "Evaluation Suite Methodology & Benchmarking Framework": "मूल्यांकन सूट कार्यप्रणाली और बेंचमार्किंग फ्रेमवर्क", "Granular Consent & Privacy Preferences": "बारीक सहमति और गोपनीयता वरीयताएँ", "Status:": "स्थितिः", "Refresh": "ताज़ा करें", "Statutory Examination Notice (12h)": "सांविधिक परीक्षा सूचना (12 बजे)", "India Only": "केवल भारत", "Low (Purified Fraction)": "निम्न (शुद्ध अंश)", "8. Synthesizer": "8. संश्लेषक", "TKDL & Prior-Art Search Engine": "टीकेडीएल और पूर्व-कला खोज इंजन", "All Repositories (12)": "सभी भंडार (12)", "Speech & Multilingual Preference Retention": "भाषण और बहुभाषी वरीयता प्रतिधारण", "Authority:": "प्राधिकारः", "Live Orchestration Telemetry": "लाइव ऑर्केस्ट्रेशन टेलीमेट्री", "Active Statutory Scope": "सक्रिय सांविधिक दायरा", "Authoritative Statutory & Treatise Citations": "आधिकारिक वैधानिक और ट्रीटीज साइटेशन", "Citation Correctness": "उद्धरण शुद्धता", "e.g. Traditional Sneha Kalpana vs Supercritical CO2 Extraction": "उदा. पारंपरिक स्नेहा कल्पना बनाम अति महत्वपूर्ण कार्बन डाइऑक्साइड निष्कर्षण", "Novel Ayurvedic Drug Delivery System (Phytosome/Nano)": "नवीन आयुर्वेदिक औषधि वितरण प्रणाली (फाइटोसोम/नैनो)", "Strict NBA Prior Approval Required (Section 3 BDA)": "सख्त एन. बी. ए. पूर्व अनुमोदन आवश्यक (धारा 3 बी. डी. ए.)", "Standardized hydro-alcoholic co-extraction followed by lipid infusion in medicated cow ghee at 65°C for 8 hours": "मानकीकृत हाइड्रो-अल्कोहलिक सह-निष्कर्षण के बाद 8 घंटे के लिए 65 डिग्री सेल्सियस पर औषधीय गाय के घी में लिपिड जलसेक", "Botany & Classical Formulations": "वनस्पति विज्ञान और शास्त्रीय सूत्रीकरण", "Quick Presets:": "त्वरित प्रीसेटः", "Cross-validates every statute clause, gazette number, and court precedent against authoritative corpus hashes.": "आधिकारिक कोष हैश के खिलाफ प्रत्येक क़ानून खंड, राजपत्र संख्या और अदालत के पूर्ववर्ती को क्रॉस-वैलिडेट करता है।", "All Statuses": "सभी स्टेटसेस", "ABS Compliance": "एबीएस अनुपालन", "ABS & Biodiversity": "एबीएस और जैव विविधता", "Explicit Notice & Consent": "स्पष्ट सूचना और सहमति", "High (Section 3(p) Bar)": "उच्च (धारा 3 (पी) बार)", "Sushruta Samhita": "सुश्रुत संहिता", "No (Standard Cultivated Supply)": "नं. (मानक संवर्धित आपूर्ति)", "Vata-vyadhi (Joints)": "वात-व्यधि (जोड़)", "Settings saved locally to browser.": "ब्राउज़र में स्थानीय रूप से सेटिंग्स को सहेजा जाता है।", "Official, version-tracked legal statutes, AYUSH pharmacopoeial monographs, TKDL taxonomy specifications, and multilateral treaties.": "आधिकारिक, संस्करण-ट्रैक किए गए कानूनी क़ानून, आयुष फार्माकोपियल मोनोग्राफ, टीकेडीएल वर्गीकरण विनिर्देश और बहुपक्षीय संधियाँ।", "📜 Classical Chyawanprash Modern Blister Pack": "शास्त्रीय च्यवनप्राश आधुनिक ब्लिस्टर पैक", "Data Minimization": "डेटा का न्यूनतमकरण", "Mandatory Citation & Safe Abstention Policy (Zero-Hallucination Law)": "अनिवार्य उद्धरण और सुरक्षित त्याग नीति (शून्य-मतिभ्रम कानून)", "Formulation data and research queries are processed exclusively for real-time intellectual property and regulatory classification simulation.": "प्रलेखन डेटा और अनुसंधान प्रश्नों को विशेष रूप से वास्तविक समय की बौद्धिक संपदा और नियामक वर्गीकरण अनुकरण के लिए संसाधित किया जाता है।", "Click on any intellectual property card below to view detailed statutory requirements, filing pathways, relevant legal authorities, and citations.": "विस्तृत वैधानिक आवश्यकताओं, फाइलिंग मार्गों, प्रासंगिक कानूनी प्राधिकरणों और उद्धरणों को देखने के लिए नीचे दिए गए किसी भी बौद्धिक संपदा कार्ड पर क्लिक करें।", "Form III Clearance for Patent Protection": "पेटेंट संरक्षण के लिए फॉर्म III मंजूरी", "Classified as Classical Medicine under Schedule 1 treatises. Eligible for Form 25D license without human clinical trials. Unpatentable as traditional knowledge.": "अनुसूची 1 ग्रंथों के तहत शास्त्रीय चिकित्सा के रूप में वर्गीकृत। मानव नैदानिक परीक्षणों के बिना फॉर्म 25डी लाइसेंस के लिए पात्र। पारंपरिक ज्ञान के रूप में अप्राप्य।", "Statutory Boundary Mapping": "वैधानिक सीमा मानचित्रण", "Innovation / Formulation": "नवान्वेषण/निर्माण", "4. IP Agent": "4. आई. पी. एजेंट", "Isolated to current origin": "वर्तमान मूल से पृथक", "Domain:": "डोमेनः", "IP-SAKTI Sahayak": "आई. पी.-शक्ति सहायक", "Priority: Urgent": "प्राथमिकताः तत्काल", "2. Jurisdiction Agent": "2. क्षेत्राधिकार अभिकर्ता", "1. Intake & Classification": "1. सेवन और वर्गीकरण", "All Authorities": "सभी प्राधिकरण", "Knowledge Graph": "ज्ञान ग्राफ", "Mandatory prior NBA approval under Section 6 before any patent grant.": "किसी भी पेटेंट अनुदान से पहले धारा 6 के तहत अनिवार्य पूर्व एनबीए अनुमोदन।", "Node Title": "नोड शीर्षक", "Low (Novel Characterization)": "निम्न (नोवेल कैरेक्टराइजेशन)", "Accredited AYUSH IP Facilitators": "मान्यता प्राप्त आयुष आईपी सुविधा प्रदाता", "Nil (Exempt for non-commercial research/practitioners)": "शून्य (गैर-वाणिज्यिक अनुसंधान/व्यवसायियों के लिए छूट)", "Ministry of AYUSH": "आयुष मंत्रालय", "Confidential Video Consultation": "गोपनीय वीडियो परामर्श", "Filter by statute, authority, keyword, gazette number...": "कानून, प्राधिकरण, मुख्य शब्द, राजपत्र संख्या .......... द्वारा फ़िल्टर करें", "Within 24h SLA": "24 घंटे के भीतर एस. एल. ए", "Ancient Wisdom Meets Modern Intelligence": "प्राचीन ज्ञान आधुनिक बुद्धि से मिलता है", "Patentable Composition of Matter & Extraction Method": "पदार्थ और निष्कर्षण विधि की पेटेंट योग्य संरचना", "Select a Knowledge Node": "नॉलेज नोड चुनें", "No Aadhaar numbers, PAN, biometrics, or personal identifiers are stored. Only session operational flags reside in browser localStorage.": "कोई आधार संख्या, पैन, बायोमेट्रिक्स या व्यक्तिगत पहचानकर्ता संग्रहीत नहीं किए जाते हैं। ब्राउज़र लोकल स्टोरेज में केवल सत्र प्रचालन फ्लैग रहते हैं।", "Agentic Multi-Source Orchestration": "एजेंटिक मल्टी-सोर्स ऑर्केस्ट्रेशन", "Search test cases by query, expected statute, or keyword...": "क्वेरी, अपेक्षित क़ानून, या मुख्य शब्द .......... द्वारा परीक्षण मामलों को खोजें", "Bhaishajya Ratnavali": "भैषज्य रत्नवली", "This screen provides a deterministic simulation of multi-agent workflows. In production, each agent executes specialized RAG embeddings over classical Ayurvedic corpora, patent gazettes, and national biodiversity registries.": "यह स्क्रीन बहु-एजेंट कार्यप्रवाह का एक निर्धारक अनुकरण प्रदान करता है। उत्पादन में, प्रत्येक एजेंट शास्त्रीय आयुर्वेदिक निगम, पेटेंट राजपत्र और राष्ट्रीय जैव विविधता रजिस्ट्रियों पर विशेष आरएजी एम्बेडिंग निष्पादित करता है।", "Nano-Emulsified Triphala Gut Delivery System": "नैनो-पायसीकृत त्रिफला आंत वितरण प्रणाली", "Mandatory Compliance Checklist:": "अनिवार्य अनुपालन चेकलिस्टः", "Confidence reflects prototype evidence alignment and does not represent legal certainty.": "आत्मविश्वास प्रोटोटाइप साक्ष्य संरेखण को दर्शाता है और कानूनी निश्चितता का प्रतिनिधित्व नहीं करता है।", "Shotha (Anti-inflammatory)": "शोथा (एंटी-इंफ्लेमेटरी)", "e.g. Withania somnifera, Bacopa monnieri, Piper longum": "उदा. विथानिया सोम्निफेरा, बेकोपा मोन्निएरी, पाइपर लोंगम", "Intellectual Property": "बौद्धिक संपदा", "Showing 8 benchmark test cases": "8 मानक परीक्षण मामले दिखा रहे हैं", "Submit Form I with verified botanical sourcing details prior to manufacturing.": "निर्माण से पहले सत्यापित वनस्पति स्रोत विवरण के साथ प्रपत्र I जमा करें।", "12+": "12 +", "Allows formulation inputs and recent queries to persist in your browser for workflow continuity.": "वर्कफ़्लो निरंतरता के लिए आपके ब्राउज़र में फॉर्मूलेशन इनपुट और हाल के प्रश्नों को जारी रखने की अनुमति देता है।", "Bhavaprakasha Nighantu": "भवप्रकाश निघंटु", "Safe Abstain": "सुरक्षित रहें", "Mandatory Filing": "अनिवार्य फाइलिंग", "Export Audit Log (.txt)": "लेखापरीक्षा लॉग (. tXT) का निर्यात करें", "Low-Medium (Known Herb, Novel Matrix)": "निम्न-मध्यम (ज्ञात जड़ी बूटी, नोवेल मैट्रिक्स)", "Ask about Section 3(p), ABS, TKDL, patentability or trademarks...": "धारा 3 (पी), एबीएस, टीकेडीएल, पेटेंट योग्यता या ट्रेडमार्क के बारे में पूछें", "Safe Abstention": "सुरक्षित अनुपस्थिति", "Indic Multilingual Tests": "भारतीय बहुभाषी परीक्षण", "View Facilitator Notes": "सुविधाकर्ता टिप्पणियाँ देखें", "Drug & Cosmetics Regulations": "औषधि और प्रसाधन सामग्री विनियम", "e.g. CSIR-CDRI / Ayurveda MSME": "उदाहरण के लिए सी. एस. आई. आर.-सी. डी. आर. आई./आयुर्वेद एमएसएमई", "Search TKDL": "टीकेडीएल खोजें", "User Control & Right to Erasure": "उपयोगकर्ता नियंत्रण और हटाने का अधिकार", "Zero-hallucination citations": "शून्य-मतिभ्रम उद्धरण", "Illustrative Institutional Compliance Framework": "सचित्र संस्थागत अनुपालन ढांचा", "SK": "एसके", "Classical Treatise": "शास्त्रीय ग्रंथ", "Standardized Phytopharmaceutical Drug Extract": "मानकीकृत फाइटोफार्मास्युटिकल ड्रग एक्सट्रैक्ट", "e.g. Withania somnifera (Ashwagandha)": "उदा. विथानिया सोम्निफेरा (अश्वगंधा)", "Refuses unsupported claims": "असमर्थित दावों का खंडन करता है", "TKDL / Prior Art": "टीकेडीएल/पूर्व कला", "Action": "कार्रवाई", "Clear Local Session Data": "स्थानीय सत्र डेटा साफ़ करें", "Section 3(p) TK Barriers": "धारा 3 (पी) टीके बाधाएं", "Active (Revocable)": "सक्रिय (पुनरावर्तनीय)", "Benchmark metrics reflect standardized evaluation test cases against the Indian Patents Act, Drugs & Cosmetics Rules, and TKRC database.": "बेंचमार्क मेट्रिक्स भारतीय पेटेंट अधिनियम, औषधि और सौंदर्य प्रसाधन नियम और टीकेआरसी डेटाबेस के खिलाफ मानकीकृत मूल्यांकन परीक्षण मामलों को दर्शाते हैं।", "Comprehensive Legal Architecture": "व्यापक कानूनी संरचना", "Ready to orchestrate": "आयोजन के लिए तैयार", "Intent & Entity Decomposition": "अभिप्रेरणा और इकाई अपघटन", "Accuracy": "सटीकता", "🌐 International (PCT / USPTO / EPO)": "अंतर्राष्ट्रीय (पी. सी. टी./यू. एस. पी. टी. ओ./ई. पी. ओ.)", "Category": "श्रेणी", "Statutory ABS Pathway": "वैधानिक एबीएस मार्ग", "Mobile / Contact Phone": "मोबाइल/संपर्क फोन", "Data Privacy Architecture": "डेटा गोपनीयता वास्तुकला", "Knowledge Repositories": "ज्ञान भंडार", "Imported from Outside India": "भारत के बाहर से आयातित", "Submit Escalation Request": "वृद्धि अनुरोध जमा करें", "1,248+": "1,248 +", "Current": "वर्तमान", "Process patent only (Requires synergistic proof)": "केवल प्रक्रिया पेटेंट (सहक्रियात्मक प्रमाण की आवश्यकता होती है)", "Run Benchmark Suite": "बेंचमार्क सुइट चलाएँ", "Simulates autonomous coordination across 8 specialized AI agents decomposing complex Ayurvedic formulations, testing statutory patent eligibility, calculating ABS levies, and validating legal citations.": "जटिल आयुर्वेदिक फॉर्मूलेशन को विघटित करने वाले 8 विशेष एआई एजेंटों में स्वायत्त समन्वय का अनुकरण करता है, वैधानिक पेटेंट पात्रता का परीक्षण करता है, एबीएस शुल्क की गणना करता है, और कानूनी उद्धरणों को मान्य करता है।", "All Jurisdictions": "सभी क्षेत्राधिकार", "Assigned: Senior IP Facilitator Queue": "नियुक्तः वरिष्ठ आई. पी. सुविधा प्रदाता कतार", "High (Prior Art in Treatises)": "उच्च (ग्रंथों में पूर्व कला)", "Quick Insights": "त्वरित अंतर्दृष्टि", "This prototype is engineered following the structural principles of the Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023). It demonstrates architectural alignment including purpose limitation, consent, and user-initiated erasure. This interface does not claim formal regulatory certification.": "यह प्रोटोटाइप डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 (2023 का अधिनियम संख्या 22) के संरचनात्मक सिद्धांतों का पालन करते हुए तैयार किया गया है। यह उद्देश्य सीमा, सहमति और उपयोगकर्ता द्वारा शुरू किए गए उन्मूलन सहित वास्तुशिल्प संरेखण को प्रदर्शित करता है। यह इंटरफेस औपचारिक नियामक प्रमाणन का दावा नहीं करता है।", "Enter Formulation Query for Multi-Agent Orchestration": "मल्टी-एजेंट ऑर्केस्ट्रेशन के लिए सूत्रीकरण प्रश्न दर्ज करें", "Recent Activity": "हाल की गतिविधि", "Verified legal provisions, official gazette notifications, classical shlokas, and international treaties backing all IP-SAKTI Sahayak advisory outputs.": "सत्यापित कानूनी प्रावधान, आधिकारिक राजपत्र अधिसूचनाएँ, शास्त्रीय श्लोक, और सभी आई. पी.-शक्ति सहायक सलाहकार आउटपुट का समर्थन करने वाली अंतर्राष्ट्रीय संधियाँ।", "8 Agents Ready • Multi-Source Pipeline": "8 एजेंट तैयार-बहु-स्रोत पाइपलाइन", "Submitted": "प्रस्तुत किया गया", "ABS & Biodiversity Act": "एबीएस और जैव विविधता अधिनियम", "3. Senior Patent Attorney Review": "3. वरिष्ठ पेटेंट वकील की समीक्षा"}, "mr": {"Ayurvedic Formulation Classifier": "आयुर्वेदिक सूत्रीकरण वर्गीकरण", "Patentability & Regulatory Pre-Check": "पेटंटक्षमता आणि नियामक पूर्व-तपासणी", "Evaluate your formulation composition, traditional knowledge exposure, Section 3(p) non-patentability risk, and regulatory licensing pathway under Rule 158B.": "नियम 158बी अंतर्गत तुमच्या सूत्रीकरणाची रचना, पारंपरिक ज्ञानाचा परिचय, कलम 3 (पी) पेटंट नसण्याची जोखीम आणि नियामक परवाना मार्गाचे मूल्यांकन करा.", "This is an informational prototype assessment and not legal advice. Formal novelty and freedom-to-operate require certified patent agent drafting.": "हे एक माहितीपूर्ण नमुना मूल्यांकन आहे आणि कायदेशीर सल्ला नाही. औपचारिक नाविन्य आणि काम करण्याच्या स्वातंत्र्यासाठी प्रमाणित पेटंट एजंट मसुद्याची आवश्यकता असते.", "Formulation Parameters": "सूत्रीकरण मापदंड", "Formulation Name / Code": "रचनेचे नाव/कोड", "Botanical Ingredients (Botanical Names & Proportions)": "वनस्पतीजन्य घटक (वनस्पतीशास्त्रीय नावे आणि प्रमाण)", "Plant / Biological Source Origin": "वनस्पती/जैविक स्रोत मूळ", "Preparation Method": "तयारीची पद्धत", "Intended Therapeutic / Health Use": "उद्देशित उपचारात्मक/आरोग्यविषयक वापर", "Documented in Classical Ayurvedic Texts?": "शास्त्रीय आयुर्वेदिक ग्रंथांमध्ये दस्तऐवजीकरण केलेले?", "Yes (Charaka, Sushruta, Astanga Hridaya, etc.)": "होय (चरक, सुश्रुत, अष्टांग हृदय इ.)", "No (Entirely Novel Formulation)": "नाही (पूर्णपणे नवीन रचना)", "Novelty & Inventive Step Claim": "नाविन्यपूर्ण आणि संशोधनात्मक पावलांचा दावा", "Modified Synergy / Enhanced Bioavailability (Bio-enhancer ratio)": "सुधारित समन्वय/वर्धित जैव उपलब्धता (जैव-वर्धक गुणोत्तर)", "Classical Traditional Formulation (Exact classical recipe)": "शास्त्रीय पारंपरिक रचना (अचूक शास्त्रीय पाककृती)", "Novel Isolated Active Fraction / Phytopharmaceutical": "नाविन्यपूर्ण विलग सक्रिय अपूर्णांक/फायटोफार्मास्युटिकल", "Novel Drug Delivery System (Nano-liposomal, Phytosome)": "नवीन औषध वितरण प्रणाली (नॅनो-लिपोसोमल, फायटोसोम)", "Analyze Formulation": "रचनेचे विश्लेषण करा", "Traditional Formulation with Synergistic Bio-enhancement": "सहक्रियात्मक जैव-वर्धनासह पारंपरिक सूत्रीकरण", "Ashwagandha-Brahmi Neuro-Cognitive Extract": "अश्वगंधा-ब्राह्मी न्यूरो-संज्ञानात्मक अर्क", "Assessed against Indian Patents Act (Sec 3(p)), Rule 158B Drugs & Cosmetics Act, and Biological Diversity Act. Origin: Madhya Pradesh": "भारतीय पेटंट कायदा (कलम 3 (पी)), नियम 158 बी ड्रग्स अँड कॉस्मेटिक्स कायदा आणि जैविक विविधता कायद्याविरूद्ध मूल्यांकन. मूळः मध्य प्रदेश", "Traditional Knowledge Risk": "पारंपरिक ज्ञानाची जोखीम", "High (Component Treatises Found)": "उच्च (घटक ग्रंथ सापडले)", "Prior-Art Risk": "कलापूर्व जोखीम", "Medium (Novel Ratio/Bioavailability)": "मध्यम (नवीन गुणोत्तर/जैवउपलब्धता)", "Potential IP Route": "संभाव्य आयपी मार्ग", "Process patent & synergistic composition (Requires CI data)": "प्रक्रिया पेटंट आणि सहक्रियात्मक रचना (सी. आय. डेटा आवश्यक)", "Analysis Confidence": "विश्वासाचे विश्लेषण", "Regulatory Considerations & Licensing:": "नियामक विचार आणि परवानाः", "Requires proving supra-additive therapeutic index over individual ingredients to overcome Section 3(e) & 3(p). Biological Diversity Act (Form I or III) clearance is mandatory.": "कलम 3 (ई) आणि 3 (पी) वर मात करण्यासाठी वैयक्तिक घटकांवर अति-मिश्रित उपचारात्मक निर्देशांक सिद्ध करणे आवश्यक आहे. जैविक विविधता कायदा (फॉर्म I किंवा III) मंजुरी अनिवार्य आहे.", "Export Assessment Summary": "निर्यात मूल्यांकनाचा सारांश", "Escalate to Expert": "तज्ज्ञाकडे वाढवा", "Access & Benefit Sharing (ABS) Helper": "प्रवेश आणि लाभ सामायिकरण (ए. बी. एस.) सहाय्यक", "Biological Diversity Act, 2002": "जैविक विविधता कायदा, 2002", "Determine mandatory compliance under the National Biodiversity Authority (NBA), State Biodiversity Boards (SBB), and the Nagoya Protocol before commercializing Indian medicinal flora.": "भारतीय औषधी वनस्पतींचे व्यापारीकरण करण्यापूर्वी राष्ट्रीय जैवविविधता प्राधिकरण (एन. बी. ए.), राज्य जैवविविधता मंडळे (एस. बी. बी.) आणि नागोया प्रोटोकॉल अंतर्गत अनिवार्य अनुपालन निश्चित करा.", "Statutory Notice: Section 7 requires prior intimation to State Biodiversity Boards. Foreign entities must obtain Section 3 NBA approval prior to accessing Indian biological resources.": "वैधानिक सूचनाः कलम 7 मध्ये राज्य जैवविविधता मंडळांना पूर्वसूचना देणे आवश्यक आहे. भारतीय जैविक संसाधनांमध्ये प्रवेश करण्यापूर्वी परदेशी संस्थांनी एन. बी. ए. च्या कलम 3 ची मंजुरी घेणे आवश्यक आहे.", "Resource Access Details": "संसाधन प्रवेश तपशील", "Biological Resource (Botanical Name)": "जैविक संसाधन (वनस्पतीशास्त्रीय नाव)", "Sourcing State / Territory": "स्रोत राज्य/प्रदेश", "Purpose of Access": "प्रवेशाचा उद्देश", "Commercial Utilization": "व्यावसायिक वापर", "Academic / Non-commercial Research": "शैक्षणिक/बिगर-व्यावसायिक संशोधन", "Applicant Entity Legal Status": "अर्जदार संस्थेची कायदेशीर स्थिती", "Indian Incorporated Entity (Section 7, BDA)": "भारतीय निगमित संस्था (कलम 7, बीडीए)", "Foreign Entity / NRI / Non-Indian Shareholding (Section 3, BDA)": "परदेशी संस्था/अनिवासी भारतीय/बिगर भारतीय भागधारक (कलम 3, बी. डी. ए.)", "Individual Indian Citizen / Vaidya / Local Practitioner": "वैयक्तिक भारतीय नागरिक/वैद्य/स्थानिक व्यावसायिक", "Traditional Knowledge Involved?": "पारंपरिक ज्ञानाचा समावेश आहे का?", "Yes (Tribal / Community TK)": "होय (आदिवासी/समुदाय टीके)", "No (Independent Botanical Sourcing)": "नाही (स्वतंत्र वनस्पतीशास्त्रीय स्रोत)", "Check ABS Requirements": "ए. बी. एस. आवश्यकता तपासा", "ABS Assessment Result": "एबीएस मूल्यांकन निकाल", "ABS Approval Mandatory (Section 7 BDA)": "एबीएस मंजुरी अनिवार्य (कलम 7 बीडीए)", "Applicable Authority": "लागू होणारे प्राधिकरण", "Filing Requirement": "दाखल करण्याची आवश्यकता", "Form I (Prior Intimation to SBB)": "फॉर्म I (एस. बी. बी. ला पूर्वसूचना)", "Benefit Sharing Levy": "कर वाटून घेण्याचा लाभ", "Statutory Compliance Checklist": "वैधानिक अनुपालन तपासणी यादी", "Multilingual AI Research Assistant": "बहुभाषिक ए. आय. संशोधन सहाय्यक", "RAG-Powered Co-Pilot": "आरएजी-संचालित सह-पायलट", "Ask questions about Ayurvedic intellectual property, Section 3(p) non-patentability barriers, Access and Benefit Sharing (ABS) under the Biological Diversity Act, and TKDL prior art. Every response cites verified legal authorities.": "आयुर्वेदिक बौद्धिक संपदा, कलम 3 (पी) पेटंट न मिळणारे अडथळे, जैविक विविधता कायद्यांतर्गत प्रवेश आणि लाभ सामायिकरण (ए. बी. एस.) आणि टी. के. डी. एल. पूर्व कलाबद्दल प्रश्न विचारा. प्रत्येक प्रतिसाद प्रमाणित कायदेशीर अधिकाऱ्यांचा हवाला देतो.", "Clear Conversation": "स्पष्ट संभाषण", "Simulated Prototype Guidance: AI responses provide educational synthesis from indexed statutory frameworks and do not constitute formal legal counsel.": "सिम्युलेटेड प्रोटोटाइप मार्गदर्शनः ए. आय. प्रतिसाद अनुक्रमित वैधानिक चौकटीतून शैक्षणिक संश्लेषण प्रदान करतात आणि औपचारिक कायदेशीर सल्लागाराची रचना करत नाहीत.", "Simulated RAG Retrieval Pipeline": "सिम्युलेटेड आर. ए. जी. पुनर्प्राप्ती पाइपलाइन", "1. Query Analysis": "1. चौकशीचे विश्लेषण", "2. Jurisdiction Filter": "2. अधिकारक्षेत्र फिल्टर", "3. Knowledge Retrieval": "3. ज्ञान पुनर्प्राप्ती", "4. Source Ranking": "4. स्रोत क्रमवारी", "5. Answer Generation": "5. उत्तर निर्मिती", "6. Citation Verification": "6. संदर्भ पडताळणी", "What IP protection is available for an Ayurvedic formulation?": "आयुर्वेदिक सूत्रीकरणासाठी कोणते आय. पी. संरक्षण उपलब्ध आहे?", "Can this traditional formulation be patented in India?": "या पारंपरिक फॉर्म्युलेशनचे भारतात पेटंट घेता येईल का?", "What ABS requirements apply to this biological resource?": "या जैविक संसाधनांना कोणत्या ए. बी. एस. आवश्यकता लागू होतात?", "Find prior-art references for Ashwagandha formulations.": "अश्वगंधा फॉर्म्युलेशनसाठी पूर्व-कला संदर्भ शोधा.", "Can traditional knowledge alone be patented?": "केवळ पारंपरिक ज्ञानाचे पेटंट घेतले जाऊ शकते का?", "Active Statutory Framework": "सक्रिय वैधानिक चौकट", "Selected Jurisdiction Model": "निवडलेले क्षेत्राधिकार मॉडेल", "Simulated Confidence Meter": "सिम्युलेटेड आत्मविश्वास मीटर", "Overall Evidence Alignment": "एकूण पुरावा संरेखन", "Send Message": "संदेश पाठवा", "Type your query...": "तुमची चौकशी .......... टाइप करा", "Ask IP-SAKTI": "आय. पी.-शक्तीस विचारा", "Explore specialized guidance across all 8 branches of intellectual property and biological regulation. Toggle between India and International jurisdictions above to compare statutory pathways in real-time.": "बौद्धिक संपदा आणि जैविक नियमनाच्या सर्व 8 शाखांमध्ये विशेष मार्गदर्शनाचा शोध घ्या. वास्तविक वेळेत वैधानिक मार्गांची तुलना करण्यासाठी वरील भारत आणि आंतरराष्ट्रीय अधिकारक्षेत्रांमध्ये बदल करा.", "Ticket Subject": "तिकीट विषय", "Statutory Notice: Prototype / DPDP-Aligned Design": "वैधानिक सूचनाः प्रोटोटाइप/डी. पी. डी. पी.-संरेखित रचना", "Statute / Legal Instrument": "कायदा/कायदेशीर साधन", "AI Assistant": "एआय सहाय्यक", "Audit Details": "लेखापरीक्षणाचा तपशील", "Ticket ID": "तिकीट ओळखपत्र", "Target Jurisdiction": "लक्ष्यित अधिकारक्षेत्र", "Superseded": "वरचढ", "High (TKDL Indexed)": "उच्च (टीकेडीएल अनुक्रमित)", "Total Sources": "एकूण स्रोत", "Privacy & Security": "गोपनीयता आणि सुरक्षा", "Prior Intimation to SBB (Form I)": "एस. बी. बी. ला पूर्वसूचना (फॉर्म I)", "Escalate to Facilitator": "फॅसिलिटेटरपर्यंत वाढवा", "Submit to Facilitator Queue": "फॅसिलिटेटर रांगेला सादर करा", "Waiting": "वाट पाहत आहे", "India + International": "भारत + आंतरराष्ट्रीय", "Click node to inspect • Drag node to reposition • Scroll or pinch to zoom": "तपासणी करण्यासाठी नोडवर क्लिक करा; पुनर्स्थापनासाठी नोड ओढून घ्या; झूम करण्यासाठी स्क्रोल करा किंवा चिमटा मारा", "Charaka Samhita": "चरक संहिता", "Shri K. S. Ramanathan": "श्री. के. एस. रामनाथन", "Version Audited": "आवृत्तीचे लेखापरीक्षण केले", "2. TKDL & Prior-Art Audit": "2. टी. के. डी. एल. आणि पूर्व कला लेखापरीक्षण", "Visual ontology mapping Ayurvedic botanicals, traditional knowledge treatises, statutory patent barriers, ABS compliance authorities, and international IP treaties.": "व्हिज्युअल ऑन्टोलॉजी मॅपिंग आयुर्वेदिक वनस्पतिशास्त्र, पारंपारिक ज्ञान ग्रंथ, वैधानिक पेटंट अडथळे, एबीएस अनुपालन प्राधिकरण आणि आंतरराष्ट्रीय आयपी करार.", "Showing 10 authoritative citations": "10 अधिकृत उल्लेख दाखवले जात आहेत", "Verified": "पडताळणी केली", "e.g. Standardized Withanolide Oral Lipid Delivery System": "उदा. प्रमाणित विथानोलाइड ओरल लिपिड वितरण प्रणाली", "Ticket: IPS-2026-0481": "तिकिटः आय. पी. एस.-2026-0481", "All Entity Categories": "सर्व घटकांच्या श्रेणी", "Query in AI Assistant →": "ए. आय. सहाय्यकामध्ये प्रश्न", "🧪 Nano-Emulsified Triphala in US & EU": "यू. एस. आणि ई. यू. मधील नॅनो-इमल्सिफाइड त्रिफला", "All Treatises": "सर्व ग्रंथ", "e.g. Cognitive enhancement and neuro-protection": "उदा. संज्ञानात्मक वाढ आणि न्यूरो-संरक्षण", "Run ABS Assessment": "ए. बी. एस. मूल्यांकन चालवा", "Timestamp": "टाइमस्टॅम्प", "All Domains": "सर्व क्षेत्र", "Classify your formulation with AI assistance into classical or novel IP pathways.": "ए. आय. च्या मदतीने तुमच्या रचनेचे शास्त्रीय किंवा नवीन आय. पी. मार्गांमध्ये वर्गीकरण करा.", "In Progress": "प्रगतीपथावर", "SLA Remaining: 18h 42m": "एस. एल. ए. उर्वरितः १८ तास ४२ मी", "Real-Time Session Audit Trail": "रिअल-टाइम सत्र लेखापरीक्षा ट्रेल", "Languages Supported": "समर्थित भाषा", "AYUSH Licensing & GMP": "आयुष परवाना आणि जीएमपी", "Directs your formulation dossier to the Government Facilitator Queue.": "तुमच्या सूत्रीकरणाच्या दस्तऐवजाला सरकारी सुविधा पुरवणाऱ्या रांगेकडे निर्देशित करते.", "Biodiversity Management Committee (BMC) Consultation": "जैवविविधता व्यवस्थापन समिती (बी. एम. सी.) सल्लामसलत", "Find node (e.g. Ashwagandha, NBA, Patent...)": "नोड शोधा (उदा. अश्वगंधा, एन. बी. ए., पेटंट ..........)", "Evaluated under the Central Drugs Standard Control Organization (CDSCO) Phytopharmaceutical Guidelines (2015). Requires Phase I-III clinical trial data and safety pharmacology.": "केंद्रीय औषध मानक नियंत्रण संघटना (सी. डी. एस. सी. ओ.) फायटोफार्मास्युटिकल मार्गदर्शक तत्त्वे (2015) अंतर्गत मूल्यांकन. पहिल्या ते तिसऱ्या टप्प्यातील चिकित्सालयीन चाचणीची माहिती आणि सुरक्षितता औषधशास्त्र आवश्यक आहे.", "Priority": "प्राधान्यक्रम", "Extracts botanical taxa, therapeutic indications, novelty statements, and processing methods.": "वनस्पतिशास्त्रीय वर्गीकरण, उपचारात्मक संकेत, नाविन्यपूर्ण विधाने आणि प्रक्रिया पद्धती काढते.", "Kerala (State SBB)": "केरळ (राज्य एस. बी. बी.)", "Deterministic logging": "निर्धारक लॉगिंग", "Scientific Pharmacokinetics": "वैज्ञानिक फार्माकोकायनेटिक्स", "7 Indic languages parity": "7 भारतीय भाषांची समानता", "🇮🇳 India Statutory Framework": "भारत वैधानिक चौकट", "Retd. Joint Controller of Patents & Designs (CGPDTM)": "निवृत्त झाले. पेटंट आणि डिझाईन्सचे संयुक्त नियंत्रक (सी. जी. पी. डी. टी. एम.)", "Review Required": "पुनरावलोकन आवश्यक", "Governing Statutes & Authorities": "प्रशासकीय कायदे आणि प्राधिकरणे", "Ask questions and get source-cited guidance on IP, TK and AYUSH compliance.": "प्रश्न विचारा आणि आय. पी., टी. के. आणि आयुष अनुपालनाबाबत स्रोत-उद्धृत मार्गदर्शन मिळवा.", "Classify Formulation": "रचनेचे वर्गीकरण करा", "Search formulation, plant, traditional use or preparation (e.g. Ashwagandha, Rasayana, Ghrita)...": "शोध रचना, वनस्पती, पारंपारिक वापर किंवा तयारी (उदा. अश्वगंधा, रसायन, घृता) ..........", "Consensus & Strategy Advisory": "एकमत आणि धोरणात्मक सल्ला", "Privacy, Audit & DPDP-Aligned Governance": "गोपनीयता, लेखापरीक्षण आणि डी. पी. डी. पी.-संलग्न प्रशासन", "Up to 2.0% - 5.0% purchase price or 0.5% turnover": "2.0% पर्यंत-5.0% खरेदी किंमत किंवा 0.5% उलाढाल", "Version Tracking & Legislative Integrity Assurance": "आवृत्ती मागोवा आणि कायदेशीर एकात्मता आश्वासन", "Domain": "डोमेन", "This knowledge corpus utilizes deterministic SHA-256 cryptographic verification hashes to ensure source fidelity against official Gazettes of India, WIPO treaties, and Ministry of AYUSH regulatory circulars. It provides informational baseline guidance only.": "भारताच्या अधिकृत राजपत्रांविरुद्ध, डब्ल्यू. आय. पी. ओ. करारांविरुद्ध आणि आयुष मंत्रालयाच्या नियामक परिपत्रकांविरुद्ध स्रोत निष्ठा सुनिश्चित करण्यासाठी हा ज्ञान निधी निर्धारक एस. एच. ए.-256 क्रिप्टोग्राफिक पडताळणी हॅशचा वापर करतो. हे केवळ माहितीपूर्ण आधारभूत मार्गदर्शन प्रदान करते.", "Remembers your chosen language (7 Indic languages) and jurisdiction across page navigation.": "तुमची निवडलेली भाषा (7 भारतीय भाषा) आणि पृष्ठ नेव्हिगेशनमधील अधिकारक्षेत्र लक्षात ठेवते.", "Human Expert Facilitation": "मानवी तज्ञ सुविधा", "Prior Art in Treatises": "ग्रंथांमधील पूर्वीची कला", "International Only": "केवळ आंतरराष्ट्रीय", "Statutory Clauses": "वैधानिक कलमे", "3. TK Agent": "3. टीके एजंट", "Traditional Knowledge & TKDL": "पारंपरिक ज्ञान आणि टीकेडीएल", "Ayurvedic Entity / Statute": "आयुर्वेदिक संस्था/कायदा", "Tamper-Evident Audit Log": "टॅम्पर-इव्हिडेंट लेखापरीक्षा लॉग", "Patentability & Section 3 Barriers": "पेटंटक्षमता आणि कलम 3 अडथळे", "Tamper-Evident Auditability": "टॅम्पर-इव्हिडेंट लेखापरीक्षणक्षमता", "Showing 12 authoritative sources": "12 अधिकृत स्रोत दाखवले जात आहेत", "e.g. Dr. Anandita Roy": "उदा. डॉ. आनंदिता रॉय", "🌍 Dual (India + Global Filings)": "दुहेरी (भारत + जागतिक दाखल)", "0 Events": "0 घटना", "Jurisdiction": "अधिकारक्षेत्र", "Click \"Run Agentic Analysis\" to launch the 8-agent sequential verification pipeline.": "8-एजंट अनुक्रमिक पडताळणी पाईपलाईन सुरू करण्यासाठी 'एजंटिक विश्लेषण चालवा' वर टिचकी मारा.", "Prototype Output": "प्रोटोटाइप आउटपुट", "High (Direct Classical Recipe)": "उच्च (थेट शास्त्रीय पाककृती)", "Ayurveda IP & Regulatory Guidance": "आयुर्वेद आय. पी. आणि नियामक मार्गदर्शन", "Gazette Sync": "राजपत्रातील समन्वय", "Granular permissions enabled": "दाणेदार परवानग्या सक्षम केल्या", "Search classical Sanskrit, Tamil, and Persian treatises for formulations, plant names, preparations, and documented therapeutic uses to assess novelty barriers under Section 3(p).": "कलम 3 (पी) अंतर्गत नाविन्यपूर्ण अडथळ्यांचे मूल्यांकन करण्यासाठी फॉर्म्युलेशन, वनस्पतींची नावे, तयारी आणि दस्तऐवजीकृत उपचारात्मक वापरासाठी शास्त्रीय संस्कृत, तामिळ आणि पर्शियन ग्रंथ शोधा.", "Authority": "प्राधिकरण", "0.1% - 0.5% ex-factory gross sales": "0.1%-0.5% माजी कारखान्याची एकूण विक्री", "Direct Phone Briefing": "थेट दूरध्वनी संवाद", "Safe Abstention Fallbacks": "निष्काळजीपणाचे सुरक्षित फोलबॅक", "High Evidence Alignment": "उच्च पुरावा संरेखन", "Jurisdiction:": "अधिकारक्षेत्रः", "Autonomous Multi-Agent Pipeline": "स्वायत्त बहु-एजंट पाईपलाईन", "WIPO": "डब्ल्यूआयपीओ", "Sources & Citations": "स्रोत आणि संदर्भ", "Close": "बंद करा", "Execution of Mutually Agreed Terms (MAT)": "परस्पर सहमतीच्या अटींची अंमलबजावणी (मॅट)", "Registered Patent Agent • Ayurvedic Pharmacology Ph.D.": "नोंदणीकृत पेटंट एजंट आयुर्वेद फार्माकोलॉजी पीएच. डी.", "Statutory Links": "वैधानिक दुवे", "Ayurveda IP & Regulatory Knowledge Graph": "आयुर्वेद आय. पी. आणि नियामक ज्ञानाचा आलेख", "Detailed description...": "तपशीलवार वर्णन ..........", "Version": "आवृत्ती", "RV": "आरव्ही", "Traditional Knowledge | Modern Technology | A Sustainable Future": "पारंपरिक ज्ञान। आधुनिक तंत्रज्ञान। शाश्वत भविष्य", "Applicable Authority: Madhya Pradesh SBB & National Biodiversity Authority": "लागू होणारे प्राधिकरणः मध्य प्रदेश एस. बी. बी. आणि राष्ट्रीय जैवविविधता प्राधिकरण", "5. Regulatory Agent": "5. नियामक प्रतिनिधी", "🇮🇳 India Only (Patents Act & BDA)": "केवळ भारत (पेटंट कायदा आणि बीडीए)", "Pending Stage 2": "प्रलंबित टप्पा 2", "1. Query Agent": "1. चौकशी एजंट", "Formal Written Legal Opinion": "औपचारिक लेखी कायदेशीर मत", "Rajasthan (State SBB)": "राजस्थान (राज्य एस. बी. बी.)", "Simulated Multi-Agent Runtime": "सिम्युलेटेड मल्टी-एजंट रनटाइम", "These benchmark evaluations simulate testing against 150+ legal edge-cases curated from Patent Office decisions, National Biodiversity Authority orders, and published High Court rulings. In production, this suite runs continuously via automated CI/CD assertion pipelines.": "हे बेंचमार्क मूल्यमापन पेटंट कार्यालयाचे निर्णय, राष्ट्रीय जैवविविधता प्राधिकरणाचे आदेश आणि उच्च न्यायालयाचे निकाल प्रकाशित करून तयार केलेल्या 150 हून अधिक कायदेशीर प्रकरणांच्या चाचणीचे अनुकरण करतात. उत्पादनात, हा संच स्वयंचलित सी. आय./सी. डी. ऍसर्सेशन पाईपलाईन्सद्वारे सतत चालतो.", "Seamlessly escalate high-stakes formulation patents, Section 3(p) examination objections, and National Biodiversity Authority compliance to accredited AYUSH patent attorneys.": "मोठ्या प्रमाणातील फॉर्म्युलेशन पेटंट्स, कलम 3 (पी) परीक्षेचे आक्षेप आणि मान्यताप्राप्त आयुष पेटंट वकिलांचे राष्ट्रीय जैवविविधता प्राधिकरणाचे पालन अखंडपणे वाढवणे.", "Tests Section 3(e) synergism requirements, Section 3(j) biological exclusions, and inventive step claims.": "चाचणी कलम 3 (ई) सहक्रियात्मक आवश्यकता, कलम 3 (जे) जैविक अपवर्जन आणि संशोधनात्मक चरण दावे.", "Maps territorial applicability across India Patent Act 1970 vs USPTO 35 U.S.C. / EPO EPC.": "संपूर्ण भारतात पेटंट कायदा 1970 विरुद्ध यू. एस. पी. टी. ओ. 35 यू. एस. सी./ई. पी. ओ. ई. पी. सी. च्या प्रादेशिक लागूकरणाचे नकाशे.", "TKDL": "टीकेडीएल", "Adv. Dr. Rajeshwari Vaidya": "अधिवक्ता डॉ. राजेश्वरी वैद्य", "Need Specialist Review?": "तज्ज्ञ पुनरावलोकनाची गरज आहे का?", "View All": "सर्व पहा", "Active logs captured during your current session across all 13 modules.": "तुमच्या सध्याच्या सत्रादरम्यान सर्व 13 मॉड्यूल्समध्ये टिपलेले सक्रिय लॉग.", "Verify Corpus Checksums": "कार्पस चेकसमची पडताळणी करा", "Under Rule 158B of the Drugs and Cosmetics Rules, this requires classical First Schedule textual citation for manufacturing license (Form 25D). Section 3(p) of the Patents Act strictly bars product patents unless surprising in-vitro synergy is proven.": "औषध आणि सौंदर्यप्रसाधन नियमांच्या नियम 158 बी अंतर्गत, यासाठी उत्पादन परवान्यासाठी (फॉर्म 25 डी) शास्त्रीय प्रथम अनुसूची मजकूर संदर्भ आवश्यक आहे. पेटंट कायद्याचे कलम 3 (पी) आश्चर्यकारक इन-व्हिट्रो समन्वय सिद्ध होत नाही तोपर्यंत उत्पादनाच्या पेटंटवर काटेकोरपणे बंदी घालते.", "Describe the Ayurvedic formulation, novelty claim, intended therapeutic indication, and target jurisdiction...": "आयुर्वेदिक रचना, नाविन्यपूर्ण दावा, उद्देशित उपचारात्मक संकेत आणि लक्ष्य अधिकारक्षेत्राचे वर्णन करा", "Synthesized Consensus Awaiting Run": "संश्लेषित एकमत प्रतीक्षा धाव", "Gathers peer-reviewed trials, bioavailability enhancement data, and mechanistic biological assays.": "समवयस्कांनी पुनरावलोकन केलेल्या चाचण्या, जैवउपलब्धता वाढीची माहिती आणि यांत्रिक जैविक चाचण्या गोळा करतात.", "Explore authoritative, version-tracked legal and regulatory sources.": "अधिकृत, आवृत्ती-ट्रॅक केलेले कायदेशीर आणि नियामक स्रोत शोधा.", "Prototype / DPDP-Aligned Design": "प्रोटोटाइप/डी. पी. डी. पी.-संरेखित रचना", "Evaluation Dashboard": "मूल्यमापन डॅशबोर्ड", "100% Client-Side": "100 टक्के ग्राहक बाजू", "Completed": "पूर्ण झाले", "Governance & Quality": "प्रशासन आणि गुणवत्ता", "e.g. Ashwagandha-Ghrita Synergy Compound": "उदा. अश्वगंधा-घ्रित सिनर्जी कंपाऊंड", "Human IP Facilitator Escalation Network": "मानवी आय. पी. सुविधा वाढवणारे जाळे", "Detail the specific patent claim, prior-art objection, TKDL citation, or ABS benefit sharing challenge you are facing...": "तुम्हाला भेडसावत असलेला विशिष्ट पेटंट दावा, पूर्व-कला आक्षेप, टीकेडीएल प्रशस्तिपत्र किंवा एबीएस लाभ सामायिकरण आव्हान तपशीलवार सांगा", "Multilingual Quality": "बहुभाषिक गुणवत्ता", "Assigned": "नियुक्त केले", "+91 98765 43210": "+ 91 98765 43210", "Action Event": "कृती कार्यक्रम", "Get multilingual, source-cited guidance on intellectual property, traditional knowledge and regulatory requirements.": "बौद्धिक संपदा, पारंपारिक ज्ञान आणि नियामक आवश्यकतांवर बहुभाषिक, स्रोत-उद्धृत मार्गदर्शन मिळवा.", "Agentic Pipeline Simulation & Multi-Source Orchestration": "एजंटिक पाईपलाईन सिम्युलेशन आणि मल्टी-सोर्स ऑर्केस्ट्रेशन", "Purpose Limitation": "उद्देश मर्यादा", "This screen simulates the Human-in-the-Loop escalation protocol designed for national innovation centers. Submission stores deterministic ticket records in local session storage and demonstrates stage tracking.": "हा पडदा राष्ट्रीय नवोन्मेष केंद्रांसाठी तयार केलेल्या ह्युमन-इन-द-लूप एस्केलेशन प्रोटोकॉलचे अनुकरण करतो. सादर करणे स्थानिक सत्र संचयनात निश्चित तिकीट नोंदी संग्रहित करते आणि स्टेज ट्रॅकिंग दर्शवते.", "Prototype Facilitation Protocol & Institutional Triage": "प्रोटोटाइप सुविधा प्रोटोकॉल आणि संस्थात्मक ट्रायज", "Ontology Graph Architecture & Pure HTML5 Canvas Implementation": "ऑन्टोलॉजी आलेख रचना आणि शुद्ध एच. टी. एम. एल. 5 कॅनव्हास अंमलबजावणी", "Expected Statutory Behavior": "अपेक्षित वैधानिक वर्तन", "Karnataka (State SBB)": "कर्नाटक (राज्य एस. बी. बी.)", "Verify local Peoples Biodiversity Register (PBR) entries at the Gram Panchayat.": "ग्रामपंचायतीमध्ये स्थानिक लोक जैवविविधता नोंदणी (पी. बी. आर.) नोंदींची पडताळणी करा.", "Madhya Pradesh (State SBB)": "मध्य प्रदेश (राज्य एस. बी. बी.)", "Statutory Exemption Applicable (Section 5 / Sec 7 Proviso)": "वैधानिक सूट लागू (कलम 5/कलम 7 तरतूद)", "Rigorous test-suite auditing statutory accuracy, citation correctness, safe abstention on unsupported queries, and Indic multilingual translation fidelity.": "कठोर चाचणी-संच लेखापरीक्षण वैधानिक अचूकता, उद्धरण शुद्धता, असमर्थित प्रश्नांवर सुरक्षित बहिष्कार आणि भारतीय बहुभाषिक भाषांतर निष्ठा.", "4. Formal Advisory Delivery": "4. औपचारिक सल्लामसलत वितरण", "anandita@institute.ac.in": "anandita@institute.ac.in", "International Treaties": "आंतरराष्ट्रीय करार", "Medhya (Cognitive)": "मध्य (संज्ञानात्मक)", "safely abstain": "सुरक्षितपणे टाळा", "Patentable Formulation Composition (Novel Carrier/Release)": "पेटंट करण्यायोग्य फॉर्म्युलेशन रचना (नाविन्यपूर्ण वाहक/प्रकाशन)", "Carrier Novelty": "वाहक नाविन्य", "18.4 KB": "18.4 केबी", "Query / Test Scenario": "प्रश्न/चाचणी परिस्थिती", "Regulatory & Institutional Bodies": "नियामक आणि संस्थात्मक संस्था", "7. Citation Validator": "7. उद्धरण प्रमाणक", "Queries Charaka, Sushruta, and TKRC concordance to screen for Section 3(p) anticipating citations.": "प्रश्न चरक, सुश्रुत आणि टी. के. आर. सी. समजुती विभाग 3 (पी) साठी अपेक्षित उद्धरणांसाठी स्क्रीन करण्यासाठी.", "e.g. Wild harvested roots from Madhya Pradesh, India": "उदा. भारतातील मध्य प्रदेशातील जंगली कापणी केलेली मुळे", "Global Treaties & Repositories": "जागतिक करार आणि भांडारे", "Download Opinion Memo (.txt)": "ओपिनियन मेमो (. टी. टी. टी.) डाउनलोड करा", "Client-side data isolation, granular consent controls, tamper-evident session audit logging, and single-click complete data erasure aligned with India's DPDP Act, 2023.": "क्लायंट-साइड डेटा आयसोलेशन, बारीक संमती नियंत्रणे, छेडछाड-स्पष्ट सत्र लेखापरीक्षण लॉगिंग आणि भारताच्या डी. पी. डी. पी. कायदा, 2023 शी संरेखित एकल-क्लिक संपूर्ण डेटा मिटवणे.", "Rule 158B PPAM Licensing": "नियम 158 बी पी. पी. ए. एम. परवाना", "Statutes & IP Doctrines": "कायदे आणि आय. पी. सिद्धांत", "Knowledge Corpus": "ज्ञानाचा संग्रह", "Filter Category:": "फिल्टर वर्गः", "Evaluation Suite v2.4": "मूल्यांकन संच v2.4", "For complex clinical trials or borderline inventive steps, request formal evaluation from a registered Patent Agent.": "गुंतागुंतीच्या वैद्यकीय चाचण्यांसाठी किंवा सीमारेषेवरील शोधात्मक पायऱ्यांसाठी, नोंदणीकृत पेटंट एजंटकडून औपचारिक मूल्यांकनाची विनंती करा.", "Exempt from commercial ABS levy": "व्यावसायिक ए. बी. एस. शुल्कातून सूट", "Uttarakhand (State SBB)": "उत्तराखंड (राज्य एस. बी. बी.)", "Agentic Analysis": "अभिकर्मक विश्लेषण", "Logs timestamps of legal source inspections, jurisdiction switches, and ticket submissions.": "कायदेशीर स्रोत तपासणी, अधिकारक्षेत्रातील बदल आणि तिकीट सादर करण्याच्या वेळेचे शिक्के नोंदवतात.", "AI": "एआय", "Your Escalated Facilitation Requests": "तुमच्या वाढीव सुविधा विनंत्या", "Filters:": "फिल्टरः", "Ask about Ayurveda IP, regulation or compliance...": "आयुर्वेद आयपी, नियमन किंवा अनुपालनाबद्दल विचारा ..........", "Local Biodiversity Management Committee (BMC)": "स्थानिक जैवविविधता व्यवस्थापन समिती (बीएमसी)", "Get guidance on IP rights (patents, GI, trademark) and regulatory requirements.": "आय. पी. अधिकार (पेटंट, जी. आय., ट्रेडमार्क) आणि नियामक आवश्यकतांबाबत मार्गदर्शन मिळवा.", "Run Agentic Analysis": "अभिकर्ता विश्लेषण चालवा", "IP + Regulatory Guidance": "आय. पी. + नियामक मार्गदर्शन", "Empowering innovation in Ayurveda through intellectual property and regulatory excellence.": "बौद्धिक संपदा आणि नियामक उत्कृष्टतेच्या माध्यमातून आयुर्वेदात नवकल्पना सशक्त करणे.", "Illustrative Prototype Metrics": "सचित्र नमुना मेट्रिक्स", "Session Query Caching": "सत्र प्रश्न संचयन", "I assist researchers, clinicians, and Ayurvedic entrepreneurs with intellectual property protection, Section 3(p) non-patentability evaluations, Access and Benefit Sharing (ABS) compliance, and TKDL prior-art identification. How can I assist your research today?": "बौद्धिक संपदा संरक्षण, कलम 3 (पी) गैर-पेटंट मूल्यांकन, प्रवेश आणि लाभ सामायिकरण (ए. बी. एस.) अनुपालन आणि टी. के. डी. एल. पूर्व-कला ओळख यासाठी मी संशोधक, चिकित्सक आणि आयुर्वेदिक उद्योजकांना मदत करतो. आज मी तुमच्या संशोधनाला कशी मदत करू शकतो?", "Prior-Art Pointer Notice: This database is a prototype reference search demonstrating prior-art identification. It does not constitute a definitive or exhaustive patentability search.": "पूर्व-कला निर्देशक सूचनाः हा डेटाबेस पूर्व-कला ओळख दर्शविणारा एक नमुना संदर्भ शोध आहे. हे एक निश्चित किंवा संपूर्ण पेटंटयोग्यता शोध तयार करत नाही.", "Welcome to": "याचे स्वागत आहे", "Every significant action (RAG query, jurisdiction switch, classification run) generates an indelible timestamped local audit event.": "प्रत्येक महत्त्वपूर्ण कृती (आर. ए. जी. चौकशी, अधिकारक्षेत्र बदलणे, वर्गीकरण चालवणे) एक अमिट टाइमस्टॅम्प केलेला स्थानिक लेखापरीक्षण कार्यक्रम निर्माण करते.", "This visualization runs on a custom zero-dependency spring-embedded force simulation on native HTML5 Canvas. Node associations reflect codified statutory cross-references in the Indian Patents Act, Biological Diversity Act 2002/2023, and WIPO treaties.": "हे दृश्य स्थानिक एच. टी. एम. एल. 5 कॅनव्हासवरील सानुकूल शून्य-अवलंबित्व स्प्रिंग-एम्बेडेड फोर्स सिम्युलेशनवर चालते. नोड संघटना भारतीय पेटंट कायदा, जैविक विविधता कायदा 2002/23 आणि डब्ल्यू. आय. पी. ओ. करारांमध्ये संहिताबद्ध वैधानिक परस्पर-संदर्भ प्रतिबिंबित करतात.", "Search by statute, section (e.g. 3(p), Rule 158B), authority, or treatise...": "कायदा, कलम (उदाहरणार्थ 3 (पी), नियम 158 बी), प्राधिकरण किंवा ग्रंथ .......... द्वारे शोधा", "Search traditional knowledge repositories and prior art references.": "पारंपरिक ज्ञान भांडारे आणि पूर्वीचे कला संदर्भ शोधा.", "IP & Regulatory Guidance Hub": "आयपी आणि नियामक मार्गदर्शन केंद्र", "Defensive Prior-Art Database": "संरक्षणात्मक पूर्व-कला डेटाबेस", "Local Audit Logging": "स्थानिक लेखापरीक्षण लॉगिंग", "Session Security & Storage Limitation": "सत्र सुरक्षा आणि साठवण मर्यादा", "National Biodiversity Authority (NBA Chennai) & MoEFCC": "राष्ट्रीय जैवविविधता प्राधिकरण (एन. बी. ए. चेन्नई) आणि पर्यावरण मंत्रालय", "Astanga Hridaya": "अष्टांग हृदय", "WARN Only": "फक्त चेतावणी", "Language": "भाषा", "Agentic & Evidence": "एजंट आणि पुरावा", "Digital Personal Data Protection (DPDP) Core Principles": "डिजिटल वैयक्तिक डेटा संरक्षण (डी. पी. डी. पी.) मुख्य तत्त्वे", "Namaste! I am IP-SAKTI Sahayak.": "नमस्कार! मी आय. पी.-शक्ती सहायक आहे.", "Routine Advisory (48–72h)": "नियमित सल्ला (48-72 तास)", "Active Session Storage": "सक्रिय सत्र संचयन", "Executing test cases across legal domains...": "कायदेशीर डोमेनमध्ये चाचणी प्रकरणे अंमलात आणणे ..........", "Patent": "पेटंट", "Knowledge Areas": "ज्ञानाची क्षेत्रे", "Synthesizes actionable IP strategy, filing roadmap, ABS obligations, and risk mitigation checklist.": "कृती करण्यायोग्य आय. पी. धोरण, फाइलिंग रोडमॅप, ए. बी. एस. जबाबदाऱ्या आणि जोखीम कमी करण्याची चेकलिस्ट यांचे संश्लेषण करते.", "Last Updated": "शेवटचे अद्ययावत केले", "Rasayana (Rejuvenation)": "रसायन (पुनरुज्जीवन)", "Formulation Classification": "सूत्रीकरण वर्गीकरण", "Ashwagandha": "अश्वगंधा", "RAG Quality & Regulatory Benchmark Evaluation": "आर. ए. जी. गुणवत्ता आणि नियामक मापदंड मूल्यांकन", "All Indications": "सर्व संकेत", "Evaluating against Indian Patents Act 1970 (Sec 3(p)), Biological Diversity Act 2002, TKDL digital gazettes, and AYUSH regulatory orders.": "भारतीय पेटंट कायदा 1970 (कलम 3 (पी)), जैविक विविधता कायदा 2002, टी. के. डी. एल. डिजिटल राजपत्र आणि आयुष नियामक आदेशांचे मूल्यांकन करणे.", "Source Cited": "स्रोत उद्धृत", "6. Evidence Agent": "6. पुरावा एजंट", "Request Facilitator Assistance": "सुविधा पुरवणाऱ्याच्या मदतीची विनंती", "Zero cloud storage • Local isolation": "शून्य मेघ संचयन • स्थानिक विलगीकरण", "Form I to NBA (Mandatory Pre-Access Grant)": "फॉर्म I ते एन. बी. ए. (अनिवार्य प्रवेशपूर्व अनुदान)", "Status": "स्थिती", "Granular consent is captured through clear affirmative toggles before caching any search preferences, language, or escalation tickets.": "कोणतीही शोध प्राधान्ये, भाषा किंवा वाढीची तिकिटे कॅशे करण्यापूर्वी स्पष्ट सकारात्मक टॉगलद्वारे दाणेदार संमती घेतली जाते.", "Patent Office (CGPDTM)": "पेटंट कार्यालय (सी. जी. पी. डी. टी. एम)", "Multilingual": "बहुभाषिक", "Ticket IPS-2026-XXXX": "तिकीट आय. पी. एस.-2026-XXXX", "PASS Only": "फक्त पास", "Patentable subject matter under Section 2(1)(j) as an inventive formulation. Safety and pharmacokinetic bioavailability enhancement data required under AYUSH DCGI co-regulations.": "एक संशोधनात्मक सूत्रीकरण म्हणून कलम 2 (1) (जे) अंतर्गत पेटंट करण्यायोग्य विषय. आयुष डी. सी. जी. आय. सह-नियमनाखाली आवश्यक असलेली सुरक्षितता आणि फार्माकोकायनेटिक जैवउपलब्धता वर्धित माहिती.", "Zero cross-site tracking, third-party cookies, or background telemetry. Data persists only within the client browser origin.": "शून्य क्रॉस-साइट ट्रॅकिंग, तृतीय-पक्ष कुकीज किंवा पार्श्वभूमी टेलीमेट्री. डेटा केवळ क्लायंट ब्राउझरच्या मूळातच टिकतो.", "Statutory Hallucination Defense": "वैधानिक मतिभ्रम संरक्षण", "Weekly": "साप्ताहिक", "Statutory legal alignment": "वैधानिक कायदेशीर संरेखन", "Authoritative Knowledge Corpus": "अधिकृत ज्ञान संच", "Statutory Scope & Legal Context": "वैधानिक व्याप्ती आणि कायदेशीर संदर्भ", "User Consent Status": "वापरकर्त्याची संमती स्थिती", "Configure how IP-SAKTI Sahayak maintains your local research workspace.": "आय. पी.-शक्ती सहायक तुमच्या स्थानिक संशोधन कार्यस्थळाची देखभाल कशी करतो ते संरचीत करा.", "RAG Powered": "आर. ए. जी. संचालित", "Classical Ayurvedic Medicine (Shastriya)": "शास्त्रीय आयुर्वेदिक औषध (शास्त्रीय)", "Determines Rule 158B PPAM evidence protocols, Schedule T GMP conditions, and stability study mandates.": "नियम 158 बी पी. पी. ए. एम. पुरावा प्रोटोकॉल, अनुसूची टी जी. एम. पी. अटी आणि स्थिरता अभ्यास आदेश निश्चित करते.", "Save Consent Preferences": "संमतीची प्राधान्ये जतन करा", "🌿 Ashwagandha Extract + Piperine Bio-Enhancer": "अश्वगंधा अर्क + पिपेरिन जैव-वर्धक", "Check access and benefit sharing requirements under Biological Diversity Act.": "जैविक विविधता कायद्यांतर्गत प्रवेश आणि लाभ सामायिकरण आवश्यकता तपासा.", "Local Community Consent & Nagoya Compliance": "स्थानिक समुदायाची संमती आणि नागोया अनुपालन", "Urgent Patent Filing (24h SLA)": "तात्काळ पेटंट दाखल करणे (24 तास एस. एल. ए.)", "Contact Preference": "संपर्क प्राधान्ये", "National Biodiversity Authority": "राष्ट्रीय जैवविविधता प्राधिकरण", "Confidence Indicator": "विश्वासाचे सूचक", "Search": "शोधा", "Evaluation Suite Methodology & Benchmarking Framework": "मूल्यमापन सूट कार्यपद्धती आणि बेंचमार्किंग फ्रेमवर्क", "Granular Consent & Privacy Preferences": "दाणेदार संमती आणि गोपनीयता प्राधान्ये", "Status:": "स्थितीः", "Refresh": "ताजेतवाने करा", "Statutory Examination Notice (12h)": "वैधानिक परीक्षेची सूचना (12 तास)", "India Only": "केवळ भारत", "Low (Purified Fraction)": "कमी (शुद्ध केलेले अपूर्णांक)", "8. Synthesizer": "8. संश्लेषक", "TKDL & Prior-Art Search Engine": "टीकेडीएल आणि पूर्व-कला शोध इंजिन", "All Repositories (12)": "सर्व भांडार (12)", "Speech & Multilingual Preference Retention": "भाषण आणि बहुभाषिक प्राधान्य धारणा", "Authority:": "अधिकारः", "Live Orchestration Telemetry": "लाइव्ह ऑर्केस्ट्रेशन टेलीमेट्री", "Active Statutory Scope": "सक्रिय वैधानिक व्याप्ती", "Authoritative Statutory & Treatise Citations": "अधिकृत वैधानिक आणि उपचारात्मक संदर्भ", "Citation Correctness": "संदर्भ अचूकता", "e.g. Traditional Sneha Kalpana vs Supercritical CO2 Extraction": "उदा. पारंपरिक स्नेह कल्पना विरुद्ध अतिगंभीर कार्बन डायऑक्साइड निष्कर्षण", "Novel Ayurvedic Drug Delivery System (Phytosome/Nano)": "नवीन आयुर्वेदिक औषध वितरण प्रणाली (फायटोसोम/नॅनो)", "Strict NBA Prior Approval Required (Section 3 BDA)": "कडक एन. बी. ए. पूर्व मंजुरी आवश्यक (कलम 3 बी. डी. ए.)", "Standardized hydro-alcoholic co-extraction followed by lipid infusion in medicated cow ghee at 65°C for 8 hours": "प्रमाणित हायड्रो-अल्कोहोलिक सह-निष्कर्षणानंतर 8 तासांसाठी 65° से. वर औषधी गायीच्या तूपात लिपिड ओतणे", "Botany & Classical Formulations": "वनस्पतिशास्त्र आणि शास्त्रीय रचना", "Quick Presets:": "जलद पूर्वनिश्चितः", "[SYSTEM] Agentic Orchestration Engine initialized. Waiting for trigger...": "[प्रणाली] एजेंटीक ऑर्केस्ट्रेशन इंजिन सुरू केले. ट्रिगर .......... ची वाट पाहत आहे", "Core Entities": "मुख्य संस्था", "Cross-validates every statute clause, gazette number, and court precedent against authoritative corpus hashes.": "अधिकृत कॉर्पस हॅशच्या विरोधात प्रत्येक कायद्याचा कलम, राजपत्र क्रमांक आणि न्यायालयीन पूर्वनिश्चितता क्रॉस-व्हॅलिडेट करते.", "All Statuses": "सर्व विधाने", "Section 3 NBA Prior Approval": "कलम 3 एनबीए पूर्व मंजुरी", "ABS Compliance": "एबीएस अनुपालन", "ABS & Biodiversity": "एबीएस आणि जैवविविधता", "Explicit Notice & Consent": "स्पष्ट सूचना आणि संमती", "High (Section 3(p) Bar)": "उच्च (कलम 3 (पी) बार)", "Sushruta Samhita": "सुश्रुत संहिता", "Users exercise complete autonomy with a permanent \"Clear Local Session Data\" action instantly purging all cached prototype data.": "वापरकर्ते कायमस्वरूपी \"स्थानिक सत्र डेटा साफ करा\" कृतीसह संपूर्ण स्वायत्तता वापरतात आणि सर्व कॅशे केलेला नमुना डेटा त्वरित शुद्ध करतात.", "No (Standard Cultivated Supply)": "क्र. (प्रमाणित लागवडीचा पुरवठा)", "Withania somnifera (Ashwagandha, 40%), Bacopa monnieri (Brahmi, 35%), Piper nigrum (Maricha, 5%), Cow Ghee (Ghrita base, 20%)": "विथानिया सोम्निफेरा (अश्वगंधा, 40 टक्के), बाकोपा मोन्निएरी (ब्राह्मी, 35 टक्के), पाइपर निग्राम (मारीचा, 5 टक्के), गायीचे तूप (घ्रिटा बेस, 20 टक्के)", "Vata-vyadhi (Joints)": "वातव्याधी (सांधे)", "Settings saved locally to browser.": "सेटिंग्ज स्थानिक पातळीवर ब्राउझरमध्ये जतन केल्या जातात.", "📜 Classical Chyawanprash Modern Blister Pack": "शास्त्रीय च्यवनप्राश आधुनिक ब्लिस्टर पॅक", "Data Minimization": "डेटा मिनिमायझेशन", "Formulation data and research queries are processed exclusively for real-time intellectual property and regulatory classification simulation.": "फॉर्म्युलेशन डेटा आणि संशोधन प्रश्नांवर केवळ रिअल-टाइम बौद्धिक संपदा आणि नियामक वर्गीकरण अनुकरणासाठी प्रक्रिया केली जाते.", "Click on any intellectual property card below to view detailed statutory requirements, filing pathways, relevant legal authorities, and citations.": "तपशीलवार वैधानिक आवश्यकता, दाखल करण्याचे मार्ग, संबंधित कायदेशीर अधिकारी आणि संदर्भ पाहण्यासाठी खालील कोणत्याही बौद्धिक संपदा कार्डावर क्लिक करा.", "Form III Clearance for Patent Protection": "पेटंट संरक्षणासाठी फॉर्म III मंजुरी", "Classified as Classical Medicine under Schedule 1 treatises. Eligible for Form 25D license without human clinical trials. Unpatentable as traditional knowledge.": "अनुसूची 1 ग्रंथांखाली शास्त्रीय औषध म्हणून वर्गीकृत. मानवी चिकित्सालयीन चाचण्यांशिवाय फॉर्म 25 डी परवान्यासाठी पात्र. पारंपारिक ज्ञान म्हणून पेटंट न करण्यायोग्य.", "Statutory Boundary Mapping": "वैधानिक सीमा नकाशा", "Innovation / Formulation": "नवोन्मेष/रचना", "4. IP Agent": "4. आयपी एजंट", "Isolated to current origin": "सध्याच्या मूळात विलग केलेले", "Domain:": "क्षेत्रः", "IP-SAKTI Sahayak": "आय. पी.-शक्ती सहायक", "Priority: Urgent": "प्राधान्यः तातडीची", "2. Jurisdiction Agent": "2. अधिकारक्षेत्र प्रतिनिधी", "1. Intake & Classification": "1. सेवन आणि वर्गीकरण", "All Authorities": "सर्व अधिकारी", "Knowledge Graph": "ज्ञानाचा आलेख", "Mandatory prior NBA approval under Section 6 before any patent grant.": "कोणत्याही पेटंट अनुदानापूर्वी कलम 6 अंतर्गत एन. बी. ए. ची पूर्व मंजुरी अनिवार्य आहे.", "Node Title": "नोड शीर्षक", "Low (Novel Characterization)": "कमी (नाविन्यपूर्ण वैशिष्ट्यीकरण)", "Accredited AYUSH IP Facilitators": "मान्यताप्राप्त आयुष आय. पी. सुविधा देणारे", "Nil (Exempt for non-commercial research/practitioners)": "शून्य (बिगर-व्यावसायिक संशोधन/व्यावसायिकांसाठी सूट)", "Ministry of AYUSH": "आयुष मंत्रालय", "Confidential Video Consultation": "गोपनीय व्हिडिओ सल्लामसलत", "TKDL & Treatise Prior Art": "टी. के. डी. एल. आणि ट्रीटीज प्रायर आर्ट", "Filter by statute, authority, keyword, gazette number...": "कायदा, अधिकार, मुख्य शब्द, राजपत्र क्रमांक .......... नुसार फिल्टर करा", "Within 24h SLA": "24 तासांच्या एस. एल. ए. च्या आत", "Ancient Wisdom Meets Modern Intelligence": "प्राचीन बुद्धीची आधुनिक बुद्धिमत्तेशी गाठ जुळते", "Patentable Composition of Matter & Extraction Method": "द्रव्य आणि निष्कर्षण पद्धतीची पेटंट करण्यायोग्य रचना", "Select a Knowledge Node": "नॉलेज नोड निवडा", "No Aadhaar numbers, PAN, biometrics, or personal identifiers are stored. Only session operational flags reside in browser localStorage.": "आधार क्रमांक, पॅन, बायोमेट्रिक्स किंवा वैयक्तिक ओळखपत्रे साठवली जात नाहीत. ब्राउझर लोकल स्टोरेजमध्ये केवळ सत्र कार्यान्वित करणारे झेंडे राहतात.", "Agentic Multi-Source Orchestration": "एजंटिक मल्टी-सोर्स ऑर्केस्ट्रेशन", "Search test cases by query, expected statute, or keyword...": "चौकशी, अपेक्षित कायदा किंवा मुख्य शब्द .......... द्वारे चाचणी प्रकरणे शोधा", "Bhaishajya Ratnavali": "भैषज्य रत्नवली", "This screen provides a deterministic simulation of multi-agent workflows. In production, each agent executes specialized RAG embeddings over classical Ayurvedic corpora, patent gazettes, and national biodiversity registries.": "हा पडदा बहु-एजंट कार्यप्रवाहांचे निर्धारक अनुकरण प्रदान करतो. उत्पादनात, प्रत्येक प्रतिनिधी शास्त्रीय आयुर्वेदिक कॉर्पोरा, पेटंट राजपत्र आणि राष्ट्रीय जैवविविधता नोंदणीवर विशेष आरएजी एम्बेडिंग कार्यान्वित करतो.", "Nano-Emulsified Triphala Gut Delivery System": "नॅनो-इमल्सिफाइड त्रिफला गट वितरण प्रणाली", "Mandatory Compliance Checklist:": "अनिवार्य अनुपालन तपासणी यादीः", "Confidence reflects prototype evidence alignment and does not represent legal certainty.": "आत्मविश्वास नमुना पुरावा संरेखन प्रतिबिंबित करतो आणि कायदेशीर निश्चिततेचे प्रतिनिधित्व करत नाही.", "Shotha (Anti-inflammatory)": "शोथा (दाहक-विरोधी)", "e.g. Withania somnifera, Bacopa monnieri, Piper longum": "उदा. विथानिया सोम्निफेरा, बॅकोपा मोन्निएरी, पाइपर लाँगम", "Intellectual Property": "बौद्धिक संपदा", "Showing 8 benchmark test cases": "8 मानक चाचणी प्रकरणे दर्शवित आहे", "Submit Form I with verified botanical sourcing details prior to manufacturing.": "उत्पादन करण्यापूर्वी प्रमाणित वनस्पतीशास्त्रीय स्रोत तपशीलासह फॉर्म I सादर करा.", "Bhavaprakasha Nighantu": "भवप्रकाश निघंटू", "Safe Abstain": "सुरक्षितपणे टाळा", "Mandatory Filing": "अनिवार्य दाखल करणे", "48h Facilitator SLA • Accredited AYUSH Bar": "48 तास सुविधा देणारे एस. एल. ए.-मान्यताप्राप्त आयुष बार", "Export Audit Log (.txt)": "निर्यात लेखापरीक्षण लॉग (. tXT)", "Low-Medium (Known Herb, Novel Matrix)": "कमी-मध्यम (ज्ञात औषधी वनस्पती, नॉवेल मॅट्रिक्स)", "Ask about Section 3(p), ABS, TKDL, patentability or trademarks...": "कलम 3 (पी), ए. बी. एस., टी. के. डी. एल., पेटंटक्षमता किंवा ट्रेडमार्कबद्दल विचारा", "Safe Abstention": "सुरक्षितपणे दूर राहणे", "Indic Multilingual Tests": "भारतीय बहुभाषिक चाचण्या", "View Facilitator Notes": "सुविधा देणाऱ्या नोंदी पहा", "Drug & Cosmetics Regulations": "औषध आणि सौंदर्यप्रसाधन नियम", "e.g. CSIR-CDRI / Ayurveda MSME": "उदाहरणार्थ सी. एस. आय. आर.-सी. डी. आर. आय./आयुर्वेद एम. एस. एम. ई", "Search TKDL": "टीकेडीएल शोधा", "User Control & Right to Erasure": "वापरकर्त्याचे नियंत्रण आणि मिटवण्याचा अधिकार", "Zero-hallucination citations": "शून्य-भ्रम संदर्भ", "Illustrative Institutional Compliance Framework": "सचित्र संस्थात्मक अनुपालन आराखडा", "Non-patentable under Section 3(p); Trademark & GI only": "कलम 3 (पी) अंतर्गत पेटंट न मिळणे; केवळ ट्रेडमार्क आणि जी. आय", "SK": "एस. के", "Classical Treatise": "शास्त्रीय ग्रंथ", "Standardized Phytopharmaceutical Drug Extract": "प्रमाणित फायटोफार्मास्युटिकल ड्रग अर्क", "e.g. Withania somnifera (Ashwagandha)": "उदा. विथानिया सोम्निफेरा (अश्वगंधा)", "Refuses unsupported claims": "असमर्थित दावे नाकारतात", "TKDL / Prior Art": "टीकेडीएल/प्रायर आर्ट", "Action": "कृती", "Clear Local Session Data": "स्थानिक सत्र डेटा साफ करा", "Section 3(p) TK Barriers": "कलम 3 (पी) टी. के. अडथळे", "Active (Revocable)": "सक्रिय (उलट करता येण्याजोगा)", "Benchmark metrics reflect standardized evaluation test cases against the Indian Patents Act, Drugs & Cosmetics Rules, and TKRC database.": "बेंचमार्क मेट्रिक्स भारतीय पेटंट कायदा, औषधे आणि सौंदर्यप्रसाधन नियम आणि टीकेआरसी डेटाबेसच्या विरोधात प्रमाणित मूल्यांकन चाचणी प्रकरणे प्रतिबिंबित करतात.", "Comprehensive Legal Architecture": "सर्वसमावेशक कायदेशीर रचना", "Ready to orchestrate": "ऑर्केस्ट्रेट करण्यासाठी सज्ज", "Intent & Entity Decomposition": "हेतू आणि अस्तित्व विघटन", "Accuracy": "अचूकता", "🌐 International (PCT / USPTO / EPO)": "आंतरराष्ट्रीय (पी. सी. टी./यू. एस. पी. टी. ओ./ई. पी. ओ.)", "Category": "वर्गवारी", "Statutory ABS Pathway": "वैधानिक एबीएस मार्ग", "Mobile / Contact Phone": "भ्रमणध्वनी/संपर्क दूरध्वनी", "Data Privacy Architecture": "डेटा गोपनीयता रचना", "Knowledge Repositories": "ज्ञानाचे भांडार", "Imported from Outside India": "भारताबाहेरून आयात केलेले", "Submit Escalation Request": "वाढवण्याची विनंती सादर करा", "1,248+": "1,248 +", "Current": "सध्याची", "Process patent only (Requires synergistic proof)": "केवळ प्रक्रिया पेटंट (सहक्रियात्मक पुरावा आवश्यक)", "Run Benchmark Suite": "बेंचमार्क स्वीट चालवा", "Simulates autonomous coordination across 8 specialized AI agents decomposing complex Ayurvedic formulations, testing statutory patent eligibility, calculating ABS levies, and validating legal citations.": "गुंतागुंतीच्या आयुर्वेदिक फॉर्म्युलेशनचे विघटन करणाऱ्या 8 विशेष ए. आय. एजंट्समध्ये स्वायत्त समन्वयाचे अनुकरण करते, वैधानिक पेटंट पात्रतेची चाचणी करते, ए. बी. एस. शुल्कांची गणना करते आणि कायदेशीर संदर्भ प्रमाणित करते.", "All Jurisdictions": "सर्व अधिकारक्षेत्र", "Assigned: Senior IP Facilitator Queue": "नियुक्तः वरिष्ठ आय. पी. सुविधा पुरवठादार रांग", "High (Prior Art in Treatises)": "उच्च (ग्रंथातील पूर्व कला)", "Quick Insights": "जलद अंतर्दृष्टी", "This prototype is engineered following the structural principles of the Digital Personal Data Protection Act, 2023 (Act No. 22 of 2023). It demonstrates architectural alignment including purpose limitation, consent, and user-initiated erasure. This interface does not claim formal regulatory certification.": "हा नमुना डिजिटल वैयक्तिक माहिती संरक्षण कायदा, 2023 (2023 चा कायदा क्रमांक 22) च्या संरचनात्मक तत्त्वांचे पालन करून तयार करण्यात आला आहे. हे उद्देश मर्यादा, संमती आणि वापरकर्त्याने सुरू केलेल्या निर्मूलन यासह वास्तुशिल्पीय संरेखन दर्शवते. हा इंटरफेस औपचारिक नियामक प्रमाणपत्राचा दावा करत नाही.", "Enter Formulation Query for Multi-Agent Orchestration": "मल्टी-एजंट ऑर्केस्ट्रेशनसाठी सूत्रीकरण प्रश्न प्रविष्ट करा", "Recent Activity": "अलीकडील क्रियाकलाप", "Verified legal provisions, official gazette notifications, classical shlokas, and international treaties backing all IP-SAKTI Sahayak advisory outputs.": "पडताळणी केलेल्या कायदेशीर तरतुदी, अधिकृत राजपत्र अधिसूचना, शास्त्रीय श्लोक आणि सर्व आय. पी.-एस. ए. के. टी. आय. सहायक सल्लागार परिणामांना समर्थन देणारे आंतरराष्ट्रीय करार.", "8 Agents Ready • Multi-Source Pipeline": "8 एजंट्स रेडी-मल्टी-सोर्स पाइपलाइन", "Submitted": "सादर केले", "ABS & Biodiversity Act": "एबीएस आणि जैवविविधता कायदा", "3. Senior Patent Attorney Review": "3. वरिष्ठ पेटंट वकील पुनरावलोकन"}};

// =============================================================================
// TRANSLATION CACHE & PREBUILT STORAGE
// Supports cache key format: en|<targetLang>|<text>
// Synchronous in-memory Map + persistent localStorage + prebuilt JSON dictionary
// =============================================================================
const TranslationCache = {
  _memory: new Map(),

  _makeKey(sourceLang, targetLang, text) {
    return `${sourceLang}|${targetLang}|${text.trim()}`;
  },

  get(sourceLang, targetLang, text) {
    if (!text || !text.trim()) return text;
    const clean = text.trim();
    if (sourceLang === targetLang) return clean;

    const key = this._makeKey(sourceLang, targetLang, clean);

    // 1. In-memory fast path (0ms latency)
    if (this._memory.has(key)) {
      return this._memory.get(key);
    }

    // 2. Persistent localStorage key check (en|<targetLang>|<text>)
    try {
      const stored = localStorage.getItem('bhashini_cache:' + key);
      if (stored) {
        this._memory.set(key, stored);
        return stored;
      }
    } catch (_e) {}

    // 3. Prebuilt dictionary check
    if (typeof BHASHINI_PREBUILT_TRANSLATIONS !== 'undefined' &&
        BHASHINI_PREBUILT_TRANSLATIONS[targetLang] &&
        BHASHINI_PREBUILT_TRANSLATIONS[targetLang][clean]) {
      const trans = BHASHINI_PREBUILT_TRANSLATIONS[targetLang][clean];
      this.set(sourceLang, targetLang, clean, trans);
      return trans;
    }

    // 4. Static TRANSLATIONS dictionary check for nav/sidebar labels
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[targetLang] && TRANSLATIONS['en']) {
      for (const [k, v] of Object.entries(TRANSLATIONS['en'])) {
        if (v === clean && TRANSLATIONS[targetLang][k]) {
          const trans = TRANSLATIONS[targetLang][k];
          this.set(sourceLang, targetLang, clean, trans);
          return trans;
        }
      }
    }

    // 5. Legacy cache check (ipsakti_i18n_cache_<lang>)
    try {
      const legacyRaw = localStorage.getItem('ipsakti_i18n_cache_' + targetLang);
      if (legacyRaw) {
        const legacy = JSON.parse(legacyRaw);
        if (legacy && legacy[clean]) {
          this.set(sourceLang, targetLang, clean, legacy[clean]);
          return legacy[clean];
        }
      }
    } catch (_e) {}

    return null;
  },

  set(sourceLang, targetLang, text, translation) {
    if (!text || !translation) return;
    const clean = text.trim();
    const key = this._makeKey(sourceLang, targetLang, clean);
    this._memory.set(key, translation);
    try {
      localStorage.setItem('bhashini_cache:' + key, translation);
    } catch (_e) {}
  },

  has(sourceLang, targetLang, text) {
    return this.get(sourceLang, targetLang, text) !== null;
  }
};

// Asynchronously load expanded prebuilt translations from JSON and pre-warm cache
let _prebuiltTranslationsPromise = null;
let _prebuiltTranslationsSettled = false;
function loadPrebuiltTranslations() {
  if (!_prebuiltTranslationsPromise) {
    _prebuiltTranslationsPromise = fetch('prebuilt_translations.json')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        if (data && typeof data === 'object') {
          Object.assign(BHASHINI_PREBUILT_TRANSLATIONS, data);
          for (const [lang, dict] of Object.entries(data)) {
            if (dict && typeof dict === 'object') {
              for (const [text, trans] of Object.entries(dict)) {
                TranslationCache.set('en', lang, text, trans);
              }
            }
          }
        }
        _prebuiltTranslationsSettled = true;
        return data;
      })
      .catch(() => { _prebuiltTranslationsSettled = true; return {}; });
  }
  return _prebuiltTranslationsPromise;
}

// Trigger background pre-warm on module load
try {
  loadPrebuiltTranslations();
} catch (_e) {}

// =============================================================================
// IN-FLIGHT REQUEST DEDUPLICATION
// Guarantees only ONE active HTTP request per (lang, text) combination.
// Concurrent callers for the same string share the same Promise.
// =============================================================================
const _inFlightRequests = new Map(); // key: 'en|<lang>|<text>' → Promise<string|null>

/**
 * Fetch a translation, deduplicating concurrent identical requests.
 * Returns cached result immediately if available; otherwise makes one HTTP call
 * shared across all concurrent callers for the same string.
 */
async function fetchTranslation(text, lang) {
  if (!text || !text.trim() || lang === 'en') return text;
  const clean = text.trim();

  // 1. Synchronous cache hit — zero network cost
  const cached = TranslationCache.get('en', lang, clean);
  if (cached) return cached;

  // 2. Deduplicate: reuse in-flight Promise if one already exists
  const key = `en|${lang}|${clean}`;
  if (_inFlightRequests.has(key)) return _inFlightRequests.get(key);

  // 3. Create one HTTP request, shared by all concurrent callers
  const promise = callBhashiniTranslate(clean, 'en', lang).then(trans => {
    _inFlightRequests.delete(key);
    if (trans) TranslationCache.set('en', lang, clean, trans);
    return trans || null;
  }).catch(() => { _inFlightRequests.delete(key); return null; });

  _inFlightRequests.set(key, promise);
  return promise;
}

/**
 * Live Bhashini Translation API Client (calls Flask backend on port 5050)
 */
async function callBhashiniTranslate(text, sourceLang, targetLang) {
  if (!text || !text.trim() || sourceLang === targetLang) return text;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);
  try {
    const _backendUrl = (window.IPSAKTI_CONFIG && window.IPSAKTI_CONFIG.BACKEND_URL) || 'http://127.0.0.1:5050';
    const res = await fetch(_backendUrl + '/api/translate', {
      method: 'POST',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: text.trim(),
        source_language: sourceLang,
        target_language: targetLang
      })
    });
    clearTimeout(timeoutId);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.success && data.translated_text) {
      return data.translated_text;
    }
    return null;
  } catch (_err) {
    clearTimeout(timeoutId);
    return null;
  }
}

/**
 * Scan DOM for translatable text containers and placeholders
 */
function getTranslatableElements() {
  const wrapper = document.querySelector('.page-content-wrapper') || document.querySelector('main');
  if (!wrapper) return { textElements: [], placeholderElements: [] };

  const textElements = [];
  const placeholderElements = [];

  const isIgnoredTag = (tag) => [
    'script', 'style', 'svg', 'path', 'circle', 'line', 'polygon', 'polyline', 'rect', 'ellipse', 'g', 'mask'
  ].includes(tag);

  wrapper.querySelectorAll('*').forEach(el => {
    const tag = el.tagName.toLowerCase();
    if (isIgnoredTag(tag)) return;

    // 1. Placeholder
    if (el.hasAttribute('placeholder')) {
      const ph = el.getAttribute('placeholder').trim();
      if (ph) {
        if (!el.hasAttribute('data-orig-placeholder')) {
          el.setAttribute('data-orig-placeholder', ph);
        }
        placeholderElements.push(el);
      }
    }

    // 2. Leaf element with text content
    if (el.children.length === 0) {
      const txt = el.textContent.trim();
      if (txt.length > 1 && !/^[\d\.\s%•→←↑↓✓✗\-–—:]+$/.test(txt)) {
        if (!el.hasAttribute('data-orig-text')) {
          el.setAttribute('data-orig-text', txt);
        }
        textElements.push(el);
      }
    }
  });

  // Also scan modals
  document.querySelectorAll('.modal-window *').forEach(el => {
    const tag = el.tagName.toLowerCase();
    if (isIgnoredTag(tag)) return;
    if (el.children.length === 0) {
      const txt = el.textContent.trim();
      if (txt.length > 1 && !/^[\d\.\s%•→←↑↓✓✗\-–—:]+$/.test(txt)) {
        if (!el.hasAttribute('data-orig-text')) {
          el.setAttribute('data-orig-text', txt);
        }
        textElements.push(el);
      }
    }
  });

  return { textElements, placeholderElements };
}

/**
 * Restore English content across all translated DOM elements
 */
function restoreEnglishContent() {
  // 1. Restore main text elements
  document.querySelectorAll('[data-orig-text]').forEach(el => {
    el.textContent = el.getAttribute('data-orig-text');
  });

  // 2. Restore placeholders
  document.querySelectorAll('[data-orig-placeholder]').forEach(el => {
    el.setAttribute('placeholder', el.getAttribute('data-orig-placeholder'));
  });

  // 3. Restore data-i18n navigation and sidebar elements
  if (TRANSLATIONS && TRANSLATIONS['en']) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (TRANSLATIONS['en'][k]) el.textContent = TRANSLATIONS['en'][k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS['en'][k]) el.setAttribute('placeholder', TRANSLATIONS['en'][k]);
    });
  }
}

/**
 * Render all 14 Bhashini languages into #lang-dropdown-menu
 */
function renderLanguageDropdown() {
  const menu = document.getElementById('lang-dropdown-menu');
  if (!menu) return;
  menu.innerHTML = '';

  ALL_LANGUAGES.forEach(lang => {
    const btn = document.createElement('button');
    btn.className = `lang-option-btn ${lang.code === APP_STATE.language ? 'active' : ''}`;
    btn.setAttribute('data-lang', lang.code);
    btn.innerHTML = `${lang.native} <span>${lang.badge}</span>`;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyLanguage(lang.code);
      menu.classList.remove('active');
      showToast(`Language switched to ${lang.native} (${lang.name})`, 'success');
    });
    menu.appendChild(btn);
  });
}

/**
 * Localize entire page content into target language
 * - Fully deduplicates phrases: identical text translated only ONCE
 * - Instant 0ms cache pass from in-memory Map & localStorage (en|<lang>|<text>)
 * - Executes missing phrases in parallel using Promise.all()
 * - Keeps English UI visible while translation loads (never blanks the page)
 * - Persists language selection across page navigation via localStorage
 */
async function localizePageContent(lang) {
  if (!lang || lang === 'en') {
    restoreEnglishContent();
    return;
  }

  // Wait for prebuilt cache only if it hasn't settled yet (avoids unnecessary await on subsequent calls)
  if (!_prebuiltTranslationsSettled) {
    try { await loadPrebuiltTranslations(); } catch (_e) {}
  }

  // 1. Collect all translatable DOM elements
  const { textElements, placeholderElements } = getTranslatableElements();

  // Also include [data-i18n] and [data-i18n-placeholder] across sidebar/navbar/modals
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const enText = (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) || el.textContent.trim();
    if (enText) {
      if (!el.hasAttribute('data-orig-text')) {
        el.setAttribute('data-orig-text', enText);
      }
      textElements.push(el);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const enText = (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) || el.getAttribute('placeholder');
    if (enText) {
      if (!el.hasAttribute('data-orig-placeholder')) {
        el.setAttribute('data-orig-placeholder', enText);
      }
      placeholderElements.push(el);
    }
  });

  if (textElements.length === 0 && placeholderElements.length === 0) return;

  // 2. DEDUPLICATE: Map each unique English string to all DOM elements that contain it
  const stringToTextElements = new Map();
  textElements.forEach(el => {
    const orig = el.getAttribute('data-orig-text');
    if (!orig) return;
    const clean = orig.trim();
    if (!clean) return;
    if (!stringToTextElements.has(clean)) stringToTextElements.set(clean, []);
    stringToTextElements.get(clean).push(el);
  });

  const stringToPlaceholderElements = new Map();
  placeholderElements.forEach(el => {
    const orig = el.getAttribute('data-orig-placeholder');
    if (!orig) return;
    const clean = orig.trim();
    if (!clean) return;
    if (!stringToPlaceholderElements.has(clean)) stringToPlaceholderElements.set(clean, []);
    stringToPlaceholderElements.get(clean).push(el);
  });

  // 3. FAST PASS: Apply cached translations immediately (0ms latency, zero page blanking)
  const missingStrings = new Set();

  for (const [clean, els] of stringToTextElements.entries()) {
    const cached = TranslationCache.get('en', lang, clean);
    if (cached) {
      els.forEach(el => { el.textContent = cached; });
    } else {
      missingStrings.add(clean);
    }
  }

  for (const [clean, els] of stringToPlaceholderElements.entries()) {
    const cached = TranslationCache.get('en', lang, clean);
    if (cached) {
      els.forEach(el => { el.setAttribute('placeholder', cached); });
    } else {
      missingStrings.add(clean);
    }
  }

  const missingList = Array.from(missingStrings);

  // 4. FULLY PARALLEL NETWORK PASS: Fire ALL missing strings simultaneously.
  //    fetchTranslation() deduplicates concurrent requests for the same string
  //    via _inFlightRequests so only ONE HTTP call is made per unique string.
  if (missingList.length > 0) {
    const langLabel = document.getElementById('current-lang-name');
    const baseName = LANG_DISPLAY_NAMES[lang] || lang;
    if (langLabel) {
      langLabel.innerHTML = `${baseName} <span style="font-size:0.75rem;opacity:0.75;" title="Translating...">⏳</span>`;
    }

    await Promise.all(missingList.map(async (text) => {
      const trans = await fetchTranslation(text, lang);
      if (trans) {
        const tEls = stringToTextElements.get(text);
        if (tEls) tEls.forEach(el => { el.textContent = trans; });
        const pEls = stringToPlaceholderElements.get(text);
        if (pEls) pEls.forEach(el => { el.setAttribute('placeholder', trans); });
      }
    }));

    if (langLabel) {
      langLabel.textContent = baseName;
    }
  }
}

/**
 * Update UI text based on active language across shell and main content.
 * Persists selection in localStorage ("selectedLanguage").
 */
function applyLanguage(lang) {
  const isSupported = ALL_LANGUAGES.some(l => l.code === lang && l.supported);
  if (!isSupported && lang !== 'en') {
    lang = 'en';
  }

  APP_STATE.language = lang;
  localStorage.setItem('selectedLanguage', lang);
  localStorage.setItem('ipsakti_lang', lang);

  // 1. Update header language dropdown display
  const langLabel = document.getElementById('current-lang-name');
  if (langLabel) {
    langLabel.textContent = LANG_DISPLAY_NAMES[lang] || 'English';
  }

  // 2. Update active state in dropdown
  document.querySelectorAll('.lang-option-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // 3. Localize entire page content (0ms fast pass + parallel missing fetch)
  localizePageContent(lang);

  // 4. Dispatch custom event for page-specific reaction
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Expose globally
window.localizePageContent = localizePageContent;
window.callBhashiniTranslate = callBhashiniTranslate;
window.fetchTranslation = fetchTranslation;
window.restoreEnglishContent = restoreEnglishContent;

// MutationObserver for dynamic page elements (like analysis results)
if (typeof window !== 'undefined') {
  let _domMutationTimeout = null;
  const attachObserver = () => {
    const wrapper = document.querySelector('.page-content-wrapper');
    if (wrapper && !wrapper._hasLocalizationObserver) {
      wrapper._hasLocalizationObserver = true;
      const observer = new MutationObserver((mutations) => {
        if (APP_STATE.language === 'en') return;
        const hasRelevantAdditions = mutations.some(m =>
          m.type === 'childList' &&
          Array.from(m.addedNodes).some(n => n.nodeType === 1 && !n.hasAttribute?.('data-orig-text'))
        );
        if (hasRelevantAdditions) {
          clearTimeout(_domMutationTimeout);
          _domMutationTimeout = setTimeout(() => {
            localizePageContent(APP_STATE.language);
          }, 180);
        }
      });
      observer.observe(wrapper, { childList: true, subtree: true });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachObserver);
  } else {
    attachObserver();
  }
}

/**
 * Update active jurisdiction (India vs International)
 */
function applyJurisdiction(jurisdiction) {
  if (jurisdiction !== 'india' && jurisdiction !== 'international') jurisdiction = 'india';
  APP_STATE.jurisdiction = jurisdiction;
  localStorage.setItem('ipsakti_jurisdiction', jurisdiction);

  const btnIndia = document.getElementById('btn-jurisdiction-india');
  const btnIntl = document.getElementById('btn-jurisdiction-intl');
  
  if (btnIndia && btnIntl) {
    btnIndia.classList.toggle('active', jurisdiction === 'india');
    btnIndia.setAttribute('aria-checked', jurisdiction === 'india');
    btnIntl.classList.toggle('active', jurisdiction === 'international');
    btnIntl.setAttribute('aria-checked', jurisdiction === 'international');
  }

  // Update jurisdiction indicator on pages if present
  const ind = document.getElementById('active-jurisdiction-badge');
  if (ind) {
    if (jurisdiction === 'india') {
      ind.innerHTML = '<span>🇮🇳</span> <span>India Statutory Framework (IPO / AYUSH / NBA)</span>';
    } else {
      ind.innerHTML = '<span>🌐</span> <span>International Framework (WIPO / PCT / Nagoya Protocol)</span>';
    }
  }

  // Dispatch custom event for page-specific reaction
  window.dispatchEvent(new CustomEvent('jurisdictionChanged', { detail: { jurisdiction: jurisdiction } }));
  logAuditEvent('Jurisdiction Changed', `Selected ${jurisdiction.toUpperCase()} statutory framework`);
}

/**
 * Log session event to localStorage audit trail
 */
function logAuditEvent(action, detail) {
  try {
    const raw = localStorage.getItem('ipsakti_audit_logs');
    const logs = raw ? JSON.parse(raw) : [];
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    logs.unshift({ time: timeStr, action, detail, timestamp: now.toISOString() });
    // Keep last 30 entries
    if (logs.length > 30) logs.pop();
    localStorage.setItem('ipsakti_audit_logs', JSON.stringify(logs));
  } catch (e) {
    console.warn('Could not write audit log:', e);
  }
}

/**
 * Toast notification banner
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast-message';
  if (type === 'success') toast.style.background = '#156535';
  if (type === 'warning') toast.style.background = '#B45309';
  if (type === 'danger') toast.style.background = '#991B1B';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// =============================================================================
// 3. GLOBAL SEARCH ENGINE (Indexes all 13 Prototype Modules)
// =============================================================================
const SEARCH_INDEX = [
  { title: "AI Assistant Co-Pilot", page: "ai-assistant.html", type: "Core Co-Pilot", snippet: "Ask RAG-assisted questions about patents, Section 3(p), ABS, and TKDL." },
  { title: "Formulation Classification", page: "formulation-classification.html", type: "Evaluation", snippet: "Analyze Ayurvedic recipes, traditional knowledge flags, and prior-art risk." },
  { title: "Patents Act 1970 — Section 3(p)", page: "ip-regulatory-guidance.html", type: "Statutory Guidance", snippet: "Inventions relating to traditional knowledge are non-patentable." },
  { title: "Rule 158B Drugs & Cosmetics Act", page: "ip-regulatory-guidance.html", type: "AYUSH Regulatory", snippet: "Evidence requirements for classical and proprietary Ayurvedic medicines." },
  { title: "Biological Diversity Act 2002 (ABS)", page: "abs-compliance.html", type: "Compliance", snippet: "NBA Form I, Form III approval and benefit sharing obligations for biological access." },
  { title: "TKDL Ashwagandha Prior Art", page: "tkdl-prior-art.html", type: "Prior Art", snippet: "Charaka Samhita Chikitsa Sthana prior art references for Withania somnifera." },
  { title: "Geographical Indications (GI)", page: "ip-regulatory-guidance.html", type: "IP Rights", snippet: "Protection of traditional agricultural and manufactured goods like Malabar Pepper." },
  { title: "Knowledge Graph Ontology", page: "knowledge-graph.html", type: "Ontology", snippet: "Interactive network connecting herbs, formulations, patents, and treaties." },
  { title: "Multi-Agent Orchestration", page: "agentic-analysis.html", type: "Agentic Architecture", snippet: "Observe 8 specialized agents collaborate to verify legal evidence." },
  { title: "Human IP Facilitator Escalation", page: "human-expert.html", type: "Governance", snippet: "Request review from registered Indian patent agents and AYUSH legal specialists." },
  { title: "DPDP Privacy & Security", page: "privacy-security.html", type: "DPDP Aligned", snippet: "Session data minimization, purpose limitation, and local session wipe." },
  { title: "Quality & Safety Benchmarks", page: "evaluation.html", type: "Evaluation", snippet: "92% legal accuracy, 96% citation correctness, and safe abstention metrics." }
];

function setupGlobalSearch() {
  const searchInput = document.getElementById('global-search-input');
  const searchResults = document.getElementById('global-search-results');
  const clearBtn = document.getElementById('search-clear-btn');
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

    if (q.length < 2) {
      searchResults.classList.remove('active');
      searchResults.innerHTML = '';
      return;
    }

    const matches = SEARCH_INDEX.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.snippet.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 12px; font-size: 0.84rem; color: var(--text-muted); text-align: center;">
          No matching records found for "<strong>${q}</strong>". Try searching for <em>Section 3(p)</em>, <em>Ashwagandha</em>, or <em>ABS</em>.
        </div>`;
    } else {
      searchResults.innerHTML = matches.slice(0, 6).map(m => `
        <a href="${m.page}" class="search-result-item">
          <span class="search-result-type">${m.type}</span>
          <span class="search-result-title">${highlightMatch(m.title, q)}</span>
          <span class="search-result-snippet">${highlightMatch(m.snippet, q)}</span>
        </a>
      `).join('');
    }
    searchResults.classList.add('active');
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearBtn.style.display = 'none';
      searchResults.classList.remove('active');
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-search-wrap')) {
      searchResults.classList.remove('active');
    }
  });
}

function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark style="background:#FEF08A; color:#1E293B; border-radius:2px; padding:0 2px;">$1</mark>');
}

// =============================================================================
// 4. VOICE ASSISTANT (Web Speech API + Synthesis)
// =============================================================================
function setupVoiceAssistant() {
  const voiceBtn = document.getElementById('header-voice-btn');
  if (!voiceBtn) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    voiceBtn.addEventListener('click', () => {
      showToast('Web Speech API is not supported in this browser. Falling back to text input.', 'warning');
    });
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  voiceBtn.addEventListener('click', () => {
    if (APP_STATE.voiceActive) {
      recognition.stop();
      return;
    }

    try {
      const langCodes = {
        en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN', gu: 'gu-IN', ta: 'ta-IN', te: 'te-IN', bn: 'bn-IN'
      };
      recognition.lang = langCodes[APP_STATE.language] || 'en-IN';
      recognition.start();
      APP_STATE.voiceActive = true;
      voiceBtn.classList.add('listening');
      showToast('Voice Assistant listening... Speak your Ayurveda IP query.', 'info');
    } catch (err) {
      console.error('Speech recognition error:', err);
      APP_STATE.voiceActive = false;
      voiceBtn.classList.remove('listening');
    }
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    APP_STATE.voiceActive = false;
    voiceBtn.classList.remove('listening');
    showToast(`Heard: "${transcript}"`, 'success');

    // Fill query input on current page or search bar
    const chatInput = document.getElementById('assistant-chat-input');
    const searchInput = document.getElementById('global-search-input');
    if (chatInput) {
      chatInput.value = transcript;
      chatInput.focus();
    } else if (searchInput) {
      searchInput.value = transcript;
      searchInput.dispatchEvent(new Event('input'));
      searchInput.focus();
    }
    logAuditEvent('Voice Query Input', transcript);
  };

  recognition.onerror = (event) => {
    APP_STATE.voiceActive = false;
    voiceBtn.classList.remove('listening');
    showToast(`Voice input error: ${event.error}`, 'warning');
  };

  recognition.onend = () => {
    APP_STATE.voiceActive = false;
    voiceBtn.classList.remove('listening');
  };
}

/**
 * Text to Speech Helper
 */
function speakText(text) {
  if (!window.speechSynthesis) {
    showToast('Text-to-speech is not supported in this browser.', 'warning');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const langCodes = {
    en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN', gu: 'gu-IN', ta: 'ta-IN', te: 'te-IN', bn: 'bn-IN'
  };
  utterance.lang = langCodes[APP_STATE.language] || 'en-IN';
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

// =============================================================================
// 5. GLOBAL SHELL SETUP & NAVIGATION SYNC
// =============================================================================
function initializeGlobalShell() {
  // 1. Language Dropdown Setup (populates all 14 Bhashini languages)
  renderLanguageDropdown();
  const langBtn = document.getElementById('lang-menu-btn');
  const langMenu = document.getElementById('lang-dropdown-menu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('active');
      langBtn.setAttribute('aria-expanded', langMenu.classList.contains('active'));
    });
  }

  // 2. Jurisdiction Buttons
  const btnIndia = document.getElementById('btn-jurisdiction-india');
  const btnIntl = document.getElementById('btn-jurisdiction-intl');
  if (btnIndia) {
    btnIndia.addEventListener('click', () => {
      applyJurisdiction('india');
      showToast('Switched to India Statutory Framework (Patents Act / AYUSH / NBA)', 'info');
    });
  }
  if (btnIntl) {
    btnIntl.addEventListener('click', () => {
      applyJurisdiction('international');
      showToast('Switched to International Framework (WIPO / PCT / Nagoya Protocol)', 'info');
    });
  }

  // 3. Notifications Menu Toggle
  const notifBtn = document.getElementById('notification-bell-btn');
  const notifMenu = document.getElementById('notifications-menu');
  if (notifBtn && notifMenu) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifMenu.classList.toggle('active');
    });
    const markReadBtn = document.getElementById('mark-all-read-btn');
    if (markReadBtn) {
      markReadBtn.addEventListener('click', () => {
        const badge = notifBtn.querySelector('.badge-count');
        if (badge) badge.style.display = 'none';
        notifMenu.classList.remove('active');
        showToast('All regulatory notifications marked as read', 'success');
      });
    }
  }

  // Close menus on outside click
  document.addEventListener('click', () => {
    if (langMenu) langMenu.classList.remove('active');
    if (notifMenu) notifMenu.classList.remove('active');
  });

  // 4. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('app-sidebar');
  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // 5. Active Sidebar Link Detection
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 6. Modal close handlers
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove('active');
    });
  });

  // 7. Initialize Sub-engines
  setupGlobalSearch();
  setupVoiceAssistant();

  // 8. Restore Saved Preferences
  applyLanguage(APP_STATE.language);
  applyJurisdiction(APP_STATE.jurisdiction);
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGlobalShell);
} else {
  initializeGlobalShell();
}
