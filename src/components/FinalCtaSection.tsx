'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, MessageCircle, ArrowRight, Heart, AlertCircle } from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

interface FinalCtaSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function FinalCtaSection({ onHoldSeatsClick }: FinalCtaSectionProps) {
  const handlePrimaryClick = () => {
    if (onHoldSeatsClick) {
      onHoldSeatsClick();
    } else {
      document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Cinematic Full-Width Tropical Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040E17] via-[#071B2C]/90 to-[#040E17]" />
        <div className="absolute inset-0 bg-[#071B2C]/60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/15 border border-[#D6B36A]/40 text-[#D6B36A] text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 fill-[#D6B36A] text-[#D6B36A]" />
            <span>SECTION 13: FINAL CALL TO ACTION</span>
          </div>

          {/* Heading as Requested: THAILAND IS CALLING. WHO'S COMING WITH YOU? */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif leading-[1.12]">
            THAILAND IS CALLING. <br />
            <span className="gold-gradient-text">WHO&apos;S COMING WITH YOU?</span>
          </h2>

          <div className="max-w-2xl mx-auto space-y-3 text-[#F5EBDD]/85 text-sm sm:text-base leading-relaxed font-light">
            <p>
              A new destination, beautiful beaches, exciting experiences and five days away from your regular routine.
            </p>
            <p className="text-white font-medium text-base sm:text-lg font-serif">
              Thailand is calling. All you need is your travel companion!
            </p>
            <p>
              Whether it&apos;s your partner, husband or wife, best friend, or someone who simply loves travelling, make this a trip to remember.
            </p>
          </div>

          {/* Highlighted Price Banner */}
          <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0B2236]/90 border border-[#D6B36A]/40 shadow-2xl backdrop-blur-xl my-6 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#D6B36A] font-extrabold">
              YOUR THAILAND GETAWAY STARTS AT
            </div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D6B36A] font-serif">
              {PACKAGE_INFO.pricePerPersonFormatted} <span className="text-sm sm:text-lg text-[#F5EBDD]/80 font-medium">/ PERSON!</span>
            </div>
            <div className="text-xs sm:text-sm text-[#F5EBDD]/80 font-medium">
              Total Package: {PACKAGE_INFO.totalPackagePriceFormatted} for 2 Travellers with Air India Non-Stop Flights & 4-Star Hotels
            </div>

            <div className="pt-2 text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D6B36A]" />
              <span>Hold Your Seats for Just <strong className="text-[#D6B36A]">{PACKAGE_INFO.bookingTokenFormatted}!</strong></span>
            </div>
          </div>

          {/* CTAs as Requested */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto pt-2">
            <button
              onClick={handlePrimaryClick}
              className="w-full sm:w-auto gold-luxury-btn text-[#071B2C] font-black text-sm sm:text-base px-9 py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-2xl tracking-wider uppercase hover:scale-105 active:scale-95 transition-all"
            >
              <span>BOOK MY THAILAND TRIP</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>

            <a
              href={PACKAGE_INFO.phoneCallUrl}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/25 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-[#D6B36A]" />
              <span>TALK TO A TRAVEL EXPERT</span>
            </a>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="pt-3">
            <a
              href={PACKAGE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#12A6A0] hover:text-white font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat directly on WhatsApp: {PACKAGE_INFO.contactPhone}</span>
            </a>
          </div>

          {/* Disclaimer Note */}
          <div className="pt-6 border-t border-white/10 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-[#F5EBDD]/60 font-light">
            <AlertCircle className="w-4 h-4 text-[#D6B36A] shrink-0" />
            <span>
              Limited departure dates available. Flight and hotel availability is subject to confirmation at the time of booking.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
