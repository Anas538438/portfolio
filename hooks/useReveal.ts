'use client';

import { useEffect } from 'react';

/**
 * Reveal-on-scroll. Call ONCE near the top of the tree (Shell).
 * Robust: low threshold + rootMargin so tall blocks reveal reliably,
 * reduced-motion / no-IO fallback reveals everything, and a final
 * safety timeout guarantees nothing is ever permanently hidden.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reveal = (el: Element) => el.classList.add('in');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.v2reveal').forEach(reveal);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.v2reveal:not(.in)').forEach((el) => obs.observe(el));

    // Safety net: nothing stays invisible forever, even if IO misfires.
    const fallback = window.setTimeout(() => {
      document.querySelectorAll('.v2reveal:not(.in)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) reveal(el);
      });
    }, 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);
}
