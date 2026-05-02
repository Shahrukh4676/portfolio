import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroCanvas } from '../components/canvas/HeroCanvas';

const words = ["Full Stack", "Developer", "&", "Visual", "Experience", "Creator"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(new Date());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    // Force video to play to bypass some browser autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }

    // Live clock
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata', // Assuming India, fallback to local if needed
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* ── Background Video ── */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="hero-video-wrap"
      >
        <video 
          ref={videoRef}
          src="/hero-video.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover"
          onCanPlay={() => console.log("Video playing")}
          onError={() => {
            console.error("Video failed to load");
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Robust fallback image */}
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60"
            alt="Fallback"
          />
        </video>
        <div className="hero-video-overlay" />
      </motion.div>

      {/* ── 3D Stars Canvas ── */}
      <HeroCanvas />

      {/* ── Top Left: Interface Status ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-28 left-8 lg:left-16 z-30 hidden md:flex items-center gap-4"
      >
        <div className="w-8 h-[1px] bg-[#00f5ff]/30" />
        <div className="flex flex-col">
          <span className="text-[0.55rem] uppercase tracking-[0.5em] text-[#00f5ff] font-mono mb-1 font-bold">
            System Live
          </span>
          <span className="text-xs font-medium tracking-widest text-white/80" style={{ fontFamily: "'Outfit', sans-serif" }}>
            {timeString} — MUMBAI, IN
          </span>
        </div>
      </motion.div>

      {/* ── Top Right: Availability ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-28 right-8 lg:right-16 z-30 hidden md:flex items-end flex-col gap-1 text-right"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          <span className="text-[0.55rem] uppercase tracking-[0.5em] text-white/30 font-mono font-bold">
            Available for Projects
          </span>
        </div>
        <span className="text-xs font-medium tracking-wide text-white/60 max-w-[220px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Full-Stack Developer & Visual Creator
        </span>
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center text-center"
      >
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-6 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-xl"
        >
          <span className="text-white/30 text-[0.6rem] font-bold tracking-[0.4em] uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
            Visual Portfolio <span className="text-[#00f5ff]">2.0</span>
          </span>
        </motion.div>

        {/* ── HERO NAME ── */}
        <div className="overflow-hidden mb-2 relative">
          <motion.h1
            initial={{ y: '110%', skewY: 5 }}
            animate={{ y: '0%', skewY: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(4rem, 16vw, 13rem)',
              lineHeight: 0.8,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              textShadow: '0 20px 80px rgba(0,0,0,0.6)',
            }}
          >
            SHAHRUKH
          </motion.h1>
        </div>

        {/* ── Professional Title ── */}
        <div className="overflow-hidden mb-12">
          <motion.p
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1rem, 2.5vw, 2rem)',
              lineHeight: 1.2,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #fff 0%, #00f5ff 50%, #7B2FBE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.95
            }}
          >
            Building Immersive Digital Experiences
          </motion.p>
        </div>

        {/* ── Stats Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-12 md:gap-24 mb-16 relative"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {[
            { n: '12+', label: 'Products Delivered' },
            { n: '2+', label: 'Years of Growth' },
            { n: '99%', label: 'Happy Partners' },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group">
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: '2.8rem',
                  color: '#fff',
                  transition: 'all 0.4s ease',
                }}
                className="group-hover:text-[#00f5ff] group-hover:scale-105"
              >
                {s.n}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.3em',
                  color: 'rgba(255,255,255,0.25)',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Main Actions ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-center gap-6 flex-wrap justify-center mb-16"
        >
          <a
            href="#projects"
            className="hoverable relative group px-12 py-4 rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00f5ff 0%, #7B2FBE 100%)',
              color: '#fff',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              boxShadow: '0 10px 40px rgba(0,245,255,0.2)',
              transition: 'all 0.4s ease',
            }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10">EXPLORE PORTFOLIO</span>
          </a>
          
          <a
            href="#contact"
            className="hoverable px-12 py-4 rounded-full flex items-center gap-3 group"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.7)',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 500,
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textDecoration: 'none',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.4s ease',
            }}
          >
            <span className="group-hover:text-white transition-colors">GET IN TOUCH</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] shadow-[0_0_8px_#00f5ff]" />
          </a>
        </motion.div>

        {/* ── Core Technologies ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-25"
        >
          {['React / Next.js', 'TypeScript', 'Node.js', 'Three.js', 'GSAP'].map((tech, i) => (
            <span key={i} className="text-[0.6rem] uppercase tracking-[0.5em] font-mono text-white">
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Social Sidebar (Vertical Labels) ── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute left-8 lg:left-12 bottom-12 z-30 hidden lg:flex flex-col items-center gap-12"
      >
        <div className="flex flex-col gap-14">
          {[
            { label: 'GitHub', url: 'https://github.com/shahrukh' },
            { label: 'LinkedIn', url: 'https://linkedin.com/in/shahrukh' },
            { label: 'Gmail', url: 'mailto:shahrukh@example.com' }
          ].map((s, i) => (
            <a
              key={i}
              href={s.url}
              className="hoverable group relative block"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: 'rgba(255,255,255,0.2)',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)'
              }}
            >
              <span className="group-hover:text-[#00f5ff] group-hover:tracking-[0.5em] transition-all duration-500">
                {s.label}
              </span>
            </a>
          ))}
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-b from-white/10 to-transparent" />
      </motion.div>

      {/* ── Right Column (Context info) ── */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-24 items-center">
        <span className="text-[0.55rem] text-white/10 font-mono tracking-[0.7em] uppercase -rotate-90 origin-center whitespace-nowrap">
          Based in Mumbai, IN
        </span>
        <div className="w-[1px] h-16 bg-white/5" />
        <span className="text-[0.55rem] text-white/10 font-mono tracking-[0.7em] uppercase -rotate-90 origin-center whitespace-nowrap">
          Creative Developer
        </span>
      </div>

      {/* ── Scroll Prompt ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#00f5ff]/50 to-transparent animate-pulse" />
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.5rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.15)',
          }}
        >
          Begin Journey
        </span>
      </motion.div>
    </section>
  );
}


