"use client";

export default function ArticleGrid() {
  // Sample article data
  const articles = [
    {
      title: "Understanding the Sun to Human Philosophy",
      date: "October 15, 2023",
      category: "Philosophy",
      readTime: "5 min read",
      excerpt: "Dive deep into the core principles of the foundation and how it bridges the gap between the energy of nature and profound self-realization."
    },
    {
      title: "The Science Behind Navel Hammering",
      date: "November 02, 2023",
      category: "Practice",
      readTime: "8 min read",
      excerpt: "Explore the ancient roots and modern benefits of this core practice, designed to align your body's energy centers and promote natural healing."
    },
    {
      title: "Cultivating Inner Stillness in a Noisy World",
      date: "December 10, 2023",
      category: "Mindfulness",
      readTime: "6 min read",
      excerpt: "Practical guidance from Pujya Param Aalay Ji on maintaining peace and mental clarity regardless of external circumstances."
    },
    {
      title: "Diet and the Spiritual Body",
      date: "January 05, 2024",
      category: "Wellness",
      readTime: "7 min read",
      excerpt: "How the food we consume directly impacts our spiritual awareness, featuring guidelines for a balanced, high-vibration diet."
    }
  ];

  return (
    <section style={{ padding: '2rem', background: '#f9fafb', color: '#333' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: '#eae30cff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>
          Discover
        </span>
        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: '#111827' }}>Featured Articles</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {articles.map((article, idx) => (
          <div key={idx} style={{
            background: '#ffffff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            border: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            padding: '2rem'
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              e.currentTarget.style.borderColor = '#fde874ff'; // Soft orange border on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            {/* Meta Info (Category & Read Time) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{
                background: '#fff7ed',
                color: '#eae60cff',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {article.category}
              </span>
              <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                {article.readTime}
              </span>
            </div>

            {/* Title and Excerpt */}
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '1rem', lineHeight: '1.3' }}>
              {article.title}
            </h3>

            <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
              {article.excerpt}
            </p>

            {/* Footer Info (Date & Read Link) */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #f3f4f6',
              paddingTop: '1.5rem',
              marginTop: 'auto'
            }}>
              <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                {article.date}
              </span>
              <span style={{
                color: '#ffdd00ff',
                fontWeight: '600',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                Read Article <span style={{ fontSize: '1.2rem' }}>→</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
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
          View All Articles
        </button>
      </div>
    </section>
  );
}