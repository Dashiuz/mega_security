import React from "react";
import { Cpu } from "lucide-react";

export default function SectionCotizacion() {
  return (
    <section id="cotizacion" className="h-full w-full relative flex flex-col justify-start md:justify-center items-center pt-32 pb-24 md:py-32 px-6 lg:px-24 bg-black border-t border-white/5 overflow-y-auto md:overflow-hidden overflow-x-hidden">
      
      {/* HUD Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #00FF66 1px, transparent 1px), linear-gradient(to bottom, #00FF66 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mega-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center flex flex-col items-center gap-12">
        
        {/* Animated AI Icon Container */}
        <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-mega-green/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="w-24 h-24 rounded-full border border-mega-green/50 bg-[#020205] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,102,0.1)] relative z-10">
                <Cpu className="w-10 h-10 text-mega-green" />
            </div>
        </div>

        <div className="space-y-6">
            <span className="text-mega-green font-mono uppercase tracking-[0.3em] text-sm font-bold block">III. Evaluación Algorítmica</span>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter">
                Blindaje<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-700">Predictivo</span>
            </h2>
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
            <p className="text-zinc-400 text-xl md:text-2xl font-light leading-relaxed">
                El primer paso hacia la tranquilidad absoluta. Próximamente habilitaremos nuestra plataforma de cotización automatizada manejada por Inteligencia Artificial para evaluar tu arquitectura de riesgos en tiempo real.
            </p>
            
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-mega-green animate-pulse" />
                <span className="text-zinc-300 font-mono uppercase tracking-widest text-sm">Sistema en Despliegue</span>
            </div>
        </div>

      </div>
    </section>
  );
}
