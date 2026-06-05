"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionQueHacemos() {

  const services = [
    { title: "Vigilancia Física", desc: "Personal altamente capacitado y seleccionado con estándares biométricos y verificación de más de 100 fuentes. Presencia disuasiva y profesional en cualquier sector económico." },
    { title: "Monitoreo Tecnológico", desc: "Analítica avanzada de video, monitoreo IP en tiempo real y respaldo en la nube. Vigilancia 24/7 con inteligencia artificial aplicada a la detección y alertamiento temprano." },
    { title: "Seguridad Predictiva con IA", desc: "No esperamos que ocurra el incidente. Nuestros sistemas anticipan amenazas mediante reconocimiento facial, validación biométrica y modelos de riesgo adaptativos." },
    { title: "Servicios Caninos", desc: "Binomios especializados para detección, patrullaje y disuasión. Licencia habilitante para operación con medios caninos en todos los ambientes operativos." },
    { title: "Vigilancia con Drones", desc: "Pilotos certificados por la Superintendencia de Vigilancia. Cobertura aérea estratégica para instalaciones de gran extensión, eventos y operaciones de alto riesgo." },
    { title: "Consultoría e Investigación", desc: "Licencia de Consultoría, Asesoría e Investigación de la SVSP. Personal propio acreditado para diagnósticos de vulnerabilidad, auditorías de seguridad y análisis de integridad." },
  ];

  const container: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item: any = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="que-hacemos" className="w-full bg-mega-black py-24 md:py-32 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Columna Izquierda: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col justify-start pt-10">
            <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
              Nuestros servicios
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.05] mb-6">
              SOLUCIONES PARA CADA<br />
              <span className="text-mega-green bg-clip-text">TIPO DE RIESGO</span>
            </h2>
            <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed">
              Cada servicio se configura según el nivel de riesgo, el entorno operativo y los objetivos de su empresa.
            </p>
          </div>

          {/* Columna Derecha: Sticky Cards Track */}
          <div className="lg:w-2/3 flex flex-col gap-6 lg:gap-8 pb-10 lg:pb-32 relative">
            {services.map((svc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="sticky w-full rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-12 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] transition-colors hover:border-mega-cyan/40 group"
                style={{ top: `calc(8rem + ${idx * 2.5}rem)` }}
              >
                {/* Efecto Brillante al Hover */}
                <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-start">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-mega-cyan transition-colors duration-300 tracking-wide">
                    {svc.title}
                  </h3>
                  <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed group-hover:text-mega-silver/90 transition-colors">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
