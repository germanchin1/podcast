import React from 'react';

const PromotionSection = () => {
    return (
        <section id="promocion" className="py-20 px-6 bg-accent/10 border-y-4 border-dashed border-border">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 order-2 md:order-1">
                        <div className="brutalist-card bg-white p-2 transform -rotate-1">
                            <video
                                controls
                                poster="/promo-poster.png"
                                className="w-full aspect-video border-2 border-border"
                                aria-label="Resumen Promocional"
                            >
                                <source src="/promo-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    <div className="flex-1 order-1 md:order-2 space-y-6">
                        <div className="inline-block bg-accent text-white font-black px-4 py-1 text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3">
                            ¡MIRA ESTO!
                        </div>
                        <h2 className="text-4xl font-black uppercase leading-[0.9]">Toda la verdad en 60 segundos</h2>
                        <p className="font-bold text-lg leading-snug">Un adelanto exclusivo de lo que encontrarás en nuestro canal principal.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionSection;
