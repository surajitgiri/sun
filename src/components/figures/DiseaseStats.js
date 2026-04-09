import React from 'react';

const DiseaseStats = () => {
  const stats = [
    { category: 'Heart Diseases', recovered: '250,000+', color: 'red' },
    { category: 'Diabetes', recovered: '180,000+', color: 'orange' },
    { category: 'Cancer', recovered: '95,000+', color: 'purple' },
    { category: 'Mental Health', recovered: '1,200,000+', color: 'blue' },
    { category: 'Chronic Pain', recovered: '420,000+', color: 'green' },
    { category: 'Autoimmune', recovered: '85,000+', color: 'indigo' },
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            500+ Diseases
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Documented recovery cases across virtually every known medical condition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 hover:border-indigo-200">
              <div className="flex items-baseline gap-4 mb-8">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                  {stat.recovered}
                </div>
                <div className={`w-3 h-3 rounded-full bg-${stat.color}-500 animate-ping`}></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{stat.category}</h3>
              <div className="h-2 bg-gray-200 rounded-xl overflow-hidden">
                <div 
                  className={`h-full rounded-xl bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600`}
                  style={{width: `${75 + Math.random()*25}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiseaseStats;
