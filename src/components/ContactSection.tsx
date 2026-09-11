import React, { useState } from 'react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_DATA } from '../data/clinicData';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    const fullAddress = `${CLINIC_DATA.name}, ${CLINIC_DATA.address}, ${CLINIC_DATA.city}`;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Clinic Information and Location"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#131717] text-[#f4f0e8] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad8d] font-sans font-medium block mb-3">
            Visit & Contact · ক্লিনিকে আসুন
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f4f0e8] leading-tight font-normal mb-4">
            <TypewriterText
              text="Find us in Kalikapur, Kolkata."
              speed={28}
              delay={150}
              showCursor={true}
            />
          </h2>
          <p className="font-bengali text-sm sm:text-base text-[#c8ad8d]">
            পূর্বাচল মেন রোড, টাটা ক্রোমার ঠিক বিপরীতে, কালিকাপুর, হালতু।
          </p>
        </div>

        {/* Contact Information & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Official Clinic Information */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#0e1111] border border-white/10 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Brand and Bengali Title */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#c8ad8d] block mb-1">
                  Dental Practice
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#f4f0e8] font-normal">
                  {CLINIC_DATA.name}
                </h3>
                <span className="font-bengali text-lg text-[#9ba3a1] block mt-1">
                  {CLINIC_DATA.bengaliName}
                </span>
              </div>

              {/* Exact Address */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c8ad8d] shrink-0 mt-1" />
                  <div className="space-y-1 text-sm sm:text-base text-[#d1d5db]">
                    <p className="font-medium text-[#f4f0e8]">121, Purbachal Main Rd</p>
                    <p className="text-[#c8ad8d] text-sm">Opposite Tata Croma</p>
                    <p className="text-sm text-[#9ba3a1]">
                      East Purbachal, Kalikapur, Haltu
                    </p>
                    <p className="text-sm text-[#9ba3a1]">
                      Kolkata, West Bengal 700078
                    </p>
                  </div>
                </div>

                <div className="pt-2 pl-8">
                  <button
                    type="button"
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#9ba3a1] hover:text-[#c8ad8d] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Address copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy full address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Opening Information & Plus Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c8ad8d] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#9ba3a1] block uppercase tracking-wider">Hours</span>
                    <span className="font-medium text-[#f4f0e8]">{CLINIC_DATA.hours}</span>
                    <span className="text-[11px] text-[#9ba3a1] block">Daily evening appointments</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-[#c8ad8d] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[#9ba3a1] block uppercase tracking-wider">Plus Code</span>
                    <span className="font-mono text-[#f4f0e8] text-xs sm:text-sm">{CLINIC_DATA.plusCode}</span>
                    <span className="text-[11px] text-[#9ba3a1] block">Search on Google Maps</span>
                  </div>
                </div>
              </div>

              {/* Phone Line */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#9ba3a1] block uppercase tracking-wider">Direct Telephone</span>
                  <a
                    href={`tel:${CLINIC_DATA.phoneRaw}`}
                    className="text-xl sm:text-2xl font-serif text-[#f4f0e8] hover:text-[#c8ad8d] transition-colors"
                  >
                    {CLINIC_DATA.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* The Two Prominent Actions (Call Now & Get Directions) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <a
                id="contact-call-now-button"
                href={`tel:${CLINIC_DATA.phoneRaw}`}
                className="w-full py-3.5 px-5 rounded-full bg-[#c8ad8d] hover:bg-[#d8c2a4] text-[#0e1111] font-semibold text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                aria-label={`Call ${CLINIC_DATA.phone}`}
              >
                <Phone className="w-4 h-4 text-[#0e1111]" />
                <span className="whitespace-nowrap">Call Now</span>
              </a>

              <a
                id="contact-get-directions-button"
                href={CLINIC_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full border border-white/20 hover:border-[#c8ad8d] bg-white/5 hover:bg-white/10 text-[#f4f0e8] font-medium text-sm tracking-wide text-center flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <Navigation className="w-4 h-4 text-[#c8ad8d]" />
                <span className="whitespace-nowrap">Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9ba3a1]" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Location Frame & Landmark Guide */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-[#0e1111] flex flex-col justify-between shadow-xl">
            <div className="p-6 border-b border-white/10 bg-[#181f1f]/70 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#c8ad8d] block">
                  Location Landmark
                </span>
                <h4 className="text-sm sm:text-base font-medium text-[#f4f0e8]">
                  Opposite Tata Croma · Purbachal Main Road
                </h4>
              </div>
              <a
                href={CLINIC_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#c8ad8d] hover:underline flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-[320px] sm:h-[380px] bg-[#121616]">
              <iframe
                title="My Family Clinic Map Location in Kalikapur Haltu Kolkata"
                src={`https://maps.google.com/maps?q=121%2C+Purbachal+Main+Rd%2C+Kalikapur%2C+Haltu%2C+Kolkata%2C+West+Bengal+700078&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 bg-[#181f1f]/90 border-t border-white/5 text-xs text-[#9ba3a1] flex items-center justify-between">
              <span>Public Transit: Kalikapur Bridge / Ruby Crossing accessible</span>
              <span className="text-[#f4f0e8] font-mono">Pin: 700078</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
