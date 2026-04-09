"use client";
import React, { useState } from 'react';
import { ClipboardList, CheckCircle2 } from 'lucide-react';

const QuestionnaireForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    healthIssues: [],
    programInterest: [],
    experienceLevel: '',
    contactPreference: ''
  });

  const questions = [
    {
      id: 'personal',
      title: 'Personal Information',
      fields: [
        { name: 'name', label: 'Full Name *', type: 'text' },
        { name: 'age', label: 'Age *', type: 'number' },
        { name: 'gender', label: 'Gender *', type: 'select', options: ['Male', 'Female', 'Other'] }
      ]
    },
    {
      id: 'health',
      title: 'Health Information',
      fields: [
        { name: 'healthIssues', label: 'Current Health Issues', type: 'multi-select', options: [
          'Heart Disease', 'Diabetes', 'Cancer', 'Mental Health', 'Chronic Pain', 'Autoimmune', 'Other'
        ]},
        { name: 'symptoms', label: 'Main Symptoms', type: 'textarea' }
      ]
    },
    {
      id: 'interest',
      title: 'Program Interest',
      fields: [
        { name: 'programInterest', label: 'Interested Programs', type: 'multi-select', options: [
          'Beginner Camps', 'Home Journey', 'Advanced Shivir', 'Special Events', 'Regular Sessions'
        ]},
        { name: 'experienceLevel', label: 'Experience Level *', type: 'select', options: [
          'Complete Beginner', 'Some Experience', 'Regular Practitioner', 'Advanced'
        ]}
      ]
    },
    {
      id: 'contact',
      title: 'Contact Preferences',
      fields: [
        { name: 'contactPreference', label: 'Preferred Contact Method *', type: 'select', options: [
          'Phone Call', 'WhatsApp', 'Email', 'Video Call'
        ]},
        { name: 'availability', label: 'Best Time to Contact', type: 'textarea' },
        { name: 'additionalInfo', label: 'Additional Information', type: 'textarea' }
      ]
    }
  ];

  const currentQuestionSet = questions[step - 1];

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleFieldChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
          <h2 className="satvic-form-title">Thank You!</h2>
          <p className="satvic-form-subtitle mb-8">We have received your questionnaire and will review it shortly.</p>
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
      <div className="satvic-form-card">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12 border-b border-gray-100 pb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF8C00] uppercase mb-3">
              <ClipboardList className="w-4 h-4" />
              Step {step} of {questions.length}
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {currentQuestionSet.title}
            </h2>
          </div>
          <div className="flex gap-1.5 pt-2 sm:pt-0">
            {questions.map((_, index) => (
              <div 
                key={index}
                className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
                  step > index + 1 ? 'bg-[#FF8C00]' : 
                  step === index + 1 ? 'bg-[#FFD600]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {currentQuestionSet.fields.map((field, index) => {
            const isRequired = field.label.includes('*');
            const cleanLabel = field.label.replace('*', '').trim();

            return (
              <div key={index} className="satvic-form-group" style={{ marginBottom: 0 }}>
                <label className="satvic-label">
                  {cleanLabel} {isRequired && <span className="req">*</span>}
                </label>
                
                {field.type === 'textarea' && (
                  <textarea
                    value={formData[field.name] || ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="satvic-textarea"
                    placeholder={field.placeholder}
                  />
                )}
                
                {(field.type === 'text' || field.type === 'number') && (
                  <input
                    type={field.type}
                    value={formData[field.name] || ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="satvic-input"
                  />
                )}
                
                {field.type === 'select' && (
                  <select
                    value={formData[field.name] || ''}
                    onChange={(e) => handleFieldChange(field.name, e.target.value)}
                    className="satvic-select"
                  >
                    <option value="" disabled hidden>Select...</option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                )}
                
                {field.type === 'multi-select' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {field.options.map((option) => {
                      const isChecked = (formData[field.name] || []).includes(option);
                      return (
                        <label key={option} className={`flex items-center gap-3 p-4 border rounded-lg transition-all cursor-pointer group ${isChecked ? 'border-[#FF8C00] bg-[#FFF8DC]' : 'border-gray-200 bg-[#FAFAFA] hover:border-[#FFD600]'}`}>
                          <input
                            type="checkbox"
                            value={option}
                            checked={isChecked}
                            onChange={(e) => {
                              const current = formData[field.name] || [];
                              if (e.target.checked) {
                                handleFieldChange(field.name, [...current, option]);
                              } else {
                                handleFieldChange(field.name, current.filter(item => item !== option));
                              }
                            }}
                            className="w-5 h-5 rounded border-gray-300 text-[#FF8C00] focus:ring-[#FF8C00] transition-all"
                          />
                          <span className="text-sm font-medium text-gray-700">{option}</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t border-gray-100">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="w-full sm:w-1/3 bg-[#FAFAFA] border border-gray-200 text-gray-700 py-3.5 px-6 rounded-full font-bold hover:bg-gray-100 transition-all text-sm text-center"
              >
                Back
              </button>
            )}
            
            {step < questions.length ? (
              <button
                type="button"
                onClick={handleNext}
                className="w-full flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-full font-bold hover:bg-gray-800 transition-all text-sm text-center shadow-md active:translate-y-0.5"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                className="satvic-btn-submit sm:w-auto flex-1"
                style={{ padding: '0.875rem 1.5rem', fontSize: '0.875rem' }}
              >
                Submit Questionnaire
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
