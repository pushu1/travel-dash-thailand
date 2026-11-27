'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
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
      document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-gradient-to-b from-[#071B2C] via-[#040E17] to-[#071B2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 10: PACKAGE PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Your Thailand Getaway at <br />
            <span className="gold-gradient-text">₹61,000 Per Person!</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            Enjoy a complete 4 Nights / 5 Days holiday covering Pattaya and Bangkok, with flights, hotel stays, sightseeing and transfers included.
          </p>
        </div>

        {/* Pricing Conversion Showcase Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0B2236] via-[#0E2A42] to-[#071B2C] border-2 border-[#D6B36A]/45 shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-6 sm:p-12 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B36A]/10 blur-[130px] pointer-events-none" />

          {/* Pricing Header Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-white/10 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D6B36A] font-extrabold block">
                COMPLETE PACKAGE PRICE
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D6B36A] font-serif tracking-tight">
                  {PACKAGE_INFO.pricePerPersonFormatted}
                </span>
                <span className="text-[#F5EBDD]/80 font-medium text-base sm:text-lg">
                  / Person
                </span>
              </div>
            </div>

            <div className="text-center sm:text-right p-4 rounded-2xl bg-[#040E17]/80 border border-white/10">
              <span className="text-xs text-[#F5EBDD]/60 block font-semibold">Total for 2 Travellers</span>
              <span className="text-2xl sm:text-3xl font-black text-white font-serif">
                {PACKAGE_INFO.totalPackagePriceFormatted}
              </span>
            </div>
          </div>

          {/* Package Details Breakdown Table as per PDF */}
          <div className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#040E17]/60">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-[#D6B36A] uppercase font-bold text-[11px] border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-5">Package Details</th>
                  <th className="py-3.5 px-5 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#F5EBDD]/90">
                <tr>
                  <td className="py-3.5 px-5 font-medium">Price Per Person</td>
                  <td className="py-3.5 px-5 text-right font-extrabold text-[#D6B36A] font-serif text-base">{PACKAGE_INFO.pricePerPersonFormatted}</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-medium">Number of Travellers</td>
                  <td className="py-3.5 px-5 text-right font-bold">2</td>
                </tr>
                <tr className="bg-[#D6B36A]/10 font-bold">
                  <td className="py-4 px-5 text-white font-serif text-base">Total Package Price</td>
                  <td className="py-4 px-5 text-right text-lg text-[#D6B36A] font-serif font-black">
                    {PACKAGE_INFO.totalPackagePriceFormatted}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* What Are You Getting in This Price? */}
          <div className="space-y-4 my-8">
            <h4 className="text-lg sm:text-xl font-bold text-white font-serif flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D6B36A]" />
              What Are You Getting in This Price?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {inclusionsList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-white font-light"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#12A6A0] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Seat Hold Callout Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#D6B36A]/20 via-[#D6B36A]/10 to-[#D6B36A]/20 border border-[#D6B36A]/40 text-center space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#D6B36A] block">
              BOOK YOUR THAILAND GETAWAY FOR JUST {PACKAGE_INFO.bookingTokenFormatted}!
            </span>
            <p className="text-sm text-[#F5EBDD]/90 max-w-xl mx-auto leading-relaxed">
              You can start your booking with a seat-hold amount of just <strong>{PACKAGE_INFO.bookingTokenFormatted}</strong>.
              Our travel team will guide you through the remaining booking process, payment schedule and confirmation.
            </p>

            <div className="pt-2">
              <button
                onClick={handleCtaClick}
                className="gold-luxury-btn text-[#071B2C] font-black text-sm sm:text-base px-9 py-4 rounded-xl inline-flex items-center gap-2.5 shadow-2xl tracking-wider uppercase"
              >
                <span>RESERVE MY SEATS NOW</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* Important Pricing Note from PDF */}
          <div className="mt-8 pt-5 border-t border-white/10 text-xs text-[#F5EBDD]/60 text-center leading-relaxed font-light">
            <strong className="text-[#F5EBDD] font-bold">Important Pricing Note: </strong>
            {PACKAGE_INFO.importantPricingNote}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
