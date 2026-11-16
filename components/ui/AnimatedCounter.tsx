"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
}: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setCount(value); return; }

    const start = performance.now();
    const raf = requestAnimationFrame(function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}
