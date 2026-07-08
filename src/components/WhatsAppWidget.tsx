"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const formattedText = `Hola, mi nombre es ${name}. Quisiera realizar la siguiente consulta: ${message}`;
    const waUrl = `https://wa.me/573002934457?text=${encodeURIComponent(formattedText)}`;
    
    window.open(waUrl, "_blank");
    setIsOpen(false);
    setName("");
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[150] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 right-0 w-[330px] sm:w-[360px] bg-[#030F0F] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#051112] border-b border-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-mega-cyan/20 flex items-center justify-center text-mega-green font-bold text-lg border border-mega-cyan/30">
                    M
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-mega-green border-2 border-[#030F0F] rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-heading tracking-wider text-sm uppercase">MEGASEGURIDAD</h4>
                  <p className="text-[11px] text-mega-green font-medium">Asesor Comercial · En línea</p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="text-mega-silver hover:text-white transition-colors p-1"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#020708] flex-1 max-h-[180px] overflow-y-auto">
              <div className="bg-[#051112] text-mega-silver text-xs rounded-xl p-3 max-w-[85%] border border-white/5 relative">
                <div className="absolute top-2 -left-1.5 w-3 h-3 bg-[#051112] border-l border-b border-white/5 rotate-45" />
                <p className="relative z-10 leading-relaxed">
                  ¡Hola! Bienvenido a Megaseguridad. ¿En qué podemos ayudarte hoy? Ingresa tu nombre e inquietud para iniciar el chat de soporte.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 bg-[#030F0F] space-y-3 border-t border-white/5">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-mega-cyan font-bold mb-1">Tu Nombre</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. Juan Pérez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#051112] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-mega-silver/30 focus:outline-none focus:border-mega-green/50 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-mega-cyan font-bold mb-1">Mensaje</label>
                <textarea 
                  required
                  rows={3}
                  placeholder="Cuéntanos brevemente tu necesidad..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#051112] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-mega-silver/30 focus:outline-none focus:border-mega-green/50 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-mega-green hover:bg-[#00818D] text-[#030F0F] hover:text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(33,221,111,0.2)] hover:shadow-[0_0_15px_rgba(0,129,141,0.3)]"
              >
                <img 
                  src="/500px-WhatsApp.svg.webp" 
                  alt="WhatsApp icon" 
                  className="w-4 h-4 object-contain brightness-0" 
                />
                Enviar a WhatsApp
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-mega-green flex items-center justify-center shadow-[0_0_20px_rgba(33,221,111,0.4)] border border-white/20 transition-shadow hover:shadow-[0_0_30px_rgba(33,221,111,0.6)] cursor-pointer"
      >
        <img 
          src="/500px-WhatsApp.svg.webp" 
          alt="WhatsApp logo" 
          className="w-9 h-9 object-contain" 
        />
      </motion.button>
    </div>
  );
}
