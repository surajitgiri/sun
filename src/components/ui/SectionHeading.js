import React from 'react';

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false,
  className = '',
  stats = null 
}) => {
  return (
    <div className={`text-center mb-20 ${className}`}>
      {stats && (
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-xl px-8 py-4 rounded-3xl border border-indigo-200/50 mb-8">
          {stats.map((stat, index) => (
            <span key={index} className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {stat}
            </span>
          ))}
        </div>
      )}
      
      <h2 className={`text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent drop-shadow-2xl leading-tight ${center ? 'mx-auto max-w-5xl' : ''}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
