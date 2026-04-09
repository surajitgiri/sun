import SharedVolunteerForm from "@/components/get-involved/SharedVolunteerForm";

export default function RemoteVolunteeringPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-400 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/30 border border-indigo-400/50 text-indigo-200 text-sm font-bold tracking-wider uppercase mb-6">
                        Digital Seva
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">Remote Volunteering</h1>
                    <p className="text-xl text-indigo-100/90 leading-relaxed max-w-2xl mx-auto">
                        Serve the mission from anywhere in the world. Help us with digital awareness, content creation, translations, and administrative support.
                    </p>
                </div>
            </div>

            {/* Info Section */}
            <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20 mb-16">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col md:flex-row gap-8 text-center justify-around">
                    <div>
                        <div className="text-4xl mb-3">📱</div>
                        <h4 className="font-bold text-gray-900">Social Media</h4>
                        <p className="text-sm text-gray-500">Manage pages & engage with seekers</p>
                    </div>
                    <div>
                        <div className="text-4xl mb-3">✍️</div>
                        <h4 className="font-bold text-gray-900">Content & Translation</h4>
                        <p className="text-sm text-gray-500">Write, edit, or translate discourses</p>
                    </div>
                    <div>
                        <div className="text-4xl mb-3">💻</div>
                        <h4 className="font-bold text-gray-900">Tech Support</h4>
                        <p className="text-sm text-gray-500">Website, app, and design assistance</p>
                    </div>
                </div>
            </div>

            {/* Reused Form */}
            <div className="px-6">
                <SharedVolunteerForm
                    title="Become a Remote Volunteer"
                    subtitle="Let us know your digital skills and how you'd like to help from home."
                    roleContext="Remote Volunteer"
                />
            </div>
        </main>
    );
}