'use client';
import { useState, useEffect } from 'react';

export default function ProgramTimer({ targetDateStr }) {
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    // If no date provided, default to 12 days from now
    const target = targetDateStr ? new Date(targetDateStr) : new Date(new Date().setDate(new Date().getDate() + 12));
    
    const timer = setInterval(() => {
      const d = target - new Date();
      if (d <= 0) {
        clearInterval(timer);
        return;
      }
      const pad = (n) => String(n).padStart(2, '0');
      setTimeLeft({
        d: pad(Math.floor(d / 86400000)),
        h: pad(Math.floor((d % 86400000) / 3600000)),
        m: pad(Math.floor((d % 3600000) / 60000)),
        s: pad(Math.floor((d % 60000) / 1000))
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateStr]);

  return (
    <div className="countdown">
      <div className="cd-unit"><span className="cd-num">{timeLeft.d}</span><div className="cd-lbl">Days</div></div><span className="cd-sep">:</span>
      <div className="cd-unit"><span className="cd-num">{timeLeft.h}</span><div className="cd-lbl">Hours</div></div><span className="cd-sep">:</span>
      <div className="cd-unit"><span className="cd-num">{timeLeft.m}</span><div className="cd-lbl">Mins</div></div><span className="cd-sep">:</span>
      <div className="cd-unit"><span className="cd-num">{timeLeft.s}</span><div className="cd-lbl">Secs</div></div>
    </div>
  );
}