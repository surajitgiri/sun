import React from 'react';

const TechniqueSteps = ({ steps = [], title }) => {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {title || 'How to Practice'}
      </h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {index + 1}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechniqueSteps;
