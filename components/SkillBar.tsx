'use client';

import { useEffect, useRef } from 'react';

export default function SkillBar({ name, pct }: { name: string; pct: number }) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && fillRef.current) {
            fillRef.current.style.width = `${pct}%`;
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (fillRef.current) obs.observe(fillRef.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div className="skill-bar">
      <div className="top">
        <span className="name">{name}</span>
        <span className="pct">{pct}%</span>
      </div>
      <div className="track">
        <div className="fill" ref={fillRef} />
      </div>
    </div>
  );
}
