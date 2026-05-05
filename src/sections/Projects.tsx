import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Gold Trading Platform',
    subtitle: 'Live gold rate + admin dashboard',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
    live: '#',
    github: '#',
    color: '#00E5FF',
  },
  {
    id: 2,
    title: 'Smart Crop Advisory',
    subtitle: 'AI-Powered Agriculture Platform',
    image: 'https://images.unsplash.com/photo-1495107336217-fc1d9f03c471?auto=format&fit=crop&q=80&w=1000',
    live: '#',
    github: '#',
    color: '#00E5FF',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative w-full py-20 md:py-32 px-6 bg-[#0A0F1C] overflow-hidden">
      <div
        className="glow-blob w-[800px] h-[800px] opacity-[0.03]"
        style={{ background: '#7C4DFF', bottom: '-10%', right: '-10%' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 reveal ${isInView ? 'visible' : ''}`}>
          <span className="section-label mb-4 block opacity-40">03 / Works</span>
          <h2
            className="heading-lg text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: "'Outfit', sans-serif" }}
          >
            Selected <span className="gradient-text">Masterpieces</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="project-card-v2 group"
            >
              <div className="image-wrap relative">
                <img src={project.image} alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-60" />
                
                {/* Links Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <a 
                    href={project.live} 
                    className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#00E5FF] hover:text-black transition-all transform hover:scale-110"
                    title="Live Demo"
                  >
                    ↗
                  </a>
                  <a 
                    href={project.github} 
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-all transform hover:scale-110 border border-white/10"
                    title="GitHub Repo"
                  >
                    ⌥
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 
                  className="text-white text-2xl font-bold mb-2 group-hover:text-[#00E5FF] transition-colors"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-white/40 text-sm font-mono tracking-wide mb-6"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {project.subtitle}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-[#00E5FF]/30 transition-colors" />
                  <span className="text-[0.6rem] uppercase tracking-widest text-white/20 font-bold">Case Study</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-24">
          <a href="#contact" className="btn-outline hoverable rounded-full px-12 py-4 border-white/10 text-white/60 hover:text-white">
            Discuss a Vision
          </a>
        </div>
      </div>
    </section>
  );
}
