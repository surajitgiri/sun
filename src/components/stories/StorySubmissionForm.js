import React, { useState } from 'react';

const StorySubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    storyTitle: '',
    storyContent: '',
    category: '',
    beforeAfterPhotos: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Story submitted:', formData);
  };

  return (
    <div className="py-20 max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-2">Share Your Transformation Story</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Inspire others with your journey</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Health">Health Recovery</option>
                <option value="Relationships">Relationships</option>
                <option value="Career">Career Success</option>
                <option value="Spirituality">Spiritual Growth</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Story Title *</label>
            <input
              type="text"
              value={formData.storyTitle}
              onChange={(e) => setFormData({...formData, storyTitle: e.target.value})}
              className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Story * (500+ words)</label>
            <textarea
              rows="8"
              value={formData.storyContent}
              onChange={(e) => setFormData({...formData, storyContent: e.target.value})}
              className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-500 resize-vertical"
              placeholder="Describe your journey, challenges, transformation, and results..."
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Before/After Photos (Optional)</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => setFormData({...formData, beforeAfterPhotos: e.target.files})}
              className="w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-2xl hover:border-indigo-400 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-8 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            Submit My Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default StorySubmissionForm;
