export default function ProgramGallery() {
  return (
    <section className="sr" style={{ padding: '4rem 2rem' }}>
      <div className="sec-head" style={{ textAlign: 'center' }}>
        <h2 className="sec-h2">Glimpses of Past Programs</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Using your public folder images */}
        <img src="/guruji1.jpg" alt="Gallery 1" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
        <img src="/guruji2.JPG" alt="Gallery 2" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
        <img src="/guruji3.JPG" alt="Gallery 3" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
        <img src="/yoga.jpg" alt="Gallery 4" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
      </div>
    </section>
  );
}