import FoundationIntro from '@/components/about/FoundationIntro';

export const metadata = {
    title: 'Sun To Human Foundation | About',
    description: 'Discover the vision, mission, and core principles of the Sun To Human Foundation — transforming millions of lives through a proven, scientific and spiritual path.',
};

export default function SunToHumanFoundationPage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">☀️ The Foundation</span>
                    <h1>Sun To Human Foundation</h1>
                    <p>
                        &quot;SUN TO HUMAN is the BRIDGE, where UNIVERSAL LAWS align us with the cosmic rhythm to gain HEALTH, HARMONY, AND HAPPINESS.&quot;
                    </p>
                </div>
            </div>

            {/* Info Card */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div className="satvic-feature-grid">
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🥗</div>
                            <h4>Adrishya Breakfast</h4>
                            <p>Cellular healing through our specially designed 20-item alkaline diet, served in just 7–9 minutes.</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🔵</div>
                            <h4>Navel Hammering</h4>
                            <p>The world&apos;s fastest oxygen retention technique to activate vital energy and restore the body&apos;s core.</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">☀️</div>
                            <h4>Morning Sun Gratitude</h4>
                            <p>Harnessing solar life-force and establishing a profound daily connection with nature and cosmic energy.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Foundation Intro Component */}
            <FoundationIntro />

            {/* Mission Section */}
            <div className="satvic-form-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                <div className="satvic-form-section-inner" style={{ maxWidth: '52rem' }}>
                    <div className="satvic-form-section-title">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
                        <h2>Our Global Mission</h2>
                        <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#555', lineHeight: 1.8 }}>
                            &quot;Transforming millions of lives not through words, but through a proven, step-by-step journey from food to the divine — methodical and scientific.&quot;
                        </p>
                    </div>
                </div>
            </div>

        </main>
    );
}
