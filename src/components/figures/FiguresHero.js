import React from 'react';

const FiguresHero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-75"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text [-webkit-background-clip:text] drop-shadow-2xl">
          10+ Million
        </h1>
        <p className="text-2xl md:text-3xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
          Lives Transformed • 500+ Diseases Cured • 25+ Years of Healing
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="bg-white text-gray-900 px-12 py-6 rounded-3xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
            See Impact Stats
          </button>
          <button className="border-2 border-white text-white px-12 py-6 rounded-3xl font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300">
            Read Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default FiguresHero;
