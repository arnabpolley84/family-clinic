import React, { useState } from 'react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_SERVICES, CLINIC_IMAGES } from '../data/clinicData';
import { Sparkles, Calendar, ChevronRight, Check } from 'lucide-react';

interface TreatmentSectionProps {
  onOpenBooking: () => void;
}

export const TreatmentSection: React.FC<TreatmentSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="treatments"
      aria-label="Treatments and Dental Care"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#0e1111] text-[#f4f0e8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad8d] font-sans font-medium block mb-3">
            Treatments & Oral Wellness · ডেন্টাল কেয়ার
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f4f0e8] leading-tight font-normal mb-5">
            <TypewriterText
              text="Dental care for everyday confidence."
              speed={28}
              delay={150}
              showCursor={true}
            />
          </h2>
          <p className="text-base sm:text-lg text-[#9ba3a1] font-light leading-relaxed">
            Essential oral health services grounded in patient comfort, honest clinical assessment, and long-term oral well-being.
          </p>
        </div>

        {/* 4 Distinct Services Grid with Editorial Cards and Integrated Image 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Services Cards List (8 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CLINIC_SERVICES.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  activeTab === index
                    ? 'bg-[#181f1f] border-[#c8ad8d]/60 shadow-xl'
                    : 'bg-[#131717] border-white/5 hover:border-white/15'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#c8ad8d]">
                      Service 0{index + 1}
                    </span>
                    {service.bengaliTitle && (
                      <span className="font-bengali text-xs text-[#9ba3a1]">
                        {service.bengaliTitle}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl text-[#f4f0e8] font-normal mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#c8ad8d] mb-4 font-sans tracking-wide">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#9ba3a1] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-2 border-t border-white/5 pt-4">
                    {service.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-xs text-[#d1d5db]">
                        <Check className="w-3.5 h-3.5 text-[#c8ad8d] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking();
                    }}
                    className="text-xs font-semibold text-[#c8ad8d] hover:text-[#f4f0e8] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Appointment</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Treatment Atmosphere Accent (IMAGE 3) (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#131717] relative group shadow-xl">
              <img
                src={CLINIC_IMAGES.treatmentZone}
                alt="Dental treatment and consultation zone at My Family Clinic"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover filter contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1111] via-[#0e1111]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0e1111]/85 backdrop-blur-md border border-white/10 text-xs">
                <span className="text-[#c8ad8d] font-semibold block mb-1">Comfort-Centered Philosophy</span>
                <p className="text-[#d1d5db] text-xs leading-relaxed">
                  Every instrument and procedure is calibrated to provide thorough oral care with minimal discomfort.
                </p>
              </div>
            </div>

            {/* Direct Booking Reminder Card */}
            <div className="p-6 rounded-2xl bg-[#181f1f] border border-[#c8ad8d]/20 text-center space-y-3">
              <span className="text-xs uppercase font-mono tracking-widest text-[#c8ad8d]">
                Consultation & Check-up
              </span>
              <p className="text-sm text-[#f4f0e8] font-medium">
                Not sure which service you need?
              </p>
              <p className="text-xs text-[#9ba3a1]">
                Book a general check-up and we will provide an honest, gentle assessment.
              </p>
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-full bg-white/10 hover:bg-[#c8ad8d] hover:text-[#0e1111] text-[#f4f0e8] text-xs font-semibold tracking-wide transition-all cursor-pointer"
              >
                Schedule Check-up
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
