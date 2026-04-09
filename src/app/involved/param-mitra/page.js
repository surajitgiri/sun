import ParamMitraForm from "@/components/get-involved/ParamMitraForm";
import ParamMitrasSection from '@/components/about/ParamMitrasSection';

export const metadata = {
    title: 'Become a Param Mitra | Sun To Human Foundation',
    description: 'Join our team of passionate volunteers spreading the wisdom of Pujya Param Aalay Ji across the globe.',
};

export default function ParamMitraPage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">🌟 The Living Messengers</span>
                    <h1>Join as a Param Mitra</h1>
                    <p>
                        Our Param Mitras are passionate individuals spread across the globe, connected by the shared purpose of bringing profound wisdom to every soul.
                    </p>
                </div>
            </div>

            {/* Team Grid */}
            <div style={{ paddingTop: '3rem' }}>
                <ParamMitrasSection />
            </div>

            {/* Form Section */}
            <div className="satvic-form-section">
                <div className="satvic-form-section-inner">
                    <div className="satvic-form-section-title">
                        <h2>Apply to be a Param Mitra</h2>
                        <p>Share your details so we can find the best way for you to contribute.</p>
                    </div>
                    <ParamMitraForm />
                </div>
            </div>

        </main>
    );
}