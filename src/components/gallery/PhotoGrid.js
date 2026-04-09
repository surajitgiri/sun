import React from 'react';

const PhotoGrid = ({ photos = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      {photos.map((photo, index) => (
        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
          <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100">View Photo</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
