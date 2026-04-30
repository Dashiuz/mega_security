import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SocialProof from "../components/SocialProof";
import SectionProblema from "../components/SectionProblema";
import SectionSoluciones from "../components/SectionSoluciones";
import SectionOperativa from "../components/SectionOperativa";
import SectionComoTrabajamos from "../components/SectionComoTrabajamos";
import SectionFilosofia from "../components/SectionFilosofia";
import TeaserInteligencia from "../components/TeaserInteligencia";
import Footer from "@/components/Footer";
import ParticleWrapper from "@/components/ParticleWrapper";

export default function Home() {
  return (
    <div className="bg-transparent selection:bg-mega-green selection:text-black min-h-screen">
      {/* 1. Fondo Eterno (Partículas 3D con Culling deshabilitado y z-index base) */}
      <ParticleWrapper />

      {/* 2. Capa de Contenido Inteligente (SPA Flow Lineal) */}
      <main className="relative z-10 w-full bg-transparent flex flex-col">
        {/* El Hero transparente */}
        <Hero />

        {/* Bloque de Social Proof justo después del scroll inicial */}
        <SocialProof />

        {/* Secciones de flujo SPA con refactorización visual interactiva */}
        <SectionProblema />
        <SectionSoluciones />
        <SectionOperativa />
        <SectionFilosofia />
        <SectionComoTrabajamos />
        {/* <TeaserInteligencia /> */}

        {/* El Footer flotando al final */}
        <Footer />
      </main>
    </div>
  );
}
