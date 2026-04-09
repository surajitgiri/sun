export default function ProgramTestimonials() {
  return (
    <section className="sr" style={{ padding: '4rem 2rem', background: '#faf9f6' }}>
      <div className="sec-head" style={{ textAlign: 'center' }}>
        <h2 className="sec-h2">What Participants Say</h2>
      </div>
      <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        {[1, 2, 3].map((item) => (
          <div key={item} style={{ minWidth: '300px', background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#FFD600', marginBottom: '1rem', fontSize: '1.2rem' }}>★★★★★</div>
            <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '1.5rem' }}>
              "The 6-day morning camp completely rewired my routine. The Navel Hammering technique gave me energy I haven't felt in years."
            </p>
            <h5 style={{ margin: 0, fontWeight: '600' }}>Seeker {item}</h5>
            <span style={{ fontSize: '0.8rem', color: '#999' }}>Mumbai Batch</span>
          </div>
        ))}
      </div>
    </section>
  );
}