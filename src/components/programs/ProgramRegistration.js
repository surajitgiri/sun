'use client';

export default function ProgramRegistration({ price, programName }) {
  return (
    <section className="sr" style={{ padding: '4rem 2rem', background: '#fff', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem', borderRadius: '16px', background: '#fdfbf7', border: '1px solid #f0ead6' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '1rem' }}>Reserve Your Seat</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Secure your spot for the upcoming {programName} batch.</p>
        
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#b30000', marginBottom: '2rem' }}>
          ₹{price} <span style={{ fontSize: '1rem', color: '#666', fontWeight: 'normal' }}>/ person</span>
        </div>
        
        <button className="btn-cta" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
          Proceed to Registration →
        </button>
        <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '1rem' }}>Limited seats available. First come, first served.</p>
      </div>
    </section>
  );
}