"use client";
import React, { useState } from 'react';
import { CalendarDays, CheckCircle2 } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    experience: '',
    city: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-12 px-4">
        <div className="satvic-success-state">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-[#FF8C00]" />
          </div>
          <h2 className="satvic-form-title">Registration Successful!</h2>
          <p className="satvic-form-subtitle mb-8">We have successfully received your registration details. A confirmation email has been sent.</p>
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
          <CalendarDays className="w-3.5 h-3.5" />
          Join the Journey
        </span>
        <h2 className="satvic-form-title">
          Register for Program
        </h2>
        <p className="satvic-form-subtitle">Secure your transformation journey today.</p>
      </div>

      <form onSubmit={handleSubmit} className="satvic-form-card">
        <div className="satvic-grid-2">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Full Name <span className="req">*</span></label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              className="satvic-input"
              placeholder="John Doe"
            />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Phone <span className="req">*</span></label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="satvic-input"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
        
        <div className="satvic-form-group">
          <label className="satvic-label">Email <span className="req">*</span></label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="satvic-input"
            placeholder="john@example.com"
          />
        </div>
        
        <div className="satvic-grid-2">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Program <span className="req">*</span></label>
            <select
              required
              value={formData.program}
              onChange={(e) => setFormData({...formData, program: e.target.value})}
              className="satvic-select"
            >
              <option value="" disabled hidden>Select Program</option>
              <option value="beginner-naye-drishtikon">Beginner - Naye Drishtikon</option>
              <option value="beginner-home-journey">Home Journey</option>
              <option value="advanced-urja-shivir">Advanced - Urja Shivir</option>
              <option value="advanced-cosmic-vision">Cosmic Vision Shivir</option>
            </select>
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">City <span className="req">*</span></label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              className="satvic-input"
              placeholder="e.g., New Delhi"
            />
          </div>
        </div>
        
        <div className="satvic-form-group">
          <label className="satvic-label">Experience Level</label>
          <textarea
            value={formData.experience}
            onChange={(e) => setFormData({...formData, experience: e.target.value})}
            className="satvic-textarea"
            placeholder="Any prior experience with meditation or healing..."
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
            I agree to the <span className="text-[#FF8C00] font-semibold hover:underline">Terms & Conditions</span> and confirm that the information provided above is accurate.
          </label>
        </div>
        
        <div className="pt-2">
          <button type="submit" className="satvic-btn-submit">
            Secure My Seat →
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
