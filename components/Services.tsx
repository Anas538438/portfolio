'use client';

import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    num: '01',
    title: 'Web Development',
    desc: 'Full-stack applications with React, Laravel, and Node — from architecture to deployment.',
    tags: ['React', 'Laravel', 'REST APIs'],
  },
  {
    num: '02',
    title: 'WordPress / CMS',
    desc: 'Custom WordPress builds, Elementor, theme dev, and SEO optimization for content-heavy sites.',
    tags: ['WordPress', 'Elementor', 'PHP'],
  },
  {
    num: '03',
    title: 'AI Integration',
    desc: 'LLM fine-tuning, generative AI features, and ML model integration into web applications.',
    tags: ['LLM', 'PyTorch', 'Python'],
  },
  {
    num: '04',
    title: 'UML & Architecture',
    desc: 'Top-rated on Fiverr for software architecture, UML design docs, and requirements engineering.',
    tags: ['UML', 'Architecture', 'Docs'],
  },
];

export default function Services() {
  useReveal();
  return (
    <section className="v2section" id="skills">
      <div className="v2-eyebrow v2reveal">04 · WHAT I DO</div>
      <h2 className="v2-title v2reveal">
        Services I <em>offer</em>.
      </h2>
      <p className="v2-lede v2reveal v2reveal-d2">
        Four core capabilities, sharpened across freelance and full-time work.
      </p>

      <div className="service-grid v2reveal v2reveal-d2">
        {services.map((s) => (
          <div className="service-card" key={s.num}>
            <div className="num">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <div className="tags">
              {s.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
