import SharedVolunteerForm from "@/components/get-involved/SharedVolunteerForm";

export const metadata = {
    title: 'Remote Volunteering | Sun To Human Foundation',
    description: 'Serve the mission from anywhere in the world through digital seva.',
};

export default function RemoteVolunteeringPage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">💻 Digital Seva</span>
                    <h1>Remote Volunteering</h1>
                    <p>
                        Serve the mission from anywhere in the world. Help with digital awareness, content creation, translations, and administrative support.
                    </p>
                </div>
            </div>

            {/* Info Card */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div className="satvic-feature-grid">
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">📱</div>
                            <h4>Social Media</h4>
                            <p>Manage pages, create content & engage with seekers online</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">✍️</div>
                            <h4>Content & Translation</h4>
                            <p>Write, edit, or translate discourses and teachings</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">💻</div>
                            <h4>Tech Support</h4>
                            <p>Website, app, design, and IT assistance from home</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="satvic-form-section">
                <div className="satvic-form-section-inner">
                    <div className="satvic-form-section-title">
                        <h2>Become a Remote Volunteer</h2>
                        <p>Let us know your digital skills and how you&apos;d like to help from home.</p>
                    </div>
                    <SharedVolunteerForm
                        title="Become a Remote Volunteer"
                        subtitle="Let us know your digital skills and how you'd like to help from home."
                        roleContext="Remote Volunteer"
                    />
                </div>
            </div>

        </main>
    );
}