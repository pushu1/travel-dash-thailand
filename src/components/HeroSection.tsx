'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  Plane, 
  Hotel, 
  MapPin, 
  Calendar, 
  ShieldCheck,
  CheckCircle2,
  Waves
} from 'lucide-react';
import HeroEnquiryForm from './HeroEnquiryForm';
import { PACKAGE_INFO } from '@/data/packageData';

interface HeroSectionProps {
  onHoldSeatsClick: () => void;
}

export default function HeroSection({ onHoldSeatsClick }: HeroSectionProps) {
  const scrollToHighlights = () => {
    const el = document.querySelector('#highlights');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Background with Cinematic Dark Gradient & Subtle Animation */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 animate-pulse-subtle"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=85')`,
          }}
        />
        {/* Layered cinematic vignettes and luxury dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040E17]/95 via-[#071B2C]/85 to-[#071B2C]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C] via-transparent to-[#040E17]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(18,166,160,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(214,179,106,0.12),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Typography & Visual Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B36A]" />
              <span>THAILAND GETAWAY • 4 NIGHTS / 5 DAYS</span>
            </div>

            {/* Main Cinematic Heading as Requested */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] font-serif">
              YOUR NEXT GREAT ESCAPE <br />
              <span className="gold-gradient-text">STARTS IN THAILAND</span>
            </h1>

            {/* Subtitle as Requested */}
            <p className="text-base sm:text-xl font-medium text-[#F5EBDD] font-serif italic tracking-wide">
              &ldquo;Two Amazing Cities. Five Unforgettable Days. One Incredible Journey.&rdquo;
            </p>

            {/* Narrative text from PDF */}
            <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed max-w-2xl">
              From the sun-kissed beaches of Pattaya to the vibrant skyline and golden shrines of Bangkok, experience an extraordinary Thailand getaway with your partner, husband or wife, best friend, or favourite travel companion.
            </p>

            {/* 4 Feature Badges Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#D6B36A] shrink-0" />
                <span className="text-xs font-bold text-white">4N / 5D</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#12A6A0] shrink-0" />
                <span className="text-xs font-bold text-white">Pattaya + Bangkok</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2.5">
                <Plane className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs font-bold text-white">Direct Air India</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2.5">
                <Hotel className="w-4 h-4 text-[#D6B36A] shrink-0" />
                <span className="text-xs font-bold text-white">4-Star Stays</span>
              </div>
            </div>

            {/* Animated Price Showcase Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#0B2236]/90 via-[#0E2A42]/90 to-[#0B2236]/90 border border-[#D6B36A]/35 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-[#F5EBDD]/70 font-semibold">
                  COMPLETE PACKAGE PRICE
                </span>
                <span className="text-xs text-[#12A6A0] font-bold bg-[#12A6A0]/15 px-3 py-1 rounded-full border border-[#12A6A0]/30">
                  Return Air India Flights Included
                </span>
              </div>

              <div className="pt-3 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-5xl font-black text-[#D6B36A] tracking-tight font-serif">
                  {PACKAGE_INFO.pricePerPersonFormatted}
                </span>
                <span className="text-sm sm:text-base text-[#F5EBDD]/90 font-medium">
                  / Person
                </span>
                <div className="ml-auto text-right">
                  <div className="text-sm sm:text-base font-extrabold text-white">
                    Total: <span className="text-[#D6B36A]">{PACKAGE_INFO.totalPackagePriceFormatted}</span> for 2 Travellers
                  </div>
                  <div className="text-[11px] text-[#F5EBDD]/60">
                    Flights, 4-Star Hotels, Sightseeing & Transfers Included
                  </div>
                </div>
              </div>

              {/* Special Offer Banner */}
              <div className="mt-4 p-3 rounded-xl bg-[#D6B36A]/15 border border-[#D6B36A]/30 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D6B36A] shrink-0" />
                  <span>
                    <strong className="text-[#D6B36A]">Special Offer:</strong> Hold Your Seats for Just <strong>₹500!</strong>
                  </span>
                </div>
                <span className="text-[10px] text-[#F5EBDD]/70 hidden sm:inline">
                  Limited Departure Slots
                </span>
              </div>
            </div>

            {/* CTAs as Requested: EXPLORE THAILAND & RESERVE MY SEATS */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onHoldSeatsClick || (() => {
                  document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                })}
                className="gold-luxury-btn text-[#071B2C] font-black text-sm sm:text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-2xl tracking-wider uppercase"
              >
                <span>RESERVE MY SEATS</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={scrollToHighlights}
                className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2 hover:border-[#D6B36A]/40"
              >
                <span>EXPLORE THAILAND</span>
                <ChevronDown className="w-4 h-4 text-[#D6B36A]" />
              </button>
            </div>

            {/* Subtle Scroll Down Prompt */}
            <div className="pt-4 flex items-center gap-2 text-xs text-[#F5EBDD]/60">
              <span className="w-1.5 h-1.5 rounded-full bg-[#12A6A0] animate-ping" />
              <span>Scroll down to explore the 5-day itinerary, hotels, and experiences</span>
            </div>
          </motion.div>

          {/* Right Column: Hero Side Booking Card on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 w-full mt-6 lg:mt-0"
          >
            <HeroEnquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
