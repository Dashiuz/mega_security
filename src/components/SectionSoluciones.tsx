import React from "react";

const solutions = [
  {
    id: "soluciones-vigilancia",
    title: "Vigilancia Táctica",
    desc: "Nuestro personal, armado o disuasivo, no solo vigila; se integra a la cultura de su establecimiento para prevenir y neutralizar amenazas.",
    number: "01"
  },
  {
    id: "soluciones-tecnologia",
    title: "Ingeniería Tecnológica",
    desc: "Supervisión milimétrica 24/7. Ecosistemas de videovigilancia, alarmas, domótica y biometría de última generación.",
    number: "02"
  },
  {
    id: "soluciones-escoltas",
    title: "Protección Ejecutiva",
    desc: "Unidad de élite dedicada a la custodia de altos ejecutivos. Operativos con inteligencia de ruta, contramedidas y reacción inmediata.",
    number: "03"
  },
  {
    id: "soluciones-k9",
    title: "Unidad Canina K-9",
    desc: "Nuestros binomios son el estándar de oro. Expertos en detección de explosivos, narcóticos y control operativo en terreno complejo.",
    number: "04"
  },
  {
    id: "soluciones-consultoria",
    title: "Consultoría de Riesgo",
    desc: "Auditamos sus vulnerabilidades y trazamos la matriz de mitigación de riesgos con efectividad financiera y tecnológica.",
    number: "05"
  }
];

export default function SectionSoluciones() {
  return (
    <section id="soluciones" className="h-full w-full relative flex flex-col justify-start md:justify-center pt-32 pb-24 md:py-32 px-6 lg:px-24 bg-[#020205] border-t border-white/5 overflow-y-auto md:overflow-hidden overflow-x-hidden">
      
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mega-green/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-24">
        
        {/* Header Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <span className="text-mega-green font-mono uppercase tracking-[0.3em] text-sm font-bold block">II. Vanguardia Táctica</span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter">
              Arquitectura de<br/>
              <span className="text-zinc-500">Seguridad 360°</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 font-light text-lg">
            Diseñamos anillos de protección inquebrantables, moldeados a las necesidades críticas del sector corporativo, institucional y residencial. Soluciones definitivas, al mejor precio.
          </p>
        </div>

        {/* Minimalist Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {solutions.map((sol) => (
            <div key={sol.id} id={sol.id} className="group relative pr-8">
              {/* Number Accent */}
              <span className="text-[120px] font-black leading-none text-white/[0.02] absolute -top-8 -left-4 -z-10 group-hover:text-mega-green/[0.05] transition-colors duration-500">
                {sol.number}
              </span>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-mega-green font-mono text-sm">{sol.number}.</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{sol.title}</h3>
                </div>
                <p className="text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 min-h-[100px]">
                  {sol.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
