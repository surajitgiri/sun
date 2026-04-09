'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BeginnerPrograms() {
  const [activeTab, setActiveTab] = useState('camps');
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 12);
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

  return (
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
        {/* CAMPS TAB */}
        <div className={`tpanel ${activeTab === 'camps' ? 'on' : ''}`}>
          <div className="tp-visual">
            <img src="/yoga.jpg" alt="Morning Camp" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }} />
            <div className="tp-visual-fb"><div className="be">🌅</div><p>नए दृष्टिकोण<br />वाला शिविर</p></div>
          </div>
          <div className="tp-content">
            <span className="hindi">नए दृष्टिकोण वाला शिविर</span>
            <h3>The Camp That Changes Everything</h3>
            <p>6-day powerful, 2-hour morning camp (6 AM–8 AM), followed by a specially designed 20-item Adrishya Breakfast.</p>
            <div className="tp-highlight">✅ Experience the energy in person — this is not an online program!</div>
            <div className="tp-badges">
              <span className="tbadge">🌅 6 AM–8 AM</span>
              <span className="tbadge">🥗 Free Breakfast</span>
              <span className="tbadge">₹100 Entry</span>
            </div>
            <div className="countdown">
              <div className="cd-unit"><span className="cd-num">{timeLeft.d}</span><div className="cd-lbl">Days</div></div><span className="cd-sep">:</span>
              <div className="cd-unit"><span className="cd-num">{timeLeft.h}</span><div className="cd-lbl">Hours</div></div><span className="cd-sep">:</span>
              <div className="cd-unit"><span className="cd-num">{timeLeft.m}</span><div className="cd-lbl">Mins</div></div><span className="cd-sep">:</span>
              <div className="cd-unit"><span className="cd-num">{timeLeft.s}</span><div className="cd-lbl">Secs</div></div>
            </div>
            <div className="tp-btns">
              <Link href="/programs/city-camps" className="btn-cta" style={{ textDecoration: 'none' }}>Explore & Register ☀</Link>
              <Link href="/centres" className="btn-outline" style={{ textDecoration: 'none' }}>Find Your City →</Link>
            </div>
          </div>
        </div>

        {/* HOME TAB */}
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

        {/* DEMO TAB */}
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
  );
}