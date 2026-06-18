'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Branches from '@/components/Branches';
import BookingForm from '@/components/BookingForm';
import FloatingChat from '@/components/FloatingChat';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<'EN' | 'NP'>('EN');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isMounted, setIsMounted] = useState(false);

  // Sync theme and language choices from localStorage post-mount
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
      
      const storedTheme = localStorage.getItem('lotus_theme') as 'light' | 'dark' | null;
      const storedLang = localStorage.getItem('lotus_lang') as 'EN' | 'NP' | null;
      
      if (storedTheme) {
        setTheme(storedTheme);
      }
      if (storedLang) {
        setLang(storedLang);
      }
    }, 0);
  }, []);

  // Write changes back to localStorage
  const handleLangToggle = (selectedLang: 'EN' | 'NP') => {
    setLang(selectedLang);
    localStorage.setItem('lotus_lang', selectedLang);
  };

  const handleThemeToggle = (selectedTheme: 'light' | 'dark') => {
    setTheme(selectedTheme);
    localStorage.setItem('lotus_theme', selectedTheme);
  };

  // Hydration guard to avoid server/client mismatch flashes
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#121510] flex flex-col items-center justify-center text-white/80 font-sans text-xs uppercase tracking-[0.2em]">
        <div className="flex gap-2 items-center">
          <span className="w-1.5 h-1.5 bg-[#7C8461] animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-1.5 h-1.5 bg-[#7C8461] animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-1.5 h-1.5 bg-[#7C8461] animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="mt-5 text-[10px] opacity-60">Namaste · Loading Serenity...</p>
      </div>
    );
  }

  // SEO-Optimized Structured Data Schema (JSON-LD) for Search Engine Crawlers
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Lotus Spa Itahari",
    "image": "https://ais-dev-gosismfrsp6kgu4w6qt6cx-808355507997.asia-east1.run.app/images/lotus_spa_hero.png",
    "@id": "https://www.facebook.com/profile.php?id=61560587733359",
    "url": "https://www.facebook.com/profile.php?id=61560587733359",
    "telephone": "+97725580432",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Chowk, Dharan Road (Opposite Rastriya Banijya Bank)",
      "addressLocality": "Itahari",
      "addressRegion": "Sunsari",
      "postalCode": "56705",
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.6684105,
      "longitude": 87.254499
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61560587733359",
      "https://www.google.com/maps/place/LOTUS+SPA+ITAHARI/@26.6684105,87.2519187,17z/data=!3m1!4b1!4m6!3m5!1s0x39ef6db1bbbefb91:0x5ccff4030eb4a6ea!8m2!3d26.6684105!4d87.254499"
    ]
  };

  return (
    <div id="website-container" className={`min-h-screen transition-all duration-300 ${
      theme === 'dark' ? 'bg-[#121510] text-[#ECEAE2]' : 'bg-[#FDFBF7] text-[#2D2D2D]'
    }`}>
      
      {/* Inject Structured SEO JSON-LD on client-side header */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />

      {/* Header and Controls */}
      <Header 
        currentLang={lang} 
        setLang={handleLangToggle} 
        theme={theme} 
        setTheme={handleThemeToggle} 
      />

      {/* Main Sections flow */}
      <main id="main-content">
        
        {/* Hero Segment */}
        <Hero currentLang={lang} theme={theme} />

        {/* Why Choose Us Values */}
        <WhyChooseUs currentLang={lang} theme={theme} />

        {/* Holistic Wellness Services Catalogue */}
        <Services currentLang={lang} theme={theme} />

        {/* Modular Interactive Booking Room */}
        <BookingForm currentLang={lang} theme={theme} />

        {/* Branches Portal Section */}
        <Branches currentLang={lang} theme={theme} />

      </main>

      {/* Global Footer */}
      <Footer currentLang={lang} theme={theme} />

      {/* Float Wellness Assistant (Gemini powered Chat) */}
      <FloatingChat currentLang={lang} theme={theme} />

    </div>
  );
}
