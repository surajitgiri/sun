'use client';
import { useState } from 'react';

export default function ProgramFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const defaultFaqs = [
    { q: 'Is this program suitable for beginners?', a: 'Yes, absolutely. We start from the absolute basics, assuming no prior experience.' },
    { q: 'What is the Adrishya Breakfast?', a: 'It is a specially curated 20-item alkaline diet that promotes cellular level healing, provided during our camps.' },
    { q: 'Can I do this online?', a: 'Our city camps are offline only because the energy transfer and technique correction require physical presence. However, we do have Home Journeys available digitally.' }
  ];

  const displayFaqs = faqs || defaultFaqs;

  return (
    <section className="sr" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div className="sec-head" style={{ textAlign: 'center' }}>
        <h2 className="sec-h2">Frequently Asked Questions</h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {displayFaqs.map((faq, idx) => (
          <div key={idx} style={{ border: '1px solid #eaeaea', borderRadius: '8px', overflow: 'hidden' }}>
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              style={{ width: '100%', textAlign: 'left', padding: '1.5rem', background: '#fff', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.1rem', fontWeight: '500' }}
            >
              {faq.q}
              <span style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }}>▼</span>
            </button>
            {openIndex === idx && (
              <div style={{ padding: '0 1.5rem 1.5rem', background: '#fff', color: '#666', lineHeight: '1.6' }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}