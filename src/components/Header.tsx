"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
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
    <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-[#030F0F]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        
        {/* Logo / Home trigger */}
        <a href="#top" onClick={(e) => handleNavClick(e, "top")} className="text-2xl font-heading text-mega-silver hover:text-white transition-colors cursor-pointer tracking-wider">
          MEGASEGURIDAD
        </a>

        {/* Links de Navegación */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#problema" onClick={(e) => handleNavClick(e, "problema")} className="text-sm font-medium text-mega-silver/80 uppercase tracking-widest hover:text-mega-cyan transition-colors">
            El problema
          </a>
          <a href="#servicios" onClick={(e) => handleNavClick(e, "servicios")} className="text-sm font-medium text-mega-silver/80 uppercase tracking-widest hover:text-mega-cyan transition-colors">
            Servicios
          </a>
          <a href="#operativa" onClick={(e) => handleNavClick(e, "operativa")} className="text-sm font-medium text-mega-silver/80 uppercase tracking-widest hover:text-mega-cyan transition-colors">
            Por qué Megaseguridad
          </a>
          <a href="#como-trabajamos" onClick={(e) => handleNavClick(e, "como-trabajamos")} className="text-sm font-medium text-mega-silver/80 uppercase tracking-widest hover:text-mega-cyan transition-colors">
            Como Trabajamos
          </a>
          <a href="/blog" className="text-sm font-medium text-mega-silver/80 uppercase tracking-widest hover:text-mega-green transition-colors">
            Inteligencia
          </a>
          
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-tally-sidebar'))} className="bg-[#425C74] hover:bg-[#344E66] border border-[#526D85] text-white px-6 py-2.5 text-sm uppercase tracking-wide rounded-sm transition-colors duration-300">
            Solicitar diagnóstico gratuito
          </button>
        </nav>
      </div>
    </header>
  );
}
