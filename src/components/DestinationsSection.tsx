'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Check, Sparkles, Waves, Building, Sun, Utensils, Camera } from 'lucide-react';
import { DESTINATIONS } from '@/data/packageData';

export default function DestinationsSection() {
  const [activeCity, setActiveCity] = useState<'pattaya' | 'bangkok'>('pattaya');

  return (
    <section id="destinations" className="py-20 sm:py-24 bg-gradient-to-b from-[#070D18] via-[#0C1627] to-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 4: EXPLORE YOUR DESTINATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Two Cities. Different Experiences. <br />
            <span className="gold-gradient-text">One Amazing Trip.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From Pattaya&apos;s sun-kissed islands and seaside buzz to Bangkok&apos;s majestic golden shrines and high-energy shopping boulevard.
          </p>
        </div>

        {/* City Toggle Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveCity('pattaya')}
              className={`flex items-center gap-2 px-5 sm:px-8 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeCity === 'pattaya'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Waves className="w-4 h-4" />
              <span>PATTAYA (2 Nights)</span>
            </button>
            <button
              onClick={() => setActiveCity('bangkok')}
              className={`flex items-center gap-2 px-5 sm:px-8 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeCity === 'bangkok'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>BANGKOK (2 Nights)</span>
            </button>
          </div>
        </div>

        {/* Side-by-side Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {DESTINATIONS.map((dest) => {
            const isPattaya = dest.id === 'pattaya';
            const isHighlight = activeCity === dest.id;

            return (
              <div
                key={dest.id}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? 'border-amber-400/50 bg-[#121F35]/95 shadow-2xl ring-2 ring-amber-400/20'
                    : 'border-white/10 bg-[#0E182A]/80 hover:border-white/20'
                }`}
              >
                {/* Image Banner */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url('${dest.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121F35] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/30">
                      {dest.stayNights}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                      4-Star Hotel Stay
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                      {isPattaya ? 'Coastal Paradise' : 'Metropolitan Majesty'}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
                      {dest.city}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      {dest.theme}
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {dest.description}
                  </p>

                  {/* Experience Highlights */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300/90 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Experience Highlights:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {dest.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200"
                        >
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Inclusion badge */}
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-300">
                      {isPattaya ? 'Hotel: Beston Pattaya (Deluxe)' : 'Hotel: Best Western Sukhumvit 20'}
                    </span>
                    <span className="text-amber-400 font-semibold">Breakfast Included</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
