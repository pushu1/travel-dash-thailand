'use client';

import React from 'react';
import Image from 'next/image';
import { Hotel, Star, CheckCircle2, Coffee, Wifi, Waves, MapPin, Sparkles } from 'lucide-react';
import { HOTELS } from '@/data/packageData';

export default function HotelDetailsSection() {
  return (
    <section id="hotels" className="py-20 sm:py-24 bg-gradient-to-b from-[#070D18] via-[#0B1526] to-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 6: HOTEL DETAILS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif mb-4">
            Comfortable Stays in <br />
            <span className="gold-gradient-text">Both Cities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Your package includes selected 4-star hotel stays with daily breakfast. Enjoy comfortable accommodation in both destinations throughout your Thailand holiday.
          </p>
        </div>

        {/* 2 Hotels Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {HOTELS.map((hotel) => (
            <div
              key={hotel.name}
              className="rounded-3xl bg-[#0E1A2C] border border-white/10 hover:border-amber-400/40 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Hotel Image with Badges */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${hotel.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2C] via-transparent to-black/30" />

                {/* City & Category Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/30">
                    {hotel.city}
                  </span>
                  <div className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-extrabold flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                    <span>4 STAR HOTEL</span>
                  </div>
                </div>

                {/* Hotel Name overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                    {hotel.stayDuration}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-serif">
                    {hotel.name}
                  </h3>
                </div>
              </div>

              {/* Hotel Specs as per PDF */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                {/* Specifics Grid from PDF */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Duration</span>
                    <span className="font-bold text-white text-sm">{hotel.stayDuration}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Category</span>
                    <span className="font-bold text-amber-400 text-sm">{hotel.category}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Room Type</span>
                    <span className="font-bold text-white text-sm">{hotel.roomType}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Meal Plan</span>
                    <span className="font-bold text-emerald-400 text-sm">{hotel.mealPlan}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {hotel.description}
                </p>

                {/* Features Pill */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Hotel Inclusions & Highlights:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {hotel.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-200 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Confirmation Footer */}
                <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Coffee className="w-4 h-4 text-amber-400" /> Daily Breakfast Included
                  </span>
                  <span className="text-emerald-400 font-semibold">Verified 4-Star Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
