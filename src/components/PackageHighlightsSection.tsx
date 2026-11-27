'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Palmtree, 
  Building2, 
  Plane, 
  Ship, 
  Landmark, 
  Hotel, 
  Car,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { HIGHLIGHTS } from '@/data/packageData';

interface PackageHighlightsSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function PackageHighlightsSection({ onHoldSeatsClick }: PackageHighlightsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar': return <Calendar className="w-5 h-5 text-[#D6B36A]" />;
      case 'Palmtree': return <Palmtree className="w-5 h-5 text-[#12A6A0]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-sky-400" />;
      case 'Plane': return <Plane className="w-5 h-5 text-[#D6B36A]" />;
      case 'Ship': return <Ship className="w-5 h-5 text-[#12A6A0]" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-amber-300" />;
      case 'Hotel': return <Hotel className="w-5 h-5 text-[#D6B36A]" />;
      case 'Car': return <Car className="w-5 h-5 text-teal-300" />;
      default: return <Sparkles className="w-5 h-5 text-[#D6B36A]" />;
    }
  };

  return (
    <section id="highlights" className="py-24 sm:py-32 bg-[#071B2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 3: PACKAGE HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Everything You Need for a <br />
            <span className="gold-gradient-text">Memorable Thailand Holiday</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            Carefully curated for two travellers with non-stop flights from Delhi, handpicked 4-star hotels, speedboat adventures, and iconic cultural sightseeing.
          </p>
        </div>

        {/* 8 Visually Rich Photography Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#D6B36A]/50 bg-[#0B2236] shadow-2xl flex flex-col justify-between transition-all duration-300"
            >
              {/* Background Photography with Zoom Hover */}
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2236] via-[#071B2C]/60 to-black/30" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#071B2C]/90 backdrop-blur-md text-[#D6B36A] text-[10px] font-bold border border-[#D6B36A]/30 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Floating Modern Icon */}
                <div className="absolute bottom-3 right-4 w-10 h-10 rounded-xl bg-[#071B2C]/90 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:border-[#D6B36A]/60 transition-colors">
                  {getIcon(item.icon)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D6B36A] font-bold block mb-1">
                    Highlight 0{index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif group-hover:text-[#D6B36A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F5EBDD]/70 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#F5EBDD]/60">
                  <span className="flex items-center gap-1 text-[#12A6A0] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Included
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#D6B36A]">
                    Verified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B2236] via-[#143857] to-[#0B2236] border border-[#D6B36A]/35 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white font-serif">
              Ready to experience this complete holiday?
            </h4>
            <p className="text-xs sm:text-sm text-[#F5EBDD]/80">
              Hold your seats today with a booking token of just <strong className="text-[#D6B36A]">₹500</strong>.
            </p>
          </div>
          <button
            onClick={onHoldSeatsClick || (() => {
              document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
            })}
            className="gold-luxury-btn text-[#071B2C] font-black text-xs sm:text-sm px-7 py-3.5 rounded-xl flex items-center gap-2 shrink-0 tracking-wider uppercase"
          >
            <span>HOLD MY SEATS FOR ₹500</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
