'use client';
import Link from 'next/link';

export default function AudioSection() {
  const audios = [
    { title: 'Morning Chants', type: 'Spotify', icon: '🎧', desc: 'Start your day with high frequency vibrations.', link: '/wisdom', color: 'var(--color-yellow)' },
    { title: 'Deep Sleep Nidra', type: 'Telegram', icon: '✈️', desc: 'Guided meditation for restorative sleep.', link: '/wisdom', color: 'var(--color-orange)' },
    { title: 'Breathwork Guide', type: 'Spotify', icon: '🎧', desc: 'Control your energy by mastering your breath.', link: '/wisdom', color: 'var(--color-yellow)' },
    { title: 'Satsang Excerpts', type: 'Website', icon: '🌐', desc: 'Bite-sized wisdom from recent live sessions.', link: '/wisdom', color: 'var(--color-gold)' },
    { title: 'Anxiety Relief', type: 'Telegram', icon: '✈️', desc: 'Immediate relief through guided audio therapy.', link: '/wisdom', color: 'var(--color-orange)' },
  ];

  return (
    <section className="audio-section sr" style={{ padding: '120px 5%', background: '#fff', color: 'var(--color-red-dark)' }}>
      <div className="sec-head" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{ color: 'var(--color-orange)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>Tune In</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-red-dark)' }}>Audio & Channels</h2>
        <p style={{ color: 'var(--color-red)', marginTop: '16px', fontSize: '1.1rem', maxWidth: '600px', margin: '16px auto 0' }}>Listen closely. Plug into the frequencies of transformation anywhere, anytime.</p>
      </div>

      <div className="audio-carousel" style={{ display: 'flex', gap: '24px', overflowX: 'auto', padding: '20px 5%', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', margin: '0 -5%' }}>
        {audios.map((audio, i) => (
          <Link key={i} href={audio.link} className="audio-card" style={{ flex: '0 0 320px', scrollSnapAlign: 'center', background: '#fff', borderRadius: '16px', padding: '32px', textDecoration: 'none', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', border: '1px solid var(--color-gold)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
              <div style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 4px 12px rgba(128, 0, 0, 0.15))' }}>{audio.icon}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', background: audio.color, color: 'var(--color-red-dark)', padding: '6px 14px', borderRadius: '30px', fontWeight: 'bold' }}>{audio.type}</div>
            </div>

            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-red-dark)', marginBottom: '12px', fontWeight: '700', letterSpacing: '-0.5px' }}>{audio.title}</h3>
            <p style={{ color: 'var(--color-red)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '40px', flexGrow: 1 }}>{audio.desc}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
              <div className="play-btn" style={{ width: '48px', height: '48px', borderRadius: '50%', background: audio.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-red-dark)', fontSize: '1.2rem', transition: 'all 0.3s' }}>
                ▶
              </div>
              <span style={{ fontSize: '0.9rem', color: 'var(--color-red-dark)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Listen Now</span>
            </div>
          </Link>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .audio-carousel::-webkit-scrollbar { display: none; }
          .audio-card:hover { background: #fffdf0 !important; border-color: var(--color-orange) !important; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(128, 0, 0, 0.12); }
          .audio-card:hover .play-btn { transform: scale(1.1); box-shadow: 0 8px 24px rgba(212, 175, 55, 0.35); }
        `,
        }}
      />
    </section>
  );
}