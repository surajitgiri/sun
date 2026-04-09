import SharedVolunteerForm from "@/components/get-involved/SharedVolunteerForm";

export default function GeneralVolunteerPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-800 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-green-500 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/30 border border-green-400/50 text-green-200 text-sm font-bold tracking-wider uppercase mb-6">
                        On-Ground Seva
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">Volunteer at Camps</h1>
                    <p className="text-xl text-green-100/90 leading-relaxed max-w-2xl mx-auto">
                        Experience the joy of physical Seva. Help organize local healing camps, assist attendees, and ensure smooth operations during physical events.
                    </p>
                </div>
            </div>

            {/* Info Section */}
            <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20 mb-16">
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col md:flex-row gap-8 text-center justify-around">
                    <div>
                        <div className="text-4xl mb-3">🤝</div>
                        <h4 className="font-bold text-gray-900">Event Coordination</h4>
                        <p className="text-sm text-gray-500">Manage seating, entry, and flow</p>
                    </div>
                    <div>
                        <div className="text-4xl mb-3">🥗</div>
                        <h4 className="font-bold text-gray-900">Food Seva</h4>
                        <p className="text-sm text-gray-500">Assist in preparing and serving pure meals</p>
                    </div>
                    <div>
                        <div className="text-4xl mb-3">🚗</div>
                        <h4 className="font-bold text-gray-900">Logistics</h4>
                        <p className="text-sm text-gray-500">Transport, setup, and teardown help</p>
                    </div>
                </div>
            </div>

            {/* Reused Form */}
            <div className="px-6">
                <SharedVolunteerForm
                    title="Apply to Volunteer On-Ground"
                    subtitle="Share your details to help at physical camps and local ashram events."
                    roleContext="General/Camp Volunteer"
                />
            </div>
        </main>
    );
}