'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveHandler = (e) => {
      if (cursorRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        // Using the exact radial-gradient from your reference code
        cursorRef.current.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, rgba(255, 235, 100, 0.5) 0%, rgba(255, 200, 0, 0.3) 20%, rgba(224, 148, 0, 0.15) 45%, transparent 70%)`;
      }
    };

    document.addEventListener('mousemove', moveHandler);
    return () => document.removeEventListener('mousemove', moveHandler);
  }, []);

  return <div id="sun-cursor" ref={cursorRef}></div>;
}