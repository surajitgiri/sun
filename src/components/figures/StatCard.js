import React from 'react';

const StatCard = ({ 
  number, 
  label, 
  icon, 
  trend = 'up', 
  color = 'blue' 
}) => {
  const colors = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-emerald-500 to-teal-500',
    purple: 'from-purple-500 to-pink-500',
    orange: 'from-orange-500 to-red-500'
  };

  return (
    <div className="group relative p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity blur-xl"></div>
      <div className="flex items-baseline gap-4 mb-6">
        <div className="w-20 h-20 bg-gradient-to-br ${colors[color]} rounded-2xl flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-transform">
          {icon || '📈'}
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 group-hover:from-indigo-600">
            {number}
          </p>
          <span className="text-sm font-medium text-gray-500">+{trend === 'up' ? '12%' : '-3%'}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{label}</h3>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r ${colors[color]} w-4/5 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default StatCard;
