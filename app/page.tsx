import Shell from '@/components/Shell';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <Shell>
      <Hero />
      <About />
      <Resume />
      <Services />
      <Portfolio />
      <Contact />
    </Shell>
  );
}
