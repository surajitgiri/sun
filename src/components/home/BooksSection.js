'use client';
import Link from 'next/link';

export default function BooksSection() {
  const books = [
    { title: 'The Satvic Mind', author: 'Param Team', price: '₹499', img: '/book.jpg' },
    { title: 'Healing with Elements', author: 'Guruji', price: '₹350', img: '/yoga.jpg' },
    { title: 'Awakening The Solar Plexus', author: 'Guruji', price: '₹550', img: '/sun.jpg' },
    { title: 'Diet & the Divine', author: 'Param Team', price: '₹299', img: '/food.jpg' },
    { title: 'Advanced Meditation', author: 'Guruji', price: '₹600', img: '/techniques.jpg' },
  ];

  return (
    <section className="books-section sr" style={{ padding: '120px 5%', background: '#FCF9F3' }}>
      <div className="sec-head" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>Literature</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#4A0404' }}>Our Wisdom Library</h2>
        <p style={{ color: '#555', marginTop: '16px', fontSize: '1.1rem', maxWidth: '600px', margin: '16px auto 0' }}>Deepen your understanding through foundational texts and essential reading guides.</p>
      </div>

      <div className="books-carousel" style={{ display: 'flex', gap: '32px', overflowX: 'auto', padding: '20px 5%', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', margin: '0 -5%' }}>
        {books.map((book, i) => (
          <div key={i} className="book-card" style={{ flex: '0 0 280px', scrollSnapAlign: 'center', background: '#fff', borderRadius: '24px', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '24px', textAlign: 'center', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', cursor: 'grab' }}>
            <div style={{ width: '100%', height: '340px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}>
              <img src={book.img} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', fontWeight: 'bold' }}>{book.author}</div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#222', marginBottom: '8px', lineHeight: '1.3' }}>{book.title}</h3>
            <p style={{ fontWeight: 'bold', color: '#7A0000', marginBottom: '24px', fontSize: '1.1rem' }}>{book.price}</p>
            <Link href="/wisdom" className="book-btn" style={{ display: 'inline-block', width: '100%', padding: '14px', background: 'transparent', color: '#7A0000', border: '1.5px solid #7A0000', borderRadius: '40px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Read More
            </Link>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .books-carousel::-webkit-scrollbar { display: none; }
        .book-card:hover { transform: translateY(-12px); box-shadow: 0 24px 48px rgba(0,0,0,0.08) !important; border-color: #D4AF37 !important; }
        .book-btn:hover { background: #7A0000 !important; color: #fff !important; }
      `}} />
    </section>
  );
}
