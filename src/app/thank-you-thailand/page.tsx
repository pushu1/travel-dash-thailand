'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Users, 
  Plane, 
  Hotel, 
  ShieldCheck, 
  ArrowLeft,
  Heart,
  PartyPopper,
  Clock,
  Loader2
} from 'lucide-react';
import { PACKAGE_INFO } from '@/data/packageData';

function ThankYouContent() {
  const searchParams = useSearchParams();

  const [leadInfo, setLeadInfo] = useState<{
    name?: string;
    date?: string;
    leadId?: string;
  }>({});

  useEffect(() => {
    // Read from URL query params first
    const nameParam = searchParams.get('name');
    const dateParam = searchParams.get('date');
    const leadIdParam = searchParams.get('leadId');

    if (nameParam || dateParam || leadIdParam) {
      setLeadInfo({
        name: nameParam || undefined,
        date: dateParam || undefined,
        leadId: leadIdParam || undefined,
      });
      return;
    }

    // Fallback to localStorage if refreshed without params
    try {
      const stored = localStorage.getItem('travel_dash_last_lead');
      if (stored) {
        const parsed = JSON.parse(stored);
        setLeadInfo({
          name: parsed.fullName,
          date: parsed.preferredDepartureDate,
          leadId: parsed.leadId,
        });
      }
    } catch (e) {
      // Ignore
    }
  }, [searchParams]);

  const packageGlanceItems = [
    '2 Nights in Pattaya.',
    '2 Nights in Bangkok.',
    'Return Air India Flights.',
    '4-Star Hotel Stays.',
    'Coral Island Tour.',
    'Bangkok City Temple Tour.',
    'Breakfast and Transfers Included.',
  ];

  const whatsappDirectMessage = `Hi Travel Dash, I have submitted an enquiry for the Thailand 4N/5D package${
    leadInfo.name ? ` for ${leadInfo.name}` : ''
  }${leadInfo.date ? ` on ${leadInfo.date}` : ''}${
    leadInfo.leadId ? ` (Ref: ${leadInfo.leadId})` : ''
  }. I would like to hold my seats for ₹500.`;

  const customizedWhatsappUrl = `https://wa.me/919057706333?text=${encodeURIComponent(whatsappDirectMessage)}`;

  return (
    <div className="max-w-3xl mx-auto relative z-10 space-y-8">
      {/* Header Card: Success Confirmation */}
      <div className="text-center rounded-3xl bg-gradient-to-b from-[#121F35] via-[#0F1C30] to-[#0A1322] border border-emerald-500/40 p-8 sm:p-12 shadow-2xl relative">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/10">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR THAILAND GETAWAY STARTS HERE!</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif tracking-tight mb-4">
          Thank You! Your Travel Enquiry Has Been Received.
        </h1>

        {leadInfo.name && (
          <p className="text-amber-300 font-semibold text-base mb-2">
            Hello {leadInfo.name},
          </p>
        )}

        <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          <p className="font-medium text-white">
            You&apos;re one step closer to an amazing Thailand getaway!
          </p>
          <p>
            We&apos;ve successfully received your details. Our travel expert will contact you shortly on WhatsApp to help you with your preferred departure date, package details and booking process.
          </p>
        </div>

        {leadInfo.leadId && (
          <div className="mt-5 inline-block px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400">
            Enquiry Reference ID: <strong className="text-amber-400">{leadInfo.leadId}</strong>
            {leadInfo.date && <span> • Preferred Date: <strong className="text-slate-200">{leadInfo.date}</strong></span>}
          </div>
        )}
      </div>

      {/* YOUR THAILAND PACKAGE AT A GLANCE */}
      <div className="rounded-3xl bg-[#0E1A2C] border border-white/10 p-6 sm:p-8 shadow-xl space-y-4">
        <div className="border-b border-white/10 pb-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">
              TRIP OVERVIEW
            </span>
            <h2 className="text-xl font-bold text-white font-serif">
              YOUR THAILAND PACKAGE AT A GLANCE
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
            Thailand | 4 Nights / 5 Days
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {packageGlanceItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-200"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* YOUR PACKAGE PRICE */}
      <div className="rounded-3xl bg-gradient-to-r from-[#121F35] to-[#182944] border border-amber-500/30 p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
            YOUR PACKAGE PRICE
          </span>
          <div className="text-3xl sm:text-4xl font-black text-amber-400 font-serif">
            ₹61,000 <span className="text-sm sm:text-base text-slate-300 font-medium">Per Person</span>
          </div>
        </div>

        <div className="text-center sm:text-right p-3.5 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-xs text-slate-400 block">Total for 2 Travellers</span>
          <span className="text-xl sm:text-2xl font-extrabold text-white font-serif">
            ₹1,22,000
          </span>
        </div>
      </div>

      {/* READY TO TAKE THE NEXT STEP? HOLD YOUR SEATS FOR JUST ₹500! */}
      <div className="rounded-3xl bg-gradient-to-b from-[#132238] to-[#0A1322] border-2 border-amber-500/50 p-6 sm:p-10 shadow-2xl text-center space-y-5">
        <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-amber-400">
          READY TO TAKE THE NEXT STEP?
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
          Hold Your Seats for Just ₹500!
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          Our travel team will guide you through the booking process and help you check availability for your preferred departure date.
        </p>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-md mx-auto">
          {/* PRIMARY CTA: CHAT WITH US ON WHATSAPP */}
          <a
            href={customizedWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>CHAT WITH US ON WHATSAPP</span>
          </a>

          {/* SECONDARY CTA: CALL OUR TRAVEL EXPERT */}
          <a
            href={PACKAGE_INFO.phoneCallUrl}
            className="py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>CALL OUR TRAVEL EXPERT</span>
          </a>
        </div>

        <div className="pt-2 text-xs text-slate-400">
          Direct Contact: <strong className="text-amber-300 text-sm">{PACKAGE_INFO.contactPhone}</strong>
        </div>
      </div>

      {/* A LITTLE MORE EXCITEMENT BEFORE YOU GO! */}
      <div className="rounded-3xl bg-[#0A1322]/90 border border-white/10 p-6 sm:p-8 text-center space-y-3">
        <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-amber-400 font-serif">
          A LITTLE MORE EXCITEMENT BEFORE YOU GO!
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
          Your Thailand adventure could include beautiful beaches, exciting island experiences, Bangkok&apos;s vibrant city life and unforgettable memories with your favourite travel companion.
        </p>
        <p className="text-xs sm:text-sm text-white font-medium pt-2">
          Thank you for choosing Travel Dash. We look forward to planning your Thailand getaway!
        </p>
        <div className="pt-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
          TRAVEL DASH | Your Next Journey Starts Here.
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#070D18] text-slate-100 flex flex-col justify-between selection:bg-amber-500 selection:text-slate-900">
      {/* Top Simple Header */}
      <header className="border-b border-white/10 bg-[#0B1320]/80 backdrop-blur-md py-4 px-4 sm:px-8 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black">
              ✈
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-serif">
              TRAVEL <span className="text-amber-400">DASH</span>
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 hover:text-amber-400 font-medium py-1.5 px-3 rounded-lg hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Itinerary</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex-1">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <Suspense
          fallback={
            <div className="max-w-md mx-auto text-center py-20 text-slate-400 flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-amber-400" />
              <span>Loading your reservation summary...</span>
            </div>
          }
        >
          <ThankYouContent />
        </Suspense>
      </section>

      {/* Simple Footer */}
      <footer className="py-6 border-t border-white/10 bg-[#050912] text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} TRAVEL DASH • Thailand 4N/5D Getaway</span>
          <span>Contact Support: +91 90577 06333</span>
        </div>
      </footer>
    </main>
  );
}
