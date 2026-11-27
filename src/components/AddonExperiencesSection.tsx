'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { ADDONS, PACKAGE_INFO } from '@/data/packageData';

interface AddonExperiencesSectionProps {
  onHoldSeatsClick?: () => void;
}

export default function AddonExperiencesSection({ onHoldSeatsClick }: AddonExperiencesSectionProps) {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateAddonTotal = () => {
    return selectedAddons.reduce((sum, id) => {
      const addon = ADDONS.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);
  };

  const handleAddExperiences = () => {
    const el = document.querySelector('#enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onHoldSeatsClick) {
      onHoldSeatsClick();
    }
  };

  const addonTotal = calculateAddonTotal();

  return (
    <section id="addons" className="py-24 sm:py-32 bg-[#071B2C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B36A]/10 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
            <span>SECTION 7: OPTIONAL ADD-ON EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif mb-4 leading-tight">
            Make Your Thailand Trip <br />
            <span className="gold-gradient-text">Even More Exciting!</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5EBDD]/80 leading-relaxed font-light">
            Want to experience more of Thailand? Add these optional activities to your itinerary. Optional experiences are charged separately and can be added to your package.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADDONS.map((addon, index) => {
            const isSelected = selectedAddons.includes(addon.id);

            return (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => toggleAddon(addon.id)}
                className={`rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-[#0E2A42] border-[#D6B36A] ring-2 ring-[#D6B36A]/40 shadow-2xl'
                    : 'bg-[#0B2236]/90 border-white/10 hover:border-white/25 shadow-xl'
                }`}
              >
                {/* Photo & Badge */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${addon.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2236] via-[#071B2C]/40 to-black/30" />

                  {addon.badge && (
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#D6B36A] text-[#071B2C] text-[10px] font-black uppercase tracking-wider shadow-md">
                      {addon.badge}
                    </div>
                  )}

                  <div className="absolute top-3.5 right-3.5">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
                        isSelected
                          ? 'bg-[#D6B36A] text-[#071B2C] scale-110'
                          : 'bg-[#040E17]/80 text-white border border-white/20'
                      }`}
                    >
                      {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg font-serif mb-1.5 group-hover:text-[#D6B36A] transition-colors">
                      {addon.name}
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/75 leading-relaxed font-light">
                      {addon.description}
                    </p>
                    {addon.note && (
                      <span className="inline-block mt-2.5 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#D6B36A]">
                        {addon.note}
                      </span>
                    )}
                  </div>

                  {/* Price Row */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-[#F5EBDD]/60 block font-semibold">Add-on Price</span>
                      <span className="text-xl font-black text-[#D6B36A] font-serif">
                        {addon.priceLabel}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={`text-xs font-bold px-3.5 py-2 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-[#D6B36A] text-[#071B2C] border-[#D6B36A]'
                          : 'bg-white/5 text-white border-white/10 hover:border-[#D6B36A]/40'
                      }`}
                    >
                      {isSelected ? 'Selected ✓' : '+ Add to Trip'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Calculator & CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B2236] via-[#143857] to-[#0B2236] border border-[#D6B36A]/35 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-xs font-bold text-[#D6B36A] uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOMIZE YOUR EXPERIENCE</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-serif">
              {selectedAddons.length > 0
                ? `${selectedAddons.length} Optional Experience${selectedAddons.length > 1 ? 's' : ''} Selected`
                : 'Select activities to include in your personalized quotation'}
            </h4>
            <p className="text-xs text-[#F5EBDD]/70 font-light">
              Optional activities are charged separately and can be confirmed with our travel team during your seat-hold call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {selectedAddons.length > 0 && (
              <div className="text-center sm:text-right px-4">
                <span className="text-[11px] uppercase tracking-wider text-[#F5EBDD]/60 block font-bold">
                  Add-on Total
                </span>
                <span className="text-2xl font-black text-[#D6B36A] font-serif">
                  +₹{addonTotal.toLocaleString('en-IN')}
                </span>
              </div>
            )}

            <button
              onClick={handleAddExperiences}
              className="w-full sm:w-auto teal-luxury-btn text-white font-extrabold text-xs sm:text-sm px-7 py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl tracking-wider uppercase shrink-0"
            >
              <span>ADD EXPERIENCES TO MY TRIP</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
