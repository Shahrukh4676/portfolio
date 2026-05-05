export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-12 px-6 bg-[#0A0F1C] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p 
            className="text-white/60 text-sm font-medium"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Built with ❤️ by <span className="text-white font-bold">Shahrukh</span>
          </p>
          <p className="text-white/20 text-[0.6rem] uppercase tracking-[0.3em] font-mono">
            Full Stack Developer • Visual Creator
          </p>
        </div>
        
        <div className="text-white/20 text-[0.65rem] uppercase tracking-widest font-mono">
          © {currentYear} ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
