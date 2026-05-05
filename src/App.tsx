import { useEffect } from 'react';
import Lenis from 'lenis';
import { MagneticCursor } from './components/ui/MagneticCursor';
import { Nav } from './sections/Nav';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Stats } from './sections/Stats';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Services } from './sections/Services';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './index.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <MagneticCursor />
      {/* Global Cinematic Noise Overlay */}
      <div className="noise fixed inset-0 z-[9999] pointer-events-none opacity-[0.03]" />
      
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
