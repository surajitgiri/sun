import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate, label = 'Next Camp Starts In' }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center p-6 bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 w-28 md:w-32 mx-2 group hover:scale-110 transition-all duration-500">
        <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-2xl mb-2">
          {timeLeft[interval]}
        </div>
        <div className="text-lg font-bold text-white/90 uppercase tracking-wide text-xs group-hover:text-blue-100 transition-colors">
          {interval.slice(0, -1)}
        </div>
      </div>
    );
  });

  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-emerald-900/30" />
      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text drop-shadow-2xl">
          {label}
        </h2>
        <p className="text-xl md:text-2xl mb-16 opacity-90 max-w-2xl mx-auto">
          Limited seats - register before they fill up!
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-16 max-w-6xl mx-auto">
          {timerComponents.length ? timerComponents : (
            <div className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent drop-shadow-2xl">
              Live Now!
            </div>
          )}
        </div>
        
        <div className="inline-flex bg-white/20 backdrop-blur-xl px-12 py-6 rounded-3xl border border-white/40 shadow-2xl">
          <span className="text-2xl font-bold">⏰ Auto refreshes every second</span>
        </div>
      </div>
    </div>
  );
};

// Usage example: <CountdownTimer targetDate="2025-04-15T09:00:00" />
export default CountdownTimer;

