import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammad-anas.vercel.app'),
  title: 'Muhammad Anas — Full-Stack Engineer · React · Laravel · AI',
  description:
    'Full-stack engineer in Tarbela, Pakistan. React, Laravel, AI. Available for freelance projects.',
  keywords: ['Full-Stack Engineer', 'React', 'Laravel', 'AI', 'Web Developer', 'Pakistan'],
  authors: [{ name: 'Muhammad Anas' }],
  openGraph: {
    type: 'website',
    title: 'Muhammad Anas — Full-Stack Engineer · React · Laravel · AI',
    description:
      'Full-stack engineer in Tarbela, Pakistan. React, Laravel, AI. Available for freelance projects.',
    images: [{ url: '/anas.png', width: 1200, height: 630, alt: 'Muhammad Anas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Anas — Full-Stack Engineer',
    description: 'Full-stack engineer. React, Laravel, AI.',
    images: ['/anas.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400;1,500&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
