import React from 'react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_IMAGES, CLEANING_BENEFITS } from '../data/clinicData';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

interface DentalCleaningSectionProps {
  onOpenBooking: () => void;
}

export const DentalCleaningSection: React.FC<DentalCleaningSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="dental-cleaning"
      aria-label="Professional Dental Cleaning"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#0e1111] text-[#f4f0e8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-[#c8ad8d]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad8d] font-sans font-medium">
            Signature Care Focus · ডেন্টাল স্কেলিং ও ক্লিনিং
          </span>
        </div>

        {/* Big Editorial Heading */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f4f0e8] leading-[1.15] font-normal">
            <TypewriterText
              text="Professional Dental Cleaning"
              speed={28}
              delay={100}
              showCursor={true}
            />
          </h2>
          <p className="font-bengali text-[#c8ad8d] text-base sm:text-lg mt-2">
            পেশাদার দাঁত পরিষ্কার ও স্কেলিং সেবা — সুস্থ হাসির অন্যতম চাবিকাঠি।
          </p>
        </div>

        {/* Large Editorial Two-Column Presentation with Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Dental Image (IMAGE 2) with soft faded edge treatment */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#131717] shadow-2xl">
              <img
                src={CLINIC_IMAGES.cleaningChair}
                alt="Professional dental cleaning chair at My Family Clinic Kolkata"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1111] via-[#0e1111]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e1111]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0e1111]/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between text-xs text-[#9ba3a1] mb-1">
                  <span>Operatory Sterilization Protocol</span>
                  <span className="text-[#c8ad8d]">100% Sanitized</span>
                </div>
                <p className="text-sm font-medium text-[#f4f0e8]">
                  Ultrasonic scaling tips for thorough, gentle calculus removal.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy and Benefits List */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            <div className="space-y-4 text-base sm:text-lg text-[#d1d5db] font-light leading-relaxed">
              <p className="text-[#f4f0e8] text-lg sm:text-xl font-normal leading-relaxed">
                Regular dental cleaning is an essential part of maintaining a healthy, confident smile.
              </p>
              <p className="text-[#9ba3a1]">
                Even with daily brushing and flossing, plaque and tartar can build up in areas that are difficult to clean at home. Professional dental cleaning helps remove these deposits and supports healthier teeth and gums.
              </p>
            </div>

            {/* Benefits as an elegant editorial checklist */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs uppercase tracking-widest text-[#c8ad8d] font-mono">
                Key Preventive Health Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {CLEANING_BENEFITS.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-[#181f1f]/80 border border-white/5 hover:border-[#c8ad8d]/30 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#c8ad8d]/10 text-[#c8ad8d] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#e5e7eb] leading-snug font-normal">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#c8ad8d] hover:bg-[#d8c2a4] text-[#0e1111] font-semibold text-sm tracking-wide transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>Schedule a Cleaning Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
