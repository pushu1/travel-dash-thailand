'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Phone, Calendar, Users, HeartHandshake, ShieldCheck, ArrowRight, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { DEPARTURE_DATES, TRAVELLING_WITH_OPTIONS, PACKAGE_INFO } from '@/data/packageData';

interface HeroEnquiryFormProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function HeroEnquiryForm({
  id = 'enquiry-form',
  className = '',
  title = "Let's Plan Your Thailand Getaway!",
  subtitle = "Share your details and our travel expert will help you plan your trip.",
}: HeroEnquiryFormProps) {
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
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 letters)';
    }

    const cleanPhone = formData.whatsappNumber.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.whatsappNumber = 'Please enter a valid 10-digit WhatsApp number';
    }

    if (!formData.preferredDepartureDate) {
      newErrors.preferredDepartureDate = 'Please select a preferred departure date';
    }

    if (!formData.travellingWith) {
      newErrors.travellingWith = 'Please choose who you are travelling with';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiErrorMessage('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          whatsappNumber: formData.whatsappNumber,
          preferredDepartureDate: formData.preferredDepartureDate,
          travellingWith: formData.travellingWith,
          numberOfTravellers: formData.numberOfTravellers,
          source: 'Landing Page Hero Enquiry Form',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit enquiry.');
      }

      // Store in localStorage for zero-data-loss client persistence
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
          console.warn('LocalStorage error:', e);
        }
      }

      setSubmitSuccess(true);

      // Smooth redirect to Thank You page
      setTimeout(() => {
        const targetUrl = result.redirectUrl || `/thank-you-thailand?leadId=${encodeURIComponent(result.leadId)}&name=${encodeURIComponent(formData.fullName)}&date=${encodeURIComponent(formData.preferredDepartureDate)}`;
        router.push(targetUrl);
      }, 600);
    } catch (err: any) {
      console.error('Submission error:', err);
      setApiErrorMessage(err.message || 'Something went wrong. Please call us directly or retry.');
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id={id}
      className={`relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#132238]/95 via-[#0F1B2F]/95 to-[#0B1424]/95 border border-amber-500/30 shadow-2xl backdrop-blur-xl ${className}`}
    >
      {/* Top Gold Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Special ₹500 Seat-Hold Reservation</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-serif mb-1.5">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
        {subtitle}
      </p>

      {apiErrorMessage && (
        <div className="mb-5 p-3 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs">
          {apiErrorMessage}
        </div>
      )}

      {submitSuccess && (
        <div className="mb-5 p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Enquiry registered! Redirecting you to confirmation page...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            1. Full Name <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: '' });
              }}
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border ${
                errors.fullName ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-amber-400'
              } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all`}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-[11px] text-red-400">{errors.fullName}</p>
          )}
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            2. WhatsApp Number <span className="text-amber-400">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 text-xs font-medium">
              <span className="text-slate-400 pr-1 border-r border-white/15">+91</span>
            </div>
            <input
              type="tel"
              name="whatsappNumber"
              placeholder="98765 43210"
              maxLength={12}
              value={formData.whatsappNumber}
              onChange={(e) => {
                setFormData({ ...formData, whatsappNumber: e.target.value });
                if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: '' });
              }}
              className={`w-full pl-14 pr-3.5 py-2.5 rounded-xl bg-white/5 border ${
                errors.whatsappNumber ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-amber-400'
              } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all`}
            />
          </div>
          {errors.whatsappNumber && (
            <p className="mt-1 text-[11px] text-red-400">{errors.whatsappNumber}</p>
          )}
        </div>

        {/* Preferred Departure Date */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center justify-between">
            <span>3. Preferred Departure Date <span className="text-amber-400">*</span></span>
            <span className="text-[10px] text-amber-400/80 font-normal">Upcoming Season</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Calendar className="w-4 h-4" />
            </div>
            <select
              value={formData.preferredDepartureDate}
              onChange={(e) => setFormData({ ...formData, preferredDepartureDate: e.target.value })}
              className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#142338] border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-all appearance-none cursor-pointer"
            >
              {DEPARTURE_DATES.map((dep) => (
                <option key={dep.id} value={dep.date} className="bg-[#121F35] text-white">
                  {dep.date} {dep.peakSeason ? '(Peak Season / New Year)' : ''}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
          {/* Quick date chips */}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {DEPARTURE_DATES.map((dep) => (
              <button
                key={dep.id}
                type="button"
                onClick={() => setFormData({ ...formData, preferredDepartureDate: dep.date })}
                className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                  formData.preferredDepartureDate === dep.date
                    ? 'bg-amber-500 text-slate-950 font-semibold border-amber-400 shadow-sm'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/40'
                }`}
              >
                {dep.date}
              </button>
            ))}
          </div>
        </div>

        {/* Travelling With */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            4. Travelling With <span className="text-amber-400">*</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            {TRAVELLING_WITH_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, travellingWith: option })}
                className={`py-2 px-2.5 rounded-xl text-xs font-medium border text-left flex items-center gap-1.5 transition-all ${
                  formData.travellingWith === option
                    ? 'bg-amber-400/15 border-amber-400 text-amber-300 font-semibold shadow-inner'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25'
                }`}
              >
                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                  formData.travellingWith === option ? 'border-amber-400 bg-amber-400' : 'border-slate-500'
                }`}>
                  {formData.travellingWith === option && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                  )}
                </span>
                <span className="truncate">{option}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Number of Travellers */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center justify-between">
            <span>5. Number of Travellers</span>
            <span className="text-[10px] text-emerald-400 font-semibold">Fixed for 2 Travellers</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <input
              type="text"
              readOnly
              value={formData.numberOfTravellers}
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm cursor-default select-none focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-xs text-amber-300/80 font-medium">
              ₹1,22,000 Total
            </div>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">
            Package is specially tailored for 2 travellers at ₹61,000/person.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full gold-shimmer-btn text-slate-950 font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-xl hover:shadow-amber-500/30 transition-all disabled:opacity-75"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Securing Your Request...</span>
              </>
            ) : (
              <>
                <span>RESERVE MY SEATS</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </>
            )}
          </button>
        </div>

        {/* Small text as per PDF */}
        <div className="pt-1 text-center">
          <p className="text-[11px] text-slate-400 leading-normal">
            Hold your seats with just <strong className="text-amber-300">₹500</strong>. Our travel team will contact you with the booking details.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-around text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Verified Agent
          </span>
          <span className="flex items-center gap-1">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" /> No Hidden Fees
          </span>
          <span className="flex items-center gap-1">
            ⚡ Quick WhatsApp Call
          </span>
        </div>
      </form>
    </div>
  );
}
