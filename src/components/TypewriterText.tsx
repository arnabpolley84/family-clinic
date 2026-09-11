import React, { useEffect, useState, useRef } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per character / grapheme
  delay?: number; // ms delay before typing begins
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  showCursor?: boolean;
  startWhenInView?: boolean;
  onComplete?: () => void;
  id?: string;
}

// Split into grapheme clusters so Bengali and English characters type smoothly
function getGraphemeClusters(str: string): string[] {
  if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
    try {
      const segmenter = new (Intl as any).Segmenter(['bn', 'en'], { granularity: 'grapheme' });
      return Array.from(segmenter.segment(str), (s: any) => s.segment);
    } catch {
      // fallback
    }
  }
  return Array.from(str);
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 28,
  delay = 0,
  className = '',
  as: Component = 'span',
  showCursor = true,
  startWhenInView = true,
  onComplete,
  id,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [hasStarted, setHasStarted] = useState<boolean>(!startWhenInView);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [cursorVisible, setCursorVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement | null>(null);

  // Check prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsDone(true);
      setCursorVisible(false);
      onComplete?.();
      return;
    }

    if (!startWhenInView) {
      setHasStarted(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [startWhenInView, text, prefersReducedMotion, onComplete]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!hasStarted) return;

    const graphemes = getGraphemeClusters(text);
    let currentIndex = 0;
    let timer: NodeJS.Timeout;
    let delayTimer: NodeJS.Timeout;

    if (showCursor) {
      setCursorVisible(true);
    }

    delayTimer = setTimeout(() => {
      timer = setInterval(() => {
        currentIndex += 1;
        if (currentIndex <= graphemes.length) {
          setDisplayedText(graphemes.slice(0, currentIndex).join(''));
        } else {
          clearInterval(timer);
          setIsDone(true);
          onComplete?.();
          // Hide cursor after a short pause once typing finishes
          setTimeout(() => {
            setCursorVisible(false);
          }, 700);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [hasStarted, text, speed, delay, showCursor, prefersReducedMotion, onComplete]);

  return (
    <Component
      ref={containerRef as any}
      id={id}
      className={`${className} inline-block`}
    >
      <span>{displayedText || (prefersReducedMotion ? text : '')}</span>
      {cursorVisible && !isDone && (
        <span className="type-cursor text-[#c8ad8d]" aria-hidden="true" />
      )}
    </Component>
  );
};
