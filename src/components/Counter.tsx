"use client";
import { useEffect, useRef, useState } from "react";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(value * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const shown = Number.isInteger(value) ? Math.round(n) : n.toFixed(1);
  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}
