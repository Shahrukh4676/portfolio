import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function Contact() {
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Conceptual EmailJS integration
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="relative w-full py-20 md:py-32 px-6 bg-[#0A0F1C] overflow-hidden">
      <div
        className="glow-blob w-[800px] h-[800px] opacity-[0.04]"
        style={{ background: '#00E5FF', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center mb-16 reveal ${isInView ? 'visible' : ''}`}>
          <span className="section-label mb-4 block opacity-40">06 / Contact</span>
          <h2
            className="heading-lg text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontFamily: "'Outfit', sans-serif" }}
          >
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-mono text-sm tracking-wide">
            Ready to initiate your next vision? Drop a message below.
          </p>
        </div>

        <div className={`glass rounded-[3rem] p-10 md:p-16 border border-white/5 bg-white/[0.01] reveal ${isInView ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-8">✨</div>
              <h3 className="text-white text-3xl font-bold mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Message Sent!</h3>
              <p className="text-white/40 font-mono text-sm">I'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setSent(false)}
                className="mt-12 text-[#00E5FF] text-xs uppercase tracking-widest font-bold hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[0.6rem] uppercase tracking-widest text-white/20 font-bold ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-[#00E5FF]/50 outline-none transition-all focus:bg-white/[0.05]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[0.6rem] uppercase tracking-widest text-white/20 font-bold ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-[#00E5FF]/50 outline-none transition-all focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[0.6rem] uppercase tracking-widest text-white/20 font-bold ml-2">Your Vision</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  required
                  className="w-full bg-white/[0.03] border border-white/5 rounded-3xl px-6 py-5 text-white focus:border-[#00E5FF]/50 outline-none transition-all focus:bg-white/[0.05] resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-6 text-sm font-bold shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
