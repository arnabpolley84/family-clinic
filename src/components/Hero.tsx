import React from 'react';
import { Star, Phone, Calendar, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { CLINIC_DATA, CLINIC_IMAGES } from '../data/clinicData';
import { TypewriterText } from './TypewriterText';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#0e1111] text-[#f4f0e8]"
    >
      {/* 
        HERO IMAGE TREATMENT:
        - Image placed at the right without distortion (natural aspect ratio using object-cover).
        - Smooth faded effect: Dark at left so all texts are prominently visible on solid rich background.
        - Right side image is completely clear, bright, and unshaded (no dark layer on top).
      */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Right-aligned Hero Image: Preserves natural aspect ratio without distortion */}
        <div 
          className="absolute top-0 bottom-0 right-0 w-full sm:w-[70%] md:w-[62%] lg:w-[58%] xl:w-[55%] h-full"
          style={{
            // Smooth gradient mask: completely transparent at the left edge, transitioning seamlessly to 100% opacity on the right
            maskImage:
              'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
          }}
        >
          <img
            src={CLINIC_IMAGES.hero}
            alt="My Family Clinic Dental Operatory and Treatment Room"
            className="w-full h-full object-cover object-[center_right] sm:object-right brightness-[1.04] contrast-[1.02]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Solid Dark protection on the left to ensure texts are prominent and high-contrast */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[58%] md:w-[50%] lg:w-[48%] bg-gradient-to-r from-[#0e1111] via-[#0e1111] to-transparent z-[1]" />

        {/* Mobile vertical fade so text stays prominent on smaller vertical screens */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-[#0e1111] via-[#0e1111]/85 to-transparent h-[60%] z-[1]" />
      </div>

      {/* Main Hero Content Area - With ample safe-area padding at top to avoid any header clipping */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 flex-1 flex flex-col justify-center">
        
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl">
          {/* Editorial Eyebrow & Google Rating */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#181f1f]/80 backdrop-blur-md border border-[#c8ad8d]/30 text-xs sm:text-sm text-[#e8e6e3] shadow-sm">
            <div className="flex items-center text-[#eab308]">
              <Star className="w-3.5 h-3.5 fill-[#eab308]" />
            </div>
            <span className="font-medium tracking-wide">★ 4.9 / 5</span>
            <span className="text-white/40">·</span>
            <span className="text-[#9ba3a1]">30 Reviews</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#9ba3a1] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ad8d]" />
            <span>Dentist · Kolkata</span>
          </div>
        </div>

        {/* Secondary Bengali Heading with Grapheme-Safe Typewriter Animation */}
        <div className="mb-2 sm:mb-3">
          <TypewriterText
            text="সুস্থ হাসির শুরু এখানেই।"
            speed={38}
            delay={200}
            className="font-bengali text-[#c8ad8d] text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-wide"
            as="h2"
            id="hero-bengali-title"
          />
        </div>

        {/* Monumental English Headline with Typing Animation */}
        <h1
          id="hero-main-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#f4f0e8] leading-[1.08] max-w-4xl font-normal mb-5 sm:mb-7"
        >
          <TypewriterText
            text="A Healthier Smile Begins Here."
            speed={32}
            delay={600}
            showCursor={true}
          />
        </h1>

        {/* Editorial Supporting Texts (English & Bengali) */}
        <div className="max-w-2xl space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 text-[#d1d5db]">
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#e5e7eb] leading-relaxed font-light">
            Comfortable dental care for healthier teeth, confident smiles and better everyday oral health.
          </p>
          <p className="font-bengali text-xs sm:text-sm md:text-base text-[#9ba3a1] leading-relaxed">
            সুস্থ দাঁত, আত্মবিশ্বাসী হাসি এবং উন্নত মুখের স্বাস্থ্যের জন্য যত্নশীল ও আরামদায়ক ডেন্টাল কেয়ার।
          </p>
        </div>

        {/* Call to Actions (Primary & Secondary) */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-5">
          <button
            id="hero-book-cta"
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#c8ad8d] hover:bg-[#d8c2a4] text-[#0e1111] text-sm sm:text-base font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#0e1111]" />
            <span className="whitespace-nowrap">Book an Appointment</span>
          </button>

          <a
            id="hero-call-cta"
            href={`tel:${CLINIC_DATA.phoneRaw}`}
            className="inline-flex items-center gap-2.5 px-5 sm:px-7 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-[#c8ad8d] bg-white/5 hover:bg-white/10 text-[#f4f0e8] text-sm sm:text-base font-medium tracking-wide transition-all active:scale-[0.98]"
            aria-label={`Call ${CLINIC_DATA.phone}`}
          >
            <Phone className="w-4 h-4 text-[#c8ad8d]" />
            <span className="whitespace-nowrap">Call {CLINIC_DATA.phone}</span>
          </a>
        </div>
        </div>
      </div>

      {/* Hero Bottom Meta Strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#0e1111]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#9ba3a1]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#c8ad8d]" />
              <span className="text-[#d1d5db]">Kalikapur, Haltu · Kolkata</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#c8ad8d]" />
              <span className="text-[#d1d5db]">Opens at 6:00 PM</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[#9ba3a1] text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
            <span>Welcoming patients today</span>
          </div>
        </div>
      </div>
    </section>
  );
};
