'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  BedDouble, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { ITINERARY_DAYS } from '@/data/packageData';

interface ItinerarySectionProps {
  onHoldSeatsClick?: () => void;
}

export default function ItinerarySection({ onHoldSeatsClick }: ItinerarySectionProps) {
  const [activeDay, setActiveDay] = useState(1);
  const [expandedMobileDay, setExpandedMobileDay] = useState<number | null>(1);

  const toggleMobileDay = (day: number) => {
    setExpandedMobileDay(expandedMobileDay === day ? null : day);
  };

  const currentDayData = ITINERARY_DAYS.find((d) => d.day === activeDay) || ITINERARY_DAYS[0];

  return (
    <section id="itinerary" className="py-24 sm:py-32 bg-[#071B2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 5: DAY-WISE ITINERARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Your 5-Day Thailand <br />
            <span className="gold-gradient-text">Travel Plan</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            Discover what your Thailand holiday looks like, day by day. Every transfer, breakfast, tour and hotel check-in seamlessly coordinated.
          </p>
        </div>

        {/* Desktop Horizontal Interactive Timeline Tabs */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-5 gap-3 p-2 rounded-3xl bg-[#0B2236]/90 border border-white/10 backdrop-blur-xl">
            {ITINERARY_DAYS.map((d) => {
              const isActive = activeDay === d.day;
              return (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 relative ${
                    isActive
                      ? 'bg-gradient-to-br from-[#E7CC8C] via-[#D6B36A] to-[#B89349] text-[#071B2C] shadow-xl'
                      : 'hover:bg-white/5 text-[#F5EBDD]/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${isActive ? 'text-[#071B2C]' : 'text-[#D6B36A]'}`}>
                      DAY 0{d.day}
                    </span>
                    <span className="text-xs">
                      {isActive ? '✦' : ''}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold font-serif line-clamp-1 ${isActive ? 'text-[#071B2C]' : 'text-white'}`}>
                    {d.title}
                  </h4>
                  <p className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-[#071B2C]/80 font-medium' : 'text-[#F5EBDD]/60'}`}>
                    {d.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Active Day Full Showcase Card */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-gradient-to-br from-[#0B2236] via-[#0E2A42] to-[#071B2C] border border-[#D6B36A]/35 p-8 lg:p-10 shadow-2xl overflow-hidden relative"
            >
              <div className="grid grid-cols-12 gap-8 items-center">
                {/* Left Itinerary Details */}
                <div className="col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-[#D6B36A] text-[#071B2C] text-xs font-black tracking-wider uppercase">
                      DAY 0{currentDayData.day} ITINERARY
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold">
                      {currentDayData.badge}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#12A6A0]/20 border border-[#12A6A0]/40 text-[#12A6A0] text-xs font-bold flex items-center gap-1.5">
                      <BedDouble className="w-3.5 h-3.5" /> Overnight: {currentDayData.overnight}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-white font-serif tracking-tight">
                      {currentDayData.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#D6B36A] mt-1 font-serif italic">
                      {currentDayData.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#F5EBDD]/80 mt-3 leading-relaxed font-light">
                      {currentDayData.description}
                    </p>
                  </div>

                  {/* Scheduled Activities */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#F5EBDD]/60 font-bold block">
                      Scheduled Day Plan:
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {currentDayData.activities.map((act, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-white hover:border-[#D6B36A]/30 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#12A6A0] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-[#F5EBDD]/60 border-t border-white/10">
                    <span className="font-bold text-[#D6B36A]">
                      Overnight Stay: {currentDayData.overnight}
                    </span>
                    <button
                      onClick={() => setActiveDay(activeDay < 5 ? activeDay + 1 : 1)}
                      className="text-xs text-white hover:text-[#D6B36A] flex items-center gap-1 transition-colors font-bold"
                    >
                      <span>{activeDay < 5 ? `Next: Day ${activeDay + 1}` : 'Restart Itinerary'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Large Destination Image */}
                <div className="col-span-5 relative h-[420px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url('${currentDayData.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040E17]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#071B2C]/90 backdrop-blur-md border border-white/15 text-xs text-white">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#D6B36A]">
                      Day {currentDayData.day} Destination
                    </div>
                    <div className="font-serif font-bold text-sm text-white mt-0.5">
                      {currentDayData.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Vertical Accordion / Timeline View */}
        <div className="lg:hidden space-y-4">
          {ITINERARY_DAYS.map((d) => {
            const isExpanded = expandedMobileDay === d.day;

            return (
              <div
                key={d.day}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0B2236] border-[#D6B36A]/40 shadow-xl'
                    : 'bg-[#071B2C] border-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleMobileDay(d.day)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#D6B36A] text-[#071B2C] text-xs font-black flex items-center justify-center shrink-0">
                      0{d.day}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm font-serif">{d.title}</h4>
                      <p className="text-[11px] text-[#D6B36A] font-medium">{d.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-[#D6B36A]">
                    {isExpanded ? <ChevronDown className="w-5 h-5 rotate-180 transition-transform" /> : <ChevronDown className="w-5 h-5 transition-transform" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-5 pt-1 space-y-4 border-t border-white/10">
                    <div className="relative h-44 rounded-xl overflow-hidden border border-white/10">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${d.image}')` }}
                      />
                    </div>

                    <p className="text-xs text-[#F5EBDD]/80 leading-relaxed font-light">
                      {d.description}
                    </p>

                    <div className="space-y-2">
                      {d.activities.map((act, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-white/5 text-xs text-white">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#12A6A0] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 text-xs flex items-center justify-between text-[#F5EBDD]/80">
                      <span>Overnight Stay:</span>
                      <strong className="text-[#D6B36A]">{d.overnight}</strong>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-14 text-center">
          <button
            onClick={onHoldSeatsClick || (() => {
              document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
            })}
            className="gold-luxury-btn text-[#071B2C] font-black text-xs sm:text-sm px-8 py-4 rounded-xl inline-flex items-center gap-2 tracking-wider uppercase shadow-xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>HOLD MY SEATS FOR ₹500 TO RESERVE THIS ITINERARY</span>
          </button>
        </div>
      </div>
    </section>
  );
}
