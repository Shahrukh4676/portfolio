import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: "95%", icon: "⚛️" },
  { name: "Node.js / Express", level: "88%", icon: "🟢" },
  { name: "Three.js / WebGL", level: "82%", icon: "🌐" },
  { name: "TypeScript", level: "90%", icon: "TS" },
  { name: "Tailwind / CSS", level: "98%", icon: "🎨" },
  { name: "Firebase / SQL", level: "85%", icon: "🔥" },
];

const floatingIcons = ["⚛️", "🔥", "🌐", "💎", "⚡", "✨"];

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 px-6 bg-[#0A0F1C] overflow-hidden">
      {/* ── Floating Background Icons ── */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5 
            }}
            className="absolute text-4xl"
            style={{ 
              top: `${Math.random() * 80 + 10}%`, 
              left: `${Math.random() * 80 + 10}%`,
              filter: 'blur(2px)'
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">02 / Expertise</span>
            <h2 className="text-white text-5xl font-black mb-8 leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
              The Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 max-w-md">
              I focus on confidence and deep understanding over just "knowing" a syntax. 
              My stack is chosen for performance and future-scalability.
            </p>
            
            <div className="p-8 bento-card border-l-4 border-l-cyan">
              <h4 className="text-white font-bold mb-4">Senior Insight:</h4>
              <p className="text-white/50 text-sm">
                "I avoid heavy component libraries (like MUI) for performance-critical apps. 
                I prefer building custom primitives for 100/100 Lighthouse scores."
              </p>
            </div>
          </div>

          {/* Right: Skills Bars */}
          <div className="w-full lg:w-1/2 space-y-10">
            {skills.map((skill, i) => (
              <div key={skill.name} className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-xs">{skill.icon}</span>
                    <span className="text-white font-bold tracking-wide">{skill.name}</span>
                  </div>
                  <span className="text-cyan font-mono text-xs">{skill.level}</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] rounded-full relative"
                  >
                    <div className="absolute top-0 right-0 w-4 h-full bg-white/30 blur-sm" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
