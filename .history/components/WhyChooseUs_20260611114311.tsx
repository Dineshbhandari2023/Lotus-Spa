"use client";

import React from "react";
import { translations } from "@/lib/translations";
import { Users, HeartPulse, Sparkles, Star, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

interface WhyChooseUsProps {
  currentLang: "EN" | "NP";
  theme: "light" | "dark";
}

export default function WhyChooseUs({ currentLang, theme }: WhyChooseUsProps) {
  const t = translations[currentLang];

  const highlights = [
    {
      icon: Users,
      title: t.certifiedTherapists,
      desc: t.certifiedTherapistsDesc,
      color: "text-[#7C8461] bg-[#7C8461]/10 border-[#7C8461]/20",
    },
    {
      icon: HeartPulse,
      title: t.pureOils,
      desc: t.pureOilsDesc,
      color: "text-[#7C8461] bg-[#7C8461]/10 border-[#7C8461]/20",
    },
    {
      icon: Sparkles,
      title: t.hygienicEnv,
      desc: t.hygienicEnvDesc,
      color: "text-[#7C8461] bg-[#7C8461]/10 border-[#7C8461]/20",
    },
    {
      icon: Star,
      title: t.authenticHealing,
      desc: t.authenticHealingDesc,
      color: "text-[#7C8461] bg-[#7C8461]/10 border-[#7C8461]/20",
    },
  ];

  return (
    <section
      id="why-us-section"
      className={`py-24 border-b transition-colors relative ${
        theme === "dark"
          ? "bg-[#121510] text-[#ECEAE2] border-[#272F22]"
          : "bg-[#FDFBF7] text-[#2D2D2D] border-[#E5DED4]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header Component */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#7C8461] text-[10px] uppercase tracking-[0.25em] font-bold mb-3">
            <Sparkle className="w-4 h-4" />
            <span>{t.whyUs}</span>
          </div>
          {/* Main bold Montserrat Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight uppercase">
            {currentLang === "EN"
              ? "Redefining Eastern Wellness Standards"
              : "कल्याण र स्वास्थ्यको नयाँ स्तर"}
          </h2>
          <div className="h-[2px] w-20 bg-[#7C8461] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#E5DED4] dark:bg-[#272F22] border border-[#E5DED4] dark:border-[#272F22]">
          {highlights.map((h, idx) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-8 rounded-none transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#1A1F16] text-[#ECEAE2] hover:bg-[#21271D]"
                    : "bg-white text-[#2D2D2D] hover:bg-[#FDFBF7]"
                }`}
              >
                <div
                  className={`p-3.5 rounded-none border w-fit ${h.color} mb-6`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm uppercase tracking-[0.1em] font-bold mb-3">
                  {h.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed font-medium ${
                    theme === "dark" ? "text-[#A2A994]" : "text-[#666]"
                  }`}
                >
                  {h.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
