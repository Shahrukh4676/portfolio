import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const moveDot = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.12, ease: 'power2.out' });
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      gsap.set(ring, { x: ringX, y: ringY });
      requestAnimationFrame(animateRing);
    };

    const onEnterLink = () => ring?.classList.add('hovering');
    const onLeaveLink = () => ring?.classList.remove('hovering');

    document.querySelectorAll('a, button, .hoverable').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    window.addEventListener('mousemove', moveDot);
    animateRing();

    return () => {
      window.removeEventListener('mousemove', moveDot);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
