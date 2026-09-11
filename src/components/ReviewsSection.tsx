import React from 'react';
import { TypewriterText } from './TypewriterText';
import { CLINIC_REVIEWS } from '../data/clinicData';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-label="Patient Reviews"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#0e1111] text-[#f4f0e8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 border-b border-white/10 pb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad8d] font-sans font-medium block mb-3">
              Patient Testimonials · রোগীদের মতামত
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f4f0e8] leading-tight font-normal">
              <TypewriterText
                text="Words from our patients."
                speed={28}
                delay={150}
                showCursor={true}
              />
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-[#181f1f] px-4 py-2 rounded-full border border-white/10 shrink-0">
            <div className="flex text-[#eab308]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#eab308]" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#f4f0e8]">
              4.9 / 5 on Google · 30 Reviews
            </span>
          </div>
        </div>

        {/* Authentic Reviews Excerpts - High-end Editorial Pull-Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {CLINIC_REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className="relative p-8 rounded-2xl bg-[#131717] border border-white/5 hover:border-[#c8ad8d]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <Quote className="w-10 h-10 text-[#c8ad8d]/20 mb-6 group-hover:text-[#c8ad8d]/40 transition-colors" />

              <div className="space-y-4 mb-8">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#eab308]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#eab308]" />
                  ))}
                  <span className="text-[11px] text-[#9ba3a1] ml-2 font-mono uppercase tracking-wider">5.0 Star</span>
                </div>

                {/* Highlight line */}
                {review.highlight && (
                  <p className="font-serif text-lg text-[#f4f0e8] italic leading-snug">
                    "{review.highlight}"
                  </p>
                )}

                {/* Full authentic comment */}
                <p className="text-sm text-[#9ba3a1] leading-relaxed font-light font-sans">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="font-sans font-medium text-xs sm:text-sm text-[#f4f0e8] tracking-wider uppercase">
                    {review.author}
                  </h3>
                  <span className="text-[11px] text-[#c8ad8d] flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Verified Patient
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#9ba3a1]">Excerpt 0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
