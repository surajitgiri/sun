"use client";

export default function BookGrid() {
  // Sample book data - you can replace this with your actual books or an API fetch
  const books = [
    {
      title: "The Art of Inner Peace",
      author: "Pujya Param Aalay Ji",
      description: "A comprehensive guide to finding stillness and clarity in a chaotic world.",
      coverColor: "#f3f4f6",
      icon: "📖"
    },
    {
      title: "Naye Drishtikon",
      author: "Pujya Param Aalay Ji",
      description: "Discover a profound new perspective on life, relationships, and human existence.",
      coverColor: "#fffbeb",
      icon: "🌅"
    },
    {
      title: "Healing Through Wisdom",
      author: "Sun To Human Foundation",
      description: "Techniques and deep wisdom for natural healing and holistic spiritual growth.",
      coverColor: "#f0fdfa",
      icon: "🌿"
    }
  ];

  return (
    <section style={{ padding: '2rem', background: '#ffffff', color: '#333' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: '#d97706', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Read</span>
        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: '#111827' }}>Digital Library</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {books.map((book, idx) => (
          <div key={idx} style={{
            background: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            border: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
            // Inline hover effects
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
            }}
          >
            {/* Book Cover Design */}
            <div style={{
              height: '240px',
              background: book.coverColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              borderBottom: '1px solid #f3f4f6'
            }}>
              {book.icon}
            </div>

            {/* Book Details */}
            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827', marginBottom: '0.25rem', lineHeight: '1.4' }}>
                {book.title}
              </h4>
              <p style={{ color: '#d97706', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>
                By {book.author}
              </p>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', flexGrow: 1 }}>
                {book.description}
              </p>

              {/* Action Button */}
              <button style={{
                marginTop: '2rem',
                padding: '0.875rem 1rem',
                background: '#fff',
                border: '2px solid #d97706',
                color: '#d97706',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: '100%',
                fontSize: '1rem'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#d97706';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = '#d97706';
                }}
              >
                Read Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}