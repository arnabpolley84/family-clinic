import React from 'react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_DATA, CLINIC_IMAGES } from '../data/clinicData';
import { Calendar, Phone, Clock, ArrowRight } from 'lucide-react';

interface AppointmentCTAProps {
  onOpenBooking: () => void;
}

export const AppointmentCTA: React.FC<AppointmentCTAProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="appointment-cta"
      aria-label="Appointment Call to Action"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#0e1111] text-[#f4f0e8] overflow-hidden border-t border-white/5"
    >
      {/* Subtle Background Layering with Clinic Image 1 / 3 */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${CLINIC_IMAGES.hero})`,
          filter: 'grayscale(100%) brightness(0.6) blur(2px)',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1111] via-[#0e1111]/90 to-[#0e1111]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181f1f] border border-[#c8ad8d]/30 text-xs text-[#c8ad8d] mb-6">
          <Clock className="w-3.5 h-3.5" />
          <span>Evening Consultations · {CLINIC_DATA.hours}</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f4f0e8] font-normal leading-[1.12] mb-6 max-w-4xl mx-auto">
          <TypewriterText
            text="Your healthier smile starts with one appointment."
            speed={28}
            delay={150}
            showCursor={true}
          />
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#d1d5db] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Take the next step toward better oral health and a more confident smile.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            id="closing-book-appointment-button"
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#c8ad8d] hover:bg-[#d8c2a4] text-[#0e1111] text-sm sm:text-base font-semibold tracking-wide transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#0e1111]" />
            <span className="whitespace-nowrap">Book an Appointment</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#0e1111]" />
          </button>

          <a
            id="closing-call-button"
            href={`tel:${CLINIC_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-4 sm:py-4.5 rounded-full border border-white/20 hover:border-[#c8ad8d] bg-white/5 hover:bg-white/10 text-[#f4f0e8] text-sm sm:text-base font-medium tracking-wide transition-all active:scale-[0.98]"
            aria-label={`Call ${CLINIC_DATA.phone}`}
          >
            <Phone className="w-4 h-4 text-[#c8ad8d]" />
            <span className="whitespace-nowrap">Call {CLINIC_DATA.phone}</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="font-bengali text-xs sm:text-sm text-[#9ba3a1] mt-8">
          ক্লিনিক প্রতিদিন সন্ধ্যা ৬টায় খোলে। সরাসরি ফোনে যোগাযোগ করতে পারেন অথবা ফর্ম পূরণ করুন।
        </p>
      </div>
    </section>
  );
};
