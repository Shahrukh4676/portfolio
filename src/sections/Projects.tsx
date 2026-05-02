import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Smart Crop Advisory',
    subtitle: 'AI-Powered Agriculture Platform',
    description:
      'A smart platform that helps farmers make better crop decisions using real-time weather insights and data-driven recommendations. Built with modern web tech to serve rural communities.',
    tags: ['React', 'Firebase', 'Weather API', 'Data Visualization'],
    color: '#00f5ff',
    gradient: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(5,5,8,0))',
    emoji: '🌱',
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'Gold Investment Web',
    subtitle: 'Premium Financial Experience',
    description:
      'A premium interactive website showcasing digital gold products with real-time pricing, smooth UI animations, and a luxury aesthetic that builds trust and drives conversions.',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
    color: '#f5c842',
    gradient: 'linear-gradient(135deg, rgba(245,200,66,0.12), rgba(5,5,8,0))',
    emoji: '💰',
    featured: true,
  },
  {
    id: 3,
    number: '03',
    title: 'AI Art Portfolio',
    subtitle: 'Visual Synthesis Platform',
    description:
      'A gallery of high-impact AI-generated visuals and custom-trained models. Showcasing the intersection of prompt engineering and artistic vision.',
    tags: ['Midjourney', 'Stable Diffusion', 'Figma', 'Prompt Engineering'],
    color: '#ff2d78',
    gradient: 'linear-gradient(135deg, rgba(255,45,120,0.12), rgba(5,5,8,0))',
    emoji: '🎨',
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="project-card group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500"
    >
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-8 md:p-10 relative z-10">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <span
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}20` }}
            >
              {project.emoji}
            </span>
            <div>
              <span
                className="text-[0.6rem] uppercase tracking-[0.3em] font-mono opacity-40"
                style={{ color: project.color }}
              >
                Project {project.number}
              </span>
              <h3
                className="text-white text-2xl font-bold mt-1"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {project.title}
              </h3>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10"
              style={{ color: project.color }}
            >
              ↗
            </span>
          </motion.div>
        </div>

        <p className="text-white/40 text-xs uppercase tracking-widest font-mono mb-4">{project.subtitle}</p>
        <p className="text-white/60 text-base leading-relaxed mb-8 min-h-[80px]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-white/40 text-[0.65rem] uppercase tracking-wider font-mono group-hover:border-white/10 group-hover:text-white/70 transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: project.gradient }}
      />
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-32 md:py-40 px-6 overflow-hidden bg-[#050508]">
      <div
        className="glow-blob w-[700px] h-[700px] opacity-[0.06]"
        style={{ background: '#7B2FBE', bottom: '-20%', right: '-20%' }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <span className="section-label mb-4 block opacity-50">03 / Projects</span>
          <h2
            className="heading-lg text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: "'Outfit', sans-serif" }}
          >
            Selected{' '}
            <span className="gradient-text">Masterpieces</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-24"
        >
          <p className="text-white/20 mb-8 text-xs uppercase tracking-[0.4em] font-mono">Curating more experiences...</p>
          <a href="#contact" className="btn-outline hoverable rounded-full px-12 py-4 border-white/10 text-white/60 hover:text-white">
            Discuss a Vision
          </a>
        </motion.div>
      </div>
    </section>
  );
}
