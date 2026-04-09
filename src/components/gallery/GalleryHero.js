import React from 'react';

const GalleryHero = ({ title = 'Gallery' }) => {
  return (
    <section className="hero-section py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Discover our collection of photos, videos, and highlights from camps and events.</p>
      </div>
    </section>
  );
};

export default GalleryHero;
