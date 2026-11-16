"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const clientes = [
  { name: "PNUD / ONU", abbr: "UN", color: "#009EDB" },
  { name: "Instituto BRICS", abbr: "BR", color: "#1a6b3c" },
  { name: "Pref. Águas Lindas", abbr: "AL", color: "#2563eb" },
  { name: "Pref. Novo Gama", abbr: "NG", color: "#16a34a" },
  { name: "Governo Valparaíso", abbr: "VL", color: "#7c3aed" },
  { name: "Grupo Parvi", abbr: "PV", color: "#059669" },
  { name: "Grupo Águia Branca", abbr: "AB", color: "#0369a1" },
];

function ClientLogo({ name, abbr, color }: { name: string; abbr: string; color: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#cdc9c3] border border-[#9e9a94] hover:border-[#5b0311]/30 transition-colors duration-200 min-w-max">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {abbr}
      </div>
      <span className="text-base font-medium text-[#3c3835] whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function Clientes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  return (
    <section id="clientes" ref={ref} className="py-28 px-6 md:px-12 bg-[#b2ada8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4">
            Clientes que confiam na Stricto
          </h2>
          <p className="text-[#5c5955] text-lg max-w-[48ch] mx-auto">
            Atendemos órgãos públicos, organismos internacionais e empresas privadas em todo o Brasil.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div
            className="flex gap-4 overflow-x-auto pb-4 md:flex-wrap md:justify-center md:overflow-visible"
            style={{ scrollbarWidth: "none" }}
          >
            {clientes.map((c) => (
              <ClientLogo key={c.name} {...c} />
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-[#b4b0aa] to-transparent pointer-events-none md:hidden" />
          <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-[#b4b0aa] to-transparent pointer-events-none md:hidden" />
        </motion.div>
      </div>
    </section>
  );
}
