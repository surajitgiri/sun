"use client";
import { useState } from 'react';

export default function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      title: "Evolving inner self - Pujya Param Aalya ji",
      url: "https://www.youtube.com/embed/Y5BVW3M_xRM",
      type: "youtube"
    },
    {
      title: "How to perform Navel Hammering perfectly",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual ID
      type: "youtube"
    },
    {
      title: "Wisdom Session (Instagram)",
      url: "https://www.instagram.com/reels/p/CzXy_x_S7_x/embed", // Example Instagram embed URL
      type: "instagram"
    },
  ];

  return (
    <section style={{ padding: '2rem', background: '#ffffffff', color: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: '#FFD600', fontWeight: 'bold', textTransform: 'uppercase' }}>Watch</span>
        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Video Library</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {videos.map((vid, idx) => (
          <div key={idx} style={{ background: '#2a2a2a', borderRadius: '16px', overflow: 'hidden' }}>
            {/* Responsive Video Container */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src={vid.url}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={vid.title}
              ></iframe>
            </div>

            <div style={{ padding: '1.25rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '500', lineHeight: '1.4' }}>{vid.title}</h4>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <button style={{
          border: '2px solid #FFD600',
          color: '#FFD600',
          padding: '0.75rem 2rem',
          borderRadius: '30px',
          background: 'transparent',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Load More Videos ↓
        </button>
      </div>
    </section>
  );
}