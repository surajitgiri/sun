'use client';
import Link from 'next/link';

export default function AdvancedPrograms() {
  return (
    <section className="advanced sr" id="advanced">
      <div className="adv-head">
        <div>
          <h2>Advanced Residential<br />Programs</h2>
        </div>
        <p>Immersive · Residential · Transformative</p>
      </div>
      
      <div className="adv-scroll">
        <div className="adv-card">
          <div className="adv-card-top" style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 26, 61, 0.4), rgba(0, 51, 153, 0.6)), url("/guruji2.JPG")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          </div>
          <div className="adv-card-body">
            <span className="adv-tag">⚡ Energy Activation</span>
            <h3>5 Days Urja Shivir</h3>
            <p>Five intensive days of energy activation and profound inner transformation.</p>
            <div className="adv-btns">
              <Link href="/programs/urja-shivir" className="ab-reg" style={{ textDecoration: 'none' }}>
                Register Now
              </Link>
            </div>
          </div>
        </div>

        <div className="adv-card">
          <div className="adv-card-top" style={{ 
            backgroundImage: 'linear-gradient(rgba(61, 0, 0, 0.4), rgba(122, 0, 0, 0.6)), url("/guruji1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          </div>
          <div className="adv-card-body">
            <span className="adv-tag">🌸 Navratri Special</span>
            <h3>11 Days Param Navratri</h3>
            <p>11-day residential camp for deep mind awakening and spiritual growth.</p>
            <div className="adv-btns">
              <Link href="/programs/navratri-shivir" className="ab-reg" style={{ textDecoration: 'none' }}>
                Register Now
              </Link>
            </div>
          </div>
        </div>
        
        <div className="adv-card">
          <div className="adv-card-top" style={{ 
            backgroundImage: 'linear-gradient(rgba(184, 134, 11, 0.4), rgba(255, 140, 0, 0.6)), url("/techniques.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          </div>
          <div className="adv-card-body">
            <span className="adv-tag">🌌 Ultimate Rebirth</span>
            <h3>18 Days Cosmic Vision</h3>
            <p>18-day profound journey to rewrite your life equations and achieve limitless potential.</p>
            <div className="adv-btns">
              <Link href="/programs/cosmic-vision" className="ab-reg" style={{ textDecoration: 'none' }}>
                Register Now
              </Link>
            </div>
          </div>
        </div>
        
        <div className="adv-card">
          <div className="adv-card-top" style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 51, 0, 0.4), rgba(0, 102, 0, 0.6)), url("/sun.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          </div>
          <div className="adv-card-body">
            <span className="adv-tag">🌧️ Serene Solitude</span>
            <h3>11 Days Savan Sadhna</h3>
            <p>Special monsoon retreat to dive into deep meditation and natural healing.</p>
            <div className="adv-btns">
              <Link href="/programs/savan-sadhana" className="ab-reg" style={{ textDecoration: 'none' }}>
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}