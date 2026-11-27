'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Check, Sparkles, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
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
    // Scroll to booking form and pass state
    const el = document.querySelector('#enquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onHoldSeatsClick) {
      onHoldSeatsClick();
    }
  };

  const addonTotal = calculateAddonTotal();

  return (
    <section id="addons" className="py-20 sm:py-24 bg-[#070D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>SECTION 7: OPTIONAL ADD-ON EXPERIENCES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Make Your Thailand Trip <br />
            <span className="gold-gradient-text">Even More Exciting!</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Want to experience more of Thailand? Add these optional activities to your itinerary. Optional experiences are charged separately and can be added to your package.
          </p>
        </div>

        {/* 4 Addons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADDONS.map((addon) => {
            const isSelected = selectedAddons.includes(addon.id);

            return (
              <div
                key={addon.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#152338] border-amber-400 ring-2 ring-amber-400/30 shadow-2xl -translate-y-1'
                    : 'bg-[#0E1A2C] border-white/10 hover:border-white/25 hover:-translate-y-1'
                }`}
                onClick={() => toggleAddon(addon.id)}
              >
                {/* Photo & Badge */}
                <div className="relative h-44 w-full overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url('${addon.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A2C] via-transparent to-black/20" />

                  {addon.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold shadow-md">
                      {addon.badge}
                    </div>
                  )}

                  <div className="absolute top-3 right-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shadow-md ${
                        isSelected ? 'bg-amber-400 text-slate-950' : 'bg-black/60 text-white border border-white/20'
                      }`}
                    >
                      {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-white text-base font-serif mb-1.5">
                      {addon.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {addon.description}
                    </p>
                    {addon.note && (
                      <span className="inline-block mt-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-amber-300">
                        {addon.note}
                      </span>
                    )}
                  </div>

                  {/* Price Row */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block font-medium">Add-on Price</span>
                      <span className="text-lg font-extrabold text-amber-400 font-serif">
                        {addon.priceLabel}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/40'
                      }`}
                    >
                      {isSelected ? 'Added ✓' : '+ Add'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Calculator & CTA Bar */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121F35] via-[#172742] to-[#121F35] border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center lg:text-left">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOMIZE YOUR EXPERIENCE</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-serif">
              {selectedAddons.length > 0
                ? `${selectedAddons.length} Optional Experience${selectedAddons.length > 1 ? 's' : ''} Selected`
                : 'Want to include any of these adventures?'}
            </h4>
            <p className="text-xs text-slate-300">
              Optional activities can be added seamlessly during your booking consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            {selectedAddons.length > 0 && (
              <div className="text-center sm:text-right px-4">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                  Add-on Total
                </span>
                <span className="text-2xl font-extrabold text-amber-400 font-serif">
                  +₹{addonTotal.toLocaleString('en-IN')}
                </span>
              </div>
            )}

            <button
              onClick={handleAddExperiences}
              className="w-full sm:w-auto teal-shimmer-btn text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shrink-0"
            >
              <span>ADD EXPERIENCES TO MY TRIP</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
