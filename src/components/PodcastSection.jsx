import React, { useState, useEffect, useRef } from 'react';

const EPISODES = [
    {
        id: 1,
        title: "Episodio 1: Iniciación a la Pesca Deportiva",
        duration: "30:00",
        date: "01/03/24",
        audioSrc: "/ep1.mp3",
        vttSrc: "/ep1.vtt"
    },
    {
        id: 2,
        title: "Episodio 2: Secretos de la Pesca en Alta Mar",
        duration: "45:00",
        date: "15/03/24",
        audioSrc: "/ep2.mp3",
        vttSrc: "/ep2.vtt"
    }
];

const PodcastSection = () => {
    const [transcription, setTranscription] = useState([]);
    const [activeEpisode, setActiveEpisode] = useState(EPISODES[0]);
    const audioRef = useRef(null);

    useEffect(() => {
        setTranscription([]); // Reset before loading
        fetch(activeEpisode.vttSrc)
            .then(res => res.text())
            .then(text => {
                const lines = text.split('\n');
                const parsed = [];
                let currentItem = null;

                for (let line of lines) {
                    line = line.trim();
                    if (line.includes('-->')) {
                        const [start] = line.split(' --> ');
                        let timeLabel = start.split('.')[0];
                        if (timeLabel.startsWith('00:')) timeLabel = timeLabel.substring(3);
                        currentItem = { time: timeLabel, text: '' };
                    } else if (line !== '' && line !== 'WEBVTT' && !/^\d+$/.test(line)) {
                        if (currentItem) {
                            currentItem.text += (currentItem.text ? ' ' : '') + line;
                        }
                    } else if (line === '' && currentItem) {
                        parsed.push(currentItem);
                        currentItem = null;
                    }
                }
                if (currentItem) parsed.push(currentItem);
                
                setTranscription(parsed);
                // Also load the new audio file
                if (audioRef.current) {
                    audioRef.current.load();
                }
            })
            .catch(err => console.error("Error loading transcription:", err));
    }, [activeEpisode]);

    return (
        <section id="podcast" className="py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Main Audio Area */}
                <div className="md:col-span-2 space-y-8">
                    <div className="flex gap-4 mb-4">
                        {EPISODES.map((ep) => (
                            <button 
                                key={ep.id}
                                onClick={() => setActiveEpisode(ep)}
                                className={`brutalist-button text-sm ${activeEpisode.id === ep.id ? '' : '!bg-white !text-border opacity-70'}`}
                            >
                                Episodio {ep.id}
                            </button>
                        ))}
                    </div>

                    <div className="brutalist-card p-2 bg-white">
                        <div className="bg-paper p-8 flex flex-col items-center justify-center border-4 border-border relative group min-h-[200px] shadow-inner">
                            {/* Visual aesthetic for audio player */}
                            <div className="w-full flex justify-between items-end h-16 mb-8 px-4 opacity-20">
                                {[...Array(20)].map((_, i) => (
                                    <div key={i} className="w-2 bg-border" style={{ height: `${Math.random() * 100}%` }}></div>
                                ))}
                            </div>
                            
                            <audio
                                ref={audioRef}
                                controls
                                className="w-full max-w-lg"
                                aria-label="Reproductor de Audio"
                            >
                                <source src={activeEpisode.audioSrc} type="audio/mpeg" />
                                <track src={activeEpisode.vttSrc} kind="subtitles" srcLang="es" label="Español" default />
                            </audio>
                        </div>
                        <div className="p-4 bg-white border-t-4 border-border">
                            <h2 className="text-3xl font-black uppercase mb-2">{activeEpisode.title}</h2>
                            <div className="flex gap-4 text-sm font-bold opacity-60">
                                <span>DURACIÓN: {activeEpisode.duration}</span>
                                <span>FECHA: {activeEpisode.date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Transcription */}
                <div className="space-y-6">
                    <div className="brutalist-card p-6 bg-white h-[600px] flex flex-col">
                        <h3 className="text-xl font-black uppercase mb-4 pb-2 border-b-2 border-border flex justify-between items-center">
                            Transcripción
                            <span className="text-xs bg-accent text-white px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">LIVE</span>
                        </h3>
                        <div className="flex-1 overflow-y-auto pr-2 space-y-4 font-bold text-sm leading-tight text-slate-800">
                            {transcription.length > 0 ? (
                                transcription.map((item, index) => (
                                    <div key={index} className={`border-l-4 pl-2 ${index % 2 === 0 ? 'border-accent' : 'border-border'}`}>
                                        <span className={`block text-[10px] ${index % 2 === 0 ? 'text-accent' : 'opacity-50'}`}>
                                            {item.time}
                                        </span>
                                        "{item.text}"
                                    </div>
                                ))
                            ) : (
                                <div className="text-center opacity-50 py-10">
                                    Cargando transcripción... (o archivo no encontrado)
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PodcastSection;
