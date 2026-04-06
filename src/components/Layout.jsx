import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="p-6 border-b-4 border-border bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-4xl font-black uppercase tracking-tighter border-4 border-border px-4 py-2 bg-accent text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                FISHING TALES
            </div>
            <nav aria-label="Navegación principal">
                <ul className="flex gap-4 text-lg font-bold uppercase overflow-x-auto pb-2 md:pb-0">
                    <li><Link to="/" className="hover:bg-accent hover:text-white px-2 transition-colors border-2 border-transparent hover:border-border focus-visible:outline-4 focus-visible:outline-accent outline-offset-4">Inicio</Link></li>
                    <li><Link to="/episodios" className="hover:bg-accent hover:text-white px-2 transition-colors border-2 border-transparent hover:border-border focus-visible:outline-4 focus-visible:outline-accent outline-offset-4">Episodios</Link></li>
                    <li><Link to="/contacto" className="hover:bg-accent hover:text-white px-2 transition-colors border-2 border-transparent hover:border-border focus-visible:outline-4 focus-visible:outline-accent outline-offset-4">Contacto</Link></li>
                    <li><Link to="/informe" className="hover:bg-accent hover:text-white px-2 transition-colors border-2 border-transparent hover:border-border focus-visible:outline-4 focus-visible:outline-accent outline-offset-4 border-l-2 pl-4 ml-2 border-border border-dashed">Informe</Link></li>
                </ul>
            </nav>
        </div>
    </header>
);

const Footer = () => (
    <footer className="p-12 border-t-4 border-border bg-white mt-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-bold uppercase tracking-widest text-sm">
            <span>Fishing Tales</span>
            <span>German Romo Orta</span>
        </div>
    </footer>
);

export { Header, Footer };
