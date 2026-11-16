"use client";

import { motion, useReducedMotion } from "motion/react";

interface Props {
  size?: number;
  color?: string;
  animate?: boolean;
}

const LAYERS = [
  // bottom chevron
  "M 24 72 L 48 88 L 72 72 L 64 68 L 48 78 L 32 68 Z",
  // middle chevron
  "M 24 56 L 48 72 L 72 56 L 64 52 L 48 62 L 32 52 Z",
  // top chevron
  "M 24 40 L 48 56 L 72 40 L 64 36 L 48 46 L 32 36 Z",
];

export default function StrictoMark({ size = 96, color = "#5b0311", animate = true }: Props) {
  const reduce = useReducedMotion();
  const shouldAnimate = animate && !reduce;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {LAYERS.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill={color}
          initial={shouldAnimate ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
    </svg>
  );
}
