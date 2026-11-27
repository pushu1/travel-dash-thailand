'use client';

import React from 'react';
import { 
  Calendar, 
  Palmtree, 
  Building2, 
  Plane, 
  Ship, 
  Landmark, 
  Hotel, 
  Car,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { HIGHLIGHTS } from '@/data/packageData';

interface PackageHighlightsSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function PackageHighlightsSection({ onHoldSeatsClick }: PackageHighlightsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar': return <Calendar className="w-6 h-6 text-amber-400" />;
      case 'Palmtree': return <Palmtree className="w-6 h-6 text-emerald-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-teal-400" />;
      case 'Plane': return <Plane className="w-6 h-6 text-sky-400" />;
      case 'Ship': return <Ship className="w-6 h-6 text-cyan-400" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-amber-300" />;
      case 'Hotel': return <Hotel className="w-6 h-6 text-yellow-400" />;
      case 'Car': return <Car className="w-6 h-6 text-orange-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="highlights" className="py-20 sm:py-24 bg-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 3: PACKAGE HIGHLIGHTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif mb-4">
            Everything You Need for a <br />
            <span className="gold-gradient-text">Memorable Thailand Holiday</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A seamless, all-inclusive 4 Nights / 5 Days journey covering flights, handpicked 4-star hotels, speedboat adventures, and iconic cultural landmarks.
          </p>
        </div>

        {/* 8 Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#111C2E] to-[#0D1524] border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1">
                  Feature 0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-amber-400/90 font-medium">Included in Package</span>
                <span className="text-xs">✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Seat Hold CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14233A] via-[#1A2E4C] to-[#14233A] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white font-serif">
              Ready to lock in this complete experience?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Hold your seats today with a booking token of just <strong className="text-amber-300">₹500</strong>.
            </p>
          </div>
          <button
            onClick={onHoldSeatsClick || (() => {
              document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
            })}
            className="gold-shimmer-btn text-slate-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 shrink-0"
          >
            <span>HOLD MY SEATS FOR ₹500</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
