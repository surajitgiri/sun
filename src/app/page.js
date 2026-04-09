'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

// Existing Components
import IntroSequence from '@/components/home/IntroSequence';
import Popup from '@/components/global/Popup';
import HeroSection from '@/components/home/HeroSection';
import BeginnerPrograms from '@/components/home/BeginnerPrograms';
import ReactionZone from '@/components/home/ReactionZone';

// Newly Added Components
import AdvancedPrograms from '@/components/home/AdvancedPrograms';
import TransformationStories from '@/components/home/TransformationStories';
import BooksSection from '@/components/home/BooksSection';
import AudioSection from '@/components/home/AudioSection';

export default function Home() {
  // 1. Setup states and references for the Popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const beginnerSectionRef = useRef(null);
  const hasPopupTriggered = useRef(false); // Prevents popup from opening multiple times

  useEffect(() => {
    // --- Existing Scroll Reveal Logic ---
    const onScroll = () => {
      document.querySelectorAll('.sr, .fig-item, .tech-card').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('vis');
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    setTimeout(onScroll, 200);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // --- Popup opens only after crossing BeginnerPrograms ---
    const handleScrollPopup = () => {
      try {
        const popupSeen = sessionStorage.getItem('popup_seen');

        if (popupSeen || hasPopupTriggered.current || !beginnerSectionRef.current) return;

        const rect = beginnerSectionRef.current.getBoundingClientRect();

        // Opens only after the BeginnerPrograms section has been crossed
        if (rect.bottom <= 0) {
          setIsPopupOpen(true);
          hasPopupTriggered.current = true;

          try {
            sessionStorage.setItem('popup_seen', '1');
          } catch (e) { }
        }
      } catch (e) {
        console.warn('sessionStorage not available');
      }
    };

    window.addEventListener('scroll', handleScrollPopup, { passive: true });
    window.addEventListener('resize', handleScrollPopup);

    return () => {
      window.removeEventListener('scroll', handleScrollPopup);
      window.removeEventListener('resize', handleScrollPopup);
    };
  }, []);

  return (
    <>
      <IntroSequence />
      <HeroSection />

      {/* Statement */}
      <section className="statement sr">
        <div className="stmt-line-top"></div>
        <div className="stmt-line-bot"></div>
        <p className="stmt-quote">
          " At Sun To Human Foundation, we provide an environment where<strong> KNOWLEDGE </strong>turns into practical, proven, and harmonious development of body, mind, and soul <br></br> <strong> No preaching</strong><strong>—only practice </strong>"
        </p>
        <div className="stmt-attr">— Pujya Param Aalay Ji</div>
      </section>

      {/* Concept Section Removed (Ball Shape Image) as requested */}

      {/* Yellow Cards Carousel */}
      <section className="cards-section" id="programs">
        <div className="sec-head sr">
          <span className="sec-eye">What We Offer</span>
          <h2 className="sec-h2">True seekers find upliftment here;<br></br> scrollers waste time<br /><em>Choose wisely.</em></h2>
        </div>

        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

        <div className="carousel-outer">
          <div className="carousel-track">
            {[1, 2].map((set) => (
              <div key={set} style={{ display: 'contents' }}>
                <Link href="/programs" className="ycard yc-1" style={{ textDecoration: 'none', position: 'relative' }}>
                  <img src="/sun.jpg" alt="Programs" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255, 200, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%)', zIndex: 1 }}></div>
                  <div className="ycard-inner" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="ycard-tag" style={{ background: 'rgba(255,255,255,0.25)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>New Batches</div>
                    <h3 style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Programs</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>City camps, home journeys.</p>
                  </div>
                </Link>

                <Link href="/transformation-stories" className="ycard yc-2" style={{ textDecoration: 'none', position: 'relative' }}>
                  <img src="/successstories.jpg" alt="Success Stories" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255, 200, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%)', zIndex: 1 }}></div>
                  <div className="ycard-inner" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="ycard-tag" style={{ background: 'rgba(255,255,255,0.25)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>10L+ Stories</div>
                    <h3 style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Success Stories</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>Real transformations and complete disease reversal.</p>
                  </div>
                </Link>

                <Link href="/techniques" className="ycard yc-3" style={{ textDecoration: 'none', position: 'relative' }}>
                  <img src="/techniques.jpg" alt="Techniques" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255, 200, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%)', zIndex: 1 }}></div>
                  <div className="ycard-inner" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="ycard-tag" style={{ background: 'rgba(255,255,255,0.25)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>11 Practices</div>
                    <h3 style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Techniques</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>Navel Hammering, Third Eye, Sun Gratitude.</p>
                  </div>
                </Link>

                <Link href="/wisdom" className="ycard yc-4" style={{ textDecoration: 'none', position: 'relative' }}>
                  <img src="/audio.jpg" alt="Books & Audios" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255, 200, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%)', zIndex: 1 }}></div>
                  <div className="ycard-inner" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="ycard-tag" style={{ background: 'rgba(255,255,255,0.25)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Wisdom</div>
                    <h3 style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>Books &amp; Audios</h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>Pujya Param Aalay Ji's literature available digitally.</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beginner Programs */}
      <div ref={beginnerSectionRef}>
        <BeginnerPrograms />
      </div>

      {/* Newly Linked Components Replacing Hardcoded HTML */}
      <AdvancedPrograms />
      <BooksSection />
      <AudioSection />
      <TransformationStories />

      {/* Figures */}
      <section className="figures">
        <div className="sec-head sr">
          <span className="sec-eye">Our Impact</span>
          <h2 className="sec-h2">Real Numbers,<br /><em>Real Transformation</em></h2>
        </div>
        <div className="figs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
          <div className="fig-item"><span className="fig-num">3<span className="plus">L+</span></span><span className="fig-label">Total Participants</span></div>
          <div className="fig-item"><span className="fig-num">50<span className="plus">K+</span></span><span className="fig-label">Weight Loss Stories</span></div>
          <div className="fig-item"><span className="fig-num">35<span className="plus">K+</span></span><span className="fig-label">Medical Cure Stories</span></div>
          <div className="fig-item"><span className="fig-num">10<span className="plus">K+</span></span><span className="fig-label">Marriages Saved</span></div>
          <div className="fig-item"><span className="fig-num">15<span className="plus">K+</span></span><span className="fig-label">Hours of Teaching</span></div>
          <div className="fig-item"><span className="fig-num">2.8<span className="plus">L+</span></span><span className="fig-label">YouTube Subs</span></div>
        </div>
      </section>

      {/* Techniques */}
      <section className="techniques" id="techniques">
        <div className="sec-head sr">
          <span className="sec-eye">The Method</span>
          <h2 className="sec-h2">Proven Techniques<br /><em>for Every Seeker</em></h2>
        </div>
        <div className="tech-grid">
          <div className="tech-card"><div className="tech-icon">🔵</div><h4>Navel Hammering</h4><p>World's fastest oxygen retention technique. Lose 10–40kg.</p></div>
          <div className="tech-card"><div className="tech-icon">👁</div><h4>Third Eye Activation</h4><p>Chandan Tilak ritual that awakens the energy of your third eye.</p></div>
          <div className="tech-card"><div className="tech-icon">☀</div><h4>Sun Gratitude Practice</h4><p>Sacred morning ritual connecting you with solar energy.</p></div>
        </div>
      </section>

      <ReactionZone />
    </>
  );
}