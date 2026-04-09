'use client';

export default function Popup({ isOpen, onClose }) {
  return (
    <div id="popup" className={isOpen ? 'on' : ''} onClick={(e) => { if (e.target.id === 'popup') onClose(); }}>
      <div className="pop-card">
        <button className="pop-close" onClick={onClose}>✕</button>
        <div className="pop-badge">✨ Upcoming Events</div>
        <h3>Transform Your Life<br />This Season</h3>
        <p>Join thousands already on their journey from food to the divine. No preaching — only practice.</p>
        <div className="pop-events">
          <div className="pop-ev">
            <div className="ev-date">28<small>APR</small></div>
            <div className="ev-info">
              <strong>नए दृष्टिकोण वाला शिविर — Mumbai</strong>
              <span>6 AM–8 AM · 6 Days · ₹100 Entry · Free Breakfast</span>
            </div>
          </div>
          <div className="pop-ev">
            <div className="ev-date">15<small>MAY</small></div>
            <div className="ev-info">
              <strong>Param Navratri Shivir — Retreat Centre</strong>
              <span>11 Days Residential · Limited Seats</span>
            </div>
          </div>
          <div className="pop-ev">
            <div className="ev-date">21<small>JUN</small></div>
            <div className="ev-info">
              <strong>5 Days Urja Shivir — Pune</strong>
              <span>International Yoga Day Special</span>
            </div>
          </div>
        </div>
        <button className="btn-fire" style={{ width: '100%', justifyContent: 'center' }} onClick={onClose}>
          View All Programs ☀
        </button>
      </div>
    </div>
  );
}