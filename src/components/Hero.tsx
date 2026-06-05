"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const stagger: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-transparent z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20 relative z-20">
        <motion.div
          className="max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Tagline superior */}
          <motion.div variants={item} className="mb-6 inline-block">
            <p className="text-mega-cyan font-medium tracking-wide text-sm md:text-base border border-mega-cyan/30 bg-mega-cyan/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Fundada en 1979 · Más de 45 años protegiendo Colombia
            </p>
          </motion.div>

          {/* Gran titular */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-wider text-white mb-8 uppercase"
          >
            Diseñamos soluciones de seguridad a
            <br />
            la medida de las necesidades de
            <br />
            nuestros clientes con la mejor
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">
              relación costo-beneficio
            </span>
          </motion.h1>

          {/* Párrafo de apertura y Misión */}
          <motion.div variants={item} className="space-y-6 max-w-3xl mb-12">
            <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed border-l-2 border-mega-cyan/40 pl-6">
              Nuestra misión es proteger personas, activos e infraestructura con soluciones integrales que combinen experiencia, talento humano confiable y tecnología con resultados verificables.
            </p>
            <p className="text-sm md:text-base text-mega-silver/70 font-light leading-relaxed">
              En Megaseguridad no ofrecemos esquemas genéricos ni soluciones improvisadas. Analizamos la realidad de cada operación para diseñar un modelo de seguridad ajustado a sus riesgos, necesidades y presupuesto con el equilibrio correcto entre protección, eficiencia y costo.
            </p>
          </motion.div>

          {/* Botones de llamados a la acción */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-20">
            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-tally-sidebar", {
                    detail: {
                      formId: "rj2DpN",
                      formTitle: "Agende una llamada con uno de nuestros especialistas",
                    },
                  }),
                )
              }
              className="btn-premium-cta group relative overflow-hidden px-8 py-4 font-semibold text-base tracking-wide rounded-sm"
            >
              <span className="relative z-10">Agendar llamada gratuita</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full" />
            </button>

            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-tally-sidebar", {
                    detail: {
                      formId: "VLMgEl",
                      formTitle: "Solicitar Cotización",
                    },
                  }),
                )
              }
              className="btn-premium-cta group relative overflow-hidden px-8 py-4 font-semibold text-base tracking-wide rounded-sm"
            >
              <span className="relative z-10">Solicitar cotización</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full" />
            </button>

            <button
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("open-tally-sidebar", {
                    detail: {
                      formId: "jaGe2a",
                      formTitle: "Programar Visita",
                    },
                  }),
                )
              }
              className="btn-premium-cta group relative overflow-hidden px-8 py-4 font-semibold text-base tracking-wide rounded-sm"
            >
              <span className="relative z-10">Programar visita</span>
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full" />
            </button>
          </motion.div>

          {/* Stats Footer del Hero */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-8 border-t border-mega-cyan/20 pt-10"
          >
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-1">
                47
              </p>
              <p className="text-mega-white font-bold text-xs lg:text-sm uppercase tracking-wider mb-1">
                Años de experiencia
              </p>
              <p className="text-mega-silver text-xs font-light">
                Fundados en 1979
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-1">
                11
              </p>
              <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wide mb-1">
                Departamentos
              </p>
              <p className="text-mega-silver text-xs font-light">
                con cobertura
              </p>
            </div>
            <div className="pt-2">
              <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wide mb-2">
                Soluciones a la medida
              </p>
              <p className="text-mega-silver text-xs font-light leading-relaxed">
                Cada operación analizada y diseñada según sus riesgos y presupuesto
              </p>
            </div>
            <div className="pt-2">
              <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wide mb-2">
                Tecnología con propósito
              </p>
              <p className="text-mega-silver text-xs font-light leading-relaxed">
                Herramientas seleccionadas con criterio estratégico, no por tendencia
              </p>
            </div>
            <div className="pt-2">
              <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wide mb-2">
                Selección con IA y oculometría
              </p>
              <p className="text-mega-silver text-xs font-light leading-relaxed">
                Procesos de verificación de confiabilidad potenciados por inteligencia artificial
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
