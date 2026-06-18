'use client';

import React, { useState } from 'react';
import { translations } from '@/lib/translations';
import { MapPin, Phone, Clock, Compass, ExternalLink, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BranchesProps {
  currentLang: 'EN' | 'NP';
  theme: 'light' | 'dark';
}

export default function Branches({ currentLang, theme }: BranchesProps) {
  const t = translations[currentLang];
  const [activeBranchId, setActiveBranchId] = useState('itahari');

  const branches = [
    {
      id: 'itahari',
      name: t.itahariName,
      address: t.itahariAddress,
      phones: ['+977-25-580432', '+977-9801205933'],
      hours: t.openingHours,
      mapLink: 'https://www.google.com/maps/place/LOTUS+SPA+ITAHARI/@26.6684105,87.2519187,17z/data=!3m1!4b1!4m6!3m5!1s0x39ef6db1bbbefb91:0x5ccff4030eb4a6ea!8m2!3d26.6684105!4d87.254499!16s%2Fg%2F11w9_s544c',
      isFlagship: true,
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8596000000003!2d87.2519187!3d26.6684105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6db1bbbefb91%3A0x5ccff4030eb4a6ea!2sLOTUS%20SPA%20ITAHARI!5e0!3m2!1sen!2snp!4v1718012345678!5m2!1sen!2snp',
      perks: currentLang === 'EN'
        ? ['Largest double steam-room cabin', 'Flagship Master Therapists', 'Opposite Rastriya Banijya Bank']
        : ['सबैभन्दा ठूलो स्टीम कोठा क्याबिन', 'मुख्य विशेषज्ञ थेरापिस्टहरू', 'राष्ट्रिय वाणिज्य बैंक विपरित']
    },
    {
      id: 'dharan',
      name: t.dharanName,
      address: t.dharanAddress,
      phones: ['+977-25-525944'],
      hours: t.openingHours,
      mapLink: 'https://www.google.com/maps/search/Lotus+Spa+Dharan+Nepal',
      isFlagship: false,
      embedUrl: '',
      perks: currentLang === 'EN'
        ? ['Quiet forest-view cabins', 'Organic herbal facial lounge', 'Premium hot stone volcanic setup']
        : ['शान्त हरियाली दृश्य क्याबिन', 'अर्गानिक हर्बल फेसियल लाउन्ज', 'प्रिमियम हट स्टोन सेटिङ']
    },
    {
      id: 'biratnagar',
      name: t.biratnagarName,
      address: t.biratnagarAddress,
      phones: ['+977-21-460111'],
      hours: t.openingHours,
      mapLink: 'https://www.google.com/maps/search/Lotus+Spa+Biratnagar+Nepal',
      isFlagship: false,
      embedUrl: '',
      perks: currentLang === 'EN'
        ? ['Modern thermal pine sauna setup', 'Ayurvedic third-eye flow (Shirodhara)', 'Couple therapy luxury suites']
        : ['आधुनिक पाइन साउना बाथ', 'आयुर्वेदिक शिरोधारा कोठा', 'दम्पती लक्जरी थेरापी सुइट']
    },
    {
      id: 'kathmandu',
      name: t.kathmanduName,
      address: t.kathmanduAddress,
      phones: ['+977-01-5544299'],
      hours: 'Daily 10:00 AM - 9:00 PM',
      mapLink: 'https://www.google.com/maps/search/Lotus+Spa+Jhamsikhel+Lalitpur',
      isFlagship: false,
      embedUrl: '',
      perks: currentLang === 'EN'
        ? ['VIP clinical skin checkups', 'Infused Himalayan mineral salt therapy', 'Private parking & garden cafe']
        : ['विशिष्ट भीआईपी छाला परीक्षण', 'हिमाली खनिज नुन थेरापी कोठा', 'निजी पार्किङ र बगैचा क्याफे']
    }
  ];

  const activeBranch = branches.find(b => b.id === activeBranchId) || branches[0];

  return (
    <section 
      id="branches-section"
      className={`py-24 border-b transition-colors relative ${
        theme === 'dark' ? 'bg-[#121510] text-[#ECEAE2] border-[#272F22]' : 'bg-[#FDFBF7] text-[#2D2D2D] border-[#E5DED4]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title structure */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#7C8461] font-sans text-[10px] uppercase tracking-[0.25em] font-bold mb-3">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>{t.branchesSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-[0.02em]">
            {t.branchesTitle}
          </h2>
          <div className="h-[1px] w-24 bg-[#7C8461] mx-auto mt-5" />
        </div>

        {/* Dynamic Branch Controller Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Branch Select Tab Grid: Sharp Rectangular Cards */}
          <div className="lg:col-span-4 space-y-4">
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setActiveBranchId(b.id)}
                className={`w-full text-left p-5 rounded-none border transition-all flex justify-between items-center relative overflow-hidden ${
                  activeBranchId === b.id
                    ? theme === 'dark'
                      ? 'bg-[#1A1F16] border-[#7C8461]/40 text-white'
                      : 'bg-white border-[#7C8461]/40 text-[#2D2D2D]'
                    : theme === 'dark'
                      ? 'bg-[#1A1F16]/40 border-[#272F22] text-[#A2A994] hover:bg-[#1A1F16]'
                      : 'bg-white/70 border-[#E5DED4] text-[#444] hover:bg-[#FDFBF7]'
                }`}
              >
                {/* Visual active border line */}
                {activeBranchId === b.id && (
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#7C8461]" />
                )}

                <div className="space-y-1.5 pl-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-semibold text-base sm:text-lg tracking-wide">
                      {b.id === 'itahari' ? (currentLang === 'EN' ? 'Itahari' : 'इटहरी') : 
                       b.id === 'dharan' ? (currentLang === 'EN' ? 'Dharan' : 'धरान') : 
                       b.id === 'biratnagar' ? (currentLang === 'EN' ? 'Biratnagar' : 'विराटनगर') : 
                       (currentLang === 'EN' ? 'Kathmandu' : 'काठमाडौं')}
                    </span>
                    {b.isFlagship && (
                      <span className="text-[8px] font-sans font-bold bg-[#7C8461] text-white px-2 py-0.5 rounded-none uppercase tracking-widest">
                        {currentLang === 'EN' ? 'Flagship' : 'मुख्य'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs opacity-75 line-clamp-1 font-sans">{b.address}</p>
                </div>

                <MapPin className={`w-4 h-4 flex-shrink-0 transition-transform ${
                  activeBranchId === b.id ? 'text-[#7C8461] scale-110' : 'text-stone-450 opacity-60'
                }`} />
              </button>
            ))}
          </div>

          {/* Active Branch Display Detail Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBranchId}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className={`p-6 sm:p-8 rounded-none border ${
                  theme === 'dark' ? 'bg-[#1A1F16] border-[#272F22]' : 'bg-white border-[#E5DED4]'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Left Side: Copy parameters */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-semibold tracking-wide text-[#7C8461]">
                        {activeBranch.name}
                      </h3>
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        theme === 'dark' ? 'text-[#A2A994]' : 'text-[#666]'
                      }`}>
                        {activeBranch.address}
                      </p>
                    </div>

                    <div className="space-y-4 border-t border-dashed border-[#E5DED4] dark:border-[#272F22] pt-5">
                      
                      {/* Phones */}
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-[#7C8461] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#7C8461]">
                            {t.phone}
                          </p>
                          <div className="flex flex-col gap-1 mt-1 font-sans">
                            {activeBranch.phones.map((p, idx) => (
                              <a 
                                key={idx} 
                                href={`tel:${p.replace(/\s+/g, '')}`} 
                                className="text-xs sm:text-sm font-semibold hover:text-[#7C8461] hover:underline transition-colors block"
                              >
                                {p}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-[#7C8461] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#7C8461]">
                            {currentLang === 'EN' ? 'Timing' : 'समय'}
                          </p>
                          <p className="text-xs sm:text-sm font-medium mt-0.5">
                            {activeBranch.hours}
                          </p>
                        </div>
                      </div>

                      {/* Branch-specific specialty perks */}
                      <div className="space-y-2 pt-2">
                        {activeBranch.perks.map((p, pIdx) => (
                          <div key={pIdx} className={`text-xs flex items-center gap-2 p-2 rounded-none border ${
                            theme === 'dark' ? 'bg-[#121510]/60 border-[#272F22]' : 'bg-[#F8F6F2] border-[#E5DED4]'
                          }`}>
                            <span className="w-1 h-1 bg-[#7C8461]" />
                            <span className="font-medium opacity-90">{p}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="pt-3 flex flex-wrap gap-4">
                      <a
                        href={activeBranch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[9px] font-sans font-bold uppercase tracking-[0.2em] bg-[#7C8461] hover:bg-[#6b7352] text-white px-5 py-3 rounded-none transition-all"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>{t.itahariMap}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <a
                        href="#booking-section"
                        className={`inline-flex items-center gap-1.5 text-[9px] font-sans font-bold uppercase tracking-[0.2em] px-5 py-3 rounded-none transition-all border ${
                          theme === 'dark'
                            ? 'bg-[#121510] border-[#272F22] hover:bg-[#1A1F16]'
                            : 'bg-white border-[#E5DED4] hover:bg-[#F8F6F2]'
                        }`}
                      >
                        <CalendarDays className="w-3.5 h-3.5 text-[#7C8461]" />
                        <span>{currentLang === 'EN' ? 'Book This Cabin' : 'यो क्याबिन बुक गर्नुहोस्'}</span>
                      </a>
                    </div>

                  </div>

                  {/* Right Side: Map Embed Mock / Embed Frame */}
                  <div className="relative rounded-none overflow-hidden border border-[#E5DED4] dark:border-[#272F22] min-h-[250px] bg-stone-100 flex flex-col justify-between">
                    {/* If we have itahari flagship we load the real official map embedded. Otherwise we load a beautiful visual layout representing a locator with high design polish! */}
                    {activeBranch.id === 'itahari' ? (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8596000000003!2d87.2519187!3d26.6684105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6db1bbbefb91%3A0x5ccff4030eb4a6ea!2sLOTUS%20SPA%20ITAHARI!5e0!3m2!1sen!2snp!4v1718012345678!5m2!1sen!2snp"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '300px' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#7C8461]/10 to-[#7C8461]/5">
                        <MapPin className="w-10 h-10 text-[#7C8461] animate-bounce mb-3" />
                        <h4 className="font-serif font-semibold text-base tracking-wide mb-1">
                          {activeBranch.name}
                        </h4>
                        <p className="text-xs opacity-70 max-w-xs mb-4 font-sans">
                          {activeBranch.address}
                        </p>
                        <span className="text-[8px] font-sans tracking-[0.2em] text-[#7C8461] uppercase font-bold bg-[#7C8461]/10 px-2.5 py-1.5 rounded-none border border-[#7C8461]/25">
                          {currentLang === 'EN' ? 'GPS Connected' : 'जिपीएस जडान गरिएको'}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
