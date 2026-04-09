'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function HomeJourneyPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const steps = [
    { title: "Watch the Foundation Video", desc: "Understand the core philosophy of 'Don't read like a machine. Be here, fully alive.' before starting." },
    { title: "Download the Audio Tracks", desc: "Get the localized audio frequencies required for the morning and evening practices." },
    { title: "Commit to 21 Days", desc: "Follow the guided digital schedule strictly for 21 days to see profound mindset shifts." }
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
          position: relative; width: 100%; min-height: 70vh;
          display: flex; align-items: center; justify-content: center;
          background: #000; overflow: hidden; padding-top: 68px;
        }
        .imp-hero-bg {
          position: absolute; inset: 0;
          background: url('/food.jpg') center/cover no-repeat;
          opacity: 0.5;
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

        /* Steps List */
        .imp-step {
          display: flex; gap: 24px; background: #fff; padding: 32px; border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05); align-items: center; margin-bottom: 24px;
        }
        .imp-step-num {
          width: 64px; height: 64px; border-radius: 16px; flex-shrink:0;
          background: rgba(255,214,0,0.15); display: flex; align-items: center;
          justify-content: center; font-size: 1.8rem; font-weight: 700; color: #b32d00;
        }
        .imp-step-content h4 { font-size: 1.3rem; margin-bottom: 8px; color: var(--text-primary); }
        .imp-step-content p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; }

        /* FAQ */
        .imp-faq-item {
          background: #fff; border-radius: 16px; margin-bottom: 12px;
          overflow: hidden; border: 1px solid rgba(0,0,0,0.05);
        }
        .imp-faq-q {
          padding: 24px; width: 100%; text-align: left; font-weight: 600; font-size: 1.05rem;
          display: flex; justify-content: space-between; align-items: center; cursor: pointer;
          background: transparent; border: none; color: var(--text-primary);
        }
        .imp-faq-a { padding: 0 24px 24px; color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem; display: none; }
        .imp-faq-item.on .imp-faq-a { display: block; }
        .imp-faq-item.on .imp-faq-q { color: var(--color-red); }

        /* Actions */
        .imp-btn-solid {
          background: var(--grad-sun); color: #fff; padding: 18px 40px; border-radius: 100px;
          font-weight: 700; text-transform: uppercase; letter-spacing: 1px; display: inline-block; cursor: pointer; border: none;
          box-shadow: 0 10px 30px rgba(128,0,0,0.3); font-size: 1.1rem;
        }
      `}</style>

      <section className="imp-hero">
        <div className="imp-hero-bg"></div>
        <div className="imp-hero-content">
          <div className="imp-hero-tag">Digital Program</div>
          <h1 className="imp-hero-title">Start From Home</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 40px' }}>
            Cannot attend a physical camp right now? Begin the journey from the comfort of your own living room with guided digital practices.
          </p>
          <button className="imp-btn-solid">Start Practice Now ▶</button>
        </div>
      </section>

      <section className="imp-section">
        <div className="imp-sec-head">
          <h2>How It Works</h2>
          <p>Embarking on the Param Aalay lifestyle from home requires discipline. Follow these steps meticulously.</p>
        </div>
        <div>
          {steps.map((st, i) => (
            <div className="imp-step" key={i}>
              <div className="imp-step-num">{i + 1}</div>
              <div className="imp-step-content">
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="imp-section" style={{ background: 'var(--bg-section-alt)' }}>
         <div className="imp-sec-head">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div>
          {[
            {q: 'Do I need to pay to access the home practice?', a: 'No, the core home journey digital materials are free. However, attending a physical camp later is highly recommended for energy attunement.'},
            {q: 'Can I do the practices without the audio tracks?', a: 'The specific frequencies in our official audio tracks are essential for the techniques to work correctly.'}
          ].map((faq, i) => (
             <div className={`imp-faq-item ${activeFaq === i ? 'on' : ''}`} key={i}>
                <button className="imp-faq-q" onClick={() => toggleFaq(i)}>
                  {faq.q}
                  <span style={{fontSize: '1.2rem'}}>{activeFaq === i ? '−' : '+'}</span>
                </button>
                <div className="imp-faq-a">{faq.a}</div>
             </div>
          ))}
        </div>
      </section>

    </div>
  );
}
