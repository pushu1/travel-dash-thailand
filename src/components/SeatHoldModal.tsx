'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, User, Phone, Calendar, Users, Sparkles, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { DEPARTURE_DATES, TRAVELLING_WITH_OPTIONS, PACKAGE_INFO } from '@/data/packageData';

interface SeatHoldModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SeatHoldModal({ isOpen, onClose }: SeatHoldModalProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    preferredDepartureDate: DEPARTURE_DATES[0].date,
    travellingWith: TRAVELLING_WITH_OPTIONS[0],
    numberOfTravellers: '2 Travellers (Default)',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }
    const cleanPhone = formData.whatsappNumber.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.whatsappNumber = 'Please enter a valid 10-digit WhatsApp number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiErrorMessage('');

    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          whatsappNumber: formData.whatsappNumber,
          preferredDepartureDate: formData.preferredDepartureDate,
          travellingWith: formData.travellingWith,
          numberOfTravellers: formData.numberOfTravellers,
          source: 'Seat Hold Modal (₹500)',
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit reservation.');
      }

      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(
            'travel_dash_last_lead',
            JSON.stringify({
              leadId: result.leadId,
              fullName: formData.fullName,
              whatsappNumber: formData.whatsappNumber,
              preferredDepartureDate: formData.preferredDepartureDate,
              travellingWith: formData.travellingWith,
              numberOfTravellers: formData.numberOfTravellers,
              submittedAt: new Date().toISOString(),
            })
          );
        } catch (e) {
          // Ignore
        }
      }

      onClose();
      router.push(result.redirectUrl || `/thank-you-thailand?leadId=${encodeURIComponent(result.leadId)}&name=${encodeURIComponent(formData.fullName)}&date=${encodeURIComponent(formData.preferredDepartureDate)}`);
    } catch (err: any) {
      setApiErrorMessage(err.message || 'Submission failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#132238] via-[#0F1B2F] to-[#0A1322] border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hold Seats with Just ₹500 Token</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Reserve Your Thailand Getaway
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            4 Nights / 5 Days in Pattaya & Bangkok • Direct Air India Flights • 4-Star Hotels
          </p>
        </div>

        {apiErrorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs">
            {apiErrorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              WhatsApp Number *
            </label>
            <div className="relative">
              <span className="text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold pr-1.5 border-r border-white/10">
                +91
              </span>
              <input
                type="tel"
                placeholder="10-digit number"
                maxLength={10}
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full pl-14 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            {errors.whatsappNumber && <p className="text-[11px] text-red-400 mt-1">{errors.whatsappNumber}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Preferred Departure Date
            </label>
            <select
              value={formData.preferredDepartureDate}
              onChange={(e) => setFormData({ ...formData, preferredDepartureDate: e.target.value })}
              className="w-full py-2.5 px-3 rounded-xl bg-[#142338] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
            >
              {DEPARTURE_DATES.map((d) => (
                <option key={d.id} value={d.date} className="bg-[#121F35] text-white">
                  {d.date} {d.peakSeason ? '(Peak Season / New Year)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Travelling With
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TRAVELLING_WITH_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setFormData({ ...formData, travellingWith: opt })}
                  className={`p-2 rounded-xl text-xs text-left border transition-all ${
                    formData.travellingWith === opt
                      ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
            <span className="text-slate-300">Package for 2 Travellers</span>
            <span className="text-amber-400 font-bold">₹61,000 / person (₹1,22,000 total)</span>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full gold-shimmer-btn text-slate-950 font-black text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing ₹500 Seat Reservation...</span>
                </>
              ) : (
                <>
                  <span>CONFIRM SEAT HOLD FOR ₹500</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center leading-normal">
            No immediate payment required right now. Our travel team will contact you to verify dates and assist with the token payment.
          </p>
        </form>
      </div>
    </div>
  );
}
