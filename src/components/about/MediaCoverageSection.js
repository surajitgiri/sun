"use client";
import Link from 'next/link';

export default function MediaCoverageSection() {
  const coverages = [
    {
      source: 'National News Daily',
      title: 'The Fast-Growing Wellness Movement in India',
      date: 'March 2026',
      icon: '📰'
    },
    {
      source: 'Health & Wellness Magazine',
      title: 'Disease Reversal Through Navel Hammering',
      date: 'January 2026',
      icon: '🩺'
    },
    {
      source: 'Spiritual Times',
      title: 'An Interview with Pujya Param Aalay Ji',
      date: 'November 2025',
      icon: '🎙️'
    },
    {
      source: 'Global Life Today',
      title: 'Adrishya Breakfast: The 7-Minute Miracle',
      date: 'August 2025',
      icon: '🥗'
    },
    {
      source: 'Yoga & Living',
      title: 'Sun Gratitude: Harnessing Solar Energy for Health',
      date: 'June 2025',
      icon: '☀️'
    },
    {
      source: 'City Daily',
      title: 'Thousands Gather for Morning Healing Camp',
      date: 'April 2025',
      icon: '🏙️'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coverages.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-gray-50 shadow-sm hover:shadow-xl hover:border-yellow-400 transition-all duration-300 group flex flex-col h-full cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-sm text-yellow-600 font-bold tracking-wide uppercase">
                  {item.source}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-6 leading-snug flex-grow" style={{ fontFamily: "'Playfair Display', serif" }}>
                "{item.title}"
              </h4>

              <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                <span className="text-gray-400 text-sm font-medium">Published: {item.date}</span>
                <span className="text-yellow-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Button if used on the Homepage */}
        {/* <div className="text-center mt-16">
          <Link href="/about/media-coverage" className="inline-block border-2 border-gray-200 text-gray-600 py-3 px-8 rounded-full font-bold hover:border-yellow-400 hover:text-yellow-600 transition-colors">
            View All Press Releases
          </Link>
        </div> */}
      </div>
    </section>
  );
}