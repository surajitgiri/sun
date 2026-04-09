import React, { useState } from 'react';

const GalleryTabs = ({ tabs = ['Photos', 'Videos', 'Events'] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="py-12">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === index
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xl">Content for {tabs[activeTab]}</p>
      </div>
    </div>
  );
};

export default GalleryTabs;
