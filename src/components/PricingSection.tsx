'use client';

import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

interface PricingSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function PricingSection({ onHoldSeatsClick }: PricingSectionProps) {
  const inclusionsList = [
    'Return Air India flights from Delhi.',
    '4 Nights in selected 4-star hotels.',
    'Daily breakfast.',
    'Coral Island tour with Indian lunch.',
    'Bangkok City Temple Tour.',
    'Airport and inter-hotel transfers.',
    'Complimentary eSIM.',
    'Travel insurance.',
  ];

  const handleCtaClick = () => {
    if (onHoldSeatsClick) {
      onHoldSeatsClick();
    } else {
      const el = document.querySelector('#enquiry-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-gradient-to-b from-[#070D18] via-[#0C172A] to-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 10: PACKAGE PRICING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Your Thailand Getaway at <br />
            <span className="gold-gradient-text">₹61,000 Per Person!</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Enjoy a complete 4 Nights / 5 Days holiday covering Pattaya and Bangkok, with flights, hotel stays, sightseeing and transfers included.
          </p>
        </div>

        {/* Pricing Card Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#121F35] to-[#0B1424] border border-amber-500/40 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-3xl pointer-events-none" />

          {/* Pricing Header Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                COMPLETE PACKAGE PRICE
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif">
                  {PACKAGE_INFO.pricePerPersonFormatted}
                </span>
                <span className="text-slate-300 font-medium text-sm sm:text-base">
                  Per Person
                </span>
              </div>
            </div>

            <div className="text-center sm:text-right p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs text-slate-400 block font-medium">Total for 2 Travellers</span>
              <span className="text-xl sm:text-2xl font-bold text-white font-serif">
                {PACKAGE_INFO.totalPackagePriceFormatted}
              </span>
            </div>
          </div>

          {/* Package Details Table as per PDF */}
          <div className="my-6 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-slate-300 uppercase font-semibold text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-3 px-4">Package Details</th>
                  <th className="py-3 px-4 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                <tr>
                  <td className="py-3 px-4 font-medium">Price Per Person</td>
                  <td className="py-3 px-4 text-right font-bold text-amber-400">{PACKAGE_INFO.pricePerPersonFormatted}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Number of Travellers</td>
                  <td className="py-3 px-4 text-right font-bold">2</td>
                </tr>
                <tr className="bg-amber-400/10 font-bold">
                  <td className="py-3.5 px-4 text-white">Total Package Price</td>
                  <td className="py-3.5 px-4 text-right text-base text-amber-300 font-serif">
                    {PACKAGE_INFO.totalPackagePriceFormatted}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* What Are You Getting in This Price? */}
          <div className="space-y-4 my-8">
            <h4 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              What Are You Getting in This Price?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inclusionsList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seat Hold Callout Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-amber-500/15 border border-amber-500/30 text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
              BOOK YOUR THAILAND GETAWAY FOR JUST {PACKAGE_INFO.bookingTokenFormatted}!
            </span>
            <p className="text-sm text-slate-200">
              You can start your booking with a seat-hold amount of just <strong>{PACKAGE_INFO.bookingTokenFormatted}</strong>.
              Our travel team will guide you through the remaining booking process, payment schedule and confirmation.
            </p>

            <div className="pt-2">
              <button
                onClick={handleCtaClick}
                className="gold-shimmer-btn text-slate-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-xl"
              >
                <span>RESERVE MY SEATS NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Important Pricing Note from PDF */}
          <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 text-center leading-relaxed">
            <strong className="text-slate-300">Important Pricing Note: </strong>
            {PACKAGE_INFO.importantPricingNote}
          </div>
        </div>
      </div>
    </section>
  );
}
