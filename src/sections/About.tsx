import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Years Building' },
  { value: '12+', label: 'Projects Shipped' },
  { value: '5+', label: 'Tech Stacks' },
  { value: '∞', label: 'Ideas in Queue' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="relative w-full py-32 md:py-40 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="glow-blob w-[500px] h-[500px] opacity-[0.07]"
        style={{ background: '#7B2FBE', top: '20%', right: '-15%' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Image with parallax */}
          <motion.div style={{ y: imageY }} className="relative hidden lg:block">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <div
                className="absolute -inset-0.5 rounded-3xl opacity-60"
                style={{ background: 'linear-gradient(135deg, #00f5ff, #7B2FBE)' }}
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#0a0a0f]">
                <img
                  src="/shahrukh.png"
                  alt="Shahrukh"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'grayscale(0.2) contrast(1.1)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.8) 0%, transparent 50%)' }}
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 top-1/3 glass-vivid rounded-2xl px-5 py-4 border border-white/10"
              >
                <p className="section-label mb-1 opacity-50">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-medium text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>Active for Hire</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <span className="section-label mb-3 block opacity-50">01 / Profile</span>
              <h2
                className="heading-lg text-white"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: "'Outfit', sans-serif" }}
              >
                I transform complex problems into{' '}
                <span className="gradient-text">stunning</span>
                {' '}realities.
              </h2>
            </motion.div>

            <motion.p
              custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-white/70 text-lg leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              I'm Shahrukh — a Full Stack Developer and Visual Experience Creator based in India. I specialize in building immersive digital products that bridge the gap between performance and high-end aesthetics.
            </motion.p>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-white/50 text-base leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Currently pursuing my B.E. in Computer Science, I focus on creating fast, unforgettable digital experiences using React, Node.js, and Three.js. My goal is to build products that not only work flawlessly but leave a lasting impression.
            </motion.p>

            {/* Stats */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/5"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="stat-number" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 700 }}>{s.value}</span>
                  <span className="text-white/30 text-[0.6rem] tracking-[0.2em] uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex gap-4 flex-wrap pt-2"
            >
              <a href="#contact" className="btn-primary hoverable rounded-full px-8 py-3">
                <span>Hire Me</span>
              </a>
              <a href="#contact" className="btn-outline hoverable rounded-full px-8 py-3">Get in Touch</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
