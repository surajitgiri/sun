import React from 'react';

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  avatar,
  rating = 5 
}) => {
  return (
    <div className="relative p-10 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
      {/* Quote */}
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl -z-10 blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`w-6 h-6 rounded-full ${i < rating ? 'bg-amber-400 shadow-lg' : 'bg-gray-200'}`}></span>
          ))}
        </div>
        <blockquote className="text-2xl leading-relaxed italic text-gray-900 font-medium">
          "{quote}"
        </blockquote>
      </div>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl overflow-hidden ring-4 ring-indigo-100 group-hover:ring-indigo-200">
          <img src={avatar} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-xl text-gray-900">{author}</h4>
          <p className="text-indigo-600 font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
