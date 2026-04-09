import RetreatCentreSection from '@/components/about/RetreatCentreSection';

export const metadata = {
    title: 'Retreat Centre | Sun To Human Foundation',
    description: 'Explore Param Aalay: The Esoteric Temple — a sacred sanctuary designed for absolute silence, deep healing, and inner work.',
};

export default function RetreatCentrePage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">🏔️ The Sanctuary</span>
                    <h1>Our Retreat Centre</h1>
                    <p>
                        Param Aalay — The Esoteric Temple. A sacred space designed for absolute silence, deep healing, and intensive inner work. Where seekers come to transform.
                    </p>
                </div>
            </div>

            {/* Info Card */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div className="satvic-feature-grid">
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🌿</div>
                            <h4>Immersive Environment</h4>
                            <p>Surrounded by nature, our centre facilitates deep meditative states and supports intensive Urja and Navratri Shivirs.</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🔵</div>
                            <h4>Sacred Spaces</h4>
                            <p>Dedicated zones for Sun Gratitude, Navel Hammering, and the Adrishya Kitchen where alkaline meals are prepared.</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🧘</div>
                            <h4>Advanced Programs</h4>
                            <p>Host to powerful retreats — 5-Day Urja Shivir, 11-Day Param Navratri, and the 18-Day Cosmic Vision Shivir.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Section Component */}
            <RetreatCentreSection />

        </main>
    );
}
