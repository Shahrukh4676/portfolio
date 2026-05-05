import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timelineItems = [
  {
    year: '2023',
    title: 'Started Web Development',
    description: 'Began the journey with HTML, CSS, and JavaScript. Built first responsive sites.',
    side: 'left',
  },
  {
    year: '2024',
    title: 'Full Stack Integration',
    description: 'Mastered React, Node.js, and MongoDB. Developed several full-stack applications.',
    side: 'right',
  },
  {
    year: '2025',
    title: 'Built 10+ Projects',
    description: 'Currently building high-performance 3D visual experiences and AI-integrated tools.',
    side: 'left',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative w-full py-20 md:py-32 px-6 bg-[#0A0F1C] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 reveal ${isInView ? 'visible' : ''}`}>
          <span className="section-label mb-4 block opacity-40">04 / Journey</span>
          <h2
            className="heading-lg text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: "'Outfit', sans-serif" }}
          >
            My <span className="gradient-text">Timeline</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-[#00E5FF]/50 via-[#7C4DFF]/50 to-transparent hidden md:block" />

          <div className="space-y-24">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex items-center justify-center md:justify-between w-full ${
                  item.side === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00E5FF] shadow-[0_0_15px_#00E5FF] z-10 hidden md:block" />

                <div className={`w-full md:w-[45%] ${item.side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass rounded-3xl p-8 border border-white/5 bg-white/[0.01] hover:border-[#00E5FF]/30 transition-all duration-500">
                    <span 
                      className="text-[#00E5FF] font-black text-4xl mb-4 block"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {item.year}
                    </span>
                    <h4 
                      className="text-white text-xl font-bold mb-3"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="text-white/40 text-sm leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for empty side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
