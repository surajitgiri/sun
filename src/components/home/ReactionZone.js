'use client';

export default function ReactionZone() {
  const handleReact = (e, emoji) => {
    const btn = e.currentTarget;
    const el = btn.querySelector('.cnt');
    const parse = (s) => (s.includes('K') ? parseFloat(s) * 1000 : parseInt(s));
    const fmt = (n) => (n >= 1000 ? (n / 1000).toFixed(1) + 'K' : String(n));

    if (btn.classList.contains('on')) {
      btn.classList.remove('on');
      el.textContent = fmt(parse(el.textContent) - 1);
      return;
    }
    
    btn.classList.add('on');
    el.textContent = fmt(parse(el.textContent) + 1);
    
    const b = document.createElement('span');
    b.textContent = emoji;
    const r = btn.getBoundingClientRect();
    Object.assign(b.style, {
      position: 'fixed', fontSize: '2.8rem', pointerEvents: 'none', zIndex: '9999',
      transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
      left: r.left + r.width / 2 - 20 + 'px', top: r.top + 'px',
    });
    
    document.body.appendChild(b);
    requestAnimationFrame(() => {
      b.style.transform = 'translateY(-90px) scale(2)';
      b.style.opacity = '0';
    });
    setTimeout(() => b.remove(), 950);
  };

  return (
    <section className="reaction-zone sr">
      <h3>How Does This Make You Feel?</h3>
      <p>Share your energy — thousands of seekers are on this journey with you</p>
      <div className="react-row">
        <button className="rbtn" onClick={(e) => handleReact(e, '🙏')}><span>🙏</span><span className="cnt">2.4K</span></button>
        <button className="rbtn" onClick={(e) => handleReact(e, '❤️')}><span>❤️</span><span className="cnt">1.8K</span></button>
        <button className="rbtn" onClick={(e) => handleReact(e, '✨')}><span>✨</span><span className="cnt">3.1K</span></button>
        <button className="rbtn" onClick={(e) => handleReact(e, '🌟')}><span>🌟</span><span className="cnt">987</span></button>
        <button className="rbtn" onClick={(e) => handleReact(e, '🔥')}><span>🔥</span><span className="cnt">654</span></button>
      </div>
    </section>
  );
}