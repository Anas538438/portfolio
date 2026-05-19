'use client';

import { useState, useEffect } from 'react';
import { Icons } from './icons';

const roles = [
  'Full-Stack Developer',
  'React.js Engineer',
  'Laravel Architect',
  'AI & LLM Practitioner',
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = roles[idx];
    if (!del && typed === cur) {
      const t = setTimeout(() => setDel(true), 1800);
      return () => clearTimeout(t);
    }
    if (del && typed === '') {
      setDel(false);
      setIdx((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(
      () => setTyped(del ? cur.slice(0, typed.length - 1) : cur.slice(0, typed.length + 1)),
      del ? 32 : 70
    );
    return () => clearTimeout(t);
  }, [typed, del, idx]);

  return (
    <section className="v2section v2-hero" id="home">
      <div className="v2-hero-bg" aria-hidden="true" />

      <h2>
        <span className="am-i">I&apos;m</span> Muhammad <em>Anas</em>
        <br />
        <span className="hero-sub-title">
          Software Engineer <span className="sep">|</span> Web Developer
        </span>
        <br />
        <span className="hero-tagline">
          Building <em>intelligent</em>, <em>scalable</em>, and{' '}
          <em>user-centric</em> applications.
        </span>
      </h2>

      <div className="typing-row" aria-live="polite">
        <span className="k">&gt; current_role:</span>
        <span>{typed}</span>
        <span className="cursor" aria-hidden="true" />
      </div>

      <div className="v2-hero-actions">
        <a href="#portfolio" className="v2-btn-primary">
          See my work {Icons.arrow}
        </a>
        <a href="#contact" className="v2-btn-ghost">
          Let&apos;s talk
        </a>
      </div>

      <div className="v2-hero-stats">
        <div className="v2-stat">
          <div className="v">
            3<sup>+</sup>
          </div>
          <div className="l">
            Years
            <br />
            Experience
          </div>
        </div>
        <div className="v2-stat">
          <div className="v">
            10<sup>+</sup>
          </div>
          <div className="l">
            Projects
            <br />
            Shipped
          </div>
        </div>
        <div className="v2-stat">
          <div className="v">3.6</div>
          <div className="l">
            MS GPA
            <br />
            Dean&apos;s List
          </div>
        </div>
        <div className="v2-stat">
          <div className="v">
            5<sup>★</sup>
          </div>
          <div className="l">
            Fiverr
            <br />
            Top-rated
          </div>
        </div>
      </div>
    </section>
  );
}
