import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    title: "Gold Trading Hub",
    problem: "Real-time volatility and admin control in precious metal trading.",
    role: "Lead Full Stack",
    stack: ["React", "Node.js", "WebSockets"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Smart Crop AI",
    problem: "Precision agriculture hindered by lack of real-time crop health data.",
    role: "UX Architect",
    stack: ["Python", "TensorFlow", "React Native"],
    image: "https://images.unsplash.com/photo-1495107336217-fc1d9f03c471?auto=format&fit=crop&q=80&w=1000",
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      x.set(mouseX / width - 0.5);
      y.set(mouseY / height - 0.5);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="bento-card relative h-[500px] overflow-hidden group cursor-none"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={project.image} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700" alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end" style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-3xl font-black text-white mb-2 leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {project.title}
        </h3>
        <p className="text-[#00D4FF] font-mono text-[0.65rem] tracking-[0.3em] uppercase mb-6">
          {project.role}
        </p>
        
        <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
          {project.problem}
        </p>

        <div className="flex gap-2 mb-8">
          {project.stack.map(s => (
            <span key={s} className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[0.6rem] text-white/50">{s}</span>
          ))}
        </div>

        <div className="flex gap-4">
          <button className="btn-primary py-3 px-6 text-xs">Live Demo</button>
          <button className="btn-outline py-3 px-6 text-xs">GitHub</button>
        </div>
      </div>

      {/* 3D Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ transform: "translateZ(20px)" }} />
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative w-full py-20 px-6 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div className="max-w-xl">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">03 / Works</span>
            <h2 className="text-white text-5xl font-black mb-6 leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Selected <span className="gradient-text">Masterpieces</span>
            </h2>
          </div>
          <button className="text-[#00D4FF] text-xs uppercase tracking-[0.4em] font-bold border-b border-[#00D4FF]/20 pb-2 hover:tracking-[0.6em] transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
