'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PujyaParamAalayPage() {
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
        <div className="min-h-screen font-sans text-gray-800 bg-[#f9f8f4] relative">

            {/* 1. Top Utility Bar (Beige) */}
            <div className="bg-[#e9e1d3] text-[#5a5045] text-xs font-semibold py-2 px-6 flex justify-end items-center gap-6">
                <Link href="#" className="flex items-center gap-1.5 hover:text-[#b85c32] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Subscribe
                </Link>
                <Link href="#" className="flex items-center gap-1.5 hover:text-[#b85c32] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    Volunteer
                </Link>
                <Link href="#" className="flex items-center gap-1.5 hover:text-[#b85c32] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Donate
                </Link>
                <Link href="#" className="flex items-center gap-1.5 hover:text-[#b85c32] transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    Shop
                </Link>
                <div className="bg-[#b85c32] text-white px-2 py-1 ml-2 text-[10px] font-bold tracking-wider rounded-sm">
                    SUN TO HUMAN
                </div>
                <div className="pl-2 border-l border-[#d3c9ba]">
                    <Link href="#" className="hover:text-[#b85c32] transition-colors">Login</Link> | <Link href="#" className="hover:text-[#b85c32] transition-colors">Sign Up</Link>
                </div>
            </div>

            {/* 2. Main Navigation Bar (Dark Brown) */}
            <header className="bg-[#4a4238] text-[#dcd7d0] py-4 px-6 sticky top-0 z-50 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-8">
                    {/* Minimal Logo */}
                    <div className="text-white flex flex-col justify-center">
                        <span className="font-serif text-2xl italic tracking-wider leading-none">Aalay</span>
                    </div>

                    {/* Nav Links with Separators */}
                    <nav className="hidden lg:flex items-center text-[15px] font-medium tracking-wide">
                        <Link href="#about" className="hover:text-white transition-colors">Pujya Param Aalay Ji</Link>
                        <span className="mx-4 text-[#756a5c]">|</span>
                        <Link href="#wisdom" className="hover:text-white transition-colors">Wisdom</Link>
                        <span className="mx-4 text-[#756a5c]">|</span>
                        <Link href="#programs" className="hover:text-white transition-colors">Programs</Link>
                        <span className="mx-4 text-[#756a5c]">|</span>
                        <Link href="#swadiksha" className="hover:text-white transition-colors">Swadiksha</Link>
                        <span className="mx-4 text-[#756a5c]">|</span>
                        <Link href="#centers" className="hover:text-white transition-colors">Centers</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="#program-finder" className="hidden lg:flex items-center gap-2 hover:text-white transition-colors text-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        Program<br />Finder
                    </Link>
                    <button className="hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </div>
            </header>

            {/* Breadcrumbs */}
            <div className="bg-white py-2 px-6 border-b border-gray-200 text-sm text-[#7a7065]">
                <span className="cursor-pointer hover:text-[#b85c32]">Home</span> / <span className="text-[#b85c32]">Pujya Param Aalay Ji - The Living Master</span>
            </div>

            <main>
                {/* 3. Dark Hero Section */}
                <section className="bg-gradient-to-r from-[#3e342b] to-[#5a4c40] text-[#e8e4db] py-16 lg:py-24 px-6 lg:px-20 relative overflow-hidden">
                    <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Left: Text */}
                        <div className="w-full lg:w-1/2 z-10">
                            <h1 className="text-6xl md:text-7xl font-serif text-[#f2ebd9] mb-8" style={{ fontFamily: "'Georgia', serif" }}>
                                Pujya Param<br />Aalay Ji
                            </h1>
                            <p className="text-xl md:text-2xl font-light text-[#cbbbae] mb-6 border-l border-[#cbbbae] pl-4">
                                "A Master who creates Masters,<br />not Followers." – Pujya Param Aalay Ji
                            </p>
                            <p className="text-[17px] leading-relaxed text-[#dcd7d0] max-w-lg">
                                Wisdom can be found in countless books and speeches, but true transformation is rare. Pujya Param Aalay Ji has not only transformed himself but is now on a mission to guide each one of us willing to walk this path.
                            </p>
                        </div>

                        {/* Right: Featured Image/Video Thumbnail */}
                        <div className="w-full lg:w-1/2 z-10 relative">
                            <div className="relative aspect-[16/9] w-full bg-black shadow-2xl overflow-hidden group cursor-pointer">
                                {/* Image */}
                                <Image
                                    src="/guruji2.JPG"
                                    alt="Pujya Param Aalay Ji"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    priority
                                />

                                {/* Overlay Text matching the video thumbnail style */}
                                <div className="absolute top-8 left-8">
                                    <h2 className="text-white text-4xl md:text-5xl font-serif mb-2 leading-tight">
                                        Pujya Param<br />Aalay Ji:
                                    </h2>
                                    <p className="text-[#d97736] text-3xl font-serif">
                                        The Living<br />Master
                                    </p>
                                </div>

                                {/* Subtle Play Button Concept (Optional based on screenshot) */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded px-6 py-4">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decorative right edge mandala pattern (simulated with CSS) */}
                <div className="absolute right-0 top-[600px] bottom-0 w-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U4ZTRkYiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] opacity-20 pointer-events-none hidden lg:block z-0"></div>

                {/* 4. Content Block 1: The Meaning of Param Aalay */}
                <section className="py-20 px-6 lg:px-20 max-w-[1200px] mx-auto z-10 relative">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                        {/* Image Carousel Mockup */}
                        <div className="w-full lg:w-1/2 relative bg-white shadow-xl p-2 pb-12">
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <Image src="/guruji2.JPG" alt="Meaning" fill className="object-cover" />
                            </div>
                            {/* Carousel Dots */}
                            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-[#d97736]"></span>
                                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-serif text-[#382a1d] mb-6">
                                The Meaning of Param Aalay
                            </h2>
                            <p className="text-[17px] text-[#4a4a4a] leading-relaxed mb-6 font-light">
                                <strong>"Param"</strong> signifies vastness, while <strong>"Aalay"</strong> represents a welcoming space. Together, Param Aalay means: A Vast Space Embracing All Souls. His very being is a blessing for mankind.
                            </p>
                            <button className="border-2 border-[#b85c32] text-[#b85c32] px-5 py-2.5 font-semibold text-sm hover:bg-[#b85c32] hover:text-white transition-colors">
                                Meet Him In Person
                            </button>
                        </div>
                    </div>
                </section>

                {/* 5. Content Block 2: Pravachan Nahi, Prayog */}
                <section className="py-12 px-6 lg:px-20 max-w-[1200px] mx-auto z-10 relative">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">

                        {/* Image Carousel Mockup */}
                        <div className="w-full lg:w-1/2 relative bg-white shadow-xl p-2 pb-12">
                            <div className="relative aspect-[4/3] w-full bg-black overflow-hidden">
                                <Image src="/guruji2.JPG" alt="Prayog" fill className="object-cover opacity-90" />
                            </div>
                            {/* Carousel Dots */}
                            <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                                <span className="w-3 h-3 rounded-full bg-[#d97736]"></span>
                                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-serif text-[#382a1d] mb-6">
                                Pravachan Nahi, Prayog
                            </h2>
                            <p className="text-[17px] text-[#4a4a4a] leading-relaxed mb-6 font-light">
                                Transforming millions of lives not through mere words, but through a proven, step-by-step journey from food to the divine—methodical and scientific. Discover a path grounded in experiential realization rather than mere intellectual gathering.
                            </p>
                            <button className="border-2 border-[#b85c32] text-[#b85c32] px-5 py-2.5 font-semibold text-sm hover:bg-[#b85c32] hover:text-white transition-colors">
                                Explore Techniques
                            </button>
                        </div>
                    </div>
                </section>

                {/* 6. Centered Reading Block: His Journey */}
                <section className="py-24 px-6 max-w-[900px] mx-auto text-center z-10 relative">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#382a1d] mb-4">
                        His Journey - Path to the Divine
                    </h2>

                    {/* Elegant Golden Divider */}
                    <div className="flex justify-center mb-8">
                        <svg width="200" height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12 Q 30 2, 50 12 T 90 12 T 130 12 T 170 12 T 190 12" stroke="#eab308" strokeWidth="1.5" fill="transparent" />
                            <circle cx="100" cy="12" r="3" fill="#eab308" />
                            <circle cx="10" cy="12" r="1.5" fill="#eab308" opacity="0.5" />
                            <circle cx="190" cy="12" r="1.5" fill="#eab308" opacity="0.5" />
                        </svg>
                    </div>

                    <p className="text-[17px] text-[#4a4a4a] leading-loose text-justify font-light">
                        Details about his early life, his spiritual awakening, and the founding of the Sun To Human Foundation. Explain how his unique understanding of the cosmic rhythm and universal laws led to the creation of the Adrishya Breakfast and Navel Hammering techniques. A journey that empowers you to explore your spiritual self and could well change your life. From a seeker of truth to a master guiding millions, the urgency, passion, and vitality echo in his spiritual pursuits to this day. Truth for him is a living experience instead of a destination, a conclusion, or a matter of metaphysical speculation. The possibility of self-realization, he strongly believes, is available to all.
                    </p>
                </section>

                {/* 7. Upcoming Events (List Format fitting the theme) */}
                <section id="upcoming-events" className="py-16 bg-[#f2ebd9] border-t border-[#e3d7c5]">
                    <div className="max-w-[1000px] mx-auto px-6">
                        <h2 className="text-3xl font-serif text-[#382a1d] mb-10 text-center">
                            Upcoming Programs & Retreats
                        </h2>
                        <div className="space-y-4">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between shadow-sm border border-[#e3d7c5] hover:shadow-md transition-shadow">
                                    <div className="mb-4 md:mb-0">
                                        <span className="text-xs font-bold text-[#b85c32] uppercase tracking-wider block mb-1">{event.type}</span>
                                        <h3 className="text-xl font-serif text-[#382a1d] mb-2">{event.title}</h3>
                                        <p className="text-sm text-[#7a7065] flex items-center gap-4">
                                            <span>📅 {event.date}</span>
                                            <span className="hidden md:inline">|</span>
                                            <span>📍 {event.location}</span>
                                        </p>
                                    </div>
                                    <button className="whitespace-nowrap bg-[#b85c32] text-white px-6 py-2.5 font-semibold text-sm hover:bg-[#9a4b27] transition-colors shadow-sm">
                                        Register Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Floating Back to Top Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all"
                    aria-label="Back to top"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path>
                    </svg>
                </button>
            </div>

        </div>
    );
}