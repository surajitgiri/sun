import React from 'react';

const VideoGrid = ({ videos = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      {videos.map((video, index) => (
        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
          <video 
            src={video.src} 
            className="w-full h-48 object-cover" 
            controls 
            poster={video.poster}
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
            <p className="text-gray-600 text-sm">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
