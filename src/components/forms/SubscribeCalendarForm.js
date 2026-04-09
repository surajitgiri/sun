"use client";
import React, { useState } from 'react';
import { BellRing, CheckCircle2, CalendarDays } from 'lucide-react';

const SubscribeCalendarForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    locationPreference: '',
    subscribed: false
  });
  const [subscribed, setSubscribed] = useState(false);

  const interests = [
    'Beginner Camps', 'Advanced Shivirs', 'Home Journey', 'Special Events', 'Regular Sessions'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  if (subscribed) {
    return (
      <div className="py-12 px-4">
        <div className="satvic-success-state">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-20 h-20 text-[#FF8C00]" />
          </div>
          <h2 className="satvic-form-title">You're In!</h2>
          <p className="satvic-form-subtitle mb-8 max-w-lg mx-auto">
            Calendar subscription confirmed. You'll receive updates on all our upcoming programs.
          </p>
          <div className="bg-[#FAFAFA] flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold mb-10 border border-gray-100 text-gray-700">
            <CalendarDays className="w-5 h-5 text-[#FF8C00]" />
            Check your email for the calendar link
          </div>
          <button 
            onClick={() => setSubscribed(false)}
            className="satvic-btn-submit"
            style={{ width: 'auto' }}
          >
            Subscribe Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <div className="satvic-form-header">
        <span className="satvic-form-badge">
          <BellRing className="w-3.5 h-3.5" />
          Stay Updated
        </span>
        <h2 className="satvic-form-title">
          Event Calendar
        </h2>
        <p className="satvic-form-subtitle">
          Never miss a transformation opportunity.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="satvic-form-card">
        <div className="satvic-grid-2">
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="satvic-input"
              placeholder="John Doe"
            />
          </div>
          <div className="satvic-form-group" style={{ marginBottom: 0 }}>
            <label className="satvic-label">Email or Phone <span className="req">*</span></label>
            <input
              type="text"
              required
              value={formData.email || formData.phone}
              onChange={(e) => {
                if (e.target.value.includes('@')) {
                  setFormData({...formData, email: e.target.value, phone: ''});
                } else {
                  setFormData({...formData, phone: e.target.value, email: ''});
                }
              }}
              className="satvic-input"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="satvic-form-group pt-2">
          <label className="satvic-label">
            What interests you most? (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {interests.map((interest) => {
              const isChecked = formData.interests.includes(interest);
              return (
                <label key={interest} className={`flex items-start gap-3 p-4 border rounded-lg transition-all cursor-pointer group ${isChecked ? 'border-[#FF8C00] bg-[#FFF8DC]' : 'border-gray-200 bg-[#FAFAFA] hover:border-[#FFD600]'}`}>
                  <input
                    type="checkbox"
                    value={interest}
                    checked={isChecked}
                    onChange={(e) => {
                      const current = formData.interests;
                      if (e.target.checked) {
                        setFormData({...formData, interests: [...current, interest]});
                      } else {
                        setFormData({...formData, interests: current.filter(item => item !== interest)});
                      }
                    }}
                    className="mt-0.5 w-4 h-4 rounded text-[#FF8C00] focus:ring-[#FF8C00] cursor-pointer transition-all"
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 leading-tight">{interest}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="satvic-form-group">
          <label className="satvic-label">Preferred Location</label>
          <select
            value={formData.locationPreference}
            onChange={(e) => setFormData({...formData, locationPreference: e.target.value})}
            className="satvic-select"
          >
            <option value="" disabled hidden>Select Preference</option>
            <option value="any">Anywhere (Online/In-person)</option>
            <option value="local">My City Only</option>
            <option value="nearby">Within 200km</option>
            <option value="travel">Willing to Travel</option>
          </select>
        </div>

        <div className="bg-[#FAFAFA] rounded-xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">What you'll receive</h3>
          <ul className="space-y-3">
            {[
              'Google Calendar + iCal (.ics) files',
              'SMS/Email/WhatsApp notifications',
              'Early bird registration links',
              'Location & travel details',
              'Easy unsubscribe anytime'
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
            Get Event Calendar →
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeCalendarForm;
