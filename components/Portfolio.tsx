"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import Image from "next/image";

const projetos = [
  {
    id: 2,
    titulo: "Garbo Residencial",
    cliente: "Garbo Residencial",
    local: "Park Way, Brasília/DF",
    ano: "2025",
    area: "20.000 m²",
    tipo: "Projeto técnico, administração e fiscalização",
    categoria: "privado",
    img: "/portfolio/2.jpeg",
  },
  {
    id: 4,
    titulo: "Sede PNUD",
    cliente: "PNUD / ONU",
    local: "Brasília/DF",
    ano: "2024-2025",
    area: "7.746 m²",
    tipo: "Inspeção predial, laudo técnico e fiscalização",
    categoria: "publico",
    img: "/portfolio/4.jpeg",
  },
  {
    id: 5,
    titulo: "Projetos BRICS",
    cliente: "Instituto BRICS",
    local: "Brasília/DF",
    ano: "2024-2026",
    area: "-",
    tipo: "Estruturação técnica e captação de recursos",
    categoria: "publico",
    img: "/portfolio/5.jpeg",
  },
  {
    id: 7,
    titulo: "Infraestrutura Vila União",
    cliente: "Pref. Municipal de Novo Gama",
    local: "Novo Gama/GO",
    ano: "2024-2025",
    area: "20.994 m²",
    tipo: "Projeto técnico, orçamento e fiscalização",
    categoria: "publico",
    img: "/portfolio/7.jpeg",
  },
  {
    id: 8,
    titulo: "Feira América",
    cliente: "Pref. de Águas Lindas",
    local: "Águas Lindas/GO",
    ano: "2023",
    area: "1.430 m²",
    tipo: "Projeto técnico e orçamento",
    categoria: "publico",
    img: "/portfolio/8.jpeg",
  },
  {
    id: 9,
    titulo: "Centro de Especialidades",
    cliente: "Pref. de Águas Lindas",
    local: "Águas Lindas/GO",
    ano: "2023",
    area: "1.090 m²",
    tipo: "Projeto técnico e orçamento",
    categoria: "publico",
    img: "/portfolio/9.jpeg",
  },
];

const filtros = [
  { key: "todos", label: "Todos" },
  { key: "publico", label: "Poder Público" },
  { key: "privado", label: "Privado" },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();
  const [filtro, setFiltro] = useState("todos");

  const filtered = projetos.filter(
    (p) => filtro === "todos" || p.categoria === filtro
  );

  return (
    <section id="portfolio" ref={ref} className="py-32 px-6 md:px-12 bg-[#c0bbb5]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-3">
              Obras em destaque
            </h2>
            <p className="text-[#5c5955] text-lg">Projetos realizados em todo o Brasil.</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {filtros.map((f) => (
              <button
                key={f.key}
                onClick={() => setFiltro(f.key)}
                className={`text-base px-5 py-2 rounded-lg border transition-all duration-200 cursor-pointer
                  ${filtro === f.key
                    ? "bg-[#5b0311] border-[#5b0311] text-white"
                    : "border-[#aaa69f] text-[#5c5955] hover:border-[#5b0311]/40"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl overflow-hidden border border-[#aaa69f] bg-[#cdc9c3]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0d0d0d] mb-1">{p.titulo}</h3>
                  <p className="text-sm text-[#5b0311] font-medium mb-3">{p.cliente}</p>
                  <p className="text-sm text-[#5c5955] mb-4 leading-relaxed">{p.tipo}</p>

                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#5c5955]">
                    <span>{p.local}</span>
                    {p.area !== "-" && (
                      <span className="font-mono">{p.area}</span>
                    )}
                    <span>{p.ano}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
