"use client";
import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const FeedbackForm = ({ type = 'short-term' }) => {
  const isShortTerm = type === 'short-term';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    rating: 5,
    experience: '',
    improvements: '',
    testimonial: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit feedback
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 px-4">
        <div className="satvic-success-state">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-[#FF8C00]" />
          </div>
          <h2 className="satvic-form-title">Thank You!</h2>
          <p className="satvic-form-subtitle mb-8">Your feedback helps us continuously evolve and inspire others.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="satvic-btn-submit"
            style={{ width: 'auto' }}
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <div className="satvic-form-header">
        <span className="satvic-form-badge">
          <Sparkles className="w-3.5 h-3.5" />
          {isShortTerm ? 'Quick Feedback' : 'Detailed Review'}
        </span>
        <h2 className="satvic-form-title">
          Share Your Experience
        </h2>
        <p className="satvic-form-subtitle">
          Help us serve you better in future programs.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="satvic-form-card">
        <div className="satvic-grid-2">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Full Name <span className="req">*</span></label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="satvic-input"
              placeholder="John Doe"
            />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Email Address <span className="req">*</span></label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="satvic-input"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Program Attended <span className="req">*</span></label>
          <input
            type="text"
            required
            value={formData.program}
            onChange={(e) => setFormData({...formData, program: e.target.value})}
            placeholder="e.g. Naye Drishtikon Shivir 2025"
            className="satvic-input"
          />
        </div>

        <div className="satvic-form-group pt-2">
          <label className="satvic-label">How was your overall experience?</label>
          <div className="flex items-center gap-2 p-4 bg-[#FAFAFA] rounded-xl border border-gray-100">
            {[1,2,3,4,5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({...formData, rating: star})}
                className={`text-3xl transition-transform hover:scale-110 focus:outline-none ${
                   formData.rating >= star 
                    ? 'text-[#FF8C00] drop-shadow-sm' 
                    : 'text-gray-300 hover:text-[#FFD600]'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">
            What did you like most?
          </label>
          <textarea
            value={formData.experience}
            onChange={(e) => setFormData({...formData, experience: e.target.value})}
            placeholder="Share what worked well for you..."
            className="satvic-textarea"
          />
        </div>

        {!isShortTerm && (
          <div className="satvic-form-group">
            <label className="satvic-label">
              Areas for improvement
            </label>
            <textarea
              value={formData.improvements}
              onChange={(e) => setFormData({...formData, improvements: e.target.value})}
              placeholder="Any suggestions..."
              className="satvic-textarea"
            />
          </div>
        )}

        <div className="satvic-form-group">
          <label className="satvic-label">
            Share your testimonial (optional)
          </label>
          <textarea
            value={formData.testimonial}
            onChange={(e) => setFormData({...formData, testimonial: e.target.value})}
            placeholder="Your story could inspire others..."
            className="satvic-textarea"
          />
        </div>

        <div className="pt-6">
          <button type="submit" className="satvic-btn-submit">
            {isShortTerm ? 'Submit Quick Feedback' : 'Submit Detailed Feedback'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
