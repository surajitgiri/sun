import React from 'react';

const CentresHero = () => {
  return (
    <section className="relative py-32 bg-[url('/world-map-pattern.svg')] bg-center bg-no-repeat bg-cover opacity-90">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-indigo-900/70 to-emerald-900/80"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text drop-shadow-2xl">
          Healing Centres
        </h1>
        <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-12 py-6 rounded-3xl border border-white/30 mb-12">
          <span className="text-3xl">🌍</span>
          <span className="text-2xl font-bold">50+ Countries • 500+ Locations</span>
        </div>
        <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed">
          Find nearest transformation centre or start one in your community
        </p>
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          <button className="bg-white text-gray-900 py-6 px-12 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all">
            Find Centre Near Me
          </button>
          <button className="border-2 border-white text-white py-6 px-12 rounded-3xl font-bold text-xl backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all">
            Start New Centre
          </button>
        </div>
      </div>
    </section>
  );
};

export default CentresHero;
