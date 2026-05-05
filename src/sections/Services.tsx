import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with modern frameworks and clean code.',
    icon: '⚡',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric interfaces and immersive design systems that prioritize both beauty and usability.',
    icon: '✦',
  },
  {
    title: '3D Experiences',
    description: 'Interactive 3D environments and visual experiments using Three.js and WebGL.',
    icon: '◈',
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative w-full py-20 md:py-32 px-6 bg-[#0A0F1C] overflow-hidden border-t border-white/5">
      <div
        className="glow-blob w-[500px] h-[500px] opacity-[0.03]"
        style={{ background: '#7C4DFF', top: '20%', left: '-15%' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 reveal ${isInView ? 'visible' : ''}`}>
          <span className="section-label mb-4 block opacity-40">05 / Services</span>
          <h2
            className="heading-lg text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: "'Outfit', sans-serif" }}
          >
            Creative <span className="gradient-text">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-3xl p-10 border border-white/5 bg-white/[0.01] group hover:border-[#00E5FF]/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform group-hover:bg-[#00E5FF]/10 group-hover:text-[#00E5FF] shadow-lg">
                {s.icon}
              </div>
              <h3 
                className="text-white text-2xl font-bold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {s.title}
              </h3>
              <p 
                className="text-white/40 text-base leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
