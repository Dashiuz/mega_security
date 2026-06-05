"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionParaQuienLoHacemos() {
  const [showPlans, setShowPlans] = useState(false);

  useEffect(() => {
    const handleOpenPricing = () => {
      setShowPlans(true);
      const el = document.getElementById("filosofia");
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };
    window.addEventListener("open-pricing-plans", handleOpenPricing);
    return () =>
      window.removeEventListener("open-pricing-plans", handleOpenPricing);
  }, []);

  const techItems = [
    {
      title: "Analítica avanzada de video con IA",
      desc: "Sistemas que detectan comportamientos anómalos antes de que se conviertan en incidentes. Alertas automáticas y trazabilidad completa de eventos.",
    },
    {
      title: "Monitoreo IP en tiempo real",
      desc: "Cobertura continua con respaldo en la nube. Sin puntos ciegos, sin interrupciones. Su operación visible desde cualquier lugar.",
    },
    {
      title: "Biometría y reconocimiento facial",
      desc: "Control de acceso con validación de identidad en tiempo real. Integrado al proceso de selección y a la supervisión operativa diaria.",
    },
    {
      title: "Sistemas de alertamiento temprano",
      desc: "Detección inteligente que dispara protocolos antes de que el riesgo escale. Tiempo de respuesta drásticamente reducido.",
    },
  ];

  const pricingPlans = [
    {
      sector: "Conjuntos Residenciales",
      desc: "Protección integral para la tranquilidad de las familias y copropietarios.",
      features: [
        "Vigilancia física 24/7",
        "Control de acceso electrónico",
        "Monitoreo perimetral CCTV",
        "Rondas programadas",
      ],
    },
    {
      sector: "Sector Público",
      desc: "Protocolos estrictos y personal altamente calificado para instalaciones gubernamentales.",
      features: [
        "Vigilantes con entrenamiento especial",
        "Supervisión biométrica",
        "Gestión de multitudes",
        "Reportes de trazabilidad",
      ],
    },
    {
      sector: "Centros Comerciales",
      desc: "Prevención de pérdidas y gestión de grandes flujos de visitantes.",
      features: [
        "Vigilancia física encubierta y visible",
        "Analítica de video (conteo personas)",
        "Control de parqueaderos",
        "Respuesta rápida a incidentes",
      ],
    },
    {
      sector: "Sector Privado",
      desc: "Seguridad corporativa diseñada para proteger activos, información y talento humano.",
      features: [
        "Control de acceso corporativo",
        "Seguridad de altos ejecutivos",
        "Monitoreo remoto de oficinas",
        "Auditorías de seguridad",
      ],
    },
  ];

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
      id="para-quien-lo-hacemos"
      className="w-full bg-mega-black py-24 md:py-32 relative z-20 border-t border-white/5 overflow-hidden"
    >
      {/*Bloque #1 introductorio a la seccion*/}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-24 md:pt-32 mb-[10rem]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
            Para quien lo hacemos
          </p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-wider text-white mb-8 uppercase"
          >
            Soluciones de seguridad diseñadas
            <br />
            específicamente para cada tipo de
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">
              operación
            </span>
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-mega-silver font-light leading-relaxed max-w-2xl"
          >
            En Megaseguridad diseñamos soluciones para clientes que necesitan algo más que presencia física: necesitan control real, respuesta oportuna, trazabilidad y una seguridad ajustada a su operación. Nuestro servicio se adapta al tipo de entorno, al nivel de riesgo y a la dinámica de cada cliente, ya sea en espacios residenciales, comerciales, empresariales, institucionales o en proyectos con requerimientos especiales.
          </motion.p>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-8 divide-x divide-mega-cyan/40 border-t border-mega-cyan/20 pt-10"
        >
          {[
            "Empresas",
            "Copropiedades",
            "Comercio",
            "Alto valor",
            "Instituciones",
            "Proyectos especiales",
          ].map((label, index) => (
            <div
              key={label}
              className={`flex items-center justify-center text-center min-h-[72px] md:min-h-[80px]`}
            >
              <p className="text-[1.4rem] font-bold text-white leading-tight">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/*Bloque #2  cuadro detallado*/}
      <div className="w-full bg-transparent py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-mega-cyan/30 hover:-translate-y-1 group">
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-mega-cyan font-sans uppercase tracking-[0.2em] mb-4 block">
                    Corporativo
                  </span>
                  <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading tracking-wider text-white uppercase group-hover:text-mega-cyan transition-colors duration-300">
                    Empresas y corporativos
                  </h3>
                </div>
                <p className="text-base text-mega-silver font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Diseñamos soluciones para empresas que requieren proteger personas,
                  activos, accesos, información, infraestructura y continuidad operativa.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-mega-cyan/30 hover:-translate-y-1 group">
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-mega-cyan font-sans uppercase tracking-[0.2em] mb-4 block">
                    Residencial
                  </span>
                  <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading tracking-wider text-white uppercase group-hover:text-mega-cyan transition-colors duration-300">
                    Copropiedades y edificios residenciales
                  </h3>
                </div>
                <p className="text-base text-mega-silver font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Atendemos edificios y conjuntos que necesitan orden en accesos,
                  mejor control de visitas y monitoreo.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-mega-cyan/30 hover:-translate-y-1 group">
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-mega-cyan font-sans uppercase tracking-[0.2em] mb-4 block">
                    Comercio
                  </span>
                  <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading tracking-wider text-white uppercase group-hover:text-mega-cyan transition-colors duration-300">
                    Comercio y retail
                  </h3>
                </div>
                <p className="text-base text-mega-silver font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Soluciones para operaciones comerciales con prevención de pérdidas,
                  control de accesos y análisis de comportamiento.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-mega-cyan/30 hover:-translate-y-1 group">
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-mega-cyan font-sans uppercase tracking-[0.2em] mb-4 block">
                    Alto valor
                  </span>
                  <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading tracking-wider text-white uppercase group-hover:text-mega-cyan transition-colors duration-300">
                    Concesionarios y operaciones de alto valor
                  </h3>
                </div>
                <p className="text-base text-mega-silver font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Operaciones donde convergen activos de alto valor, control interno
                  y reputación de marca.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-mega-cyan/30 hover:-translate-y-1 group">
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-mega-cyan font-sans uppercase tracking-[0.2em] mb-4 block">
                    Alta exigencia
                  </span>
                  <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading tracking-wider text-white uppercase group-hover:text-mega-cyan transition-colors duration-300">
                    Instituciones y alta exigencia
                  </h3>
                </div>
                <p className="text-base text-mega-silver font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Entornos donde la seguridad exige disciplina, trazabilidad
                  y capacidad operativa avanzada.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-mega-cyan/30 hover:-translate-y-1 group">
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs text-mega-cyan font-sans uppercase tracking-[0.2em] mb-4 block">
                    Proyectos especiales
                  </span>
                  <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading tracking-wider text-white uppercase group-hover:text-mega-cyan transition-colors duration-300">
                    Proyectos especiales y complejos
                  </h3>
                </div>
                <p className="text-base text-mega-silver font-light leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  Integración de vigilancia humana, tecnología, consultoría
                  y control por fases según presupuesto.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/*Bloque #3 lo que importa*/}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 md:mb-32"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Lado Izquierdo */}
            <motion.div variants={item} className="flex-1 lg:w-1/2 flex flex-col items-start text-start max-w-xl">
              <p className="text-mega-cyan font-semibold tracking-wider text-sm md:text-base mb-4 uppercase">
                Lo que importa
              </p>
              <div className="flex flex-col items-center">
                <motion.h2
                  className="text-4xl md:text-6xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-wider text-white mb-8 uppercase"
                >
                  No importa
                  <br />
                  el tipo de
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">
                    operación
                  </span>
                </motion.h2>
              </div>
            </motion.div>

            {/* Lado Derecho */}
            <motion.div variants={item} className="flex-1 lg:w-1/2 flex items-center">
              <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed border-l-2 border-mega-cyan/40 pl-6 lg:pl-8">
                No importa si se trata de una copropiedad, una tienda, una empresa, un concesionario, una entidad educativa o una operación más compleja. Lo importante es entender el riesgo, la dinámica del servicio y el nivel de control que realmente necesita cada cliente.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/*Bloque #4 el resumen*/}
      <div className="w-full py-24 md:py-32 mt-[5rem]">
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
                  Seguridad útil,
                </span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-silver to-mega-white">
                  medible y coherente
                </span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-mega-cyan to-mega-green">
                  con su realidad
                </span>
              </motion.h2>

              {/* Descripción */}
              <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed mb-8 max-w-lg">
                Trabajamos para organizaciones y operaciones que entienden que la seguridad debe ser útil, medible y coherente con su realidad.
              </p>

              {/* CTA */}
              <button className="btn-premium-cta px-8 py-4 rounded-xl text-sm uppercase tracking-wider">
                conozca la solución adecuada para su operación
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
                "Empresas y Corporativos",
                "Copropiedades y Residencial",
                "Comercio y Retail",
                "Concesionarios y Alto Valor",
                "Instituciones de Alta Exigencia",
                "Proyectos Especiales o Complejos",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 px-8 py-6 border-b border-silver/10 last:border-none transition-all duration-300 hover:bg-mega-cyan/5"
                >
                  {/* <span className="text-2xl font-heading font-bold text-mega-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span> */}

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
