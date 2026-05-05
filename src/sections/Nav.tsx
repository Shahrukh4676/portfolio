import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Profile', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Masterpieces', href: '#projects' },
  { label: 'Journey', href: '#experience' },
  { label: 'WOW', href: '#testimonials' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 md:pt-8 pointer-events-none"
    >
      <motion.div
        animate={{
          scale: scrolled ? 0.95 : 1,
          y: scrolled ? -10 : 0,
          backgroundColor: scrolled ? 'rgba(10,15,28,0.9)' : 'rgba(255,255,255,0.02)',
          borderColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto rounded-full px-6 md:px-10 py-3 md:py-4 flex items-center justify-between md:justify-start gap-4 md:gap-10 border w-[calc(100%-2rem)] md:w-auto"
        style={{ boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.4)' : 'none' }}
      >
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#FF4ECD] flex items-center justify-center text-white font-bold text-[0.5rem] md:text-[0.6rem]">
            S
          </div>
          <span className="text-white font-bold tracking-[0.2em] uppercase text-[0.5rem] md:text-[0.6rem] group-hover:tracking-[0.4em] transition-all duration-500" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Shahrukh
          </span>
        </a>

        {/* Desktop Links */}
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

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.div animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }} className="w-5 h-[1.5px] bg-white/60" />
          <motion.div animate={{ opacity: mobileMenuOpen ? 0 : 1 }} className="w-5 h-[1.5px] bg-white/60" />
          <motion.div animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }} className="w-5 h-[1.5px] bg-white/60" />
        </button>

        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 group"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors font-mono">
            Contact
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_8px_#00E5FF]" />
        </a>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-[#0A0F1C] border border-white/10 rounded-3xl p-8 flex flex-col items-center gap-6 md:hidden pointer-events-auto"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 text-xs uppercase tracking-widest font-mono py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="w-full h-[1px] bg-white/5 my-2" />
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center py-4 text-[0.6rem] uppercase tracking-widest"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
