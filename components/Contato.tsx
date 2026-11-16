"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { MapPin, EnvelopeSimple, Phone } from "@phosphor-icons/react";

export default function Contato() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contato" ref={ref} className="py-32 px-6 md:px-12 bg-[#b2ada8]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d0d0d] mb-4">
            Fale com a Stricto
          </h2>
          <p className="text-[#5c5955] text-lg max-w-[50ch]">
            Entre em contato para discutir seu projeto ou tirar dúvidas sobre nossos serviços.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-start justify-center gap-4 py-16">
                <div className="w-14 h-14 rounded-full bg-[#5b0311]/20 border border-[#5b0311]/40 flex items-center justify-center">
                  <span className="text-2xl text-[#5b0311]">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0d0d0d]">Mensagem enviada!</h3>
                <p className="text-[#5c5955]">Retornaremos em breve. Obrigado pelo contato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-[#5c5955] font-medium" htmlFor="nome">
                      Nome
                    </label>
                    <input
                      id="nome"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="bg-[#c8c4be] border border-[#9a9690] rounded-lg px-4 py-3 text-base text-[#0d0d0d] placeholder:text-[#7a7672] focus:outline-none focus:border-[#5b0311] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-[#5c5955] font-medium" htmlFor="empresa">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      placeholder="Nome da empresa"
                      className="bg-[#c8c4be] border border-[#9a9690] rounded-lg px-4 py-3 text-base text-[#0d0d0d] placeholder:text-[#7a7672] focus:outline-none focus:border-[#5b0311] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#5c5955] font-medium" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="seu@email.com.br"
                    className="bg-[#c8c4be] border border-[#9a9690] rounded-lg px-4 py-3 text-base text-[#0d0d0d] placeholder:text-[#7a7672] focus:outline-none focus:border-[#5b0311] transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#5c5955] font-medium" htmlFor="assunto">
                    Assunto
                  </label>
                  <select
                    id="assunto"
                    className="bg-[#c8c4be] border border-[#9a9690] rounded-lg px-4 py-3 text-base text-[#0d0d0d] focus:outline-none focus:border-[#5b0311] transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Selecione um serviço</option>
                    <option>Projetos de Engenharia</option>
                    <option>Gerenciamento e Fiscalização</option>
                    <option>Engenharia Ambiental</option>
                    <option>Consultoria Técnica</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#5c5955] font-medium" htmlFor="mensagem">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={4}
                    placeholder="Descreva seu projeto ou necessidade..."
                    className="bg-[#c8c4be] border border-[#9a9690] rounded-lg px-4 py-3 text-base text-[#0d0d0d] placeholder:text-[#7a7672] focus:outline-none focus:border-[#5b0311] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 px-8 py-3 bg-[#5b0311] hover:bg-[#7a0417] text-white font-medium rounded-lg transition-colors duration-200 active:scale-[0.98] self-start"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="bg-[#c8c4be] border border-[#9a9690] rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-[#0d0d0d] mb-6">Informações de contato</h3>
              <div className="flex flex-col gap-5">
                {[
                  { Icon: MapPin, label: "Endereço", value: "Distrito Federal, Brasil" },
                  { Icon: EnvelopeSimple, label: "E-mail", value: "contato@strictoengenharia.com.br" },
                  { Icon: Phone, label: "Telefone", value: "+55 (61) 99850-8683" },
                  { Icon: Phone, label: "Telefone", value: "+55 (61) 98287-4150" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#5b0311]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} weight="duotone" className="text-[#5b0311]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#5c5955] mb-0.5">{label}</p>
                      <p className="text-sm text-[#0d0d0d]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#5b0311]/10 border border-[#5b0311]/20 rounded-2xl p-8">
              <p className="text-sm text-[#3c3835] leading-relaxed">
                Atendemos projetos em todo o território nacional, com base operacional no Distrito Federal. Nossa equipe está pronta para apresentar soluções técnicas adequadas à sua demanda.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
