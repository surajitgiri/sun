import React from 'react';

const StoryCard = ({ 
  avatar, 
  name, 
  title, 
  excerpt, 
  category,
  date 
}) => {
  return (
    <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-gray-100">
      <div className="p-8">
        <div className="flex items-start gap-4 mb-6">
          <img src={avatar} alt={name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-indigo-100" />
          <div>
            <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
              {category}
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed line-clamp-3">{excerpt}</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex gap-6 text-sm text-gray-500">
            <span>{name}</span>
            <span>{date}</span>
          </div>
          <button className="text-indigo-600 font-semibold hover:text-indigo-800 group-hover:translate-x-2 transition-all">
            Read Story →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
