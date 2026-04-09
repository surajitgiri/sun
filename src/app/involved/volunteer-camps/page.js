import SharedVolunteerForm from "@/components/get-involved/SharedVolunteerForm";

export const metadata = {
    title: 'Camp Volunteering | Sun To Human Foundation',
    description: 'Join our mission to transform millions of lives by serving at transformative camps.',
};

export default function VolunteerCampsPage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">🏕️ Param Sahyogi Mitra</span>
                    <h1>Camp Volunteering</h1>
                    <p>
                        &ldquo;Pravachan nahi, prayog&rdquo; — Not preaching, but practice. Join our mission to transform millions of lives by serving at our transformative camps.
                    </p>
                </div>
            </div>

            {/* Info Card */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div className="satvic-section-header" style={{ marginBottom: '2rem' }}>
                        <h2>Choose Your Path of Seva</h2>
                        <p>Whether you are looking to serve locally or immerse yourself in a residential ashram, there is a place for your energy here.</p>
                        <div className="satvic-divider"></div>
                    </div>
                    <div className="satvic-feature-grid">
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🏛️</div>
                            <h4>At Param Aalay</h4>
                            <p>Serve during Advanced Residential Programs — Urja Shivir, Param Navratri, Cosmic Vision</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🏙️</div>
                            <h4>City Programs</h4>
                            <p>Volunteer at the 6-Day Naye Drishtikon Wala Shivir in your local city</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🌱</div>
                            <h4>Run a Centre</h4>
                            <p>Organise local morning prayogs and facilitate seekers in your city</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="satvic-form-section">
                <div className="satvic-form-section-inner">
                    <div className="satvic-form-section-title">
                        <h2>Register as a Camp Volunteer</h2>
                        <p>Let us know which city or program you wish to serve in via the message box.</p>
                    </div>
                    <SharedVolunteerForm
                        title="Register as a Camp Volunteer"
                        subtitle="Please fill out your details. Let us know which city or program you wish to serve in the message box."
                        roleContext="Camp/Centre Volunteer"
                    />
                </div>
            </div>

        </main>
    );
}