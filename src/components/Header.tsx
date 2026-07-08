"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();

    // Si no estamos en el Home, navegamos hacia el Home primero
    if (pathname !== "/") {
      router.push(`/${id === "top" ? "" : "#" + id}`);
      return;
    }

    // Scroll local si ya estamos en el Home
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${scrolled ? "bg-[#030F0F]/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-8 xl:px-24 flex items-center justify-between">
        {/* Logo / Home trigger */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "top")}
          className="text-2xl font-heading text-mega-silver hover:text-white transition-colors cursor-pointer tracking-wider"
        >
          MEGASEGURIDAD
        </a>

        {/* Links de Navegación */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          <a
            href="#megaseguridad"
            onClick={(e) => handleNavClick(e, "megaseguridad")}
            className="text-xs xl:text-sm font-medium text-white uppercase tracking-wider xl:tracking-widest hover:text-mega-green active:text-white focus:text-white transition-colors"
          >
            Megaseguridad
          </a>
          <a
            href="#que-hacemos"
            onClick={(e) => handleNavClick(e, "que-hacemos")}
            className="text-xs xl:text-sm font-medium text-white uppercase tracking-wider xl:tracking-widest hover:text-mega-green active:text-white focus:text-white transition-colors"
          >
            Qué Hacemos
          </a>
          <a
            href="#como-lo-hacemos"
            onClick={(e) => handleNavClick(e, "como-lo-hacemos")}
            className="text-xs xl:text-sm font-medium text-white uppercase tracking-wider xl:tracking-widest hover:text-mega-green active:text-white focus:text-white transition-colors"
          >
            Cómo lo Hacemos
          </a>
          <a
            href="#para-quien-lo-hacemos"
            onClick={(e) => handleNavClick(e, "para-quien-lo-hacemos")}
            className="text-xs xl:text-sm font-medium text-white uppercase tracking-wider xl:tracking-widest hover:text-mega-green active:text-white focus:text-white transition-colors"
          >
            Para Quien lo Hacemos
          </a>
          <a
            href="#por-que-elegirnos"
            onClick={(e) => handleNavClick(e, "por-que-elegirnos")}
            className="text-xs xl:text-sm font-medium text-white uppercase tracking-wider xl:tracking-widest hover:text-mega-green active:text-white focus:text-white transition-colors"
          >
            Por Qué Elegirnos
          </a>
          {/* <a href="/blog" className="text-sm font-medium text-mega-silver/80 uppercase tracking-widest hover:text-mega-green transition-colors">
            Inteligencia
          </a> */}

          <div className="relative inline-block">
            <button
              onClick={() => setIsOptionsOpen(!isOptionsOpen)}
              className="btn-premium-cta px-4 xl:px-6 py-2 xl:py-2.5 text-xs xl:text-sm uppercase tracking-wider xl:tracking-wide rounded-sm flex items-center justify-between gap-2 z-20 relative w-[180px] xl:w-[220px]"
            >
              <span className="flex-1 text-center">
                {isOptionsOpen ? "CERRAR OPCIONES" : "SOLICITUDES"}
              </span>
              <motion.svg
                animate={{ rotate: isOptionsOpen ? 180 : 0 }}
                className="w-4 h-4 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>

            <AnimatePresence>
              {isOptionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full right-0 w-[280px] mt-2 bg-[#030a0b]/90 backdrop-blur-2xl border border-mega-cyan/30 rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-50 flex flex-col"
                >
                  {[
                    {
                      label: "Conocer planes de negocio",
                      action: () =>
                        window.dispatchEvent(
                          new CustomEvent("open-pricing-plans"),
                        ),
                    },
                    {
                      label: "Solicitar cotización",
                      action: () =>
                        window.dispatchEvent(
                          new CustomEvent("open-tally-sidebar", {
                            detail: {
                              formId: "VLMgEl",
                              formTitle: "Solicitar Cotización",
                            },
                          }),
                        ),
                    },
                    {
                      label: "Agendar una llamada",
                      action: () =>
                        window.dispatchEvent(
                          new CustomEvent("open-tally-sidebar", {
                            detail: {
                              formId: "rj2DpN",
                              formTitle:
                                "Agende una llamada con uno de nuestros especialistas",
                            },
                          }),
                        ),
                    },
                    {
                      label: "Programar una visita",
                      action: () =>
                        window.dispatchEvent(
                          new CustomEvent("open-tally-sidebar", {
                            detail: {
                              formId: "jaGe2a",
                              formTitle: "Programar Visita",
                            },
                          }),
                        ),
                    },
                  ].map((option, i) => (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.05, duration: 0.2 }}
                      onClick={() => {
                        option.action();
                        setIsOptionsOpen(false);
                      }}
                      className="text-left px-5 py-4 text-mega-silver hover:text-white hover:bg-mega-cyan/20 border-l-4 border-transparent hover:border-mega-green transition-all duration-300 font-medium text-sm relative group/item overflow-hidden"
                    >
                      <span className="relative z-10">{option.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-mega-cyan/10 to-transparent translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-500" />
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  );
}
