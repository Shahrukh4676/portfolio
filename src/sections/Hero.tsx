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
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[#0A0F1C]"
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

        {/* ── HERO NAME ── */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: '110%', skewY: 5 }}
            animate={{ y: '0%', skewY: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-white font-black"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(3.5rem, 15vw, 12rem)',
              lineHeight: 0.8,
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
          className="text-2xl md:text-4xl font-bold uppercase tracking-widest gradient-text mb-8"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-white/50 mb-12 max-w-xl mx-auto text-lg md:text-xl leading-relaxed"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          I build immersive, high-performance web experiences<br />
          where code meets cinematic design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-center gap-6 flex-wrap justify-center"
        >
          <a href="#projects" className="btn-primary rounded-full px-12 py-4">View Projects</a>
          <a href="#contact" className="btn-outline hoverable rounded-full px-12 py-4 border-white/10 text-white/60 hover:text-white">Let's Talk</a>
        </motion.div>
      </motion.div>

      {/* ── Scroll Prompt ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#00E5FF]/50 to-transparent animate-pulse" />
        <span className="text-[0.6rem] uppercase tracking-[0.5em] text-white/20 font-mono animate-bounce">Scroll to explore ↓</span>
      </motion.div>
    </section>
  );
}
