'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Icons } from './icons';

const all = [
  {
    cat: 'Full-Stack',
    name: 'Business Mgmt System',
    desc: 'Clients, invoices, financial reports w/ role-based access.',
    stack: 'React · Laravel · MySQL',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'E-Commerce',
    name: 'Online Shopping Store',
    desc: 'Cart, orders, admin panel, integrated payment gateway.',
    stack: 'Laravel · PHP · MySQL',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'WordPress',
    name: 'Sauram Raj — Portfolio',
    desc: 'Custom-branded portfolio site for international client.',
    stack: 'WordPress · Elementor · PHP',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'Frontend',
    name: 'Developer Portfolio v1',
    desc: 'React-based portfolio with CI deployed to GH Pages.',
    stack: 'React · Bootstrap',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'Full-Stack',
    name: 'Booking Systems',
    desc: 'Service-based landing pages with bookings & catalogs.',
    stack: 'Laravel · WordPress',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'WordPress',
    name: 'Multi-client builds',
    desc: 'A run of optimized WordPress sites for Core Web Vitals.',
    stack: 'WordPress · PHP',
    href: 'https://github.com/Anas538438',
  },
];

const cats = ['All', 'Full-Stack', 'E-Commerce', 'WordPress', 'Frontend'] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  useReveal();

  const items = filter === 'All' ? all : all.filter((i) => i.cat === filter);

  return (
    <section className="v2section" id="portfolio">
      <div className="v2-eyebrow v2reveal">05 · PORTFOLIO</div>
      <h2 className="v2-title v2reveal">
        Selected <em>work</em>.
      </h2>
      <p className="v2-lede v2reveal v2reveal-d2">
        A short list from 10+ delivered projects. Filter by category.
      </p>

      <div className="port-filter v2reveal v2reveal-d2">
        {cats.map((c) => (
          <button
            key={c}
            className={filter === c ? 'active' : ''}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="port-grid v2reveal v2reveal-d3">
        {items.map((it) => (
          <a
            key={it.name}
            className="port-card"
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="thumb" />
            <div className="body">
              <div className="meta">
                <span className="cat">{it.cat}</span>
              </div>
              <h4>{it.name}</h4>
              <p>{it.desc}</p>
              <div className="foot">
                <span>{it.stack}</span>
                <div className="arr">{Icons.arrow}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
