import SharedVolunteerForm from "@/components/get-involved/SharedVolunteerForm";

export const metadata = {
    title: 'Volunteer at Camps | Sun To Human Foundation',
    description: 'Help organize local healing camps and serve attendees during physical events.',
};

export default function GeneralVolunteerPage() {
    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">🙏 On-Ground Seva</span>
                    <h1>Volunteer at Camps</h1>
                    <p>
                        Experience the joy of physical Seva. Help organize local healing camps, assist attendees, and ensure smooth operations during events.
                    </p>
                </div>
            </div>

            {/* Info Card */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div className="satvic-feature-grid">
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🤝</div>
                            <h4>Event Coordination</h4>
                            <p>Manage seating, entry flow, and overall camp logistics</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🥗</div>
                            <h4>Food Seva</h4>
                            <p>Assist in preparing and serving the pure Adrishya Breakfast</p>
                        </div>
                        <div className="satvic-feature-item">
                            <div className="satvic-feature-icon">🚗</div>
                            <h4>Logistics & Setup</h4>
                            <p>Transport arrangements, venue setup, and teardown support</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="satvic-form-section">
                <div className="satvic-form-section-inner">
                    <div className="satvic-form-section-title">
                        <h2>Apply to Volunteer</h2>
                        <p>Share your details to help at physical camps and local ashram events.</p>
                    </div>
                    <SharedVolunteerForm
                        title="Apply to Volunteer On-Ground"
                        subtitle="Share your details to help at physical camps and local ashram events."
                        roleContext="General/Camp Volunteer"
                    />
                </div>
            </div>

        </main>
    );
}