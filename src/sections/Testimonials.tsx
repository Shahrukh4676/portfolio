const reviews = [
  { name: "Alex Rivera", role: "Founder, TechFlow", text: "Shahrukh delivered a 3D interface that literally doubled our session duration. Absolute wizardry." },
  { name: "Sarah Chen", role: "Product Lead, Nexus", text: "The performance optimization was insane. 100/100 Lighthouse scores on a complex Three.js app." },
  { name: "Jordan Smith", role: "CTO, Prism", text: "Cleanest code I've seen in years. The bento grid design he suggested became our brand standard." },
  { name: "M. K. Sharma", role: "Freelance Client", text: "Fast, communicative, and has a very strong eye for premium aesthetics. Highly recommended." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-24 bg-[#0A0F1C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">05 / Kind Words</span>
        <h2 className="text-white text-4xl font-black" style={{ fontFamily: "'Outfit', sans-serif" }}>
          The WOW <span className="gradient-text">Factor</span>
        </h2>
      </div>

      <div className="flex w-fit animate-scroll">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-8 px-4">
            {reviews.map((r, idx) => (
              <div 
                key={idx} 
                className="w-[400px] bento-card flex-shrink-0 flex flex-col justify-between"
              >
                <p className="text-white/60 italic text-lg leading-relaxed mb-10">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan" />
                  <div>
                    <h5 className="text-white font-bold text-sm">{r.name}</h5>
                    <p className="text-white/30 text-[0.6rem] uppercase tracking-widest">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
