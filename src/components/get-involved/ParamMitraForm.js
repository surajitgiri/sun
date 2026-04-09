"use client";
import React, { useState } from 'react';
import { HandHeart, CheckCircle2 } from 'lucide-react';

export default function ParamMitraForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    contributionType: '',
    availability: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-12 px-4">
        <div className="satvic-success-state">
          <div className="flex justify-center mb-6">
            <HandHeart className="w-20 h-20 text-[#FF8C00]" />
          </div>
          <h3 className="satvic-form-title">Welcome, Param Mitra!</h3>
          <p className="satvic-form-subtitle mb-8 max-w-lg mx-auto">
            Thank you for extending your hand in friendship. Our volunteer coordination team will review your details and reach out to you soon.
          </p>
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
          <HandHeart className="w-3.5 h-3.5" />
          Param Mitra
        </span>
        <h2 className="satvic-form-title">
          Join as a Param Mitra
        </h2>
        <p className="satvic-form-subtitle">
          Share your details so we can find the best way for you to contribute.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="satvic-form-card">
        <div className="satvic-grid-2">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Full Name <span className="req">*</span></label>
             <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="satvic-input" placeholder="e.g., Anjali Sharma" />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Current City <span className="req">*</span></label>
             <input type="text" name="city" required value={formData.city} onChange={handleChange} className="satvic-input" placeholder="e.g., Mumbai" />
          </div>
        </div>

        <div className="satvic-grid-2">
           <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Email Address <span className="req">*</span></label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="satvic-input" placeholder="your@email.com" />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Phone Number <span className="req">*</span></label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="satvic-input" placeholder="+91 98765 43210" />
          </div>
        </div>

        <div className="satvic-grid-2">
           <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Profession / Skills <span className="req">*</span></label>
            <input type="text" name="profession" required value={formData.profession} onChange={handleChange} className="satvic-input" placeholder="e.g., Doctor, Developer" />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">How to Help? <span className="req">*</span></label>
            <select name="contributionType" required value={formData.contributionType} onChange={handleChange} className="satvic-select">
              <option value="" disabled hidden>Select an option</option>
              <option value="time">Volunteering Time</option>
              <option value="skills">Offering Professional Skills</option>
              <option value="spreading_word">Social Media & Awareness</option>
              <option value="resources">Providing Resources/Space</option>
            </select>
          </div>
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Availability (Optional)</label>
          <input type="text" name="availability" value={formData.availability} onChange={handleChange} className="satvic-input" placeholder="e.g., 5 hours a week, Weekends only" />
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Message (Optional)</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="satvic-textarea" placeholder="Tell us why you want to connect..."></textarea>
        </div>

        <div className="pt-2">
          <button type="submit" className="satvic-btn-submit">
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
}