'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

interface NavbarProps {
  onHoldSeatsClick?: () => void;
}

export default function Navbar({ onHoldSeatsClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Highlights', href: '#highlights' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Itinerary', href: '#itinerary' },
    { name: 'Hotels', href: '#hotels' },
    { name: 'Add-ons', href: '#addons' },
    { name: 'Inclusions', href: '#inclusions' },
    { name: 'Dates & Price', href: '#pricing' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1320]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-amber-500/20 py-3'
            : 'bg-gradient-to-b from-[#070D18]/90 via-[#070D18]/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-extrabold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <span className="text-xl">✈</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-1.5 font-serif">
                  TRAVEL <span className="text-amber-400">DASH</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">
                  Thailand Specialist
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-200 hover:text-amber-400 rounded-md transition-colors hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={PACKAGE_INFO.phoneCallUrl}
                className="flex items-center gap-2 text-xs xl:text-sm font-medium text-slate-200 hover:text-amber-400 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all"
                title="Call Travel Dash Expert"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden xl:inline">{PACKAGE_INFO.contactPhone}</span>
                <span className="xl:hidden">Call Expert</span>
              </a>

              <a
                href={PACKAGE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs xl:text-sm font-medium text-emerald-300 hover:text-white px-3 py-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-600 transition-all"
                title="Chat with Travel Dash on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              <button
                onClick={onHoldSeatsClick || (() => {
                  document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                })}
                className="gold-shimmer-btn text-slate-950 font-bold text-xs xl:text-sm px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-lg"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>Hold Seats ₹500</span>
              </button>
            </div>

            {/* Mobile menu hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={PACKAGE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-900/60 text-emerald-400 border border-emerald-500/30"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0B1320] border-b border-amber-500/20 px-4 pt-4 pb-6 mt-2 space-y-3 shadow-2xl animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-amber-400 bg-white/5 rounded-lg text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Non-stop Air India
                </span>
                <span>4N/5D Pattaya & Bangkok</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={PACKAGE_INFO.phoneCallUrl}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/10 text-white font-medium text-xs border border-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Call Expert
                </a>
                <a
                  href={PACKAGE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-semibold text-xs shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onHoldSeatsClick) {
                    onHoldSeatsClick();
                  } else {
                    document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full gold-shimmer-btn text-slate-950 font-bold text-sm py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                HOLD MY SEATS FOR ₹500
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
