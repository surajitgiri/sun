import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="ft-marquee">
        <div className="ft-mq-inner">
          <span className="ft-mq-item">Pravachan Nahi, Prayog</span>
          <span className="ft-mq-item">प्रवचन नहीं, प्रयोग</span>
          <span className="ft-mq-item">Sun To Human is the Bridge</span>
          <span className="ft-mq-item">Health · Harmony · Happiness</span>
          <span className="ft-mq-item">www.paramaalay.org</span>
          <span className="ft-mq-item">Pravachan Nahi, Prayog</span>
          <span className="ft-mq-item">प्रवचन नहीं, प्रयोग</span>
          <span className="ft-mq-item">Sun To Human is the Bridge</span>
          <span className="ft-mq-item">Health · Harmony · Happiness</span>
          <span className="ft-mq-item">www.paramaalay.org</span>
        </div>
      </div>
      
      <div className="ft-grid">
        <div className="ft-brand">
          <h3>☀ PARAM AALAY</h3>
          <p>Sun To Human Foundation. Where universal laws align us with the cosmic rhythm to gain Health, Harmony, and Happiness. No preaching — only practice.</p>
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.64rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-red)', marginBottom: '8px', fontWeight: 700 }}>Address</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.6 }}>Param Aalay: The Esoteric Temple<br />City, State, Country Pincode</p>
          </div>
          <div className="ft-socials">
            <Link href="#" className="ft-soc">📷</Link>
            <Link href="#" className="ft-soc">▶</Link>
            <Link href="#" className="ft-soc">✈</Link>
            <Link href="#" className="ft-soc">🎵</Link>
          </div>
        </div>
        
        <div className="ft-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="#">Daily Morning Practice</Link></li>
            <li><Link href="#">Nabhi Jhatka Prayog</Link></li>
            <li><Link href="#">Adrishya Breakfast</Link></li>
            <li><Link href="#">Sun to Human Recipes</Link></li>
            <li><Link href="#">Books</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div className="ft-col">
          <h4>Participate</h4>
          <ul>
            <li><Link href="/programs/city-camps">Naye Drishtikon Wala Shivir</Link></li>
            <li><Link href="#">Param Aalay: The Esoteric Temple</Link></li>
            <li><Link href="/events/param-utsav">Param Utsav</Link></li>
            <li><Link href="/involved/volunteer">Volunteer</Link></li>
            <li><Link href="/programs/demo-workshops">Demo Workshops</Link></li>
          </ul>
        </div>
        
        <div className="ft-col">
          <h4>About & Centres</h4>
          <ul>
            <li><Link href="/about/param-mitras">Param Mitras</Link></li>
            <li><Link href="/transformation-stories">Transformation Stories</Link></li>
            <li><Link href="/centres">Centres List</Link></li>
            <li><Link href="#">City-wise Centres</Link></li>
          </ul>
          <div style={{ marginTop: '24px' }}>
             <h4 style={{ fontSize: '0.64rem', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--color-red)', marginBottom: '8px', fontWeight: 700 }}>Visitor Counter</h4>
             <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--color-gold)' }}>1,000,000+</p>
          </div>
        </div>
      </div>
      
      <div className="ft-bottom">
        <p>© 2025 Sun To Human Foundation · Param Aalay · www.paramaalay.org</p>
        <p style={{ color: 'var(--color-red-dark)', fontWeight: 500 }}>Pravachan Nahi, Prayog ☀</p>
      </div>
    </footer>
  );
}