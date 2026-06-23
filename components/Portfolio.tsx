'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Icons } from './icons';

type Project = {
  cat: string;
  name: string;
  desc: string;
  stack: string;
  href: string;
  img?: string;
};

const catColors: Record<string, string> = {
  'Full-Stack': '#ffb400',
  'E-Commerce': '#60a5fa',
  WordPress: '#a78bfa',
  Frontend: '#34d399',
  'AI / ML': '#f472b6',
};

function initials(name: string) {
  return name
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}

const all: Project[] = [
  {
    cat: 'Full-Stack',
    name: 'Business Mgmt System',
    desc: 'A complete business management platform handling clients, invoices, and financial reports with role-based access control. Built for an agency to streamline day-to-day operations.',
    stack: 'React · Laravel · MySQL',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'E-Commerce',
    name: 'Online Shopping Store',
    desc: 'A full e-commerce experience with shopping cart, order management, an admin panel, and an integrated payment gateway for secure checkout.',
    stack: 'Laravel · PHP · MySQL',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'WordPress',
    name: 'Sauram Raj — Portfolio',
    desc: 'A custom-branded portfolio website for an international client, designed and built end-to-end with a tailored visual identity.',
    stack: 'WordPress · Elementor · PHP',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'Frontend',
    name: 'Developer Portfolio v1',
    desc: 'My first React-based portfolio, complete with a CI pipeline deploying automatically to GitHub Pages.',
    stack: 'React · Bootstrap',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'Full-Stack',
    name: 'Booking Systems',
    desc: 'Service-based landing pages with built-in booking flows and catalogs, letting clients accept reservations directly from their site.',
    stack: 'Laravel · WordPress',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'WordPress',
    name: 'Multi-client builds',
    desc: 'A run of optimized WordPress sites tuned for Core Web Vitals, delivering fast load times and strong SEO for multiple clients.',
    stack: 'WordPress · PHP',
    href: 'https://github.com/Anas538438',
  },
  {
    cat: 'WordPress',
    name: 'Atmit Pro Medical',
    desc: 'A medical supply company website for a Saudi Arabia-based client. Features a product catalog, service pages, and a contact flow — built to convey trust and quality in every medical supply.',
    stack: 'WordPress · Elementor · PHP',
    href: 'https://atmitpromd.com/',
    img: '/projects/atmit-pro.png',
  },
  {
    cat: 'Full-Stack',
    name: 'Sugarland Theaters',
    desc: 'A responsive cinema booking website for movie ticket reservations, with seat selection and a smooth booking experience.',
    stack: 'HTML · CSS · JavaScript · PHP',
    href: 'https://github.com/Anas538438/sugarland-theaters',
  },
  {
    cat: 'AI / ML',
    name: 'Energy Demand Forecasting',
    desc: 'A research project developing an LSTM-Transformer hybrid model that uses self-attention to capture both temporal and localized energy-use patterns, improving forecasting accuracy.',
    stack: 'Python · PyTorch · LSTM · Transformers',
    href: 'https://github.com/Anas538438/AI-Based-Energy-Demand-Forecasting-Using-Hybrid-LSTM-Transformer-Architecture',
  },
  {
    cat: 'AI / ML',
    name: 'Predictive GAN Video Frames',
    desc: 'A predictive GAN for video frame generation on the UCF101 dataset, using Conv2D, residual blocks, and sequence discriminators for realistic, temporally coherent frames.',
    stack: 'Python · PyTorch · GAN · Conv2D',
    href: 'https://github.com/Anas538438/Predictive-GAN-Video-Frames',
  },
  {
    cat: 'Full-Stack',
    name: 'ReserveForYou',
    desc: 'An Android venue booking application for events like weddings, conferences, and meetings — with a dedicated portal for venue owners to manage availability.',
    stack: 'Java · Android · Firebase',
    href: 'https://github.com/Anas538438/ReserveForYou-A-Smart-Venue-Booking-Application',
  },
  {
    cat: 'AI / ML',
    name: 'HybridUNet Brain Segmentation',
    desc: 'A deep learning model for efficient 3D brain tumor segmentation, combining EfficientNet for spatial features and ConvLSTM on the BraTS2020 dataset.',
    stack: 'Python · TensorFlow · EfficientNet · ConvLSTM',
    href: 'https://github.com/Anas538438/HybridUNet-Efficient-3D-Brain-Tumor-Segmentation-with-EfficientNet-and-ConvLSTM',
  },
  {
    cat: 'Full-Stack',
    name: 'LAN Messenger',
    desc: 'A Java-based multi-user LAN messaging app for office and organization use, with a simple GUI for connecting users on the same network.',
    stack: 'Java · Networking · Sockets',
    href: 'https://github.com/Anas538438/LAN-Messenger-Java',
  },
  {
    cat: 'Full-Stack',
    name: 'GradeTracker App',
    desc: 'A student productivity app that tracks assignments, grades, and due dates. Set goal grades, monitor progress on a dashboard, and view projected outcomes per course.',
    stack: 'Java · Android',
    href: 'https://github.com/Anas538438/GradeTrackerApp',
  },
  {
    cat: 'AI / ML',
    name: 'TumorNet — Brain Segmentation',
    desc: 'A U-Net model for brain tumor segmentation on the BraTS2020 dataset, using an encoder-decoder design to accurately identify tumor regions in MRI scans.',
    stack: 'Python · PyTorch · U-Net · BraTS2020',
    href: 'https://github.com/Anas538438/TumorNet-Brain-Tumor-Segmentation-with-U-Net-and-BraTS2020',
  },
];

const cats = ['All', 'Full-Stack', 'E-Commerce', 'WordPress', 'Frontend', 'AI / ML'] as const;

function Thumb({ it, modal }: { it: Project; modal?: boolean }) {
  const color = catColors[it.cat] || 'var(--v2-accent)';
  if (it.img) {
    return (
      <Image
        src={it.img}
        alt={it.name}
        fill
        style={{ objectFit: 'cover' }}
        sizes={modal ? '640px' : '300px'}
      />
    );
  }
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `radial-gradient(circle at 30% 25%, ${color}33, transparent 60%), var(--v2-bg-card)`,
      }}
    >
      <span className="pf-mono" style={{ color, fontSize: modal ? 96 : 54 }}>
        {initials(it.name)}
      </span>
    </div>
  );
}

function Card({ it, onOpen }: { it: Project; onOpen: (p: Project) => void }) {
  const color = catColors[it.cat] || 'var(--v2-accent)';
  return (
    <button className="pf-card" onClick={() => onOpen(it)}>
      <div className="pf-thumb">
        <Thumb it={it} />
      </div>
      <div className="pf-card-body">
        <span className="pf-cat" style={{ color, background: `${color}22` }}>
          {it.cat}
        </span>
        <h4>{it.name}</h4>
        <div className="pf-stack">{it.stack}</div>
      </div>
    </button>
  );
}

function Marquee({
  items,
  reverse,
  onOpen,
}: {
  items: Project[];
  reverse?: boolean;
  onOpen: (p: Project) => void;
}) {
  // Repeat so the row is wide enough, then duplicate for a seamless loop.
  const reps = items.length <= 3 ? 4 : items.length <= 5 ? 2 : 1;
  const half = Array.from({ length: reps }, () => items).flat();
  const loop = [...half, ...half];
  return (
    <div className="pf-viewport">
      <div className={`pf-track ${reverse ? 'rev' : ''}`}>
        {loop.map((it, i) => (
          <Card key={`${it.name}-${i}`} it={it} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  const items = filter === 'All' ? all : all.filter((i) => i.cat === filter);
  const mid = Math.ceil(all.length / 2);
  const rows: Project[][] =
    filter === 'All' ? [all.slice(0, mid), all.slice(mid)] : [items];

  const modalColor = selected ? catColors[selected.cat] || 'var(--v2-accent)' : '';

  return (
    <section className="v2section" id="portfolio">
      <div className="v2-eyebrow v2reveal">05 · PORTFOLIO</div>
      <h2 className="v2-title v2reveal">
        Selected <em>work</em>.
      </h2>
      <p className="v2-lede v2reveal v2reveal-d2">
        {all.length}+ delivered projects. Filter by category, then click any card
        for details.
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

      <div className="pf-rows v2reveal v2reveal-d3">
        {rows.map(
          (row, i) =>
            row.length > 0 && (
              <Marquee
                key={`${filter}-${i}`}
                items={row}
                reverse={i % 2 === 1}
                onOpen={setSelected}
              />
            )
        )}
      </div>

      {selected && (
        <div className="pf-overlay" onClick={() => setSelected(null)}>
          <div
            className="pf-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="pf-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="pf-modal-banner">
              <Thumb it={selected} modal />
            </div>
            <div className="pf-modal-body">
              <span
                className="pf-cat"
                style={{ color: modalColor, background: `${modalColor}22` }}
              >
                {selected.cat}
              </span>
              <h3>{selected.name}</h3>
              <p>{selected.desc}</p>
              <div className="pf-modal-tags">
                {selected.stack.split(' · ').map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                href={selected.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pf-modal-visit"
              >
                Visit project {Icons.arrow}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
