"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionMegaseguridad() {
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

  const licencias = [
    "Licencia de funcionamiento para operación a nivel nacional",
    "Autorización para prestar servicios con y sin arma",
    "Autorización para prestar servicios con medios tecnológicos, incluidos drones",
    "Autorización para prestar servicios con caninos",
    "Autorización para prestar servicio de escoltas a personas y mercancías",
    "Licencia de asesoría, consultoría e investigación",
    "Licencia de uso del espectro electromagnético otorgada por el Ministerio de Comunicaciones",
    "Sucursales aprobadas en 11 departamentos",
  ];

  return (
    <section
      id="megaseguridad"
      className="w-full bg-mega-black py-24 md:py-32 relative z-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* ─── Bloque 1: Intro ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 md:mb-32 max-w-2xl"
        >
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-mega-silver font-light leading-relaxed"
          >
            <motion.span className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-white to-mega-green/100 font-bold font-heading tracking-wider  leading-[1.05] mb-6 bg-clip-text">
              Megaseguridad
            </motion.span>
            &nbsp;es una empresa familiar de seguridad privada, con 47 años de experiencia acompañando operaciones privadas y públicas que exigen seriedad, continuidad y confianza. Nuestra trayectoria se ha construido sobre confianza, cumplimiento y capacidad de adaptación a la realidad de nuestro país, integrando responsablemente el factor humano, la tecnología y el control operativo para una estrategia efectiva de protección.
          </motion.p>
        </motion.div>

        {/* ─── Bloque 2: Nuestra Historia ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 md:mb-32"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Lado Izquierdo */}
            <motion.div variants={item} className="flex-1 lg:w-1/2 flex flex-col items-start text-center max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl ml-[2rem] font-bold font-heading tracking-wider text-white uppercase">
                Nuestra Historia
              </h2>
              <div className="flex flex-col items-center">
                <span className="text-[10rem] md:text-[12rem] lg:text-[14rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-mega-green/60 leading-none block font-heading">
                  1979
                </span>
                <span className="text-sm text-mega-cyan font-sans leading-none uppercase block">
                  Año de fundación
                </span>
              </div>
            </motion.div>

            {/* Lado Derecho */}
            <motion.div variants={item} className="flex-1 lg:w-1/2 flex items-center">
              <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed border-l-2 border-mega-cyan/40 pl-6 lg:pl-8">
                Desde 1979, Megaseguridad ha evolucionado de manera sostenida para responder a las nuevas exigencias del sector y a los cambios en los riesgos que enfrentan las organizaciones. Hoy somos una compañía con experiencia en distintos entornos y con una visión moderna de la seguridad: una visión que entiende que proteger no es solo vigilar, sino también prevenir, controlar, verificar y generar confianza.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Bloque 3: Nuestro Equipo ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 md:mb-32"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              {/* <span className="text-mega-cyan font-mono uppercase tracking-[0.3em] text-xs font-bold block mb-2">Estructura Corporativa</span> */}
              <motion.h2
                variants={item}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-wider text-white uppercase"
              >
                Nuestro Equipo
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Equipo Administrativo */}
            <motion.div
              variants={item}
              className="relative overflow-hidden rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-mega-cyan/30 group"
            >
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                {/* <span className="text-xs text-mega-cyan font-mono uppercase tracking-[0.22em] mb-4 block">
                  Criterio & Estrategia
                </span> */}
                <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-wider text-white uppercase mb-6 group-hover:text-mega-cyan transition-colors duration-300">
                  Equipo Administrativo
                </h3>
                <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed mb-6">
                  Nuestro equipo administrativo está conformado por profesionales especializados, con amplia experiencia en seguridad y en la gestión de operaciones que requieren criterio, experiencia y capacidad de respuesta.
                </p>
                <p className="text-lg md:text-xl text-mega-silver/70 font-light leading-relaxed">
                  Mantenemos una formación constante y una actualización permanente frente a los cambios tecnológicos, para incorporar de manera útil y estratégica las herramientas que fortalecen la protección, el control y la trazabilidad del servicio.
                </p>
              </div>
            </motion.div>

            {/* Equipo Operativo */}
            <motion.div
              variants={item}
              className="relative overflow-hidden rounded-[2rem] bg-[#051112] border border-white/5 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-mega-cyan/30 group"
            >
              <div className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-cyan/0 via-mega-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                {/* <span className="text-xs text-mega-cyan font-mono uppercase tracking-[0.22em] mb-4 block">
                  Selección & Confianza
                </span> */}
                <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-wider text-white uppercase mb-6 group-hover:text-mega-cyan transition-colors duration-300">
                  Equipo Operativo
                </h3>
                <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed mb-6">
                  Nuestro equipo operativo es seleccionado de manera responsable, considerando la confiabilidad como el primer factor de evaluación.
                </p>
                <p className="text-lg md:text-xl text-mega-silver/70 font-light leading-relaxed">
                  Contamos con pruebas de oculometría impulsada por inteligencia artificial para nuestros procesos de selección y seguimiento, aunado a diversos métodos de verificación de idoneidad.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Bloque 4: Filosofía de Servicio ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 md:mb-32"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            {/* Lado Izquierdo */}
            <motion.div variants={item} className="flex-1 lg:w-1/2 flex flex-col justify-between">
              <div>
                {/* <span className="text-mega-cyan font-mono uppercase tracking-[0.3em] text-xs font-bold block mb-2">Compromiso Real</span> */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-wider text-white uppercase">
                  Filosofía de Servicio
                </h2>
              </div>
              <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed border-l-4 border-mega-green pl-6 py-2 my-4">
                &ldquo;El servicio no es discurso; se traduce en compromiso, control, seguimiento y atención responsable.&rdquo;
              </p>
            </motion.div>

            {/* Lado Derecho */}
            <motion.div variants={item} className="flex-1 lg:w-1/2 flex flex-col justify-center">
              <p className="text-lg md:text-xl text-mega-silver font-light leading-relaxed mb-4">
                Nuestra filosofía de servicio parte de un principio claro: escuchar, entender y responder con soluciones serias, útiles y alineadas con la realidad de cada operación.
              </p>
              <p className="text-lg md:text-xl text-mega-silver/70 font-light leading-relaxed">
                Esta lógica de trato cercano, atención personalizada y seguridad a la medida se configura como nuestra filosofía de servicio.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Bloque 5: Respaldo Operativo ─── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
            <div>
              {/* <span className="text-mega-cyan font-mono uppercase tracking-[0.3em] text-xs font-bold block mb-2">Respaldo Institucional</span> */}
              <motion.h2
                variants={item}
                className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-wider text-white uppercase"
              >
                Respaldo Operativo
              </motion.h2>
            </div>
          </div>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-mega-silver font-light leading-relaxed mb-12 max-w-4xl"
          >
            Megaseguridad opera con respaldo legal y operativo a nivel nacional para prestar servicios en distintas modalidades, con cobertura y capacidades que permiten atender necesidades diversas con solidez y formalidad. En la documentación institucional se destacan:
          </motion.p>

          {/* Grid de Licencias Premium */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {licencias.map((licencia, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-[#051112] border border-white/5 p-6 md:p-8 transition-all duration-300 hover:border-mega-cyan/30 hover:-translate-y-1 group"
              >
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-mega-cyan/60 group-hover:bg-mega-cyan group-hover:scale-125 transition-all duration-300" />
                <span className="text-xs font-sans text-mega-cyan/40 group-hover:text-mega-cyan/70 transition-colors block mb-4">
                  0{index + 1}
                </span>
                <p className="text-base text-mega-silver/90 font-light leading-relaxed group-hover:text-white transition-colors">
                  {licencia}
                </p>
              </div>
            ))}
          </motion.div>

          {/* 11 Departamentos Premium Stat */}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-3xl bg-[#051112] border border-white/5 p-8 md:p-12 max-w-2xl mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-mega-green/30 transition-all duration-300"
          >
            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 will-change-transform bg-gradient-to-br from-mega-green/0 via-mega-green/5 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
              <span className="text-7xl md:text-8xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-br from-white to-mega-green leading-none">
                11
              </span>
              <div className="text-center sm:text-left">
                <span className="text-2xl md:text-3xl font-bold text-white tracking-wider uppercase block font-heading">
                  Departamentos
                </span>
                <span className="text-base text-mega-silver font-light mt-1 block">
                  Sucursales totalmente aprobadas y operativas a nivel nacional.
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

