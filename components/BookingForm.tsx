"use client";

import React, { useState, useEffect } from "react";
import { translations } from "@/lib/translations";
import { Sparkles, Calendar, User, Phone, Check, Receipt } from "lucide-react";
import { motion } from "framer-motion";

interface BookingFormProps {
  currentLang: "EN" | "NP";
  theme: "light" | "dark";
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

  const [selectedService, setSelectedService] = useState("ayurvedic");
  const [selectedBranch, setSelectedBranch] = useState("itahari");
  const [duration, setDuration] = useState("90");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [extraSteam, setExtraSteam] = useState(false);
  const [extraAroma, setExtraAroma] = useState(false);
  const [bookingHistory, setBookingHistory] = useState<SavedBooking[]>([]);

  const servicesList = [
    { id: "ayurvedic", name: t.ayurvedicTitle, basePrice: 4500 },
    { id: "deep-tissue", name: t.deepTissueTitle, basePrice: 3800 },
    { id: "thai-stretch", name: t.thaiMassageTitle, basePrice: 3000 },
    { id: "hot-stone", name: t.hotStoneTitle, basePrice: 5000 },
    { id: "organic-facial", name: t.facialTitle, basePrice: 2500 },
    { id: "steam-sauna", name: t.steamSaunaTitle, basePrice: 1200 },
  ];

  const branchesList = [
    { id: "itahari", name: t.itahariName },
    { id: "dharan", name: t.dharanName },
    { id: "biratnagar", name: t.biratnagarName },
    { id: "kathmandu", name: t.kathmanduName },
  ];

  const calculatePrice = () => {
    const service =
      servicesList.find((s) => s.id === selectedService) || servicesList[0];
    let price = service.basePrice;

    if (
      duration === "60" &&
      selectedService !== "steam-sauna" &&
      selectedService !== "organic-facial"
    ) {
      price = price * 0.8;
    } else if (duration === "120") {
      price = price * 1.5;
    }

    if (extraSteam) price += 1200;
    if (extraAroma) price += 800;

    return Math.round(price);
  };

  const currentPrice = calculatePrice();

  useEffect(() => {
    const stored = localStorage.getItem("lotus_bookings");
    if (stored) {
      try {
        setBookingHistory(JSON.parse(stored));
      } catch (e) {
        console.error("Error reading bookings from local storage", e);
      }
    }
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNum || !date || !time) {
      alert(
        currentLang === "EN"
          ? "Please complete all required fields."
          : "कृपया सबै आवश्यक विवरणहरू भर्नुहोस्।",
      );
      return;
    }

    const curService =
      servicesList.find((s) => s.id === selectedService) || servicesList[0];
    const curBranch =
      branchesList.find((b) => b.id === selectedBranch) || branchesList[0];

    const newBooking: SavedBooking = {
      id: "LOTUS-" + Math.floor(1000 + Math.random() * 9000),
      serviceId: selectedService,
      serviceName: curService.name,
      branchId: selectedBranch,
      branchName: curBranch.name,
      duration: `${duration} ${currentLang === "EN" ? "Mins" : "मिनेट"}`,
      date,
      time,
      customerName: fullName,
      customerPhone: phoneNum,
      extraSteam,
      extraAroma,
      priceEstimate: currentPrice,
      timestamp: new Date().toLocaleDateString(
        currentLang === "EN" ? "en-US" : "ne-NP",
      ),
    };

    const updatedHistory = [newBooking, ...bookingHistory];
    setBookingHistory(updatedHistory);
    localStorage.setItem("lotus_bookings", JSON.stringify(updatedHistory));

    setFullName("");
    setPhoneNum("");
    setDate("");
    setTime("");
    setExtraSteam(false);
    setExtraAroma(false);
    alert(
      currentLang === "EN"
        ? "Reservation Submitted successfully!"
        : "आरक्षण सफलतापूर्वक पठाइयो!",
    );
  };

  return (
    <section
      id="booking-section"
      className={`py-24 border-b transition-colors relative ${
        theme === "dark"
          ? "bg-[#121510] text-[#ECEAE2] border-[#272F22]"
          : "bg-[#FDFBF7] text-[#2D2D2D] border-[#E5DED4]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#7C8461] text-[10px] uppercase tracking-[0.25em] font-bold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{t.bookingTitle}</span>
          </div>
          {/* Main bold Montserrat Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">
            {t.bookingSubtitle}
          </h2>
          <div className="h-[2px] w-20 bg-[#7C8461] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <form
            onSubmit={handleBookingSubmit}
            className={`lg:col-span-7 p-6 sm:p-8 rounded-none border ${
              theme === "dark"
                ? "bg-[#1A1F16] border-[#272F22]"
                : "bg-white border-[#E5DED4]"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.selectService}
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={`w-full p-4 rounded-none border font-semibold text-sm focus:outline-none focus:border-[#7C8461] ${
                    theme === "dark"
                      ? "bg-[#121510] border-[#272F22] text-[#ECEAE2]"
                      : "bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]"
                  }`}
                >
                  {servicesList.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} (
                      {currentLang === "EN"
                        ? `NPR ${s.basePrice}`
                        : `रु. ${s.basePrice}`}
                      )
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.selectBranch}
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className={`w-full p-4 rounded-none border font-semibold text-sm focus:outline-none focus:border-[#7C8461] ${
                    theme === "dark"
                      ? "bg-[#121510] border-[#272F22] text-[#ECEAE2]"
                      : "bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]"
                  }`}
                >
                  {branchesList.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.id === "itahari"
                        ? currentLang === "EN"
                          ? "Itahari Flagship"
                          : "इटहरी"
                        : b.id === "dharan"
                          ? currentLang === "EN"
                            ? "Dharan"
                            : "धरान"
                          : b.id === "biratnagar"
                            ? currentLang === "EN"
                              ? "Biratnagar"
                              : "विराटनगर"
                            : currentLang === "EN"
                              ? "Kathmandu Suite"
                              : "काठमाडौं"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.durationLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["60", "90", "120"].map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setDuration(mins)}
                      className={`py-3.5 rounded-none text-xs font-bold tracking-wider border transition-all ${
                        duration === mins
                          ? "bg-[#7C8461] text-white border-[#7C8461]"
                          : theme === "dark"
                            ? "bg-[#121510] border-[#272F22] text-[#A2A994] hover:bg-[#272F22]"
                            : "bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D] hover:bg-[#FDFBF7]"
                      }`}
                    >
                      {mins} Min
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.dateLabel} *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className={`w-full pl-11 pr-4 py-4 rounded-none border text-sm font-semibold focus:outline-none focus:border-[#7C8461] ${
                      theme === "dark"
                        ? "bg-[#121510] border-[#272F22] text-[#ECEAE2]"
                        : "bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-2.5">
                  {t.timeLabel} *
                </label>
                <select
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={`w-full p-4 rounded-none border text-sm font-semibold focus:outline-none focus:border-[#7C8461] ${
                    theme === "dark"
                      ? "bg-[#121510] border-[#272F22] text-[#ECEAE2]"
                      : "bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]"
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

              <div className="sm:col-span-2 space-y-3 pt-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7C8461] mb-1">
                  {currentLang === "EN"
                    ? "Enhance Treatment"
                    : "उपचार विस्तारहरू"}
                </label>

                <button
                  type="button"
                  onClick={() => setExtraSteam(!extraSteam)}
                  className={`w-full p-4 rounded-none border transition-all flex items-center justify-between text-left text-xs sm:text-sm font-semibold ${
                    extraSteam
                      ? "bg-[#7C8461]/10 border-[#7C8461] text-[#7C8461]"
                      : theme === "dark"
                        ? "bg-[#121510] border-[#272F22] text-[#A2A994]"
                        : "bg-[#F8F6F2] border-[#E5DED4] text-[#666]"
                  }`}
                >
                  <span>{t.chooseExtraSteam}</span>
                  <div
                    className={`w-4 h-4 border flex items-center justify-center ${
                      extraSteam
                        ? "bg-[#7C8461] border-[#7C8461] text-white"
                        : "border-[#E5DED4]"
                    }`}
                  >
                    {extraSteam && <Check className="w-3 h-3" />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setExtraAroma(!extraAroma)}
                  className={`w-full p-4 rounded-none border transition-all flex items-center justify-between text-left text-xs sm:text-sm font-semibold ${
                    extraAroma
                      ? "bg-[#7C8461]/10 border-[#7C8461] text-[#7C8461]"
                      : theme === "dark"
                        ? "bg-[#121510] border-[#272F22] text-[#A2A994]"
                        : "bg-[#F8F6F2] border-[#E5DED4] text-[#666]"
                  }`}
                >
                  <span>{t.chooseExtraAroma}</span>
                  <div
                    className={`w-4 h-4 border flex items-center justify-center ${
                      extraAroma
                        ? "bg-[#7C8461] border-[#7C8461] text-white"
                        : "border-[#E5DED4]"
                    }`}
                  >
                    {extraAroma && <Check className="w-3 h-3" />}
                  </div>
                </button>
              </div>

              <div className="sm:col-span-2 border-t border-[#E5DED4] dark:border-[#272F22] pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      required
                      placeholder={t.fullNameLabel}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full pl-11 pr-4 py-4 rounded-none border text-sm font-medium focus:outline-none focus:border-[#7C8461] ${
                        theme === "dark"
                          ? "bg-[#121510] border-[#272F22] text-[#ECEAE2]"
                          : "bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]"
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="tel"
                      required
                      placeholder={t.phoneLabel}
                      value={phoneNum}
                      onChange={(e) => setPhoneNum(e.target.value)}
                      className={`w-full pl-11 pr-4 py-4 rounded-none border text-sm font-medium focus:outline-none focus:border-[#7C8461] ${
                        theme === "dark"
                          ? "bg-[#121510] border-[#272F22] text-[#ECEAE2]"
                          : "bg-[#F8F6F2] border-[#E5DED4] text-[#2D2D2D]"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#7C8461] hover:bg-[#6b7352] text-white font-bold uppercase tracking-[0.2em] text-[11px] p-5 rounded-none transition-all flex justify-center items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t.submitBooking}</span>
                </button>
              </div>
            </div>
          </form>

          <div className="lg:col-span-5 space-y-8">
            <div
              className={`p-6 rounded-none border ${
                theme === "dark"
                  ? "bg-[#1A1F16] border-[#272F22]"
                  : "bg-white border-[#E5DED4]"
              }`}
            >
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#E5DED4] dark:border-[#272F22]">
                <Receipt className="w-4 h-4 text-[#7C8461]" />
                <span className="text-xs font-bold tracking-wider uppercase">
                  {currentLang === "EN"
                    ? "Estimated Total"
                    : "अनुमानित कुल लागत"}
                </span>
              </div>
              <div className="pt-4 text-3xl font-black text-[#7C8461]">
                {currentLang === "EN"
                  ? `NPR ${currentPrice}`
                  : `रु. ${currentPrice}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
