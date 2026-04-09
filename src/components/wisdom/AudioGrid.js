"use client";

export default function AudioGrid() {
  const audios = [
    { title: "Morning Sun Gratitude Guided Practice", duration: "15:00", category: "Guided Practice" },
    { title: "Overcoming the Mind's Chatter", duration: "42:30", category: "Satsang Recording" },
    { title: "The Truth About Digestion & Energy", duration: "35:15", category: "Health Series" },
    { title: "Navel Hammering Rhythm Track", duration: "20:00", category: "Practice Tool" },
  ];

  return (
    <section style={{ padding: '2rem', background: '#ffffff', color: '#333' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: '#fceb01ff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>
          Listen
        </span>
        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: '#111827' }}>Audio Discourses</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
        {audios.map((audio, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1.5rem',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e5e7eb',
            gap: '1.5rem',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = '#fbfd74ff'; // Soft orange border on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            {/* Interactive Play Button */}
            <button style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#fff7ed',
              color: '#ea0c2dff',
              border: '1px solid #fed7aa',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.25rem',
              flexShrink: 0,
              transition: 'all 0.2s ease'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ea990cff';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff7ed';
                e.currentTarget.style.color = '#eadf0cff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ▶
            </button>

            {/* Audio Meta Information */}
            <div style={{ flex: 1 }}>
              <span style={{
                fontSize: '0.75rem',
                color: '#eac50cff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: '700'
              }}>
                {audio.category}
              </span>
              <h4 style={{ fontSize: '1.25rem', margin: '0.25rem 0 0 0', fontWeight: '600', color: '#111827' }}>
                {audio.title}
              </h4>
            </div>

            {/* Duration */}
            <div style={{
              color: '#6b7280',
              fontSize: '0.9rem',
              fontWeight: '500',
              background: '#f3f4f6',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px'
            }}>
              {audio.duration}
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <button style={{
          border: '1px solid #e5e7eb',
          color: '#4b5563',
          padding: '0.75rem 2rem',
          borderRadius: '30px',
          background: '#ffffff',
          cursor: 'pointer',
          fontWeight: '600',
          transition: 'all 0.2s ease',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f9fafb';
            e.currentTarget.style.borderColor = '#d1d5db';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
        >
          Explore All Audios
        </button>
      </div>
    </section>
  );
}