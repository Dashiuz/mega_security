"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function SectionOperativa() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Rotación del arco de 0 a -324 grados (9 pasos de 36 grados)
  const rawRotation = useTransform(scrollYProgress, [0, 1], [0, -324]);
  const smoothRotation = useSpring(rawRotation, { damping: 20, stiffness: 100, mass: 0.5 });

  // Escuchar el progreso para determinar qué índice está activo
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // latest va de 0 a 1. Lo multiplicamos por 9 para obtener índices 0 a 9.
    const index = Math.round(latest * 9);
    setActiveIndex(Math.min(Math.max(index, 0), 9));
  });

  const opItems = [
    { num: "01", title: "Más de 47 años de experiencia exitosa" },
    { num: "02", title: "Soluciones de seguridad diseñadas para su realidad" },
    { num: "03", title: "Sincronía con su ADN corporativo" },
    { num: "04", title: "Seguridad integral en un solo aliado" },
    { num: "05", title: "Protección preventiva, no solo reacción" },
    { num: "06", title: "Experiencia en entornos exigentes y de alta responsabilidad" },
    { num: "07", title: "Tecnología al servicio del control y la eficiencia" },
    { num: "08", title: "Respaldo operativo y compromiso permanente" },
    { num: "09", title: "Capacidad para proteger distintos tipos de operación" },
    { num: "10", title: "Un servicio que aporta valor a su negocio" },
  ];

  return (
    <section
      id="operativa"
      className="w-full bg-mega-black relative z-20 border-t border-white/5"
    >
      {/* ========================================================= */}
      {/* MITAD 1: Dial Circular Interactivo (Scroll-Linked) */}
      {/* ========================================================= */}
      <div ref={containerRef} className="h-[400vh] w-full relative">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-20 md:pt-28">
          
          {/* Cabecera Anclada */}
          <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center z-30 flex-shrink-0 mb-4 md:mb-8 pointer-events-none">
            <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase drop-shadow-md">
              El Modelo Operativo
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.05] drop-shadow-xl">
              LAS 10 RAZONES PARA ELEGIR A<br />
              <span className="text-mega-silver">MEGASEGURIDAD</span>
            </h2>
          </div>

          {/* Mechanism Container (Indicator + Wheel) */}
          <div className="relative flex-1 w-full pointer-events-none mt-4 md:mt-8">
            
            {/* Indicador Superior Flotante (Número Activo + Línea) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-40">
               {/* Círculo Principal Verde Neón */}
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-mega-green flex items-center justify-center shadow-[0_0_40px_rgba(33,221,111,0.6)] relative overflow-hidden border border-white/20">
                  <AnimatePresence mode="wait">
                     <motion.span 
                       key={activeIndex}
                       initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                       animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                       exit={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                       transition={{ duration: 0.4, ease: "easeOut" }}
                       className="absolute text-2xl md:text-3xl font-black text-mega-black"
                     >
                       {opItems[activeIndex].num}
                     </motion.span>
                  </AnimatePresence>
               </div>
               
               {/* Línea conectora */}
               <div className="w-px h-16 md:h-24 bg-gradient-to-b from-mega-green to-mega-cyan/30" />
               
               {/* Bullet (Estrella / Diamante rotado) en la punta de la línea */}
               <div className="w-4 h-4 rotate-45 bg-mega-cyan shadow-[0_0_20px_rgba(0,124,142,1)] -translate-y-1/2" />
            </div>

            {/* La Rueda (Perímetro Rotatorio) */}
            {/* El top se calcula para que el borde del círculo encaje exactamente en el centro del diamante.
                (w-16 = 64px, h-16 = 64px. Total top = 64 + 64 = 128px. 
                md: w-20 = 80px, h-24 = 96px. Total top = 176px.) */}
            <div className="absolute top-[128px] md:top-[176px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-10">
               {/* Borde del arco y brillo interior muy sutil */}
               <div className="absolute inset-0 rounded-full border border-white/10 shadow-[inset_0_100px_100px_rgba(0,124,142,0.03)]" />
               
               <motion.div 
                 className="w-full h-full relative" 
                 style={{ rotate: smoothRotation }}
               >
                  {opItems.map((item, i) => {
                      const angle = i * 36;
                      // Counter-rotate para que los números siempre estén verticales sin importar la rotación de la rueda
                      const counterRotate = useTransform(smoothRotation, (r: any) => -r - angle);
                      
                      return (
                         <div 
                           key={i} 
                           className="absolute inset-0 flex justify-center items-start" 
                           style={{ transform: `rotate(${angle}deg)` }}
                         >
                            {/* Círculo con número en el perímetro de la rueda */}
                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-[#051112] flex items-center justify-center -translate-y-1/2 transition-opacity duration-300 ${activeIndex === i ? 'opacity-0' : 'opacity-100'}`}>
                               <motion.div style={{ rotate: counterRotate }}>
                                  <span className="text-base md:text-xl font-bold text-mega-silver/40">{item.num}</span>
                               </motion.div>
                            </div>
                         </div>
                      )
                  })}
               </motion.div>
            </div>

            {/* Texto Dinámico Estático (Magia Cinematográfica dentro del círculo) */}
            <div className="absolute top-[260px] md:top-[340px] left-1/2 -translate-x-1/2 w-full max-w-3xl px-6 text-center z-30">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 40, filter: "blur(12px)", scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, y: -40, filter: "blur(12px)", scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] drop-shadow-2xl">
                      {opItems[activeIndex].title}
                    </h3>
                  </motion.div>
               </AnimatePresence>
            </div>

          </div>

          {/* Viñeta inferior oscura para suavizar el borde del contenedor de pantalla */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mega-black to-transparent pointer-events-none z-40" />
        </div>
      </div>


    </section>
  );
}
