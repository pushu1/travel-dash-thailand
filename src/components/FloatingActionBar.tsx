'use client';

import React from 'react';
import { Phone, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

interface FloatingActionBarProps {
  onHoldSeatsClick: () => void;
}

export default function FloatingActionBar({ onHoldSeatsClick }: FloatingActionBarProps) {
  return (
    <aside
      aria-label="Quick booking actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B1320]/95 backdrop-blur-xl border-t border-amber-500/30 py-2.5 px-4 sm:px-6 shadow-[0_-10px_30px_rgba(0,0,0,0.6)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left Price Display */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              4N / 5D Thailand
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-xl font-extrabold text-amber-400 font-serif">
                {PACKAGE_INFO.pricePerPersonFormatted}
              </span>
              <span className="text-[11px] text-slate-300 hidden sm:inline">
                / Person ({PACKAGE_INFO.totalPackagePriceFormatted} for 2)
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-emerald-400">
            <span>Air India Return Non-stop</span>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Call Expert */}
          <a
            href={PACKAGE_INFO.phoneCallUrl}
            className="flex items-center justify-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/15 transition-all"
            title="Call Travel Dash Expert"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Call Expert</span>
          </a>

          {/* WhatsApp */}
          <a
            href={PACKAGE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-all"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Primary Seat Hold CTA */}
          <button
            onClick={onHoldSeatsClick}
            className="gold-shimmer-btn text-slate-950 font-black text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>HOLD SEATS FOR ₹500</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
