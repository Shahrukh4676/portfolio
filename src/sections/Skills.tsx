import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: 'Frontend',
    icon: '⚡',
    color: '#00f5ff',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    label: 'Backend',
    icon: '🔧',
    color: '#7B2FBE',
    skills: ['Node.js', 'Express.js', 'Firebase', 'MongoDB', 'PostgreSQL'],
  },
  {
    label: 'Design',
    icon: '✦',
    color: '#ff2d78',
    skills: ['Figma', 'UI/UX Design', 'Visual Systems', 'AI Art'],
  },
  {
    label: 'Interactive',
    icon: '◈',
    color: '#00f5ff',
    skills: ['Three.js', 'Framer Motion', 'GSAP', 'WebGL'],
  },
  {
    label: 'Tools',
    icon: '⚙',
    color: '#7B2FBE',
    skills: ['Git & GitHub', 'Docker', 'Postman', 'Vercel'],
  },
];

const marqueeItems = [
  'React.js', 'Next.js', 'Node.js', 'Firebase', 'Figma',
  'Three.js', 'Tailwind', 'GSAP', 'Framer Motion', 'TypeScript',
  'Express.js', 'UI/UX', 'AI Tools', 'Visual Design', 'Git',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-32 md:py-40 px-6 bg-[#050508] overflow-hidden">
      {/* Bg glow */}
      <div
        className="glow-blob w-[600px] h-[600px] opacity-[0.06]"
        style={{ background: '#00f5ff', top: '-10%', left: '-15%' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="section-label mb-4 block opacity-50">02 / Expertise</span>
          <h2
            className="heading-lg text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: "'Outfit', sans-serif" }}
          >
            My Tech{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              custom={ci}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 hover:border-[#00f5ff]/30 transition-all duration-500 group relative overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}10`, border: `1px solid ${cat.color}20` }}
                >
                  {cat.icon}
                </span>
                <h3
                  className="text-white font-semibold text-base"
                  style={{ fontFamily: "'Outfit', sans-serif", color: '#fff' }}
                >
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-white/50 text-[0.7rem] uppercase tracking-wider bg-white/5 border border-white/5 group-hover:border-white/10 group-hover:text-white/80 transition-all"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="overflow-hidden relative border-t border-b border-white/5 py-8"
        >
          <div style={{ overflow: 'hidden' }}>
            <div className="marquee-inner flex gap-12 whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="text-white/10 font-bold text-lg uppercase tracking-[0.4em]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item}
                  <span className="mx-6 text-[#00f5ff]/30">✦</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
