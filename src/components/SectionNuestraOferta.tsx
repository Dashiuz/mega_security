"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SectionNuestraOferta() {
  const pathname = usePathname();
  const router = useRouter();

  const handleCardClick = (id: string) => {
    // Si no estamos en el Home, redirigimos con el hash de la sección
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    // Scroll suave local
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cards = [
    {
      num: "01",
      title: "MEGASEGURIDAD",
      desc: "Quiénes somos, nuestra historia, equipo, filosofía de servicio y el respaldo legal y operativo que nos respalda.",
      linkText: "Conócenos",
      targetId: "problema",
    },
    {
      num: "02",
      title: "QUÉ HACEMOS",
      desc: "Nuestros servicios de vigilancia, monitoreo, caninos, drones, escoltas y consultoría, con sus alcances y modalidades.",
      linkText: "Conoce nuestros servicios",
      targetId: "servicios",
    },
    {
      num: "03",
      title: "CÓMO LO HACEMOS",
      desc: "El proceso que seguimos: desde el diagnóstico inicial hasta el diseño, implementación y seguimiento de cada operación.",
      linkText: "Conoce el proceso",
      targetId: "operativa",
    },
    {
      num: "04",
      title: "PARA QUIÉN LO HACEMOS",
      desc: "Los sectores y tipos de clientes que atendemos: industria, comercio, entidades públicas, eventos y más.",
      linkText: "Conoce nuestros clientes",
      targetId: "filosofia",
    },
    {
      num: "05",
      title: "POR QUÉ ELEGIRNOS",
      desc: "Las razones concretas que nos diferencian: trayectoria, procesos, tecnología y el compromiso que asumimos con cada cliente.",
      linkText: "Conoce las razones",
      targetId: "como-trabajamos",
    },
  ];

  return (
    <section id="nuestra-oferta" className="relative w-full py-24 bg-transparent z-10 font-sans border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="mb-16">
          <span className="text-mega-cyan font-mono uppercase tracking-[0.3em] text-xs xl:text-sm font-bold block mb-2">
            Nuestra oferta
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white uppercase leading-[1.05]">
            Todo lo que
            <br />
            necesita saber
          </h2>
        </div>

        {/* Cuadrícula interactiva de 5 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01] backdrop-blur-md">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card.targetId)}
              className="p-8 flex flex-col justify-between min-h-[340px] transition-all duration-300 cursor-pointer group hover:bg-white/[0.03] border-b border-white/10 md:border-b-0 lg:border-r border-white/10 last:border-r-0 last:border-b-0 md:[&:nth-child(even)]:border-r-0 lg:[&:nth-child(even)]:border-r border-white/10"
            >
              <div className="flex flex-col">
                {/* Número de tarjeta */}
                <span className="text-2xl font-bold text-mega-cyan group-hover:text-mega-green transition-colors duration-300 mb-4 block">
                  {card.num}
                </span>

                {/* Título de la tarjeta */}
                <h3 className="text-white font-bold text-lg xl:text-xl mb-4 tracking-wide uppercase font-heading transition-colors duration-300 group-hover:text-mega-cyan">
                  {card.title}
                </h3>

                {/* Descripción */}
                <p className="text-mega-silver text-sm leading-relaxed mb-6 font-light">
                  {card.desc}
                </p>
              </div>

              {/* Enlace / Acción con flecha animada */}
              <div className="text-mega-cyan font-semibold text-xs xl:text-sm flex items-center gap-2 group-hover:text-white transition-colors duration-300 mt-auto">
                <span>{card.linkText}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-base">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Soft gradient to transition smoothly into the next solid section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-mega-black to-transparent pointer-events-none z-0" />
    </section>
  );
}
