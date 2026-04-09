import FoundationIntro from "@/components/about/FoundationIntro";

export default function FoundationPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-800 pb-24">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-yellow-100">
                {/* Sun Glow Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-400 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Sun To Human Foundation
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
                        "SUN TO HUMAN is the BRIDGE, where UNIVERSAL LAWS align us with the cosmic rhythm to gain HEALTH, HARMONY, AND HAPPINESS."
                    </p>
                </div>
            </section>

            {/* 2. Main Video / Media Showcase (As per reference docs) */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Video Placeholder Box */}
                    <div className="w-full aspect-video bg-gray-100 rounded-3xl overflow-hidden border-4 border-yellow-400 shadow-2xl relative flex items-center justify-center group cursor-pointer">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                        {/* Play Button */}
                        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white text-4xl pl-2 shadow-xl z-10 group-hover:scale-110 transition-transform">
                            ▶
                        </div>
                    </div>
                    <p className="text-center text-gray-500 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        At Sun To Human Foundation, we provide an environment where knowledge turns into practical, proven, and harmonious development of body, mind, and soul.
                    </p>
                </div>
            </section>

            {/* 3. Foundation Intro Component */}
            <FoundationIntro />

            {/* 4. The Mission */}
            <section className="py-20 bg-gray-50 border-y border-gray-100 mt-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-md mx-auto mb-8 border border-yellow-200">
                        🌍
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Our Global Mission
                    </h2>
                    <p className="text-2xl text-gray-700 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                        "Transforming millions of lives not through words, but through a proven, step-by-step journey from food to the divine—methodical and scientific."
                    </p>
                </div>
            </section>
        </main>
    );
}