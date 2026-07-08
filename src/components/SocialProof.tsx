"use client";

import React from "react";

export default function SocialProof() {
  const logos = [
    "LOGOTIPO UNO", "ENTIDAD CORP", "INDUSTRIAS TECH", 
    "GRUPO NACIONAL", "FINANCIERA", "OPERADORES X",
    "SEGURIDAD ALFA", "LOGÍSTICA GLOBAL", "MINERA DEL SUR",
    "PETRÓLEOS ANDINOS", "AEROLÍNEAS NACIONALES", "TELECOM CENTRAL"
  ];

  return (
    <section className="w-full bg-mega-black border-y border-white/5 py-16 relative z-20 overflow-hidden">
      <div className="w-full text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-mega-silver/60 font-semibold mb-10 px-6">
          Confían en nuestra arquitectura de protección
        </p>
        
        {/* Contenedor del Carrusel en Loop Infinito */}
        <div 
          className="relative w-full overflow-hidden flex"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
            maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)"
          }}
        >
          <div className="animate-marquee flex items-center gap-16 md:gap-24 opacity-30 hover:opacity-75 transition-opacity duration-500 py-2">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index}
                className="text-xl md:text-2xl font-black tracking-wider text-mega-white select-none whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
