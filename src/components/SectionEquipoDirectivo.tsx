"use client";

import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Nombre - Apellido",
    role: "Cargo Directivo",
    photo: "/human_talent/andre-styles-pq9npYMirk8-unsplash.jpg",
  },
  {
    name: "Nombre - Apellido",
    role: "Cargo Directivo",
    photo: "/human_talent/gruescu-ovidiu-fWjqkOnfkgE-unsplash.jpg",
  },
  {
    name: "Nombre - Apellido",
    role: "Cargo Directivo",
    photo: "/human_talent/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
  },
  {
    name: "Nombre - Apellido",
    role: "Cargo Directivo",
    photo: "/human_talent/marcus-bellamy-_mvMeuUuFWA-unsplash.jpg",
  },
  {
    name: "Nombre - Apellido",
    role: "Cargo Directivo",
    photo: null,
  },
];

export default function SectionEquipoDirectivo() {
  return (
    <section className="relative w-full py-24 z-10 px-6 md:px-12 bg-transparent border-t border-white/5">
      <div className="max-w-[1920px] mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-mega-silver tracking-[0.2em] text-sm mb-4 block">
            Equipo directivo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white uppercase leading-[1.05] font-heading">
            LAS PERSONAS
            <br />
            DETRÁS DE MEGASEGURIDAD
          </h2>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Box */}
              <div className="w-full aspect-square relative overflow-hidden mb-4 bg-[#051112]">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-white to-[#a3a3a3] grayscale group-hover:grayscale-0 transition-all duration-500" />
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <h3 className="text-white font-bold text-lg xl:text-xl tracking-wide group-hover:text-mega-green transition-colors duration-300 font-heading">
                  {member.name}
                </h3>
                <p className="text-mega-silver font-light text-sm mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
