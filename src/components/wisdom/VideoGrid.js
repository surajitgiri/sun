"use client";
import { useState } from 'react';

const videos = [
    {
        title: "Evolving Inner Self — Pujya Param Aalay Ji",
        url: "https://www.youtube.com/embed/Y5BVW3M_xRM",
        category: "Discourse",
        duration: "42 min",
    },
    {
        title: "How to Perform Navel Hammering Perfectly",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        category: "Technique",
        duration: "18 min",
    },
    {
        title: "Morning Sun Gratitude — Step by Step",
        url: "https://www.youtube.com/embed/Y5BVW3M_xRM",
        category: "Practice",
        duration: "12 min",
    },
    {
        title: "The Science of the Adrishya Breakfast",
        url: "https://www.youtube.com/embed/Y5BVW3M_xRM",
        category: "Discourse",
        duration: "35 min",
    },
    {
        title: "Cosmic Vision: Aligning with Universal Laws",
        url: "https://www.youtube.com/embed/Y5BVW3M_xRM",
        category: "Discourse",
        duration: "55 min",
    },
    {
        title: "Bhago Nahi, Jago — Awakening the Inner Witness",
        url: "https://www.youtube.com/embed/Y5BVW3M_xRM",
        category: "Meditation",
        duration: "28 min",
    },
];

const categories = ["All", "Discourse", "Technique", "Practice", "Meditation"];

const categoryColors = {
    "Discourse": { bg: 'rgba(255,140,0,0.1)', color: '#c45c00' },
    "Technique": { bg: 'rgba(59,130,246,0.1)', color: '#1d4ed8' },
    "Practice": { bg: 'rgba(34,197,94,0.1)', color: '#15803d' },
    "Meditation": { bg: 'rgba(168,85,247,0.1)', color: '#7c3aed' },
};

export default function VideoGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [playingIdx, setPlayingIdx] = useState(null);

    const filtered = activeCategory === "All"
        ? videos
        : videos.filter(v => v.category === activeCategory);

    return (
        <section style={{
            background: '#fff',
            padding: '5rem 1.5rem',
            borderBottom: '1px solid #f3f4f6',
        }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', maxWidth: '44rem', margin: '0 auto 3rem' }}>
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
                    display: 'inline-block',
                }}>
                    🎬 Video Library
                </span>
                <h2 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                    fontWeight: 900,
                    color: '#1a1a1a',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    marginBottom: '0.75rem',
                }}>
                    Watch & Learn
                </h2>
                <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.7 }}>
                    Discourses, technique demonstrations, and guided practices from Pujya Param Aalay Ji — watch, absorb, and apply.
                </p>
            </div>

            {/* Category Filters */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                justifyContent: 'center',
                marginBottom: '2.5rem',
            }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                            padding: '0.45rem 1.1rem',
                            borderRadius: '50px',
                            border: activeCategory === cat
                                ? '1.5px solid #FF8C00'
                                : '1.5px solid #e5e7eb',
                            background: activeCategory === cat
                                ? 'rgba(255,140,0,0.1)'
                                : 'transparent',
                            color: activeCategory === cat ? '#c45c00' : '#666',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Video Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.75rem',
                maxWidth: '72rem',
                margin: '0 auto',
            }}>
                {filtered.map((vid, idx) => {
                    const isPlaying = playingIdx === idx;
                    const catStyle = categoryColors[vid.category] || categoryColors.Discourse;

                    return (
                        <div
                            key={idx}
                            style={{
                                background: '#fff',
                                border: '1px solid #f0f0f0',
                                borderRadius: '1.25rem',
                                overflow: 'hidden',
                                transition: 'box-shadow 0.3s, border-color 0.3s, transform 0.3s',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'rgba(255,214,0,0.4)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                                e.currentTarget.style.borderColor = '#f0f0f0';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {/* Video / Thumbnail */}
                            <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#111' }}>
                                {isPlaying ? (
                                    <iframe
                                        src={`${vid.url}?autoplay=1`}
                                        style={{
                                            position: 'absolute', top: 0, left: 0,
                                            width: '100%', height: '100%', border: 0,
                                        }}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={vid.title}
                                    />
                                ) : (
                                    <div
                                        onClick={() => setPlayingIdx(idx)}
                                        style={{
                                            position: 'absolute', inset: 0,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            background: 'linear-gradient(135deg, #1a1a1a, #2a2018)',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {/* Sun glow behind play button */}
                                        <div style={{
                                            position: 'absolute',
                                            width: '120px', height: '120px',
                                            background: 'radial-gradient(circle, rgba(255,214,0,0.25) 0%, transparent 70%)',
                                            borderRadius: '50%',
                                        }} />
                                        <div style={{
                                            width: '56px', height: '56px',
                                            background: 'linear-gradient(135deg, #FF8C00, #FFD600)',
                                            borderRadius: '50%',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            boxShadow: '0 4px 20px rgba(255,140,0,0.5)',
                                            paddingLeft: '4px',
                                            fontSize: '1.2rem',
                                            position: 'relative', zIndex: 1,
                                            transition: 'transform 0.2s',
                                        }}>
                                            ▶
                                        </div>
                                        {/* Duration badge */}
                                        <span style={{
                                            position: 'absolute',
                                            bottom: '10px', right: '10px',
                                            background: 'rgba(0,0,0,0.7)',
                                            color: '#fff',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            padding: '3px 8px',
                                            borderRadius: '6px',
                                        }}>
                                            {vid.duration}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Card Footer */}
                            <div style={{ padding: '1.25rem 1.5rem' }}>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '2px 9px',
                                    borderRadius: '50px',
                                    background: catStyle.bg,
                                    color: catStyle.color,
                                    fontSize: '0.7rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    marginBottom: '0.6rem',
                                }}>
                                    {vid.category}
                                </span>
                                <h4 style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    color: '#1a1a1a',
                                    lineHeight: 1.45,
                                    margin: 0,
                                }}>
                                    {vid.title}
                                </h4>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Load More */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button
                    style={{
                        padding: '0.8rem 2.5rem',
                        borderRadius: '50px',
                        border: '1.5px solid rgba(255,140,0,0.4)',
                        background: 'transparent',
                        color: '#c45c00',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(255,140,0,0.08)';
                        e.currentTarget.style.borderColor = '#FF8C00';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(255,140,0,0.4)';
                    }}
                >
                    Load More Videos ↓
                </button>
            </div>
        </section>
    );
}