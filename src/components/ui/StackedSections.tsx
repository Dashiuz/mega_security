"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionLegado from "../oldComponents/SectionLegado";
import SectionSoluciones from "../SectionQueHacemos";
import SectionCotizacion from "../oldComponents/SectionCotizacion";
import SectionContacto from "../oldComponents/SectionContacto";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const sections = [
  { id: "legado", Component: SectionLegado },
  { id: "soluciones", Component: SectionSoluciones },
  { id: "cotizacion", Component: SectionCotizacion },
  { id: "contacto", Component: SectionContacto },
];

export default function StackedSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      for (let i = 0; i < sections.length - 1; i++) {
        const currentCard = cardRefs.current[i];
        const nextCard = cardRefs.current[i + 1];

        if (!currentCard || !nextCard) continue;

        // FIX CRÍTICO: Animamos el contenedor interno (la tarjeta real), no el wrapper pegajoso.
        const innerCard = currentCard.querySelector(".inner-card");

        gsap.to(innerCard, {
          scrollTrigger: {
            trigger: nextCard,
            start: "top bottom", // Inicia cuando la siguiente tarjeta asoma abajo
            end: "top top", // Termina cuando la siguiente tarjeta cubre la pantalla
            scrub: true,
          },
          scale: 0.9, // Se encoge sutilmente hacia el fondo
          y: -30, // Se empuja sutilmente hacia arriba creando verdadera profundidad

          // ELIMINADA LA OPACIDAD Y EL BRILLO: Evita que la tarjeta desaparezca prematuramente
          // y previene el horrible pop-in al hacer scroll-up

          ease: "power2.inOut", // Curva suave: empieza lento, acelera en medio, termina lento
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative w-full">
      {sections.map(({ id, Component }, index) => (
        <div
          key={id}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          // EL WRAPPER STICKY: Ocupa toda la pantalla pero es INVISIBLE. Solo sirve de ancla.
          // Padding Responsive y más gentil
          className="outer-sticky-wrapper sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 md:px-10 py-8 pointer-events-none"
        >
          {/* LA TARJETA VISUAL (inner-card):
            - pointer-events-auto: Recupera la interactividad de botones/links.
            - bg-[#0c0d12]/95 backdrop-blur-3xl: Fuerte contraste y difuminado cristalino.
            - max-w-[1600px] para pantallas gigantes.
            - rounded-3xl: Bordes sutiles y elegantes.
          */}
          <div
            className="inner-card pointer-events-auto relative w-full h-full max-w-[1600px] flex flex-col overflow-hidden bg-[#0c0d12]/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
            style={{ willChange: "transform" }}
          >
            <Component />
          </div>
        </div>
      ))}
    </div>
  );
}
