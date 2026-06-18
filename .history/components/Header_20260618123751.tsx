"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { translations } from "@/lib/translations";
import {
  Moon,
  Sun,
  PhoneCall,
  Clock,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dynamic therapies list to match the Services section
  const therapiesList = [
    {
      id: "ayurvedic",
      name: currentLang === "EN" ? "Ayurvedic Treatment" : "आयुर्वेदिक थेरापी",
      price: currentLang === "EN" ? "NPR 4,500" : "रु. ४,५००",
      duration: "90 Mins",
    },
    {
      id: "deep-tissue",
      name: currentLang === "EN" ? "Deep Tissue Massage" : "डीप टिस्यु मसाज",
      price: currentLang === "EN" ? "NPR 3,800" : "रु. ३,८००",
      duration: "60/90 Mins",
    },
    {
      id: "thai-stretch",
      name: currentLang === "EN" ? "Traditional Thai Stretch" : "थाई स्ट्रेचिङ",
      price: currentLang === "EN" ? "NPR 3,000" : "रु. ३,०००",
      duration: "60 Mins",
    },
    {
      id: "hot-stone",
      name: currentLang === "EN" ? "Premium Hot Stone" : "हट स्टोन थेरापी",
      price: currentLang === "EN" ? "NPR 5,000" : "रु. ५,०००",
      duration: "90 Mins",
    },
    {
      id: "organic-facial",
      name: currentLang === "EN" ? "Organic Lotus Facial" : "लोटस फेसियल",
      price: currentLang === "EN" ? "NPR 2,500" : "रु. २,५००",
      duration: "60 Mins",
    },
    {
      id: "steam-sauna",
      name: currentLang === "EN" ? "Himalayan Steam & Sauna" : "स्टीम र साउना",
      price: currentLang === "EN" ? "NPR 1,200" : "रु. १,२००",
      duration: "30/45 Mins",
    },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      id="main-nav"
      className={`sticky top-0 z-50 transition-all duration-300 border-b backdrop-blur-md ${
        theme === "dark"
          ? "bg-[#121510]/95 text-[#ECEAE2] border-[#272F22]"
          : "bg-[#FDFBF7]/95 text-[#2D2D2D] border-[#E5DED4]"
      }`}
    >
      {/* Top micro-bar */}
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
            <h1 className="font-sans font-black text-xl sm:text-2xl tracking-tighter uppercase leading-none">
              LOTUS <span className="text-[#7C8461]">SPA</span>
            </h1>
            <p className="text-[9px] hidden sm:block font-bold uppercase tracking-[0.3em] text-[#7C8461] mt-1">
              ITAHARI • NEPAL •{" "}
              {currentLang === "EN" ? "PREMIUM WELLNESS" : "प्रिमियम कल्याण"}
            </p>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
            {/* Professional Animated Dropdown Menu for Therapies */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-[#7C8461] transition-colors flex items-center gap-1.5 uppercase tracking-[0.2em] font-bold py-2 focus:outline-none"
              >
                <span>
                  {currentLang === "EN" ? "Our Therapies" : "हाम्रा थेरापीहरू"}
                </span>
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className={`absolute left-0 mt-2 w-80 border shadow-xl rounded-none py-2 z-50 ${
                      theme === "dark"
                        ? "bg-[#1A1F16] border-[#272F22] text-[#ECEAE2]"
                        : "bg-white border-[#E5DED4] text-[#2D2D2D]"
                    }`}
                  >
                    <div className="px-4 py-2 border-b border-dashed border-[#E5DED4] dark:border-[#272F22] flex items-center gap-1.5 text-[9px] tracking-[0.15em] text-[#7C8461] uppercase font-black">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      <span>
                        {currentLang === "EN"
                          ? "Select Treatment Style"
                          : "थेरापी शैली छनौट गर्नुहोस्"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 divide-y divide-[#E5DED4]/40 dark:divide-[#272F22]/40 max-h-[360px] overflow-y-auto">
                      {therapiesList.map((therapy) => (
                        <Link
                          key={therapy.id}
                          href={`/therapies/${therapy.id}`} // Routes to the dynamic detail page cleanly
                          onClick={() => setDropdownOpen(false)}
                          className={`px-4 py-3 text-left block transition-all ${
                            theme === "dark"
                              ? "hover:bg-[#121510] hover:text-[#7C8461]"
                              : "hover:bg-[#F8F6F2] hover:text-[#7C8461]"
                          }`}
                        >
                          <div className="font-bold text-xs tracking-wide uppercase">
                            {therapy.name}
                          </div>
                          {/* <div className="flex justify-between items-center mt-1 text-[10px] font-semibold opacity-75">
                            <span className="text-[#7C8461] font-black">
                              {therapy.price}
                            </span>
                            <span>{therapy.duration}</span>
                          </div> */}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              {/* <Languages className="w-3.5 h-3.5 text-[#7C8461]" /> */}
              <span>{currentLang === "EN" ? "नेपाली" : "EN"}</span>
            </button>

            {/* Theme Switcher */}
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

            {/* CTA Header Button */}
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

const Language = (props: any) => (
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
