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
      targetId: "megaseguridad",
    },
    {
      num: "02",
      title: "QUÉ HACEMOS",
      desc: "Nuestros servicios de vigilancia, monitoreo, caninos, drones, escoltas y consultoría, con sus alcances y modalidades.",
      linkText: "Conoce nuestros servicios",
      targetId: "que-hacemos",
    },
    {
      num: "03",
      title: "CÓMO LO HACEMOS",
      desc: "El proceso que seguimos: desde el diagnóstico inicial hasta el diseño, implementación y seguimiento de cada operación.",
      linkText: "Conoce el proceso",
      targetId: "como-lo-hacemos",
    },
    {
      num: "04",
      title: "PARA QUIEN LO HACEMOS",
      desc: "Los sectores y tipos de clientes que atendemos: industria, comercio, entidades públicas, eventos y más.",
      linkText: "Conoce nuestros clientes",
      targetId: "para-quien-lo-hacemos",
    },
    {
      num: "05",
      title: "POR QUÉ ELEGIRNOS",
      desc: "Las razones concretas que nos diferencian: trayectoria, procesos, tecnología y el compromiso que asumimos con cada cliente.",
      linkText: "Conoce las razones",
      targetId: "por-que-elegirnos",
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

        {/* Acordeón interactivo de 5 columnas (crece horizontalmente en hover en pantallas grandes) */}
        <div className="flex flex-col lg:flex-row border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01] backdrop-blur-md">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(card.targetId)}
              className="p-8 flex flex-col justify-between min-h-[350px] lg:h-[400px] w-full lg:w-0 lg:flex-1 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group hover:bg-[#07191b] border-b lg:border-b-0 lg:border-r border-white/10 last:border-r-0 last:border-b-0 lg:hover:flex-[2.2] relative overflow-hidden"
            >
              {/* Imagen de fondo / lateral revelada al hover en desktop */}
              <div className="absolute top-0 right-0 h-full w-0 group-hover:w-[45%] opacity-0 group-hover:opacity-80 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden hidden lg:block border-l border-white/10">
                <img
                  src="/cameras.jpg"
                  alt={card.title}
                  className="h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 blur-sm group-hover:blur-none"
                />
                {/* Capa de mezcla de color del fondo de la tarjeta */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#07191b] via-[#07191b]/50 to-transparent" />
              </div>

              {/* Contenedor principal de texto que se ajusta horizontalmente al hover */}
              <div className="flex flex-col justify-between h-full relative z-10 w-full lg:group-hover:w-[50%] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
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
                  <p className="text-mega-silver text-sm leading-relaxed mb-6 font-light line-clamp-4 group-hover:line-clamp-none">
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
            </div>
          ))}
        </div>

      </div>

      {/* Soft gradient to transition smoothly into the next solid section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-mega-black to-transparent pointer-events-none z-0" />
    </section>
  );
}
