'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Coffee, Wifi, Waves, MapPin, CheckCircle2, Bed, Sparkles } from 'lucide-react';
import { HOTELS } from '@/data/packageData';

export default function HotelDetailsSection() {
  return (
    <section id="hotels" className="py-24 sm:py-32 bg-gradient-to-b from-[#071B2C] via-[#0B2236] to-[#071B2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 6: HOTEL DETAILS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Comfortable Stays in <br />
            <span className="gold-gradient-text">Both Cities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            Your package includes selected 4-star hotel stays with daily breakfast. Enjoy comfortable accommodation in both destinations throughout your Thailand holiday.
          </p>
        </div>

        {/* 2 Hotels Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {HOTELS.map((hotel, index) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group rounded-3xl bg-[#0B2236]/90 border border-white/10 hover:border-[#D6B36A]/40 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* Hotel Photography */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${hotel.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2236] via-[#071B2C]/40 to-black/30" />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#040E17]/85 backdrop-blur-md text-[#D6B36A] text-xs font-black border border-[#D6B36A]/30">
                    {hotel.city}
                  </span>
                  <div className="px-3.5 py-1.5 rounded-full bg-[#D6B36A] text-[#071B2C] text-xs font-black flex items-center gap-1 shadow-md">
                    <Star className="w-3.5 h-3.5 fill-[#071B2C] text-[#071B2C]" />
                    <span>4-STAR HOTEL</span>
                  </div>
                </div>

                {/* Hotel Name Overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[11px] uppercase tracking-widest text-[#D6B36A] font-bold">
                    {hotel.stayDuration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-tight">
                    {hotel.name}
                  </h3>
                </div>
              </div>

              {/* Hotel Specs Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                {/* 4-Box Specifications Grid */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#040E17]/80 border border-white/10 text-xs">
                  <div>
                    <span className="text-[#F5EBDD]/60 block text-[10px] uppercase font-bold">Stay Duration</span>
                    <span className="font-bold text-white text-sm">{hotel.stayDuration}</span>
                  </div>
                  <div>
                    <span className="text-[#F5EBDD]/60 block text-[10px] uppercase font-bold">Category</span>
                    <span className="font-bold text-[#D6B36A] text-sm">{hotel.category}</span>
                  </div>
                  <div>
                    <span className="text-[#F5EBDD]/60 block text-[10px] uppercase font-bold">Room Type</span>
                    <span className="font-bold text-white text-sm">{hotel.roomType}</span>
                  </div>
                  <div>
                    <span className="text-[#F5EBDD]/60 block text-[10px] uppercase font-bold">Meal Plan</span>
                    <span className="font-bold text-[#12A6A0] text-sm">{hotel.mealPlan}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                  {hotel.description}
                </p>

                {/* Features Pills */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6B36A] block">
                    Hotel Inclusions & Highlights:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {hotel.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12A6A0]" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Confirmation */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#F5EBDD]/70 border-t border-white/10">
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <Coffee className="w-4 h-4 text-[#D6B36A]" /> Daily Breakfast Included
                  </span>
                  <span className="text-[#12A6A0] font-bold">Handpicked Quality</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
