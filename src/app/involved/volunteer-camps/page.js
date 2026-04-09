import SharedVolunteerForm from "@/components/get-involved/SharedVolunteerForm";

export default function VolunteerCampsPage() {
    return (
        <main className="min-h-screen bg-white pb-24 font-sans text-gray-800">
            {/* 1. Hero Section */}
            <div className="bg-white py-24 relative overflow-hidden border-b border-yellow-200">
                {/* Bright Yellow Glow Effect (As per guidelines: Brighter Yellow, No Beige) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-yellow-300 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-4 rounded-full bg-yellow-100 border border-yellow-400 text-yellow-800 text-sm font-bold tracking-wider uppercase mb-6">
                        Param Sahyogi Mitra
                    </span>
                    {/* Using Playfair Display/Merriweather fallback for heading */}
                    <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Camp Volunteering
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        "Pravachan nahi, prayog" — Not preaching, but practice. Join our mission to transform millions of lives by serving at our transformative camps.
                    </p>
                </div>
            </div>

            {/* 2. Ways to Volunteer Section */}
            <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-20">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-yellow-100">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Choose Your Path of Seva
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Whether you are looking to serve locally or immerse yourself in our residential ashram, there is a place for your energy here.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Category 1 */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-50 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group cursor-default">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                🏛️
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-3">At Param Aalay: The Esoteric Temple</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Serve during our Advanced Residential Programs (Urja Shivir, Param Navratri, Cosmic Vision). Assist with seeker accommodation, discipline, and daily ashram operations.
                            </p>
                        </div>

                        {/* Category 2 */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-50 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group cursor-default">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                🏙️
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-3">Programs in Different Cities</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Volunteer at the 6-Day <em>Naye Drishtikon Wala Shivir</em> in your local city. Help serve the Adrishya Breakfast to thousands in just 7-9 minutes, manage footwear, and welcome seekers.
                            </p>
                        </div>

                        {/* Category 3 */}
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-50 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 group cursor-default">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                🌱
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-3">Run a Centre in Your City</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Take the ultimate step in Seva. Organize local morning prayogs, gather seekers in local parks, and facilitate the continuation of practices after the main city camps conclude.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Reused Shared Form */}
            <div className="px-6 relative z-10">
                <SharedVolunteerForm
                    title="Register as a Camp Volunteer"
                    subtitle="Please fill out your details. Let us know which city or program you wish to serve in the message box."
                    roleContext="Camp/Centre Volunteer"
                />
            </div>
        </main>
    );
}