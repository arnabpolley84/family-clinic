import React, { useState } from 'react';
import { TypewriterText } from './TypewriterText';
import { CLEANING_SIGNS } from '../data/clinicData';
import { AlertCircle, Calendar, ArrowRight } from 'lucide-react';

interface SignsSectionProps {
  onOpenBooking: () => void;
}

export const SignsSection: React.FC<SignsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="signs"
      aria-label="When to Consider Dental Cleaning"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#131717] text-[#f4f0e8] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subhead */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad8d] font-sans font-medium block mb-3">
            Self Assessment · কখন ক্লিনিং প্রয়োজন?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f4f0e8] leading-tight font-normal">
            <TypewriterText
              text="Your smile may be asking for professional care."
              speed={28}
              delay={150}
              showCursor={true}
            />
          </h2>
          <p className="text-sm sm:text-base text-[#9ba3a1] mt-4 font-light">
            Notice any of these early signs? Early evaluation prevents minor plaque buildup from developing into painful periodontal disease.
          </p>
        </div>

        {/* The 6 Signs - Revealed one by one with tasteful sequential typing & styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-14 sm:mb-16">
          {CLEANING_SIGNS.map((sign, index) => (
            <div
              key={sign}
              className="p-5 sm:p-6 rounded-xl bg-[#181f1f] border border-white/5 hover:border-[#c8ad8d]/40 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#0e1111] border border-white/10 flex items-center justify-center shrink-0 text-[#c8ad8d] group-hover:border-[#c8ad8d] transition-colors">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#9ba3a1] tracking-wider">
                  Indicator 0{index + 1}
                </span>
                <p className="text-base sm:text-lg font-medium text-[#f4f0e8]">
                  <TypewriterText
                    text={sign}
                    speed={20}
                    delay={250 + index * 120}
                    showCursor={false}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Finishing statement and CTA */}
        <div className="text-center p-8 sm:p-12 rounded-2xl bg-[#0e1111] border border-[#c8ad8d]/20 relative overflow-hidden">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <p className="font-serif text-2xl sm:text-3xl text-[#f4f0e8] font-normal">
              Book your dental cleaning appointment today.
            </p>
            <p className="font-bengali text-sm sm:text-base text-[#c8ad8d]">
              আজই আপনার ডেন্টাল চেক-আপ ও ক্লিনিংয়ের জন্য অ্যাপয়েন্টমেন্ট নিন।
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#c8ad8d] hover:bg-[#d8c2a4] text-[#0e1111] text-sm sm:text-base font-semibold tracking-wide transition-all shadow-lg active:scale-98 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0e1111]" />
                <span className="whitespace-nowrap">Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#0e1111]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
