'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, Sparkles, ArrowRight, AlertCircle } from 'lucide-react';
import { DEPARTURE_DATES, PACKAGE_INFO } from '@/data/packageData';

interface DepartureDatesSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function DepartureDatesSection({ onHoldSeatsClick }: DepartureDatesSectionProps) {
  // Keep departure year configurable as per user requirement
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedDate, setSelectedDate] = useState('30 December');

  const availableYears = ['2024', '2025', '2026', '2027'];

  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    // Focus or scroll to enquiry form
    const el = document.querySelector('#enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onHoldSeatsClick) {
      onHoldSeatsClick();
    }
  };

  return (
    <section id="dates" className="py-20 sm:py-24 bg-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 9: AVAILABLE DEPARTURE DATES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Choose Your Thailand <br />
            <span className="gold-gradient-text">Departure Date</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Your next international getaway could be closer than you think! Choose from our currently listed departure dates:
          </p>
        </div>

        {/* Departure Year Configurator Bar */}
        <div className="max-w-md mx-auto mb-10 p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-300 pl-2">
            Applicable Season Year:
          </span>
          <div className="flex gap-1">
            {availableYears.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all ${
                  selectedYear === yr
                    ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Departure Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {DEPARTURE_DATES.map((dep) => {
            const isSelected = selectedDate === dep.date;

            return (
              <div
                key={dep.id}
                onClick={() => handleDateSelect(dep.date)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#15233A] border-amber-400 ring-2 ring-amber-400/30 shadow-2xl scale-105'
                    : 'bg-[#0E1A2C] border-white/10 hover:border-amber-400/40 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                      <Calendar className="w-4 h-4" />
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        dep.peakSeason
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}
                    >
                      {dep.status}
                    </span>
                  </div>

                  <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                    Departure
                  </div>
                  <h3 className="text-xl font-extrabold text-white font-serif mt-0.5 group-hover:text-amber-300 transition-colors">
                    {dep.date}
                  </h3>
                  <div className="text-xs text-amber-400/90 font-medium mt-0.5">
                    Year: {selectedYear}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-300">
                    Token: <strong className="text-amber-400">₹500</strong>
                  </span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                    Select →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout & Availability Note */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-[#121F35] to-[#162744] border border-amber-500/30 p-6 sm:p-8 text-center space-y-4 shadow-xl">
          <h4 className="text-xl font-bold text-white font-serif">
            Your Preferred Date. Your Next Adventure.
          </h4>
          <p className="text-sm text-slate-300">
            Secure your seats with just <strong className="text-amber-300">₹500</strong> and get started with your Thailand travel plans.
          </p>

          <div className="pt-2">
            <button
              onClick={onHoldSeatsClick || (() => {
                document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="gold-shimmer-btn text-slate-950 font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-lg"
            >
              <span>CHECK DATE AVAILABILITY</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{PACKAGE_INFO.availabilityNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
