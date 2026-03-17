import React, { useState, useEffect, useRef } from 'react';

const PodcastSection = () => {
    const [transcription, setTranscription] = useState([]);
    const videoRef = useRef(null);

    //este trozo para los subtitulos no lo he hecho yo :(

    useEffect(() => {
        fetch('/transcripcion.vtt')
            .then(res => res.text())
            .then(text => {
                const lines = text.split('\n');
                const parsed = [];
                let currentItem = null;

                for (let line of lines) {
                    line = line.trim();
                    if (line.includes('-->')) {
                        const [start] = line.split(' --> ');
                        // Keep only mm:ss if hour is 00, else hh:mm:ss
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

                // Group to avoid too many small boxes (optional, but let's keep it 1-to-1 for now)
                setTranscription(parsed);
            })
            .catch(err => console.error("Error loading transcription:", err));
    }, []);

    return (
        <section id="podcast" className="py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Main Video Area */}
                <div className="md:col-span-2 space-y-8">
                    <div className="brutalist-card p-2 bg-white">
                        <div className="aspect-video bg-black flex items-center justify-center border-4 border-border relative group">
                            <video
                                ref={videoRef}
                                controls
                                className="w-full h-full"
                                aria-label="Transmisión del Podcast"
                            >
                                <source src="/podcast-video.mp4" type="video/mp4" />
                                <track src="/transcripcion.vtt" kind="subtitles" srcLang="es" label="Español" default />
                            </video>
                        </div>
                        <div className="p-4 bg-white border-t-4 border-border">
                            <h2 className="text-3xl font-black uppercase mb-2">Episodio 500: Especial Tertulión</h2>
                            <div className="flex gap-4 text-sm font-bold opacity-60">
                                <span>PODCAST PRINCIPAL</span>
                                <span>THE WILD PROJECT</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Transcription */}
                <div className="space-y-6">
                    <div className="brutalist-card p-6 bg-white h-[600px] flex flex-col">
                        <h3 className="text-xl font-black uppercase mb-4 pb-2 border-b-2 border-border flex justify-between items-center">
                            Transcripción
                            <span className="text-xs bg-accent text-white px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">VTT</span>
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
                                    Cargando transcripción...
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
