import FoundationIntro from "@/components/about/FoundationIntro";
import Link from "next/link";

export const metadata = {
    title: 'Sun To Human Foundation | About',
    description: 'At Sun To Human Foundation, we provide an environment where knowledge turns into practical, proven, and harmonious development of body, mind, and soul.',
};

export default function FoundationPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-800 pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">☀️ About The Foundation</span>
                    <h1>Sun To Human Foundation</h1>
                    <p>
                        &ldquo;SUN TO HUMAN is the BRIDGE, where UNIVERSAL LAWS align us with the cosmic rhythm to gain HEALTH, HARMONY, AND HAPPINESS.&rdquo;
                    </p>
                </div>
            </div>

            {/* Video Section */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div style={{ width: '100%', aspectRatio: '16/9', background: '#f5f5f5', borderRadius: '1rem', overflow: 'hidden', border: '3px solid rgba(255,214,0,0.5)', boxShadow: '0 12px 40px rgba(0,0,0,0.1)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.04)' }}></div>
                        <div style={{ width: 72, height: 72, background: 'linear-gradient(135deg, #FF8C00, #FFD600)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.8rem', paddingLeft: '5px', boxShadow: '0 8px 30px rgba(255,140,0,0.4)', zIndex: 10 }}>▶</div>
                    </div>
                    <p style={{ textAlign: 'center', color: '#666', marginTop: '1.5rem', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '42rem', margin: '1.5rem auto 0' }}>
                        At Sun To Human Foundation, we provide an environment where knowledge turns into practical, proven, and harmonious development of body, mind, and soul.
                    </p>
                </div>
            </div>

            {/* Foundation Intro Component */}
            <FoundationIntro />

            {/* Mission Section */}
            <section style={{ background: '#fffbf0', padding: '5rem 1.5rem', borderTop: '1px solid rgba(255,214,0,0.2)', marginTop: '2rem' }}>
                <div style={{ maxWidth: '42rem', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: 72, height: 72, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(255,214,0,0.3)', margin: '0 auto 1.5rem' }}>🌍</div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a1a', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>Our Global Mission</h2>
                    <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: 1.85, fontFamily: "'Playfair Display', serif" }}>
                        &ldquo;Transforming millions of lives not through words, but through a proven, step-by-step journey from food to the divine — methodical and scientific.&rdquo;
                    </p>
                    <div className="satvic-divider" style={{ marginTop: '2rem' }}></div>
                    <Link href="/programs" className="satvic-cta-btn" style={{ marginTop: '2.5rem', display: 'inline-block' }}>Explore Our Programs</Link>
                </div>
            </section>

        </main>
    );
}