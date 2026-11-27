'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Heart, Sparkles, X } from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | 'cancellation' | null>(null);

  const quickLinks = [
    { name: 'Package Details', href: '#highlights' },
    { name: 'Itinerary', href: '#itinerary' },
    { name: 'Hotel Details', href: '#hotels' },
    { name: 'Optional Add-ons', href: '#addons' },
    { name: 'Inclusions', href: '#inclusions' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#contact') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#050912] border-t border-amber-500/20 text-slate-400 text-xs sm:text-sm pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-extrabold shadow-md shadow-amber-500/20">
                <span className="text-xl">✈</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white font-serif">
                  TRAVEL <span className="text-amber-400">DASH</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  Your Next Journey Starts Here
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Your next journey starts here. Explore Thailand with a thoughtfully planned travel experience. Premium curated getaways covering Pattaya beaches and vibrant Bangkok.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Contact: </span>
                <a
                  href={PACKAGE_INFO.phoneCallUrl}
                  className="hover:text-amber-400 transition-colors text-amber-300 font-bold"
                >
                  {PACKAGE_INFO.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: </span>
                <a
                  href={PACKAGE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {PACKAGE_INFO.contactPhone} (24x7 Assistance)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 4) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-serif">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span className="text-amber-400">›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300">
                <strong className="text-white">Thailand 4N/5D Getaway:</strong>
                <p className="text-slate-400 mt-0.5">
                  ₹61,000 / person • ₹1,22,000 for 2 travellers • Hold seats for just ₹500 token.
                </p>
              </div>
            </div>
          </div>

          {/* Legal / Policy Links (Col 3) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-serif">
              Customer Confidence
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Travel Dash operates with full transparency, direct flight ticketing, and certified 4-star hotel allocations.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs">
              <button
                onClick={() => setActiveModal('terms')}
                className="text-left text-slate-300 hover:text-amber-400 transition-colors underline"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveModal('privacy')}
                className="text-left text-slate-300 hover:text-amber-400 transition-colors underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal('cancellation')}
                className="text-left text-slate-300 hover:text-amber-400 transition-colors underline"
              >
                Cancellation Policy
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} TRAVEL DASH. All rights reserved. Registered Travel Partner.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Secure ₹500 Seat-Hold
            </span>
            <span>Air India Return Non-stop</span>
          </div>
        </div>
      </div>

      {/* Modal Dialog for Policies */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0E1A2C] border border-amber-500/30 rounded-2xl max-w-lg w-full p-6 text-slate-200 relative shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'terms' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-serif">Terms & Conditions</h3>
                <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>1. The package quoted price of ₹1,22,000 for 2 travellers (₹61,000 per person) is based on standard inventory on select dates (30 Dec to 3 Jan reference).</p>
                  <p>2. Flight and hotel availability is subject to confirmation at the time of final booking confirmation.</p>
                  <p>3. Seat reservation with ₹500 token is an advance intent to hold promotional pricing. Final confirmation is completed once the balance is scheduled with our travel team.</p>
                  <p>4. Valid passport with minimum 6 months validity from date of travel is mandatory for all travellers visiting Thailand.</p>
                </div>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-serif">Privacy Policy</h3>
                <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>1. We collect your Full Name, WhatsApp Number, and Travel details strictly to process your travel itinerary and provide booking quotes.</p>
                  <p>2. Your personal details are never sold, rented, or traded to third-party telemarketers.</p>
                  <p>3. Customer communications are conducted securely via WhatsApp and official phone lines (+91 90577 06333).</p>
                </div>
              </div>
            )}

            {activeModal === 'cancellation' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white font-serif">Cancellation Policy</h3>
                <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p>1. The initial ₹500 seat-hold token is fully adjustable against your confirmed holiday package.</p>
                  <p>2. Flight ticket cancellations are governed by Air India airline fare rules and cancellation slabs.</p>
                  <p>3. Hotel cancellations follow the specific 4-star hotel seasonal policies in Pattaya and Bangkok.</p>
                  <p>4. Please consult your Travel Dash representative on +91 90577 06333 for exact refund and reschedule terms.</p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
