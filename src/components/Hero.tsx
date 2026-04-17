"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const stagger: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" } }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-transparent z-10 font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20 relative z-20">
        <motion.div 
          className="max-w-4xl"
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
          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-white mb-8">
            LA SEGURIDAD<br />
            <span className="text-mega-white">QUE REALMENTE</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">PROTEGE SU NEGOCIO</span>
          </motion.h1>

          {/* Párrafo de apertura */}
          <motion.p variants={item} className="text-lg md:text-xl text-mega-silver max-w-2xl mb-10 leading-relaxed font-light">
            Personal verificado, tecnología integrada y supervisión continua. No es solo un servicio de vigilancia, <strong className="text-mega-white font-medium">es un sistema de protección</strong> que opera incluso cuando nadie lo está mirando.
          </motion.p>

          <motion.div variants={item} className="mb-20">
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-tally-sidebar'))} className="group relative overflow-hidden bg-mega-cyan text-mega-white px-8 py-4 font-semibold text-lg tracking-wide rounded-sm transition-all duration-300 hover:bg-[#005e6b] hover:shadow-[0_0_30px_rgba(0,124,142,0.4)]">
              Agendar llamada gratuita
              <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-[400ms] ease-out group-hover:w-full" />
            </button>
          </motion.div>

          {/* Stats Footer del Hero */}
          <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-mega-cyan/20 pt-10">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-1">45+</p>
              <p className="text-mega-silver text-sm uppercase tracking-wider font-semibold">Años de experiencia</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-1">11</p>
              <p className="text-mega-silver text-sm uppercase tracking-wider font-semibold">Departamentos</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-mega-green tracking-tighter mb-1">6</p>
              <p className="text-mega-silver text-sm uppercase tracking-wider font-semibold">Tipos de licencia habilitantes</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradientes oscuros estructurales en la parte inferior para fusionarse con la siguiente sección SPA */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-mega-black to-transparent pointer-events-none" />
    </section>
  );
}
