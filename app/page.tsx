import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Portfolio from "@/components/Portfolio";
import Visao from "@/components/Visao";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Portfolio />
        <Visao />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
