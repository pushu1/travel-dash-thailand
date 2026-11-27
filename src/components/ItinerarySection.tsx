'use client';

import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Calendar, 
  Sparkles,
  BedDouble,
  Compass
} from 'lucide-react';
import { ITINERARY_DAYS } from '@/data/packageData';

interface ItinerarySectionProps {
  onHoldSeatsClick?: () => void;
}

export default function ItinerarySection({ onHoldSeatsClick }: ItinerarySectionProps) {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <section id="itinerary" className="py-20 sm:py-24 bg-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 5: DAY-WISE ITINERARY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Your 5-Day Thailand <br />
            <span className="gold-gradient-text">Travel Plan</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Discover what your Thailand holiday looks like, day by day. Every transfer, breakfast, tour and hotel check-in seamlessly coordinated.
          </p>
        </div>

        {/* Day Selector Pills for Mobile & Tablet */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2.5 sm:justify-center no-scrollbar">
          {ITINERARY_DAYS.map((day) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 ${
                selectedDay === day.day
                  ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-lg font-extrabold scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/40 hover:text-white'
              }`}
            >
              <span>DAY 0{day.day}</span>
              <span className="hidden md:inline font-normal opacity-80">| {day.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Active Day Highlight Card */}
        {(() => {
          const activeDay = ITINERARY_DAYS.find((d) => d.day === selectedDay) || ITINERARY_DAYS[0];
          return (
            <div className="rounded-3xl bg-gradient-to-br from-[#121F35] via-[#0F1B2E] to-[#0A1322] border border-amber-500/30 p-6 sm:p-10 shadow-2xl mb-12 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Itinerary details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wide">
                      DAY {activeDay.day} OF 5
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold">
                      {activeDay.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5" /> Overnight: {activeDay.overnight}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
                      {activeDay.title}
                    </h3>
                    <p className="text-sm font-medium text-amber-400 mt-1">
                      {activeDay.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                      {activeDay.description}
                    </p>
                  </div>

                  {/* Activities list from PDF */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Day {activeDay.day} Scheduled Schedule:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {activeDay.activities.map((act, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-200 hover:bg-white/10 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-white/10">
                    <span className="font-semibold text-amber-300">
                      Overnight Stay: {activeDay.overnight}
                    </span>
                    <span className="text-[11px]">
                      {activeDay.day < 5 ? `Next: Day ${activeDay.day + 1}` : 'Return to Delhi'}
                    </span>
                  </div>
                </div>

                {/* Right Image preview */}
                <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url('${activeDay.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                    <span className="text-amber-400 font-bold">Trip Highlight: </span>
                    {activeDay.title} — {activeDay.subtitle}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Full 5-Day Vertical Overview Accordion / List */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            Complete 5-Day Day-Wise Breakdown
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {ITINERARY_DAYS.map((d) => (
              <div
                key={d.day}
                onClick={() => setSelectedDay(d.day)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                  selectedDay === d.day
                    ? 'bg-[#14233A] border-amber-400 shadow-md ring-1 ring-amber-400/30'
                    : 'bg-white/5 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="text-[10px] font-black tracking-widest text-amber-400 uppercase">
                  Day 0{d.day}
                </div>
                <h5 className="font-bold text-white text-xs sm:text-sm mt-1 line-clamp-1">
                  {d.title}
                </h5>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {d.subtitle}
                </p>
                <div className="mt-3 text-[10px] text-slate-300 font-medium pt-2 border-t border-white/5 flex items-center justify-between">
                  <span>{d.overnight}</span>
                  <span className="text-amber-400">View →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Booking prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onHoldSeatsClick || (() => {
              document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
            })}
            className="gold-shimmer-btn text-slate-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>HOLD MY SEATS FOR ₹500 TO EXPERIENCE THIS ITINERARY</span>
          </button>
        </div>
      </div>
    </section>
  );
}
