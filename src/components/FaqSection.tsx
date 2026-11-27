'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, Sparkles } from 'lucide-react';
import { FAQS } from '@/data/packageData';

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
    <section id="faqs" className="py-20 sm:py-24 bg-gradient-to-b from-[#070D18] via-[#0B1527] to-[#070D18] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 12: FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-serif mb-3">
            Everything You Need to <br />
            <span className="gold-gradient-text">Know Before Booking</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Have questions about flights, hotels, unmarried couples, transfers or add-ons? All 20 answers are right here.
          </p>

          {/* Search Bar for FAQs */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search all 20 questions (e.g. couple, flight, eSIM, lunch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>
        </div>

        {/* 20 FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121F35] border-amber-400/40 shadow-xl'
                    : 'bg-[#0E1A2C]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0 border border-amber-400/20">
                      {faq.id}
                    </span>
                    <span className="font-bold text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                    <p className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-slate-200">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3">
          <p className="text-sm text-slate-300">
            Have a question that is not covered here? Our Thailand travel specialists are available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href="https://wa.me/919057706333?text=Hi%20Travel%20Dash%2C%20I%20have%20a%20question%20about%20the%20Thailand%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
            >
              Ask on WhatsApp
            </a>
            <a
              href="tel:+919057706333"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/15"
            >
              Call +91 90577 06333
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
