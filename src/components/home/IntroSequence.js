'use client';
import { useState, useEffect } from 'react';

export default function IntroSequence() {
  const [phase, setPhase] = useState(0);
  // 0: Init, 1: Logo+Tagline, 2: Fade out, 3: Unmount

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem('intro_seen');
      if (seen) {
        setPhase(3);
        return;
      }
    } catch (e) {
      console.warn("sessionStorage not available");
    }

    // Sequence timing
    const t1 = setTimeout(() => setPhase(1), 300); // Show logo and tagline
    const t2 = setTimeout(() => setPhase(2), 16000); // Fade out to homepage after 18 seconds
    const t3 = setTimeout(() => {
      setPhase(3);
      try { sessionStorage.setItem('intro_seen', '1'); } catch (e) { }
    }, 19500); // Unmount

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const skipIntro = () => {
    setPhase(2);
    setTimeout(() => {
      setPhase(3);
      try { sessionStorage.setItem('intro_seen', '1'); } catch (e) { }
    }, 1400);
  };

  if (phase === 3) return null;

  return (
    <div id="intro" className={phase >= 2 ? 'gone' : ''} style={{ flexDirection: 'column' }}>

      {/* Logo and Tagline */}
      <div suppressHydrationWarning className="intro-video-layer" style={{ flexDirection: 'column', gap: '24px' }}>
        <video
          suppressHydrationWarning
          src="/logo.webm"
          autoPlay
          muted
          playsInline
          style={{ maxWidth: 'min(85vw, 520px)', width: 'auto', height: 'auto', opacity: phase >= 1 ? 1 : 0, transition: 'opacity 1s, transform 3s', transform: phase >= 1 ? 'scale(1)' : 'scale(0.95)' }}
        />

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          color: 'var(--color-red-dark)',
          fontWeight: 600,
          fontStyle: 'italic',
          letterSpacing: '1px',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease 0.4s',
          textAlign: 'center'
        }}>
        </p>
      </div>

      <button className="intro-skip-btn" onClick={skipIntro} style={{ opacity: phase > 0 ? 1 : 0 }}>Skip ›</button>
    </div>
  );
}
