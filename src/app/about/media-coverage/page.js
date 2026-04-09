import MediaCoverageSection from '@/components/about/MediaCoverageSection';

export const metadata = {
  title: 'Media Coverage | Sun To Human Foundation',
  description: 'Read the latest press releases, news articles, and media coverage about the Sun To Human Foundation.',
};

export default function MediaCoveragePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-800 pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-yellow-100">
        {/* Subtle Sun Glow Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold tracking-wider uppercase mb-6">
            In The News
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Media Coverage
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Discover what news outlets, magazines, and the public are saying about the transformative impact of the Sun To Human Foundation.
          </p>
        </div>
      </section>

      {/* Media Grid Section */}
      <MediaCoverageSection />
    </main>
  );
}