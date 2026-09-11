import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin, Star } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0e1111]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-gradient-to-b from-[#0e1111]/85 via-[#0e1111]/50 to-transparent py-4 sm:py-5'
        } pt-safe`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Brand Logo - Never wraps or gets cut off */}
            <a
              href="#hero"
              id="header-brand-logo"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-1 focus:ring-[#c8ad8d] rounded-sm p-1"
              aria-label="My Family Clinic Homepage"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#181f1f] border border-[#c8ad8d]/30 flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#c8ad8d] transition-colors">
                <span className="font-serif text-[#c8ad8d] text-base sm:text-lg font-semibold italic">M</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif tracking-widest text-sm sm:text-base lg:text-lg font-medium text-[#f4f0e8] whitespace-nowrap leading-tight">
                  MY FAMILY CLINIC
                </span>
                <span className="font-sans text-[10px] sm:text-xs text-[#9ba3a1] tracking-wider uppercase whitespace-nowrap">
                  Dentist · Kolkata
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Strictly single line with whitespace-nowrap */}
            <nav
              id="desktop-nav"
              className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm tracking-wide text-[#d1d5db]"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="whitespace-nowrap transition-colors duration-200 hover:text-[#f4f0e8] hover:underline underline-offset-8 decoration-[#c8ad8d]/60 font-medium py-1 text-[13px] xl:text-[14px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center gap-2.5 md:gap-3 shrink-0">
              {/* Phone quick call */}
              <a
                href={`tel:${CLINIC_DATA.phoneRaw}`}
                id="header-phone-button"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#c8ad8d]/60 text-xs text-[#e8e6e3] transition-all whitespace-nowrap bg-white/5 hover:bg-white/10"
                aria-label={`Call My Family Clinic at ${CLINIC_DATA.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#c8ad8d]" />
                <span className="whitespace-nowrap">{CLINIC_DATA.phone}</span>
              </a>

              {/* Book Appointment CTA */}
              <button
                id="header-book-button"
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#c8ad8d] hover:bg-[#d8c2a4] text-[#0e1111] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0e1111]" />
                <span className="whitespace-nowrap">Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
              <button
                id="header-mobile-book-icon"
                type="button"
                onClick={onOpenBooking}
                className="sm:hidden p-2 rounded-full bg-[#c8ad8d] text-[#0e1111] transition-transform active:scale-95"
                aria-label="Book Appointment"
              >
                <Calendar className="w-4 h-4" />
              </button>

              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-md text-[#f4f0e8] hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#c8ad8d] transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Smooth, safe-area padded, vertical layout */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-[#0e1111]/98 backdrop-blur-xl flex flex-col justify-between pt-safe px-6 pb-8 lg:hidden animate-fadeIn"
        >
          {/* Top spacing below header bar */}
          <div className="pt-20 flex flex-col gap-6 overflow-y-auto max-h-[75vh]">
            <div className="border-b border-white/10 pb-4">
              <span className="font-serif text-xl tracking-wider text-[#f4f0e8] block">
                MY FAMILY CLINIC
              </span>
              <span className="font-bengali text-sm text-[#c8ad8d] block mt-0.5">
                মি ফ্যামেলী ক্লিনিক
              </span>
              <p className="text-xs text-[#9ba3a1] mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c8ad8d]" />
                121, Purbachal Main Rd, Kalikapur, Kolkata
              </p>
            </div>

            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-lg text-[#f4f0e8] hover:text-[#c8ad8d] py-2 transition-colors font-medium border-b border-white/5 whitespace-nowrap flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#9ba3a1]">→</span>
                </a>
              ))}
            </nav>

            {/* Clinic meta badges in mobile view */}
            <div className="bg-[#181f1f] rounded-lg p-4 border border-white/5 space-y-2 text-xs text-[#d1d5db]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[#9ba3a1]">
                  <Clock className="w-3.5 h-3.5 text-[#c8ad8d]" /> Clinic Status
                </span>
                <span className="text-[#f4f0e8] font-medium">{CLINIC_DATA.hours}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[#9ba3a1]">
                  <Star className="w-3.5 h-3.5 text-[#c8ad8d] fill-[#c8ad8d]" /> Google Rating
                </span>
                <span className="text-[#f4f0e8] font-medium">4.9 / 5 · 30 Reviews</span>
              </div>
            </div>
          </div>

          {/* Bottom Action CTAs in Mobile Menu */}
          <div className="pt-4 flex flex-col gap-3 pb-safe">
            <button
              id="mobile-nav-book-btn"
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-[#c8ad8d] text-[#0e1111] font-semibold text-sm tracking-wide text-center flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span className="whitespace-nowrap">Book an Appointment</span>
            </button>
            <a
              id="mobile-nav-call-btn"
              href={`tel:${CLINIC_DATA.phoneRaw}`}
              className="w-full py-3 rounded-full border border-white/20 text-[#f4f0e8] text-sm font-medium text-center flex items-center justify-center gap-2 hover:bg-white/5"
            >
              <Phone className="w-4 h-4 text-[#c8ad8d]" />
              <span className="whitespace-nowrap">Call {CLINIC_DATA.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
