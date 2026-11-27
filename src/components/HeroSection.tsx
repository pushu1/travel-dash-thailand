'use client';

import React from 'react';
import { Plane, Calendar, MapPin, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import HeroEnquiryForm from './HeroEnquiryForm';
import { PACKAGE_INFO } from '@/data/packageData';

interface HeroSectionProps {
  onHoldSeatsClick: () => void;
}

export default function HeroSection({ onHoldSeatsClick }: HeroSectionProps) {
  const scrollToDetails = () => {
    const el = document.querySelector('#highlights');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24 flex items-center overflow-hidden">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Layered gradients for legibility and ultra-luxury dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/95 via-[#070D18]/85 to-[#070D18]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-[#070D18]/70" />
        {/* Subtle decorative glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>{PACKAGE_INFO.title}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-serif">
              Thailand Is Better <br className="hidden sm:inline" />
              When You <span className="gold-gradient-text">Travel Together!</span>
            </h1>

            {/* Subheadline & Description as per PDF */}
            <div className="space-y-3 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                From the beautiful beaches of Pattaya to the vibrant streets of Bangkok, experience an unforgettable Thailand getaway with your partner, husband or wife, best friend, or favourite travel companion.
              </p>
              <p className="text-slate-200 font-medium">
                Enjoy exciting island adventures, city sightseeing, comfortable hotel stays and direct flights from Delhi.
              </p>
              <div className="pt-1 flex items-center gap-2 text-amber-300 font-bold text-base sm:text-lg">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{PACKAGE_INFO.travellerCountText}</span>
              </div>
            </div>

            {/* Price Box Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#121F35]/90 to-[#182B49]/90 border border-amber-500/30 backdrop-blur-md shadow-xl">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  YOUR PACKAGE PRICE
                </span>
                <span className="text-xs text-emerald-400 font-medium bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Direct Air India Flights Included
                </span>
              </div>

              <div className="pt-3 flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight font-serif">
                  {PACKAGE_INFO.pricePerPersonFormatted}
                </span>
                <span className="text-sm sm:text-base text-slate-300 font-medium">
                  / Person
                </span>
                <div className="ml-auto text-right">
                  <div className="text-sm sm:text-base font-bold text-white">
                    Total Package Price: <span className="text-amber-300">{PACKAGE_INFO.totalPackagePriceFormatted}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    for 2 Travellers (All Taxes Included)
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 text-xs text-slate-300 flex flex-wrap items-center gap-y-1 gap-x-3">
                <span className="flex items-center gap-1 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Flights
                </span>
                <span className="flex items-center gap-1 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 4-Star Hotels
                </span>
                <span className="flex items-center gap-1 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sightseeing
                </span>
                <span className="flex items-center gap-1 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Transfers Included
                </span>
              </div>
            </div>

            {/* Special Booking Offer Box */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-200">
              <div className="font-bold text-amber-400 uppercase tracking-wide text-xs mb-0.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> SPECIAL BOOKING OFFER
              </div>
              <div className="font-semibold text-white text-sm sm:text-base">
                Hold Your Seats for Just {PACKAGE_INFO.bookingTokenFormatted}!
              </div>
              <div className="text-slate-300 text-xs mt-0.5">
                Choose your preferred departure date and take the first step towards your Thailand getaway.
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onHoldSeatsClick}
                className="gold-shimmer-btn text-slate-950 font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl hover:shadow-amber-500/40"
              >
                <span>HOLD MY SEATS FOR ₹500</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              <button
                onClick={scrollToDetails}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 hover:border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Package Details</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mini Trust Footer */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Non-stop Air India from Delhi
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-amber-400" /> 2N Pattaya + 2N Bangkok
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-teal-400" /> 5 Upcoming Departures
              </span>
            </div>
          </div>

          {/* Right Column: Hero Side Enquiry Form */}
          <div className="lg:col-span-5 w-full">
            <HeroEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
