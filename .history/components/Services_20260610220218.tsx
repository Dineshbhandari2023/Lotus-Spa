'use client';

import React from 'react';
import { translations } from '@/lib/translations';
import { Flower, Activity, Scissors, Timer, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  currentLang: 'EN' | 'NP';
  theme: 'light' | 'dark';
}

export default function Services({ currentLang, theme }: ServicesProps) {
  const t = translations[currentLang];

  const mainServices = [
    {
      id: 'ayurvedic',
      title: t.ayurvedicTitle,
      desc: t.ayurvedicDesc,
      price: currentLang === 'EN' ? 'NPR 4,500' : 'रु. ४,५००',
      duration: '90 Mins',
      image: '/images/spa_ayurvedic_treatment.png',
      badge: currentLang === 'EN' ? 'Best Seller' : 'लोकप्रिय',
      features: currentLang === 'EN' 
        ? ['Warm herbal oil stream', 'Aligns Prana energy', 'Relieves neurological stress']
        : ['मनतातो जडीबुटी तेल', 'प्राण उर्जा सन्तुलन', 'मानसिक तनाव कम गर्ने']
    },
    {
      id: 'deep-tissue',
      title: t.deepTissueTitle,
      desc: t.deepTissueDesc,
      price: currentLang === 'EN' ? 'NPR 3,800' : 'रु. ३,८००',
      duration: '60 / 90 Mins',
      image: 'https://picsum.photos/seed/massage/800/600',
      badge: currentLang === 'EN' ? 'Therapeutic' : 'उपचारात्मक',
      features: currentLang === 'EN'
        ? ['Alleviates chronic back pain', 'Targets deep muscle knots', 'Improves body pressure rhythm']
        : ['ढाडको पुरानो दुखाइ निको', 'तन्तुहरूको भित्री तहसम्म स्पर्श', 'रक्तसंचार प्रवाह']
    },
    {
      id: 'thai-stretch',
      title: t.thaiMassageTitle,
      desc: t.thaiMassageDesc,
      price: currentLang === 'EN' ? 'NPR 3,000' : 'रु. ३,०००',
      duration: '60 Mins',
      image: 'https://picsum.photos/seed/thai/800/600',
      badge: currentLang === 'EN' ? 'Traditional' : 'परम्परागत',
      features: currentLang === 'EN'
        ? ['No-oil, fully clothed', 'Acubending & stretching', 'Enhances physical flexibility']
        : ['कपडा नलगाई, बिना तेल थेरापी', 'योगासन जस्तै स्ट्रेचिङ', 'लचिलोपन थप्ने']
    },
    {
      id: 'hot-stone',
      title: t.hotStoneTitle,
      desc: t.hotStoneDesc,
      price: currentLang === 'EN' ? 'NPR 5,000' : 'रु. ५,०००',
      duration: '90 Mins',
      image: 'https://picsum.photos/seed/stones/800/600',
      badge: currentLang === 'EN' ? 'Premium Ritual' : 'प्रिमियम थेरापी',
      features: currentLang === 'EN'
        ? ['Heated basalt volcanic stones', 'Soothing deep spinal warmth', 'Detoxifies metabolic pathways']
        : ['तातो ज्वालामुखी ढुङ्गाहरू', 'ढाडको मेरुदण्ड तातो बनाउने', 'शारीरिक विष फाल्ने']
    },
    {
      id: 'organic-facial',
      title: t.facialTitle,
      desc: t.facialDesc,
      price: currentLang === 'EN' ? 'NPR 2,500' : 'रु. २,५००',
      duration: '60 Mins',
      image: 'https://picsum.photos/seed/facial/800/600',
      badge: currentLang === 'EN' ? 'Skincare' : 'फेसियल',
      features: currentLang === 'EN'
        ? ['Fresh organic lotus honey', 'Saffron cellular restore', 'Deep exfoliating extraction']
        : ['ताजा अर्गानिक मह र लोटस', 'केसर र वनस्पती प्याक', 'छालाको गहिरो सफाइ']
    },
    {
      id: 'steam-sauna',
      title: t.steamSaunaTitle,
      desc: t.steamSaunaDesc,
      price: currentLang === 'EN' ? 'NPR 1,200' : 'रु. १,२००',
      duration: '30 / 45 Mins',
      image: 'https://picsum.photos/seed/steam/800/600',
      badge: currentLang === 'EN' ? 'Add-On' : 'स्टीम बाथ',
      features: currentLang === 'EN'
        ? ['Infused Himalayan eucalyptus', 'Detoxifies lung & sinuses', 'Opens skin pores fully']
        : ['हिमाली युकालिप्टस बाफ', 'फोक्सो र श्वासप्रश्वास सफा', 'छालाका छिद्र खुला पार्ने']
    }
  ];

  return (
    <section 
      id="services-section"
      className={`py-24 border-b transition-colors relative ${
        theme === 'dark' ? 'bg-[#121510] text-[#ECEAE2] border-[#272F22]' : 'bg-[#FDFBF7] text-[#2D2D2D] border-[#E5DED4]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#7C8461] font-sans text-[10px] uppercase tracking-[0.25em] font-bold mb-3">
            <Flower className="w-4 h-4" />
            <span>{t.servicesSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-[0.02em]">
            {t.services}
          </h2>
          <div className="h-[1px] w-24 bg-[#7C8461] mx-auto mt-5" />
        </div>

        {/* Services bento grid layout with sharp right angles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group flex flex-col h-full rounded-none border overflow-hidden transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-[#1A1F16] border-[#272F22] hover:border-[#7C8461]/40' 
                  : 'bg-white border-[#E5DED4] hover:border-[#7C8461]/40'
              }`}
            >
              {/* Card Header Image */}
              <div className="relative aspect-[4:3] overflow-hidden bg-stone-100 rounded-none">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Lotus Spa Nepal therapy clinic`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                
                {/* Float badges - sharp square accent */}
                <span className="absolute top-4 left-4 bg-[#7C8461] text-white text-[9px] font-bold font-sans uppercase tracking-[0.2em] px-3 py-1 rounded-none shadow-none">
                  {service.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-xl font-serif text-white tracking-wide">
                    {service.price}
                  </span>
                  
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-white bg-[#121510]/95 px-2.5 py-1.5 rounded-none border border-[#7C8461]/30 font-sans tracking-wider uppercase">
                    <Timer className="w-3.5 h-3.5 text-[#7C8461]" />
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow space-y-5">
                <h3 className={`text-lg font-serif font-semibold group-hover:text-[#7C8461] transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-[#2D2D2D]'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-xs sm:text-sm leading-relaxed flex-grow line-clamp-3 ${
                  theme === 'dark' ? 'text-[#A2A994]' : 'text-[#666]'
                }`}>
                  {service.desc}
                </p>

                {/* Micro listing of premium parameters with organic sage circles */}
                <div className="space-y-2.5 pt-4 border-t border-[#E5DED4] dark:border-[#272F22]">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C8461]" />
                      <span className={theme === 'dark' ? 'text-[#DCE0D4]' : 'text-[#444]'}>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#booking-section"
                    className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] hover:text-[#6b7352]"
                  >
                    <span>{currentLang === 'EN' ? 'Configure Therapy' : 'थप थेरापी अनुकूलन'}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
