'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Clock, Sparkles, ArrowRight, AlertCircle, Info } from 'lucide-react';
import { DEPARTURE_DATES, PACKAGE_INFO } from '@/data/packageData';

interface DepartureDatesSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function DepartureDatesSection({ onHoldSeatsClick }: DepartureDatesSectionProps) {
  // Allow departure season/year to be selected/configured dynamically
  const [selectedSeason, setSelectedSeason] = useState('Upcoming Season');
  const [selectedDate, setSelectedDate] = useState('30 December');

  const seasonsList = ['Current Season', 'Upcoming Season', 'Custom Year Request'];

  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    const el = document.querySelector('#enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onHoldSeatsClick) {
      onHoldSeatsClick();
    }
  };

  return (
    <section id="dates" className="py-24 sm:py-32 bg-[#071B2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 9: AVAILABLE DEPARTURE DATES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Choose Your Thailand <br />
            <span className="gold-gradient-text">Departure Date</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            Your next international getaway could be closer than you think! Choose from our currently listed departure dates:
          </p>
        </div>

        {/* Departure Season Configurator */}
        <div className="max-w-lg mx-auto mb-12 p-2 rounded-2xl bg-[#0B2236]/90 border border-white/10 flex items-center justify-between backdrop-blur-xl">
          <span className="text-xs font-semibold text-[#F5EBDD]/70 pl-3">
            Travel Period:
          </span>
          <div className="flex gap-1">
            {seasonsList.map((sn) => (
              <button
                key={sn}
                onClick={() => setSelectedSeason(sn)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all duration-300 ${
                  selectedSeason === sn
                    ? 'bg-[#D6B36A] text-[#071B2C] shadow-md font-black'
                    : 'text-[#F5EBDD]/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {sn}
              </button>
            ))}
          </div>
        </div>

        {/* Departure Date Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {DEPARTURE_DATES.map((dep, index) => {
            const isSelected = selectedDate === dep.date;

            return (
              <motion.div
                key={dep.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => handleDateSelect(dep.date)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#0E2A42] border-[#D6B36A] ring-2 ring-[#D6B36A]/40 shadow-2xl scale-105'
                    : 'bg-[#0B2236]/90 border-white/10 hover:border-[#D6B36A]/40 hover:-translate-y-1 shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D6B36A]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                        dep.peakSeason
                          ? 'bg-[#D6B36A]/20 text-[#D6B36A] border border-[#D6B36A]/30'
                          : 'bg-[#12A6A0]/20 text-[#12A6A0] border border-[#12A6A0]/30'
                      }`}
                    >
                      {dep.status}
                    </span>
                  </div>

                  <div className="text-[10px] uppercase font-bold text-[#F5EBDD]/60 tracking-wider">
                    Departure
                  </div>
                  <h3 className="text-2xl font-black text-white font-serif mt-1 group-hover:text-[#D6B36A] transition-colors">
                    {dep.date}
                  </h3>
                  <div className="text-xs text-[#F5EBDD]/70 mt-1 font-light">
                    {dep.description}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#F5EBDD]/70">
                    Token: <strong className="text-[#D6B36A]">₹500</strong>
                  </span>
                  <span className="text-[#D6B36A] font-bold group-hover:translate-x-1 transition-transform">
                    Select →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout Box as per PDF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-[#0B2236] via-[#143857] to-[#0B2236] border border-[#D6B36A]/35 p-8 text-center space-y-4 shadow-2xl"
        >
          <h4 className="text-2xl font-black text-white font-serif">
            Your Preferred Date. Your Next Adventure.
          </h4>
          <p className="text-sm text-[#F5EBDD]/85 font-light">
            Secure your seats with just <strong className="text-[#D6B36A]">₹500</strong> and get started with your Thailand travel plans.
          </p>

          <div className="pt-2">
            <button
              onClick={onHoldSeatsClick || (() => {
                document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="gold-luxury-btn text-[#071B2C] font-black text-sm px-8 py-4 rounded-xl inline-flex items-center gap-2 shadow-xl tracking-wider uppercase"
            >
              <span>CHECK DATE AVAILABILITY</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#F5EBDD]/70">
            <AlertCircle className="w-4 h-4 text-[#D6B36A] shrink-0" />
            <span>{PACKAGE_INFO.availabilityNote}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
