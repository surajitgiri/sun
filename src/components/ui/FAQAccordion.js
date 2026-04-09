import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index}
          className="group bg-white border border-gray-200 hover:border-indigo-300 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-8 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all group"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className={`w-2 h-12 rounded-lg flex-shrink-0 mt-1 ${
                openIndex === index 
                  ? 'bg-gradient-to-b from-indigo-500 to-purple-500' 
                  : 'bg-gradient-to-b from-gray-300 to-gray-400 group-hover:from-indigo-400 group-hover:to-purple-400'
              }`} />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors pr-8">
                  {faq.question}
                </h3>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center shadow-md transition-all duration-300 ${
              openIndex === index 
                ? 'rotate-180 bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-indigo-500/25' 
                : 'rotate-0 group-hover:bg-indigo-200'
            }`}>
              {openIndex === index ? <ChevronUpIcon className="w-6 h-6" /> : <ChevronDownIcon className="w-6 h-6" />}
            </div>
          </button>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openIndex === index ? 'max-h-96 opacity-100 p-8 bg-gradient-to-r from-indigo-50 to-purple-50' : 'max-h-0 opacity-0'
          }`}>
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
            <div className="mt-6 pt-6 border-t border-indigo-100">
              <a href={faq.learnMoreUrl} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold hover:underline transition-colors">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Example usage:
// <FAQAccordion faqs={[
//   {
//     question: "How does the healing work?",
//     answer: "Our technique uses specific energy patterns...",
//     learnMoreUrl: "/techniques"
//   }
// ]} />

export default FAQAccordion;

