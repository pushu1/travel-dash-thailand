'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { FAQS, PACKAGE_INFO } from '@/data/packageData';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-gradient-to-b from-[#071B2C] via-[#040E17] to-[#071B2C] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 12: FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Everything You Need to <br />
            <span className="gold-gradient-text">Know Before Booking</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            Have questions about flights, hotels, unmarried couples, transfers or add-ons? All 20 answers are right here.
          </p>

          {/* Interactive Search Bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <Search className="w-4 h-4 text-[#D6B36A] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search all 20 questions (e.g. couple, flights, eSIM, lunch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0B2236]/90 border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#D6B36A] transition-all shadow-lg backdrop-blur-md"
            />
          </div>
        </div>

        {/* 20 FAQs Accordion */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                layout
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0B2236] border-[#D6B36A]/50 shadow-2xl'
                    : 'bg-[#071B2C]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-7 h-7 rounded-full text-xs font-black flex items-center justify-center shrink-0 border transition-colors ${
                      isOpen
                        ? 'bg-[#D6B36A] text-[#071B2C] border-[#D6B36A]'
                        : 'bg-white/5 text-[#D6B36A] border-[#D6B36A]/30'
                    }`}>
                      {faq.id}
                    </span>
                    <span className="font-bold text-white text-sm sm:text-base leading-snug font-serif">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-[#D6B36A]">
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 pb-5 pt-1 text-[#F5EBDD]/85 text-xs sm:text-sm leading-relaxed border-t border-white/5"
                    >
                      <div className="p-4 rounded-xl bg-[#040E17]/60 border border-white/5 text-white font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#0B2236] via-[#143857] to-[#0B2236] border border-white/10 text-center space-y-4 shadow-xl">
          <p className="text-sm text-[#F5EBDD] font-light">
            Have a custom travel requirement or question not listed here? Our Thailand travel specialists are available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href={PACKAGE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-5 py-2.5 rounded-xl bg-[#12A6A0] text-white hover:brightness-110 transition-all flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={PACKAGE_INFO.phoneCallUrl}
              className="text-xs font-bold px-5 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D6B36A]" />
              <span>Call +91 90577 06333</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
