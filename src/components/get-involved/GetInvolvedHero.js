import React from 'react';

const GetInvolvedHero = () => {
  return (
    <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-amber-900 via-stone-900 to-stone-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-orange-900/50 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-amber-100 to-amber-500 bg-clip-text text-transparent drop-shadow-2xl">
          Get Involved
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-stone-300 leading-relaxed">
          Join our mission to transform millions of lives through healing and spiritual awakening
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-stone-800/40 backdrop-blur-xl p-8 rounded-3xl border border-stone-700/50 hover:bg-stone-800/60 hover:border-amber-500/30 transition-all cursor-default">
            <div className="text-4xl mb-4">🧘</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-50">Volunteer</h3>
            <p className="text-stone-400">Share healing with communities</p>
          </div>
          <div className="bg-stone-800/40 backdrop-blur-xl p-8 rounded-3xl border border-stone-700/50 hover:bg-stone-800/60 hover:border-amber-500/30 transition-all cursor-default">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-50">Donate</h3>
            <p className="text-stone-400">Fund free healing camps</p>
          </div>
          <div className="bg-stone-800/40 backdrop-blur-xl p-8 rounded-3xl border border-stone-700/50 hover:bg-stone-800/60 hover:border-amber-500/30 transition-all cursor-default">
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-2xl font-bold mb-4 text-amber-50">Spread Word</h3>
            <p className="text-stone-400">Share transformation stories</p>
          </div>
        </div>

        <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 py-6 px-16 rounded-full font-bold text-2xl shadow-[0_8px_20px_rgba(251,191,36,0.2)] hover:shadow-[0_8px_25px_rgba(251,191,36,0.4)] hover:-translate-y-1 transition-all duration-300">
          Join Movement
        </button>
      </div>
    </section>
  );
};

export default GetInvolvedHero;