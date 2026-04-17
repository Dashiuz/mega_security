"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionFilosofia() {
  return (
    <section className="w-full bg-mega-black py-24 md:py-32 relative z-20 px-4 md:px-12 lg:px-24 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto bg-gradient-to-br from-[#0c2427] to-[#041011] border border-mega-cyan/20 rounded-[2.5rem] md:rounded-[4rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-mega-cyan/50 to-transparent" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-mega-cyan/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-mega-green/10 blur-[100px] rounded-full" />

        <div className="relative z-10">
          <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-8 md:mb-12 uppercase">
            Nuestra filosofía
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8 md:mb-12">
            LA TECNOLOGÍA<br />
            <span className="text-mega-silver">SIN CRITERIO ESTRATÉGICO</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">ES RUIDO.</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-mega-silver font-light max-w-4xl mx-auto leading-relaxed">
            En Megaseguridad, cada solución tecnológica responde a un análisis de riesgo real y se mide por sus resultados.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
