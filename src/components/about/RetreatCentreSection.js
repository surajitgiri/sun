import Link from 'next/link';

export default function RetreatCentreSection() {
  return (
    <section className="sr" style={{ padding: '6rem 2rem' }}>
      <div className="sec-head" style={{ textAlign: 'center' }}>
        <span className="sec-eye">The Sanctuary</span>
        <h2 className="sec-h2">Our Retreat Centre</h2>
        <p className="sec-sub">A space designed for absolute silence, healing, and inner work.</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Main Image Banner */}
        <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden' }}>
          <img src="/yoga.jpg" alt="Retreat Centre" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        
        {/* Supporting Details */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: '#faf9f6', padding: '2rem', borderRadius: '12px' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>Immersive Environment</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Surrounded by nature, our centre is built to facilitate deep meditative states and support the intensive Urja and Navratri Shivirs.</p>
          </div>
          <div style={{ background: '#faf9f6', padding: '2rem', borderRadius: '12px' }}>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>Sacred Spaces</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Featuring dedicated zones for Sun Gratitude, Navel Hammering, and the Adrishya Kitchen where our 20-item alkaline meals are prepared.</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/about/retreat-centre" className="btn-cta" style={{ textDecoration: 'none' }}>
            Explore the Campus →
          </Link>
        </div>
      </div>
    </section>
  );
}