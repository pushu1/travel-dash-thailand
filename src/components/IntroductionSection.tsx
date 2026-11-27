'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, Heart, Users, CheckCircle2 } from 'lucide-react';

interface IntroductionSectionProps {
  onExploreClick?: () => void;
}

export default function IntroductionSection({ onExploreClick }: IntroductionSectionProps) {
  const handleClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      document.querySelector('#highlights')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#071B2C] via-[#0B2236] to-[#071B2C] relative overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#087E9E]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#D6B36A]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D6B36A] text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3.5 h-3.5 fill-[#D6B36A] text-[#D6B36A]" />
            <span>SECTION 2: INTRODUCTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif leading-[1.18]">
            Your Next Favourite Travel Memory <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Starts in Thailand!</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-5 text-[#F5EBDD]/85 text-base sm:text-lg leading-relaxed font-light">
            <p>
              Imagine waking up in a new city, exploring beautiful beaches, enjoying exciting island adventures and ending your evenings discovering the vibrant lifestyle of Bangkok.
            </p>
            <p>
              This Thailand package brings together two of the country&apos;s most popular destinations in one exciting 5-day getaway.
            </p>
            <p className="text-white font-medium text-lg sm:text-xl font-serif">
              Whether you&apos;re planning a holiday with your partner, travelling with your husband or wife, or simply want to explore a new destination with a friend, this trip is designed for two travellers.
            </p>

            {/* Highlighted Callout Box from PDF */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0E2A42] via-[#143857] to-[#0E2A42] border border-[#D6B36A]/30 text-white shadow-xl my-6">
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                No need to organise flights, hotels and sightseeing separately. Everything is planned together to make your holiday easier.
              </p>
            </div>
          </div>

          {/* CTA: EXPLORE THE PACKAGE */}
          <div className="pt-4">
            <button
              onClick={handleClick}
              className="teal-luxury-btn text-white font-extrabold text-sm sm:text-base px-9 py-4 rounded-xl inline-flex items-center gap-2.5 shadow-xl tracking-wider uppercase"
            >
              <span>EXPLORE THE PACKAGE</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
