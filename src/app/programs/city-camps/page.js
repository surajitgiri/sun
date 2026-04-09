'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CityCampsPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Starts In Timer Logic
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);
    targetDate.setHours(6, 0, 0, 0);
    
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

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const cities = [
    { name: 'Mumbai', date: 'April 28 - May 3', venue: 'Shivaji Park Ground', status: 'Filling Fast' },
    { name: 'Pune', date: 'May 10 - May 15', venue: 'Deccan Gymkhana', status: 'Open' },
    { name: 'Delhi', date: 'June 5 - June 10', venue: 'Indira Gandhi Arena', status: 'Open' },
  ];

  const reasons = [
    "Reverses life-threatening diseases safely",
    "Lose excess weight naturally (10-40kg)",
    "Heal chronic depression and anxiety",
    "Gain infinite physical and mental energy",
    "Awaken the Third Eye and cosmic intuition",
    "Learn the world's most powerful oxygen retention",
    "Reconnect with the Sun's ultimate healing power",
    "Discover the science of the 20-item Adrishya Breakfast",
    "Overcome addictions effortlessly",
    "Save strained marriages and relationships",
    "Experience 'Doer-ship to Being-ness'",
    "Unlock hidden joy and eternal bliss",
    "Cleanse the accumulated toxins of decades",
    "No intense physical workouts required",
    "Scientifically backed universal principles",
    "Led by Pujya Param Aalay Ji's direct methodology",
    "Transform your entire family's aura"
  ];

  return (
    <div className="imp-page-root">
      <style>{`
        .imp-page-root {
          background: var(--bg-page);
          min-height: 100vh;
        }

        /* Hero Banner */
        .imp-hero {
          position: relative;
          width: 100%;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          overflow: hidden;
          padding-top: 68px; /* account for navbar */
        }
        .imp-hero-bg {
          position: absolute; inset: 0;
          background: url('/yoga.jpg') center/cover no-repeat;
          opacity: 0.5;
        }
        .imp-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
          padding: 0 5%;
          max-width: 900px;
        }
        .imp-hero-tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--color-yellow);
          margin-bottom: 20px;
          border: 1px solid rgba(255,214,0,0.5);
          padding: 8px 16px;
          border-radius: 100px;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
        }
        .imp-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          margin-bottom: 24px;
          line-height: 1.1;
        }
        .imp-hero-sub {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: rgba(255,255,255,0.85);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        /* Timer */
        .imp-timer-box {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(20px);
          padding: 24px 32px;
          border-radius: 24px;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
        }
        .imp-timer-lbl {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
          color: var(--color-yellow);
          font-weight: 700;
        }
        .imp-timer-grid {
          display: flex; gap: 20px; align-items: center;
        }
        .imp-timer-item {
          text-align: center;
        }
        .imp-timer-num {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 1;
        }
        .imp-timer-txt {
          font-size: 0.65rem;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }

        /* Content Sections */
        .imp-section {
          padding: 80px 5%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .imp-section-dark {
          background: var(--bg-section-alt);
        }
        .imp-sec-head {
          text-align: center;
          margin-bottom: 50px;
        }
        .imp-sec-head h2 {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        .imp-sec-head p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* City Calendar Grid */
        .imp-city-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        .imp-city-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.04);
          transition: transform 0.3s;
        }
        .imp-city-card:hover {
          transform: translateY(-5px);
        }
        .imp-ct-status {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 12px;
          border-radius: 100px;
          margin-bottom: 16px;
        }
        .imp-ct-status.fast { background: #FFF4E5; color: #E65100; }
        .imp-ct-status.open { background: #E8F5E9; color: #2E7D32; }
        .imp-ct-name { font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 8px; color: var(--text-primary); }
        .imp-ct-det { display: flex; align-items: center; gap: 8px; font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 8px; }

        /* 17 Reasons List */
        .imp-reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .imp-reason-item {
          display: flex; gap: 16px; align-items: flex-start;
          background: #fff; padding: 20px; border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.03);
        }
        .imp-ri-num {
          background: var(--color-yellow);
          color: #000; font-weight: 700;
          width: 32px; height: 32px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; font-size: 0.85rem;
        }
        .imp-ri-txt { font-size: 0.95rem; color: var(--text-primary); line-height: 1.5; font-weight: 500; }

        /* Registration Pipeline */
        .imp-steps-wrap {
          display: flex; flex-direction: column; gap: 24px;
          max-width: 800px; margin: 0 auto;
        }
        .imp-step {
          display: flex; gap: 24px; background: #fff;
          padding: 32px; border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          align-items: center;
        }
        .imp-step-icon {
          width: 64px; height: 64px; border-radius: 16px; flex-shrink:0;
          background: rgba(255,214,0,0.15); display: flex; align-items: center;
          justify-content: center; font-size: 1.8rem;
        }
        .imp-step-content h4 { font-size: 1.3rem; margin-bottom: 8px; color: var(--text-primary); }
        .imp-step-content p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; }

        /* FAQ */
        .imp-faq-item {
          background: #fff; border-radius: 16px; margin-bottom: 12px;
          overflow: hidden; border: 1px solid rgba(0,0,0,0.05);
        }
        .imp-faq-q {
          padding: 24px; width: 100%; text-align: left;
          font-weight: 600; font-size: 1.05rem; display: flex;
          justify-content: space-between; align-items: center;
          cursor: pointer; background: transparent; border: none;
          color: var(--text-primary);
        }
        .imp-faq-q:hover { background: #fafafa; }
        .imp-faq-a {
          padding: 0 24px 24px; color: var(--text-secondary);
          line-height: 1.6; font-size: 0.95rem; display: none;
        }
        .imp-faq-item.on .imp-faq-a { display: block; }
        .imp-faq-item.on .imp-faq-q { color: var(--color-red); }

        /* Action Buttons */
        .imp-btn-solid {
          background: var(--grad-sun);
          color: #fff; padding: 16px 36px; border-radius: 100px;
          font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
          display: inline-block; cursor: pointer; border: none;
          box-shadow: 0 10px 30px rgba(128,0,0,0.3);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .imp-btn-solid:hover {
          transform: translateY(-3px); box-shadow: 0 15px 40px rgba(128,0,0,0.4);
        }
        .imp-btn-outline {
           border: 2px solid var(--color-red); color: var(--color-red);
           padding: 14px 36px; border-radius: 100px; font-weight: 700;
           text-transform: uppercase; letter-spacing: 1px; display: inline-block;
           background: transparent; cursor: pointer; transition: background 0.3s;
        }
        .imp-btn-outline:hover { background: rgba(128,0,0,0.05); }

        @media (max-width: 768px) {
          .imp-hero-title { font-size: 2.2rem; }
          .imp-step { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* 1. Hero / Banner */}
      <section className="imp-hero">
        <div className="imp-hero-bg"></div>
        <div className="imp-hero-content">
          <div className="imp-hero-tag">Beginner Program</div>
          <h1 className="imp-hero-title">Naye Drishtikon Wala Shivir</h1>
          <p className="imp-hero-sub">
            The foundational 6-day morning camp that re-engineers your life equation. 
            Don't accept diseases and misery as fate. Learn the true universal laws.
          </p>

          <div className="imp-timer-box">
            <div className="imp-timer-lbl">Next Camp Starts In</div>
            <div className="imp-timer-grid">
              <div className="imp-timer-item"><div className="imp-timer-num">{timeLeft.d}</div><div className="imp-timer-txt">Days</div></div><span style={{opacity:0.5}}>:</span>
              <div className="imp-timer-item"><div className="imp-timer-num">{timeLeft.h}</div><div className="imp-timer-txt">Hrs</div></div><span style={{opacity:0.5}}>:</span>
              <div className="imp-timer-item"><div className="imp-timer-num">{timeLeft.m}</div><div className="imp-timer-txt">Mins</div></div><span style={{opacity:0.5}}>:</span>
              <div className="imp-timer-item"><div className="imp-timer-num">{timeLeft.s}</div><div className="imp-timer-txt">Secs</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. City Wise Calendar */}
      <section className="imp-section">
        <div className="imp-sec-head">
          <span style={{color: 'var(--color-red)', fontWeight: 700, letterSpacing: '2px', textTransform:'uppercase', fontSize: '0.8rem'}}>Calendar</span>
          <h2>Upcoming City Camps</h2>
          <p>Find a camp near you. Register early as venues reach full capacity quickly due to high demand.</p>
        </div>
        <div className="imp-city-grid">
          {cities.map((city, i) => (
            <div key={i} className="imp-city-card">
              <span className={`imp-ct-status ${city.status === 'Open' ? 'open' : 'fast'}`}>
                {city.status === 'Open' ? '🟢 Open' : '🔥 Filling Fast'}
              </span>
              <h3 className="imp-ct-name">{city.name}</h3>
              <div className="imp-ct-det">📅 {city.date} (6 AM - 8 AM)</div>
              <div className="imp-ct-det">📍 {city.venue}</div>
              <div style={{ marginTop: '24px' }}>
                <button className="imp-btn-solid" style={{ width: '100%', padding: '12px', fontSize: '0.85rem' }}>Book Seat — ₹100</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Program & 17 Reasons */}
      <section className="imp-section imp-section-dark">
        <div className="imp-sec-head">
          <h2>Why Attend This Camp?</h2>
          <p>This is not a regular yoga seminar. This is a life transformation protocol built on practical application of cosmic laws.</p>
        </div>
        
        <div className="imp-reasons-grid">
          {reasons.map((r, i) => (
            <div key={i} className="imp-reason-item">
              <div className="imp-ri-num">{i + 1}</div>
              <div className="imp-ri-txt">{r}</div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button className="imp-btn-outline">Download Brochure / PDF</button>
        </div>
      </section>

      {/* 4. Secure Your Spot Pipeline */}
      <section className="imp-section">
        <div className="imp-sec-head">
          <h2>How to Secure Your Spot</h2>
          <p>Follow these 3 simple steps to confirm your participation in the upcoming city camp.</p>
        </div>
        <div className="imp-steps-wrap">
          <div className="imp-step">
            <div className="imp-step-icon">📝</div>
            <div className="imp-step-content">
              <h4>1. Fill the Registration Form</h4>
              <p>Provide your basic details including age and any current medical conditions so we can assist you better.</p>
            </div>
          </div>
          <div className="imp-step">
            <div className="imp-step-icon">💳</div>
            <div className="imp-step-content">
              <h4>2. Pay the Setup Fee (₹100)</h4>
              <p>A nominal fee is collected via our secure payment gateway to confirm your commitment and reserve the physical seat.</p>
            </div>
          </div>
          <div className="imp-step">
            <div className="imp-step-icon">📱</div>
            <div className="imp-step-content">
              <h4>3. WhatsApp Confirmation</h4>
              <p>You will immediately receive your unique QR E-Pass and camp guidelines on your registered WhatsApp number.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs & Things to Carry */}
      <section className="imp-section imp-section-dark">
        <div className="imp-sec-head">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {[
            {q: 'What should I carry to the camp?', a: 'Please wear loose, comfortable clothing (preferably white or light colors). Bring a yoga mat, a water bottle, and your E-Pass.'},
            {q: 'Is the Adrishya Breakfast free?', a: 'Yes! The 20-item alkaline Adrishya breakfast is provided absolutely free to all attendees after the session.'},
            {q: 'Can children attend?', a: 'Individuals above 12 years of age are highly encouraged to attend and learn the techniques early in life.'},
            {q: 'I have severe knee pain. Can I do Navel Hammering?', a: 'Yes. Alternatives and chair modifications are provided. The technique is focused on breath and oxygen retention, not physical strain.'}
          ].map((faq, i) => (
             <div className={`imp-faq-item ${activeFaq === i ? 'on' : ''}`} key={i}>
                <button className="imp-faq-q" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <span style={{fontSize: '1.2rem', fontWeight: 300}}>{activeFaq === i ? '−' : '+'}</span>
                </button>
                <div className="imp-faq-a">{faq.a}</div>
             </div>
          ))}
        </div>
      </section>

      {/* 6. Form Links / Submissions */}
      <section className="imp-section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '24px' }}>Been to a Camp?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Share your transformation story to inspire millions of others worldwide.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="imp-btn-solid" onClick={() => router.push('/forms/upload-story')}>Upload Video Testimonial 🎥</button>
          <button className="imp-btn-outline" onClick={() => router.push('/forms/questionnaire')}>Fill Questionnaire</button>
        </div>
        
        <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Want to organise a camp in your city?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Reach out to our Param Mitras to learn the requirements.</p>
          <Link href="/involved/campaign" className="imp-btn-outline" style={{ border: 'none', borderBottom: '2px solid' }}>Contact Param Mitras</Link>
        </div>
      </section>

    </div>
  );
}
