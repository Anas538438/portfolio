'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { useReveal } from '@/hooks/useReveal';

const SECTIONS = ['home', 'about', 'resume', 'skills', 'portfolio', 'contact'];

export default function Shell({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState('home');
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          cur = id;
        }
      }
      setActive(cur);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="shell">
      <Sidebar active={active} />
      <main className="main">{children}</main>
    </div>
  );
}
