'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { INCLUSIONS, EXCLUSIONS } from '@/data/packageData';

export default function InclusionsExclusionsSection() {
  return (
    <section id="inclusions" className="py-24 sm:py-32 bg-gradient-to-b from-[#071B2C] via-[#040E17] to-[#071B2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 8: PACKAGE INCLUSIONS & EXCLUSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            What&apos;s Included in Your <br />
            <span className="gold-gradient-text">Thailand Package?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            Your package covers the essential arrangements for a comfortable holiday. Total transparency with zero surprise fees.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inclusions Card (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-[#0B2236]/90 border border-[#12A6A0]/40 p-6 sm:p-9 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#12A6A0]/20 border border-[#12A6A0]/40 flex items-center justify-center text-[#12A6A0]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">Inclusions</h3>
                  <span className="text-xs text-[#12A6A0] font-semibold">10 Essential Arrangements Covered</span>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-[#12A6A0]/20 text-[#12A6A0] border border-[#12A6A0]/40 text-xs font-bold">
                All Included
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUSIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#12A6A0]/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#12A6A0] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-white font-normal leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#F5EBDD]/60">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Sparkles className="w-4 h-4 text-[#D6B36A]" /> Return flights, hotels & transfers in one package
              </span>
              <span className="text-[#D6B36A] font-bold">4-Star Comfort</span>
            </div>
          </motion.div>

          {/* Exclusions Card (Col 5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-[#0B2236]/90 border border-white/15 p-6 sm:p-9 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                  <XCircle className="w-6 h-6 text-red-400/80" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-serif">Exclusions</h3>
                  <span className="text-xs text-[#F5EBDD]/60 font-semibold">Clear & Transparent Boundaries</span>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-white/5 text-[#F5EBDD]/70 border border-white/10 text-xs font-bold">
                Not Included
              </span>
            </div>

            <div className="space-y-3">
              {EXCLUSIONS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-[#F5EBDD]/80"
                >
                  <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#D6B36A]/10 border border-[#D6B36A]/25 text-xs text-[#F5EBDD]/90">
              <p className="font-bold text-[#D6B36A] mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Need optional add-ons?
              </p>
              Optional experiences such as Safari World, Chao Phraya dinner cruise or Tiger Park can be easily added to your booking package.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
