import Hero from '@/sections/Hero';
import AboutMe from '@/sections/AboutMe';
import Skills from '@/sections/Skills';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}