import React from 'react';

const Header = () => (
    <header className="p-6 border-b-4 border-border bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-4xl font-black uppercase tracking-tighter border-4 border-border px-4 py-2 bg-accent text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                THE WILD PROJECT
            </div>
            <nav aria-label="Navegación principal">
                <ul className="flex gap-4 text-lg font-bold uppercase">
                    <li><a href="#inicio" className="hover:bg-accent hover:text-white px-2 transition-colors border-2 border-transparent hover:border-border">Intro</a></li>
                    <li><a href="#podcast" className="hover:bg-accent hover:text-white px-2 transition-colors border-2 border-transparent hover:border-border">Episodio</a></li>
                    <li><a href="#promocion" className="hover:bg-accent hover:text-white px-2 transition-colors border-2 border-transparent hover:border-border">Promo</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

const Footer = () => (
    <footer className="p-12 border-t-4 border-border bg-white mt-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-bold uppercase tracking-widest text-sm">
            <span>The Wild Project</span>
            <span>German Romo Orta</span>
        </div>
    </footer>
);

export { Header, Footer };
