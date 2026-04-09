import SadhakForm from "@/components/get-involved/SadhakForm";

export const metadata = {
    title: 'Full-Time Sadhak | Sun To Human Foundation',
    description: 'Dedicate your life to inner evolution and spiritual practice under Pujya Param Aalay Ji.',
};

export default function FullTimeSadhakPage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">☀️ Deep Commitment</span>
                    <h1>Become a Full-Time Sadhak</h1>
                    <p>
                        Dedicate your life to inner evolution, self-realization, and serving humanity under the profound guidance of Pujya Param Aalay Ji.
                    </p>
                </div>
            </div>

            {/* Floating Info Card */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="md:grid-cols-2">
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>What does it mean?</h3>
                            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                A full-time Sadhak steps away from worldly pursuits to focus entirely on spiritual growth. You will live a disciplined life at the ashram, deeply engaging in morning and evening practices, meditation, and Seva (selfless service).
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {[['🌅', 'Daily guided practice sessions'],['🥗', 'Pure, high-vibration Satvic diet'],['🧹', '4–6 hours of daily Seva'],['🧘', 'Complete spiritual immersion']].map(([icon, text]) => (
                                    <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#333', fontWeight: 500 }}>
                                        <span>{icon}</span>{text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: 'linear-gradient(135deg, #fffbf0, #fff3d0)', borderRadius: '1rem', padding: '1.75rem', border: '1px solid rgba(255,214,0,0.3)' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#c45c00', marginBottom: '0.75rem' }}>Prerequisites</h3>
                            <p style={{ color: '#7a5a00', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.7 }}>
                                Becoming a Sadhak is a profound decision. We recommend applying only if you meet the following:
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {['Attended at least two 10-day camps', 'Free from major family or financial liabilities', 'Physically capable of ashram routines', 'Willing to surrender to ashram discipline'].map(item => (
                                    <li key={item} style={{ display: 'flex', gap: '0.5rem', color: '#7a5a00', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                        <span style={{ color: '#FF8C00', flexShrink: 0 }}>✓</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="satvic-form-section">
                <div className="satvic-form-section-inner">
                    <div className="satvic-form-section-title">
                        <h2>Apply Now</h2>
                        <p>Fill in the form below and we will reach out to you shortly.</p>
                    </div>
                    <SadhakForm />
                </div>
            </div>

        </main>
    );
}