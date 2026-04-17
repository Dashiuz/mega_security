import React from "react";
import Link from "next/link";
import { fetchAPI, Article, getStrapiMedia } from "@/lib/strapi";
import { MoveLeft } from "lucide-react";
import ClientBlocksRenderer from "@/components/ClientBlocksRenderer";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = await fetchAPI("/articles", {
    filters: { slug: { $eq: slug } },
  });
  const article = articles.data?.[0] as Article;
  
  if (!article) return { title: "Documento No Encontrado" };
  
  return {
    title: `${article.title} | Inteligencia Estructurada`,
    description: article.excerpt,
  };
}

// Genera rutas estáticas para los artículos al compilar (opcional en Next.js App Router, mejora performance)
export async function generateStaticParams() {
  try {
    const res = await fetchAPI("/articles", { fields: ["slug"] });
    return res.data.map((article: Article) => ({
      slug: article.slug,
    }));
  } catch (err) {
    return [];
  }
}

export default async function BlogArticleView({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Obtenemos el artículo específico filtrando por slug
  const res = await fetchAPI("/articles", {
    filters: { slug: { $eq: slug } },
    populate: "*",
  }, { next: { revalidate: 60 } });

  const article = res.data?.[0] as Article;

  if (!article) {
    return (
      <main className="w-full min-h-screen bg-mega-black flex items-center justify-center">
        <h1 className="text-white font-heading text-4xl">EXPEDIENTE REDACTADO O NO ENCONTRADO</h1>
      </main>
    );
  }

  const coverImage = article.coverImage as any;
  const rawUrl = coverImage?.url || coverImage?.data?.attributes?.url || coverImage?.[0]?.url || null;
  const imageUrl = getStrapiMedia(rawUrl);

  return (
    <article className="w-full min-h-screen bg-mega-black pt-32 pb-24 relative z-20 font-sans selection:bg-mega-cyan selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
        
        <Link href="/blog" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-mega-silver hover:text-mega-cyan font-bold mb-12 transition-colors">
          <MoveLeft className="w-4 h-4" />
          Archivo Central
        </Link>

        {/* Encabezado */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-mega-green shadow-[0_0_10px_rgba(33,221,111,0.8)]" />
            <span className="text-sm text-mega-cyan font-mono uppercase tracking-widest">
              DOC-ID: {article.documentId.split("-")[0].toUpperCase() || "001X"} // {new Date(article.publishedAt).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 font-heading leading-tight">
            {article.title}
          </h1>

          <p className="text-xl md:text-2xl text-mega-silver/80 font-light leading-relaxed border-l-2 border-mega-cyan pl-6">
            {article.excerpt}
          </p>
        </header>

        {/* Portada */}
        {imageUrl && (
          <div className="w-full h-64 md:h-[500px] mb-16 relative overflow-hidden rounded-sm border border-white/10">
            <img 
              src={imageUrl} 
              alt={coverImage?.alternativeText || coverImage?.data?.attributes?.alternativeText || "Portada"} 
              className="object-cover w-full h-full opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mega-black to-transparent opacity-60" />
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/50 tracking-widest uppercase">
              // IMAGEN DE INTELIGENCIA ADJUNTA
            </div>
          </div>
        )}

        {/* Contenido Interactivo (Blocks) */}
        <div className="prose prose-invert prose-lg max-w-none text-mega-silver/90 prose-headings:font-heading prose-headings:tracking-wide prose-headings:text-white prose-a:text-mega-cyan hover:prose-a:text-mega-green prose-img:rounded-sm">
          <ClientBlocksRenderer content={article.content} />
        </div>

        {/* Footer del artículo */}
        <footer className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-xs font-mono text-mega-silver/60">
          <p>FIN DEL DOCUMENTO CLASIFICADO.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-mega-cyan transition-colors">↑ VOLVER AL TOPE</a>
          </div>
        </footer>

      </div>
    </article>
  );
}
