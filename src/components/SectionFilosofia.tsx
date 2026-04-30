"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionFilosofia() {
  const [showPlans, setShowPlans] = useState(false);

  useEffect(() => {
    const handleOpenPricing = () => {
      setShowPlans(true);
      const el = document.getElementById("filosofia");
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    };
    window.addEventListener("open-pricing-plans", handleOpenPricing);
    return () => window.removeEventListener("open-pricing-plans", handleOpenPricing);
  }, []);

  const techItems = [
    {
      title: "Analítica avanzada de video con IA",
      desc: "Sistemas que detectan comportamientos anómalos antes de que se conviertan en incidentes. Alertas automáticas y trazabilidad completa de eventos.",
    },
    {
      title: "Monitoreo IP en tiempo real",
      desc: "Cobertura continua con respaldo en la nube. Sin puntos ciegos, sin interrupciones. Su operación visible desde cualquier lugar.",
    },
    {
      title: "Biometría y reconocimiento facial",
      desc: "Control de acceso con validación de identidad en tiempo real. Integrado al proceso de selección y a la supervisión operativa diaria.",
    },
    {
      title: "Sistemas de alertamiento temprano",
      desc: "Detección inteligente que dispara protocolos antes de que el riesgo escale. Tiempo de respuesta drásticamente reducido.",
    },
  ];

  const pricingPlans = [
    {
      sector: "Conjuntos Residenciales",
      desc: "Protección integral para la tranquilidad de las familias y copropietarios.",
      features: ["Vigilancia física 24/7", "Control de acceso electrónico", "Monitoreo perimetral CCTV", "Rondas programadas"]
    },
    {
      sector: "Sector Público",
      desc: "Protocolos estrictos y personal altamente calificado para instalaciones gubernamentales.",
      features: ["Vigilantes con entrenamiento especial", "Supervisión biométrica", "Gestión de multitudes", "Reportes de trazabilidad"]
    },
    {
      sector: "Centros Comerciales",
      desc: "Prevención de pérdidas y gestión de grandes flujos de visitantes.",
      features: ["Vigilancia física encubierta y visible", "Analítica de video (conteo personas)", "Control de parqueaderos", "Respuesta rápida a incidentes"]
    },
    {
      sector: "Sector Privado",
      desc: "Seguridad corporativa diseñada para proteger activos, información y talento humano.",
      features: ["Control de acceso corporativo", "Seguridad de altos ejecutivos", "Monitoreo remoto de oficinas", "Auditorías de seguridad"]
    }
  ];

  return (
    <section
      id="filosofia"
      className="w-full bg-mega-black py-24 md:py-32 relative z-20 border-t border-white/5 overflow-hidden"
    >
      {/* ========================================================= */}
      {/* FILOSOFÍA & PRICING (Interactivo) */}
      {/* ========================================================= */}
      <div className="px-4 md:px-12 lg:px-24 mb-32">
        <AnimatePresence mode="wait">
          {!showPlans ? (
            <motion.div
              key="filosofia"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -100, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white leading-[1.05] mb-8 md:mb-12">
                  LA TECNOLOGÍA
                  <br />
                  <span className="text-mega-silver">SIN CRITERIO ESTRATÉGICO</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">
                    ES RUIDO.
                  </span>
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl text-mega-silver font-light max-w-4xl mx-auto leading-relaxed mb-12">
                  En Megaseguridad, cada solución tecnológica responde a un análisis
                  de riesgo real y se mide por sus resultados.
                </p>

                <button 
                  onClick={() => setShowPlans(true)}
                  className="group relative overflow-hidden bg-mega-cyan text-mega-white transition-all duration-300 hover:bg-[#005e6b] hover:shadow-[0_0_30px_rgba(0,124,142,0.4)] px-10 py-4 font-medium rounded-sm w-full sm:w-auto inline-block text-lg mt-4"
                >
                  Conoce los planes de negocio
                  <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="planes"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-7xl mx-auto"
            >
              {/* Header Pricing */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 px-2">
                 <div>
                   <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-2 uppercase">
                     Diseñados a su medida
                   </p>
                   <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-white">
                     PLANES DE NEGOCIO
                   </h2>
                 </div>
                 <button 
                   onClick={() => setShowPlans(false)}
                   className="mt-6 md:mt-0 flex items-center gap-2 text-mega-silver hover:text-white transition-colors group px-4 py-2 border border-white/10 rounded-full bg-[#051112] hover:bg-white/5"
                 >
                   <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                   </svg>
                   <span className="font-medium uppercase tracking-wider text-sm">Volver a Filosofía</span>
                 </button>
              </div>

              {/* Grid Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                 {pricingPlans.map((plan, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5 }}
                      className="bg-[#051112] border border-white/5 hover:border-mega-cyan/30 rounded-2xl p-8 flex flex-col transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,124,142,0.1)] group"
                    >
                       <div className="mb-6 flex-1">
                         <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-mega-cyan transition-colors">{plan.sector}</h3>
                         <p className="text-mega-silver text-sm leading-relaxed mb-6 h-16">{plan.desc}</p>
                         
                         {/* Modalidades Tags */}
                         <div className="flex flex-wrap gap-2 mb-6">
                            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-sm bg-mega-green/10 text-mega-green border border-mega-green/20">Física</span>
                            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-sm bg-mega-cyan/10 text-mega-cyan border border-mega-cyan/20">Electrónica</span>
                            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-sm bg-white/5 text-white border border-white/10">Integral</span>
                         </div>

                         <ul className="space-y-3 mb-8">
                           {plan.features.map((feat, fidx) => (
                             <li key={fidx} className="flex items-start gap-3">
                               <svg className="w-5 h-5 text-mega-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                               <span className="text-mega-silver text-sm">{feat}</span>
                             </li>
                           ))}
                         </ul>
                       </div>

                       <button 
                          onClick={() => window.dispatchEvent(new CustomEvent('open-tally-sidebar', { detail: { formId: 'rj2DpN', formTitle: 'Agendar Llamada' } }))}
                          className="w-full relative overflow-hidden bg-white/5 hover:bg-mega-cyan text-white py-3.5 rounded-sm font-medium tracking-wide transition-all duration-300 border border-white/10 hover:border-transparent group/btn"
                       >
                          <span className="relative z-10">Agendar Llamada</span>
                          <div className="absolute inset-0 h-full w-0 bg-[#005e6b] transition-all duration-300 ease-out group-hover/btn:w-full" />
                       </button>
                    </motion.div>
                 ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================================================= */}
      {/* TECNOLOGÍA (Antigua Mitad 2 de Operativa) */}
      {/* ========================================================= */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
          Tecnología de última generación
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.05] mb-8">
          NO IMPLEMENTAMOS
          <br />
          TECNOLOGÍA
          <br />
          <span className="text-mega-silver text-opacity-70">
            POR TENDENCIA.
          </span>
        </h2>
        <p className="text-lg md:text-xl text-mega-silver font-light max-w-2xl mb-16 leading-relaxed">
          Cada herramienta se selecciona, configura y calibra con un propósito
          estratégico específico para su operación. Seguridad predictiva, no
          reactiva.
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
              <h3 className="text-xl font-bold text-mega-cyan mb-3">
                {tech.title}
              </h3>
              <p className="text-mega-silver font-light leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
