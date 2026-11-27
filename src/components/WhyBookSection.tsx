'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, Sparkles, Headphones, ArrowRight } from 'lucide-react';
import { WHY_BOOK } from '@/data/packageData';

interface WhyBookSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function WhyBookSection({ onHoldSeatsClick }: WhyBookSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-[#D6B36A]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#12A6A0]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-300" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-sky-400" />;
      default: return <Sparkles className="w-6 h-6 text-[#D6B36A]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#071B2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 11: WHY BOOK WITH TRAVEL DASH?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Your Trip, <span className="gold-gradient-text">Planned With Care</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            We want your Thailand holiday to be about enjoying the experience, not worrying about travel arrangements.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_BOOK.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-3xl bg-[#0B2236]/90 border border-white/10 hover:border-[#D6B36A]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="text-[10px] font-bold tracking-widest text-[#D6B36A] uppercase mb-1">
                  Pillar 0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D6B36A] transition-colors font-serif">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F5EBDD]/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#D6B36A] font-bold flex items-center justify-between">
                <span>The Travel Dash Edge</span>
                <span>✦</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <p className="text-base sm:text-lg text-[#F5EBDD] font-medium font-serif italic">
            Enjoy a smoother way to plan your next international getaway.
          </p>
          <div className="mt-5">
            <button
              onClick={onHoldSeatsClick || (() => {
                document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
              })}
              className="teal-luxury-btn text-white font-extrabold text-xs sm:text-sm px-8 py-4 rounded-xl inline-flex items-center gap-2 shadow-xl tracking-wider uppercase"
            >
              <span>HOLD SEATS FOR ₹500 & SPEAK TO OUR EXPERT</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
