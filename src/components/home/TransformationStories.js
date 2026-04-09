'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function TransformationStories() {
  const carouselRef = useRef(null);

  // MOCK DATABASE: Simulating an API response with your YouTube links and Images
  const stories = [
    {
      id: 1,
      badge: "Ahmedabad Gotha",
      title: "Deep Healing",
      subtitle: "Experience complete transformation and inner peace.",
      type: "youtube",
      // Extracted ID FQIN4QTkgQQ and formatted for silent autoplay loop
      mediaSrc: "https://www.youtube.com/embed/FQIN4QTkgQQ?autoplay=1&mute=1&controls=0&loop=1&playlist=FQIN4QTkgQQ",
    },
    {
      id: 2,
      badge: "Ahmedabad Anand",
      title: "Priya's Transformation",
      subtitle: "Lost 15kg effortlessly with morning practices",
      type: "image",
      mediaSrc: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=600&h=800"
    },
    {
      id: 3,
      badge: "Sejawni",
      title: "Mental Clarity",
      subtitle: "Overcoming anxiety and finding ultimate focus.",
      type: "youtube",
      // Extracted ID lGP-UefulCg and formatted for silent autoplay loop
      mediaSrc: "https://www.youtube.com/embed/lGP-UefulCg?autoplay=1&mute=1&controls=0&loop=1&playlist=lGP-UefulCg",
    },
    {
      id: 4,
      badge: "Ahmedabad",
      title: "Sneha's Healing",
      subtitle: "Severe skin issues reversed completely in weeks.",
      type: "image",
      mediaSrc: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=600&h=800"
    }
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Trigger scroll reveal effect if you are using it globally
  useEffect(() => {
    const el = document.querySelector('#stories .sec-head');
    if (el) el.classList.add('vis');
  }, []);

  return (
    <section className="stories-section" id="stories" style={{ padding: '4rem 2rem', background: '#fff', overflow: 'hidden' }}>

      {/* 1. Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '1200px', margin: '0 auto 2rem auto' }}>
        <div className="sec-head sr" style={{ margin: 0, textAlign: 'left' }}>
          <span className="sec-eye">Real Transformations</span>
          <h2 className="sec-h2">Healing Stories,<br /><em>Choose wisely.</em></h2>
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="ts-nav" style={{ display: 'flex', gap: '10px', paddingBottom: '10px' }}>
          <button onClick={scrollLeft} style={navBtnStyle}>
            &#8592;
          </button>
          <button onClick={scrollRight} style={navBtnStyle}>
            &#8594;
          </button>
        </div>
      </div>

      {/* 2. Custom CSS for the Carousel */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .ts-carousel { 
          display: flex; 
          gap: 1.5rem; 
          overflow-x: auto; 
          scroll-snap-type: x mandatory; 
          padding-bottom: 2rem; 
          max-width: 1200px;
          margin: 0 auto;
        }
        .ts-carousel::-webkit-scrollbar { display: none; }
        .ts-carousel { -ms-overflow-style: none; scrollbar-width: none; }
        
        .ts-card { 
          position: relative; 
          min-width: 300px; 
          height: 480px; 
          border-radius: 1.5rem; 
          overflow: hidden; 
          scroll-snap-align: center; 
          flex-shrink: 0; 
          box-shadow: 0 10px 20px rgba(0,0,0,0.08); 
          transition: transform 0.4s ease; 
          display: block;
          text-decoration: none;
          background: #000;
        }
        .ts-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.15); }
        
        .ts-media { 
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.8s ease; 
          border: none;
        }
        
        /* Specific scaling to make YouTube iframes cover the portrait card nicely */
        .ts-youtube {
          width: 250%;
          height: 150%;
          top: -25%;
          left: -75%;
          pointer-events: none; /* Prevents iframe capturing clicks so Link works */
        }

        .ts-card:hover .ts-media:not(.ts-youtube) { transform: scale(1.05); }
        
        /* Clean Black Gradient at the bottom only for text readability */
        .ts-overlay { 
          position: absolute; 
          inset: 0; 
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%); 
          pointer-events: none; 
        }
        
        .ts-content { 
          position: absolute; 
          inset: 0; 
          padding: 1.5rem; 
          display: flex; 
          flex-direction: column; 
          justify-content: flex-end; 
          z-index: 10; 
        }
        
        .ts-badge { 
          align-self: flex-start; 
          padding: 0.3rem 0.8rem; 
          background: rgba(255,255,255,0.2); 
          border: 1px solid rgba(255,255,255,0.4); 
          border-radius: 999px; 
          color: #fff; 
          font-size: 0.7rem; 
          font-weight: 600; 
          letter-spacing: 1px; 
          text-transform: uppercase; 
          margin-bottom: 0.8rem; 
          backdrop-filter: blur(4px); 
        }
        
        .ts-title { 
          color: #fff; 
          font-size: 1.5rem; 
          font-family: serif;
          margin-bottom: 0.5rem; 
          text-shadow: 0 2px 4px rgba(0,0,0,0.5); 
        }
        
        .ts-subtitle { 
          color: rgba(255,255,255,0.9); 
          font-size: 0.95rem; 
          margin-bottom: 1rem; 
          line-height: 1.4;
        }

        .ts-cta {
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 1px solid #fff;
          align-self: flex-start;
          padding-bottom: 2px;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .ts-nav { display: none !important; } 
          .ts-card { min-width: 280px; height: 420px; }
        }
      `}} />

      {/* 3. The Interactive Carousel */}
      <div ref={carouselRef} className="ts-carousel">
        {stories.map((story) => (
          <Link
            href={`/transformation-stories#story-${story.id}`}
            key={story.id}
            className="ts-card"
          >
            {/* Media Layer */}
            {story.type === 'youtube' ? (
              <iframe
                src={story.mediaSrc}
                className="ts-media ts-youtube"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : story.type === 'video' ? (
              <video
                src={story.mediaSrc}
                poster={story.poster}
                autoPlay
                loop
                muted
                playsInline
                className="ts-media"
              />
            ) : (
              <img
                src={story.mediaSrc}
                alt={story.title}
                className="ts-media"
              />
            )}

            {/* Overlay Layer */}
            <div className="ts-overlay"></div>

            {/* Content Layer */}
            <div className="ts-content">
              <div className="ts-badge">{story.badge}</div>
              <h3 className="ts-title">{story.title}</h3>
              <p className="ts-subtitle">"{story.subtitle}"</p>
              <span className="ts-cta">Watch Story &#8594;</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Simple styling for the navigation buttons
const navBtnStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid #ccc',
  background: '#fff',
  color: '#333',
  fontSize: '1.2rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
};