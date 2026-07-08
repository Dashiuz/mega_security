"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function SectionComoLoHacemos() {
  const opItems = [
    { num: "01", title: "Escuchamos", content: "Todo comienza con una conversación seria sobre su necesidad. Conocemos su operación, sus preocupaciones y el objetivo que busca alcanzar. Esta etapa nos permite entender el contexto antes de proponer cualquier servicio." },
    { num: "02", title: "Evaluamos", content: "Realizamos visita técnica, levantamiento de información y revisión de las condiciones reales de la operación. Analizamos accesos, perímetro, infraestructura, personal, procesos, tecnología existente y nivel de riesgo, para identificar qué requiere atención y qué puede optimizarse." },
    { num: "03", title: "Diagnosticamos", content: "Con la información recolectada, nuestros consultores acreditados por la Supervigilancia elaboramos un diagnóstico y estructuramos una solución ajustada a la realidad del cliente. Aquí definimos qué combinación de seguridad humana, tecnología, monitoreo, protocolos y controles genera mayor efectividad y mejor relación costo-beneficio. Megaseguridad parte del análisis profesional de seguridad y del diseño de soluciones a la medida, no de paquetes predeterminados." },
    { num: "04", title: "Proponemos", content: "Entregamos una propuesta técnica y económica seria, concreta y alineada con la necesidad real de la operación. Nuestro objetivo es que el cliente entienda con claridad qué se recomienda, por qué se recomienda, cómo se implementa y qué valor aporta cada componente de la solución." },
    { num: "05", title: "Implementamos", content: "Una vez ajustada según una nueva conversación con el cliente y aprobada la propuesta final, ponemos en marcha la solución con planeación, protocolos, asignación de recursos, instalación cuando aplica, coordinación operativa y ajustes iniciales. La implementación busca que el servicio arranque con orden, continuidad y claridad desde el primer día." },
    { num: "06", title: "Acompañamos", content: "Nuestro trabajo no termina con la puesta en marcha. Hacemos seguimiento, supervisión, atención de novedades, soporte operativo y revisión periódica del servicio para asegurar que la solución mantenga su efectividad en el tiempo. Cuando la operación lo requiere, incorporamos reportes, indicadores y mejora continua para que el cliente tenga visibilidad y control." },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const TOTAL_ITEMS = opItems.length;
  const STEP_ANGLE = 360 / TOTAL_ITEMS;
  const MAX_ROTATION = -STEP_ANGLE * (TOTAL_ITEMS - 1);
  const DIAL_RADIUS = 150;

  // // Rotación del arco de 0 a -324 grados (9 pasos de 36 grados)
  const rawRotation = useTransform(scrollYProgress, [0, 1], [0, MAX_ROTATION]);
  const smoothRotation = useSpring(rawRotation, {
    damping: 20,
    stiffness: 100,
    mass: 3
  });

  // // Escuchar el progreso para determinar qué índice está activo
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.round(latest * (TOTAL_ITEMS - 1));
    setActiveIndex(Math.min(Math.max(index, 0), TOTAL_ITEMS - 1));
  });

  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="como-lo-hacemos"
      className="w-full bg-mega-black relative z-20 border-t border-white/5"
    >
      {/*bloque introductorio a la seccion*/}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
            Nuestro Proceso
          </p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-wider text-white mb-8 uppercase"
          >
            Convertimos el diagnóstico en
            <br />
            una solución de seguridad seria,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">
              funcional y a la medida
            </span>
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-mega-silver font-light leading-relaxed max-w-2xl"
          >
            En Megaseguridad no improvisamos ni presentamos soluciones genéricas. Nuestro proceso parte de entender la realidad de cada cliente, identificar sus riesgos y diseñar una propuesta ajustada a su operación, a sus prioridades y a su presupuesto. La seguridad efectiva no se cotiza de forma estándar: primero se analiza, luego se estructura y finalmente se implementa con seguimiento y control.
          </motion.p>
        </motion.div>
        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-8 border-t border-mega-cyan/20 pt-10"
        >

          <div className="border-r-2 border-mega-cyan/40 pl-10">
            <p className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-1">
              01
            </p>
            <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wider mb-1">
              Escuchamos
            </p>
          </div>
          <div className="border-r-2 border-mega-cyan/40 pl-10">
            <p className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-1">
              02
            </p>
            <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wider mb-1">
              Evaluamos
            </p>
          </div>
          <div className="border-r-2 border-mega-cyan/40 pl-10">
            <p className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-1">
              03
            </p>
            <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wider mb-1">
              Diagnosticamos
            </p>
          </div>
          <div className="border-r-2 border-mega-cyan/40 pl-10">
            <p className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-1">
              04
            </p>
            <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wider mb-1">
              Proponemos
            </p>
          </div>
          <div className="border-r-2 border-mega-cyan/40 pl-10">
            <p className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-1">
              05
            </p>
            <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wider mb-1">
              Implementamos
            </p>
          </div>
          <div className="pl-10">
            <p className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-1">
              06
            </p>
            <p className="text-mega-white font-bold text-xs lg:text-sm tracking-wider mb-1">
              Acompañamos
            </p>
          </div>
        </motion.div>
      </div>
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
            {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white leading-[1.05] drop-shadow-xl">
              LAS 10 RAZONES PARA ELEGIR A<br />
              <span className="text-mega-silver">MEGASEGURIDAD</span>
            </h2> */}
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
                  const angle = i * STEP_ANGLE;

                  return (
                    <div
                      key={i}
                      className="absolute inset-0 flex justify-center items-start"
                      style={{
                        transform: `rotate(${angle}deg)
                                    translateY(-${DIAL_RADIUS}px)
                                  `
                      }}
                    >
                      <motion.div
                        className={`w-14 h-14 md:w-18 md:h-18 rounded-full border border-white/10 bg-[#051112] flex items-center justify-center -translate-y-1/2 transition-opacity duration-300 ${activeIndex === i ? "opacity-0" : "opacity-100"}`}
                        style={{ rotate: useTransform(smoothRotation, (r: any) => -r - angle) }}
                      >
                        <span className="text-base md:text-3xl font-bold text-mega-silver/40">
                          {item.num}
                        </span>
                      </motion.div>
                    </div>
                  );
                })
                }
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
                  <span className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">
                    {opItems[activeIndex].title}
                  </span>
                  <br />
                  <span className="text-lg md:text-base font-sans text-white leading-[1] drop-shadow-2xl">
                    {opItems[activeIndex].content}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Viñeta inferior oscura para suavizar el borde del contenedor de pantalla */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mega-black to-transparent pointer-events-none z-40" />
        </div>
      </div>

      {/*bloque resumen de la operativa*/}
      <div className="w-full py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* ─── Columna Izquierda ─── */}
            <div className="max-w-xl">
              {/* Eyebrow */}
              <span className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase drop-shadow-md">
                En resumen
              </span>

              {/* Headline */}
              <motion.h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-wider text-white mb-8 uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-mega-silver to-mega-white">
                  Escuchamos,
                </span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-silver to-mega-white">
                  Evaluamos,
                </span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-mega-cyan to-mega-green">
                  Diseñamos,
                </span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">
                  Acompañamos
                </span>
              </motion.h2>

              {/* Descripción */}
              <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed mb-8 max-w-lg">
                Así construimos soluciones de seguridad que responden a la realidad de cada cliente y no a esquemas estándar.
              </p>

              {/* CTA */}
              <button
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("open-tally-sidebar", {
                      detail: {
                        formId: "VLMgEl",
                        formTitle: "Solicite un diagnóstico para su operación",
                      },
                    }),
                  )
                }
                className="btn-premium-cta px-8 py-4 rounded-xl text-sm uppercase tracking-wider"
              >
                Solicite un diagnóstico para su operación
              </button>
            </div>

            {/* ─── Columna Derecha ─── */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01] backdrop-blur-md"
            >

              {[
                "Escuchamos",
                "Evaluamos",
                "Diagnosticamos",
                "Proponemos",
                "Implementamos",
                "Acompañamos",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 px-8 py-6 border-b border-silver/10 last:border-none transition-all duration-300 hover:bg-mega-cyan/5"
                >
                  <span className="text-2xl font-heading font-bold text-mega-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base md:text-lg font-medium text-mega-silver">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
