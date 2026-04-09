import React from 'react';

const MilestoneVisuals = () => {
  const milestones = [
    { year: 2000, event: 'First Healing Camp', milestone: '150 People' },
    { year: 2005, event: 'First International', milestone: '1,500 Attendees' },
    { year: 2010, event: 'Millionth Healing', milestone: '1M Lives' },
    { year: 2015, event: 'Global Reach', milestone: '50 Countries' },
    { year: 2020, event: 'Pandemic Relief', milestone: 'Online Healing' },
    { year: 2025, event: 'Current', milestone: '10M+ Transformations' },
  ];

  return (
    <div className="py-24 bg-gradient-to-tl from-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(120,119,198,0.2),rgba(255,255,255,0.1))] opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-yellow-100 bg-clip-text">
            25 Years Journey
          </h2>
          <div className="inline-flex items-center gap-2 text-2xl bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm">
            <span>1998 - 2025</span>
            <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white/30 to-transparent z-0"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center mb-24 relative z-10">
              <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm flex flex-col items-center justify-center p-4 shadow-2xl border border-white/30 ml-12 lg:ml-0 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <span className="text-2xl font-black">{milestone.year}</span>
                <span className="text-xs opacity-80">Year</span>
              </div>
              <div className={`flex-1 p-8 rounded-3xl backdrop-blur-sm shadow-2xl border border-white/20 ml-12 lg:ml-0 ${index % 2 === 0 ? 'bg-white/10 mr-auto' : 'bg-white/10 ml-auto'}`}>
                <h3 className="text-2xl font-bold mb-3">{milestone.event}</h3>
                <p className="text-xl opacity-90 mb-4">{milestone.milestone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilestoneVisuals;
