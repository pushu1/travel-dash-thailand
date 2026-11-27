'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Calendar, Users, ArrowRight, Loader2, Sparkles, CheckCircle2, Lock } from 'lucide-react';
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
      newErrors.fullName = 'Please enter your full name (minimum 2 characters)';
    }

    const cleanPhone = formData.whatsappNumber.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.whatsappNumber = 'Please enter a valid 10-digit WhatsApp number';
    }

    if (!formData.preferredDepartureDate) {
      newErrors.preferredDepartureDate = 'Please select your departure date';
    }

    if (!formData.travellingWith) {
      newErrors.travellingWith = 'Please specify who you are travelling with';
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          whatsappNumber: formData.whatsappNumber,
          preferredDepartureDate: formData.preferredDepartureDate,
          travellingWith: formData.travellingWith,
          numberOfTravellers: formData.numberOfTravellers,
          source: 'Cinematic Hero Enquiry Card',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to submit enquiry.');
      }

      // Zero-data-loss client persistence
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

      setSubmitSuccess(true);

      setTimeout(() => {
        const targetUrl = result.redirectUrl || `/thank-you-thailand?leadId=${encodeURIComponent(result.leadId)}&name=${encodeURIComponent(formData.fullName)}&date=${encodeURIComponent(formData.preferredDepartureDate)}`;
        router.push(targetUrl);
      }, 500);
    } catch (err: any) {
      console.error('Submission error:', err);
      setApiErrorMessage(err.message || 'Something went wrong. Please WhatsApp us or retry.');
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id={id}
      className={`relative rounded-3xl p-6 sm:p-8 bg-[#071B2C]/90 border border-[#D6B36A]/35 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-2xl ${className}`}
    >
      {/* Decorative ambient corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#D6B36A]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Gold Ribbon */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B36A]/15 border border-[#D6B36A]/40 text-[#D6B36A] text-[11px] font-bold tracking-wider uppercase mb-3">
        <Sparkles className="w-3.5 h-3.5 text-[#D6B36A]" />
        <span>Reserve With ₹500 Seat-Hold</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-serif mb-1 leading-snug">
        {title}
      </h3>
      <p className="text-xs text-[#F5EBDD]/70 mb-5 leading-relaxed">
        {subtitle}
      </p>

      {apiErrorMessage && (
        <div className="mb-4 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs">
          {apiErrorMessage}
        </div>
      )}

      {submitSuccess && (
        <div className="mb-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Enquiry registered! Redirecting to confirmation page...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] font-semibold text-[#F5EBDD] uppercase tracking-wider mb-1">
            1. Full Name <span className="text-[#D6B36A]">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#D6B36A]/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: '' });
              }}
              className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#040E17]/60 border ${
                errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#D6B36A]'
              } text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#D6B36A]/40 transition-all`}
            />
          </div>
          {errors.fullName && <p className="mt-1 text-[10px] text-red-400">{errors.fullName}</p>}
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-[11px] font-semibold text-[#F5EBDD] uppercase tracking-wider mb-1">
            2. WhatsApp Number <span className="text-[#D6B36A]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#D6B36A] pr-2 border-r border-white/15">
              +91
            </span>
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
              className={`w-full pl-14 pr-3.5 py-2.5 rounded-xl bg-[#040E17]/60 border ${
                errors.whatsappNumber ? 'border-red-500' : 'border-white/10 focus:border-[#D6B36A]'
              } text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#D6B36A]/40 transition-all`}
            />
          </div>
          {errors.whatsappNumber && <p className="mt-1 text-[10px] text-red-400">{errors.whatsappNumber}</p>}
        </div>

        {/* Preferred Departure Date */}
        <div>
          <label className="block text-[11px] font-semibold text-[#F5EBDD] uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>3. Preferred Departure Date <span className="text-[#D6B36A]">*</span></span>
            <span className="text-[10px] text-[#D6B36A] lowercase font-normal">select date</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-[#D6B36A]/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={formData.preferredDepartureDate}
              onChange={(e) => setFormData({ ...formData, preferredDepartureDate: e.target.value })}
              className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#040E17]/80 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#D6B36A] transition-all appearance-none cursor-pointer"
            >
              {DEPARTURE_DATES.map((dep) => (
                <option key={dep.id} value={dep.date} className="bg-[#071B2C] text-white">
                  {dep.date} ({dep.description})
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
          {/* Quick chip selectors */}
          <div className="mt-2 flex flex-wrap gap-1.5">
            {DEPARTURE_DATES.map((dep) => (
              <button
                key={dep.id}
                type="button"
                onClick={() => setFormData({ ...formData, preferredDepartureDate: dep.date })}
                className={`text-[10px] px-2.5 py-1 rounded-lg border transition-all ${
                  formData.preferredDepartureDate === dep.date
                    ? 'bg-[#D6B36A] text-[#071B2C] font-extrabold border-[#D6B36A] shadow-sm'
                    : 'bg-white/5 text-[#F5EBDD]/70 border-white/10 hover:border-[#D6B36A]/40'
                }`}
              >
                {dep.date}
              </button>
            ))}
          </div>
        </div>

        {/* Travelling With */}
        <div>
          <label className="block text-[11px] font-semibold text-[#F5EBDD] uppercase tracking-wider mb-1">
            4. Travelling With <span className="text-[#D6B36A]">*</span>
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {TRAVELLING_WITH_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, travellingWith: option })}
                className={`py-2 px-2.5 rounded-xl text-[11px] font-medium border text-left flex items-center gap-1.5 transition-all ${
                  formData.travellingWith === option
                    ? 'bg-[#D6B36A]/20 border-[#D6B36A] text-[#D6B36A] font-bold shadow-inner'
                    : 'bg-white/5 border-white/10 text-[#F5EBDD]/70 hover:border-white/20'
                }`}
              >
                <span className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${
                  formData.travellingWith === option ? 'border-[#D6B36A] bg-[#D6B36A]' : 'border-slate-500'
                }`}>
                  {formData.travellingWith === option && (
                    <span className="w-1 h-1 rounded-full bg-[#071B2C]" />
                  )}
                </span>
                <span className="truncate">{option}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Number of Travellers */}
        <div>
          <label className="block text-[11px] font-semibold text-[#F5EBDD] uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>5. Number of Travellers</span>
            <span className="text-[10px] text-[#12A6A0] font-bold">Standard 2 Travellers</span>
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-[#D6B36A]/70 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              readOnly
              value={formData.numberOfTravellers}
              className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-[#040E17]/60 border border-white/10 text-white text-xs sm:text-sm cursor-default select-none focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[11px] text-[#D6B36A] font-extrabold">
              ₹1,22,000 Total
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full gold-luxury-btn text-[#071B2C] font-black text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-2xl tracking-wider uppercase transition-all disabled:opacity-75"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#071B2C]" />
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
          <p className="text-[11px] text-[#F5EBDD]/60 leading-normal">
            Hold your seats with just <strong className="text-[#D6B36A]">₹500</strong>. Our travel team will contact you with the booking details.
          </p>
        </div>
      </form>
    </div>
  );
}
