import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    year: "2023",
    title: "Foundations",
    desc: "Began journey with Core CS, Python, and the MERN stack. Built 5+ CRUD apps."
  },
  {
    year: "2024",
    title: "The Shift to Immersive",
    desc: "Started exploring Three.js, WebGL, and Framer Motion to build experiences, not just websites."
  },
  {
    year: "2025",
    title: "Senior Experiments",
    desc: "Focusing on WebGPU, AI-orchestration, and contributing to the open-source visual web."
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative w-full py-20 px-6 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">04 / Journey</span>
          <h2 className="text-white text-5xl font-black leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
            My Digital <span className="gradient-text">Timeline</span>
          </h2>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[#6C63FF] to-[#00D4FF]"
            />
          </div>

          <div className="space-y-32">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex items-center justify-start md:justify-between w-full ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary z-20 shadow-[0_0_15px_#6C63FF]" />

                <div className="w-full md:w-[45%] pl-16 md:pl-0">
                  <div className="bento-card relative">
                    <span className="text-primary font-black text-4xl mb-4 block opacity-20">{item.year}</span>
                    <h4 className="text-white text-xl font-bold mb-4">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
