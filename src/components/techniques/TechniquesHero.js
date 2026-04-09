import React from 'react';

const TechniquesHero = ({ title = 'Techniques' }) => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">{title}</h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow-lg">Learn powerful transformation techniques that have changed millions of lives.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-600 px-12 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
            Start Learning
          </button>
          <button className="border-2 border-white text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechniquesHero;
