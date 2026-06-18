export interface TranslationSet {
  // Navigation & Slogans
  brandName: string;
  brandTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  bookNow: string;
  exploreServices: string;
  home: string;
  services: string;
  branchesTitle: string;
  whyUs: string;
  about: string;
  booking: string;
  aiConsultant: string;
  toggleTheme: string;
  toggleLang: string;
  openingHours: string;
  phone: string;
  email: string;
  address: string;

  // Features / Why Choose Us
  certifiedTherapists: string;
  certifiedTherapistsDesc: string;
  pureOils: string;
  pureOilsDesc: string;
  hygienicEnv: string;
  hygienicEnvDesc: string;
  authenticHealing: string;
  authenticHealingDesc: string;

  // Services
  servicesSubtitle: string;
  ayurvedicTitle: string;
  ayurvedicDesc: string;
  thaiMassageTitle: string;
  thaiMassageDesc: string;
  deepTissueTitle: string;
  deepTissueDesc: string;
  hotStoneTitle: string;
  hotStoneDesc: string;
  facialTitle: string;
  facialDesc: string;
  steamSaunaTitle: string;
  steamSaunaDesc: string;

  // Pricing & Info
  minDuration: string;
  priceSymbol: string;
  startingFrom: string;

  // Branches
  branchesSubtitle: string;
  itahariName: string;
  itahariAddress: string;
  itahariPhone: string;
  itahariMap: string;
  dharanName: string;
  dharanAddress: string;
  dharanPhone: string;
  biratnagarName: string;
  biratnagarAddress: string;
  biratnagarPhone: string;
  kathmanduName: string;
  kathmanduAddress: string;
  kathmanduPhone: string;

  // Interactive Booking Customizer
  bookingTitle: string;
  bookingSubtitle: string;
  selectService: string;
  selectBranch: string;
  durationLabel: string;
  dateLabel: string;
  timeLabel: string;
  fullNameLabel: string;
  phoneLabel: string;
  chooseExtraSteam: string;
  chooseExtraAroma: string;
  customPackageSummary: string;
  totalEstimate: string;
  submitBooking: string;
  bookingSuccessMsg: string;
  viewHistory: string;
  noHistory: string;

  // AI Chatbot
  aiTitle: string;
  aiGreeting: string;
  aiPlaceholder: string;
  aiDisclaimer: string;
  aiSuggestedPrompt1: string;
  aiSuggestedPrompt2: string;
  aiSuggestedPrompt3: string;
}

export const translations: Record<"EN" | "NP", TranslationSet> = {
  EN: {
    brandName: "Lotus Spa Nepal",
    brandTagline: "",
    heroHeadline: "Reawaken Your Senses at Lotus Spa",
    heroSubheadline:
      "Experience the ultimate sanctuary of relaxation and physical well-being. Nepal's premier luxury wellness brand offering authentic Ayurvedic arts, deep tissue therapy, and soothing aroma-baths across East Nepal's leading cities.",
    bookNow: "Book an Appointment",
    exploreServices: "Explore Services",
    home: "Home",
    services: "Our Therapies",
    branchesTitle: "Our Branches",
    whyUs: "Why Lotus Spa",
    about: "Our Story",
    booking: "",
    aiConsultant: "AI Zen Consultant",
    toggleTheme: "Change Ambiance",
    toggleLang: "नेपाली",
    openingHours: "Daily 9:00 AM - 8:00 PM (Including Holidays)",
    phone: "Phone",
    email: "Email",
    address: "Location",

    certifiedTherapists: "Expert Certified Therapists",
    certifiedTherapistsDesc:
      "Our professional practitioners are trained in authentic Ayurvedic anatomy and international deep tissue relaxation techniques.",
    pureOils: "100% Organic Botanical Oils",
    pureOilsDesc:
      "We exclusively craft restorative natural blends from cold-pressed mustard, lavender, and cold-pressed Himalayan herbs with zero chemicals.",
    hygienicEnv: "Impeccably Pristine Sanctuaries",
    hygienicEnvDesc:
      "Rest in climate-controlled cabins with pristine disposable sheets, warm copper steam cabinets, and tranquil acoustic melodies.",
    authenticHealing: "Time-Tested Authentic Healing",
    authenticHealingDesc:
      "Each stroke is calculated to detoxify fat layers, ease chronic muscle knots, and align key biological energies (Prana).",

    servicesSubtitle: "Tailored Holistic Sanctuaries",
    ayurvedicTitle: "Ayurvedic Shirodhara & Abhyanga",
    ayurvedicDesc:
      "A continuous ribbon of warm, herbal oils gently cascading onto the forehead (third-eye chakra), paired with professional therapeutic body rubs to release neurological stress.",
    thaiMassageTitle: "Traditional Thai & Yoga Stretch",
    thaiMassageDesc:
      "No-oil fully clothed treatment focusing on energy lines (Sen). Incorporates targeted pressure-point therapies and gentle assisted yoga stretches for ultimate flexibility.",
    deepTissueTitle: "Clinical Deep Tissue Therapy",
    deepTissueDesc:
      "An intense treatment using slow, deep guiding strokes to target deep inner layers of muscles and connective tissues. Ideal for athletes and chronic muscle tension.",
    hotStoneTitle: "Himalayan Basalt Hot Stone Ritual",
    hotStoneDesc:
      "Preheated natural basalt volcanic stones placed on meridian points to dissolve tension, improve blood flow, and balance the nervous system.",
    facialTitle: "Lotus Radiant Organic Facial",
    facialDesc:
      "Natural facial treatments utilizing fresh lotus petals, organic honey, saffron, and oatmeal to naturally extract blackheads and restore cellular skin glow.",
    steamSaunaTitle: "Herve-Infused Steam & Pine Sauna",
    steamSaunaDesc:
      "Perfect sweating baths infused with therapeutic Himalayan eucalyptus and lemongrass leaves to fully detoxify lungs and skin before or after massage.",

    minDuration: "60 / 90 Mins",
    priceSymbol: "NPR",
    startingFrom: "Starting from",

    branchesSubtitle: "Visit Our Tranquil Escapes Close to You",
    itahariName: "Lotus Spa Itahari (Flagship)",
    itahariAddress:
      "Main Chowk, Dharan Road (Opposite Rastriya Banijya Bank), Itahari, Sunsari, Nepal",
    itahariPhone: "+977-25-580432, +977-9801205933",
    itahariMap: "View on Google Maps",
    dharanName: "Lotus Spa Dharan Sanctuary",
    dharanAddress: "Bhanu Chowk East, Golf Line, Dharan, Sunsari, Nepal",
    dharanPhone: "+977-25-525944",
    biratnagarName: "Lotus Spa Biratnagar Oasis",
    biratnagarAddress:
      "Traffic Chowk North, Mahendra Path, Biratnagar, Morang, Nepal",
    biratnagarPhone: "+977-21-460111",
    kathmanduName: "Lotus Spa Kathmandu Suite (Prana)",
    kathmanduAddress: "Jhamsikhel Clinic Road, Lalitpur, Kathmandu, Nepal",
    kathmanduPhone: "+977-01-5544299",

    bookingTitle: "Interactive Package Room",
    bookingSubtitle:
      "Custom tailor your custom spa therapy experience. Review real-time estimates instantly and secure your spot at your favorite branch.",
    selectService: "Select Wellness Therapy",
    selectBranch: "Choose Spa Branch",
    durationLabel: "Preferred Session Duration",
    dateLabel: "Select Date",
    timeLabel: "Preferred Appointment Time",
    fullNameLabel: "Full Name",
    phoneLabel: "Phone Number for Confirmation",
    chooseExtraSteam: "Add Herbal Steam & Sauna (+ NPR 1,200)",
    chooseExtraAroma: "Add Premium Lavender Aromatherapy (+ NPR 800)",
    customPackageSummary: "Your Tailored Relaxation Package",
    totalEstimate: "Estimated Amount",
    submitBooking: "Secure Booking Appointment",
    bookingSuccessMsg:
      "Namaste! Your appointment request has been successfully registered. Our receptionist will call you within 15 minutes to confirm your therapist reservation.",
    viewHistory: "Your Booking History",
    noHistory: "No pending session bookings found in this device.",

    aiTitle: "Lotus Zen Assistant",
    aiGreeting:
      "Namaste! I am your Lotus Zen Assistant. I can recommend physical therapies suited for your body pain, calculate service packages, explain Ayurvedic wellness concepts, or answer any questions about our Itahari, Dharan, and Biratnagar locations. How can I guide you today?",
    aiPlaceholder: "Ask about body pain, therapies, packages...",
    aiDisclaimer:
      "This AI consultant provides wellness insights based on traditional holistic practices and is not a substitute for clinical diagnostics.",
    aiSuggestedPrompt1:
      "What massage is best for chronic lower back stiffness?",
    aiSuggestedPrompt2: "Explain the benefits of Shirodhara therapy",
    aiSuggestedPrompt3: "Tell me about prices and packages in Itahari",
  },
  NP: {
    brandName: "लोटस स्पा नेपाल",
    brandTagline: "",
    heroHeadline: "लोटस स्पामा आफ्ना इन्द्रियहरूलाई पुनर्जीवित गर्नुहोस्",
    heroSubheadline:
      "आराम र शारीरिक कल्याणको उत्कृष्ट गन्तव्यको अनुभव गर्नुहोस्। नेपालको अग्रणी लक्जरी वेलनेस ब्रान्ड जसले पूर्वी नेपालका प्रमुख शहरहरूमा वास्तविक आयुर्वेदिक कला, गहिरो तन्तु थेरापी, र सुगन्धित बाथ सेवाहरू प्रदान गर्दछ।",
    bookNow: "अपोइन्टमेन्ट बुक गर्नुहोस्",
    exploreServices: "हाम्रा सेवाहरू हेर्नुहोस्",
    home: "गृहपृष्ठ",
    services: "हाम्रा थेरापीहरू",
    branchesTitle: "हाम्रा शाखाहरू",
    whyUs: "किन लोटस स्पा",
    about: "हाम्रो कथा",
    booking: "",
    aiConsultant: "एआई वेलनेस सल्लाहकार",
    toggleTheme: "वातावरण परिवर्तन",
    toggleLang: "English",
    openingHours:
      "दैनिक बिहान ९:०० देखि साँझ ८:०० बजेसम्म (बिदाका दिनहरूमा पनि)",
    phone: "फोन",
    email: "इमेल",
    address: "ठेगाना",

    certifiedTherapists: "विशेषज्ञ प्रमाणित थेरापिस्टहरू",
    certifiedTherapistsDesc:
      "हाम्रा व्यावसायिक चिकित्सकहरू वास्तविक आयुर्वेदिक शरीर रचना र अन्तर्राष्ट्रिय डिप टिस्यु मसाज प्रविधिहरूमा दक्ष छन्।",
    pureOils: "१००% अर्गानिक वनस्पति तेल",
    pureOilsDesc:
      "हामी रसायनरहित शुद्ध तोरीको तेल, ल्याभेन्डर र हिमाली जडीबुटीहरूबाट निर्मित विशेष तेलहरू मात्र प्रयोग गर्दछौं।",
    hygienicEnv: "अत्यन्तै स्वच्छ र शान्त क्याबिनहरू",
    hygienicEnvDesc:
      "स्वच्छ वातानुकूलित क्याबिनहरू, प्रयोग गरिने सफा डिस्पोजेबल बेडसिट, तातो तामाको स्टीम बाकस र मधुर संगीतको आनन्द लिनुहोस्।",
    authenticHealing: "समय-परीक्षित वास्तविक उपचार",
    authenticHealingDesc:
      "शरीरको विकार फाल्न, मांसपेशीको दुखाइ कम गर्न र मुख्य जैविक ऊर्जा (प्राण) लाई व्यवस्थित गर्न प्रत्येक स्ट्रोक प्रभावकारी हुन्छ।",

    servicesSubtitle: "विशेष तरिकाले डिजाइन गरिएका थेरापीहरू",
    ayurvedicTitle: "आयुर्वेदिक शिरोधारा र अभ्यंग",
    ayurvedicDesc:
      "मानसिक तनाव र थकान कम गर्न निधारमा (तेस्रो आँखा चक्र) बिस्तारै मनतातो जडीबुटीको तेल निरन्तर खसालिने प्रक्रिया र पूरै शरीरको मालिस गर्ने परम्परागत उपचार।",
    thaiMassageTitle: "परम्परागत थाई र योगा स्ट्रेच",
    thaiMassageDesc:
      "बिना तेल, कपडा नलगाई गरिने थेरापी जसले शरीरका उर्जा रेखाहरूमा ध्यान केन्द्रित गर्दछ। लचिलोपनका लागि मांसपेशी थिच्ने र योगासन गराइने।",
    deepTissueTitle: "क्लिनिकल डिप टिस्यु थेरापी",
    deepTissueDesc:
      "मांसपेशी र तन्तुहरूको भित्री तहहरू सम्म गहिरो स्ट्रोकहरू प्रयोग गरी गरिने कडा मालिस। खेलाडीहरू र मांसपेशीको पुरानो दुखाइ भएकाहरूका लागि उपयुक्त।",
    hotStoneTitle: "हिमालयन तातो ढुङ्गा थेरापी (हट स्टोन)",
    hotStoneDesc:
      "मेरिडियन बिन्दुहरूमा पूर्व-तातो प्राकृतिक ज्वालामुखी ढुङ्गाहरू राखेर मांसपेशी खुकुलो पार्ने, रक्तसञ्चार बढाउने र स्नायु प्रणाली सन्तुलन गर्ने उपचार।",
    facialTitle: "लोटस रेडियन्ट अर्गानिक फेसियल",
    facialDesc:
      "ताजा लोटसका फूलका पातहरू, जैविक मह, केसर र ओटमील जस्ता प्राकृतिक सामग्री प्रयोग गरी छालाका छिद्र सफा गर्ने र चमक फर्काउने फेसियल।",
    steamSaunaTitle: "जडीबुटी युक्त स्टीम र पाइन साउना",
    steamSaunaDesc:
      "मसाज अघि वा पछि फोक्सो र छालालाई पूर्ण रूपमा विषमुक्त बनाउन हिमाली युकालिप्टस र कागती घाँसको पात मिश्रित तातो स्टीम बाथ।",

    minDuration: "६० / ९० मिनेट",
    priceSymbol: "रु.",
    startingFrom: "सुरुवाती मूल्य",

    branchesSubtitle: "तपाईंको नजिकै अवस्थित हाम्रा शान्त केन्द्रहरू",
    itahariName: "लोटस स्पा इटहरी (मुख्य कार्यालय)",
    itahariAddress:
      "मुख्य चोक, धरान रोड (राष्ट्रिय वाणिज्य बैंक विपरित), इटहरी, सुनसरी, नेपाल",
    itahariPhone: "+९७७-२५-५८०४३२, +९७७-९८०१२०५९३३",
    itahariMap: "गुगल म्यापमा हेर्नुहोस्",
    dharanName: "लोटस स्पा धरान शाखा",
    dharanAddress: "भानु चोक पूर्व, गल्फ लाइन, धरान, सुनसरी, नेपाल",
    dharanPhone: "+९७७-२५-५२५९४४",
    biratnagarName: "लोटस स्पा विराटनगर शाखा",
    biratnagarAddress: "ट्रफिक चोक उत्तर, महेन्द्र पथ, विराटनगर, मोरङ, नेपाल",
    biratnagarPhone: "+९७७-२१-४६०१११",
    kathmanduName: "लोटस स्पा काठमाडौं स्विट (प्राण)",
    kathmanduAddress: "झम्सीखेल क्लिनिक मार्ग, ललितपुर, काठमाडौं, नेपाल",
    kathmanduPhone: "+९७७-०१-५५४४२९९",

    bookingTitle: "अन्तरक्रियात्मक बुकिङ कोठा",
    bookingSubtitle:
      "तपाईंको आफ्नो रुचि अनुसारको स्पा प्याकेज आफैं तयार गर्नुहोस्। तत्काल सेवा मूल्यको अनुमानित विवरण हेर्नुहोस् र तपाईंको मनपर्ने शाखामा स्थान सुरक्षित गर्नुहोस्।",
    selectService: "मसाज थेरापी छनोट गर्नुहोस्",
    selectBranch: "स्पा शाखा छनोट गर्नुहोस्",
    durationLabel: "समय अवधि",
    dateLabel: "मिति छनोट गर्नुहोस्",
    timeLabel: "समय छनोट गर्नुहोस्",
    fullNameLabel: "पूरा नाम",
    phoneLabel: "सम्पर्क फोन नम्बर (पुष्टिकरणका लागि)",
    chooseExtraSteam: "जडीबुटी स्टीम र साउना थप्नुहोस् (+ रु. १,२००)",
    chooseExtraAroma: "प्रिमियम ल्याभेन्डर अरोमाथेरापी थप्नुहोस् (+ रु. ८००)",
    customPackageSummary: "तपाईंको अनुकूलित प्याकेज",
    totalEstimate: "अनुमानित कुल रकम",
    submitBooking: "अपोइन्टमेन्ट बुक गर्नुहोस्",
    bookingSuccessMsg:
      "नमस्ते! तपाईंको अपोइन्टमेन्ट अनुरोध सफलतापूर्वक दर्ता भएको छ। हाम्रो प्रतिनिधिले थेरापिस्ट बुक गर्न १५ मिनेट भित्र तपाईंलाई फोन गर्नुहुनेछ।",
    viewHistory: "तपाईंको बुकिङ इतिहास",
    noHistory: "यो उपकरणमा हाल कुनै बुकिङ इतिहास भेटिएन।",

    aiTitle: "लोटस जेन एआई सहायक",
    aiGreeting:
      "नमस्ते! म तपाईंको लोटस जेन एआई सहायक हुँ। म तपाईंको शारीरिक दुखाइ अनुसार थेरापीहरू सिफारिस गर्न सक्छु, सेवा प्याकेज मूल्य गणना गर्न सक्छु, आयुर्वेदिक कल्याणका धारणाहरू व्याख्या गर्न सक्छु वा इटहरी, धरान र विराटनगर शाखाहरूबारे जानकारी दिन सक्छु। म आज तपाईंलाई कसरी मद्दत गरूँ?",
    aiPlaceholder: "शारीरिक दुखाइ, मसाज वा प्याकेजबारे सोध्नुहोस्...",
    aiDisclaimer:
      "यो एआई प्रणालीले परम्परागत समग्र प्राकृतिक उपचारमा आधारित जानकारी दिन्छ र यो नैदानिक चिकित्सा सल्लाहको विकल्प होइन।",
    aiSuggestedPrompt1: "तल्लो ढाड दुखाइको लागि कुन मसाज राम्रो हुन्छ?",
    aiSuggestedPrompt2: "शिरोधारा थेरापीको फाइदाहरू के हुन्?",
    aiSuggestedPrompt3: "इटहरी शाखामा सेवाको मूल्य कति छ?",
  },
};
