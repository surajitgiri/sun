import React from 'react';

const TechniqueCard = ({ 
  title, 
  description, 
  icon, 
  steps = [], 
  duration 
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:-translate-y-2 group">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-500">
          {icon || '✨'}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6 pt-6 border-t">
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{steps.length} Steps</span>
          <span>{duration} min</span>
        </div>
        <button className="text-indigo-600 font-semibold hover:text-indigo-800 group-hover:underline">
          Learn →
        </button>
      </div>
    </div>
  );
};

export default TechniqueCard;
