import React from "react";

export default function SectionLegado() {
  return (
    <section id="legado" className="h-full w-full relative flex flex-col justify-start md:justify-center pt-32 pb-24 md:py-32 px-6 lg:px-24 border-t border-white/5 overflow-y-auto md:overflow-hidden overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mega-green/5 via-[#020205] to-[#020205] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left: Giant Typography */}
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <span className="text-mega-green font-mono uppercase tracking-[0.3em] text-sm font-bold">I. Legado Corporativo</span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              Custodiando<br/>
              su <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-green to-white">tranquilidad</span><br/>
              desde 1979.
            </h2>
          </div>
        </div>

        {/* Right: Content Blocks */}
        <div className="space-y-16 lg:pl-12 border-l border-white/10">
          
          <div id="legado-mision" className="space-y-4">
            <h3 className="text-white font-bold text-xl uppercase tracking-widest flex items-center gap-3">
               <span className="w-8 h-[1px] bg-mega-green" /> Nuestra Misión
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Operar como el escudo invisible de su patrimonio. Suministramos estrategias integrales de seguridad mediante talento humano rigurosamente entrenado y tecnología preventiva, siempre bajo los más altos estándares de responsabilidad social.
            </p>
          </div>

          <div id="legado-vision" className="space-y-4">
            <h3 className="text-white font-bold text-xl uppercase tracking-widest flex items-center gap-3">
               <span className="w-8 h-[1px] bg-mega-green" /> Visión 2030
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed font-light">
              Liderar indiscutiblemente la evolución de la seguridad privada en América Latina, redefiniendo los protocolos de confiabilidad, despliegue operativo y ecoeficiencia.
            </p>
          </div>

          <div id="legado-valores" className="pt-8 border-t border-white/5">
            <h3 className="text-mega-green font-mono text-sm uppercase tracking-[0.2em] mb-6">Código de Conducta (Valores)</h3>
            <ul className="space-y-4">
              <li className="group flex items-start gap-4">
                <span className="text-zinc-600 font-mono text-sm mt-1 group-hover:text-mega-green transition-colors">01</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Integridad Absoluta</h4>
                  <p className="text-zinc-500 text-sm">Actuar siempre con la exactitud moral del deber ser.</p>
                </div>
              </li>
              <li className="group flex items-start gap-4">
                <span className="text-zinc-600 font-mono text-sm mt-1 group-hover:text-mega-green transition-colors">02</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Precisión y Respeto</h4>
                  <p className="text-zinc-500 text-sm">Honrar los derechos de la comunidad a la que protegemos.</p>
                </div>
              </li>
              <li className="group flex items-start gap-4">
                <span className="text-zinc-600 font-mono text-sm mt-1 group-hover:text-mega-green transition-colors">03</span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Mejora Continua</h4>
                  <p className="text-zinc-500 text-sm">Optimizar el operativo hoy mejor que ayer, aprendiendo de cada terreno.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
