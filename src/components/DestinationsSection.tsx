'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, Building2, Check, Sparkles, MapPin, Compass, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '@/data/packageData';

export default function DestinationsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'pattaya' | 'bangkok'>('all');

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-gradient-to-b from-[#071B2C] via-[#040E17] to-[#071B2C] relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#087E9E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D6B36A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 4: EXPLORE YOUR DESTINATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Two Cities. Different Experiences. <br />
            <span className="gold-gradient-text">One Amazing Trip.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 font-light leading-relaxed">
            Experience the ideal balance of Thailand: 2 nights unwinding along Pattaya&apos;s turquoise coastal shores, followed by 2 nights immersed in Bangkok&apos;s legendary cultural majesty and shopping.
          </p>
        </div>

        {/* Tab Controls for Filtering or Viewing Both */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-[#D6B36A] text-[#071B2C] shadow-lg font-black'
                  : 'text-[#F5EBDD]/70 hover:text-white'
              }`}
            >
              View Both Cities
            </button>
            <button
              onClick={() => setActiveTab('pattaya')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === 'pattaya'
                  ? 'bg-[#D6B36A] text-[#071B2C] shadow-lg font-black'
                  : 'text-[#F5EBDD]/70 hover:text-white'
              }`}
            >
              <Waves className="w-4 h-4" />
              <span>Pattaya (2N)</span>
            </button>
            <button
              onClick={() => setActiveTab('bangkok')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === 'bangkok'
                  ? 'bg-[#D6B36A] text-[#071B2C] shadow-lg font-black'
                  : 'text-[#F5EBDD]/70 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Bangkok (2N)</span>
            </button>
          </div>
        </div>

        {/* Two Large Cinematic Destination Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          <AnimatePresence mode="popLayout">
            {DESTINATIONS.filter((d) => activeTab === 'all' || d.id === activeTab).map((dest) => {
              const isPattaya = dest.id === 'pattaya';

              return (
                <motion.div
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group relative rounded-3xl overflow-hidden border border-[#D6B36A]/30 bg-[#071B2C]/90 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between"
                >
                  {/* Large Hero Destination Image Banner */}
                  <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${dest.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071B2C] via-[#071B2C]/40 to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#040E17]/85 backdrop-blur-md text-[#D6B36A] text-xs font-black border border-[#D6B36A]/30 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D6B36A]" />
                        {dest.stayNights}
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full bg-[#12A6A0]/85 backdrop-blur-md text-white text-xs font-bold border border-[#12A6A0]/40">
                        4-Star Hotel Stay
                      </span>
                    </div>

                    {/* Destination Title Overlay */}
                    <div className="absolute bottom-5 left-6 right-6">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#D6B36A] font-extrabold block mb-1">
                        {isPattaya ? 'Coastal Paradise & Islands' : 'Royal Culture & Metropolitan Life'}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-black text-white font-serif tracking-tight">
                        {dest.city}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#F5EBDD] font-medium mt-1">
                        {dest.theme}
                      </p>
                    </div>
                  </div>

                  {/* Destination Information Body */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                      {dest.description}
                    </p>

                    {/* Experience Highlights Grid */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6B36A]">
                        <Sparkles className="w-4 h-4 text-[#D6B36A]" />
                        <span>Experience Highlights:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {dest.highlights.map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs text-white hover:border-[#D6B36A]/30 transition-colors"
                          >
                            <Check className="w-4 h-4 text-[#12A6A0] shrink-0 mt-0.5" />
                            <span className="font-medium">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hotel Allocation & Inclusions Footer */}
                    <div className="p-4 rounded-2xl bg-[#040E17]/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="text-[#F5EBDD]/60 block text-[10px] uppercase font-bold">
                          Confirmed 4-Star Stay
                        </span>
                        <span className="font-bold text-white text-sm">
                          {isPattaya ? 'Beston Pattaya (Deluxe Room)' : 'Best Western Sukhumvit 20 (Superior Room)'}
                        </span>
                      </div>
                      <span className="text-[#D6B36A] font-bold text-xs sm:text-right shrink-0">
                        Daily Breakfast Included
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
