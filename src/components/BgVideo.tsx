"use client";
import { useEffect, useRef } from "react";

/**
 * Decorative background video. The file is only requested on wide screens, when the
 * user doesn't prefer reduced motion and data saver is off, and only once it scrolls
 * into view. It pauses again when off screen.
 */
export function BgVideo({ src, className = "" }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const calm = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!wide || !calm || conn?.saveData) return;

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!el.getAttribute("src")) el.src = src;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return <video ref={ref} className={className} muted loop playsInline preload="none" aria-hidden />;
}
