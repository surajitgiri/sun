"use client";
import React, { useState } from 'react';
import { Camera, ImagePlus, PenTool, CheckCircle2 } from 'lucide-react';

const UploadStoryForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    authorName: '',
    authorEmail: '',
    category: '',
    storyContent: '',
    beforePhoto: null,
    afterPhoto: null,
    videoUrl: '',
    consent: false
  });
  const [preview, setPreview] = useState({ before: null, after: null });
  const [uploading, setUploading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePhotoUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [`${type}Photo`]: file }));
        setPreview(prev => ({ ...prev, [type]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setTimeout(() => {
      console.log('Story uploaded:', formData);
      setUploading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="py-12 px-4">
        <div className="satvic-success-state">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-[#FF8C00]" />
          </div>
          <h2 className="satvic-form-title">Story Submitted!</h2>
          <p className="satvic-form-subtitle mb-8">Thank you for sharing your journey. It will inspire many others.</p>
          <button 
            onClick={() => window.location.reload()}
            className="satvic-btn-submit"
            style={{ width: 'auto' }}
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <div className="satvic-form-header">
        <span className="satvic-form-badge">
          <PenTool className="w-3.5 h-3.5" />
          Your Journey
        </span>
        <h2 className="satvic-form-title">
          Share Your Story
        </h2>
        <p className="satvic-form-subtitle">
          Inspire millions. Your words can ignite hope in someone seeking light.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="satvic-form-card">
        
        <div className="satvic-form-group">
          <label className="satvic-label">Story Title <span className="req">*</span></label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="satvic-input"
            placeholder="e.g. 'Finding Peace Within'"
          />
        </div>

        <div className="satvic-grid-2">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Author Name <span className="req">*</span></label>
            <input
              type="text"
              required
              value={formData.authorName}
              onChange={(e) => setFormData({...formData, authorName: e.target.value})}
              className="satvic-input"
              placeholder="Jane Doe"
            />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Email <span className="req">*</span></label>
            <input
              type="email"
              required
              value={formData.authorEmail}
              onChange={(e) => setFormData({...formData, authorEmail: e.target.value})}
              className="satvic-input"
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Category <span className="req">*</span></label>
          <select
            required
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            className="satvic-select"
          >
            <option value="" disabled hidden>Select Category</option>
            <option value="health">Health Recovery</option>
            <option value="relationships">Relationships</option>
            <option value="career">Career Breakthrough</option>
            <option value="spiritual">Spiritual Awakening</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Your Story <span className="req">*</span></label>
          <textarea
            required
            rows="8"
            value={formData.storyContent}
            onChange={(e) => setFormData({...formData, storyContent: e.target.value})}
            className="satvic-textarea leading-relaxed"
            placeholder="Tell your complete journey: before, during, after, specific results..."
          />
        </div>

        {/* Media Upload Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100 mb-6">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Before Photo</label>
            <div className="relative border-2 border-dashed border-gray-200 rounded-xl bg-[#FAFAFA] hover:bg-gray-50 focus-within:border-[#FF8C00] focus-within:ring-2 focus-within:ring-[#FF8C00]/20 transition-all">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e, 'before')}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="p-8 text-center flex flex-col items-center pointer-events-none">
                {preview.before ? (
                  <img src={preview.before} alt="Before preview" className="w-full h-32 object-cover rounded-lg shadow-sm" />
                ) : (
                  <>
                    <ImagePlus className="w-8 h-8 text-gray-400 mb-3" />
                    <span className="text-sm font-semibold text-gray-600">Tap to upload</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">After Photo</label>
            <div className="relative border-2 border-dashed border-gray-200 rounded-xl bg-[#FAFAFA] hover:bg-gray-50 focus-within:border-[#FF8C00] focus-within:ring-2 focus-within:ring-[#FF8C00]/20 transition-all">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e, 'after')}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="p-8 text-center flex flex-col items-center pointer-events-none">
                {preview.after ? (
                  <img src={preview.after} alt="After preview" className="w-full h-32 object-cover rounded-lg shadow-sm" />
                ) : (
                  <>
                    <Camera className="w-8 h-8 text-gray-400 mb-3" />
                    <span className="text-sm font-semibold text-gray-600">Tap to upload</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Video Testimonial URL</label>
          <input
            type="url"
            value={formData.videoUrl}
            onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
            placeholder="https://youtube.com/watch?v=..."
            className="satvic-input"
          />
        </div>

        <div className="flex items-start gap-4 p-5 bg-[#FAFAFA] rounded-xl border border-gray-100 mt-6 mb-6">
          <input
            type="checkbox"
            id="consent"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-[#FF8C00] focus:ring-[#FF8C00] transition-all cursor-pointer"
          />
          <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
            I consent to publishing my story publicly and confirm all information is true.
          </label>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={uploading}
            className={`satvic-btn-submit flex items-center justify-center gap-3 ${uploading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {uploading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Publishing...
              </>
            ) : (
              'Publish My Story →'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadStoryForm;
