"use client";
import React, { useState } from 'react';
import { Users, CheckCircle2 } from 'lucide-react';

const SharedVolunteerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer Form Submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="py-12 px-4">
        <div className="satvic-success-state">
          <div className="flex justify-center mb-6">
            <Users className="w-20 h-20 text-[#FF8C00]" />
          </div>
          <h3 className="satvic-form-title">Thank You!</h3>
          <p className="satvic-form-subtitle mb-8 max-w-lg mx-auto">
            Your eagerness to volunteer is deeply appreciated. Our coordination team will review your application and assign you to the most suitable group.
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
          <Users className="w-3.5 h-3.5" />
          Volunteer Application
        </span>
        <h2 className="satvic-form-title">
          Join the Healing Team
        </h2>
        <p className="satvic-form-subtitle">
          Be a part of something bigger. Share your details to connect with us.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="satvic-form-card">
        <div className="satvic-grid-2">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Full Name <span className="req">*</span></label>
            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="satvic-input" placeholder="e.g., Aman Verma" />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Phone Number <span className="req">*</span></label>
            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="satvic-input" placeholder="+91 98765 43210" />
          </div>
        </div>

        <div className="satvic-grid-2">
           <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Email Address <span className="req">*</span></label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="satvic-input" placeholder="your@email.com" />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Areas of Interest <span className="req">*</span></label>
            <select name="interest" required value={formData.interest} onChange={handleChange} className="satvic-select">
              <option value="" disabled hidden>Select Area</option>
              <option value="camp-setup">Camp Setup & Management</option>
              <option value="kitchen">Kitchen & Food Service</option>
              <option value="registration">Registration Desk</option>
              <option value="social-media">Social Media & IT</option>
              <option value="any">Ready for anything</option>
            </select>
          </div>
        </div>
        
        <div className="satvic-form-group">
          <label className="satvic-label">Message (Optional)</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="satvic-textarea" placeholder="Tell us why you want to volunteer..."></textarea>
        </div>

        <div className="pt-2">
          <button type="submit" className="satvic-btn-submit">
            Submit Application →
          </button>
        </div>
      </form>
    </div>
  );
};

export default SharedVolunteerForm;