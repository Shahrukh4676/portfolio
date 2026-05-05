import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

export function About() {
  return (
    <section id="about" className="relative w-full py-20 px-6 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6"
        >
          {/* ── 1. Big Intro Card ── */}
          <motion.div 
            variants={item} 
            className="md:col-span-2 md:row-span-2 bento-card flex flex-col justify-between"
          >
            <div>
              <span className="text-primary font-mono text-[0.6rem] md:text-sm tracking-widest uppercase mb-4 block">01 / Profile</span>
              <h2 className="text-white text-3xl md:text-5xl font-black mb-6 leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                I'm <span className="gradient-text">Shahrukh</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                A Full Stack Developer dedicated to crafting immersive, high-performance web experiences. 
                I don't just write code—I design digital journeys that leave an impact.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0F1C] bg-white/10" />
                ))}
              </div>
              <span className="text-xs text-white/30 self-center uppercase tracking-widest">Collaborating worldwide</span>
            </div>
          </motion.div>

          {/* ── 2. Tech Stack Card ── */}
          <motion.div variants={item} className="md:col-span-2 bento-card">
            <h3 className="text-white text-xl font-bold mb-6">What I Build</h3>
            <div className="flex flex-wrap gap-3">
              {['SaaS', '3D Webs', 'AI Tools', 'Dashboards', 'Portfolios'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan/70">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-4 gap-4 opacity-40">
              {['React', 'Node', 'Three', 'Framer'].map(icon => (
                <div key={icon} className="aspect-square rounded-xl bg-white/5 flex items-center justify-center text-[0.6rem]">
                  {icon}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 3. Location Card ── */}
          <motion.div variants={item} className="bento-card flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-white text-xl font-bold mb-2">Location</h3>
              <p className="text-white/40 text-sm">India 🇮🇳</p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full" />
            <div className="mt-10 text-4xl">🌏</div>
          </motion.div>

          {/* ── 4. Fun / Vibe Card ── */}
          <motion.div variants={item} className="bento-card flex flex-col justify-between">
            <h3 className="text-white text-xl font-bold mb-2">Current Vibe</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center animate-pulse">
                🎵
              </div>
              <div>
                <p className="text-white text-xs font-bold">Midnight Coding</p>
                <p className="text-white/30 text-[0.6rem] uppercase">Lo-fi Beats</p>
              </div>
            </div>
          </motion.div>

          {/* ── 5. Problem Solver Card (Senior insight) ── */}
          <motion.div variants={item} className="md:col-span-2 bento-card border-l-4 border-l-primary">
            <h3 className="text-white text-xl font-bold mb-4">Problems I love solving</h3>
            <p className="text-white/50 text-sm italic">
              "Turning complex backend logic into seamless, 60fps frontend interactions."
            </p>
          </motion.div>

          {/* ── 6. Learning Card ── */}
          <motion.div variants={item} className="md:col-span-2 bento-card bg-gradient-to-br from-white/[0.03] to-transparent">
            <h3 className="text-white text-xl font-bold mb-4">Currently Learning</h3>
            <div className="flex items-center gap-3 text-cyan/80 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
              WebGPU & Advanced Physics
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
