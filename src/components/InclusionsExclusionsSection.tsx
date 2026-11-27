'use client';

import React from 'react';
import { CheckCircle2, XCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { INCLUSIONS, EXCLUSIONS } from '@/data/packageData';

export default function InclusionsExclusionsSection() {
  return (
    <section id="inclusions" className="py-20 sm:py-24 bg-gradient-to-b from-[#070D18] via-[#0C1628] to-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 8: PACKAGE INCLUSIONS & EXCLUSIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            What&apos;s Included in Your <br />
            <span className="gold-gradient-text">Thailand Package?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Your package covers the essential arrangements for a comfortable holiday. Total transparency with zero surprise fees.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inclusions Card (Col 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0E1A2C] border border-emerald-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">Inclusions</h3>
                  <span className="text-[11px] text-emerald-400 font-medium">10 Essential Components Covered</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                All Included
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUSIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Complete peace of mind guaranteed
              </span>
              <span className="text-amber-400 font-semibold">4-Star Comfort</span>
            </div>
          </div>

          {/* Exclusions Card (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0E1A2C] border border-white/10 p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif">Exclusions</h3>
                  <span className="text-[11px] text-slate-400 font-medium">Clear & Transparent Boundaries</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 text-xs font-semibold">
                Not Included
              </span>
            </div>

            <div className="space-y-3">
              {EXCLUSIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300"
                >
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300">
              <p className="font-semibold text-amber-300 mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Want to add extras?
              </p>
              Optional tours like Chao Phraya Cruise, Safari World, or Tiger Park can be easily added to your booking at exclusive member rates.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
