'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { Icons } from './icons';

type Project = {
  cat: string;
  name: string;
  desc: string;
  stack: string;
  href: string;
  img?: string;
};

const all: Project[] = [
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
  {
    cat: 'WordPress',
    name: 'Atmit Pro Medical',
    desc: 'Medical supply company site for a Saudi Arabia-based client. Product catalog, service pages, and contact flow.',
    stack: 'WordPress · Elementor · PHP',
    href: 'https://atmitpromd.com/',
    img: '/projects/atmit-pro.png',
  },
  {
    cat: 'Full-Stack',
    name: 'Sugarland Theaters',
    desc: 'Responsive cinema booking site with movie ticket reservations and seat selection.',
    stack: 'HTML · CSS · JavaScript · PHP',
    href: 'https://github.com/Anas538438/sugarland-theaters',
  },
  {
    cat: 'AI / ML',
    name: 'Energy Demand Forecasting',
    desc: 'LSTM-Transformer hybrid model using self-attention to capture temporal and localized energy use patterns.',
    stack: 'Python · PyTorch · LSTM · Transformers',
    href: 'https://github.com/Anas538438/AI-Based-Energy-Demand-Forecasting-Using-Hybrid-LSTM-Transformer-Architecture',
  },
  {
    cat: 'AI / ML',
    name: 'Predictive GAN Video Frames',
    desc: 'GAN for video frame prediction on UCF101. Uses Conv2D, residual blocks, and sequence discriminators.',
    stack: 'Python · PyTorch · GAN · Conv2D',
    href: 'https://github.com/Anas538438/Predictive-GAN-Video-Frames',
  },
  {
    cat: 'Full-Stack',
    name: 'ReserveForYou',
    desc: 'Android venue booking app for weddings, conferences, and meetings with owner management portal.',
    stack: 'Java · Android · Firebase',
    href: 'https://github.com/Anas538438/ReserveForYou-A-Smart-Venue-Booking-Application',
  },
  {
    cat: 'AI / ML',
    name: 'HybridUNet Brain Segmentation',
    desc: '3D brain tumor segmentation combining EfficientNet and ConvLSTM on BraTS2020 dataset.',
    stack: 'Python · TensorFlow · EfficientNet · ConvLSTM',
    href: 'https://github.com/Anas538438/HybridUNet-Efficient-3D-Brain-Tumor-Segmentation-with-EfficientNet-and-ConvLSTM',
  },
  {
    cat: 'Full-Stack',
    name: 'LAN Messenger',
    desc: 'Multi-user LAN messaging app for office/organization use with a simple GUI.',
    stack: 'Java · Networking · Sockets',
    href: 'https://github.com/Anas538438/LAN-Messenger-Java',
  },
  {
    cat: 'Full-Stack',
    name: 'GradeTracker App',
    desc: 'Student grade tracker with assignment tracking, goal grades, and projected outcome dashboard.',
    stack: 'Java · Android',
    href: 'https://github.com/Anas538438/GradeTrackerApp',
  },
  {
    cat: 'AI / ML',
    name: 'TumorNet — Brain Segmentation',
    desc: 'U-Net model for brain tumor segmentation on BraTS2020 MRI scans.',
    stack: 'Python · PyTorch · U-Net · BraTS2020',
    href: 'https://github.com/Anas538438/TumorNet-Brain-Tumor-Segmentation-with-U-Net-and-BraTS2020',
  },
];

const cats = ['All', 'Full-Stack', 'E-Commerce', 'WordPress', 'Frontend', 'AI / ML'] as const;

const catColors: Record<string, string> = {
  'Full-Stack': '#ffb400',
  'E-Commerce': '#60a5fa',
  'WordPress': '#a78bfa',
  'Frontend': '#34d399',
  'AI / ML': '#f472b6',
};

function ProjectCard({ it }: { it: Project }) {
  return (
    <a
      href={it.href}
      target="_blank"
      rel="noopener noreferrer"
      className="marquee-card"
    >
      <div className="marquee-card-inner">
        {it.img ? (
          <div className="marquee-thumb">
            <Image
              src={it.img}
              alt={it.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="320px"
            />
          </div>
        ) : (
          <div className="marquee-thumb marquee-thumb-empty" />
        )}
        <div className="marquee-body">
          <span
            className="marquee-cat"
            style={{ color: catColors[it.cat] || 'var(--v2-accent)', background: `${catColors[it.cat] || 'var(--v2-accent)'}18` }}
          >
            {it.cat}
          </span>
          <h4>{it.name}</h4>
          <p>{it.desc}</p>
          <div className="marquee-stack">{it.stack}</div>
        </div>
      </div>
    </a>
  );
}

function MarqueeRow({ items, reverse }: { items: Project[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row-wrap">
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        {doubled.map((it, i) => (
          <ProjectCard key={`${it.name}-${i}`} it={it} />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  useReveal();

  const filtered = filter === 'All' ? all : all.filter((i) => i.cat === filter);
  const row1 = filter === 'All' ? all.slice(0, Math.ceil(all.length / 2)) : filtered;
  const row2 = filter === 'All' ? all.slice(Math.ceil(all.length / 2)) : filtered;

  return (
    <section className="v2section port-section" id="portfolio">
      <div className="v2-eyebrow v2reveal">05 · PORTFOLIO</div>
      <h2 className="v2-title v2reveal">
        Selected <em>work</em>.
      </h2>
      <p className="v2-lede v2reveal v2reveal-d2">
        {all.length}+ delivered projects. Filter by category.
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

      <div className="v2reveal v2reveal-d3">
        <MarqueeRow items={row1} />
        {row2.length > 0 && <MarqueeRow items={row2} reverse />}
      </div>
    </section>
  );
}
