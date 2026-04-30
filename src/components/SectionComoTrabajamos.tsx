"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionComoTrabajamos() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
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
    <section id="como-trabajamos" className="w-full bg-mega-black py-24 md:py-32 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Título Principal */}
        <div className="mb-20 text-left">
          <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
            Cómo trabajamos
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white leading-[1.05]">
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
              <h3 className="text-6xl font-black text-mega-cyan/20 group-hover:text-mega-green transition-colors duration-500 mb-6 font-heading tracking-wider">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.05] mb-10 max-w-4xl mx-auto">
            REUNÁMONOS PARA DISEÑAR<br />
            LO QUE REALMENTE NECESITA.
          </h2>
          <p className="text-2xl text-mega-silver font-light max-w-3xl mx-auto leading-relaxed mb-12">
            No presentamos tarifas estándar. Ofrecemos soluciones a la<br />
            medida. El primer diagnóstico es sin costo ni compromiso.
          </p>
          
          <div className="relative inline-block w-full sm:w-auto">
            <button 
              onClick={() => setIsOptionsOpen(!isOptionsOpen)} 
              className="group relative overflow-hidden bg-mega-cyan text-mega-white transition-all duration-300 hover:bg-[#005e6b] hover:shadow-[0_0_30px_rgba(0,124,142,0.4)] px-8 py-4 text-base font-medium rounded-sm w-full sm:w-[320px] flex items-center justify-between z-20"
            >
              <span className="relative z-10 flex-1 text-center font-semibold tracking-wider">
                {isOptionsOpen ? 'CERRAR OPCIONES' : 'DISEÑAR MI SOLUCIÓN'}
              </span>
              <motion.svg 
                animate={{ rotate: isOptionsOpen ? 180 : 0 }}
                className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </motion.svg>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full" />
            </button>

            <AnimatePresence>
              {isOptionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-full left-0 w-full mt-3 bg-[#030a0b]/80 backdrop-blur-2xl border border-mega-cyan/30 rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-50 flex flex-col"
                >
                  {[
                    { 
                      label: "Conocer planes de negocio", 
                      action: () => window.dispatchEvent(new CustomEvent('open-pricing-plans')) 
                    },
                    { 
                      label: "Solicitar cotización", 
                      action: () => window.dispatchEvent(new CustomEvent('open-tally-sidebar')) 
                    },
                    { 
                      label: "Agendar una llamada", 
                      action: () => window.dispatchEvent(new CustomEvent('open-tally-sidebar', { 
                        detail: { formId: 'rj2DpN', formTitle: 'Agendar Llamada' } 
                      }))
                    },
                    { 
                      label: "Programar una visita", 
                      action: () => window.dispatchEvent(new CustomEvent('open-tally-sidebar', { 
                        detail: { formId: 'jaGe2a', formTitle: 'Programar Visita' } 
                      }))
                    }
                  ].map((option, i) => (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                      onClick={() => {
                        option.action();
                        setIsOptionsOpen(false);
                      }}
                      className="text-left px-6 py-5 text-mega-silver hover:text-white hover:bg-mega-cyan/20 border-l-4 border-transparent hover:border-mega-green transition-all duration-300 font-medium text-lg relative group/item overflow-hidden"
                    >
                      <span className="relative z-10">{option.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-mega-cyan/10 to-transparent translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-500" />
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
