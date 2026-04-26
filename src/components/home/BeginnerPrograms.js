'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const cityData = {
  jaipur: {
    name: 'Jaipur',
    flag: '🏰',
    image: 'https://images.unsplash.com/photo-1770010314670-464a6d221858?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hindi: 'नए दृष्टिकोण वाला शिविर',
    title: 'The Pink City Awakens',
    desc: '6-day powerful, 2-hour morning camp (6 AM–8 AM) at Jawahar Circle, followed by a specially designed 20-item Adrishya Breakfast.',
    highlight: '✅ Experience the energy in person — this is not an online program!',
    badges: ['🌅 6 AM–8 AM', '🥗 Free Breakfast', '₹100 Entry'],
    venue: 'Jawahar Circle, Jaipur',
    registerLink: '/programs/city-camps/jaipur',
    campDate: (() => { const d = new Date(); d.setDate(d.getDate() + 12); d.setHours(6,0,0,0); return d; })(),
  },
  ahmedabad: {
    name: 'Ahmedabad',
    flag: '🌿',
    image: '/yoga.jpg',
    hindi: 'नए दृष्टिकोण वाला शिविर',
    title: 'The Spirit of Gujarat',
    desc: '6-day powerful, 2-hour morning camp (6 AM–8 AM) at Sabarmati Riverfront, followed by a specially designed 20-item Adrishya Breakfast.',
    highlight: '✅ Experience the energy in person — this is not an online program!',
    badges: ['🌅 5.30 AM–7.30 AM', '🥗 Free Breakfast', '₹500 Entry'],
    venue: 'Sabarmati Riverfront, Ahmedabad',
    registerLink: '/programs/city-camps/ahmedabad',
    campDate: (() => { const d = new Date(); d.setDate(d.getDate() + 7); d.setHours(6,0,0,0); return d; })(),
  },
  mumbai: {
    name: 'Mumbai',
    flag: '🌊',
    image: '/yoga.jpg',
    hindi: 'नए दृष्टिकोण वाला शिविर',
    title: 'The City That Never Stops Healing',
    desc: '6-day powerful, 2-hour morning camp (6 AM–8 AM) at Juhu Beach, followed by a specially designed 20-item Adrishya Breakfast.',
    highlight: '✅ Experience the energy in person — this is not an online program!',
    badges: ['🌅 6 AM–8 AM', '🥗 Free Lunch', '₹200 Entry'],
    venue: 'Juhu Beach, Mumbai',
    registerLink: '/programs/city-camps/mumbai',
    campDate: (() => { const d = new Date(); d.setDate(d.getDate() + 19); d.setHours(6,0,0,0); return d; })(),
  },
  pune: {
    name: 'Pune',
    flag: '☀️',
    image: '/yoga.jpg',
    hindi: 'नए दृष्टिकोण वाला शिविर',
    title: 'Oxford of the East, Transformed',
    desc: '6-day powerful, 2-hour morning camp (6 AM–8 AM) at Aga Khan Palace Grounds, followed by a specially designed 20-item Adrishya Breakfast.',
    highlight: '✅ Experience the energy in person — this is not an online program!',
    badges: ['🌅 6 AM–8 AM', '🥗 Free Breakfast', '₹100 Entry'],
    venue: 'Aga Khan Palace Grounds, Pune',
    registerLink: '/programs/city-camps/pune',
    campDate: (() => { const d = new Date(); d.setDate(d.getDate() + 5); d.setHours(6,0,0,0); return d; })(),
  },
};

export default function BeginnerPrograms() {
  const [activeTab, setActiveTab] = useState('camps');
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });
  const [showCityPopup, setShowCityPopup] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [displayCity, setDisplayCity] = useState(null); // what's currently visible
  const panelRef = useRef(null);

  useEffect(() => {
    const targetDate = displayCity
     ? cityData[displayCity].campDate
     : (() => {const d = new Date(); d.setDate(d.getDate() + 12); d.setHours(6,0,0,0); return d;})();
    
     // Reset to 00s briefly for visual feedback on city change
  setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });

    const timer = setInterval(() => {
      const diff = targetDate - new Date();
      if (diff <= 0) {clearInterval(timer); return;}
      const pad = (n) => String(n).padStart(2, '0');
      setTimeLeft({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [displayCity]);

  // Close popup on backdrop click
  useEffect(() => {
    if (!showCityPopup) return;
    const handler = (e) => {
      if (e.target.id === 'city-backdrop') setShowCityPopup(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [showCityPopup]);

  const handleCitySelect = (cityKey) => {
    if (animating || cityKey === selectedCity) return;
    setShowCityPopup(false);
    setAnimating(true);
  
    const el = panelRef.current;
  
    // Phase 1: slide current content OUT to the left
    el.style.transition = 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease';
    el.style.transform = 'translateX(-80px)';
    el.style.opacity = '0';
  
    setTimeout(() => {
      // Phase 2: update data + instantly reposition to the RIGHT (off-screen)
      setSelectedCity(cityKey);
      setDisplayCity(cityKey);
  
      el.style.transition = 'none';
      el.style.transform = 'translateX(80px)';
      el.style.opacity = '0';
  
      // Phase 3: on next paint, slide in from right
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease';
          el.style.transform = 'translateX(0)';
          el.style.opacity = '1';
          setTimeout(() => setAnimating(false), 370);
        });
      });
    }, 360);
  };
  
  const city = displayCity ? cityData[displayCity] : null;

  return (
    <>
      {/* ── City Picker Popup ── */}
      {showCityPopup && (
        <div
          id="city-backdrop"
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div style={{
            background: '#fff',
            borderRadius: '1.5rem',
            padding: '2rem',
            width: '100%',
            maxWidth: '420px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
            animation: 'slideUp 0.25s cubic-bezier(0.4,0,0.2,1)',
          }}>
            {/* Popup Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <div>
                <span style={{
                  display: 'inline-block', padding: '3px 12px', borderRadius: '50px',
                  background: 'rgba(255,140,0,0.1)', color: '#c45c00',
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em',
                  textTransform: 'uppercase', marginBottom: '0.4rem',
                }}>🏙️ Select City</span>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#1a1a1a' }}>
                  Where are you based?
                </h3>
              </div>
              <button
                onClick={() => setShowCityPopup(false)}
                style={{
                  border: 'none', background: '#f5f5f5', borderRadius: '50%',
                  width: '36px', height: '36px', fontSize: '1.1rem',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#555', flexShrink: 0,
                }}
              >✕</button>
            </div>
            <p style={{ margin: '0 0 1.5rem', fontSize: '0.85rem', color: '#888' }}>
              We'll show the camp details specific to your city.
            </p>

            {/* City Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {Object.entries(cityData).map(([key, c]) => (
                <button
                  key={key}
                  onClick={() => handleCitySelect(key)}
                  style={{
                    padding: '1rem',
                    border: selectedCity === key ? '2px solid #FF8C00' : '1.5px solid #e5e7eb',
                    borderRadius: '1rem',
                    background: selectedCity === key ? 'rgba(255,140,0,0.06)' : '#fff',
                    cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF8C00'; e.currentTarget.style.background = 'rgba(255,140,0,0.04)'; }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = selectedCity === key ? '#FF8C00' : '#e5e7eb';
                    e.currentTarget.style.background = selectedCity === key ? 'rgba(255,140,0,0.06)' : '#fff';
                  }}
                >
                  <span style={{ fontSize: '1.8rem' }}>{c.flag}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>{c.name}</span>
                  <span style={{ fontSize: '0.72rem', color: '#aaa' }}>{c.venue}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(24px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>

      <section className="beginner sr" id="beginner">
        <div className="sec-head">
          <span className="sec-eye">Start Here</span>
          <h2 className="sec-h2">Beginners Program</h2>
          <p className="sec-sub">Simple steps, profound impact. Begin your transformation<br />with easy-to-follow, effective techniques.</p>
        </div>

        <div className="tab-pills">
          <button className={`tpill ${activeTab === 'camps' ? 'on' : ''}`} onClick={() => setActiveTab('camps')}>🌅 Morning Camps</button>
          <button className={`tpill ${activeTab === 'home' ? 'on' : ''}`} onClick={() => setActiveTab('home')}>🏡 Home Journey</button>
          <button className={`tpill ${activeTab === 'demo' ? 'on' : ''}`} onClick={() => setActiveTab('demo')}>🎯 Workshops</button>
        </div>

        <div className="tpanels">

          {/* ── CAMPS TAB ── */}
          <div  ref={panelRef} className={`tpanel ${activeTab === 'camps' ? 'on' : ''}`} style={{ overflow: 'hidden' }}>

              {/* ✅ Real div — transform works on this */}
              <div
               
                style={{
                  display: 'contents',            // match whatever .tpanel uses internally
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  gap:'inherit',
                  width: '100%',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Visual */}
                <div className="tp-visual">
                  <img
                    key={city?.name}
                    src={city?.image || '/yoga.jpg'}
                    alt={city?.name || 'Morning Camp'}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="tp-visual-fb">
                    <div className="be">{city?.flag || '🌅'}</div>
                    <p>{city ? `${city.flag} ${city.name}` : 'नए दृष्टिकोण\nवाला शिविर'}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="tp-content">
                  {city && (
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '4px 12px', borderRadius: '50px',
                      background: 'rgba(255,140,0,0.1)', color: '#c45c00',
                      fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.5rem',
                    }}>
                      📍 {city.name} · <span style={{ fontWeight: 400, color: '#999' }}>{city.venue}</span>
                    </div>
                  )}

                  <span className="hindi">{city?.hindi || 'नए दृष्टिकोण वाला शिविर'}</span>
                  <h3>{city?.title || 'The Camp That Changes Everything'}</h3>
                  <p>{city?.desc || '6-day powerful, 2-hour morning camp (6 AM–8 AM), followed by a specially designed 20-item Adrishya Breakfast.'}</p>
                  <div className="tp-highlight">
                    {city?.highlight || '✅ Experience the energy in person — this is not an online program!'}
                  </div>

                  <div className="tp-badges">
                    {(city?.badges || ['🌅 6 AM–8 AM', '🥗 Free Breakfast', '₹100 Entry']).map((b) => (
                      <span key={b} className="tbadge">{b}</span>
                    ))}
                  </div>

                  {/* Countdown — now driven by city's campDate */}
                  <div className="countdown">
                    <div className="cd-unit"><span className="cd-num">{timeLeft.d}</span><div className="cd-lbl">Days</div></div>
                    <span className="cd-sep">:</span>
                    <div className="cd-unit"><span className="cd-num">{timeLeft.h}</span><div className="cd-lbl">Hours</div></div>
                    <span className="cd-sep">:</span>
                    <div className="cd-unit"><span className="cd-num">{timeLeft.m}</span><div className="cd-lbl">Mins</div></div>
                    <span className="cd-sep">:</span>
                    <div className="cd-unit"><span className="cd-num">{timeLeft.s}</span><div className="cd-lbl">Secs</div></div>
                  </div>

                  <div className="tp-btns">
                    <Link
                      href={city?.registerLink || '/programs/city-camps'}
                      className="btn-cta"
                      style={{ textDecoration: 'none' }}
                    >
                      Explore & Register ☀
                    </Link>
                    <button
                      className="btn-outline"
                      onClick={() => setShowCityPopup(true)}
                      style={{ cursor: 'pointer', boxShadow:"revert" , background: 'transparent', padding: 0, font: 'inherit' }}
                    >
                      {city ? '📍 Change City →' : 'Find Your City →'}
                    </button>
                  </div>
                </div>

              </div>{/* /panelRef */}
              </div>

          {/* HOME TAB  */}
          <div className={`tpanel ${activeTab === 'home' ? 'on' : ''}`}>
            <div className="tp-visual">
              <img src="/food.jpg" alt="Home Journey" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }} />
              <div className="tp-visual-fb" style={{ background: 'linear-gradient(135deg,#f0f8e8,#c8e6c9)' }}><div className="be">🏡</div><p style={{ color: 'rgba(0,0,0,0.6)' }}>Your Home,<br />Your Journey</p></div>
            </div>
            <div className="tp-content">
              <span className="hindi">घर से शुरुआत</span>
              <h3>Your Home, Your Space, Your Transformation</h3>
              <p>Begin the journey from the comfort of your own living room with guided digital practices.</p>
              <div className="tp-badges"><span className="tbadge">📱 Digital Access</span><span className="tbadge">⏰ At Your Pace</span></div>
              <div className="tp-btns">
                <Link href="/programs/home-journey" className="btn-cta" style={{ textDecoration: 'none' }}>Start Practice ▶</Link>
                <Link href="/programs/home-journey" className="btn-outline" style={{ textDecoration: 'none' }}>Know More →</Link>
              </div>
            </div>
          </div>

          {/* DEMO TAB  */}
          <div className={`tpanel ${activeTab === 'demo' ? 'on' : ''}`}>
            <div className="tp-visual">
              <img src="/sun.jpg" alt="Demo Workshop" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }} />
              <div className="tp-visual-fb" style={{ background: 'linear-gradient(135deg,#fff3c4,#ffe08a)' }}><div className="be">🎯</div><p style={{ color: 'rgba(0,0,0,0.6)' }}>Step Into a<br />Preview of Change</p></div>
            </div>
            <div className="tp-content">
              <span className="hindi">डेमो कार्यशाला</span>
              <h3>A Preview of Profound Change</h3>
              <p>Invite us for a demo workshop to understand the core principles of the Param Aalay lifestyle.</p>
              <div className="tp-badges"><span className="tbadge">🏢 Corporate</span><span className="tbadge">🏘️ Societies</span></div>
              <div className="tp-btns">
                <Link href="/programs/demo-workshops" className="btn-cta" style={{ textDecoration: 'none' }}>Know More →</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}