import React, { useState } from 'react';

const CentreDetails = ({ centre }) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'overview':
        return <OverviewTab centre={centre} />;
      case 'facilities':
        return <FacilitiesTab centre={centre} />;
      case 'schedule':
        return <ScheduleTab />;
      case 'reviews':
        return <ReviewsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Image */}
      <div className="relative h-96 rounded-4xl overflow-hidden mb-12 shadow-2xl">
        <img src={centre.image} alt={centre.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-5xl font-black mb-4 drop-shadow-2xl">{centre.name}</h1>
          <p className="text-2xl drop-shadow-lg">{centre.location}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start bg-white rounded-3xl p-1 shadow-xl backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-8 py-4 rounded-2xl font-bold transition-all flex-1 min-w-[140px] ${
              selectedTab === tab.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-4xl p-12 shadow-2xl border border-gray-100">
        {renderTabContent()}
      </div>
    </div>
  );
};

// Tab Components
const OverviewTab = ({ centre }) => (
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-2xl text-gray-700 leading-relaxed mb-8">{centre.description}</p>
      <div className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
          <span className="text-3xl">👥</span>
          <div>
            <h4 className="font-bold text-xl">Capacity</h4>
            <p>{centre.capacity}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
          <span className="text-3xl">📍</span>
          <div>
            <h4 className="font-bold text-xl">Address</h4>
            <p>{centre.fullAddress}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="space-y-6">
      <iframe
        src={centre.mapEmbed}
        className="w-full h-96 rounded-3xl shadow-xl"
        loading="lazy"
      />
    </div>
  </div>
);

const FacilitiesTab = ({ centre }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {centre.facilities.map((facility, index) => (
      <div key={index} className="text-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all group">
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{facility.icon}</div>
        <h4 className="font-bold text-2xl mb-4 text-gray-900">{facility.name}</h4>
        <p className="text-gray-600">{facility.capacity}</p>
      </div>
    ))}
  </div>
);

const ScheduleTab = () => (
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-3xl font-bold mb-8">Upcoming Camps</h3>
      {/* Schedule list */}
    </div>
    <div>
      <h3 className="text-3xl font-bold mb-8">Regular Sessions</h3>
      {/* Schedule list */}
    </div>
  </div>
);

const ReviewsTab = () => (
  <div>
    <h3 className="text-3xl font-bold mb-12">Centre Reviews</h3>
    {/* Reviews grid */}
  </div>
);

export default CentreDetails;
