import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    period: '2023 — Present',
    role: 'Self-Directed Builder',
    org: 'Independent Projects',
    type: 'work',
    description:
      'Building full-stack web apps, 3D interactive experiences, and AI-powered creative tools. Shipping real products and constantly leveling up the tech stack.',
    skills: ['React', 'Firebase', 'Three.js', 'AI APIs'],
    color: '#00f5ff',
  },
  {
    period: '2024 — Present',
    role: 'B.E. Computer Science Engineering',
    org: 'University',
    type: 'education',
    description:
      'Currently in 2nd year. Deep-diving into data structures, algorithms, systems programming, and translating academia into real-world product experiences.',
    skills: ['DSA', 'Systems', 'Web Dev', 'Problem Solving'],
    color: '#7B2FBE',
  },
  {
    period: '2022 — 2023',
    role: 'UI/UX & Visual Design',
    org: 'Self-Taught',
    type: 'skill',
    description:
      'Mastered Figma and modern design principles. Created immersive mockups, design systems, and AI-generated visuals. Discovered the power of visual storytelling.',
    skills: ['Figma', 'Design Systems', 'AI Image Tools'],
    color: '#ff2d78',
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end center'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" ref={sectionRef} className="relative w-full py-32 md:py-40 px-6 overflow-hidden bg-[#050508]">
      <div
        className="glow-blob w-[500px] h-[500px] opacity-[0.06]"
        style={{ background: '#00f5ff', top: '10%', left: '-15%' }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="section-label mb-4 block opacity-50">04 / Journey</span>
          <h2
            className="heading-lg text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: "'Outfit', sans-serif" }}
          >
            My{' '}
            <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-[1px] h-full bg-white/5 overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full timeline-line bg-[#00f5ff]"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative"
              >
                <div
                  className="absolute -left-[2.1rem] w-4 h-4 rounded-full border-2 border-[#050508]"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
                />

                <div
                  className="glass rounded-2xl p-8 hover:border-white/12 transition-all duration-400 group"
                  style={{ borderLeft: `2px solid ${exp.color}25` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span
                        className="text-[0.6rem] uppercase tracking-[0.2em] font-mono mb-2 block"
                        style={{ color: exp.color }}
                      >
                        {exp.period}
                      </span>
                      <h3
                        className="text-white text-2xl font-bold"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-white/40 text-xs mt-1 uppercase tracking-widest font-mono">{exp.org}</p>
                    </div>
                    <span
                      className="text-[0.6rem] px-3 py-1 rounded-full uppercase tracking-widest"
                      style={{
                        background: `${exp.color}12`,
                        border: `1px solid ${exp.color}25`,
                        color: exp.color,
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-white/30 text-[0.65rem] uppercase tracking-widest font-mono group-hover:text-white/60 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
