"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const SECTIONS = [
  {
    id: "camp-env",
    title: "Camp Environment",
    label: "Nature & Grounds",
    photos: [
      { src: "/CampEnv/_DSC1216.JPG", caption: "" },
      { src: "/CampEnv/092A0036.JPG", caption: "" },
      { src: "/CampEnv/092A0332.JPG", caption: "" },
      { src: "/CampEnv/092A1159.JPG", caption: "" },
      { src: "/CampEnv/092A1177.JPG", caption: "" },
      { src: "/CampEnv/092A8041.JPG", caption: "" },
      { src: "/CampEnv/092A8119.JPG", caption: "" },
      { src: "/CampEnv/1.JPG", caption: "" },
      { src: "/CampEnv/2 (2).JPG", caption: "" },
      { src: "/CampEnv/3 (2).JPG", caption: "" },
      { src: "/CampEnv/4.JPG", caption: "" },
      { src: "/CampEnv/5.JPG", caption: "" },
      { src: "/CampEnv/6.JPG", caption: "" },
      { src: "/CampEnv/10.JPG", caption: "" },
      { src: "/CampEnv/11.JPG", caption: "" },
    ],
  },
  {
    id: "residential",
    title: "Residential",
    label: "Living Spaces",
    photos: [
      { src: "/Residentials/1.jpg", caption: "Cozy cabin interior" },
      { src: "/Residentials/2 (2).jpg", caption: "Dining hall together" },
      { src: "/Residentials/3 (2).jpg", caption: "Common room activities" },
      { src: "/Residentials/4.jpg", caption: "Residential block at dawn" },
      { src: "/Residentials/5.jpg", caption: "Residential block at dawn" },
      { src: "/Residentials/6.jpg", caption: "Residential block at dawn" },
      { src: "/Residentials/7.jpg", caption: "Residential block at dawn" },
      { src: "/Residentials/bedroom.jpg", caption: "Morning stretch together" },
      { src: "/Residentials/mess1.png", caption: "Reading corner" },
      { src: "/Residentials/mess2.png", caption: "Dorm room life" },
    ],
  },
  {
    id: "swadiksha",
    title: "Swadiksha",
    label: "Training & Growth",
    photos: [
      { src: "/Swadiksha/1.JPG", caption: "Group workshop session" },
      { src: "/Swadiksha/2 (2).JPG", caption: "Team collaboration" },
      { src: "/Swadiksha/3 (2).JPG", caption: "Opening ceremony" },
      { src: "/Swadiksha/4.JPG", caption: "Leadership circle" },
      { src: "/Swadiksha/5.JPG", caption: "Peer learning exchange" },
      { src: "/Swadiksha/6.JPG", caption: "Community circle" },
      { src: "/Swadiksha/7.JPG", caption: "Graduation moment" },
      { src: "/Swadiksha/8.JPG", caption: "Graduation moment" },
      { src: "/Swadiksha/9.JPG", caption: "Graduation moment" },
      { src: "/Swadiksha/10.JPG", caption: "Graduation moment" },
    ],
  },
  {
    id: "meditation",
    title: "Meditation",
    label: "Inner Peace",
    photos: [
      { src: "/Meditation/1.JPG", caption: "Sunrise meditation" },
      { src: "/Meditation/2 (2).JPG", caption: "Group stillness" },
      { src: "/Meditation/3 (2).JPG", caption: "Breathing by the lake" },
      { src: "/Meditation/4.JPG", caption: "Evening reflection" },
      { src: "/Meditation/5.JPG", caption: "Yoga & mindfulness" },
      { src: "/Meditation/6.JPG", caption: "Silent hour" },
      { src: "/Meditation/8.JPG", caption: "Inner calm" },
      { src: "/Meditation/9.JPG", caption: "Inner calm" },
      { src: "/Meditation/10.JPG", caption: "Inner calm" },
      { src: "/Meditation/11.JPG", caption: "Inner calm" },
      { src: "/Meditation/12.JPG", caption: "Inner calm" },
      { src: "/Meditation/13.JPG", caption: "Inner calm" },
    ],
  },
];

/* ── Auto-scrolling strip ── */
function PhotoStrip({ section, onPhotoClick }) {
  const stripRef = useRef(null);
  const rafRef = useRef(null);
  const dragRef = useRef({ down: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let paused = false;

    const tick = () => {
      if (!paused) {
        el.scrollLeft += 1.2;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) el.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  const onMouseDown = (e) => {
    const el = stripRef.current;
    dragRef.current = { down: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    dragRef.current.down = false;
    stripRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e) => {
    if (!dragRef.current.down) return;
    e.preventDefault();
    const el = stripRef.current;
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = dragRef.current.scrollLeft - (x - dragRef.current.startX) * 1.4;
  };

  return (
    <div
      ref={stripRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      style={{
        display: "flex",
        gap: 10,
        overflowX: "auto",
        padding: "4px 4px 10px",
        cursor: "grab",
        userSelect: "none",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "thin",
      }}
    >
      {section.photos.map((photo, i) => (
        <button
          key={i}
          onClick={() => onPhotoClick(section, i)}
          aria-label={photo.caption}
          style={{
            flex: "0 0 auto",
            width: "clamp(130px, 20vw, 180px)",
            height: "clamp(130px, 20vw, 180px)",
            borderRadius: 10,
            overflow: "hidden",
            border: "none",
            padding: 0,
            cursor: "pointer",
            position: "relative",
            transition: "transform .18s, box-shadow .18s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </button>
      ))}
    </div>
  );
}

/* ── Lightbox ── */
function Lightbox({ section, index, onClose, onNavigate }) {
  const photo = section?.photos[index];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNavigate]);

  if (!section || !photo) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,.87)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 16,
        animation: "fadeIn .2s ease",
      }}
    >
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "fixed", top: 18, right: 18,
          background: "rgba(255,255,255,.12)", border: "none", color: "#fff",
          width: 38, height: 38, borderRadius: "50%", fontSize: 18,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}
        aria-label="Close"
      >✕</button>

      <div style={{ maxWidth: 840, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        {/* Section name & counter */}
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".12em", color: "rgba(255,255,255,.45)" }}>
          {section.title} &middot; {index + 1} of {section.photos.length}
        </p>

        {/* Image */}
        <div style={{ width: "100%", borderRadius: 14, overflow: "hidden", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", maxHeight: "65vh" }}>
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.caption}
            style={{ maxWidth: "100%", maxHeight: "65vh", objectFit: "contain", display: "block", animation: "fadeIn .2s ease" }}
          />
        </div>

        {/* Prev / Dots / Next */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={() => onNavigate(-1)}
            aria-label="Previous"
            style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "#fff", width: 40, height: 40, borderRadius: "50%", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >&#8592;</button>

          <div style={{ display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "center", maxWidth: 320 }}>
            {section.photos.map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i - index)}
                aria-label={`Photo ${i + 1}`}
                style={{
                  width: 8, height: 8, borderRadius: "50%", border: "none", padding: 0,
                  background: i === index ? "#fff" : "rgba(255,255,255,.3)",
                  transform: i === index ? "scale(1.3)" : "scale(1)",
                  cursor: "pointer",
                  transition: "background .15s, transform .15s",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => onNavigate(1)}
            aria-label="Next"
            style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", color: "#fff", width: 40, height: 40, borderRadius: "50%", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >&#8594;</button>
        </div>

        {/* Caption */}
        <p style={{ fontSize: 13, color: "rgba(255,255,255,.6)", letterSpacing: ".04em" }}>{photo.caption}</p>
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null); // { section, index }

  const openLightbox = useCallback((section, index) => {
    setLightbox({ section, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigate = useCallback((delta) => {
    setLightbox((prev) => {
      if (!prev) return null;
      const total = prev.section.photos.length;
      const newIdx = (prev.index + delta + total) % total;
      return { ...prev, index: newIdx };
    });
  }, []);

  return (
    <div style={{ marginTop: 176, padding: "0 24px 80px", maxWidth: 960, margin: "176px auto 0" }}>
      <h1
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "#1a1a18",
          marginBottom: 6,
          letterSpacing: "-0.02em",
        }}
      >
        Gallery
      </h1>
      <p style={{ fontSize: 15, color: "#7a7870", marginBottom: 48, fontWeight: 300 }}>
        Explore photos, videos, and highlights from our camps and events.
      </p>

      {SECTIONS.map((sec) => (
        <div key={sec.id} style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a1a18" }}>
              {sec.title}
            </span>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: "#7a7870", padding: "3px 10px", border: "1px solid rgba(0,0,0,.12)", borderRadius: 20 }}>
              {sec.label}
            </span>
          </div>
          <div style={{ borderRadius: 12, overflow: "hidden" }}>
            <PhotoStrip section={sec} onPhotoClick={openLightbox} />
          </div>
        </div>
      ))}

      {lightbox && (
        <Lightbox
          section={lightbox.section}
          index={lightbox.index}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      )}
    </div>
  );
}