import React, { useState } from 'react';

const StoryFilter = ({ categories = [], onFilter }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleFilter = (category) => {
    setActiveCategory(category);
    onFilter(category);
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          <button
            onClick={() => handleFilter('All')}
            className={`px-6 py-3 rounded-full font-medium transition-all text-sm ${
              activeCategory === 'All'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border'
            }`}
          >
            All Stories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all text-sm ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryFilter;
