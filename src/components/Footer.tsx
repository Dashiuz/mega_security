import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-mega-black text-mega-silver border-t border-white/5 pt-24 pb-12 relative z-10 w-full font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand & Logo Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold font-heading text-white tracking-wider uppercase mb-6">
            MEGASEGURIDAD
          </h2>
          <p className="text-mega-silver/80 max-w-sm leading-relaxed text-sm lg:text-base">
            Consolidados desde 1979 como el referente indiscutible en la
            provisión de esquemas de protección premium, ingeniería tecnológica
            y operaciones tácticas a nivel nacional e internacional.
          </p>
          <div className="pt-4 flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-mega-green">
              Operaciones 24/7
            </span>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>
        </div>

        {/* Tactical Services */}
        <div className="space-y-6">
          <h4 className="text-mega-cyan font-heading tracking-widest uppercase text-xl">
            Nuestro Arsenal
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-mega-green transition-colors flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-mega-green rounded-full" />
                Vigilancia Táctica
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-mega-green transition-colors flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-mega-green rounded-full" />
                Ingeniería Tecnológica
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-mega-green transition-colors flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-mega-green rounded-full" />
                Protección Ejecutiva
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-mega-green transition-colors flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-mega-green rounded-full" />
                Unidad Canina K-9
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-mega-green transition-colors flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-mega-green rounded-full" />
                Consultoría e Inteligencia
              </a>
            </li>
          </ul>
        </div>

        {/* Command Center Info */}
        <div className="space-y-6">
          <h4 className="text-mega-cyan font-heading tracking-widest uppercase text-xl">
            Centro de Mando
          </h4>
          <ul className="space-y-4 text-sm mt-2">
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                LÍNEA OPERATIVA
              </span>
              <a
                href="tel:+576014434388"
                className="text-white hover:text-mega-green transition-colors font-mono"
              >
                +57 (601) 443 4388
              </a>
            </li>
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                COMUNICACIÓN CLASIFICADA
              </span>
              <a
                href="mailto:info@megaseguridad.co"
                className="text-white hover:underline transition-all"
              >
                info@megaseguridad.co
              </a>
            </li>
            <li className="pt-2">
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1 pb-2 border-b border-white/5">
                DISPONIBILIDAD
              </span>
              <div className="flex justify-between mt-3">
                <span className="text-mega-silver/80">LUN - VIE</span>
                <span className="text-white font-mono">07:00 - 18:00</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-mega-silver/80">SÁBADO</span>
                <span className="text-white font-mono">07:00 - 12:00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-mega-silver/40">
        <p>
          © {new Date().getFullYear()} MEGASEGURIDAD LTDA. Todos los derechos
          reservados.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">
            POLÍTICAS DE PRIVACIDAD
          </a>
          <a href="#" className="hover:text-white transition-colors">
            TÉRMINOS DE SERVICIO
          </a>
        </div>
      </div>
    </footer>
  );
}
