import ParamMitrasSection from '@/components/about/ParamMitrasSection';
import Link from 'next/link';

export const metadata = {
    title: 'Our Param Mitras | Sun To Human Foundation',
};

export default function ParamMitrasPage() {
    const coreValues = [
        {
            title: "1. Seva Before The Self",
            desc: "We put the needs of our seekers before our own. We put service to the community before anything else. We never make decisions based on fame or benefit, but strictly on how much impact we’ll create in the lives of our community."
        },
        {
            title: "2. Pravachan Nahi, Prayog",
            desc: "Our knowledge is communicated through action. We consciously avoid complex jargon and overly technical theories. Whether it's our camps, videos, or literature, we always strive for simplicity and practical application."
        },
        {
            title: "3. Profoundness Of Wisdom",
            desc: "Our teachings are deeply profound, rooted in the cosmic rhythm and the direct realization of Pujya Param Aalay Ji. We do not share anything based on personal opinions or temporary trends."
        },
        {
            title: "4. Practicality Of Teachings",
            desc: "We don't just share 'what' to do. We always share the 'how'. Through Navel Hammering and the Adrishya Breakfast, we lay out a detailed path to follow the teachings in one's everyday life."
        },
        {
            title: "5. Under Promising, Over Delivering",
            desc: "We strive to over-deliver in everything we do. Whether we organize a morning city camp or an 11-day residential retreat, it is done with the highest possible discipline and pure energy."
        },
        {
            title: "6. A Master Who Creates Masters",
            desc: "We help our community break free from dependencies. We don't want followers; we empower seekers to stand on their own feet. We teach them the exact science of the body and mind so they become their own guide."
        },
        {
            title: "7. A Spirit Of Joy",
            desc: "The Sun To Human Foundation is a place of blooming energy. Through Morning Sun Gratitude and the practice of Pranam, we have fun while serving. We celebrate inner freedom and we love celebrating life!"
        }
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-gray-800 pb-24">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden border-b border-yellow-100">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold tracking-wider uppercase mb-6">
                        The Living Messengers
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Meet The Param Mitras
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Our team consists of passionate individuals spread across the globe. Though we work in different cities, we are closely connected by the shared purpose of spreading the profound wisdom of Pujya Param Aalay Ji.
                    </p>
                </div>
            </section>

            {/* 2. Team Grid Section */}
            <ParamMitrasSection />

            {/* 3. Core Values Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-100 mt-12">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Our 7 Core Values
                        </h2>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-yellow-300 transition-colors">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Call to Action */}
            <section className="py-20 bg-white text-center px-6">
                <div className="max-w-3xl mx-auto bg-yellow-50 p-12 rounded-4xl border border-yellow-200">
                    <div className="text-5xl mb-6">🙏</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Join Our Team
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        If you want to help others on this beautiful journey, reach out to us. Become a bridge between the cosmic rhythm and humanity.
                    </p>
                    <Link href="/involved/param-mitra" className="inline-block bg-yellow-400 text-gray-900 py-4 px-10 rounded-full font-bold text-lg hover:bg-yellow-500 hover:shadow-lg transition-all duration-300">
                        Apply to be a Param Mitra
                    </Link>
                </div>
            </section>
        </main>
    );
}