"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SocialProof() {
  const logos = [
    "LOGOTIPO UNO", "ENTIDAD CORP", "INDUSTRIAS TECH", 
    "GRUPO NACIONAL", "FINANCIERA", "OPERADORES X"
  ];

  return (
    <section className="w-full bg-mega-black border-y border-white/5 py-16 relative z-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-mega-silver/60 font-semibold mb-8">
          Confían en nuestra arquitectura de protección
        </p>
        
        {/* Carrusel estático o fila flexible para logos aleatorios (mock) */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-black tracking-tighter text-mega-white select-none pointer-events-none"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
