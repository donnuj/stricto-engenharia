"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#b8b4ae]/95 backdrop-blur-md border-b border-[#9e9a94]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
          <button
            onClick={() => handleNav("#inicio")}
            className="focus-visible:outline-none"
            aria-label="Stricto Engenharia - inicio"
          >
            <Image
              src="/logo.png"
              alt="Stricto Engenharia"
              width={624}
              height={172}
              className={`h-12 w-auto object-contain transition-all duration-300 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm text-[#5c5955] hover:text-[#0d0d0d] transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contato")}
              className="text-sm font-medium px-5 py-2 bg-[#5b0311] hover:bg-[#7a0417] text-white rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Fale Conosco
            </button>
          </nav>

          <button
            className="md:hidden text-[#0d0d0d] p-1 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="fixed inset-x-0 top-16 z-40 bg-[#b8b4ae]/98 backdrop-blur-md border-b border-[#9e9a94] md:hidden"
        >
          <nav className="flex flex-col px-6 md:px-12 py-6 gap-5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left text-base text-[#0d0d0d] cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contato")}
              className="mt-2 text-sm font-medium px-5 py-3 bg-[#5b0311] text-white rounded-lg cursor-pointer"
            >
              Fale Conosco
            </button>
          </nav>
        </motion.div>
      )}
    </>
  );
}
