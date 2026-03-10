import React from 'react';
import { Header, Footer } from './components/Layout';
import PodcastSection from './components/PodcastSection';
import PromotionSection from './components/PromotionSection';

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main>
        {/* Newspaper Style Hero */}
        <section id="inicio" className="py-24 px-6 border-b-4 border-border bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
                LOUD & <span className="bg-accent text-white px-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">CLEAR</span>
              </h2>
              <div className="flex items-center justify-center gap-4 py-2 border-y-4 border-border font-black text-xl overflow-hidden whitespace-nowrap">
                <span className="animate-marquee inline-block">EDICIÓN ESPECIAL — PODCAST 2024 — NOVEDADES — ENTREVISTAS —</span>
                <span className="animate-marquee inline-block">EDICIÓN ESPECIAL — PODCAST 2024 — NOVEDADES — ENTREVISTAS —</span>
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-2xl font-bold leading-tight">
                Rompiendo los esquemas de la comunicación tradicional con una estética visual honesta y brutalista. Escucha, mira, aprende.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#podcast" className="brutalist-button text-xl">
                  Ir al Podcast
                </a>
                <a href="#promocion" className="brutalist-button text-xl !bg-white !text-border">
                  Ver Trailer
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-paper py-8">
          <PodcastSection />
          <PromotionSection />
        </div>

        {/* Accessibility Marquee */}
        <div className="bg-border py-4 overflow-hidden">
          <p className="text-white font-black text-sm text-center uppercase tracking-[0.5em]">
            Accesibilidad Garantizada — Transcripciones Incluidas — Navegación por Teclado
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
