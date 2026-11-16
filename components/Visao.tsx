"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export default function Visao() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();

  return (
    <section ref={ref} className="relative py-40 px-6 md:px-12 overflow-hidden bg-[#c0bbb5]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(91,3,17,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #C8C4BD 0px, #C8C4BD 1px, transparent 1px, transparent 40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0d0d] leading-tight"
        >
          Nossa visão é consolidar a Stricto Engenharia como{" "}
          <span className="text-[#5b0311]">
            referência nacional em qualidade, inovação e confiabilidade técnica.
          </span>
        </motion.p>

        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 h-px bg-[#5b0311] max-w-24 mx-auto origin-left"
        />
      </div>
    </section>
  );
}
