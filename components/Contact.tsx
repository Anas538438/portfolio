'use client';

import { useState, useRef } from 'react';
import { Icons } from './icons';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMsg('');

    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      subject: fd.get('subject') as string,
      message: fd.get('message') as string,
      honeypot: fd.get('_h') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error('server');
      setStatus('success');
      setMsg("Message sent! I'll get back within 24 hours.");
      formRef.current?.reset();
    } catch {
      setStatus('error');
      setMsg('Something went wrong. Please email me directly at anas538438@gmail.com');
    }
  }

  return (
    <section className="v2section" id="contact">
      <div className="v2-eyebrow v2reveal">06 · CONTACT</div>
      <h2 className="v2-title v2reveal">
        Let&apos;s build
        <br />
        something <em>good</em>.
      </h2>
      <p className="v2-lede v2reveal v2reveal-d2">
        Got a project in mind? Drop me a line — I&apos;ll get back within 24 hours.
      </p>

      <div className="contact-wrap">
        <div className="contact-info v2reveal v2reveal-d2">
          <a href="mailto:anas538438@gmail.com" className="ci">
            <div className="ico">{Icons.mailContact}</div>
            <div>
              <div className="lbl">Email</div>
              <div className="val">anas538438@gmail.com</div>
            </div>
          </a>
          <a href="tel:+923485489421" className="ci">
            <div className="ico">{Icons.phone}</div>
            <div>
              <div className="lbl">Phone</div>
              <div className="val">+92 348 5489421</div>
            </div>
          </a>
          <div className="ci" style={{ cursor: 'default' }}>
            <div className="ico">{Icons.pin}</div>
            <div>
              <div className="lbl">Location</div>
              <div className="val">Tarbela, Pakistan</div>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/muhammad-anas-9248b5283/"
            className="ci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ico">{Icons.linkedin}</div>
            <div>
              <div className="lbl">LinkedIn</div>
              <div className="val">/muhammad-anas</div>
            </div>
          </a>
        </div>

        <form
          ref={formRef}
          className="contact-form v2reveal v2reveal-d3"
          onSubmit={handleSubmit}
          noValidate
        >
          <h3>
            Drop me a <em>message</em>
          </h3>
          <p>I&apos;ll get back to you within 24 hours.</p>

          {/* Honeypot anti-spam field */}
          <input
            type="text"
            name="_h"
            tabIndex={-1}
            aria-hidden="true"
            style={{ display: 'none' }}
          />

          <div className="row">
            <div>
              <label htmlFor="name" className="sr-only">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                minLength={2}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              />
            </div>
          </div>

          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
          />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
            minLength={10}
          />

          <button
            type="submit"
            className="submit-btn"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : <>Send message {Icons.arrow}</>}
          </button>

          {msg && (
            <div className={`form-msg ${status === 'success' ? 'success' : 'error'}`} role="alert">
              {msg}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
