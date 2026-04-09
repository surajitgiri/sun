import React, { useState } from 'react';

const StorySlider = ({ stories = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="relative py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
          Featured Transformation Stories
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <div className="h-96 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl">
              Featured Story #{currentIndex + 1}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-all"
          >
            ›
          </button>
        </div>
        <div className="flex gap-2 justify-center mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorySlider;
