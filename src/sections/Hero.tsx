import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-center bg-[#0A0F1C]"
    >
      {/* ── Background Video ── */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 z-0"
      >
        <video 
          ref={videoRef}
          src="/hero-video.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/40 via-transparent to-[#0A0F1C]" />
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center text-center"
      >
        {/* ── Status & Metadata ── */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02]"
          >
            <div className="w-2 h-2 rounded-full bg-cyan animate-pulse shadow-[0_0_10px_#00D4FF]" />
            <span className="text-white/40 text-[0.6rem] font-bold tracking-[0.2em] uppercase font-mono">Available for hire</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-2"
          >
            <span className="text-white/20 text-[0.6rem] font-mono uppercase tracking-[0.3em]">Portfolio • 2025</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-white/20 text-[0.6rem] font-mono uppercase tracking-[0.3em]">India 🌏</span>
          </motion.div>
        </div>

        {/* ── HERO NAME ── */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '110%', skewY: 5 }}
            animate={{ y: '0%', skewY: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-white font-black"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2.2rem, 12vw, 10rem)',
              lineHeight: 0.85,
              letterSpacing: '-0.03em',
            }}
          >
            SHAHRUKH
          </motion.h1>
        </div>

        {/* ── Professional Title ── */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-4xl font-bold uppercase tracking-widest gradient-text mb-6 md:mb-8"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-white/50 mb-10 md:mb-12 max-w-sm md:max-w-xl mx-auto text-base md:text-xl leading-relaxed px-4 md:px-0"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          I build immersive, high-performance web experiences<br className="hidden md:block" />
          where code meets cinematic design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto px-6 md:px-0"
        >
          <a href="#projects" className="btn-primary w-full md:w-auto rounded-full px-12 py-4">View Projects</a>
          <a href="#contact" className="btn-outline w-full md:w-auto hoverable rounded-full px-12 py-4 border-white/10 text-white/60 hover:text-white">Let's Talk</a>
        </motion.div>
      </motion.div>

      {/* ── Scroll Prompt ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-14 bg-gradient-to-b from-cyan/50 to-transparent animate-pulse" />
        <span className="text-[0.6rem] uppercase tracking-[0.5em] text-white/20 font-mono animate-bounce">Scroll to explore ↓</span>
      </motion.div>
    </section>
  );
}
