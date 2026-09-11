import React from 'react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_IMAGES } from '../data/clinicData';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section
      id="intro"
      aria-label="Introduction Statement"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#0e1111] text-[#f4f0e8] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Section Label */}
        <div className="mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad8d] font-sans font-medium block">
            Brand Philosophy · কলকাতা
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f4f0e8] leading-[1.12] font-normal">
            <TypewriterText
              text="Dental care should feel personal."
              speed={28}
              delay={100}
              showCursor={true}
            />
          </h2>
        </div>

        {/* Editorial 2-Column Storytelling Grid with Layered Clinic Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-[#d1d5db] font-light leading-relaxed">
            <p className="text-[#f4f0e8] font-normal leading-relaxed text-lg sm:text-2xl font-serif">
              At My Family Clinic, dental care is centered around comfort, trust and long-term oral health.
            </p>
            <p className="text-[#9ba3a1] leading-relaxed text-base sm:text-lg font-sans">
              From preventive cleaning and regular check-ups to comprehensive dental care, every visit is designed around the individual needs of each patient. We believe a dental visit shouldn’t feel intimidating — it should be a calm, reassuring experience where you and your loved ones receive undivided attention.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10">
              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-[#181f1f] flex items-center justify-center text-[#c8ad8d]">
                  <Heart className="w-4 h-4" />
                </div>
                <h3 className="font-medium text-sm text-[#f4f0e8] tracking-wide">Comfort First</h3>
                <p className="text-xs text-[#9ba3a1]">Gentle clinical care designed to keep you and your child relaxed.</p>
              </div>

              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-[#181f1f] flex items-center justify-center text-[#c8ad8d]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-medium text-sm text-[#f4f0e8] tracking-wide">Preventive Focus</h3>
                <p className="text-xs text-[#9ba3a1]">Guarding natural tooth structure and preventing complex issues.</p>
              </div>

              <div className="space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-[#181f1f] flex items-center justify-center text-[#c8ad8d]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-medium text-sm text-[#f4f0e8] tracking-wide">Family Welcome</h3>
                <p className="text-xs text-[#9ba3a1]">A thoughtful setting for children, teens, adults, and seniors.</p>
              </div>
            </div>
          </div>

          {/* Layered Editorial Clinic Image (IMAGE 5) with soft feathered borders */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#131717] group shadow-2xl">
              <img
                src={CLINIC_IMAGES.interiorRoom}
                alt="My Family Clinic interior treatment space in Kalikapur Kolkata"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1111] via-[#0e1111]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e1111]/80 backdrop-blur-md border border-white/10 text-xs">
                <p className="text-[#f4f0e8] font-medium tracking-wide">Patient Treatment Suite</p>
                <p className="text-[#9ba3a1] text-[11px] mt-0.5">Quiet, hygienic clinical environment in Kalikapur, Kolkata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
