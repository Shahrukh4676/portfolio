import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

function CountUp({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);
  
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const springValue = useSpring(0, { stiffness: 40, damping: 20 });
  const rounded = useTransform(springValue, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  return (
    <span ref={ref} className="stat-value">
      {displayValue}{suffix || value.replace(/[0-9]/g, "")}
    </span>
  );
}

const stats = [
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Clients Served' },
  { value: '2+', label: 'Years Learning' },
  { value: '99%', label: 'Success Rate' },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-16 bg-[#0A0F1C] border-t border-b border-white/5">
      <div className={`max-w-7xl mx-auto px-6 reveal ${isInView ? 'visible' : ''}`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <CountUp value={s.value} />
              <span 
                className="text-white/30 text-[0.65rem] uppercase tracking-[0.4em] font-mono"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
