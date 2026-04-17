"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionComoTrabajamos() {
  const steps = [
    {
      num: "01",
      title: "Escuchamos",
      desc: "Nos reunimos, entendemos su operación, sus valores corporativos y el nivel de riesgo al que está expuesto."
    },
    {
      num: "02",
      title: "Diagnosticamos",
      desc: "Analizamos sus vulnerabilidades reales, no las genéricas del sector. Cada diagnóstico es único."
    },
    {
      num: "03",
      title: "Diseñamos",
      desc: "Construimos una propuesta concreta, estratégica y alineada a su presupuesto. Sin extras innecesarios."
    },
    {
      num: "04",
      title: "Medimos",
      desc: "El servicio no termina en la firma. Lo supervisamos, lo medimos y lo mejoramos continuamente con evidencia."
    }
  ];

  return (
    <section id="como-trabajamos" className="w-full bg-mega-black py-24 md:py-32 relative z-20 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Título Principal */}
        <div className="mb-20 text-left">
          <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
            Cómo trabajamos
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            DE LA CONVERSACIÓN A LA<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">PROTECCIÓN REAL</span>
          </h2>
          <p className="mt-8 text-xl text-mega-silver font-light max-w-2xl leading-relaxed">
            Un proceso claro, sin sorpresas. Porque la confianza se<br/> construye desde el primer contacto.
          </p>
        </div>

        {/* Grid de 4 Bloques (Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-[#051112] hover:bg-[#0a2326] rounded-xl border border-white/5 hover:border-mega-cyan/40 transition-all duration-500 p-10 flex flex-col items-start min-h-[300px]"
            >
              <h3 className="text-6xl font-black text-mega-cyan/20 group-hover:text-mega-green transition-colors duration-500 mb-6 font-heading tracking-tighter">
                {step.num}
              </h3>
              <h4 className="text-xl font-bold text-white group-hover:text-mega-cyan mb-4 transition-colors">
                {step.title}
              </h4>
              <p className="text-mega-silver font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center py-16"
        >
          <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-6 uppercase">
            ¿Listo para proteger su negocio?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-10 max-w-4xl mx-auto">
            REUNÁMONOS PARA DISEÑAR<br />
            LO QUE REALMENTE NECESITA.
          </h2>
          <p className="text-2xl text-mega-silver font-light max-w-3xl mx-auto leading-relaxed mb-12">
            No presentamos tarifas estándar. Ofrecemos soluciones a la<br />
            medida. El primer diagnóstico es sin costo ni compromiso.
          </p>
          
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-tally-sidebar'))} className="bg-mega-cyan/10 border border-mega-cyan hover:bg-mega-cyan text-mega-cyan hover:text-white transition-all duration-300 px-10 py-4 text-lg font-medium rounded-sm">
            Diseñar mi solución
          </button>
        </motion.div>

        {/* Footer simple (imágenes 2) */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-2xl font-bold text-mega-silver font-heading tracking-widest opacity-80">
            MEGASEGURIDAD · DESDE 1979
          </h3>
          <p className="text-mega-silver/60 text-sm">
            Bogotá, Colombia · Operación nacional en 11 departamentos
          </p>
        </div>

      </div>
    </section>
  );
}
