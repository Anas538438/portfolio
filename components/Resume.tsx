'use client';

import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import SkillBar from './SkillBar';
import { Icons } from './icons';

const experience = [
  {
    yr: 'Dec 2025 — Now',
    role: 'Full-Stack Engineer',
    co: 'Zapply',
    desc: 'Building a Chrome extension that automates job applications. REST APIs, auth flows, performance across React/Node/MV3.',
  },
  {
    yr: 'Mar 2022 — Now',
    role: 'Freelance Full-Stack Dev',
    co: 'Fiverr & Direct',
    desc: '10+ projects: portfolios, e-commerce, business management systems. Top-rated for UML & software architecture.',
  },
  {
    yr: 'Nov 2023 — Feb 2024',
    role: 'Web Developer Intern',
    co: 'Quadtrum',
    desc: '3-month backend internship on Laravel. API integration, MVC, MySQL design, Git workflow.',
  },
];

const education = [
  {
    yr: '2024 — 2026',
    role: 'MS in Computer Science',
    co: 'GIKI',
    desc: "GPA 3.6 — Dean's Honor List. Deep Learning, Generative AI, LLMs, Adv. Algorithms, Computer Security.",
  },
  {
    yr: '2019 — 2023',
    role: 'BS in Software Engineering',
    co: 'Hazara University',
    desc: 'GPA 3.54. DSA, OOP, Software Design & Architecture, DB Systems, Web Eng, Networks, Security.',
  },
  {
    yr: '2023 — 2025',
    role: 'Certifications',
    co: 'Meta · Coursera',
    desc: 'Front-End Development · Programming with JavaScript · Version Control · React · PHP & Laravel.',
  },
];

const skills = [
  { name: 'React.js / Frontend', pct: 92 },
  { name: 'Laravel / PHP / Backend', pct: 90 },
  { name: 'JavaScript / Node.js', pct: 88 },
  { name: 'WordPress / CMS', pct: 85 },
  { name: 'MySQL / MongoDB', pct: 82 },
  { name: 'AI / LLM Fine-Tuning', pct: 75 },
];

export default function Resume() {
  const [tab, setTab] = useState<'experience' | 'education'>('experience');
  useReveal();

  const items = tab === 'experience' ? experience : education;

  return (
    <section className="v2section" id="resume">
      <div className="v2-eyebrow v2reveal">03 · RESUME</div>
      <h2 className="v2-title v2reveal">
        A <em>trajectory</em>
        <br />
        worth telling.
      </h2>

      <div className="tab-bar v2reveal v2reveal-d2">
        <button
          className={tab === 'experience' ? 'active' : ''}
          onClick={() => setTab('experience')}
        >
          {Icons.resume} Experience
        </button>
        <button
          className={tab === 'education' ? 'active' : ''}
          onClick={() => setTab('education')}
        >
          {Icons.star} Education
        </button>
      </div>

      <div className="resume-grid v2reveal v2reveal-d2">
        <div className="resume-col">
          <h3>{tab === 'experience' ? 'Work History' : 'Academic Path'}</h3>
          <div>
            {items.map((it, i) => (
              <div className="resume-item" key={i}>
                <span className="yr">{it.yr}</span>
                <h4>
                  {it.role}
                  <em> — {it.co}</em>
                </h4>
                <p>{it.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="resume-col">
          <h3>Skills</h3>
          <div className="skill-bars">
            {skills.map((s) => (
              <SkillBar key={s.name} name={s.name} pct={s.pct} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
