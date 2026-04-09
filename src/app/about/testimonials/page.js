"use client";

import { useState } from 'react';

const testimonials = [
    {
        name: "Priya Sharma",
        city: "Mumbai",
        program: "Urja Shivir",
        rating: 5,
        avatar: "🌸",
        quote: "Before attending the Urja Shivir, I suffered from chronic fatigue and anxiety for years. Within just 5 days at Param Aalay, my energy completely transformed. The Adrishya Breakfast and Navel Hammering practice gave me a clarity I had never experienced before.",
        tag: "Energy & Healing"
    },
    {
        name: "Rajesh Kumar",
        city: "Delhi",
        program: "Naye Drishtikon Wala Shivir",
        rating: 5,
        avatar: "☀️",
        quote: "I was sceptical when my wife dragged me to the 6-day city camp. By day 3, I understood something profound — this is not spiritual theory, it is a practical science of the body and mind. My blood pressure readings have been normal ever since.",
        tag: "Health Transformation"
    },
    {
        name: "Anjali Mehta",
        city: "Pune",
        program: "Param Navratri",
        rating: 5,
        avatar: "🧘",
        quote: "The 11-Day Param Navratri Shivir was the most transformative experience of my life. Pujya Param Aalay Ji's guidance is beyond words. I returned home with a completely new understanding of myself and my relationship with food, sleep, and gratitude.",
        tag: "Spiritual Growth"
    },
    {
        name: "Vikram Singh",
        city: "Jaipur",
        program: "Morning Sun Prayog",
        rating: 5,
        avatar: "🌅",
        quote: "I have been doing the Morning Sun Gratitude practice for 8 months now. My joints no longer ache, my skin has improved, and I wake up before the alarm every day feeling genuinely enthusiastic about life. This is not just a practice — it is a revolution in living.",
        tag: "Daily Practice"
    },
    {
        name: "Sunita Verma",
        city: "Ahmedabad",
        program: "Cosmic Vision Shivir",
        rating: 5,
        avatar: "✨",
        quote: "After the 18-Day Cosmic Vision Shivir, I feel I have been given a completely new life. Old patterns of depression and negative thinking dissolved naturally. There was no preaching — only lived experience that changed my cells.",
        tag: "Inner Freedom"
    },
    {
        name: "Dr. Arjun Nair",
        city: "Bangalore",
        program: "Urja Shivir",
        rating: 5,
        avatar: "🔬",
        quote: "As a doctor, I was initially resistant to anything that seemed 'spiritual'. But the Sun To Human system is rooted in physiology, not faith. The oxygen retention science behind Navel Hammering is legitimate. My patients whom I recommended this to have shown measurable improvement.",
        tag: "Scientific Validation"
    },
];

const tags = ["All", "Energy & Healing", "Health Transformation", "Spiritual Growth", "Daily Practice", "Inner Freedom", "Scientific Validation"];

export default function TestimonialsPage() {
    const [activeTag, setActiveTag] = useState("All");
    const [expandedId, setExpandedId] = useState(null);

    const filtered = activeTag === "All"
        ? testimonials
        : testimonials.filter(t => t.tag === activeTag);

    return (
        <main className="min-h-screen bg-white font-sans pb-24">

            {/* Hero */}
            <div className="satvic-page-hero">
                <div className="satvic-page-hero-inner">
                    <span className="satvic-page-hero-badge">🙏 Stories of Transformation</span>
                    <h1>Lives That Changed</h1>
                    <p>
                        These are not marketing claims — these are real stories from real seekers who experienced the Sun To Human path firsthand. Every word is lived truth.
                    </p>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="satvic-info-card">
                <div className="satvic-info-card-inner">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '1.5rem',
                        textAlign: 'center'
                    }}>
                        {[
                            { icon: '👥', value: '50,000+', label: 'Lives Transformed' },
                            { icon: '🏙️', value: '120+', label: 'Cities Reached' },
                            { icon: '🏕️', value: '500+', label: 'Camps Conducted' },
                            { icon: '⭐', value: '4.98 / 5', label: 'Average Rating' },
                        ].map(stat => (
                            <div key={stat.label} style={{ padding: '1rem' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                                <div style={{
                                    fontSize: '1.6rem',
                                    fontWeight: 900,
                                    color: '#1a1a1a',
                                    fontFamily: "'Playfair Display', serif",
                                    marginBottom: '0.25rem'
                                }}>{stat.value}</div>
                                <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filter Tags */}
            <div style={{ padding: '3rem 1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                    {tags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            style={{
                                padding: '0.5rem 1.25rem',
                                borderRadius: '50px',
                                border: activeTag === tag ? '1.5px solid #FF8C00' : '1.5px solid #e5e7eb',
                                background: activeTag === tag ? 'rgba(255,140,0,0.1)' : 'transparent',
                                color: activeTag === tag ? '#c45c00' : '#666',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.25s',
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Testimonial Cards */}
            <div style={{ maxWidth: '72rem', margin: '2rem auto 0', padding: '0 1.5rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '1.75rem'
                }}>
                    {filtered.map((t, i) => {
                        const isExpanded = expandedId === i;
                        const shortQuote = t.quote.length > 160 ? t.quote.slice(0, 160) + '...' : t.quote;

                        return (
                            <div
                                key={i}
                                style={{
                                    background: '#fff',
                                    border: '1px solid #f0f0f0',
                                    borderRadius: '1.25rem',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.3s',
                                    cursor: 'default',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,140,0,0.12)';
                                    e.currentTarget.style.borderColor = 'rgba(255,214,0,0.5)';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                                    e.currentTarget.style.borderColor = '#f0f0f0';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Tag */}
                                <span style={{
                                    display: 'inline-block',
                                    padding: '3px 10px',
                                    borderRadius: '50px',
                                    background: 'rgba(255,140,0,0.08)',
                                    color: '#c45c00',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.06em',
                                    textTransform: 'uppercase',
                                    alignSelf: 'flex-start',
                                }}>
                                    {t.tag}
                                </span>

                                {/* Stars */}
                                <div style={{ display: 'flex', gap: '3px' }}>
                                    {Array.from({ length: t.rating }).map((_, s) => (
                                        <span key={s} style={{ color: '#FF8C00', fontSize: '1rem' }}>★</span>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: '#444',
                                    lineHeight: 1.75,
                                    fontStyle: 'italic',
                                    flex: 1,
                                }}>
                                    &ldquo;{isExpanded ? t.quote : shortQuote}&rdquo;
                                </p>

                                {t.quote.length > 160 && (
                                    <button
                                        onClick={() => setExpandedId(isExpanded ? null : i)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: '#FF8C00',
                                            fontWeight: 700,
                                            fontSize: '0.85rem',
                                            cursor: 'pointer',
                                            padding: 0,
                                            textAlign: 'left',
                                        }}
                                    >
                                        {isExpanded ? '− Read less' : '+ Read more'}
                                    </button>
                                )}

                                {/* Divider */}
                                <div style={{ height: '1px', background: '#f3f4f6' }} />

                                {/* Author */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: '46px',
                                        height: '46px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #FFF3D0, #FFE5A0)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.4rem',
                                        flexShrink: 0,
                                    }}>
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem' }}>{t.name}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#888' }}>{t.city} · {t.program}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <div className="satvic-form-section" style={{ marginTop: '4rem' }}>
                <div className="satvic-form-section-inner">
                    <div className="satvic-cta-band">
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌟</div>
                        <h2>Your Story Could Be Next</h2>
                        <p>
                            Join thousands of seekers who have experienced the Sun To Human path. Attend a camp near you and begin your transformation today.
                        </p>
                        <a href="/programs" className="satvic-cta-btn">
                            View Upcoming Programs
                        </a>
                    </div>
                </div>
            </div>

        </main>
    );
}
