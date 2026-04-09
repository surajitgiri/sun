export default function ProgramBenefits({ benefits }) {
  // Fallback data if none provided
  const items = benefits || [
    { icon: '🥗', title: 'Adrishya Breakfast', desc: 'Learn the 20-item alkaline diet for cellular healing.' },
    { icon: '🔵', title: 'Navel Hammering', desc: 'Master the oxygen retention technique.' },
    { icon: '🧠', title: 'Mind Awakening', desc: 'Shift from overthinking to pure awareness.' }
  ];

  return (
    <section className="techniques sr" style={{ padding: '4rem 2rem' }}>
      <div className="sec-head">
        <h2 className="sec-h2">What You Will Experience</h2>
      </div>
      <div className="tech-grid">
        {items.map((item, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}