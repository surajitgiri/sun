"use client";

export default function FoundationIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div>
            <span className="inline-block py-1 px-4 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold tracking-wider uppercase mb-6">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Transforming Knowledge Into Experience
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Established with the vision of spreading universal truth, the Sun To Human Foundation operates on a simple, methodical, and scientific equation:
            </p>

            {/* The Core Equation */}
            <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl mb-6 shadow-sm">
              <p className="text-xl font-bold text-gray-900 leading-snug">
                Right Navel Hammering + Right Food + Right Meditation = Positive Energy
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              We provide a sanctuary where true seekers can shed their physical ailments and mental burdens through strict scientific and spiritual practices, ultimately connecting with the cosmic energy of the sun. No preaching—only practice.
            </p>
          </div>

          {/* Core Pillars Grid */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-50 shadow-xl hover:border-yellow-400 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Pillars
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl shrink-0">🥗</div>
                <div>
                  <strong className="block text-lg text-gray-900 mb-1">Adrishya Breakfast</strong>
                  <span className="text-gray-600 text-sm leading-relaxed block">Cellular healing through our specially designed 20-item alkaline diet.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl shrink-0">🔵</div>
                <div>
                  <strong className="block text-lg text-gray-900 mb-1">Navel Hammering</strong>
                  <span className="text-gray-600 text-sm leading-relaxed block">Master the world’s fastest oxygen retention technique for vital energy.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl shrink-0">🧠</div>
                <div>
                  <strong className="block text-lg text-gray-900 mb-1">Bhago Nahi Jago</strong>
                  <span className="text-gray-600 text-sm leading-relaxed block">Special meditation techniques to awaken awareness, not escape from life.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl shrink-0">☀️</div>
                <div>
                  <strong className="block text-lg text-gray-900 mb-1">Morning Sun Gratitude</strong>
                  <span className="text-gray-600 text-sm leading-relaxed block">Harnessing solar life-force and establishing a profound connection with nature.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}