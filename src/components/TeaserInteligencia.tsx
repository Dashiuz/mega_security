import React from "react";
import Link from "next/link";
import { fetchAPI, Article, getStrapiMedia } from "@/lib/strapi";
import { MoveRight } from "lucide-react";

async function getLatestArticles() {
  try {
    const res = await fetchAPI("/articles", {
      sort: "publishedAt:desc",
      "pagination[limit]": "3",
      populate: "*",
    }, { next: { revalidate: 60 } }); // Revalidation for SSR/ISR

    // Strapi V5 returns data in res.data
    return res.data as Article[];
  } catch (err) {
    console.error("No se pudo cargar el stream de inteligencia", err);
    return [];
  }
}

export default async function TeaserInteligencia() {
  const articles = await getLatestArticles();

  if (!articles || articles.length === 0) {
    // If no articles exist, don't show the section.
    return null;
  }

  return (
    <section className="w-full bg-mega-black py-24 relative z-20 border-t border-white/5 overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header de Sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-white mb-4">
              INTELIGENCIA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mega-cyan to-mega-green">CORPORATIVA</span>
            </h2>
            <p className="text-mega-silver font-light max-w-xl">
              Análisis, reportes desclasificados y metodologías emergentes. 
              Mantente por delante de las vulnerabilidades.
            </p>
          </div>
          
          <Link href="/blog" className="group flex items-center gap-3 text-sm tracking-widest uppercase text-mega-cyan font-bold hover:text-white transition-colors duration-300">
            Abrir Archivos Completos
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => {
            const coverImage = article.coverImage as any;
            const rawUrl = coverImage?.url || coverImage?.data?.attributes?.url || coverImage?.[0]?.url || null;
            const imageUrl = getStrapiMedia(rawUrl);
            
            return (
              <Link 
                href={`/blog/${article.slug}`} 
                key={article.id}
                className="group flex flex-col bg-[#051112] hover:bg-[#0a2326] rounded-xl border border-white/5 hover:border-mega-cyan/40 transition-all duration-500 overflow-hidden min-h-[400px]"
              >
                {/* Portada */}
                <div className="w-full h-48 relative bg-[#020708] overflow-hidden">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={article.coverImage?.alternativeText || article.title}
                      className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-mega-cyan/20 font-bold tracking-widest text-xs uppercase">
                      NO VISUAL DATA
                    </div>
                  )}
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051112] to-transparent" />
                </div>
                
                {/* Cuerpo del Card */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-mega-green" />
                    <span className="text-[10px] text-mega-silver uppercase tracking-widest font-mono">
                      {new Date(article.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-mega-cyan transition-colors duration-300 leading-snug mb-3 font-heading tracking-wide">
                    {article.title}
                  </h3>
                  <p className="text-mega-silver/80 text-sm font-light line-clamp-3 leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="mt-auto text-mega-cyan text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    Acceder <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  );
}
