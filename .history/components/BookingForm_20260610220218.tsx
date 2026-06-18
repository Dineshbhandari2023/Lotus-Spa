'use client';

import React, { useState, useEffect } from 'react';
import { translations } from '@/lib/translations';
import { Sparkles, Calendar, User, Phone, Check, Receipt, Tag, History, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingFormProps {
  currentLang: 'EN' | 'NP';
  theme: 'light' | 'dark';
}

interface SavedBooking {
  id: string;
  serviceId: string;
  serviceName: string;
  branchId: string;
  branchName: string;
  duration: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
  extraSteam: boolean;
  extraAroma: boolean;
  priceEstimate: number;
  timestamp: string;
}

export default function BookingForm({ currentLang, theme }: BookingFormProps) {
  const t = translations[currentLang];

  // Form states
  const [selectedService, setSelectedService] = useState('ayurvedic');
  const [selectedBranch, setSelectedBranch] = useState('itahari');
  const [duration, setDuration] = useState('90');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [extraSteam, setExtraSteam] = useState(false);
  const [extraAroma, setExtraAroma] = useState(false);

  const [bookingHistory, setBookingHistory] = useState<SavedBooking[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastBookingId, setLastBookingId] = useState('');

  // Service options with pricing multipliers
  const servicesList = [
    { id: 'ayurvedic', name: t.ayurvedicTitle, basePrice: 4500 },
    { id: 'deep-tissue', name: t.deepTissueTitle, basePrice: 3800 },
    { id: 'thai-stretch', name: t.thaiMassageTitle, basePrice: 3000 },
    { id: 'hot-stone', name: t.hotStoneTitle, basePrice: 5000 },
    { id: 'organic-facial', name: t.facialTitle, basePrice: 2500 },
    { id: 'steam-sauna', name: t.steamSaunaTitle, basePrice: 1200 },
  ];

  const branchesList = [
    { id: 'itahari', name: t.itahariName },
    { id: 'dharan', name: t.dharanName },
    { id: 'biratnagar', name: t.biratnagarName },
    { id: 'kathmandu', name: t.kathmanduName },
  ];

  // Calculate pricing
  const calculatePrice = () => {
    const service = servicesList.find((s) => s.id === selectedService) || servicesList[0];
    let price = service.basePrice;

    // Adjust price by duration
    if (duration === '60' && selectedService !== 'steam-sauna' && selectedService !== 'organic-facial') {
      price = price * 0.8; // shorter duration is 20% cheaper
    } else if (duration === '120') {
      price = price * 1.5; // double session
    }

    // Add extras
    if (extraSteam) price += 1200;
    if (extraAroma) price += 800;

    return Math.round(price);
  };

  const currentPrice = calculatePrice();

  // Load history on mount
  useEffect(() => {
    const stored = localStorage.getItem('lotus_bookings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setTimeout(() => {
          setBookingHistory(parsed);
        }, 0);
      } catch (e) {
        console.error("Error reading bookings from local storage", e);
      }
    }
  }, []);

  // Save booking handler
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNum || !date || !time) {
      alert(currentLang === 'EN' ? 'Please complete all required fields.' : 'कृपया सबै आवश्यक विवरणहरू भर्नुहोस्।');
      return;
    }

    const curService = servicesList.find((s) => s.id === selectedService) || servicesList[0];
    const curBranch = branchesList.find((b) => b.id === selectedBranch) || branchesList[0];

    const newBooking: SavedBooking = {
      id: 'LOTUS-' + Math.floor(1000 + Math.random() * 9000),
      serviceId: selectedService,
      serviceName: curService.name,
      branchId: selectedBranch,
      branchName: curBranch.name,
      duration: `${duration} ${currentLang === 'EN' ? 'Mins' : 'मिनेट'}`,
      date,
      time,
      customerName: fullName,
      customerPhone: phoneNum,
      extraSteam,
      extraAroma,
      priceEstimate: currentPrice,
      timestamp: new Date().toLocaleDateString(currentLang === 'EN' ? 'en-US' : 'ne-NP'),
    };

    const updatedHistory = [newBooking, ...bookingHistory];
    setBookingHistory(updatedHistory);
    localStorage.setItem('lotus_bookings', JSON.stringify(updatedHistory));

    setLastBookingId(newBooking.id);
    setShowSuccess(true);

    // Reset customer fields
    setFullName('');
    setPhoneNum('');
    setDate('');
    setTime('');
    setExtraSteam(false);
    setExtraAroma(false);

    // Auto fade success alert after 10 secs
    setTimeout(() => {
      setShowSuccess(false);
    }, 10000);
  };

  const deleteBooking = (id: string) => {
    const refreshed = bookingHistory.filter((b) => b.id !== id);
    setBookingHistory(refreshed);
    localStorage.setItem('lotus_bookings', JSON.stringify(refreshed));
  };

  return (
    <section 
      id="booking-section"
      className={`py-24 border-b transition-colors relative ${
        theme === 'dark' ? 'bg-[#121510] text-[#ECEAE2] border-[#272F22]' : 'bg-[#FDFBF7] text-[#2D2D2D] border-[#E5DED4]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#7C8461] font-sans text-[10px] uppercase tracking-[0.25em] font-bold mb-3">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>{t.bookingTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-[0.02em]">
            {t.bookingSubtitle}
          </h2>
          <div className="h-[1px] w-24 bg-[#7C8461] mx-auto mt-5" />
        </div>

        {/* Form and info container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Book Customizer Form - Sharp layout */}
          <form 
            onSubmit={handleBookingSubmit}
            className={`lg:col-span-7 p-6 sm:p-8 rounded-none border ${
              theme === 'dark' ? 'bg-[#1A1F16] border-[#272F22]' : 'bg-white border-[#E5DED4]'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Service Selection */}
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.selectService}
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={`w-full p-4 rounded-none border font-sans font-medium text-sm focus:outline-none focus:border-[#7C8461] ${
                    theme === 'dark' 
                      ? 'bg-[#121510] border-[#272F22] text-[#ECEAE2]' 
                      : 'bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]'
                  }`}
                >
                  {servicesList.map((s) => (
                    <option key={s.id} value={s.id} className="font-sans">
                      {s.name} ({currentLang === 'EN' ? `NPR ${s.basePrice}` : `रु. ${s.basePrice}`})
                    </option>
                  ))}
                </select>
              </div>

              {/* Branch Selector */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.selectBranch}
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className={`w-full p-4 rounded-none border font-sans font-medium text-sm focus:outline-none focus:border-[#7C8461] ${
                    theme === 'dark' 
                      ? 'bg-[#121510] border-[#272F22] text-[#ECEAE2]' 
                      : 'bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]'
                  }`}
                >
                  {branchesList.map((b) => (
                    <option key={b.id} value={b.id} className="font-sans">
                      {b.id === 'itahari' ? (currentLang === 'EN' ? 'Itahari Flagship' : 'इटहरी') : 
                       b.id === 'dharan' ? (currentLang === 'EN' ? 'Dharan' : 'धरान') : 
                       b.id === 'biratnagar' ? (currentLang === 'EN' ? 'Biratnagar' : 'विराटनगर') : 
                       (currentLang === 'EN' ? 'Kathmandu Suite' : 'काठमाडौं')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Session Duration */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.durationLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['60', '90', '120'].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setDuration(mins)}
                      className={`py-3.5 rounded-none text-xs font-sans font-bold tracking-wider border transition-all ${
                        duration === mins
                          ? 'bg-[#7C8461] text-white border-[#7C8461]'
                          : theme === 'dark'
                            ? 'bg-[#121510] border-[#272F22] text-[#A2A994] hover:bg-[#272F22]'
                            : 'bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      {mins} Min
                    </button>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.dateLabel} *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full pl-11 pr-4 py-4 rounded-none border text-sm font-sans focus:outline-none focus:border-[#7C8461] ${
                      theme === 'dark' 
                        ? 'bg-[#121510] border-[#272F22] text-[#ECEAE2]' 
                        : 'bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]'
                    }`}
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.timeLabel} *
                </label>
                <select
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={`w-full p-4 rounded-none border text-sm font-sans focus:outline-none focus:border-[#7C8461] ${
                    theme === 'dark' 
                      ? 'bg-[#121510] border-[#272F22] text-[#ECEAE2]' 
                      : 'bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]'
                  }`}
                >
                  <option value="">-- Choose Slot --</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:30 PM">01:30 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                </select>
              </div>

              {/* Add-ons checkbox row */}
              <div className="sm:col-span-2 space-y-3 pt-2">
                <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-1">
                  {currentLang === 'EN' ? 'Enhance Treatment' : 'उपचार विस्तारहरू'}
                </label>

                {/* Extra Steam */}
                <button
                  type="button"
                  onClick={() => setExtraSteam(!extraSteam)}
                  className={`w-full p-4 rounded-none border transition-all flex items-center justify-between text-left text-xs sm:text-sm font-sans font-medium ${
                    extraSteam
                      ? theme === 'dark'
                        ? 'bg-[#7C8461]/10 border-[#7C8461] text-[#7C8461]'
                        : 'bg-[#7C8461]/5 border-[#7C8461] text-[#7C8461]'
                      : theme === 'dark'
                        ? 'bg-[#121510] border-[#272F22] text-[#A2A994]'
                        : 'bg-[#F8F6F2] border-[#E5DED4] text-[#666] hover:bg-[#FDFBF7]'
                  }`}
                >
                  <span>{t.chooseExtraSteam}</span>
                  <div className={`w-4 h-4 rounded-none border flex items-center justify-center ${
                    extraSteam ? 'bg-[#7C8461] border-[#7C8461] text-white' : 'border-[#E5DED4]'
                  }`}>
                    {extraSteam && <Check className="w-3 h-3" />}
                  </div>
                </button>

                {/* Extra Aroma */}
                <button
                  type="button"
                  onClick={() => setExtraAroma(!extraAroma)}
                  className={`w-full p-4 rounded-none border transition-all flex items-center justify-between text-left text-xs sm:text-sm font-sans font-medium ${
                    extraAroma
                      ? theme === 'dark'
                        ? 'bg-[#7C8461]/10 border-[#7C8461] text-[#7C8461]'
                        : 'bg-[#7C8461]/5 border-[#7C8461] text-[#7C8461]'
                      : theme === 'dark'
                        ? 'bg-[#121510] border-[#272F22] text-[#A2A994]'
                        : 'bg-[#F8F6F2] border-[#E5DED4] text-[#666] hover:bg-[#FDFBF7]'
                  }`}
                >
                  <span>{t.chooseExtraAroma}</span>
                  <div className={`w-4 h-4 rounded-none border flex items-center justify-center ${
                    extraAroma ? 'bg-[#7C8461] border-[#7C8461] text-white' : 'border-[#E5DED4]'
                  }`}>
                    {extraAroma && <Check className="w-3 h-3" />}
                  </div>
                </button>
              </div>

              {/* Personal Details */}
              <div className="sm:col-span-2 border-t border-[#E5DED4] dark:border-[#272F22] pt-6">
                <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-4">
                  {currentLang === 'EN' ? 'Confirm Reservation Practitioner' : 'अपोइन्टमेन्ट पुष्टि गर्ने व्यक्ति'}
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-450" />
                    <input
                      type="text"
                      required
                      placeholder={t.fullNameLabel}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full pl-11 pr-4 py-4 rounded-none border text-sm font-sans focus:outline-none focus:border-[#7C8461] ${
                        theme === 'dark' 
                          ? 'bg-[#121510] border-[#272F22] text-[#ECEAE2] placeholder-[#A2A994]/50' 
                          : 'bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D] placeholder-stone-400'
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-450" />
                    <input
                      type="tel"
                      required
                      placeholder={t.phoneLabel}
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      className={`w-full pl-11 pr-4 py-4 rounded-none border text-sm font-sans focus:outline-none focus:border-[#7C8461] ${
                        theme === 'dark' 
                          ? 'bg-[#121510] border-[#272F22] text-[#ECEAE2] placeholder-[#A2A994]/50' 
                          : 'bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D] placeholder-stone-400'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Submit trigger */}
              <div className="sm:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#7C8461] hover:bg-[#6b7352] text-white font-sans font-bold uppercase tracking-[0.2em] text-[11px] p-5 rounded-none transition-all flex justify-center items-center gap-2"
                >
                  <Calendar className="w-5 h-5 animate-pulse" />
                  <span>{t.submitBooking}</span>
                </button>
              </div>

            </div>
          </form>

          {/* Right Side: Price checkout estimate description & dynamic saved history */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Live Pricing Summary Block */}
            <div className={`p-6 rounded-none border ${
              theme === 'dark' ? 'bg-[#1A1F16] border-[#272F22]' : 'bg-white border-[#E5DED4]'
            }`}>

              <div className="flex items-center gap-2.5 pb-4 border-b border-[#E5DED4] dark:border-[#272F22]">
                <Receipt className="w-4 h-4 text-[#7C8461]" />
                <h3 className="font-serif font-semibold text-lg tracking-wide text-[#7C8461]">
                  {t.customPackageSummary}
                </h3>
              </div>

              <div className="space-y-4 py-5 text-xs sm:text-sm font-sans">
                
                {/* Therapy selection item */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-[#7C8461]">
                      {servicesList.find((s) => s.id === selectedService)?.name}
                    </p>
                    <p className="text-xs opacity-60 mt-0.5 font-sans">
                      {duration} Mins Session
                    </p>
                  </div>
                  <span className="font-semibold font-serif">
                    {currentLang === 'EN' ? 'NPR' : 'रु.'} {servicesList.find((s) => s.id === selectedService)?.basePrice.toLocaleString()}
                  </span>
                </div>

                {/* Duration adjust offset if applicable */}
                {duration === '60' && selectedService !== 'steam-sauna' && selectedService !== 'organic-facial' && (
                  <div className="flex justify-between text-xs text-stone-500 font-sans">
                    <span>{currentLang === 'EN' ? '60 Mins Shorter Therapy Reduction' : '६० मिनेट छोटो समय छुट'} (-20%)</span>
                    <span>- {currentLang === 'EN' ? 'NPR' : 'रु.'} {Math.round((servicesList.find((s) => s.id === selectedService)?.basePrice || 0) * 0.2).toLocaleString()}</span>
                  </div>
                )}
                {duration === '120' && (
                  <div className="flex justify-between text-xs text-[#7C8461] font-semibold font-sans">
                    <span>{currentLang === 'EN' ? '120 Mins Extended Therapy Markup' : '१२० मिनेट थप समय थप'} (+50%)</span>
                    <span>+ {currentLang === 'EN' ? 'NPR' : 'रु.'} {Math.round((servicesList.find((s) => s.id === selectedService)?.basePrice || 0) * 0.5).toLocaleString()}</span>
                  </div>
                )}

                {/* Extras list */}
                {extraSteam && (
                  <div className="flex justify-between text-xs text-[#7C8461] font-sans">
                    <span>+ {currentLang === 'EN' ? 'Infused Steam & Pine Sauna' : 'बाफ र पाइन साउना थप'}</span>
                    <span className="font-semibold text-[#7C8461] font-serif">+ {currentLang === 'EN' ? 'NPR' : 'रु.'} 1,200</span>
                  </div>
                )}
                {extraAroma && (
                  <div className="flex justify-between text-xs text-[#7C8461] font-sans">
                    <span>+ {currentLang === 'EN' ? 'Premium Lavender Aroma Pack' : 'लक्जरी ल्याभेन्डर अरोमा प्याक थप'}</span>
                    <span className="font-semibold text-[#7C8461] font-serif">+ {currentLang === 'EN' ? 'NPR' : 'रु.'} 800</span>
                  </div>
                )}

                {/* Branch marker info */}
                <div className={`p-3 mt-2 rounded-none flex items-center gap-2 text-xs font-sans font-medium border ${
                  theme === 'dark' ? 'bg-[#121510] border-[#272F22] text-[#A2A994]' : 'bg-[#F8F6F2] border-[#E5DED4] text-[#666]'
                }`}>
                  <Tag className="w-3.5 h-3.5 text-[#7C8461]" />
                  <span className="line-clamp-1">
                    {currentLang === 'EN' ? 'Assigned Facility' : 'तोकिएको सेवा स्थान'}: {branchesList.find((b) => b.id === selectedBranch)?.name}
                  </span>
                </div>

              </div>

              {/* Total Summary */}
              <div className="pt-4 border-t border-dashed border-[#E5DED4] dark:border-[#272F22] flex justify-between items-baseline">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#7C8461]">
                  {t.totalEstimate}
                </span>
                <span className="text-3xl font-serif font-semibold text-[#7C8461] tracking-wide">
                  {currentLang === 'EN' ? 'NPR' : 'रु.'} {currentPrice.toLocaleString()}
                </span>
              </div>

            </div>

            {/* Success Booking Popup */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-5 rounded-none border bg-[#7C8461]/10 border-[#7C8461]/35 text-[#7C8461] flex flex-col gap-2.5"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-0.5 rounded-none bg-[#7C8461] text-white">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-sans font-bold tracking-[0.15em] text-[10px]">
                      {lastBookingId} REGISTERED
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed font-sans font-medium">
                    {t.bookingSuccessMsg}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dynamic Local Storage Booking History */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-serif font-semibold text-sm tracking-wide">
                  <History className="w-4 h-4 text-[#7C8461]" />
                  <span>{t.viewHistory}</span>
                </div>

                {bookingHistory.length > 0 && (
                  <button
                    onClick={() => {
                      if (confirm(currentLang === 'EN' ? 'Clear booking history from this browser?' : 'यो ब्राउजरबाट सबै बुकिङ इतिहास मेट्ने?')) {
                        setBookingHistory([]);
                        localStorage.removeItem('lotus_bookings');
                      }
                    }}
                    className="text-[9px] text-rose-600 hover:underline flex items-center gap-1 font-sans uppercase font-bold tracking-wider"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>

              {bookingHistory.length === 0 ? (
                <div className={`p-6 text-center rounded-none border border-dashed text-xs opacity-60 font-sans ${
                  theme === 'dark' ? 'border-[#272F22]' : 'border-[#E5DED4]'
                }`}>
                  {t.noHistory}
                </div>
              ) : (
                <div className="max-h-[280px] overflow-y-auto pr-1 space-y-3 custom-scrollbar">
                  {bookingHistory.map((b) => (
                    <div
                      key={b.id}
                      className={`p-5 rounded-none border text-xs font-sans relative flex flex-col gap-2 transition-all ${
                        theme === 'dark' ? 'bg-[#1A1F16] border-[#272F22]' : 'bg-white border-[#E5DED4]'
                      }`}
                    >
                      <button
                        onClick={() => deleteBooking(b.id)}
                        className="absolute top-4 right-4 text-stone-400 hover:text-rose-500 transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <span className="font-sans font-bold tracking-widest bg-[#7C8461]/10 text-[#7C8461] px-1.5 py-0.5 rounded-none text-[9px]">
                          {b.id}
                        </span>
                        <span className="font-serif font-semibold text-sm tracking-wide text-[#7C8461] line-clamp-1">{b.serviceName}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-stone-500 dark:text-[#A2A994] mt-1 pb-2 border-b border-[#E5DED4] dark:border-[#272F22] font-sans">
                        <div>
                          <p className="text-[8px] uppercase font-bold tracking-wider opacity-60 text-[#7C8461]">Client</p>
                          <p className="font-medium text-stone-900 dark:text-white line-clamp-1">{b.customerName}</p>
                        </div>
                        <div>
                          <p className="text-[8px] uppercase font-bold tracking-wider opacity-60 text-[#7C8461]">Branch</p>
                          <p className="font-medium text-stone-900 dark:text-white line-clamp-1">{b.branchName.split(' ')[2] || b.branchName}</p>
                        </div>
                        <div>
                          <p className="text-[8px] uppercase font-bold tracking-wider opacity-60 text-[#7C8461]">Date & Time</p>
                          <p className="font-medium text-stone-900 dark:text-white">{b.date} / {b.time}</p>
                        </div>
                        <div>
                          <p className="text-[8px] uppercase font-bold tracking-wider opacity-60 text-[#7C8461]">Amount Estimate</p>
                          <p className="font-semibold text-[#7C8461] font-serif">{currentLang === 'EN' ? 'NPR' : 'रु.'} {b.priceEstimate.toLocaleString()}</p>
                        </div>
                      </div>

                      <p className="text-[9px] font-sans text-stone-400 dark:text-slate-500 self-end">
                        {currentLang === 'EN' ? 'Registered online' : 'अनलाइन दर्ता गरिएको'} • {b.timestamp}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
