export default function ProgramDetailHero({ title, date, location, badge }) {
  return (
    <section className="stmt-line-bot sr" style={{ padding: '6rem 2rem', background: '#faf9f6', borderBottom: '1px solid #eaeaea' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        {badge && <span className="tbadge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{badge}</span>}
        <h1 style={{ fontSize: '3rem', fontFamily: 'Playfair Display, serif', color: '#1a1a1a', marginBottom: '1.5rem' }}>
          {title}
        </h1>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', color: '#666', fontSize: '1.1rem' }}>
          <span>📅 {date}</span>
          <span>📍 {location}</span>
        </div>
      </div>
    </section>
  );
}