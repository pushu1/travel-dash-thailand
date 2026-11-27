'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Compass, X } from 'lucide-react';
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
    <footer id="contact" className="bg-[#040E17] border-t border-[#D6B36A]/20 text-[#F5EBDD]/70 text-xs sm:text-sm pt-20 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info (Col 5) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#E7CC8C] via-[#D6B36A] to-[#B89349] p-[1.5px] shadow-lg">
                <div className="w-full h-full bg-[#071B2C] rounded-[14px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#D6B36A]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white font-serif">
                  TRAVEL <span className="text-[#D6B36A]">DASH</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#F5EBDD]/60 uppercase font-bold">
                  Your Next Journey Starts Here
                </span>
              </div>
            </Link>

            <p className="text-[#F5EBDD]/80 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Your next journey starts here. Explore Thailand with a thoughtfully planned travel experience. Premium curated getaways covering Pattaya beaches and vibrant Bangkok.
            </p>

            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2.5 text-white font-medium">
                <Phone className="w-4 h-4 text-[#D6B36A]" />
                <span>Contact: </span>
                <a
                  href={PACKAGE_INFO.phoneCallUrl}
                  className="hover:text-[#D6B36A] transition-colors text-[#D6B36A] font-bold"
                >
                  {PACKAGE_INFO.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#F5EBDD]/80">
                <MessageCircle className="w-4 h-4 text-[#12A6A0]" />
                <span>WhatsApp: </span>
                <a
                  href={PACKAGE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-white font-semibold"
                >
                  {PACKAGE_INFO.contactPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-serif">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#D6B36A] transition-colors flex items-center gap-1.5 py-1 text-[#F5EBDD]/70"
                  >
                    <span className="text-[#D6B36A]">›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <div className="p-3.5 rounded-2xl bg-[#071B2C] border border-white/10 text-xs">
                <strong className="text-white font-serif">Thailand 4N/5D Getaway:</strong>
                <p className="text-[#F5EBDD]/70 mt-1">
                  ₹61,000 / person • ₹1,22,000 for 2 travellers • Hold seats with ₹500 token.
                </p>
              </div>
            </div>
          </div>

          {/* Legal / Policy Links (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-serif">
              Policies & Support
            </h4>
            <p className="text-xs text-[#F5EBDD]/70 leading-relaxed font-light">
              Clear terms, scheduled itineraries, direct flight ticketing, and dedicated 24×7 OnTrip app assistance throughout your trip.
            </p>

            <div className="flex flex-col gap-2 pt-1 text-xs">
              <button
                onClick={() => setActiveModal('terms')}
                className="text-left text-[#D6B36A] hover:underline"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveModal('privacy')}
                className="text-left text-[#D6B36A] hover:underline"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal('cancellation')}
                className="text-left text-[#D6B36A] hover:underline"
              >
                Cancellation Policy
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EBDD]/60 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} TRAVEL DASH. All rights reserved.
          </div>
          <div>
            Return Non-Stop Air India Flights From Delhi • 2N Pattaya + 2N Bangkok
          </div>
        </div>
      </div>

      {/* Modal Dialog for Policies */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#071B2C] border border-[#D6B36A]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-[#F5EBDD] relative shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'terms' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-serif">Terms & Conditions</h3>
                <div className="text-xs text-[#F5EBDD]/80 space-y-2.5 leading-relaxed font-light">
                  <p>1. The package quoted price of ₹1,22,000 for 2 travellers (₹61,000 per person) is based on standard inventory on select dates (30 Dec to 3 Jan reference).</p>
                  <p>2. Flight and hotel availability is subject to confirmation at the time of final booking confirmation.</p>
                  <p>3. Seat reservation with ₹500 token is an advance intent to hold promotional pricing. Final confirmation is completed once the balance is scheduled with our travel team.</p>
                  <p>4. Valid passport with minimum 6 months validity from date of travel is mandatory for all travellers visiting Thailand.</p>
                </div>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-serif">Privacy Policy</h3>
                <div className="text-xs text-[#F5EBDD]/80 space-y-2.5 leading-relaxed font-light">
                  <p>1. We collect your Full Name, WhatsApp Number, and Travel details strictly to process your travel itinerary and provide booking quotes.</p>
                  <p>2. Your personal details are never sold, rented, or traded to third-party telemarketers.</p>
                  <p>3. Customer communications are conducted securely via WhatsApp and official phone lines (+91 90577 06333).</p>
                </div>
              </div>
            )}

            {activeModal === 'cancellation' && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white font-serif">Cancellation Policy</h3>
                <div className="text-xs text-[#F5EBDD]/80 space-y-2.5 leading-relaxed font-light">
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
                className="px-5 py-2.5 rounded-xl bg-[#D6B36A] text-[#071B2C] font-extrabold text-xs hover:brightness-110"
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
