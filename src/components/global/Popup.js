'use client';

export default function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      id="popup"
      onClick={(e) => { if (e.target.id === 'popup') onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 10000,
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(5px)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '20px'
      }}
    >
      <div
        className="pop-card"
        style={{
          background: '#FFFFFF',
          width: '100%',
          maxWidth: '380px', /* 🔥 Fix: Strictly limited width */
          maxHeight: '85vh', /* 🔥 Fix: Strictly limited height so it doesn't overflow */
          overflowY: 'auto',
          borderRadius: '16px',
          padding: '24px',
          position: 'relative',
          border: '3px solid #1A1A1A', /* Bombay Blokes solid border style */
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '12px', right: '12px',
            background: '#f0f0f0', border: 'none', borderRadius: '50%',
            width: '28px', height: '28px', cursor: 'pointer',
            fontWeight: 'bold', color: '#1A1A1A', display: 'flex',
            justifyContent: 'center', alignItems: 'center', fontSize: '12px'
          }}
        >
          ✕
        </button>

        {/* Heading reduced to 1.5rem for compact look */}
        <h2 style={{
          fontSize: '1.5rem', fontWeight: '800', margin: '0 0 10px 0',
          color: '#7A0000', fontFamily: "'Playfair Display', serif"
        }}>
          ✨ Upcoming Events
        </h2>

        <p style={{ fontSize: '0.85rem', color: '#555', marginBottom: '20px', lineHeight: '1.4' }}>
          Join thousands already on their journey from food to the divine. No preaching — only practice.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>

          {/* Event 1 */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#FAFAFA', padding: '10px', borderRadius: '10px', border: '1px solid #eee' }}>
            <div style={{ background: '#FFD600', color: '#1A1A1A', minWidth: '50px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', border: '2px solid #1A1A1A', lineHeight: '1' }}>
              <span style={{ fontSize: '1.1rem' }}>28</span>
              <small style={{ fontSize: '0.55rem' }}>APR</small>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <strong style={{ fontSize: '0.85rem', color: '#1A1A1A' }}>नए दृष्टिकोण वाला शिविर — Mumbai</strong>
              <span style={{ fontSize: '0.7rem', color: '#666' }}>6 AM–8 AM · 6 Days · ₹100 Entry</span>
            </div>
          </div>

          {/* Event 2 */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#FAFAFA', padding: '10px', borderRadius: '10px', border: '1px solid #eee' }}>
            <div style={{ background: '#FFD600', color: '#1A1A1A', minWidth: '50px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', border: '2px solid #1A1A1A', lineHeight: '1' }}>
              <span style={{ fontSize: '1.1rem' }}>15</span>
              <small style={{ fontSize: '0.55rem' }}>MAY</small>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <strong style={{ fontSize: '0.85rem', color: '#1A1A1A' }}>Param Navratri Shivir</strong>
              <span style={{ fontSize: '0.7rem', color: '#666' }}>11 Days Residential</span>
            </div>
          </div>

          {/* Event 3 */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#FAFAFA', padding: '10px', borderRadius: '10px', border: '1px solid #eee' }}>
            <div style={{ background: '#FFD600', color: '#1A1A1A', minWidth: '50px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', border: '2px solid #1A1A1A', lineHeight: '1' }}>
              <span style={{ fontSize: '1.1rem' }}>21</span>
              <small style={{ fontSize: '0.55rem' }}>JUN</small>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <strong style={{ fontSize: '0.85rem', color: '#1A1A1A' }}>5 Days Urja Shivir — Pune</strong>
              <span style={{ fontSize: '0.7rem', color: '#666' }}>Yoga Day Special</span>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          style={{
            width: '100%', padding: '12px', background: '#7A0000', color: '#FFF',
            border: '2px solid #1A1A1A', borderRadius: '8px', fontWeight: 'bold',
            textTransform: 'uppercase', fontSize: '0.85rem', cursor: 'pointer',
            position: 'relative'
          }}
        >
          View All Programs ☀
        </button>
      </div>
    </div>
  );
}