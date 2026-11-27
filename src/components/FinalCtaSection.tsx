'use client';

import React from 'react';
import { Sparkles, Phone, MessageCircle, ArrowRight, ShieldCheck, Heart, AlertCircle } from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

interface FinalCtaSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function FinalCtaSection({ onHoldSeatsClick }: FinalCtaSectionProps) {
  const handlePrimaryClick = () => {
    if (onHoldSeatsClick) {
      onHoldSeatsClick();
    } else {
      const el = document.querySelector('#enquiry-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#070D18] via-[#0D182B] to-[#070D18] relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>SECTION 13: FINAL CALL TO ACTION</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-serif leading-tight mb-6">
          Someone You&apos;ve Been Meaning <br className="hidden sm:inline" />
          to Travel With? <span className="gold-gradient-text">This Is Your Sign!</span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-3 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light mb-8">
          <p>
            A new destination, beautiful beaches, exciting experiences and five days away from your regular routine.
          </p>
          <p className="text-white font-medium text-base sm:text-lg">
            Thailand is calling. All you need is your travel companion!
          </p>
          <p className="text-slate-300 text-sm sm:text-base">
            Whether it&apos;s your partner, husband or wife, best friend, or someone who simply loves travelling, make this a trip to remember.
          </p>
        </div>

        {/* Pricing Highlight Banner */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#121F35] via-[#1A2E4C] to-[#121F35] border border-amber-500/40 shadow-2xl mb-8 space-y-3">
          <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
            YOUR THAILAND GETAWAY STARTS AT
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 font-serif">
            {PACKAGE_INFO.pricePerPersonFormatted} <span className="text-sm sm:text-lg text-slate-300 font-medium">/ PERSON!</span>
          </div>
          <div className="text-xs sm:text-sm text-slate-300 font-medium">
            Total Package: {PACKAGE_INFO.totalPackagePriceFormatted} for 2 Travellers with Flights & Hotels
          </div>

          <div className="pt-2 text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Hold Your Seats for Just <strong className="text-amber-400">{PACKAGE_INFO.bookingTokenFormatted}!</strong></span>
          </div>
          <p className="text-xs text-slate-400">
            Choose your departure date and let us take care of your travel plans.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <button
            onClick={handlePrimaryClick}
            className="w-full sm:w-auto gold-shimmer-btn text-slate-950 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-2xl hover:shadow-amber-500/50"
          >
            <span>BOOK MY THAILAND TRIP</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>

          <a
            href={PACKAGE_INFO.phoneCallUrl}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>TALK TO A TRAVEL EXPERT</span>
          </a>
        </div>

        {/* Disclaimer Note from PDF */}
        <div className="mt-8 pt-4 border-t border-white/10 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Limited departure dates available. Flight and hotel availability is subject to confirmation at the time of booking.
          </span>
        </div>
      </div>
    </section>
  );
}
