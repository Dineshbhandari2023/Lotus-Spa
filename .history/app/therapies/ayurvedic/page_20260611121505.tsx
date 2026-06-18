"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Receipt,
  Sparkles,
  CheckCircle2,
  MapPin,
  Languages,
  Sun,
  Moon,
  CalendarDays,
} from "lucide-react";

// In-file self-contained therapy database to prevent missing import issues
const therapiesData = {
  ayurvedic: {
    EN: {
      title: "Ayurvedic Treatment",
      subtitle: "Traditional Mind & Body Restoration",
      desc: "Experience ancient Himalayan healing. This therapeutic ritual involves streaming warm medicated herbal oils to realign your body's vital life energy (Prana) and dissolve deep-seated neurological stress.",
      price: "NPR 4,500",
      duration: "90 Mins",
      image: "/images/spa_ayurvedic_treatment.png",
      prep: [
        "Avoid heavy meals 1 hour before.",
        "Arrive 15 minutes early to adjust to the temperature.",
      ],
      benefits: [
        "Aligns natural sleep cycles",
        "Balances physical doshas",
        "Improves scalp and skin nutrition",
      ],
    },
    NP: {
      title: "आयुर्वेदिक थेरापी",
      subtitle: "मस्तिष्क र शरीरको परम्परागत पुनर्स्थापना",
      desc: "प्राचीन हिमाली जडीबुटी थेरापीको अनुभव लिनुहोस्। यो विधिमा शरीरको उर्जा (प्राण) लाई पुनः स्थापित गर्न र गहिरो मानसिक तनाव कम गर्न मनतातो औषधीय तेलको प्रवाह गराइन्छ।",
      price: "रु. ४,५००",
      duration: "९० मिनेट",
      image: "/images/spa_ayurvedic_treatment.png",
      prep: [
        "उपचारको १ घण्टा पहिले भारी खाना नखानुहोस्।",
        "शान्त वातावरणमा घुलमिल हुन १५ मिनेट पहिले आउनुहोस्।",
      ],
      benefits: [
        "प्राकृतिक निद्राको चक्र सुधार गर्छ",
        "शारीरिक दोषहरू सन्तुलन गर्छ",
        "छाला र कपालको स्वास्थ्य राम्रो बनाउँछ",
      ],
    },
  },
  "deep-tissue": {
    EN: {
      title: "Deep Tissue Massage",
      subtitle: "Chronic Pain & Tension Reliever",
      desc: "A highly therapeutic massage targeting the deeper layers of muscle and connective tissue. Ideal for chronic pain, tight shoulders, and physical stiffness resulting from active lifestyles.",
      price: "NPR 3,800",
      duration: "60 / 90 Mins",
      image: "https://picsum.photos/seed/massage/1200/800",
      prep: [
        "Drink plenty of water prior to the session.",
        "Communicate your pressure preferences with your practitioner.",
      ],
      benefits: [
        "Alleviates chronic back and neck pain",
        "Releases deep inflammatory muscle knots",
        "Improves overall posture",
      ],
    },
    NP: {
      title: "डीप टिस्यु मसाज",
      subtitle: "पुरानो दुखाइ र तनाव कम गर्ने थेरापी",
      desc: "तन्तु र मांसपेशीहरूको भित्री तहसम्म स्पर्श गरेर दुखाइ कम गर्ने विधि। पुरानो दुखाइ, कडा काँध, र शारीरिक कडापन कम गर्न यो थेरापी उत्कृष्ट छ।",
      price: "रु. ३,८००",
      duration: "६० / ९० मिनेट",
      image: "https://picsum.photos/seed/massage/1200/800",
      prep: [
        "थेरापी अगाडि प्रशस्त पानी पिउनुहोस्।",
        "आफ्नो सहजता अनुसारको दबाबको बारेमा थेरापिस्टसँग सल्लाह गर्नुहोस्।",
      ],
      benefits: [
        "ढाड र घाँटीको पुरानो दुखाइ निको पार्छ",
        "मांसपेशीका गाँठाहरू खुलाउँछ",
        "शारीरिक ढाँचा वा पोस्चर सुधार गर्छ",
      ],
    },
  },
  "thai-stretch": {
    EN: {
      title: "Traditional Thai Stretch",
      subtitle: "Energy Line & Flexibility Yoga",
      desc: "An active, oil-free treatment performed on a traditional floor mat. Your practitioner guides you through passive yogic stretches and targeted acupressure to release muscular tension along physical energy lines.",
      price: "NPR 3,000",
      duration: "60 Mins",
      image: "https://picsum.photos/seed/thai/1200/800",
      prep: [
        "Wear loose, comfortable clothing.",
        "Be prepared for gentle, assisted stretching maneuvers.",
      ],
      benefits: [
        "Enhances athletic range of motion",
        "Stretches spine and joints fully",
        "Boosts active circulation flow",
      ],
    },
    NP: {
      title: "थाई स्ट्रेचिङ",
      subtitle: "योगासन र लचिलोपन थेरापी",
      desc: "योगासन र स्ट्रेचिङको संयोजन भएको बिना तेलको थेरापी। थेरापिस्टको सहयोगमा शरीरका अंगहरू स्ट्रेच गराई मांसपेशीको तनाव र कडापन हटाइन्छ।",
      price: "रु. ३,०००",
      duration: "६० मिनेट",
      image: "https://picsum.photos/seed/thai/1200/800",
      prep: [
        "खुकुलो र सजिलो कपडा लगाउनुहोस्।",
        "योगासन शैलीको स्ट्रेचिङका लागि तयार हुनुहोस्।",
      ],
      benefits: [
        "शारीरिक लचिलोपन थप गर्छ",
        "मेरुदण्ड र जोर्नीहरूलाई खुकुलो बनाउँछ",
        "सक्रिय रक्तसञ्चार बढाउँछ",
      ],
    },
  },
  "hot-stone": {
    EN: {
      title: "Premium Hot Stone",
      subtitle: "Spinal Volcanic Thermal Treatment",
      desc: "Smooth heated basalt volcanic stones are placed key energy centers along the spine. The soothing thermal heat penetrates deep into your muscle fibers, encouraging profound relaxation.",
      price: "NPR 5,000",
      duration: "90 Mins",
      image: "https://picsum.photos/seed/stones/1200/800",
      prep: [
        "Avoid sunbathing or microdermabrasion before your session.",
        "Warm thermal heat can cause sweating; hydration is key.",
      ],
      benefits: [
        "Deeply calms nervous system irritation",
        "Fosters intense thermal muscle relaxation",
        "Detoxifies cellular metabolic pathways",
      ],
    },
    NP: {
      title: "हट स्टोन थेरापी",
      subtitle: "ज्वालामुखी ढुङ्गाको तातो थेरापी",
      desc: "तातो ज्वालामुखी ढुङ्गाहरूलाई शरीरको मुख्य उर्जा केन्द्रहरू र ढाडमा राखिन्छ। यसको प्राकृतिक तातोले मांसपेशीभित्रसम्म पुगेर मानसिक तथा शारीरिक शान्ति प्रदान गर्छ।",
      price: "रु. ५,०००",
      duration: "९० मिनेट",
      image: "https://picsum.photos/seed/stones/1200/800",
      prep: [
        "थेरापी अगाडि कडा घाममा नबस्नुहोस्।",
        "तातो बाफले पसिना निकाल्ने हुँदा पर्याप्त पानी पिउनुहोस्।",
      ],
      benefits: [
        "स्नायु प्रणालीलाई शान्त बनाउँछ",
        "मांसपेशीलाई गहिरो आराम दिन्छ",
        "शारीरिक विषालु तत्वहरू बाहिर फाल्न मद्दत गर्छ",
      ],
    },
  },
  "organic-facial": {
    EN: {
      title: "Organic Lotus Facial",
      subtitle: "Saffron Skin Exfoliation & Restore",
      desc: "A pure clinical facial using fresh organic lotus pollen, mountain honey, and saffron extracts. Gently exfoliates dead skin layers and hydrates at a cellular level, leaving your face glowing.",
      price: "NPR 2,500",
      duration: "60 Mins",
      image: "https://picsum.photos/seed/facial/1200/800",
      prep: [
        "Inform your therapist of skin allergies or chemical treatments.",
        "Avoid shaving immediately before the facial session.",
      ],
      benefits: [
        "Restores skin moisture barrier cleanly",
        "Brightens complexion with natural saffron",
        "Reduces environmental oxidative stress",
      ],
    },
    NP: {
      title: "लोटस फेसियल",
      subtitle: "केसर र वनस्पती छालाको हेरचाह",
      desc: "ताजा अर्गानिक लोटस पराग र महको मिश्रणबाट गरिने फेसियल। यसले अनुहारको मृत छाला सफा गरी छालालाई भित्रैदेखि चम्किलो र स्वस्थ बनाउँछ।",
      price: "रु. २,५००",
      duration: "६० मिनेट",
      image: "https://picsum.photos/seed/facial/1200/800",
      prep: [
        "कुनै एलर्जी वा पहिलेको छाला उपचारबारे पहिले जानकारी दिनुहोस्।",
        "फेसियल गर्नु अगाडि दाह्री नकाट्नुहोस्।",
      ],
      benefits: [
        "छालाको प्राकृतिक ओसिलोपन फर्काउँछ",
        "केसरको गुणले अनुहार चम्किलो बनाउँछ",
        "धुलो र प्रदूषणको नकारात्मक असर कम गर्छ",
      ],
    },
  },
  "steam-sauna": {
    EN: {
      title: "Himalayan Steam & Sauna",
      subtitle: "Infused Eucalyptus Bronchial Clear",
      desc: "Re-energize in our aromatic pine steam chambers. Formulated with organic Himalayan eucalyptus, our therapy opens skin pores, detoxifies your lungs, and clears your nasal passages.",
      price: "NPR 1,200",
      duration: "30 / 45 Mins",
      image: "https://picsum.photos/seed/steam/1200/800",
      prep: [
        "Remove jewelry and metallic watches.",
        "Cool down for 5 minutes prior to bathing in cold water.",
      ],
      benefits: [
        "Expels stored biological toxins through sweat",
        "Relieves congestion and improves breathing",
        "Softens and purifies skin outer layers",
      ],
    },
    NP: {
      title: "स्टीम र साउना",
      subtitle: "हिमाली युकालिप्टस बाफ थेरापी",
      desc: "सुगन्धित पाइन कोठामा बाफको आराम लिनुहोस्। हिमाली युकालिप्टस मिसाइएको यो साउनाले छालाका छिद्रहरू खोल्छ र श्वासप्रश्वास प्रणालीलाई सफा बनाउँछ।",
      price: "रु. १,२००",
      duration: "३० / ४५ मिनेट",
      image: "https://picsum.photos/seed/steam/1200/800",
      prep: [
        "सुनका गहना र धातुका घडी फुकाल्नुहोस्।",
        "साउनापछि चिसो पानीले नुहाउनु अघि ५ मिनेट शरीर चिसो हुन दिनुहोस्।",
      ],
      benefits: [
        "पसिनाको माध्यमबाट शरीरको फोहोर बाहिर फाल्छ",
        "श्वासप्रश्वास प्रणाली सफा गर्छ",
        "छालालाई नरम र चम्किलो बनाउँछ",
      ],
    },
  },
};

export default function TherapyPage() {
  const router = useRouter();
  const params = useParams();
  const slug = (params?.slug as string) || "ayurvedic";

  // System localizations & theme presets
  const [currentLang, setLang] = useState<"EN" | "NP">("EN");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const therapy =
    therapiesData[slug as keyof typeof therapiesData] ||
    therapiesData.ayurvedic;
  const content = therapy[currentLang];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#121510] text-[#ECEAE2]"
          : "bg-[#FDFBF7] text-[#2D2D2D]"
      }`}
    >
      {/* Premium Minimal Navigation Shell */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${
          theme === "dark"
            ? "bg-[#121510]/95 border-[#272F22]"
            : "bg-[#FDFBF7]/95 border-[#E5DED4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase hover:text-[#7C8461] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentLang === "EN" ? "Back to Hub" : "मुख्य पृष्ठ"}</span>
          </button>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(currentLang === "EN" ? "NP" : "EN")}
              className={`flex items-center gap-2 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all border ${
                theme === "dark"
                  ? "bg-[#1A1F16] border-[#272F22] hover:border-[#7C8461]"
                  : "bg-white border-[#E5DED4] hover:bg-[#F8F6F2]"
              }`}
            >
              <Languages className="w-3.5 h-3.5 text-[#7C8461]" />
              <span>{currentLang === "EN" ? "नेपाली" : "EN"}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 border transition-all ${
                theme === "dark"
                  ? "bg-[#1A1F16] border-[#272F22] text-[#7C8461]"
                  : "bg-white border-[#E5DED4] text-[#2D2D2D]"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Therapy Description and Copy */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] border ${
                theme === "dark"
                  ? "bg-[#1A1F16] border-[#7C8461]/40 text-[#7C8461]"
                  : "bg-[#F8F6F2] border-[#E5DED4] text-[#7C8461]"
              }`}
            >
              <Sparkles className="w-3 h-3 animate-pulse" />
              <span>{content.subtitle}</span>
            </motion.div>

            {/* Bold Montserrat Headings */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-sm sm:text-base leading-relaxed font-medium ${
                theme === "dark" ? "text-[#A2A994]" : "text-[#555]"
              }`}
            >
              {content.desc}
            </motion.p>

            {/* Price & Duration Metabar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`grid grid-cols-2 gap-4 p-5 border ${
                theme === "dark"
                  ? "bg-[#1A1F16] border-[#272F22]"
                  : "bg-[#F8F6F2] border-[#E5DED4]"
              }`}
            >
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#7C8461] block">
                  {currentLang === "EN" ? "Therapy Price" : "शुल्क लागत"}
                </span>
                <span className="text-xl font-black flex items-center gap-1.5">
                  <Receipt className="w-4 h-4 text-[#7C8461]" />
                  {content.price}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#7C8461] block">
                  {currentLang === "EN" ? "Treatment Duration" : "समय अवधि"}
                </span>
                <span className="text-xl font-black flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#7C8461]" />
                  {content.duration}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <button
                onClick={() => router.push("/#booking-section")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#7C8461] hover:bg-[#6b7352] text-white text-xs tracking-[0.2em] font-black uppercase px-8 py-4 transition-all"
              >
                <CalendarDays className="w-4 h-4" />
                <span>
                  {currentLang === "EN"
                    ? "Book This Treatment"
                    : "यो थेरापी बुक गर्नुहोस्"}
                </span>
              </button>
            </motion.div>
          </div>

          {/* Right Image Segment */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-3 border ${
                theme === "dark"
                  ? "bg-[#1A1F16] border-[#272F22]"
                  : "bg-white border-[#E5DED4]"
              }`}
            >
              <div className="aspect-[4:3] overflow-hidden bg-stone-100">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits & Preparation Guides Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 pt-16 border-t border-dashed border-[#E5DED4] dark:border-[#272F22]">
          {/* Benefits Panel */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-[#7C8461]">
              {currentLang === "EN" ? "Therapy Benefits" : "फाइदाहरू"}
            </h3>
            <div className="space-y-4">
              {content.benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#7C8461] flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold opacity-90">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pre-appointment prep guidelines */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-wider text-[#7C8461]">
              {currentLang === "EN"
                ? "Appointment Preparation"
                : "पूर्व तयारी नियम"}
            </h3>
            <div className="space-y-4">
              {content.prep.map((rule, rIdx) => (
                <div
                  key={rIdx}
                  className={`p-4 border font-semibold text-xs sm:text-sm ${
                    theme === "dark"
                      ? "bg-[#1A1F16]/40 border-[#272F22]"
                      : "bg-white border-[#E5DED4]"
                  }`}
                >
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#7C8461] mb-1">
                    {currentLang === "EN"
                      ? `Guideline 0${rIdx + 1}`
                      : `नियम ०${rIdx + 1}`}
                  </div>
                  <p className="opacity-80">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
