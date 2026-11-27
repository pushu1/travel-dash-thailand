'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroductionSection from '@/components/IntroductionSection';
import PackageHighlightsSection from '@/components/PackageHighlightsSection';
import DestinationsSection from '@/components/DestinationsSection';
import ItinerarySection from '@/components/ItinerarySection';
import HotelDetailsSection from '@/components/HotelDetailsSection';
import AddonExperiencesSection from '@/components/AddonExperiencesSection';
import InclusionsExclusionsSection from '@/components/InclusionsExclusionsSection';
import DepartureDatesSection from '@/components/DepartureDatesSection';
import PricingSection from '@/components/PricingSection';
import WhyBookSection from '@/components/WhyBookSection';
import FaqSection from '@/components/FaqSection';
import FinalCtaSection from '@/components/FinalCtaSection';
import Footer from '@/components/Footer';
import FloatingActionBar from '@/components/FloatingActionBar';
import SeatHoldModal from '@/components/SeatHoldModal';

export default function HomePage() {
  const [seatHoldModalOpen, setSeatHoldModalOpen] = useState(false);

  const openSeatHoldModal = () => {
    setSeatHoldModalOpen(true);
  };

  const closeSeatHoldModal = () => {
    setSeatHoldModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#070D18] text-slate-100 relative">
      {/* Top Header / Navigation */}
      <Navbar onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 1: HERO SECTION & SIDE ENQUIRY FORM */}
      <HeroSection onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 2: INTRODUCTION */}
      <IntroductionSection
        onExploreClick={() => {
          document.querySelector('#highlights')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* SECTION 3: PACKAGE HIGHLIGHTS */}
      <PackageHighlightsSection onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 4: EXPLORE YOUR DESTINATIONS */}
      <DestinationsSection />

      {/* SECTION 5: DAY-WISE ITINERARY */}
      <ItinerarySection onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 6: HOTEL DETAILS */}
      <HotelDetailsSection />

      {/* SECTION 7: OPTIONAL ADD-ON EXPERIENCES */}
      <AddonExperiencesSection onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 8: PACKAGE INCLUSIONS & EXCLUSIONS */}
      <InclusionsExclusionsSection />

      {/* SECTION 9: AVAILABLE DEPARTURE DATES */}
      <DepartureDatesSection onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 10: PACKAGE PRICING */}
      <PricingSection onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 11: WHY BOOK WITH TRAVEL DASH? */}
      <WhyBookSection onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 12: FREQUENTLY ASKED QUESTIONS (20 Questions) */}
      <FaqSection />

      {/* SECTION 13: FINAL CALL TO ACTION */}
      <FinalCtaSection onHoldSeatsClick={openSeatHoldModal} />

      {/* SECTION 14: FOOTER */}
      <Footer />

      {/* Persistent Floating Action Bar (Sticky Mobile & Desktop) */}
      <FloatingActionBar onHoldSeatsClick={openSeatHoldModal} />

      {/* Interactive Seat Hold Modal */}
      <SeatHoldModal isOpen={seatHoldModalOpen} onClose={closeSeatHoldModal} />
    </main>
  );
}
