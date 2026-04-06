import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import PodcastPage from './pages/PodcastPage';
import Contacto from './pages/Contacto';
import Informe from './pages/Informe';

function App() {
  return (
    <div className="min-h-screen bg-paper flex flex-col">
      {/* Skip Link para teclado */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-accent focus:text-white focus:font-bold">
        Saltar al contenido principal
      </a>
      
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodios" element={<PodcastPage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/informe" element={<Informe />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
