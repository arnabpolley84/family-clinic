import React, { useEffect, useState, useRef } from 'react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_DATA } from '../data/clinicData';
import { Star, ShieldCheck, Clock, Award } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [ratingCount, setRatingCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setRatingCount(4.9);
      setReviewCount(30);
      return;
    }

    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    // Animate rating from 0 to 4.9
    let startRating = 0;
    const ratingInterval = setInterval(() => {
      startRating += 0.1;
      if (startRating >= 4.9) {
        setRatingCount(4.9);
        clearInterval(ratingInterval);
      } else {
        setRatingCount(Number(startRating.toFixed(1)));
      }
    }, 28);

    // Animate reviews from 0 to 30
    let startReviews = 0;
    const reviewInterval = setInterval(() => {
      startReviews += 1;
      if (startReviews >= 30) {
        setReviewCount(30);
        clearInterval(reviewInterval);
      } else {
        setReviewCount(startReviews);
      }
    }, 45);

    return () => {
      clearInterval(ratingInterval);
      clearInterval(reviewInterval);
    };
  }, [inView]);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      aria-label="Trust and Patient Ratings"
      className="relative py-20 sm:py-28 bg-[#131717] text-[#f4f0e8] overflow-hidden border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Brand Tag */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad8d] font-sans font-medium">
            Social Proof & Verification · নির্ভরযোগ্য সেবা
          </span>
        </div>

        {/* Big Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f4f0e8] font-normal leading-tight mb-4">
            <TypewriterText
              text="Trusted by patients. Designed around comfort."
              speed={28}
              delay={100}
              showCursor={true}
            />
          </h2>
          <p className="font-bengali text-sm sm:text-base text-[#9ba3a1]">
            রোগীদের আস্থা এবং সর্বোচ্চ স্বাচ্ছন্দ্যকে অগ্রাধিকার দিয়ে আমাদের পথচলা।
          </p>
        </div>

        {/* Numerical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Stat 1: Google Rating */}
          <div className="p-8 rounded-2xl bg-[#0e1111] border border-white/5 text-center space-y-2 group hover:border-[#c8ad8d]/40 transition-colors">
            <div className="flex items-center justify-center gap-1 text-[#eab308] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#eab308]" />
              ))}
            </div>
            <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f4f0e8] tracking-tight">
              {ratingCount.toFixed(1)} <span className="text-2xl text-[#9ba3a1]">/ 5</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-[#c8ad8d] font-mono pt-1">
              Google Rating
            </div>
            <p className="text-xs text-[#9ba3a1] font-light">
              Consistently rated for patient gentleness and cleanliness
            </p>
          </div>

          {/* Stat 2: Review Count */}
          <div className="p-8 rounded-2xl bg-[#0e1111] border border-white/5 text-center space-y-2 group hover:border-[#c8ad8d]/40 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#181f1f] flex items-center justify-center text-[#c8ad8d] mx-auto mb-2">
              <Award className="w-4 h-4" />
            </div>
            <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f4f0e8] tracking-tight">
              {reviewCount} <span className="text-2xl text-[#9ba3a1]">+</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-[#c8ad8d] font-mono pt-1">
              Patient Reviews
            </div>
            <p className="text-xs text-[#9ba3a1] font-light">
              Verified local feedback from Kolkata patients & families
            </p>
          </div>

          {/* Stat 3: Timing */}
          <div className="p-8 rounded-2xl bg-[#0e1111] border border-white/5 text-center space-y-2 group hover:border-[#c8ad8d]/40 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#181f1f] flex items-center justify-center text-[#c8ad8d] mx-auto mb-2">
              <Clock className="w-4 h-4" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f4f0e8] tracking-tight pt-1.5">
              6:00 PM
            </div>
            <div className="text-xs uppercase tracking-widest text-[#c8ad8d] font-mono pt-1">
              Evening Sessions
            </div>
            <p className="text-xs text-[#9ba3a1] font-light">
              Convenient evening consultations after school & working hours
            </p>
          </div>

          {/* Stat 4: Pedodontic & Family Comfort */}
          <div className="p-8 rounded-2xl bg-[#0e1111] border border-white/5 text-center space-y-2 group hover:border-[#c8ad8d]/40 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#181f1f] flex items-center justify-center text-[#c8ad8d] mx-auto mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="font-serif text-4xl sm:text-5xl text-[#f4f0e8] tracking-tight pt-1">
              100%
            </div>
            <div className="text-xs uppercase tracking-widest text-[#c8ad8d] font-mono pt-1">
              Comfort Focused
            </div>
            <p className="text-xs text-[#9ba3a1] font-light">
              Special patience with children & anxious patients
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
