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
    <section className="relative w-full py-32 bg-mega-black text-mega-silver z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
            Ecosistema de <span className="text-mega-green">Protección</span>.
          </h2>
          <p className="text-xl text-mega-silver/70 font-light">
            Integramos el factor humano experto con tecnologías de domótica de última generación para crear anillos de seguridad impenetrables.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:border-mega-green/50 ${service.colSpan}`}
            >
              {/* Green Glow Hover Effect */}
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-green/0 via-mega-green/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/5 group-hover:border-mega-green/30 group-hover:bg-mega-green/10 transition-colors">
                  <service.icon className="w-8 h-8 text-mega-silver group-hover:text-mega-green transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-mega-silver/60 leading-relaxed group-hover:text-mega-silver/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
