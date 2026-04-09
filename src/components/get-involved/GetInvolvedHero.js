import React from 'react';
import Link from 'next/link';

const GetInvolvedHero = () => {
    return (
        <section style={{
            position: 'relative',
            padding: '8rem 1.5rem 5rem',
            background: 'linear-gradient(135deg, #fffbf0 0%, #fff8e7 50%, #fff3d0 100%)',
            borderBottom: '1px solid rgba(255,214,0,0.2)',
            textAlign: 'center',
            overflow: 'hidden',
        }}>
            {/* Background glow orbs */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255,214,0,0.22) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-80px',
                left: '-80px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 10, maxWidth: '54rem', margin: '0 auto' }}>
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 16px',
                    borderRadius: '50px',
                    background: 'rgba(255,140,0,0.12)',
                    border: '1px solid rgba(255,140,0,0.3)',
                    color: '#c45c00',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    display: 'inline-block',
                }}>
                    ☀️ Join the Mission
                </span>

                <h1 style={{
                    fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                    fontWeight: 900,
                    color: '#1a1a1a',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    lineHeight: 1.12,
                    marginBottom: '1.25rem',
                }}>
                    Get Involved
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: '#555',
                    lineHeight: 1.8,
                    maxWidth: '40rem',
                    margin: '0 auto 2.5rem',
                }}>
                    Join our mission to transform millions of lives. Whether you volunteer, donate, or spread the word — every contribution creates a ripple of healing.
                </p>

                {/* 3 quick stats */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginBottom: '2.5rem',
                }}>
                    {[
                        { icon: '👥', value: '50,000+', label: 'Lives Transformed' },
                        { icon: '🏙️', value: '120+', label: 'Cities Reached' },
                        { icon: '🙏', value: '2,000+', label: 'Active Volunteers' },
                    ].map(stat => (
                        <div key={stat.label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{stat.icon}</div>
                            <div style={{
                                fontSize: '1.6rem',
                                fontWeight: 900,
                                color: '#1a1a1a',
                                fontFamily: "'Playfair Display', serif",
                                lineHeight: 1,
                            }}>{stat.value}</div>
                            <div style={{
                                fontSize: '0.78rem',
                                color: '#888',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.07em',
                                marginTop: '4px',
                            }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                <Link
                    href="#ways-to-help"
                    style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #FF8C00, #FFD600)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        padding: '0.9rem 2.75rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        boxShadow: '0 6px 24px rgba(255,140,0,0.35)',
                        transition: 'all 0.3s',
                    }}
                >
                    Explore Ways to Serve ↓
                </Link>
            </div>
        </section>
    );
};

export default GetInvolvedHero;