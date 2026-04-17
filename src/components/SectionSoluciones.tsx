"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionSoluciones() {
  
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
    <section id="servicios" className="w-full bg-mega-black py-24 md:py-32 relative z-20 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-16">
          <div className="flex-1">
            <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
              Nuestros servicios
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              SOLUCIONES PARA CADA<br />
              <span className="text-mega-green bg-clip-text">TIPO DE RIESGO</span>
            </h2>
          </div>
          <div className="flex-1 lg:text-right max-w-lg">
            <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed">
              Cada servicio se configura según el nivel de riesgo, el entorno operativo y los objetivos de su empresa.
            </p>
          </div>
        </div>

        {/* 6-Block Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((svc, i) => (
            <motion.div 
              key={i}
              variants={item} 
              className="group bg-[#051112] hover:bg-[#0a2326] p-8 md:p-10 rounded-xl border border-white/5 hover:border-mega-cyan/40 transition-all duration-500 cursor-default flex flex-col justify-end min-h-[300px]"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-mega-cyan transition-colors duration-300">{svc.title}</h3>
                <p className="text-mega-silver font-light leading-relaxed text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
