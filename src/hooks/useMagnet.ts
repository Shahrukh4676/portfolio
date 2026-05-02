import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function useMagnet<T extends HTMLElement = HTMLDivElement>(intensity = 0.4) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const xTo = gsap.quickTo(el, 'x', { duration: 0.9, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.9, ease: 'elastic.out(1, 0.3)' });
    const onMove = (e: MouseEvent) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      xTo((e.clientX - (left + width / 2)) * intensity);
      yTo((e.clientY - (top + height / 2)) * intensity);
    };
    const onLeave = () => { xTo(0); yTo(0); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [intensity]);
  return ref;
}
