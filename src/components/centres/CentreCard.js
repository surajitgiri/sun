import React from 'react';

const CentreCard = ({ 
  name, 
  location, 
  image, 
  capacity, 
  facilities, 
  contact,
  status = 'open'
}) => {
  const statusColors = {
    open: 'from-emerald-500 to-green-500',
    upcoming: 'from-orange-500 to-yellow-500',
    full: 'from-red-500 to-pink-500'
  };

  return (
    <div className="group bg-white rounded-4xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden hover:-translate-y-4 border border-gray-100">
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-6 right-6">
          <span className={`px-6 py-2 rounded-full text-white font-bold text-sm bg-gradient-to-r ${statusColors[status]} shadow-lg`}>
            {status.toUpperCase()}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <span className="text-2xl font-bold">{capacity}</span>
          <span className="text-sm text-gray-600 ml-2">capacity</span>
        </div>
      </div>
      <div className="p-10">
        <h3 className="text-3xl font-black text-gray-900 mb-4">{name}</h3>
        <p className="text-xl text-gray-700 mb-6">{location}</p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {facilities.slice(0,4).map((facility, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl text-sm">
              <span className="text-2xl">{facility.icon}</span>
              <span>{facility.name}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <a 
            href={`tel:${contact.phone}`}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 px-6 rounded-2xl font-bold text-center hover:shadow-xl transition-all"
          >
            Call {contact.phone.slice(-10)}
          </a>
          <a 
            href={`mailto:${contact.email}`}
            className="w-14 h-16 bg-gray-100 hover:bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 hover:text-indigo-700 transition-all text-2xl"
          >
            ✉
          </a>
        </div>
      </div>
    </div>
  );
};

export default CentreCard;
