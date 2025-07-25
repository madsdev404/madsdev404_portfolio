import Hero from '@/sections/Hero';
import AboutMe from '@/sections/AboutMe';
import Skills from '@/sections/Skills';
import Services from '@/sections/Services';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Blog from '@/sections/Blog';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
