"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionProblema() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="problema" className="w-full bg-mega-black py-24 md:py-32 relative z-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
          <div className="flex-1">
            <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
              El problema real
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              LA MAYORÍA DE EMPRESAS<br />
              <span className="text-mega-silver">DE SEGURIDAD PROMETEN.</span><br />
              <span className="text-mega-green">POCAS DEMUESTRAN.</span>
            </h2>
            <p className="text-lg md:text-xl text-mega-silver font-light max-w-2xl mb-8 leading-relaxed">
              Antes de hablar de tarifas, estas son las preguntas que todo Gerente debería hacerle a su proveedor de seguridad:
            </p>
            <button className="bg-white/5 border border-white/10 hover:border-mega-cyan/50 text-white hover:text-mega-cyan transition-all duration-300 px-8 py-3.5 font-medium rounded-sm">
              Quiero conocer más
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          <motion.div variants={item} className="bg-[#08181a] p-8 md:p-12 rounded-xl border border-white/5 hover:border-mega-cyan/20 transition-colors">
            <p className="text-xl md:text-2xl font-light text-mega-silver leading-relaxed">
              ¿Su proveedor actual le entrega <strong className="text-white font-medium">reportes con métricas reales</strong> de desempeño?
            </p>
          </motion.div>
          <motion.div variants={item} className="bg-[#08181a] p-8 md:p-12 rounded-xl border border-white/5 hover:border-mega-cyan/20 transition-colors">
            <p className="text-xl md:text-2xl font-light text-mega-silver leading-relaxed">
              ¿Conoce la <strong className="text-white font-medium">trayectoria legal</strong> de cada profesional asignado a su operación?
            </p>
          </motion.div>
          <motion.div variants={item} className="bg-[#08181a] p-8 md:p-12 rounded-xl border border-white/5 hover:border-mega-cyan/20 transition-colors">
            <p className="text-xl md:text-2xl font-light text-mega-silver leading-relaxed">
              ¿Su seguridad <strong className="text-white font-medium">anticipa riesgos</strong> o solo reacciona cuando ya ocurrió algo?
            </p>
          </motion.div>
          <motion.div variants={item} className="bg-[#08181a] p-8 md:p-12 rounded-xl border border-white/5 hover:border-mega-cyan/20 transition-colors">
            <p className="text-xl md:text-2xl font-light text-mega-silver leading-relaxed">
              ¿Tiene una línea directa con un responsable que lo <strong className="text-white font-medium">atienda como prioridad?</strong>
            </p>
          </motion.div>
          <motion.div variants={item} className="md:col-span-2 bg-gradient-to-r from-[#007C8E]/10 to-[#21DD6F]/10 p-8 md:p-12 rounded-xl border border-mega-cyan/30 text-center">
            <p className="text-xl md:text-2xl font-medium text-white">
              Con Megaseguridad, la respuesta a todo lo anterior es sí.<br />
              <span className="text-mega-cyan font-light mt-2 block">No como promesa — como proceso verificable.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
