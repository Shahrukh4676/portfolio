import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  'React', 'Node.js', 'MongoDB', 'Three.js', 
  'TypeScript', 'Next.js', 'Framer Motion', 'GSAP',
  'Firebase', 'Express', 'Tailwind', 'Figma'
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative w-full py-20 md:py-32 px-6 bg-[#0A0F1C] overflow-hidden">
      {/* Background glow */}
      <div
        className="glow-blob w-[600px] h-[600px] opacity-[0.04]"
        style={{ background: '#00E5FF', top: '-10%', left: '-10%' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 reveal ${isInView ? 'visible' : ''}`}>
          <span className="section-label mb-4 block opacity-40">02 / Expertise</span>
          <h2
            className="heading-lg text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: "'Outfit', sans-serif" }}
          >
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="skill-card group"
            >
              <span className="relative z-10">{skill}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
