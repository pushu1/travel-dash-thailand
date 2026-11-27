'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  ArrowLeft,
  Compass,
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
      <div className="text-center rounded-3xl bg-gradient-to-b from-[#0B2236] via-[#0E2A42] to-[#071B2C] border-2 border-[#12A6A0]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-[#12A6A0]/20 border border-[#12A6A0]/40 text-[#12A6A0] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#12A6A0]/20">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D6B36A]/15 border border-[#D6B36A]/35 text-[#D6B36A] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR THAILAND GETAWAY STARTS HERE!</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-serif tracking-tight mb-4">
          Thank You! Your Travel Enquiry Has Been Received.
        </h1>

        {leadInfo.name && (
          <p className="text-[#D6B36A] font-bold text-base sm:text-lg mb-2 font-serif">
            Hello {leadInfo.name},
          </p>
        )}

        <div className="space-y-3 text-[#F5EBDD]/85 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
          <p className="font-medium text-white text-base">
            You&apos;re one step closer to an amazing Thailand getaway!
          </p>
          <p>
            We&apos;ve successfully received your details. Our travel expert will contact you shortly on WhatsApp to help you with your preferred departure date, package details and booking process.
          </p>
        </div>

        {leadInfo.leadId && (
          <div className="mt-6 inline-block px-4 py-2 rounded-xl bg-[#040E17]/80 border border-white/10 text-xs text-[#F5EBDD]/70">
            Enquiry Reference ID: <strong className="text-[#D6B36A]">{leadInfo.leadId}</strong>
            {leadInfo.date && <span> • Preferred Date: <strong className="text-white">{leadInfo.date}</strong></span>}
          </div>
        )}
      </div>

      {/* YOUR THAILAND PACKAGE AT A GLANCE */}
      <div className="rounded-3xl bg-[#0B2236]/90 border border-white/10 p-6 sm:p-8 shadow-xl space-y-4">
        <div className="border-b border-white/10 pb-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D6B36A] block">
              TRIP OVERVIEW
            </span>
            <h2 className="text-xl font-bold text-white font-serif">
              YOUR THAILAND PACKAGE AT A GLANCE
            </h2>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-[#D6B36A]/15 border border-[#D6B36A]/30 text-[#D6B36A] text-xs font-bold">
            Thailand | 4 Nights / 5 Days
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {packageGlanceItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-white font-light"
            >
              <CheckCircle2 className="w-4 h-4 text-[#12A6A0] shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* YOUR PACKAGE PRICE */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0B2236] to-[#0E2A42] border border-[#D6B36A]/35 p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#D6B36A] font-bold block mb-1">
            YOUR PACKAGE PRICE
          </span>
          <div className="text-3xl sm:text-4xl font-black text-[#D6B36A] font-serif">
            ₹61,000 <span className="text-sm sm:text-base text-[#F5EBDD]/70 font-medium">Per Person</span>
          </div>
        </div>

        <div className="text-center sm:text-right p-4 rounded-2xl bg-[#040E17]/80 border border-white/10">
          <span className="text-xs text-[#F5EBDD]/60 block font-semibold">Total for 2 Travellers</span>
          <span className="text-2xl font-black text-white font-serif">
            ₹1,22,000
          </span>
        </div>
      </div>

      {/* READY TO TAKE THE NEXT STEP? HOLD YOUR SEATS FOR JUST ₹500! */}
      <div className="rounded-3xl bg-gradient-to-b from-[#0B2236] to-[#071B2C] border-2 border-[#D6B36A]/45 p-6 sm:p-10 shadow-2xl text-center space-y-5">
        <span className="inline-block text-xs uppercase font-black tracking-widest text-[#D6B36A]">
          READY TO TAKE THE NEXT STEP?
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white font-serif">
          Hold Your Seats for Just ₹500!
        </h3>
        <p className="text-xs sm:text-sm text-[#F5EBDD]/80 max-w-lg mx-auto leading-relaxed font-light">
          Our travel team will guide you through the booking process and help you check availability for your preferred departure date.
        </p>

        {/* CTAs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-md mx-auto">
          {/* PRIMARY CTA: CHAT WITH US ON WHATSAPP */}
          <a
            href={customizedWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-4 px-4 rounded-xl bg-[#12A6A0] hover:bg-[#12A6A0]/90 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl tracking-wider uppercase transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>CHAT WITH US ON WHATSAPP</span>
          </a>

          {/* SECONDARY CTA: CALL OUR TRAVEL EXPERT */}
          <a
            href={PACKAGE_INFO.phoneCallUrl}
            className="py-4 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-[#D6B36A]" />
            <span>CALL OUR TRAVEL EXPERT</span>
          </a>
        </div>

        <div className="pt-2 text-xs text-[#F5EBDD]/70 font-light">
          Direct Phone Line: <strong className="text-[#D6B36A] text-sm font-bold">{PACKAGE_INFO.contactPhone}</strong>
        </div>
      </div>

      {/* A LITTLE MORE EXCITEMENT BEFORE YOU GO! */}
      <div className="rounded-3xl bg-[#040E17]/80 border border-white/10 p-6 sm:p-8 text-center space-y-3">
        <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#D6B36A] font-serif">
          A LITTLE MORE EXCITEMENT BEFORE YOU GO!
        </h4>
        <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed max-w-xl mx-auto font-light">
          Your Thailand adventure could include beautiful beaches, exciting island experiences, Bangkok&apos;s vibrant city life and unforgettable memories with your favourite travel companion.
        </p>
        <p className="text-xs sm:text-sm text-white font-medium pt-2 font-serif">
          Thank you for choosing Travel Dash. We look forward to planning your Thailand getaway!
        </p>
        <div className="pt-2 text-xs font-bold text-[#D6B36A] uppercase tracking-widest">
          TRAVEL DASH | Your Next Journey Starts Here.
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#071B2C] text-[#F5EBDD] flex flex-col justify-between selection:bg-[#D6B36A] selection:text-[#071B2C]">
      {/* Top Header */}
      <header className="border-b border-[#D6B36A]/20 bg-[#071B2C]/90 backdrop-blur-xl py-4 px-4 sm:px-8 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E7CC8C] via-[#D6B36A] to-[#B89349] p-[1.5px]">
              <div className="w-full h-full bg-[#071B2C] rounded-[10px] flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#D6B36A]" />
              </div>
            </div>
            <span className="text-xl font-black tracking-tight text-white font-serif">
              TRAVEL <span className="text-[#D6B36A]">DASH</span>
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs sm:text-sm text-[#F5EBDD]/80 hover:text-[#D6B36A] font-medium py-1.5 px-3 rounded-lg hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Itinerary</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex-1">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#12A6A0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D6B36A]/10 rounded-full blur-3xl pointer-events-none" />

        <Suspense
          fallback={
            <div className="max-w-md mx-auto text-center py-20 text-slate-400 flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-[#D6B36A]" />
              <span>Loading your reservation summary...</span>
            </div>
          }
        >
          <ThankYouContent />
        </Suspense>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-white/10 bg-[#040E17] text-center text-xs text-[#F5EBDD]/50">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} TRAVEL DASH • Thailand 4N/5D Getaway</span>
          <span>Contact Support: +91 90577 06333</span>
        </div>
      </footer>
    </main>
  );
}
