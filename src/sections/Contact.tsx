import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 px-6 bg-[#0A0F1C] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <span className="text-cyan font-mono text-sm tracking-widest uppercase mb-4 block">06 / Contact</span>
            <h2 className="text-white text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.9] mb-8" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Let's build<br />
              something <span className="gradient-text">insane.</span>
            </h2>
            <p className="text-white/40 text-lg max-w-md">
              Whether you have a specific vision or just want to explore the possibilities, I'm ready to dive in.
            </p>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2">
            <form className="glass p-10 md:p-16 rounded-[3rem] space-y-8 border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[0.6rem] uppercase tracking-widest text-white/30 font-bold ml-2">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.6rem] uppercase tracking-widest text-white/30 font-bold ml-2">Email</label>
                  <input type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan/50 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[0.6rem] uppercase tracking-widest text-white/30 font-bold ml-2">Message</label>
                <textarea rows={4} placeholder="What's on your mind?" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan/50 transition-all resize-none" />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(108,99,255,0.4)] transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
