export function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 bg-[#050508] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="text-white font-bold tracking-[0.2em] uppercase text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Shahrukh <span className="text-[#00f5ff]">Visuals</span>
          </span>
          <span className="text-white/20 text-[0.6rem] font-mono tracking-widest uppercase">
            © 2026 Build for Excellence
          </span>
        </div>

        <div className="flex items-center gap-12">
          {['LinkedIn', 'GitHub', 'Email'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/20 hover:text-white text-[0.6rem] uppercase tracking-[0.3em] font-mono transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <span className="text-white/20 text-[0.6rem] font-mono tracking-widest uppercase">
            Made with React & Passion
          </span>
        </div>
      </div>
    </footer>
  );
}
