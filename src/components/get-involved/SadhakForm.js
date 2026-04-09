"use client";
import React, { useState } from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';

export default function SadhakForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    city: '',
    duration: '',
    healthIssues: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sadhana Application Submitted:', formData);
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
            <Flame className="w-20 h-20 text-[#FF8C00]" />
          </div>
          <h3 className="satvic-form-title">Application Received</h3>
          <p className="satvic-form-subtitle mb-8 max-w-lg mx-auto">
            Your application for Full-Time Sadhana has been submitted successfully! The organizing committee will review your request and get in touch with you shortly.
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
          <Flame className="w-3.5 h-3.5" />
          Sadhak Application
        </span>
        <h2 className="satvic-form-title">
          Apply for Full-Time Sadhana
        </h2>
        <p className="satvic-form-subtitle">
          Provide your details to initiate the evaluation process.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="satvic-form-card">
        <div className="satvic-grid-2">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Full Name <span className="req">*</span></label>
            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="satvic-input" placeholder="e.g., Anjali Sharma" />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Age <span className="req">*</span></label>
            <input type="number" name="age" required value={formData.age} onChange={handleChange} className="satvic-input" placeholder="25" />
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
            <label className="satvic-label">Current City <span className="req">*</span></label>
            <input type="text" name="city" required value={formData.city} onChange={handleChange} className="satvic-input" placeholder="e.g., Delhi" />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Sadhana Duration <span className="req">*</span></label>
            <select name="duration" required value={formData.duration} onChange={handleChange} className="satvic-select">
              <option value="" disabled hidden>Select Duration</option>
              <option value="6-months">6 Months</option>
              <option value="1-year">1 Year</option>
              <option value="permanent">Lifelong (Permanent)</option>
            </select>
          </div>
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Any Pre-existing Health Issues? (Physical or Mental) <span className="req">*</span></label>
          <input type="text" name="healthIssues" required value={formData.healthIssues} onChange={handleChange} className="satvic-input" placeholder="If none, type 'None'" />
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Why do you want to join? (Short message) <span className="req">*</span></label>
          <textarea name="message" required value={formData.message} onChange={handleChange} rows="4" className="satvic-textarea" placeholder="Briefly explain your calling or intention..."></textarea>
        </div>

        <div className="bg-[#FAFAFA] rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6 mt-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Prerequisites</h3>
          <ul className="space-y-3">
            {[
              'Must have attended at least two 10-day camps.',
              'Willingness to surrender to the ashram discipline gracefully.',
              'No severe critical illnesses that require constant external medical attention.',
              'Ability to commit to the selected duration without interruptions.'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF8C00] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <button type="submit" className="satvic-btn-submit">
            Submit Application →
          </button>
        </div>
      </form>
    </div>
  );
}