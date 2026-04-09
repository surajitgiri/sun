export default function ProgramTravelInfo({ venueDetails }) {
  return (
    <section className="sr" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ background: '#fff', border: '1px solid #eaeaea', borderRadius: '16px', padding: '3rem' }}>
        <div className="sec-head" style={{ marginBottom: '2rem' }}>
          <span className="sec-eye">Logistics</span>
          <h2 className="sec-h2">How to Reach</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.5rem' }}>📍 Venue</h4>
            <p style={{ color: '#666', margin: 0 }}>{venueDetails || 'Param Aalay Retreat Centre, Main Campus.'}</p>
          </div>
          
          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.5rem' }}>✈️ By Air</h4>
            <p style={{ color: '#666', margin: 0 }}>Nearest airport is just 45 mins away. Cabs are readily available outside the terminal.</p>
          </div>

          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 0.5rem' }}>🚆 By Train</h4>
            <p style={{ color: '#666', margin: 0 }}>The central railway station is 12km from the venue. We provide shuttle services upon prior request.</p>
          </div>
          
          <button className="btn-outline" style={{ marginTop: '1rem', width: 'fit-content' }}>
            Open in Google Maps
          </button>
        </div>
      </div>
    </section>
  );
}