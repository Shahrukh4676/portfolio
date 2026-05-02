import { motion } from 'framer-motion';
import { useState } from 'react';

const socials = [
  { label: 'GitHub', icon: '⌥', href: 'https://github.com/shahrukh' },
  { label: 'LinkedIn', icon: '◉', href: 'https://linkedin.com/in/shahrukh' },
  { label: 'Email', icon: '◎', href: 'mailto:shahrukh@example.com' },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative w-full py-32 md:py-40 px-6 overflow-hidden bg-[#050508]">
      {/* Glow blobs */}
      <div
        className="glow-blob w-[700px] h-[700px] opacity-[0.06]"
        style={{ background: '#00f5ff', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Big heading */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-4 block opacity-50">05 / Contact</span>
            <h2
              className="heading-xl text-white mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontFamily: "'Outfit', sans-serif" }}
            >
              Let's Build<br />
              <span className="gradient-text">Something Grand.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Have a vision that needs a technical foundation? I'm currently available for
              partnerships, freelance work, and innovative roles.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div className="glass rounded-3xl p-8 border border-white/5 bg-white/[0.01]">
              <h3
                className="text-white font-bold text-xl mb-8"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Inquiries & Socials
              </h3>
              <div className="space-y-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-5 group hoverable"
                  >
                    <span
                      className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl transition-all duration-500 group-hover:bg-[#00f5ff]/10 group-hover:text-[#00f5ff]"
                    >
                      {s.icon}
                    </span>
                    <div>
                      <p className="text-white/30 text-[0.6rem] uppercase tracking-widest mb-1 font-mono">{s.label}</p>
                      <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {s.href.startsWith('mailto:') ? s.href.replace('mailto:', '') : s.label}
                      </p>
                    </div>
                    <span className="ml-auto text-white/10 group-hover:text-[#00f5ff]/40 transition-colors">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-white/5 bg-white/[0.01]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="text-emerald-400/80 text-[0.65rem] uppercase tracking-widest font-bold font-mono">
                  Current Availability
                </span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed font-mono">
                Open to collaboration. Expect a response within 24 standard business hours.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-[2.5rem] p-10 border border-white/5 bg-white/[0.01]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-5xl mb-8 text-[#00f5ff]">✦</div>
                  <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Submission Received
                  </h3>
                  <p className="text-white/40 font-mono text-sm tracking-wide">I'll reach out to you shortly. Stay tuned.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="flex flex-col gap-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] uppercase tracking-widest text-white/30 font-mono">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="form-input bg-white/[0.02] border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#00f5ff]/50 outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[0.65rem] uppercase tracking-widest text-white/30 font-mono">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="form-input bg-white/[0.02] border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#00f5ff]/50 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[0.65rem] uppercase tracking-widest text-white/30 font-mono">Project Objective</label>
                    <input
                      type="text"
                      placeholder="e.g. Design System / Web App / Visual Creation"
                      className="form-input bg-white/[0.02] border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#00f5ff]/50 outline-none transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[0.65rem] uppercase tracking-widest text-white/30 font-mono">Detailed Context</label>
                    <textarea
                      rows={6}
                      placeholder="Share your goals, timeline, and any specific requirements..."
                      required
                      className="form-input bg-white/[0.02] border-white/10 rounded-3xl px-6 py-5 text-white focus:border-[#00f5ff]/50 outline-none transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="group relative px-8 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-xs transition-all hover:bg-[#00f5ff] hover:text-black overflow-hidden"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <span className="relative z-10">Initiate Contact</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
