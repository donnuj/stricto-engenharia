import Image from "next/image";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#9e9a96] border-t border-[#8e8a86] px-6 md:px-12 py-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src="/logo.png"
              alt="Stricto Engenharia"
              width={624}
              height={172}
              className="h-12 w-auto object-contain"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1a1816] uppercase tracking-wider mb-4">
              Navegacao
            </p>
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#2e2c2a] hover:text-[#0d0d0d] transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1a1816] uppercase tracking-wider mb-4">
              Serviços
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Projetos de Engenharia",
                "Gerenciamento de Obras",
                "Engenharia Ambiental",
                "Consultoria Técnica",
              ].map((s) => (
                <li key={s} className="text-sm text-[#2e2c2a]">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#8e8a86] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#2e2c2a]">
            &copy; {new Date().getFullYear()} Stricto Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[#2e2c2a]">Distrito Federal, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
