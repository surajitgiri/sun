import SharedVolunteerForm from "@/components/get-involved/SharedVolunteerForm";

export const metadata = {
    title: 'Residential Seva | Sun To Human Foundation',
    description: 'Step into the sacred space of Param Aalay and dedicate your days to deep service during intensive advanced residential programs.',
};

export default function VolunteerResidentialPage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">🏯 Ashram Seva</span>
                    <h1>Residential Seva</h1>
                    <p>
                        Step into the sacred space of <strong style={{ color: '#c45c00' }}>Param Aalay: The Esoteric Temple</strong>. Dedicate your days to deep service during our intensive advanced residential programs.
                    </p>
                </div>
            </div>

            {/* Info Card */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div className="satvic-section-header" style={{ marginBottom: '2rem' }}>
                        <h2>Immerse Yourself in the Mission</h2>
                        <p>Residential volunteers stay on-site for 5, 11, or 18 days — living the disciplined life of a seeker while facilitating the transformation of others.</p>
                        <div className="satvic-divider"></div>
                    </div>
                    <div className="satvic-feature-grid">
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🏕️</div>
                            <h4>Advanced Programs</h4>
                            <p>Serve during Urja Shivir, Param Navratri, Sawan Sadhana, or the 18-Day Cosmic Vision Shivir</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🧘</div>
                            <h4>Ashram Discipline</h4>
                            <p>Participate in morning and evening Sadhana while maintaining high energy and mindful silence</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🤝</div>
                            <h4>Core Responsibilities</h4>
                            <p>Assist with accommodation, venue flow, pure Satvic meal preparation, and temple upkeep</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="satvic-form-section">
                <div className="satvic-form-section-inner">
                    <div className="satvic-form-section-title">
                        <h2>Apply for Residential Seva</h2>
                        <p>Let us know which upcoming advanced camp you are available for.</p>
                    </div>
                    <SharedVolunteerForm
                        title="Apply for Residential Seva"
                        subtitle="Please fill out your details. Let us know which specific upcoming advanced camp you are available for."
                        roleContext="Residential Camp Volunteer (Param Aalay)"
                    />
                </div>
            </div>

        </main>
    );
}