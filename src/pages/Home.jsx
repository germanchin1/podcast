import React from 'react';

const Home = () => {
  return (
    <main id="main-content">
      {/* Newspaper Style Hero */}
      <section className="py-24 px-6 border-b-4 border-border bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              FISHING <span className="bg-accent text-white px-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">TALES</span>
            </h1>
            <div className="flex items-center justify-center gap-4 py-2 border-y-4 border-border font-black text-xl overflow-hidden whitespace-nowrap">
              <span className="animate-marquee inline-block">EL PODCAST DE PESCA DEFINITIVO — TÉCNICAS — MATERIAL — AVENTURAS — </span>
              <span className="animate-marquee inline-block" aria-hidden="true">EL PODCAST DE PESCA DEFINITIVO — TÉCNICAS — MATERIAL — AVENTURAS — </span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-2xl font-bold leading-tight">
              Sumérgete en el mundo de la pesca deportiva. Historias, trucos y los mejores consejos para tu próxima gran captura.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/episodios" className="brutalist-button text-xl">
                Ir al Podcast
              </a>
              <a href="/episodios#promocion" className="brutalist-button text-xl !bg-white !text-border">
                Ver Trailer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Marquee */}
      <div className="bg-border py-4 overflow-hidden">
        <p className="text-white font-black text-sm text-center uppercase tracking-[0.5em]">
          Accesibilidad Garantizada — Transcripciones Incluidas — Navegación por Teclado
        </p>
      </div>
    </main>
  );
};

export default Home;
