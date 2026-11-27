'use client';

import React from 'react';
import { Phone, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

interface FloatingActionBarProps {
  onHoldSeatsClick: () => void;
}

export default function FloatingActionBar({ onHoldSeatsClick }: FloatingActionBarProps) {
  return (
    <>
      {/* Mobile Sticky Bottom Booking Bar (visible only on mobile/tablet) */}
      <aside
        aria-label="Quick mobile booking actions"
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#071B2C]/95 backdrop-blur-2xl border-t border-[#D6B36A]/30 py-2.5 px-4 shadow-[0_-10px_35px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5EBDD]/60">
              Thailand 4N/5D
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-base font-black text-[#D6B36A] font-serif">
                {PACKAGE_INFO.pricePerPersonFormatted}
              </span>
              <span className="text-[10px] text-[#F5EBDD]/70 font-medium">
                / Person
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PACKAGE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#12A6A0] text-white shadow-md active:scale-95"
              aria-label="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>

            <button
              onClick={onHoldSeatsClick}
              className="gold-luxury-btn text-[#071B2C] font-black text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg active:scale-95 uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>HOLD SEATS FOR ₹500</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Desktop Floating WhatsApp Contact Bubble */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-40">
        <a
          href={PACKAGE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full bg-[#12A6A0] hover:bg-[#12A6A0]/90 text-white shadow-[0_10px_30px_rgba(18,166,160,0.4)] transition-all duration-300 hover:scale-105"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase tracking-wider font-semibold opacity-90">Talk to Specialist</span>
            <span className="text-xs font-black tracking-wide">WhatsApp Support</span>
          </div>
        </a>
      </div>
    </>
  );
}
