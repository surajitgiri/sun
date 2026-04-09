'use client';
import { useEffect, useState } from 'react';

export default function ScrollJourney() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the user has scrolled as a percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (totalHeight > 0) {
        // Cap it between 0 and 100
        const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-journey-bar">
      <div className="sj-track">
        {/* The Human moves from left to right based on scroll percentage */}
        <div 
          className="sj-human" 
          style={{ left: `calc(${scrollProgress}% - 20px)` }}
        >
          🚶🏽‍♂️
        </div>
        
        {/* The Authentic Glowing Sun (CSS handles the visuals now!) */}
        <div className="sj-sun"></div>
      </div>
    </div>
  );
}