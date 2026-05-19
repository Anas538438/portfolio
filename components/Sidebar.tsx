'use client';

import Image from 'next/image';
import { Icons } from './icons';

const links = [
  { id: 'home', label: 'Home', ico: Icons.home, num: '01' },
  { id: 'about', label: 'About', ico: Icons.user, num: '02' },
  { id: 'resume', label: 'Resume', ico: Icons.resume, num: '03' },
  { id: 'skills', label: 'Skills', ico: Icons.star, num: '04' },
  { id: 'portfolio', label: 'Portfolio', ico: Icons.grid, num: '05' },
  { id: 'contact', label: 'Contact', ico: Icons.mail, num: '06' },
];

export default function Sidebar({ active }: { active: string }) {
  return (
    <aside className="sidebar">
      <div className="sb-photo">
        <div className="avatar">
          <Image
            src="/anas.png"
            alt="Muhammad Anas"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>

      <div className="sb-id">
        <span className="role-tag">
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--v2-accent)', display: 'inline-block' }} />
          Full-Stack Engineer
        </span>
        <h1>
          Muhammad <em>Anas</em>
        </h1>
        <div className="role">React · Laravel · AI</div>
      </div>

      <nav className="sb-nav">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'active' : ''}
            aria-label={l.label}
          >
            <span className="nnum">{l.num}</span>
            <span className="ico">{l.ico}</span>
            <span>{l.label}</span>
          </a>
        ))}
      </nav>

      <div className="sb-foot">
        <div className="socials">
          <a
            href="https://github.com/Anas538438"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            {Icons.github}
          </a>
          <a
            href="https://linkedin.com/in/muhammad-anas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            {Icons.linkedin}
          </a>
        </div>
        <a
          href="/Anas_resume.pdf"
          download="Muhammad-Anas-CV.pdf"
          className="hire"
          aria-label="Download CV"
        >
          Download CV {Icons.download}
        </a>
        <div className="copy">© 2026 · Anas</div>
      </div>
    </aside>
  );
}
