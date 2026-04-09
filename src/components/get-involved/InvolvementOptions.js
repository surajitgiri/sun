"use client";
import React from 'react';
import Link from 'next/link';

const involvementPaths = [
    {
        icon: '🙏',
        title: 'Volunteer at Camps',
        description: 'Serve seekers on the ground during transformative city and residential camps across India.',
        href: '/involved/volunteer-camps',
        badge: 'Param Sahyogi Mitra',
    },
    {
        icon: '🏕️',
        title: 'Residential Ashram Seva',
        description: 'Stay on-site for 5–18 days and serve during advanced programs at Param Aalay: The Esoteric Temple.',
        href: '/involved/volunteer-residential',
        badge: 'Ashram Seva',
    },
    {
        icon: '💻',
        title: 'Remote Volunteering',
        description: 'Contribute your digital skills — content, social media, design, tech — from anywhere in the world.',
        href: '/involved/remote-volunteering',
        badge: 'Digital Seva',
    },
    {
        icon: '🌟',
        title: 'Become a Param Mitra',
        description: 'Join our core team of living messengers. Organize local prayogs and be a bridge between seekers and the teaching.',
        href: '/involved/param-mitra',
        badge: 'Core Team',
    },
    {
        icon: '🧘',
        title: 'Full-Time Sadhak',
        description: 'Step away from worldly pursuits and dedicate your life to deep spiritual practice and seva at the ashram.',
        href: '/involved/full-time-sadhak',
        badge: 'Deep Commitment',
    },
    {
        icon: '💛',
        title: 'Sponsor a Camp',
        description: 'Fund free healing camps for those who cannot afford them. Your contribution transforms thousands of lives.',
        href: '#donate',
        badge: 'Make an Impact',
    },
];

const InvolvementOptions = () => {
    return (
        <section style={{
            background: 'linear-gradient(180deg, #fffbf0 0%, #ffffff 100%)',
            padding: '5rem 1.5rem',
        }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', maxWidth: '44rem', margin: '0 auto 3.5rem' }}>
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 16px',
                    borderRadius: '50px',
                    background: 'rgba(255,140,0,0.1)',
                    border: '1px solid rgba(255,140,0,0.25)',
                    color: '#c45c00',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem',
                }}>
                    ☀️ Your Path of Seva
                </span>
                <h2 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 900,
                    color: '#1a1a1a',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    marginBottom: '0.75rem',
                    lineHeight: 1.2,
                }}>
                    Choose How You Serve
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.7 }}>
                    Every act of contribution — whether hours, skills, or resources — creates ripples of transformation across thousands of lives.
                </p>
            </div>

            {/* Options Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                maxWidth: '72rem',
                margin: '0 auto',
            }}>
                {involvementPaths.map((option, idx) => (
                    <Link
                        key={idx}
                        href={option.href}
                        style={{ textDecoration: 'none' }}
                    >
                        <div
                            style={{
                                background: '#fff',
                                border: '1px solid #f0f0f0',
                                borderRadius: '1.25rem',
                                padding: '2rem',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                                transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.3s',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 16px 48px rgba(255,140,0,0.14)';
                                e.currentTarget.style.borderColor = 'rgba(255,214,0,0.55)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#f0f0f0';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Badge */}
                            <span style={{
                                display: 'inline-block',
                                padding: '3px 10px',
                                borderRadius: '50px',
                                background: 'rgba(255,140,0,0.07)',
                                color: '#c45c00',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                alignSelf: 'flex-start',
                                marginBottom: '0.5rem',
                            }}>
                                {option.badge}
                            </span>

                            {/* Icon */}
                            <div style={{
                                width: '56px',
                                height: '56px',
                                background: 'linear-gradient(135deg, #FFF3D0, #FFE5A0)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                            }}>
                                {option.icon}
                            </div>

                            {/* Text */}
                            <h3 style={{
                                fontSize: '1.15rem',
                                fontWeight: 800,
                                color: '#1a1a1a',
                                fontFamily: "'Playfair Display', Georgia, serif",
                                margin: 0,
                            }}>
                                {option.title}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                color: '#666',
                                lineHeight: 1.7,
                                flex: 1,
                                margin: 0,
                            }}>
                                {option.description}
                            </p>

                            {/* Arrow link */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: '#FF8C00',
                                fontWeight: 700,
                                fontSize: '0.85rem',
                                marginTop: '0.5rem',
                            }}>
                                Learn More <span>→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default InvolvementOptions;