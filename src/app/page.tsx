import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SocialProof from "../components/SocialProof";
import SectionMegaseguridad from "../components/SectionMegaseguridad";
import SectionQueHacemos from "../components/SectionQueHacemos";
import SectionComoLoHacemos from "../components/SectionComoLoHacemos";
import SectionPorQueElegirnos from "../components/SectionPorQueElegirnos";
import SectionParaQuienLoHacemos from "../components/SectionParaQuienLoHacemos";
import SectionNuestraOferta from "../components/SectionNuestraOferta";
import TeaserInteligencia from "../components/TeaserInteligencia";
import SectionEquipoDirectivo from "../components/SectionEquipoDirectivo";
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

        {/* Nueva sección Nuestra Oferta */}
        <SectionNuestraOferta />

        {/* Bloque de Social Proof justo después del scroll inicial */}
        <SocialProof />

        {/* Secciones de flujo SPA con refactorización visual interactiva */}
        <SectionMegaseguridad />
        <SectionQueHacemos />
        <SectionComoLoHacemos />
        <SectionParaQuienLoHacemos />
        <SectionPorQueElegirnos />
        {/* <TeaserInteligencia /> */}

        <SectionEquipoDirectivo />

        {/* El Footer flotando al final */}
        <Footer />
      </main>
    </div>
  );
}
