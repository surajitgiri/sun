import ParamMitrasSection from '@/components/about/ParamMitrasSection';

export const metadata = {
    title: 'Param Mitras | Sun To Human Foundation',
    description: 'Meet the passionate team of Param Mitras — the living messengers of Sun To Human Foundation, spread across the globe.',
};

export default function ParamMitrasPage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">☀️ The Living Messengers</span>
                    <h1>Meet The Param Mitras</h1>
                    <p>
                        Our team consists of passionate individuals spread across the globe. Though we work in different cities, we are closely connected by the shared purpose of spreading the profound wisdom of Pujya Param Aalay Ji.
                    </p>
                </div>
            </div>

            {/* Team Grid */}
            <ParamMitrasSection />

        </main>
    );
}
