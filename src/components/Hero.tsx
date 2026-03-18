"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ParticleNetwork3D = dynamic(() => import("./ParticleNetwork3D"), {
  ssr: false,
});

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current || !textRef.current || !logoRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%", // Match pinning duration
          pin: true,
          scrub: 1, // Smooth scrubbing
          anticipatePin: 1,
          // Optional: add markers for debugging if needed
          // markers: true,
        },
      });

      tl.to(
        textRef.current,
        {
          opacity: 0,
          scale: 1.2,
          filter: "blur(15px)",
          duration: 1,
          ease: "power2.in",
        },
        0,
      );

      if (scrollIndicatorRef.current) {
        tl.to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            duration: 0.2,
          },
          0,
        );
      }

      // Force clear props on the logo before starting to ensure clean state
      gsap.set(logoRef.current, { clearProps: "all" });

      tl.fromTo(
        logoRef.current,
        {
          scale: 25,
          opacity: 0,
          yPercent: 0,
          transformOrigin: "50% 50%",
        },
        {
          scale: 1,
          opacity: 1,
          yPercent: -25,
          duration: 3,
          ease: "power2.inOut", // Smoother curve for entering and leaving
        },
        0.4,
      );

      // Keep the logo visible at the end of the timeline
      tl.to(
        logoRef.current,
        {
          opacity: 1, // Explicitly maintain opacity
          duration: 0.1,
        },
        ">",
      );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div
          ref={textRef}
          className="absolute flex flex-col items-center text-center px-4"
        >
          <span className="mb-4 px-4 py-1.5 rounded-full border border-mega-green/30 bg-mega-green/10 text-mega-green text-sm font-medium tracking-widest uppercase shadow-[0_0_20px_rgba(0,255,102,0.15)]">
            Evolución Táctica
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-mega-silver/40 drop-shadow-2xl">
            Seguridad
            <br />
            del Futuro.
          </h1>
        </div>

        <Image
          ref={logoRef}
          src="/mega_seguridad_logo_black_lettering.svg"
          alt="Mega Seguridad"
          width={882}
          height={636}
          className="absolute max-w-[85vw] md:max-w-[65vw] opacity-0"
          priority
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-0 right-0 z-20 flex justify-center pointer-events-none"
      >
        <div className="flex flex-col items-center animate-bounce text-mega-silver/50">
          <span className="text-xs tracking-[0.3em] uppercase mb-3">
            Iniciar Secuencia
          </span>
          <svg
            className="w-5 h-5 opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
