"use client";

import React from "react";
import { translations } from "@/lib/translations";
import { Moon, Sun, Languages, PhoneCall, Clock } from "lucide-react";
import { motion } from "motion/react";

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
          ? "bg-[#121510]/95 text-[#ECEAE2] border-[#272F22]"
          : "bg-[#FDFBF7]/95 text-[#2D2D2D] border-[#E5DED4]"
      }`}
    >
      {/* Top micro-bar: Minimalist Montserrat Corporate Style */}
      <div
        className={`hidden sm:flex text-[10px] py-2 px-4 justify-between items-center transition-colors border-b font-bold tracking-[0.15em] uppercase ${
          theme === "dark"
            ? "bg-[#1A1F16]/60 text-[#A2A994] border-[#272F22]"
            : "bg-[#F8F6F2] text-[#555] border-[#E5DED4]"
        }`}
      >
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-[#7C8461]" />
          <span>{t.openingHours}</span>
        </div>
        <div className="flex items-center gap-4">
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
          {/* Logo with Framer Motion Interaction */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative size-12 sm:size-14 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/logo.png"
              alt="Lotus Spa Logo"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div>
            {/* Brand Title: Montserrat Black (900) */}
            <h1 className="font-sans font-black text-xl sm:text-2xl tracking-tighter uppercase leading-none">
              LOTUS <span className="text-[rgb(255,217,0)]">SPA</span>
            </h1>
            <p className="text-[9px] hidden sm:block font-bold uppercase tracking-[0.3em] text-[#7C8461] mt-1">
              ITAHARI • NEPAL •{" "}
              {currentLang === "EN" ? "PREMIUM WELLNESS" : "प्रिमियम कल्याण"}
            </p>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Main Nav: Montserrat Bold */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
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
              href="#why-us-section"
              className="hover:text-[#7C8461] transition-colors relative group"
            >
              {t.whyUs}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7C8461] transition-all group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center gap-2 border-l pl-2 sm:pl-6 border-[#E5DED4] dark:border-[#272F22]">
            {/* Language Switcher */}
            <button
              onClick={() => setLang(currentLang === "EN" ? "NP" : "EN")}
              className={`flex items-center gap-2 px-3 py-2 text-[10px] font-black uppercase tracking-widest transition-all border ${
                theme === "dark"
                  ? "bg-[#1A1F16] border-[#272F22] text-[#ECEAE2] hover:border-[#7C8461]/50"
                  : "bg-white border-[#E5DED4] text-[#2D2D2D] hover:bg-[#F8F6F2]"
              }`}
            >
              <Languages className="w-3.5 h-3.5 text-[#7C8461]" />
              <span>{currentLang === "EN" ? "नेपाली" : "EN"}</span>
            </button>

            {/* Theme switcher */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2.5 border transition-all ${
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

            {/* CTA Header Button: Bold Minimalist */}
            <a
              href="#booking-section"
              className="hidden md:flex items-center gap-2 bg-[#7C8461] hover:bg-[#6b7352] text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              {t.bookNow}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

const Languages = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 8 6 6" />
    <path d="m4 14 6-6 2-3" />
    <path d="M2 5h12" />
    <path d="M7 2h1" />
    <path d="m22 22-5-10-5 10" />
    <path d="M14 18h6" />
  </svg>
);
