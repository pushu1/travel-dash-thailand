'use client';

import React from 'react';
import { Compass, Layers, Sparkles, Headphones, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHY_BOOK } from '@/data/packageData';

interface WhyBookSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function WhyBookSection({ onHoldSeatsClick }: WhyBookSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-amber-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-300" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-emerald-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 11: WHY BOOK WITH TRAVEL DASH?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Your Trip, <span className="gold-gradient-text">Planned With Care</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We want your Thailand holiday to be about enjoying the experience, not worrying about travel arrangements.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_BOOK.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#111D30] to-[#0D1626] border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                  Reason 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-serif">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 text-[11px] text-amber-400 font-semibold flex items-center justify-between">
                <span>The Travel Dash Edge</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Enjoy a smoother way to plan your next international getaway.
          </p>
          <div className="mt-4">
            <button
              onClick={onHoldSeatsClick || (() => {
                document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="teal-shimmer-btn text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl inline-flex items-center gap-2"
            >
              <span>HOLD SEATS FOR ₹500 & SPEAK TO OUR EXPERT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
