'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Menu, X, Sparkles, Compass } from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

interface NavbarProps {
  onHoldSeatsClick?: () => void;
}

export default function Navbar({ onHoldSeatsClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Highlights', href: '#highlights', id: 'highlights' },
    { name: 'Destinations', href: '#destinations', id: 'destinations' },
    { name: 'Itinerary', href: '#itinerary', id: 'itinerary' },
    { name: 'Hotels', href: '#hotels', id: 'hotels' },
    { name: 'Experiences', href: '#addons', id: 'addons' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'FAQs', href: '#faqs', id: 'faqs' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'highlights', 'destinations', 'itinerary', 'hotels', 'addons', 'pricing', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    if (onHoldSeatsClick) {
      onHoldSeatsClick();
    } else {
      document.querySelector('#enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#071B2C]/95 backdrop-blur-xl border-b border-[#D6B36A]/20 py-3 shadow-[0_10px_30px_rgba(4,14,23,0.8)]'
            : 'bg-gradient-to-b from-[#040E17]/90 via-[#071B2C]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Travel Dash Luxury Brand Logo */}
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#E7CC8C] via-[#D6B36A] to-[#B89349] p-[1.5px] shadow-lg shadow-[#D6B36A]/25 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#071B2C] rounded-[14px] flex items-center justify-center">
                  <Compass className="w-6 h-6 text-[#D6B36A] group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif flex items-center">
                  TRAVEL <span className="text-[#D6B36A] ml-1.5 font-light tracking-wider">DASH</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#F5EBDD]/70 uppercase font-bold">
                  Luxury Thailand Getaway
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3 py-1.5 text-xs lg:text-[13px] font-medium tracking-wide transition-all duration-300 rounded-lg ${
                      isActive
                        ? 'text-[#D6B36A] font-bold'
                        : 'text-[#F5EBDD]/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#D6B36A] to-transparent"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Action Area */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={PACKAGE_INFO.phoneCallUrl}
                className="hidden 2xl:flex items-center gap-2 text-xs font-semibold text-[#F5EBDD] hover:text-[#D6B36A] px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D6B36A]/40 transition-all"
                title="Call Travel Expert"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B36A]" />
                <span>+91 90577 06333</span>
              </a>

              <a
                href={PACKAGE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-white px-3.5 py-2 rounded-xl bg-[#12A6A0]/20 hover:bg-[#12A6A0]/30 border border-[#12A6A0]/40 transition-all shadow-sm"
                title="WhatsApp Direct Contact"
              >
                <MessageCircle className="w-4 h-4 text-[#12A6A0]" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              {/* BOOK NOW CTA BUTTON */}
              <button
                onClick={handleBookNow}
                className="gold-luxury-btn text-[#071B2C] font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg tracking-wide uppercase hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>BOOK NOW</span>
              </button>
            </div>

            {/* Mobile Hamburger Controls */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={handleBookNow}
                className="gold-luxury-btn text-[#071B2C] font-extrabold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-md"
              >
                <Sparkles className="w-3 h-3" />
                <span>BOOK NOW</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-[#F5EBDD] hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#D6B36A]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-in Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="xl:hidden bg-[#071B2C] border-b border-[#D6B36A]/20 px-5 pt-4 pb-6 mt-3 shadow-2xl backdrop-blur-2xl"
            >
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-3 py-2.5 text-xs font-semibold rounded-xl text-center transition-all ${
                        isActive
                          ? 'bg-[#D6B36A] text-[#071B2C] font-extrabold shadow-md'
                          : 'bg-white/5 text-[#F5EBDD] hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PACKAGE_INFO.phoneCallUrl}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 text-white font-medium text-xs border border-white/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D6B36A]" />
                    Call Expert
                  </a>
                  <a
                    href={PACKAGE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#12A6A0] text-white font-bold text-xs shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    WhatsApp
                  </a>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full gold-luxury-btn text-[#071B2C] font-black text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl tracking-wide uppercase"
                >
                  <Sparkles className="w-4 h-4" />
                  HOLD MY SEATS FOR ₹500
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
