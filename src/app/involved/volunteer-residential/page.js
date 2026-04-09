import SharedVolunteerForm from "@/components/get-involved/SharedVolunteerForm";

export default function VolunteerResidentialPage() {
    return (
        <main className="min-h-screen bg-white pb-24 font-sans text-gray-800">
            {/* 1. Hero Section */}
            <div className="bg-white py-24 relative overflow-hidden border-b border-yellow-200">
                {/* Bright Yellow Glow Effect */}
                <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-yellow-300 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm font-bold tracking-wider uppercase mb-6">
                        Ashram Seva
                    </span>
                    {/* Using Playfair Display/Merriweather fallback for heading */}
                    <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Residential Seva
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Step into the sacred space of <strong>Param Aalay: The Esoteric Temple</strong>. Dedicate your days to deep service during our intensive advanced residential programs.
                    </p>
                </div>
            </div>

            {/* 2. Details Section */}
            <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-yellow-100">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Immerse Yourself in the Mission
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Volunteering at residential camps requires staying on-site for 5, 11, or 18 days. You will live the disciplined life of a seeker while facilitating the transformation of others.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Aspect 1 */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-50 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group cursor-default">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                🏕️
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-3">Advanced Programs</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Serve during powerful retreats like the 5-Day Urja Shivir, 11-Day Param Navratri, 11-Day Sawan Sadhana, or the profound 18-Day Cosmic Vision Shivir.
                            </p>
                        </div>

                        {/* Aspect 2 */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-50 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group cursor-default">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                🧘
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-3">Ashram Discipline</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Residential volunteers follow the strict daily rhythm of the ashram. You will participate in morning and evening Sadhana while maintaining high energy and silence.
                            </p>
                        </div>

                        {/* Aspect 3 */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-50 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group cursor-default">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                🤝
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-3">Core Responsibilities</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Assist with seeker accommodations, manage the flow of the venue, help in the preparation of pure Satvic meals, and ensure the Esoteric Temple remains pristine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Reused Shared Form */}
            <div className="px-6 relative z-10">
                <SharedVolunteerForm
                    title="Apply for Residential Seva"
                    subtitle="Please fill out your details. Let us know which specific upcoming advanced camp you are available for."
                    roleContext="Residential Camp Volunteer (Param Aalay)"
                />
            </div>
        </main>
    );
}