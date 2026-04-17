"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionOperativa() {
  const opItems = [
    { num: "01", title: "Integridad verificada en cada persona", desc: "Verificación con más de 100 fuentes y analítica biométrica con IA. Sin colusión, sin infiltración, sin riesgo." },
    { num: "02", title: "Control medible todos los días", desc: "El servicio no se supervisa una vez al mes. Se mide diariamente con métricas, reportes y evidencia visible." },
    { num: "03", title: "Sintonía con su ADN corporativo", desc: "Nos alineamos a la misión, valores y cultura de cada cliente para crear una identidad operativa compartida." },
    { num: "04", title: "Respaldo legal completo sin excepciones", desc: "Licencias nacionales vigentes, sin sanciones ni multas. 45 años de operación limpia hablan por sí solos." },
  ];

  const techItems = [
    { title: "Analítica avanzada de video con IA", desc: "Sistemas que detectan comportamientos anómalos antes de que se conviertan en incidentes. Alertas automáticas y trazabilidad completa de eventos." },
    { title: "Monitoreo IP en tiempo real", desc: "Cobertura continua con respaldo en la nube. Sin puntos ciegos, sin interrupciones. Su operación visible desde cualquier lugar." },
    { title: "Biometría y reconocimiento facial", desc: "Control de acceso con validación de identidad en tiempo real. Integrado al proceso de selección y a la supervisión operativa diaria." },
    { title: "Sistemas de alertamiento temprano", desc: "Detección inteligente que dispara protocolos antes de que el riesgo escale. Tiempo de respuesta drásticamente reducido." },
  ];

  return (
    <section id="operativa" className="w-full bg-mega-black py-24 md:py-32 relative z-20 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Superior: El modelo operativo */}
        <div className="mb-24">
          <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
            Por qué Megaseguridad
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
            EL TAMAÑO NO ES EL CRITERIO.<br />
            <span className="text-mega-silver">EL MODELO OPERATIVO SÍ LO ES.</span>
          </h2>
          <p className="text-lg md:text-xl text-mega-silver font-light max-w-2xl mb-16 leading-relaxed">
            Nuestro ADN corporativo define cómo operamos cada día. No son valores decorativos: son métricas, procesos y compromisos con evidencia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {opItems.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                <span className="text-5xl lg:text-6xl font-black text-mega-cyan/20 group-hover:text-mega-green transition-colors duration-500 mb-4 tracking-tighter">
                  {item.num}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-mega-silver font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inferior: Tecnología */}
        <div className="pt-24 border-t border-white/5">
          <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
            Tecnología de última generación
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-8">
            NO IMPLEMENTAMOS<br />
            TECNOLOGÍA<br />
            <span className="text-mega-silver text-opacity-70">POR TENDENCIA.</span>
          </h2>
          <p className="text-lg md:text-xl text-mega-silver font-light max-w-2xl mb-16 leading-relaxed">
            Cada herramienta se selecciona, configura y calibra con un propósito estratégico específico para su operación. Seguridad predictiva, no reactiva.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {techItems.map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-bold text-mega-cyan mb-3">{tech.title}</h3>
                <p className="text-mega-silver font-light leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <button className="bg-mega-cyan/10 border border-mega-cyan hover:bg-mega-cyan text-mega-cyan hover:text-white transition-all duration-300 px-8 py-3.5 font-medium rounded-sm">
            Conoce el modelo
          </button>
        </div>

      </div>
    </section>
  );
}
