"use client";

import React from "react";
import { translations } from "@/lib/translations";
import {
  Flower,
  Facebook,
  Phone,
  Compass,
  Copyright,
  ShieldCheck,
  Heart,
} from "lucide-react";
import Link from "next/link";

interface FooterProps {
  currentLang: "EN" | "NP";
  theme: "light" | "dark";
}

export default function Footer({ currentLang, theme }: FooterProps) {
  const t = translations[currentLang];

  return (
    <footer
      id="main-footer"
      className={`border-t py-16 transition-colors duration-300 relative ${
        theme === "dark"
          ? "bg-[#121510] text-[#A2A994] border-[#272F22]"
          : "bg-[#FDFBF7] text-[#666] border-[#E5DED4]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12 text-sm">
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-none bg-[#7C8461] text-white">
                <Flower className="w-4 h-4" />
              </div>
              <span
                className={`font-serif font-semibold text-lg tracking-wide ${theme === "dark" ? "text-white" : "text-[#2D2D2D]"}`}
              >
                {t.brandName}
              </span>
            </div>

            <p className="leading-relaxed text-xs max-w-sm font-sans">
              {currentLang === "EN"
                ? "Nepal's premium luxury spa network committed to physical transformation and spiritual balance. Relive chronic muscle pain and experience serene natural healing."
                : "शारीरिक मानसिक रुपान्तरण र आध्यात्मिक सन्तुलनका लागि नेपालको अग्रणी लक्जरी स्पा नेटवर्क। शरीरको थकान मेटाउनुहोस् र प्राकृतिक उपचारको आनन्द लिनुहोस्।"}
            </p>

            {/* Structured Local Maps Schema or Search Anchor */}
            <div className="space-y-1 text-xs font-sans">
              <p className="font-bold opacity-80">{t.openingHours}</p>
              <p className="opacity-70">Sunsari, Morang, & Lalitpur, Nepal</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4
              className={`font-sans font-bold uppercase text-[10px] tracking-[0.2em] ${
                theme === "dark" ? "text-white" : "text-[#2D2D2D]"
              }`}
            >
              {currentLang === "EN" ? "Holistic Therapies" : "हाम्रा सेवाहरू"}
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link
                  href="#services-section"
                  className="hover:text-[#7C8461] transition-colors block"
                >
                  Ayurvedic Shirodhara
                </Link>
              </li>
              <li>
                <Link
                  href="#services-section"
                  className="hover:text-[#7C8461] transition-colors block"
                >
                  Deep Tissue Massage
                </Link>
              </li>
              <li>
                <Link
                  href="#services-section"
                  className="hover:text-[#7C8461] transition-colors block"
                >
                  Traditional Thai Massage
                </Link>
              </li>
              <li>
                <Link
                  href="#services-section"
                  className="hover:text-[#7C8461] transition-colors block"
                >
                  Pine Sauna & Eucalyptus Steam
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Maps Anchor Column */}
          <div className="md:col-span-4 space-y-4">
            <h4
              className={`font-sans font-bold uppercase text-[10px] tracking-[0.2em] ${
                theme === "dark" ? "text-white" : "text-[#2D2D2D]"
              }`}
            >
              {currentLang === "EN"
                ? "Official Channels"
                : "आधिकारिक च्यानलहरू"}
            </h4>

            <div className="flex flex-col gap-3 text-xs">
              {/* Facebook Link as specified */}
              <a
                href="https://www.facebook.com/profile.php?id=61560587733359"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-none border flex items-center gap-3 transition-all hover:border-[#7C8461]/60 ${
                  theme === "dark"
                    ? "bg-[#1A1F16] border-[#272F22]"
                    : "bg-white border-[#E5DED4]"
                }`}
              >
                <Facebook className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div className="font-sans">
                  <p className="font-bold">Lotus Spa on Facebook</p>
                  <p className="text-[10px] opacity-75">
                    Connect, review deals & photos
                  </p>
                </div>
              </a>

              {/* Itahari Maps Link */}
              <a
                href="https://www.google.com/maps/place/LOTUS+SPA+ITAHARI/@26.6684105,87.2519187,17z/data=!3m1!4b1!4m6!3m5!1s0x39ef6db1bbbefb91:0x5ccff4030eb4a6ea!8m2!3d26.6684105!4d87.254499"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-none border flex items-center gap-3 transition-all hover:border-[#7C8461]/60 ${
                  theme === "dark"
                    ? "bg-[#1A1F16] border-[#272F22]"
                    : "bg-white border-[#E5DED4]"
                }`}
              >
                <Compass className="w-5 h-5 text-[#7C8461] flex-shrink-0" />
                <div className="font-sans">
                  <p className="font-bold">Itahari Flagship G-Maps</p>
                  <p className="text-[10px] opacity-75">
                    Navigate route from Dharan Road
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 mt-8 border-t border-[#E5DED4]/60 dark:border-[#272F22]/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-sans">
          <div className="flex items-center gap-1 opacity-80">
            <Copyright className="w-3.5 h-3.5" />
            <span>
              2026 {t.brandName}. All rights reserved. Registered in Nepal.
            </span>
          </div>

          <div className="flex items-center gap-4 font-semibold">
            <span className="flex items-center gap-1 text-[#7C8461]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>
                {currentLang === "EN"
                  ? "Govt Certified"
                  : "प्रमाणित स्पा केन्द्र"}
              </span>
            </span>
            <span className="flex items-center gap-1 font-medium opacity-80">
              <span>Made in Nepal</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
