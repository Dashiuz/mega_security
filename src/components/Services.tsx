"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Cpu, Activity, Fingerprint, Cctv, Siren } from "lucide-react";

const services = [
  {
    title: "Vigilancia Humana Élite",
    description: "Personal altamente capacitado con protocolos tácticos de nivel corporativo e industrial.",
    icon: ShieldAlert,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Análisis de Riesgo",
    description: "Evaluaciones predictivas basadas en IA y auditorías de vulnerabilidad física estructural.",
    icon: Activity,
    colSpan: "col-span-1",
  },
  {
    title: "Domótica & Monitoreo 360",
    description: "Redes IoT cifradas para un control perimetral y ambiental en tiempo real desde nuestra central.",
    icon: Cpu,
    colSpan: "col-span-1",
  },
  {
    title: "Centros de Monitoreo",
    description: "Operadores 24/7 procesando telemetría de seguridad de alta precisión.",
    icon: Cctv,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Biometría & Control",
    description: "Arquitecturas de acceso con redundancia biométrica y escáneres de flujo.",
    icon: Fingerprint,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Sistemas de Alarma",
    description: "Respuestas acústicas inmediatas enlazadas directo a autoridades competentes.",
    icon: Siren,
    colSpan: "col-span-1",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-mega-black text-mega-silver z-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Columna Izquierda: Sticky Header */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col justify-start pt-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-6 text-white leading-tight">
              Ecosistema de <br className="hidden lg:block"/>
              <span className="text-mega-green">Protección</span>.
            </h2>
            <p className="text-xl text-mega-silver/70 font-light leading-relaxed">
              Integramos el factor humano experto con tecnologías de domótica de última generación para crear anillos de seguridad impenetrables.
            </p>
          </div>

          {/* Columna Derecha: Sticky Cards Track */}
          <div className="lg:w-2/3 flex flex-col gap-6 lg:gap-8 pb-10 lg:pb-32 relative">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="sticky w-full rounded-[2rem] bg-[#030F0F] border border-white/10 p-8 md:p-12 shadow-[0_-15px_40px_rgba(0,0,0,0.6)] transition-colors hover:border-mega-green/50 group"
                style={{ top: `calc(8rem + ${idx * 1.5}rem)` }}
              >
                {/* Efecto Brillante al Hover */}
                <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-green/0 via-mega-green/5 to-transparent pointer-events-none" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  {/* Icono de la tarjeta */}
                  <div className="p-5 rounded-2xl bg-[#08181a] border border-white/5 group-hover:border-mega-green/30 group-hover:bg-mega-green/10 transition-colors shrink-0">
                    <service.icon className="w-10 h-10 md:w-12 md:h-12 text-mega-silver group-hover:text-mega-green transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  {/* Textos */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-lg md:text-xl text-mega-silver/70 leading-relaxed font-light group-hover:text-mega-silver/90 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
