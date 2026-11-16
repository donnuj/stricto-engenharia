"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 5, suffix: "+", label: "Anos de experiência" },
  { value: 13, suffix: "+", label: "Projetos entregues" },
  { value: 7, suffix: "+", label: "Clientes ativos" },
];

function Chevron({ index }: { index: number }) {
  const sizes = [320, 220, 140];
  const size = sizes[index];
  const heights = [64, 44, 28];
  const h = heights[index];
  return (
    <svg width={size} height={h} viewBox={`0 0 ${size} ${h}`} fill="none" aria-hidden="true">
      <path
        d={`M 0 0 L ${size / 2} ${h} L ${size} 0 L ${size - 16} 0 L ${size / 2} ${h - 12} L 16 0 Z`}
        fill="#5b0311"
      />
    </svg>
  );
}

function HeroGeometry({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center gap-0">
        {[
          { delay: 0.1, opacity: 0.2 },
          { delay: 0.25, opacity: 0.5 },
          { delay: 0.4, opacity: 1 },
        ].map((l, i) => (
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, y: 48 }}
            animate={{ opacity: l.opacity, y: 0 }}
            transition={{ delay: l.delay, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Chevron index={i} />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(91,3,17,0.55) 0%, transparent 65%)" }}
        animate={reduce ? {} : { scale: [1, 1.07, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
  };
  const item = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="inicio" ref={ref} className="relative min-h-[100dvh] flex items-center overflow-hidden">

      {/* Video */}
      <div className="absolute inset-0 overflow-hidden">
        {!reduce ? (
          <motion.video
            autoPlay muted loop playsInline preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ y: videoY, scale: 2.3, transformOrigin: "center 58%" }}
          >
            <source src="/bg.mp4" type="video/mp4" />
          </motion.video>
        ) : (
          <video
            autoPlay muted loop playsInline preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "scale(2.3)", transformOrigin: "center 58%" }}
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Scrims */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3d0209]/45 via-transparent to-transparent pointer-events-none" />

      {/* Chevron geometry */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={reduce ? {} : { opacity: contentOpacity }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full" aria-hidden="true">
          <HeroGeometry reduce={reduce} />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-28 pb-20"
        style={reduce ? {} : { opacity: contentOpacity }}
      >
        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          animate="visible"
          className="max-w-3xl flex flex-col gap-7"
        >
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.0] tracking-tight text-white"
          >
            Precisão técnica que transforma{" "}
            <span className="text-[#d47080]">projetos em realidade</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/65 leading-relaxed max-w-[52ch]"
          >
            Consultoria, projetos e fiscalização de obras em todo o Brasil. Equipe multidisciplinar com foco em qualidade técnica, prazos e conformidade com normas vigentes.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#5b0311] hover:bg-[#7a0417] text-white font-semibold rounded-xl transition-colors duration-200 active:scale-[0.97] text-base"
            >
              Fale Conosco
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-xl transition-colors duration-200 active:scale-[0.97] backdrop-blur-sm bg-white/8 text-base"
            >
              Ver Portfólio
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 max-w-sm sm:max-w-md"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5">
              <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs sm:text-sm text-white/50 leading-tight">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
