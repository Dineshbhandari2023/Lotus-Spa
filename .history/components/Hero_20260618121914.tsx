"use client";

import React from "react";
import { translations } from "@/lib/translations";
import { motion } from "motion/react";
import { Sparkles, Calendar, ArrowRight, Activity, MapPin } from "lucide-react";

interface HeroProps {
  currentLang: "EN" | "NP";
  theme: "light" | "dark";
}

export default function Hero({ currentLang, theme }: HeroProps) {
  const t = translations[currentLang];

  return (
    <section
      id="hero-section"
      className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#121510] text-[#ECEAE2] border-[#272F22]"
          : "bg-[#FDFBF7] text-[#2D2D2D] border-[#E5DED4]"
      }`}
    >
      {/* Geometric circular wireframes from theme recipe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className={`w-[450px] h-[450px] border rounded-full flex items-center justify-center opacity-30 ${
            theme === "dark" ? "border-[#7C8461]/20" : "border-[#E5DED4]"
          }`}
        >
          <div
            className={`w-[300px] h-[300px] border rounded-full ${
              theme === "dark" ? "border-[#7C8461]/10" : "border-[#E5DED4]/60"
            }`}
          />
        </div>
        {/* Subtle glowing fields */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#7C8461]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7C8461]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy Area */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-2">
            {/* Quick announcement pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-none w-fit text-[10px] font-sans font-bold uppercase tracking-[0.2em] border ${
                theme === "dark"
                  ? "bg-[#1A1F16] border-[#7C8461]/35 text-[#7C8461]"
                  : "bg-[#F8F6F2] border-[#E5DED4] text-[#7C8461]"
              }`}
            >
              {/* <Sparkles className="w-3.5 h-3.5" /> */}
              {/* <span>{t.brandTagline}</span> */}
            </motion.div>

            {/* Giant Title: Editorial Serif Display Style */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-[0.02em]"
            >
              {currentLang === "EN" ? (
                <>
                  Sanctuary of <br />
                  <span className="italic font-normal text-[#7C8461]">
                    Inner Harmony
                  </span>{" "}
                  & Polish
                </>
              ) : (
                <>
                  मस्तिष्क र शरीरको <br />
                  <span className="italic font-normal text-[#7C8461]">
                    वास्तविक सन्तुलन
                  </span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-sm sm:text-base leading-relaxed max-w-xl font-sans ${
                theme === "dark" ? "text-[#A2A994]" : "text-[#555]"
              }`}
            >
              {t.heroSubheadline}
            </motion.p>

            {/* CTA Buttons: Geometric Minimal Stripped Corners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#booking-section"
                className="flex items-center justify-center gap-2 bg-[#7C8461] hover:bg-[#6b7352] text-white font-sans text-xs tracking-[0.2em] font-bold uppercase px-8 py-4 rounded-none transition-colors shadow-none"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookNow}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services-section"
                className={`flex items-center justify-center gap-2 font-sans text-xs tracking-[0.2em] font-bold uppercase px-8 py-4 rounded-none transition-colors border ${
                  theme === "dark"
                    ? "border-[#272F22] text-[#ECEAE2] bg-[#1A1F16] hover:bg-[#272F22]"
                    : "border-[#E5DED4] text-[#2D2D2D] bg-white hover:bg-[#F8F6F2]"
                }`}
              >
                <span>{t.exploreServices}</span>
              </a>
            </motion.div>

            {/* Trust factors */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-dashed ${
                theme === "dark" ? "border-[#272F22]" : "border-[#E5DED4]"
              }`}
            >
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#7C8461]" />
                <span className="text-[10px] font-bold font-sans tracking-[0.15em] uppercase opacity-80">
                  {currentLang === "EN"
                    ? "Ayurvedic Excellence"
                    : "आयुर्वेदिक विशेषज्ञता"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#7C8461]" />
                <span className="text-[10px] font-bold font-sans tracking-[0.15em] uppercase opacity-80">
                  {currentLang === "EN"
                    ? "4 Eastern Branches"
                    : "४ पूर्व शाखाहरू"}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Picture Graphic Area (16:9 Right Block) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div
              className={`p-4 rounded-none border ${
                theme === "dark"
                  ? "bg-[#1A1F16]/60 border-[#272F22]"
                  : "bg-white border-[#E5DED4]"
              }`}
            >
              {/* Main Custom Image */}
              <div className="aspect-[16:9] relative w-full overflow-hidden rounded-none bg-stone-100">
                <img
                  src="/images/lotus_spa_hero.png"
                  alt="Lotus Spa serene luxury massage room background"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />

                {/* Floating localized brand tag */}
                <div className="absolute bottom-3 left-3 bg-[#121510]/95 backdrop-blur-sm px-3 py-1.5 rounded-none border border-[#7C8461]/30 text-[9px] font-sans font-bold tracking-[0.2em] text-[#7C8461] uppercase">
                  Flagship - Itahari, Nepal
                </div>
              </div>

              {/* Booking preview indicator */}
              <div
                className={`p-4 mt-4 rounded-none flex items-center justify-between text-[9px] font-sans uppercase tracking-[0.15em] ${
                  theme === "dark"
                    ? "bg-[#121510]/80 text-[#A2A994]"
                    : "bg-[#F8F6F2] text-[#555]"
                }`}
              >
                <span>
                  {currentLang === "EN" ? "Hygienic Cabins" : "स्वच्छ क्याबिन"}
                </span>
                <span className="text-[#7C8461] font-bold">•</span>
                <span>
                  {currentLang === "EN" ? "Organic Herbs" : "जैविक जडीबुटी"}
                </span>
                <span className="text-[#7C8461] font-bold">•</span>
                <span>{currentLang === "EN" ? "Spa Sauna" : "साउना बाथ"}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
