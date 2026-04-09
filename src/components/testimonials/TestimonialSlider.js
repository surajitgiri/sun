import React, { useState, useEffect } from 'react';

const TestimonialSlider = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="py-24 relative bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            What People Say
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who've experienced life-changing transformations
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative group">
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>
          
          {/* Navigation */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
            <button
              onClick={goPrev}
              className="pointer-events-auto w-16 h-16 bg-white/80 hover:bg-white backdrop-blur-xl shadow-2xl rounded-2xl flex items-center justify-center text-gray-800 text-xl hover:shadow-3xl transition-all ml-6 -translate-y-1/2"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="pointer-events-auto w-16 h-16 bg-white/80 hover:bg-white backdrop-blur-xl shadow-2xl rounded-2xl flex items-center justify-center text-gray-800 text-xl hover:shadow-3xl transition-all mr-6 -translate-y-1/2"
            >
              ›
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex gap-3 justify-center mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 w-3 h-3 rounded-full ${
                  currentIndex === index 
                    ? 'bg-indigo-600 w-8 scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-8 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-linear"
              style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder testimonials for demo
const defaultTestimonials = [
  {
    quote: "My life was completely transformed. Doctors said impossible, but now I'm completely healthy.",
    author: "Priya Sharma",
    role: "Cancer Survivor, Age 42",
    avatar: "/images/testimonial1.jpg",
    rating: 5
  },
  // Add more...
];

TestimonialSlider.defaultProps = {
  testimonials: defaultTestimonials
};

export default TestimonialSlider;
