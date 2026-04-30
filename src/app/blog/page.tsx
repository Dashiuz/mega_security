import React from "react";
import Link from "next/link";
import { fetchAPI, Article, getStrapiMedia } from "@/lib/strapi";
import { MoveRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inteligencia Corporativa | Mega Security",
  description: "Análisis clasificados y reportes de vulnerabilidad por parte del comando estratégico de Mega Security.",
};

async function getAllArticles() {
  try {
    const res = await fetchAPI("/articles", {
      sort: "publishedAt:desc",
      populate: "*",
    }, { next: { revalidate: 60 } });

    return res.data as Article[];
  } catch (err) {
    console.error("Hub Error: ", err);
    return [];
  }
}

export default async function HubInteligencia() {
  const articles = await getAllArticles();

  return (
    <main className="w-full min-h-screen bg-mega-black pt-32 pb-24 relative z-20 font-sans selection:bg-mega-cyan selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header del Hub */}
        <div className="mb-20 max-w-3xl">
          <Link href="/" className="text-mega-cyan/60 hover:text-mega-cyan uppercase tracking-widest text-xs font-bold mb-6 inline-block transition-colors">
            ← Volver a Operaciones
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-white mb-6 leading-none">
            INTELIGENCIA<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">ESTRATÉGICA</span>
          </h1>
          <p className="text-xl text-mega-silver font-light leading-relaxed">
            Directivas operacionales, análisis de amenazas estructuradas y 
            protocolos de defensa desarrollados por nuestro comando táctico.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => {
            const coverImage = article.coverImage as any;
            const rawUrl = coverImage?.url || coverImage?.data?.attributes?.url || coverImage?.[0]?.url || null;
            const imageUrl = getStrapiMedia(rawUrl);
            // El artículo más reciente (idx 0) toma dos columnas si la pantalla es grande
            const isFeatured = idx === 0;

            return (
              <Link 
                href={`/blog/${article.slug}`} 
                key={article.id}
                className={`group flex flex-col bg-[#051112] border border-white/5 hover:border-mega-cyan/50 hover:bg-[#0a2326] transition-all duration-500 overflow-hidden min-h-[400px] ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Portada */}
                <div className={`w-full relative bg-black overflow-hidden ${isFeatured ? 'h-64 md:h-80' : 'h-48'}`}>
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={article.coverImage?.alternativeText || article.title}
                      className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-mega-cyan/20 font-bold tracking-widest text-xs uppercase bg-[#020708]">
                      RESTRICTED VISUALS
                    </div>
                  )}
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051112] via-transparent to-transparent opacity-90" />
                </div>
                
                {/* Contenido */}
                <div className={`p-8 flex flex-col flex-1 ${isFeatured ? 'md:p-12' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-mega-green shadow-[0_0_8px_rgba(33,221,111,0.8)]" />
                    <span className="text-xs text-mega-silver font-mono uppercase tracking-widest text-mega-cyan/80">
                      {new Date(article.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h2 className={`${isFeatured ? 'text-3xl md:text-5xl mb-4' : 'text-xl mb-3'} font-bold text-white group-hover:text-mega-cyan transition-colors duration-300 font-heading tracking-wide leading-tight`}>
                    {article.title}
                  </h2>
                  <p className={`text-mega-silver/80 font-light leading-relaxed mb-6 flex-1 ${isFeatured ? 'text-lg line-clamp-2 md:line-clamp-3' : 'text-sm line-clamp-3'}`}>
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto inline-flex items-center gap-3 text-sm tracking-widest uppercase text-mega-cyan font-bold group-hover:text-mega-green transition-colors">
                    Desclasificar documento
                    <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </main>
  );
}
