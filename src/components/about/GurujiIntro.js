export default function GurujiIntro() {
  return (
    <section className="sr" style={{ padding: '6rem 2rem', background: '#faf9f6' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px' }}>
          {/* Using the image from your public folder */}
          <img 
            src="/gurujijpeg.jpeg" 
            alt="Pujya Param Aalay Ji" 
            style={{ width: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
          />
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <span className="sec-eye">The Visionary</span>
          <h2 style={{ fontSize: '2.8rem', fontFamily: 'Playfair Display, serif', marginBottom: '1.5rem' }}>
            Pujya Param Aalay Ji
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            "No preaching—only practice."
          </p>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Pujya Param Aalay Ji is not just a spiritual guide, but a scientist of the soul. Through years of deep meditation and research, he developed the profound techniques of Navel Hammering and the Adrishya diet.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            His teachings strip away the dogma of traditional religion, offering seekers a direct, practical, and experiential path to supreme health and absolute bliss.
          </p>
        </div>
      </div>
    </section>
  );
}