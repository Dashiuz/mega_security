"use client";

import React, { useState, useEffect } from "react";

export default function TallySidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [formId, setFormId] = useState("VLMgEl");
  const [formTitle, setFormTitle] = useState("Solicitar Cotización");

  useEffect(() => {
    const handleOpen = (e: any) => {
      setFormId(e.detail?.formId || "VLMgEl");
      setFormTitle(e.detail?.formTitle || "Solicitar Cotización");
      setIsOpen(true);
    };
    window.addEventListener("open-tally-sidebar", handleOpen);
    return () => window.removeEventListener("open-tally-sidebar", handleOpen);
  }, []);

  // Activa Tally iframes load on open
  useEffect(() => {
    if (isOpen && typeof window !== "undefined" && (window as any).Tally) {
      setTimeout(() => {
        (window as any).Tally.loadEmbeds();
      }, 100);
    }
  }, [isOpen]);

  // Si cerramos, reiniciamos el scroll behavior general just in case
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#030F0F]/80 backdrop-blur-md z-[200] transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] md:w-[500px] bg-mega-black border-l border-white/10 z-[210] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full shadow-[-20px_0_40px_rgba(0,124,142,0.1)]"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h3 className="text-white font-heading text-2xl tracking-widest uppercase">
            {formTitle}
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mega-silver hover:text-mega-cyan transition-colors"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex-1 w-full bg-transparent overflow-y-auto overflow-x-hidden p-0 m-0">
          <iframe
            key={formId}
            data-tally-src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
            loading="lazy"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulario de Diagnóstico"
          ></iframe>
        </div>
      </div>
    </>
  );
}
