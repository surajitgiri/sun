'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
const SLIDES = [
  { type: 'video', src: '/videoplayback.webm', label: null },
  { type: 'image', src: '/guruji1.jpg', label: 'Yogic Sadhana' },
  { type: 'image', src: '/guruji2.JPG', label: 'Solar Wisdom' },
  { type: 'image', src: '/guruji3.JPG', label: 'Param Aalay Ji' },
];
const STATS = [
];

export default function HeroCarousel() {
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const videoRef = useRef(null);

  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [width, setWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hintGone, setHintGone] = useState(false);

  /* measure container width */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.offsetWidth));
    ro.observe(el);
    setWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  /* video play/pause on slide change */
  useEffect(() => {
    if (!videoRef.current) return;
    current === 0
      ? videoRef.current.play().catch(() => { })
      : videoRef.current.pause();
  }, [current]);

  /* hint auto-hide */
  useEffect(() => {
    const t = setTimeout(() => setHintGone(true), 4500);
    return () => clearTimeout(t);
  }, []);

  /* ── drag helpers ── */
  const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const onDown = useCallback((e) => {
    if (e.target.closest('button')) return;
    setDragging(true);
    setStartX(getX(e));
    setOffsetX(0);
  }, []);

  const onMove = useCallback((e) => {
    if (!dragging) return;
    setOffsetX(getX(e) - startX);
  }, [dragging, startX]);

  const onUp = useCallback(() => {
    if (!dragging) return;
    setDragging(false);
    const threshold = width * 0.18;
    if (offsetX < -threshold && current < SLIDES.length - 1) setCurrent(c => c + 1);
    else if (offsetX > threshold && current > 0) setCurrent(c => c - 1);
    setOffsetX(0);
  }, [dragging, offsetX, width, current]);

  const goTo = (i) => { setCurrent(i); setOffsetX(0); };
  const goPrev = (e) => { e.stopPropagation(); if (current > 0) goTo(current - 1); };
  const goNext = (e) => { e.stopPropagation(); if (current < SLIDES.length - 1) goTo(current + 1); };

  const translateX = -current * width + offsetX;

  return (
    <>
      <style>{`
        /* ── ROOT ── */
        .hc-root {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 500px;
          overflow: hidden;
          background: #0a0a0a;
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-y;
        }
        .hc-root.is-dragging { cursor: grabbing !important; }
        .hc-root:not(.is-dragging) { cursor: grab; }

        /* ── TRACK ── */
        .hc-track {
          display: flex;
          height: 100%;
          will-change: transform;
        }

        /* ── SLIDES ── */
        .hc-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        .hc-slide video,
        .hc-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Fix applied here: changed from cover to contain */
          display: block;
          pointer-events: none;
          -webkit-user-drag: none;
        }
        .hc-slide-vid::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg,
            rgba(122,0,0,0.06) 0%,
            rgba(0,0,0,0.35) 70%,
            rgba(255,214,0,0.03) 100%);
          pointer-events: none;
        }
        .hc-slide-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom,
            rgba(0,0,0,0.08) 0%,
            rgba(0,0,0,0.52) 100%);
          pointer-events: none;
        }

        /* ── IMAGE LABEL ── */
        .hc-label {
          position: absolute;
          bottom: 80px;
          left: 0; right: 0;
          text-align: center;
          z-index: 6;
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3.5vw, 2.6rem);
          font-style: italic;
          color: #fff;
          letter-spacing: 0.06em;
          text-shadow: 0 2px 24px rgba(0,0,0,0.55);
          opacity: 0;
          transform: translateY(14px);
          animation: hcLabelIn 0.5s 0.1s ease forwards;
          pointer-events: none;
        }
        @keyframes hcLabelIn {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── INSTAGRAM-STYLE TOP BARS ── */
        .hc-bars {
          position: absolute;
          top: 14px;
          left: 16px; right: 16px;
          display: flex;
          gap: 5px;
          z-index: 12;
          pointer-events: none;
        }
        .hc-bar {
          flex: 1;
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.28);
          overflow: hidden;
        }
        .hc-bar-fill {
          height: 100%;
          background: #fff;
          border-radius: 2px;
          transition: width 0.35s ease;
        }

        /* ── ARROW BUTTONS ── */
        .hc-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 15;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.50);
          background: rgba(0,0,0,0.40);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          color: #fff;
          font-size: 1.5rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          /* hidden until hover */
          opacity: 0;
          pointer-events: none;
          transition:
            opacity      0.28s ease,
            transform    0.28s ease,
            background   0.22s ease,
            border-color 0.22s ease;
        }
        /* show on parent hover */
        .hc-root.show-arrows .hc-arrow       { opacity: 1; pointer-events: auto; }
        .hc-root.show-arrows .hc-arrow.edge  { opacity: 0.20; pointer-events: none; }

        .hc-arrow:hover {
          background: rgba(255, 255, 255, 0.88);
          border-color: #fff;
          color: #1A1A1A;
          transform: translateY(-50%) scale(1.12);
        }
        .hc-arrow:active { transform: translateY(-50%) scale(0.94); }
        .hc-arrow-left  { left:  22px; }
        .hc-arrow-right { right: 22px; }

        /* ── STAT CARDS ── */
        .hc-stat {
          position: absolute;
          z-index: 8;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.20);
          border-radius: 18px;
          padding: 16px 22px;
          color: #fff;
          min-width: 155px;
          pointer-events: none;
        }
        .hc-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.7rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: #fff;
          line-height: 1;
        }
        .hc-stat-sub {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.72);
          margin-top: 5px;
        }

        /* ── SOUND BUTTON ── */
        .hc-sound {
          position: absolute;
          bottom: 26px;
          right: 26px;
          z-index: 14;
          background: rgba(0,0,0,0.50);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          color: #fff;
          border-radius: 100px;
          padding: 8px 18px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 7px;
          transition: background 0.2s;
        }
        .hc-sound:hover { background: rgba(255,214,0,0.25); }

        /* ── SCROLL CTA ── */
        .hc-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 8;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.65);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          pointer-events: none;
        }
        .hc-scroll-line {
          width: 1px;
          height: 38px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.65), transparent);
          animation: hcBob 1.8s ease-in-out infinite;
        }
        @keyframes hcBob {
          0%,100% { transform: scaleY(1);    opacity: 0.65; }
          50%     { transform: scaleY(1.35); opacity: 1;    }
        }

        /* ── DRAG HINT ── */
        .hc-hint {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 16;
          pointer-events: none;
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(255,255,255,0.92);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: rgba(0,0,0,0.42);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          padding: 10px 24px;
          animation: hcHintOut 0.5s 4s ease forwards;
        }
        @keyframes hcHintOut { to { opacity: 0; } }
        .hc-hint-arr {
          font-size: 1.2rem;
          animation: hcArr 0.8s ease-in-out infinite alternate;
        }
        @keyframes hcArr {
          from { transform: translateX(-5px); }
          to   { transform: translateX( 5px); }
        }
      `}</style>

      <section
        ref={rootRef}
        className={[
          'hc-root',
          dragging ? 'is-dragging' : '',
          hovered ? 'show-arrows' : '',
        ].filter(Boolean).join(' ')}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); onUp(); }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        {/* ── Instagram top progress bars ── */}
        <div className="hc-bars">
          {SLIDES.map((_, i) => (
            <div key={i} className="hc-bar">
              <div className="hc-bar-fill" style={{ width: i <= current ? '100%' : '0%' }} />
            </div>
          ))}
        </div>

        {/* ── SLIDING TRACK ── */}
        <div
          ref={trackRef}
          className="hc-track"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(0.25,1,0.5,1)',
          }}
        >
          {SLIDES.map((slide, i) => (
            <div key={i} className={`hc-slide hc-slide-${slide.type === 'video' ? 'vid' : 'img'}`}>
              {slide.type === 'video' ? (
                <video ref={videoRef} src={slide.src} muted={muted} loop playsInline autoPlay />
              ) : (
                <>
                  <img src={slide.src} alt={slide.label} draggable={false} />
                  {current === i && <div className="hc-label" key={`lbl-${i}`}>{slide.label}</div>}
                </>
              )}
            </div>
          ))}
        </div>

        {/* ── ARROW BUTTONS (appear on hover) ── */}
        <button
          className={`hc-arrow hc-arrow-left${current === 0 ? ' edge' : ''}`}
          onClick={goPrev}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className={`hc-arrow hc-arrow-right${current === SLIDES.length - 1 ? ' edge' : ''}`}
          onClick={goNext}
          aria-label="Next"
        >
          ›
        </button>

        {/* ── STAT CARDS ── */}
        {STATS.map((s, i) => (
          <div key={i} className="hc-stat" style={s.pos}>
            <div className="hc-stat-val">{s.value}</div>
            <div className="hc-stat-sub">{s.sub}</div>
          </div>
        ))}



        {/* ── ONE-TIME DRAG HINT ── */}
        {!hintGone && (
          <div className="hc-hint">
            <span className="hc-hint-arr">←</span>
            DRAG TO EXPLORE
            <span className="hc-hint-arr">→</span>
          </div>
        )}
      </section>
    </>
  );
}