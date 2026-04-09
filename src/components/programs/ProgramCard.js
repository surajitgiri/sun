'use client';
import Link from 'next/link';

export default function ProgramCard({ title, type, description, icon, color, link, tag }) {
  return (
    <div className="adv-card">
      <div className="adv-card-top" style={{ background: color || 'linear-gradient(145deg,#001a3d,#003399)' }}>
        {icon || '✨'}
      </div>
      <div className="adv-card-body">
        {tag && <span className="adv-tag">{tag}</span>}
        <h3>{title}</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>{type}</p>
        <p>{description}</p>
        <div className="adv-btns">
          <Link href={link || '#'} className="ab-reg" style={{ textDecoration: 'none' }}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}