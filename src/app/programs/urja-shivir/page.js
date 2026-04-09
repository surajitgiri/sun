'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UrjaShivirPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });
  const [activeTab, setActiveTab] = useState('included'); // included, plan, past

  useEffect(() => {
    // Starts In Timer Logic
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    targetDate.setHours(10, 0, 0, 0);
    
    const timer = setInterval(() => {
      const d = targetDate - new Date();
      if (d <= 0) return;
      const pad = (n) => String(n).padStart(2, '0');
      setTimeLeft({
        d: pad(Math.floor(d / 86400000)),
        h: pad(Math.floor((d % 86400000) / 3600000)),
        m: pad(Math.floor((d % 3600000) / 60000)),
        s: pad(Math.floor((d % 60000) / 1000))
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="adv-page-root">
      <style>{`
        .adv-page-root {
          background: #0A0A0A; /* Dark mode for advanced programs */
          color: #fff;
          font-family: var(--font-body);
        }

        /* ── HERO BANNER ── */
        .adv-hero {
          position: relative;
          min-height: 90vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; text-align: center;
          padding: 100px 5% 50px;
        }
        .adv-hero-bg {
          position: absolute; inset: 0;
          background: url('/guruji1.jpg') center/cover no-repeat;
          opacity: 0.35;
        }
        .adv-hero::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent, #0A0A0A);
        }
        .adv-hero-content {
          position: relative; z-index: 2; max-width: 900px;
        }
        .adv-tag {
          font-size: 0.8rem; font-weight: 700; letter-spacing: 3px;
          text-transform: uppercase; color: #5C95FF;
          margin-bottom: 24px; display: inline-block;
          border: 1px solid rgba(92, 149, 255, 0.4);
          padding: 8px 16px; border-radius: 100px;
          background: rgba(0, 10, 30, 0.5);
        }
        .adv-title {
          font-family: var(--font-heading);
          font-size: clamp(3rem, 7vw, 5rem);
          margin-bottom: 24px; color: #fff;
          line-height: 1.1;
        }
        .adv-sub {
          font-size: clamp(1.1rem, 2vw, 1.3rem); color: rgba(255,255,255,0.7);
          margin-bottom: 40px; line-height: 1.6; max-width: 700px; margin-inline: auto;
        }

        /* TIMER */
        .adv-timer {
          display: flex; justify-content: center; gap: 24px; margin-top: 40px;
        }
        .adv-t-unit { text-align: center; }
        .adv-t-num { font-family: var(--font-heading); font-size: 2.5rem; color: #fff; line-height: 1; }
        .adv-t-lbl { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: #5C95FF; margin-top: 8px; }

        /* ── DETAILS GRID ── */
        .adv-section {
          padding: 80px 5%; max-width: 1200px; margin: 0 auto;
        }
        .adv-sec-head { margin-bottom: 50px; text-align: center; }
        .adv-sec-head h2 { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3.2rem); margin-bottom: 16px; }
        .adv-sec-head p { color: rgba(255,255,255,0.6); max-width: 600px; margin: 0 auto; line-height: 1.6; }
        
        .adv-grid-3 {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;
        }
        .adv-card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          padding: 40px 32px; border-radius: 24px;
          transition: transform 0.3s, background 0.3s;
        }
        .adv-card:hover { transform: translateY(-5px); background: rgba(255,255,255,0.06); }
        .adv-c-icon { font-size: 2.5rem; margin-bottom: 24px; }
        .adv-c-title { font-size: 1.4rem; margin-bottom: 16px; color: #fff; font-family: var(--font-heading); }
        .adv-c-text { color: rgba(255,255,255,0.6); line-height: 1.6; font-size: 0.95rem; }

        /* ── ELIGIBILITY ── */
        .adv-eligibility {
          display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px;
        }
        .el-box {
          background: rgba(255,255,255,0.02); border-radius: 20px; padding: 40px;
          border-top: 4px solid;
        }
        .el-box.yes { border-color: #4CAF50; }
        .el-box.no { border-color: #F44336; }
        .el-box h3 { margin-bottom: 24px; font-size: 1.5rem; display: flex; align-items: center; gap: 12px; }
        .el-list { list-style: none; padding: 0; margin: 0; }
        .el-list li { margin-bottom: 12px; display: flex; gap: 12px; color: rgba(255,255,255,0.7); line-height: 1.5; }

        /* ── INTERACTIVE TABS ── */
        .adv-tabs-nav {
          display: flex; gap: 16px; justify-content: center; margin-bottom: 40px; flex-wrap: wrap;
        }
        .adv-tab-btn {
          background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.6);
          border: 1px solid rgba(255,255,255,0.1); padding: 12px 24px;
          border-radius: 100px; font-weight: 700; cursor: pointer; text-transform: uppercase;
          letter-spacing: 1.5px; font-size: 0.8rem; transition: all 0.3s;
        }
        .adv-tab-btn.active {
          background: #fff; color: #000; border-color: #fff;
        }
        .adv-tab-btn:hover:not(.active) { background: rgba(255,255,255,0.1); color: #fff; }

        /* Tab Content Panel */
        .adv-tab-content {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);
          border-radius: 24px; padding: 60px; min-height: 400px;
        }
        .adv-incl-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
        }
        
        .plan-util-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 24px;
        }
        .plan-btn {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          padding: 24px; border-radius: 16px; text-align: center; color: #fff;
          cursor: pointer; transition: background 0.3s;
        }
        .plan-btn:hover { background: rgba(255,255,255,0.1); }
        .plan-icon { font-size: 2rem; margin-bottom: 12px; }

        /* ── BUTTONS ── */
        .adv-btn-solid {
           background: #5C95FF; color: #000; padding: 18px 40px; border-radius: 100px;
           font-weight: 800; text-transform: uppercase; letter-spacing: 2px;
           display: inline-block; cursor: pointer; border: none; font-size: 0.9rem;
           box-shadow: 0 10px 30px rgba(92,149,255,0.3); transition: transform 0.3s;
        }
        .adv-btn-solid:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(92,149,255,0.5); }

        @media (max-width: 768px) {
          .adv-eligibility { grid-template-columns: 1fr; }
          .adv-incl-grid { grid-template-columns: 1fr; }
          .adv-tab-content { padding: 32px 20px; }
        }
      `}</style>

      {/* ── HERO BANNER ── */}
      <section className="adv-hero">
        <div className="adv-hero-bg"></div>
        <div className="adv-hero-content">
          <div className="adv-tag">Advanced Residential Program</div>
          <h1 className="adv-title">5 Days Urja Shivir</h1>
          <p className="adv-sub">
            Five intensive days of energy activation and profound inner transformation. 
            Immerse yourself completely in the cosmic rhythm at our serene retreat centre.
          </p>
          <div style={{ marginTop: '32px' }}>
             <button className="adv-btn-solid" onClick={() => router.push('/forms/registration')}>Pre-Register Now</button>
          </div>

          <div className="adv-timer">
            <div className="adv-t-unit"><div className="adv-t-num">{timeLeft.d}</div><div className="adv-t-lbl">Days</div></div><span style={{opacity:0.3, fontSize: '2rem'}}>:</span>
            <div className="adv-t-unit"><div className="adv-t-num">{timeLeft.h}</div><div className="adv-t-lbl">Hrs</div></div><span style={{opacity:0.3, fontSize: '2rem'}}>:</span>
            <div className="adv-t-unit"><div className="adv-t-num">{timeLeft.m}</div><div className="adv-t-lbl">Min</div></div><span style={{opacity:0.3, fontSize: '2rem'}}>:</span>
            <div className="adv-t-unit"><div className="adv-t-num">{timeLeft.s}</div><div className="adv-t-lbl">Sec</div></div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM DETAILS / BENEFITS ── */}
      <section className="adv-section">
        <div className="adv-sec-head">
          <h2>Program Highlights</h2>
          <p>This is a residential immersion. You will be completely disconnected from the digital world and reconnected with your inner state of pure energy.</p>
        </div>
        <div className="adv-grid-3">
          <div className="adv-card">
            <div className="adv-c-icon">⚡</div>
            <h3 className="adv-c-title">Energy Activation</h3>
            <p className="adv-c-text">Directly guided by Pujya Param Aalay Ji to unlock stagnant energy patterns using high-intensity cosmic techniques.</p>
          </div>
          <div className="adv-card">
            <div className="adv-c-icon">🌌</div>
            <h3 className="adv-c-title">Digital Detox</h3>
            <p className="adv-c-text">Devices are surrendered upon entry. Experience 120 hours of pure silence, allowing your neurons to rewire organically.</p>
          </div>
          <div className="adv-card">
            <div className="adv-c-icon">🌿</div>
            <h3 className="adv-c-title">Cellular Rejuvenation</h3>
            <p className="adv-c-text">Coupled with the Adrishya diet and highly oxygenated environments to regenerate damaged cellular structures.</p>
          </div>
        </div>

        {/* ── ELIGIBILITY ── */}
        <div className="adv-eligibility">
          <div className="el-box yes">
            <h3><span style={{color: '#4CAF50'}}>✓</span> Who Can Join</h3>
            <ul className="el-list">
              <li><span>🟢</span> Anyone who has completed at least 1 Beginner City Camp.</li>
              <li><span>🟢</span> Individuals looking for deep spiritual and physical overhauls.</li>
              <li><span>🟢</span> Anyone above exactly 15 years and below 65 years.</li>
              <li><span>🟢</span> Seekers ready to abide strictly by the Ashram's silent protocol.</li>
            </ul>
          </div>
          <div className="el-box no">
            <h3><span style={{color: '#F44336'}}>✕</span> Who Cannot Join</h3>
            <ul className="el-list">
              <li><span>🔴</span> First-timers (must complete beginner camp first).</li>
              <li><span>🔴</span> Individuals with severe mobility issues or major recent surgeries.</li>
              <li><span>🔴</span> Pregnant women (due to intense energy shifts).</li>
              <li><span>🔴</span> Anyone who cannot stay without a mobile phone for 5 days.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE DASHBOARD SECTION ── */}
      <section className="adv-section" style={{ background: 'rgba(255,255,255,0.015)', paddingBlock: '100px' }}>
        <div className="adv-tabs-nav">
          <button className={`adv-tab-btn ${activeTab === 'included' ? 'active' : ''}`} onClick={() => setActiveTab('included')}>What's Included</button>
          <button className={`adv-tab-btn ${activeTab === 'plan' ? 'active' : ''}`} onClick={() => setActiveTab('plan')}>Plan Your Visit</button>
          <button className={`adv-tab-btn ${activeTab === 'past' ? 'active' : ''}`} onClick={() => setActiveTab('past')}>Past Glimpses</button>
        </div>

        <div className="adv-tab-content">
          {activeTab === 'included' && (
            <div className="adv-incl-grid">
              <div>
                <h3 style={{fontSize: '1.6rem', marginBottom: '16px', fontFamily: 'var(--font-heading)'}}>🛏️ Accommodation</h3>
                <p style={{color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '24px'}}>Shared ashram-style dormitories. Gender-segregated. Extremely clean and minimalist to avoid sensory overload.</p>
              </div>
              <div>
                <h3 style={{fontSize: '1.6rem', marginBottom: '16px', fontFamily: 'var(--font-heading)'}}>🍲 Meals</h3>
                <p style={{color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '24px'}}>Only the specialized alkaline Adrishya diet is served. Includes exactly mapped proportions of fruits, roots, and organic vital juices.</p>
              </div>
              <div>
                <h3 style={{fontSize: '1.6rem', marginBottom: '16px', fontFamily: 'var(--font-heading)'}}>📖 Learning Modules</h3>
                <p style={{color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '24px'}}>Includes all instructional materials, live sessions with Pujya Param Aalay Ji, and specialized audio-frequency therapy tracks.</p>
              </div>
            </div>
          )}

          {activeTab === 'plan' && (
            <div className="plan-util-grid">
              <div className="plan-btn"><div className="plan-icon">🗺️</div>How To Get There</div>
              <div className="plan-btn"><div className="plan-icon">📱</div>Download E-Pass</div>
              <div className="plan-btn"><div className="plan-icon">🧳</div>What To Pack List</div>
              <div className="plan-btn"><div className="plan-icon">📸</div>Virtual Tour</div>
              <div className="plan-btn"><div className="plan-icon">🚗</div>Travel Tips</div>
              <div className="plan-btn"><div className="plan-icon">📍</div>Popular Nearby</div>
            </div>
          )}

          {activeTab === 'past' && (
            <div style={{ textAlign: 'center', opacity: 0.7 }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>📸</div>
              <h2>Media Gallery Placeholder</h2>
              <p>Image grid of past Urja Shivirs will load here via the gallery API.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER CALL TO ACTION ── */}
      <section className="adv-section" style={{ textAlign: 'center', paddingBottom: '120px' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '24px' }}>Ready for the Reboot?</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>By registering, you agree to totally surrender to the routine for 5 days. We invite you to experience what living fully alive truly means.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="adv-btn-solid" onClick={() => router.push('/forms/registration')}>Lock Your Seat</button>
          <button className="adv-tab-btn" onClick={() => router.push('/involved/param-mitra')}>Be a Sahyogi Mitra</button>
        </div>
      </section>

    </div>
  );
}
