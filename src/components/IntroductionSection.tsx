'use client';

import React from 'react';
import { Sparkles, ArrowRight, Heart, Compass, CheckCircle } from 'lucide-react';

interface IntroductionSectionProps {
  onExploreClick?: () => void;
}

export default function IntroductionSection({ onExploreClick }: IntroductionSectionProps) {
  const handleClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.querySelector('#highlights');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#070D18] via-[#0B1424] to-[#070D18] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated For Two Travellers</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif leading-tight mb-6">
          Your Next Favourite Travel Memory <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Starts in Thailand!</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            Imagine waking up in a new city, exploring beautiful beaches, enjoying exciting island adventures and ending your evenings discovering the vibrant lifestyle of Bangkok.
          </p>
          <p>
            This Thailand package brings together two of the country&apos;s most popular destinations in one exciting 5-day getaway.
          </p>
          <p className="text-white font-medium">
            Whether you&apos;re planning a holiday with your partner, travelling with your husband or wife, or simply want to explore a new destination with a friend, this trip is designed for two travellers.
          </p>
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-500/20 text-slate-200 text-sm sm:text-base font-normal my-4">
            No need to organise flights, hotels and sightseeing separately. Everything is planned together to make your holiday easier.
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-6">
          <button
            onClick={handleClick}
            className="teal-shimmer-btn text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-lg hover:shadow-teal-500/30 transition-all"
          >
            <span>EXPLORE THE PACKAGE</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
