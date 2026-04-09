import React from 'react';

const TeamHero = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900/50 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text drop-shadow-2xl">
            Our Dedicated Team
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Experienced healers, organizers, and volunteers working together for global transformation
          </p>
          <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-xl px-8 py-6 rounded-3xl border border-white/20">
            <div className="text-3xl">🌟</div>
            <span className="text-2xl font-bold">500+ Team Members Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
