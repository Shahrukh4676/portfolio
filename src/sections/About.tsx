import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ── 3D TILT LOGIC ──
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const headingText = "About Me";

  return (
    <section id="about" ref={ref} className="relative w-full py-20 md:py-32 px-6 overflow-hidden bg-[#0A0F1C]">
      {/* Background glow */}
      <div
        className="glow-blob w-[500px] h-[500px] opacity-[0.05]"
        style={{ background: '#00E5FF', top: '20%', right: '-15%' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* ── Left: Interactive 3D Card ── */}
          <div className="w-full lg:w-1/2 perspective-container">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative aspect-square md:aspect-video lg:aspect-square group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/20 to-[#7C4DFF]/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full w-full bg-white/[0.03] backdrop-blur-[20px] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] preserve-3d">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 p-4"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
                    alt="Shahrukh"
                  />
                  {/* Floating Glass Element */}
                  <motion.div 
                    style={{ translateZ: 50 }}
                    className="absolute bottom-10 right-10 p-6 glass rounded-2xl border border-white/10 shadow-2xl hidden md:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00E5FF] status-dot-pulse" />
                      <span className="text-[0.6rem] uppercase tracking-widest text-white/60 font-bold">Open to visions</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Content ── */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="space-y-10"
            >
              {/* Animated Heading */}
              <h2 className="text-white flex flex-wrap gap-[0.2em]">
                {headingText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(2.5rem,8vw,5rem)] font-black leading-none"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h2>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="space-y-6"
              >
                <p 
                  className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  I’m <span className="gradient-text-animated font-bold">Shahrukh</span>, a full-stack developer focused on building fast, scalable, and visually engaging web applications.
                </p>
                <p 
                  className="text-white/40 text-lg leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  I don’t just write code — I design experiences. From smooth UI animations to optimized backend systems, I care about how things feel as much as how they work.
                </p>
                <p 
                  className="text-white/40 text-lg leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  I’ve built projects using React, Node.js, and modern frontend tools, with a strong focus on performance, clean architecture, and user experience.
                </p>
                <p 
                  className="text-white/40 text-lg leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Currently, I’m sharpening my problem-solving skills and exploring advanced UI/UX patterns to create products that stand out.
                </p>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-wrap gap-6 pt-6"
              >
                <a href="#contact" className="btn-primary rounded-full px-12 py-4">Hire Me</a>
                <button className="btn-outline rounded-full px-12 py-4 border-white/10 text-white/60 hover:text-white transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,229,255,0.2)]">Download CV</button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
