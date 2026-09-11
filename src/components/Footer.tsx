import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';
import { Phone, MapPin, Star, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="main-footer"
      className="bg-[#0a0d0d] text-[#e8e6e3] border-t border-white/10 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-14 border-b border-white/10">
          
          {/* Brand Info (5 columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#181f1f] border border-[#c8ad8d]/40 flex items-center justify-center">
                <span className="font-serif text-[#c8ad8d] text-base font-semibold italic">M</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#f4f0e8] tracking-wider">
                {CLINIC_DATA.name}
              </h2>
            </div>

            <p className="font-bengali text-sm text-[#c8ad8d]">
              {CLINIC_DATA.bengaliName} · {CLINIC_DATA.category}
            </p>

            <p className="text-sm text-[#9ba3a1] font-light max-w-sm leading-relaxed">
              Comfortable, patient-centered dental care in Kalikapur, Kolkata. Designed around your comfort and long-term oral well-being.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#9ba3a1] pt-2">
              <Star className="w-3.5 h-3.5 text-[#eab308] fill-[#eab308]" />
              <span className="font-medium text-[#f4f0e8]">4.9 / 5</span>
              <span>· 30 Verified Google Patient Reviews</span>
            </div>
          </div>

          {/* Single-line Navigation (3 columns) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-[#c8ad8d] block mb-2">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm text-[#d1d5db]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#c8ad8d] transition-colors whitespace-nowrap inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#c8ad8d] block mb-2">
              Clinic Contact
            </span>

            <div className="space-y-2 text-sm text-[#d1d5db]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c8ad8d] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm leading-relaxed text-[#9ba3a1]">
                  {CLINIC_DATA.address}, {CLINIC_DATA.city}
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#c8ad8d] shrink-0" />
                <a
                  href={`tel:${CLINIC_DATA.phoneRaw}`}
                  className="text-base sm:text-lg font-serif text-[#f4f0e8] hover:text-[#c8ad8d] transition-colors whitespace-nowrap"
                >
                  {CLINIC_DATA.phone}
                </a>
              </div>

              <p className="text-xs text-[#9ba3a1] pl-6">
                Hours: {CLINIC_DATA.hours} (Daily)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9ba3a1]">
          <p>© 2026 My Family Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#9ba3a1] hidden sm:inline">Dentist · Kolkata</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#c8ad8d] hover:text-[#f4f0e8] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
