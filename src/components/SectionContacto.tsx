"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SectionContacto() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500); // Dummy submission
  };

  return (
    <section id="contacto" className="h-full w-full relative flex flex-col justify-start md:justify-center pt-32 pb-24 md:py-32 px-6 lg:px-24 bg-[#020205] border-t border-white/5 overflow-y-auto md:overflow-hidden overflow-x-hidden">
      
      {/* Dynamic Grid bg */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1fr_1.2fr] xl:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 relative z-10">
        
        {/* Left Column: Huge Type and Contact info */}
        <div id="contacto-info" className="flex flex-col justify-between h-full space-y-10 xl:space-y-12 pr-4 lg:pr-8">
          
          <div className="space-y-4 xl:space-y-6">
            <span className="text-mega-green font-mono uppercase tracking-[0.3em] text-xs xl:text-sm font-bold block">IV. Enlace Operativo</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black text-white leading-[0.9] uppercase tracking-wider">
              Línea<br/>
              Directa de<br/>
              <span className="text-mega-green">Operaciones</span>
            </h2>
          </div>

          <div className="space-y-8 xl:space-y-12">
            <div>
              <h4 className="text-zinc-500 font-bold tracking-widest text-[10px] xl:text-xs mb-4">CANALES OFICIALES</h4>
              <div className="space-y-3">
                <a href="tel:+576014434388" className="group flex items-center gap-4 text-2xl lg:text-3xl font-light text-white hover:text-mega-green transition-colors">
                  <span className="text-mega-green opacity-0 group-hover:opacity-100 transition-opacity -ml-4 xl:-ml-6 absolute">/</span>
                  +57 (601) 443 4388
                </a>
                <a href="mailto:info@megaseguridad.co" className="group flex items-center gap-4 text-xl lg:text-2xl font-light text-zinc-400 hover:text-white transition-colors">
                  <span className="text-mega-green opacity-0 group-hover:opacity-100 transition-opacity -ml-4 xl:-ml-6 absolute">/</span>
                  info@megaseguridad.co
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 xl:pt-8">
              <h4 className="text-zinc-500 font-bold tracking-widest text-[10px] xl:text-xs mb-4 xl:mb-6">RANGO DE OPERACIONES BASE</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-zinc-400 font-mono text-xs xl:text-sm mb-1">Lunes a Viernes</span>
                  <span className="text-white text-base xl:text-lg tracking-wider">07:00 - 18:00</span>
                </div>
                <div>
                  <span className="block text-zinc-400 font-mono text-xs xl:text-sm mb-1">Sábados</span>
                  <span className="text-white text-base xl:text-lg tracking-wider">07:00 - 12:00</span>
                </div>
              </div>
              <p className="text-[10px] xl:text-xs text-mega-green mt-6 xl:mt-8 font-mono uppercase tracking-widest">
                [ Nuestro monitoreo táctico nunca duerme ]
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Premium Form */}
        <div id="contacto-form" className="relative flex flex-col justify-center mt-12 lg:mt-0">
            
          {/* Form Backdrop Card */}
          <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-3xl -mx-4 lg:-mx-6 xl:-mx-8 pointer-events-none backdrop-blur-3xl hidden md:block" />
          
          <form className="relative z-10 space-y-5 lg:space-y-6 xl:space-y-8" onSubmit={handleSubmit}>
            
            <div className="space-y-2 group">
              <label className="text-[10px] xl:text-xs font-bold text-zinc-500 tracking-[0.2em] group-focus-within:text-mega-green transition-colors">01. IDENTIFICACIÓN OPERATIVA</label>
              <input type="text" required className="w-full bg-transparent border-b border-zinc-700 py-3 xl:py-4 text-white text-lg xl:text-xl placeholder:text-zinc-700 focus:outline-none focus:border-mega-green transition-colors" placeholder="Tu nombre completo" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
              <div className="space-y-2 group">
                <label className="text-[10px] xl:text-xs font-bold text-zinc-500 tracking-[0.2em] group-focus-within:text-mega-green transition-colors">02. CANAL DE RETORNO</label>
                <input type="email" required className="w-full bg-transparent border-b border-zinc-700 py-3 xl:py-4 text-white text-lg xl:text-xl placeholder:text-zinc-700 focus:outline-none focus:border-mega-green transition-colors" placeholder="correo@ejemplo.com" />
              </div>
              <div className="space-y-2 group">
                <label className="text-[10px] xl:text-xs font-bold text-zinc-500 tracking-[0.2em] group-focus-within:text-mega-green transition-colors">03. FRECUENCIA SECUNDARIA</label>
                <input type="tel" className="w-full bg-transparent border-b border-zinc-700 py-3 xl:py-4 text-white text-lg xl:text-xl placeholder:text-zinc-700 focus:outline-none focus:border-mega-green transition-colors" placeholder="Teléfono (+57)" />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-[10px] xl:text-xs font-bold text-zinc-500 tracking-[0.2em] group-focus-within:text-mega-green transition-colors">04. INFORME DE REQUERIMIENTOS</label>
              <textarea required className="w-full bg-transparent border-b border-zinc-700 py-3 xl:py-4 text-white text-lg xl:text-xl placeholder:text-zinc-700 focus:outline-none focus:border-mega-green transition-colors min-h-[100px] xl:min-h-[120px] resize-none" placeholder="Describe cuáles son los requerimientos de seguridad corporativa para tu proyecto..." />
            </div>

            <div className="pt-2 xl:pt-4 flex items-center justify-between group cursor-pointer">
              <button disabled={isSubmitting} className="flex-1 bg-white hover:bg-mega-green text-black font-black uppercase tracking-widest py-4 xl:py-6 px-6 xl:px-8 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between">
                <span className="text-xs xl:text-base">{isSubmitting ? "Transfiriendo Datos..." : "Desplegar Operativo"}</span>
                <ArrowRight className={`w-5 h-5 xl:w-6 xl:h-6 transition-transform duration-300 ${isSubmitting ? "translate-x-4 opacity-0" : "group-hover:translate-x-2"}`} />
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}
