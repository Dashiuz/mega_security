import React from "react";

export default function Footer() {
  return (
    <footer className="bg-mega-black text-mega-silver border-t border-white/5 pt-24 pb-12 relative z-10 w-full font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
        {/* Brand Section */}
        <div className="space-y-6 lg:pr-12">
          <h2 className="text-3xl font-bold font-heading text-white tracking-wider uppercase mb-6">
            MEGASEGURIDAD
          </h2>
          <p className="text-mega-silver/80 leading-relaxed text-sm lg:text-base">
            Empresa familiar de seguridad privada.
            <br />
            Fundada en 1979.
            <br />
            Operación nacional.
          </p>
        </div>

        {/* Contacto Section */}
        <div className="space-y-6">
          <h4 className="text-mega-cyan font-heading tracking-widest uppercase text-xl">
            Contacto
          </h4>
          <ul className="space-y-4 text-sm mt-2">
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                TELÉFONO PRINCIPAL
              </span>
              <a
                href="tel:+573174941075"
                className="text-white hover:text-mega-green transition-colors font-mono"
              >
                317 494 10756
              </a>
            </li>
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                WHATSAPP
              </span>
              <a
                href="https://wa.me/573212133356"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-mega-green transition-colors font-mono"
              >
                321 213 3356
              </a>
            </li>
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                CORREO GENERAL
              </span>
              <a
                href="mailto:correspondencia@megaseguridad.co"
                className="text-white hover:text-mega-green transition-colors uppercase text-xs lg:text-sm"
              >
                CORRESPONDENCIA@MEGASEGURIDAD.CO
              </a>
            </li>
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                CORREO COMERCIAL
              </span>
              <a
                href="mailto:dir.comercial@megaseguridad.co"
                className="text-white hover:text-mega-green transition-colors uppercase text-xs lg:text-sm"
              >
                DIR.COMERCIAL@MEGASEGURIDAD.CO
              </a>
            </li>
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                DIRECCIÓN
              </span>
              <span className="text-white text-sm">
                Cra 7 # 24-86, Torre Colpatria, piso 27, Bogotá
              </span>
            </li>
            <li className="flex items-center gap-3 pt-1">
              <a
                href="https://maps.google.com/?q=Torre+Colpatria+Bogota"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-mega-silver/30 hover:border-mega-green/50 text-mega-silver/80 hover:text-mega-green px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors rounded-sm"
              >
                Google Maps
              </a>
              <a
                href="https://waze.com/ul?q=Torre+Colpatria+Bogota"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-mega-silver/30 hover:border-mega-green/50 text-mega-silver/80 hover:text-mega-green px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors rounded-sm"
              >
                Waze
              </a>
            </li>
            <li className="pt-2">
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                HORARIO
              </span>
              <span className="text-white text-sm">Lunes a Viernes</span>
              <br />
              <span className="text-mega-silver/80 text-sm">
                8:00 am - 12:00 m. / 2:00 p.m. - 5:00 p.m.
              </span>
            </li>
          </ul>
        </div>

        {/* Notificaciones Judiciales Section */}
        <div className="space-y-6">
          <h4 className="text-mega-cyan font-heading tracking-widest uppercase text-xl">
            Notificaciones Judiciales
          </h4>
          <ul className="space-y-4 text-sm mt-2">
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                CORREO
              </span>
              <a
                href="mailto:notificaciones.judiciales@megaseguridad.co"
                className="text-white hover:text-mega-green transition-colors uppercase text-xs lg:text-sm"
              >
                NOTIFICACIONES.JUDICIALES@MEGASEGURIDAD.CO
              </a>
            </li>
            <li>
              <span className="block text-xs text-mega-cyan/60 font-semibold mb-1">
                DIRECCIÓN
              </span>
              <span className="text-white text-sm">
                Cra 9 # 24-38, piso 27, Bogotá
              </span>
            </li>
          </ul>

          <div className="pt-4">
            <h4 className="text-mega-cyan font-heading tracking-widest uppercase text-sm mb-3">
              Tratamiento de Datos
            </h4>
            <p className="text-mega-silver/80 leading-relaxed text-sm">
              Megaseguridad trata los datos personales conforme a la normatividad aplicable. Para consultas de habeas data: correspondencia@megaseguridad.co. Responsable: Johemys Ballesteros.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar with EST. 1979 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-white/5">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-[11px] font-mono text-mega-silver/40">
          <div className="lg:flex-1 text-center lg:text-left">
            <span className="text-mega-silver/60 font-bold tracking-widest uppercase">
              EST. 1979
            </span>
          </div>

          <div className="lg:flex-1 text-center">
            <p>
              © {new Date().getFullYear()} Megaseguridad Ltda. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end gap-6 lg:flex-1">
            <a href="#" className="hover:text-white transition-colors">
              POLÍTICAS DE PRIVACIDAD
            </a>
            <a href="#" className="hover:text-white transition-colors">
              TÉRMINOS DE SERVICIO
            </a>
          </div>
        </div>

        <div className="text-center mt-4">
          <span className="text-[#d4af37] font-bold tracking-widest uppercase text-[11px] font-mono">
            Protegiendo Colombia desde 1979
          </span>
        </div>
      </div>
    </footer>
  );
}
