import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const links = [
  { label: 'Profile', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Masterpieces', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'WOW', href: '#testimonials' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8 pointer-events-none"
    >
      <motion.div
        animate={{
          scale: scrolled ? 0.95 : 1,
          y: scrolled ? -10 : 0,
          backgroundColor: scrolled ? 'rgba(10,15,28,0.9)' : 'rgba(255,255,255,0.02)',
          borderColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto backdrop-blur-2xl rounded-full px-10 py-4 flex items-center gap-10 border"
        style={{ boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.4)' : 'none' }}
      >
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#FF4ECD] flex items-center justify-center text-white font-bold text-[0.6rem]">
            S
          </div>
          <span className="text-white font-bold tracking-[0.2em] uppercase text-[0.6rem] group-hover:tracking-[0.4em] transition-all duration-500" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Shahrukh
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/30 hover:text-white text-[0.6rem] uppercase tracking-[0.25em] font-mono transition-all hover:tracking-[0.35em]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="w-[1px] h-4 bg-white/10 hidden md:block" />

        <a
          href="#contact"
          className="group flex items-center gap-2"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors font-mono">
            Contact
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]" />
        </a>
      </motion.div>
    </motion.header>
  );
}
