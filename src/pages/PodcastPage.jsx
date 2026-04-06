import React from 'react';
import PodcastSection from '../components/PodcastSection';
import PromotionSection from '../components/PromotionSection';

const PodcastPage = () => {
  return (
    <main id="main-content" className="bg-paper py-8">
      <div className="px-6 mb-8 max-w-7xl mx-auto">
        {/* Un único h1 por página */}
        <h1 className="sr-only">Episodios y Promociones</h1>
      </div>
      <PodcastSection />
      <PromotionSection />
    </main>
  );
};

export default PodcastPage;
