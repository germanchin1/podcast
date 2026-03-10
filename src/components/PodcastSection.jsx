import React from 'react';

const PodcastSection = () => {
    return (
        <section id="podcast" className="py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Main Video Area */}
                <div className="md:col-span-2 space-y-8">
                    <div className="brutalist-card p-2 bg-white">
                        <div className="aspect-video bg-black flex items-center justify-center border-4 border-border">
                            <video
                                controls
                                className="w-full h-full"
                                aria-label="Transmisión del Podcast"
                            >
                                <source src="/podcast-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="p-4 bg-white border-t-4 border-border">
                            <h2 className="text-3xl font-black uppercase mb-2">Edición Especial: La Gran Entrevista</h2>
                            <div className="flex gap-4 text-sm font-bold opacity-60">
                                <span>DURACIÓN: 45:00</span>
                                <span>FECHA: 10/03/24</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Transcription */}
                <div className="space-y-6">
                    <div className="brutalist-card p-6 bg-white h-full flex flex-col">
                        <h3 className="text-xl font-black uppercase mb-4 pb-2 border-b-2 border-border flex justify-between items-center">
                            Transcripción
                            <span className="text-xs bg-accent text-white px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">LIVE</span>
                        </h3>
                        <div className="flex-1 overflow-y-auto pr-2 space-y-4 font-bold text-sm leading-tight text-slate-800">
                            <div className="border-l-4 border-accent pl-2">
                                <span className="block text-[10px] text-accent">00:00</span>
                                "Bienvenidos al canal oficial de noticias y tendencias."
                            </div>
                            <div className="border-l-4 border-border pl-2">
                                <span className="block text-[10px] opacity-50">02:30</span>
                                "Hoy analizamos los cambios drásticos en el panorama digital."
                            </div>
                            <div className="border-l-4 border-accent pl-2">
                                <span className="block text-[10px] text-accent">05:15</span>
                                "La estética brutalista vuelve a ser tendencia."
                            </div>
                            <div className="border-l-4 border-border pl-2">
                                <span className="block text-[10px] opacity-50">10:00</span>
                                "Final de la primera parte."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PodcastSection;
