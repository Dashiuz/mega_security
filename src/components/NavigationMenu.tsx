"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link"; // Not used but present

type TabKey = "nosotros" | "servicios" | "cotizacion" | "contacto";

const tabImages: Record<TabKey, string> = {
  nosotros: "/legacy_family_ms.png",
  servicios: "/services_ms.png",
  cotizacion: "/cotizacion_ms.png",
  contacto: "/operations_center2_ms.png",
};

const MorphingMenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-8 right-8 z-[120] w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,102,0.1)] hover:shadow-[0_0_25px_rgba(0,255,102,0.3)] pointer-events-auto cursor-pointer group"
      aria-label="Alternar Menú"
    >
      <div className="relative w-6 h-5 flex flex-col justify-between items-center transition-all duration-300">
        <span 
          className={`w-full h-[2px] bg-white rounded-full transition-transform duration-[250ms] ease-out origin-center group-hover:bg-black ${isOpen ? "translate-y-[9px] rotate-45" : ""}`}
        />
        <span 
          className={`w-full h-[2px] bg-white rounded-full transition-opacity duration-[250ms] ease-out group-hover:bg-black ${isOpen ? "opacity-0" : ""}`}
        />
        <span 
          className={`w-full h-[2px] bg-white rounded-full transition-transform duration-[250ms] ease-out origin-center group-hover:bg-black ${isOpen ? "-translate-y-[9px] -rotate-45" : ""}`}
        />
      </div>
    </button>
  );
};

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("nosotros");

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const tabs: { key: TabKey; label: string }[] = [
    { key: "nosotros", label: "Legado Corporativo" },
    { key: "servicios", label: "Nuestras Soluciones" },
    { key: "cotizacion", label: "Cotización" },
    { key: "contacto", label: "Centro de Mando" },
  ];

  const handleLinkClick = ( e: React.MouseEvent<HTMLAnchorElement>, targetId: string, ) => {
    e.preventDefault();
    setIsOpen(false);

    // Wait for the menu closing animation to finish before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <>
      {/* Botones de navegación (Hamburger y Logo Top Left) retirados temporalmente según revisión */}

      {/* Main Container Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            // FIX CRITICO: 5% menos de ancho en pantallas grandes (95%), centrado, bordes curvos
            className="fixed inset-y-0 lg:inset-y-4 inset-x-0 mx-auto z-[110] w-full lg:w-[95%] flex flex-col lg:flex-row bg-[#020205]/95 backdrop-blur-3xl overflow-hidden lg:rounded-[2.5rem] lg:border lg:border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          >
        {/* LEFT SIDE: Cinematic Image */}
        <div className="lg:w-[40%] xl:w-[50%] h-[30vh] lg:h-full relative overflow-hidden hidden md:block bg-[#020205]">
          <AnimatePresence>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.1, x: "-8%" }}
              animate={{ opacity: 1, scale: 1.1, x: "0%" }}
              exit={{ opacity: 0, scale: 1.1, x: "4%" }}
              transition={{ duration: 3.5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${tabImages[activeTab]}')` }}
            />
          </AnimatePresence>
          {/* Gradient mappings */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#020205]/50 to-[#020205] z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent opacity-90 z-10 pointer-events-none" />
        </div>

            {/* RIGHT SIDE: Navigation Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-[60%] xl:w-[50%] h-full flex flex-col bg-transparent lg:border-l lg:border-zinc-800/50 relative overflow-y-auto"
            >
              <div className="p-8 lg:p-14 lg:pt-20 pt-20 flex-1 flex flex-col relative w-full h-full">
                
                {/* Horizontal Navbar Tabs */}
                <nav className="flex flex-wrap gap-x-8 gap-y-6 mb-16 mt-4 border-b border-white/10 pb-4 w-[90%] lg:w-full">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className="relative text-sm font-bold uppercase tracking-widest transition-colors duration-300"
                    >
                      <span
                        className={
                          activeTab === tab.key
                            ? "text-white"
                            : "text-zinc-500 hover:text-zinc-300"
                        }
                      >
                        {tab.label}
                      </span>
                      {activeTab === tab.key && (
                        <motion.div
                          layoutId="activeTabGlow"
                          className="absolute -bottom-[12px] left-0 right-0 h-[2px] bg-mega-green drop-shadow-[0_0_8px_rgba(0,255,102,0.8)]"
                        />
                      )}
                    </button>
                  ))}
                </nav>

                {/* Tab Anchor Links Display */}
                <div className="flex-1 text-mega-silver font-sans relative overflow-x-hidden min-h-[400px] flex items-center">
                  <AnimatePresence mode="wait">
                    {/* QUÍENES SOMOS */}
                    {activeTab === "nosotros" && (
                      <motion.div
                        key="nosotros"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <ul className="space-y-6 lg:space-y-8 flex flex-col text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter w-full">
                          <li className="w-full flex">
                            <a
                              href="#legado"
                              onClick={(e) => handleLinkClick(e, "legado")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              ¿Quién es Megaseguridad?
                            </a>
                          </li>
                          <li className="w-full flex">
                            <a
                              href="#legado"
                              onClick={(e) => handleLinkClick(e, "legado")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Nuestra Misión
                            </a>
                          </li>
                          <li className="w-full flex">
                            <a
                              href="#legado"
                              onClick={(e) => handleLinkClick(e, "legado")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Nuestra Visión 2030
                            </a>
                          </li>
                          <li className="w-full flex">
                            <a
                              href="#legado"
                              onClick={(e) => handleLinkClick(e, "legado")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Código de Conducta
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                    )}

                    {/* SERVICIOS */}
                    {activeTab === "servicios" && (
                      <motion.div
                        key="servicios"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <ul className="space-y-6 lg:space-y-8 flex flex-col text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter w-full">
                          <li className="w-full flex">
                            <a
                              href="#soluciones"
                              onClick={(e) => handleLinkClick(e, "soluciones")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Vigilancia Táctica
                            </a>
                          </li>
                          <li className="w-full flex">
                            <a
                              href="#soluciones"
                              onClick={(e) => handleLinkClick(e, "soluciones")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Ingeniería Tecnológica
                            </a>
                          </li>
                          <li className="w-full flex">
                            <a
                              href="#soluciones"
                              onClick={(e) => handleLinkClick(e, "soluciones")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Protección Ejecutiva
                            </a>
                          </li>
                          <li className="w-full flex">
                            <a
                              href="#soluciones"
                              onClick={(e) => handleLinkClick(e, "soluciones")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Unidad Canina K-9
                            </a>
                          </li>
                          <li className="w-full flex">
                            <a
                              href="#soluciones"
                              onClick={(e) => handleLinkClick(e, "soluciones")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Consultoría e Inteligencia
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                    )}

                    {/* COTIZACIÓN */}
                    {activeTab === "cotizacion" && (
                      <motion.div
                        key="cotizacion"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <ul className="space-y-6 lg:space-y-8 flex flex-col text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter w-full">
                          <li className="w-full flex">
                            <a
                              href="#cotizacion"
                              onClick={(e) => handleLinkClick(e, "cotizacion")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Solicite su cotización
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                    )}

                    {/* CONTACTO */}
                    {activeTab === "contacto" && (
                      <motion.div
                        key="contacto"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                      >
                        <ul className="space-y-6 lg:space-y-8 flex flex-col text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter w-full">
                          <li className="w-full flex">
                            <a
                              href="#contacto"
                              onClick={(e) => handleLinkClick(e, "contacto")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Nuestra información
                            </a>
                          </li>
                          <li className="w-full flex">
                            <a
                              href="#contacto"
                              onClick={(e) => handleLinkClick(e, "contacto")}
                              className="text-zinc-500 hover:text-white hover:pl-6 transition-all duration-300 w-full group relative flex items-center"
                            >
                              <span className="opacity-0 group-hover:opacity-100 text-mega-green absolute -left-6 transition-opacity">
                                /
                              </span>
                              Déjanos tu opinión
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
