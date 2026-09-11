import React from 'react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_IMAGES, CLINIC_DATA } from '../data/clinicData';
import { CheckCircle2, Shield, HeartHandshake, Smile, Award, Activity } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Comfortable treatment',
      desc: 'Gentle, soothing care methods designed to minimize stress and make every procedure calm and relaxed.',
    },
    {
      icon: Smile,
      title: 'Patient-focused care',
      desc: 'Care centered around individual needs, clear communication, and personalized oral wellness plans.',
    },
    {
      icon: Shield,
      title: 'Preventive dental health',
      desc: 'Dedicated to catching problems before they cause discomfort, protecting natural enamel and gums.',
    },
    {
      icon: Award,
      title: 'Family-friendly approach',
      desc: 'A patient, caring environment welcoming all generations, with special patience for young children.',
    },
    {
      icon: CheckCircle2,
      title: 'Professional dental care',
      desc: 'High clinical standards, meticulous hygiene protocols, and attentive precision at every step.',
    },
    {
      icon: Activity,
      title: 'Long-term oral health',
      desc: 'Focused on sustainable smiles that stay healthy, confident, and functional throughout your life.',
    },
  ];

  return (
    <section
      id="about"
      aria-label="About My Family Clinic"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#131717] text-[#f4f0e8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad8d] font-sans font-medium block mb-3">
            About Our Practice · আমাদের পরিচিতি
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f4f0e8] leading-tight font-normal mb-6">
            <TypewriterText
              text="Care that puts you first."
              speed={28}
              delay={150}
              showCursor={true}
            />
          </h2>
          <p className="text-lg sm:text-xl text-[#d1d5db] font-light leading-relaxed">
            My Family Clinic is a dental care practice in Kolkata focused on comfortable, thorough and patient-centered oral care. Located conveniently on Purbachal Main Road opposite Tata Croma in Kalikapur, we offer an accessible sanctuary for quality dentistry.
          </p>
        </div>

        {/* Editorial Photo Composition (IMAGE 4 & IMAGE 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-stretch">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1111] group shadow-xl">
            <img
              src={CLINIC_IMAGES.entrance}
              alt="My Family Clinic exterior entrance on Purbachal Main Road Kolkata"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover filter contrast-[1.03] group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1111] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0e1111]/80 backdrop-blur-md text-[#c8ad8d] text-xs font-mono mb-2 border border-white/10">
                121, Purbachal Main Rd · Opposite Tata Croma
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#f4f0e8]">
                Accessible, Welcoming, Calm.
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1111] group h-[220px] sm:h-[260px] shadow-lg">
              <img
                src={CLINIC_IMAGES.clinicalSetup}
                alt="Clinical treatment operatory at My Family Clinic"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1111] via-[#0e1111]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#f4f0e8] bg-[#0e1111]/70 backdrop-blur-md p-3 rounded-lg border border-white/5">
                <span className="text-[#c8ad8d] font-semibold block">Clinical Operator Suite</span>
                <span className="text-[#9ba3a1]">Equipped with modern dental armamentarium and strict sterilization standards.</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#181f1f] border border-white/10 flex-1 flex flex-col justify-center">
              <span className="font-bengali text-lg text-[#c8ad8d] block mb-2">
                মি ফ্যামেলী ক্লিনিক
              </span>
              <p className="text-sm sm:text-base text-[#d1d5db] leading-relaxed font-light">
                Whether you visit for a gentle routine check-up, pedodontic attention for your child, or a comprehensive cleaning session, you will always be met with unhurried care, genuine empathy, and respectful listening.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#9ba3a1]">
                <span>Evening Clinic</span>
                <span className="text-[#f4f0e8] font-medium">{CLINIC_DATA.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars - Clean, non-cluttered editorial list */}
        <div className="border-t border-white/10 pt-16">
          <div className="max-w-xl mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#f4f0e8] font-normal">
              Our Core Commitments
            </h3>
            <p className="text-sm text-[#9ba3a1] mt-2">
              Every appointment is guided by these foundational healthcare principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-xl bg-[#181f1f]/70 border border-white/5 hover:border-[#c8ad8d]/30 transition-all duration-300 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#0e1111] flex items-center justify-center text-[#c8ad8d] border border-white/5 group-hover:border-[#c8ad8d]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#9ba3a1]">0{idx + 1}</span>
                  </div>
                  <h4 className="font-medium text-base text-[#f4f0e8] tracking-wide">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#9ba3a1] leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
