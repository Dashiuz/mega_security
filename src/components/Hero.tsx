"use client";

import React from "react";
import { motion } from "framer-motion";

const bentoCards = [
  {
    title: "47 AÑOS",
    subtitle: "De experiencia",
    desc: "Fundada en 1979",
    image: "/hero_images/collin-8FxJi5wuwKc-unsplash.jpg",
    className: "md:col-span-1 md:row-span-2 min-h-[360px] md:min-h-full",
    titleClass: "text-4xl md:text-5xl mb-1",
    contentClass: "items-start text-left",
  },
  {
    title: "11",
    subtitle: "Departamentos",
    desc: "",
    image: "/hero_images/giovanny-gomez-perez-jMLilxLyjUg-unsplash.jpg",
    className: "col-span-1 min-h-[180px] md:min-h-[200px]",
    titleClass: "text-2xl md:text-3xl",
    contentClass: "items-start text-left",
  },
  {
    title: "SELECCIÓN CON IA Y OCULOMETRÍA",
    subtitle: "",
    desc: "Verificación de confiabilidad potenciada por inteligencia artificial.",
    image: "/hero_images/v2osk-In4XVKhYaiI-unsplash.jpg",
    className: "col-span-1 min-h-[180px] md:min-h-[200px]",
    titleClass: "text-sm md:text-base leading-tight",
    contentClass: "items-start text-left",
  },
  {
    title: "24/7",
    subtitle: "Línea operativa",
    desc: "",
    image: "/hero_images/vagaro-5skDrjF5EMw-unsplash.jpg",
    className: "col-span-1 min-h-[180px] md:min-h-[200px]",
    titleClass: "text-2xl md:text-3xl",
    contentClass: "items-end text-right",
  },
  {
    title: "8",
    subtitle: "Licencias habilitantes",
    desc: "",
    image: "/hero_images/worshae-g10uqy6QCM0-unsplash.jpg",
    className: "col-span-1 min-h-[180px] md:min-h-[200px]",
    titleClass: "text-2xl md:text-3xl",
    contentClass: "items-start text-left",
  },
  {
    title: "SOLUCIONES A LA MEDIDA",
    subtitle: "",
    desc: "Cada operación analizada y diseñada según sus riesgos y presupuestos.",
    image: "/hero_images/chuttersnap-Dty_WdBe_FE-unsplash.jpg",
    className: "col-span-1 min-h-[180px] md:min-h-[200px]",
    titleClass: "text-sm md:text-base",
    contentClass: "items-start text-left",
  },
  {
    title: "+45",
    subtitle: "Sectores atendidos",
    desc: "",
    image: "/hero_images/ella-don-aL-rQE0Ljks-unsplash.jpg",
    className: "col-span-1 min-h-[180px] md:min-h-[200px]",
    titleClass: "text-2xl md:text-3xl",
    contentClass: "items-end text-right",
  },
];

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

          {/* Stats Footer del Hero - Bento Grid Interactivo */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-mega-cyan/20 mt-10 shadow-2xl relative"
          >
            {bentoCards.map((card, idx) => (
              <div
                key={idx}
                className={`relative group overflow-hidden bg-mega-black transition-all duration-300 hover:z-10 cursor-pointer flex flex-col justify-end p-5 md:p-6 hover:shadow-[0_0_30px_rgba(33,221,111,0.3)] ${card.className}`}
              >
                {/* Outline de neon interno sin shift de layout */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 outline outline-2 outline-mega-green -outline-offset-2 z-20" />

                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all duration-300 scale-100 group-hover:scale-105"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030F0F]/90 via-[#030F0F]/30 to-transparent" />
                
                {/* Text Content */}
                <div className={`relative z-10 flex flex-col ${card.contentClass}`}>
                  <h3 className={`font-bold text-white tracking-wider font-heading uppercase drop-shadow-md group-hover:text-mega-green transition-colors duration-300 ${card.titleClass}`}>
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-mega-white font-bold text-[10px] md:text-sm uppercase tracking-wider mb-1 drop-shadow-md">
                      {card.subtitle}
                    </p>
                  )}
                  {card.desc && (
                    <p className="text-mega-silver text-[10px] md:text-xs font-light leading-relaxed drop-shadow-md max-w-[95%]">
                      {card.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
