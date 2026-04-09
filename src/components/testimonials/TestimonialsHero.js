import React from 'react';

const TestimonialsHero = () => {
  return (
    <section className="relative py-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900/30 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10 animate-pulse"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-3xl border border-white/20 mb-12">
            <span className="text-2xl">⭐</span>
            <span className="text-3xl font-bold">150,000+ Testimonials</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text drop-shadow-2xl leading-tight">
            Voices of
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg">
              Transformation
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-16 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Hear from millions whose lives have been changed forever
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 py-6 px-12 rounded-3xl font-bold text-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
              Watch Stories
            </button>
            <button className="border-4 border-white/30 text-white py-6 px-12 rounded-3xl font-bold text-2xl backdrop-blur-sm hover:border-white/50 hover:bg-white/10 transition-all duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
