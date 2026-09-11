import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { AboutSection } from './components/AboutSection';
import { DentalCleaningSection } from './components/DentalCleaningSection';
import { SignsSection } from './components/SignsSection';
import { TreatmentSection } from './components/TreatmentSection';
import { TrustSection } from './components/TrustSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { AppointmentCTA } from './components/AppointmentCTA';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_DATA } from './data/clinicData';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e1111] text-[#f4f0e8] font-sans antialiased selection:bg-[#c8ad8d] selection:text-[#0e1111] overflow-x-hidden">
      {/* Top Header Navigation */}
      <Header onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Main Page Sections */}
      <main id="main-content">
        <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />
        <IntroSection />
        <AboutSection />
        <DentalCleaningSection onOpenBooking={() => setIsBookingModalOpen(true)} />
        <SignsSection onOpenBooking={() => setIsBookingModalOpen(true)} />
        <TreatmentSection onOpenBooking={() => setIsBookingModalOpen(true)} />
        <TrustSection />
        <ReviewsSection />
        <ContactSection />
        <AppointmentCTA onOpenBooking={() => setIsBookingModalOpen(true)} />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Appointment Request Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Mobile Floating Quick Contact Action Pill */}
      <aside aria-label="Quick Actions" className="fixed bottom-4 left-4 right-4 z-40 sm:hidden pb-safe">
        <div className="bg-[#181f1f]/95 backdrop-blur-lg border border-white/10 p-2 rounded-full shadow-2xl flex items-center justify-between gap-2">
          <a
            href={`tel:${CLINIC_DATA.phoneRaw}`}
            className="flex-1 py-2.5 px-3 rounded-full bg-white/5 hover:bg-white/10 text-[#f4f0e8] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#c8ad8d]" />
            <span className="whitespace-nowrap">Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => setIsBookingModalOpen(true)}
            className="flex-1 py-2.5 px-3 rounded-full bg-[#c8ad8d] text-[#0e1111] text-xs font-semibold flex items-center justify-center gap-1.5 transition-transform active:scale-95 shadow-sm cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">Book Visit</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
