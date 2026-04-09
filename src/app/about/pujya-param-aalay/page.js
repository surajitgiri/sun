import Image from 'next/image';
import Link from 'next/link';

export default function PujyaParamAalayPage() {
    // Sample upcoming events where seekers can meet him
    const upcomingEvents = [
        {
            title: "Naye Drishtikon Wala Shivir",
            date: "Starts next Monday (6 AM - 8 AM)",
            location: "City Centre Ground, Local City",
            type: "6-Day Morning Camp"
        },
        {
            title: "11-Day Param Navratri Shivir",
            date: "Upcoming Navratri",
            location: "Param Aalay: The Esoteric Temple",
            type: "Residential Retreat"
        },
        {
            title: "Sawan Sadhana",
            date: "August 2024",
            location: "Param Aalay: The Esoteric Temple",
            type: "Advanced Program"
        }
    ];

    return (
        <main className="min-h-screen bg-white font-sans text-gray-800 pb-24">
            {/* 1. Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                {/* Sun Aura Background Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-300 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Image Column */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                                <Image
                                    src="/guruji2.JPG"
                                    alt="Pujya Param Aalay Ji"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <span className="inline-block py-1 px-4 rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold tracking-wider uppercase mb-4">
                                The Living Master
                            </span>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Pujya Param Aalay Ji
                            </h1>
                            <p className="text-2xl font-medium text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                                "A Master who creates Masters, not Followers."
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Wisdom can be found in countless books and speeches, but true transformation is rare. Pujya Param Aalay Ji has not only transformed himself but is now on a mission to guide each one of us willing to walk this path.
                            </p>
                            <Link href="#upcoming-events" className="inline-block bg-yellow-400 text-gray-900 py-4 px-8 rounded-full font-bold hover:bg-yellow-500 hover:shadow-lg transition-all duration-300">
                                Meet Him at Upcoming Events ↓
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Philosophy & Background Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                The Meaning of Param Aalay
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                <strong>"Param"</strong> signifies vastness, while <strong>"Aalay"</strong> represents a welcoming space. Together, Param Aalay means: A Vast Space Embracing All Souls. His very being is a blessing for mankind.
                            </p>
                            <div className="p-6 bg-white border-l-4 border-yellow-400 shadow-sm rounded-r-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Pravachan Nahi, Prayog</h3>
                                <p className="text-gray-600">
                                    Transforming millions of lives not through mere words, but through a proven, step-by-step journey from food to the divine—methodical and scientific.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Background Placeholder for Client to fill */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>His Journey</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    [Content to be added: Details about his early life, his spiritual awakening, and the founding of the Sun To Human Foundation. Explain how his unique understanding of the cosmic rhythm and universal laws led to the creation of the Adrishya Breakfast and Navel Hammering techniques.]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Upcoming Events Section */}
            <section id="upcoming-events" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Meet Pujya Param Aalay Ji
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Experience his presence and profound energy firsthand at our upcoming camps and residential retreats.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group">
                                <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-yellow-100 group-hover:text-yellow-800 transition-colors">
                                    {event.type}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {event.title}
                                </h3>
                                <div className="space-y-2 mb-6">
                                    <p className="flex items-center text-gray-600 text-sm">
                                        <span className="mr-2">📅</span> {event.date}
                                    </p>
                                    <p className="flex items-center text-gray-600 text-sm">
                                        <span className="mr-2">📍</span> {event.location}
                                    </p>
                                </div>
                                <Link href="/programs" className="block text-center w-full py-3 px-4 bg-gray-50 text-gray-900 font-bold rounded-xl group-hover:bg-yellow-400 transition-colors">
                                    View Details & Register
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/programs" className="inline-block text-gray-500 hover:text-yellow-600 font-semibold transition-colors">
                            View full event calendar →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}