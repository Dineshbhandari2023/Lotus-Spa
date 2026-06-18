"use client";

import React from "react";
import { translations } from "@/lib/translations";
import { Moon, Sun, Languages, PhoneCall, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  currentLang: "EN" | "NP";
  setLang: (lang: "EN" | "NP") => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export default function Header({
  currentLang,
  setLang,
  theme,
  setTheme,
}: HeaderProps) {
  const t = translations[currentLang];

  return (
    <header
      id="main-nav"
      className={`sticky top-0 z-50 transition-all duration-300 border-b backdrop-blur-md ${
        theme === "dark"
          ? "bg-[#121510]/90 text-[#ECEAE2] border-[#272F22]"
          : "bg-[#FDFBF7]/90 text-[#2D2D2D] border-[#E5DED4]"
      }`}
    >
      {/* Top micro-bar: Montserrat Bold tracking */}
      <div
        className={`hidden sm:flex text-xs py-2 px-4 justify-between items-center transition-colors border-b ${
          theme === "dark"
            ? "bg-[#1A1F16]/60 text-[#A2A994] border-[#272F22]"
            : "bg-[#F8F6F2] text-[#555] border-[#E5DED4]"
        }`}
      >
        <div className="flex items-center gap-1.5 font-sans tracking-[0.1em] uppercase text-[10px] font-bold">
          <Clock className="w-3.5 h-3.5 text-[#7C8461]" />
          <span>{t.openingHours}</span>
        </div>
        <div className="flex items-center gap-3 font-sans tracking-[0.1em] uppercase text-[10px] font-bold">
          <span>
            {t.phone}:{" "}
            <strong className="text-[#7C8461] font-black">
              +977-9801205933
            </strong>
          </span>
        </div>
      </div>

      {/* Main navigation area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="size-12 flex items-center justify-center"
          >
            <img
              src="/images/logo.png"
              alt="Lotus Spa Corporate Logo"
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div>
            {/* Brand Heading: Changed to font-sans and font-black (Extra Bold) */}
            <h1 className="font-sans font-black text-xl sm:text-2xl tracking-tighter uppercase leading-none">
              LOTUS<span className="text-[#ffd500]">SPA</span>
            </h1>
            <p className="text-[9px] hidden sm:block font-sans uppercase tracking-[0.25em] text-[#7C8461] font-bold mt-1">
              NEPAL {t.brandTagline}
            </p>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Nav Shortcuts: Pure Bold Montserrat */}
          <nav className="hidden lg:flex items-center gap-6 mr-4 text-[11px] uppercase tracking-[0.2em] font-sans font-bold">
            <a
              href="#services-section"
              className="hover:text-[#7C8461] transition-colors relative group"
            >
              {t.services}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7C8461] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#branches-section"
              className="hover:text-[#7C8461] transition-colors relative group"
            >
              {t.branchesTitle}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7C8461] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#booking-section"
              className="hover:text-[#7C8461] transition-colors relative group"
            >
              {t.booking}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7C8461] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#why-us-section"
              className="hover:text-[#7C8461] transition-colors relative group"
            >
              {t.whyUs}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7C8461] transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Language Toggle: Bold */}
          <button
            onClick={() => setLang(currentLang === "EN" ? "NP" : "EN")}
            className={`flex items-center gap-2 px-3 py-2 rounded-none text-[10px] font-sans font-bold uppercase tracking-[0.1em] transition-all border ${
              theme === "dark"
                ? "bg-[#1A1F16] border-[#272F22] text-[#ECEAE2] hover:bg-[#272F22]"
                : "bg-white border-[#E5DED4] text-[#2D2D2D] hover:bg-[#F8F6F2]"
            }`}
          >
            <Languages className="w-3.5 h-3.5 text-[#7C8461]" />
            <span>{currentLang === "EN" ? "नेपाली" : "English"}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2.5 rounded-none border transition-all ${
              theme === "dark"
                ? "bg-[#1A1F16] border-[#272F22] text-[#7C8461] hover:bg-[#272F22]"
                : "bg-white border-[#E5DED4] text-[#2D2D2D] hover:bg-[#F8F6F2]"
            }`}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Primary CTA: Black Weight Montserrat */}
          <motion.a
            whileTap={{ scale: 0.97 }}
            href="#booking-section"
            className="hidden md:flex items-center gap-2 bg-[#7C8461] hover:bg-[#6b7352] text-white text-[10px] font-sans font-black uppercase tracking-[0.15em] px-6 py-3.5 rounded-none transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            {t.bookNow}
          </motion.a>
        </div>
      </div>
    </header>
  );
}
