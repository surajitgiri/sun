'use client';
import { useState } from 'react';

export default function DemoWorkshopsPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="imp-page-root">
      <style>{`
        .imp-page-root {
          background: var(--bg-page); min-height: 100vh;
        }

        /* Hero Banner */
        .imp-hero {
          position: relative; width: 100%; min-height: 70vh;
          display: flex; align-items: center; justify-content: center;
          background: #000; overflow: hidden; padding-top: 68px;
        }
        .imp-hero-bg {
          position: absolute; inset: 0;
          background: url('/sun.jpg') center/cover no-repeat; opacity: 0.5;
        }
        .imp-hero-content {
          position: relative; z-index: 2; text-align: center;
          color: #fff; padding: 0 5%; max-width: 900px;
        }
        .imp-hero-tag {
          display: inline-block; font-size: 0.8rem; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase; color: var(--color-yellow);
          margin-bottom: 20px; border: 1px solid rgba(255,214,0,0.5);
          padding: 8px 16px; border-radius: 100px; background: rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
        }
        .imp-hero-title {
          font-family: var(--font-heading); font-size: clamp(2.5rem, 6vw, 4.5rem);
          margin-bottom: 24px; line-height: 1.1;
        }

        /* Content Sections */
        .imp-section { padding: 80px 5%; max-width: 1000px; margin: 0 auto; }
        .imp-sec-head { text-align: center; margin-bottom: 50px; }
        .imp-sec-head h2 { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 16px; }
        .imp-sec-head p { color: var(--text-secondary); font-size: 1.1rem; max-width: 700px; margin: 0 auto; line-height: 1.6; }

        /* Form / Request Box */
        .inv-box {
          background: #fff; border-radius: 24px; padding: 48px; box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;
        }
        @media(max-width: 768px) { .inv-box { grid-template-columns: 1fr; padding: 24px; } }

        /* Actions */
        .imp-btn-solid {
          background: var(--grad-sun); color: #fff; padding: 16px 36px; border-radius: 100px;
          font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: inline-block; cursor: pointer; border: none;
          box-shadow: 0 10px 30px rgba(128,0,0,0.3); width: 100%;
        }
      `}</style>

      <section className="imp-hero">
        <div className="imp-hero-bg"></div>
        <div className="imp-hero-content">
          <div className="imp-hero-tag">Beginner Program</div>
          <h1 className="imp-hero-title">Demo Workshops</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 40px' }}>
            Bring the transformative teachings of Param Aalay to your corporate office or residential society. A 2-hour profound preview of change.
          </p>
        </div>
      </section>

      <section className="imp-section">
        <div className="inv-box">
          <div>
            <h2 style={{fontSize: '2rem', marginBottom: '16px', fontFamily: 'var(--font-heading)'}}>Invite Us</h2>
            <p style={{color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6}}>Fill out the request form below. Our Param Mitras will contact you to coordinate dates and setup requirements.</p>
            <ul style={{listStyle: 'none', padding: 0, margin: '0 0 32px', color: 'var(--text-secondary)', display: 'grid', gap: '12px'}}>
              <li>✅ <strong>Corporate Offices</strong> (Stress Management)</li>
              <li>✅ <strong>Societies</strong> (Community Harmony)</li>
              <li>✅ <strong>Educational Institutions</strong> (Focus & Clarity)</li>
            </ul>
          </div>
          <div style={{background: 'var(--bg-section-alt)', padding: '32px', borderRadius: '16px'}}>
            <input type="text" placeholder="Organization Name" style={{width: '100%', padding: '12px 16px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #ccc'}} />
            <input type="email" placeholder="Contact Email" style={{width: '100%', padding: '12px 16px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #ccc'}} />
            <input type="text" placeholder="City" style={{width: '100%', padding: '12px 16px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #ccc'}} />
            <button className="imp-btn-solid">Submit Request</button>
          </div>
        </div>
      </section>
    </div>
  );
}
