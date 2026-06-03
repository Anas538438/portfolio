# Muhammad Anas — Portfolio v2

Personal portfolio website for **Muhammad Anas**, Full-Stack Engineer (React · Laravel · AI).

**Live site:** https://portfolio-zeta-sage-92.vercel.app

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + custom CSS (dark theme, design tokens)
- **Fonts:** Poppins, Cormorant Garamond, JetBrains Mono (Google Fonts)
- **Contact form:** Resend (email delivery)
- **Hosting:** Vercel

## Sections

1. **Hero** — typing animation, stats grid, CTA buttons
2. **About** — personal info, skills overview
3. **Resume** — work experience / education tabs, animated skill bars
4. **Services** — 4 service cards
5. **Portfolio** — 6 projects with category filter
6. **Contact** — wired contact form (sends email via Resend)

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables

Create a `.env.local` file:

```
RESEND_API_KEY=your_resend_api_key
```

## Making changes

| What | File |
|---|---|
| Experience / Education | `components/Resume.tsx` |
| Portfolio projects | `components/Portfolio.tsx` |
| Personal info | `components/About.tsx` |
| Hero text / stats | `components/Hero.tsx` |
| Services | `components/Services.tsx` |
| Profile photo | `public/anas.png` |
| CV file | `public/Anas_resume.pdf` |

After any change:

```bash
git add .
git commit -m "your message"
git push
```

Vercel auto-redeploys on every push.
