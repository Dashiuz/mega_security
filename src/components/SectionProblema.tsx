"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionProblema() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="problema"
      className="w-full bg-mega-black py-24 md:py-32 relative z-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch mb-16">
          {/* Lado Izquierdo */}
          <div className="flex-1 lg:w-1/2">
            <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
              Nuestra solución
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.05] mb-6">
              EN MEGASEGURIDAD CUMPLIMOS
              <br />
              <span className="text-mega-silver">LO QUE PROMETEMOS</span>
              <br />
            </h2>
            <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed">
              Muchos servicios de seguridad comienzan con una presentación llena
              de promesas, pero terminan en decepción, poca supervisión, escasa
              trazabilidad, personal mal seleccionado, tecnología subutilizada y
              clientes que tienen que insistir para obtener respuestas.
              <br />
              <br />
              En MEGASEGURIDAD tenemos un proceso que funciona y que termina con
              el diseño e implementación de una solución basada en las
              necesidades reales de los clientes ajustada a cualquiera que sea
              su presupuesto.
            </p>
          </div>

          {/* Lado Derecho (Botón en esquina inferior derecha) */}
          <div className="flex-1 lg:w-1/2 flex flex-col justify-end items-end lg:pl-10 mt-10 lg:mt-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-tally-sidebar', { 
                detail: { formId: 'jaGe2a', formTitle: 'Programar Visita' } 
              }))}
              className="group relative overflow-hidden bg-mega-cyan text-mega-white transition-all duration-300 hover:bg-[#005e6b] hover:shadow-[0_0_30px_rgba(0,124,142,0.4)] px-8 py-4 font-medium rounded-sm text-center w-full sm:w-auto"
            >
              Programar una Visita de Diagnóstico
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full" />
            </button>
          </div>
        </div>

        {/* Tarjeta Extendida como Footer de la sección */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <motion.div
            variants={item}
            className="w-full bg-gradient-to-r from-[#007C8E]/10 to-[#21DD6F]/10 p-10 md:p-16 rounded-2xl border border-mega-cyan/30 text-center"
          >
            <p className="text-2xl md:text-3xl font-medium text-white">
              El verdadero valor de la seguridad se demuestra con hechos.
              <br />
              <span className="text-mega-cyan font-light mt-4 block">
                No vendemos promesas — ejecutamos procesos verificables.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
