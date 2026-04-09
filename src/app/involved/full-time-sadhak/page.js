import SadhakForm from "@/components/get-involved/SadhakForm";

export default function FullTimeSadhakPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-24">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-orange-900 to-orange-800 text-white py-24 relative overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-500/30 border border-orange-400/50 text-orange-200 text-sm font-bold tracking-wider uppercase mb-6">
                        Deep Commitment
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">Become a Full-Time Sadhak</h1>
                    <p className="text-xl text-orange-100/90 leading-relaxed max-w-2xl mx-auto">
                        Dedicate your life to inner evolution, self-realization, and serving humanity under the profound guidance of Pujya Param Aalay Ji.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20 mb-16">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">What does it mean?</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            A full-time Sadhak is someone who steps away from worldly pursuits to focus entirely on spiritual growth. You will live a disciplined life at the ashram, deeply engaging in morning and evening practices, meditation, and Seva (selfless service).
                        </p>
                        <ul className="space-y-3 text-gray-700 font-medium">
                            <li className="flex items-center gap-3"><span className="text-orange-500">🌅</span> Daily guided practices</li>
                            <li className="flex items-center gap-3"><span className="text-orange-500">🥗</span> Pure, high-vibration diet</li>
                            <li className="flex items-center gap-3"><span className="text-orange-500">🧹</span> 4-6 hours of daily Seva</li>
                            <li className="flex items-center gap-3"><span className="text-orange-500">🧘</span> Complete spiritual immersion</li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-orange-50 rounded-2xl p-8 border border-orange-100">
                        <h3 className="text-xl font-bold text-orange-900 mb-3">Prerequisites</h3>
                        <p className="text-orange-800/80 mb-4 text-sm">
                            Becoming a Sadhak is a profound decision. We recommend applying only if you meet the following criteria:
                        </p>
                        <ul className="space-y-2 text-sm text-orange-900">
                            <li>• Have attended at least two 10-day camps</li>
                            <li>• Free from major family or financial liabilities</li>
                            <li>• Physically capable of ashram routines</li>
                            <li>• Willing to surrender to the ashram's discipline</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="px-6">
                <SadhakForm />
            </div>
        </main>
    );
}