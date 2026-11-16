"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  Blueprint,
  HardHat,
  Leaf,
  ClipboardText,
} from "@phosphor-icons/react";

const servicos = [
  {
    icon: Blueprint,
    title: "Projetos de Engenharia",
    body: "Elaboração de projetos técnicos civis, elétricos, hidrossanitários e complementares. Desenvolvimento de soluções funcionais, seguras e compatibilizadas para empreendimentos de qualquer porte.",
    tags: ["Projeto Civil", "Elétrico", "Hidráulico", "Compatibilização"],
    featured: true,
  },
  {
    icon: HardHat,
    title: "Gerenciamento e Fiscalização de Obras",
    body: "Supervisão e controle de obras do início ao fim. Acompanhamento do cronograma, controle de qualidade, gestão de equipes e garantia de conformidade com projetos e normas técnicas.",
    tags: ["Supervisão", "Controle de Qualidade", "Cronograma"],
    featured: false,
  },
  {
    icon: Leaf,
    title: "Engenharia Ambiental e Sustentabilidade",
    body: "Estudos de impacto ambiental, licenciamento, diagnósticos e consultoria para empreendimentos que buscam conformidade legal e práticas sustentáveis.",
    tags: ["Licenciamento", "EIA/RIMA", "Sustentabilidade"],
    featured: false,
  },
  {
    icon: ClipboardText,
    title: "Consultoria Técnica",
    body: "Pareceres técnicos, laudos, inspeção predial, estruturação de projetos para financiamento e captação de recursos. Suporte especializado em todas as fases do empreendimento.",
    tags: ["Laudos", "Inspeção Predial", "Captação de Recursos"],
    featured: false,
  },
];

export default function Servicos() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const reduce = useReducedMotion();

  return (
    <section id="servicos" ref={ref} className="py-32 px-6 md:px-12 bg-[#b2ada8]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-[#5c5955] text-lg max-w-[55ch]">
            Soluções técnicas integradas para empreendimentos públicos e privados, do projeto à entrega.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {servicos.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative rounded-2xl p-8 border overflow-hidden
                  ${s.featured
                    ? "bg-[#5b0311]/12 border-[#5b0311]/30"
                    : "bg-[#c4c0b9] border-[#9e9a94]"
                  }`}
              >
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6
                    ${s.featured ? "bg-[#5b0311]" : "bg-[#b8b4ad]"}
                    `}
                  >
                    <Icon size={24} weight="duotone" className={s.featured ? "text-white" : "text-[#0d0d0d]"} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#0d0d0d] mb-3">{s.title}</h3>
                  <p className="text-base text-[#5c5955] leading-relaxed mb-5">{s.body}</p>

                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 rounded-full bg-[#b8b4ad] text-[#5c5955] border border-[#aaa69f]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#5b0311]/5 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
