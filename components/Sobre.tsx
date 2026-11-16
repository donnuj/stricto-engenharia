"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const diferenciais = [
  { n: "01", title: "Qualidade técnica", body: "Conformidade com normas vigentes e controle rigoroso em cada etapa do projeto." },
  { n: "02", title: "Cumprimento de prazos", body: "Planejamento detalhado e gestão ativa para garantir entregas dentro do cronograma." },
  { n: "03", title: "Equipe multidisciplinar", body: "Profissionais especializados em diversas áreas da engenharia e consultoria." },
  { n: "04", title: "Atendimento personalizado", body: "Soluções sob medida para empreendimentos públicos e privados de qualquer porte." },
];

export default function Sobre() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();

  return (
    <section id="sobre" ref={ref} className="py-32 px-6 md:px-12 bg-[#c0bbb5]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] leading-tight mb-8">
              Engenharia com precisão,{" "}
              <span className="text-[#5b0311]">entregando resultados reais</span>
            </h2>
            <p className="text-[#5c5955] text-lg leading-relaxed mb-5">
              Fundada em 2020, a Stricto Engenharia é uma empresa brasileira com atuação em âmbito nacional, sediada no Distrito Federal.
            </p>
            <p className="text-[#5c5955] text-lg leading-relaxed mb-5">
              Nossa atuação abrange consultoria, projetos, gerenciamento, supervisão e fiscalização de obras, contemplando diversas especialidades da engenharia e atendendo às demandas de empreendimentos públicos e privados.
            </p>
            <p className="text-[#5c5955] text-lg leading-relaxed">
              Com foco na qualidade técnica e na conformidade com as normas vigentes, disponibilizamos ferramentas de controle e gestão que asseguram confiabilidade, rastreabilidade e êxito nos resultados entregues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.n}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#cdc9c3] border border-[#aaa69f] rounded-xl p-6"
              >
                <span className="text-xs font-mono text-[#5b0311] mb-3 block">{d.n}</span>
                <h3 className="text-base font-semibold text-[#0d0d0d] mb-2">{d.title}</h3>
                <p className="text-sm text-[#5c5955] leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
