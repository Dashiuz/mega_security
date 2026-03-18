"use client";

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import StackedSections from "@/components/ui/StackedSections";
import Footer from "@/components/Footer";

// Cargar el fondo 3D global dinámicamente sin SSR para evitar errores en Node
const ParticleNetwork3D = dynamic(() => import("@/components/ParticleNetwork3D"), { ssr: false });

export default function Home() {
  return (
    <div className="bg-transparent selection:bg-mega-green selection:text-black min-h-screen">
      
      {/* 1. Fondo Eterno (Partículas 3D con Culling deshabilitado y z-index base) */}
      <ParticleNetwork3D />

      {/* 2. Capa de Contenido Inteligente */}
      <main className="relative z-10 w-full">
        
        {/* El Hero transparente con animación ScrollTrigger */}
        <Hero />
        
        {/* Las secciones iteradas y animadas en el Eje Z */}
        <StackedSections />
        
        {/* El Footer flotando al final */}
        <Footer />
        
      </main>
      
    </div>
  );
}

