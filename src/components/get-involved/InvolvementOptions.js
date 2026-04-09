import React from 'react';

const InvolvementOptions = () => {
  const options = [
    {
      icon: '🧘',
      title: 'Volunteer Healer',
      description: 'Conduct healing sessions and camps in your community',
      buttonText: 'Apply Now',
      bgGradient: 'from-amber-400 to-amber-500',
      textColor: 'group-hover:text-amber-600'
    },
    {
      icon: '🏕️',
      title: 'Camp Organizer',
      description: 'Plan and execute transformation camps locally',
      buttonText: 'Learn More',
      bgGradient: 'from-amber-400 to-amber-500',
      textColor: 'group-hover:text-amber-600'
    },
    {
      icon: '📢',
      title: 'Social Media',
      description: 'Spread transformation stories on social platforms',
      buttonText: 'Get Started',
      bgGradient: 'from-amber-400 to-amber-500',
      textColor: 'group-hover:text-amber-600'
    },
    {
      icon: '💰',
      title: 'Sponsor Camps',
      description: 'Fund free healing camps for underprivileged',
      buttonText: 'Donate',
      bgGradient: 'from-amber-400 to-amber-500',
      textColor: 'group-hover:text-amber-600'
    }
  ];

  return (
    <div className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {options.map((option, index) => (
            <div key={index} className="group bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(251,191,36,0.15)] transition-all duration-500 p-10 border border-stone-100 hover:border-amber-200 hover:-translate-y-2">
              <div className="flex items-start gap-6 mb-8">
                {/* Icon Box */}
                <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${option.bgGradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform shrink-0`}>
                  {option.icon}
                </div>
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-3xl font-bold text-stone-800 mb-4 transition-colors ${option.textColor}`}>
                    {option.title}
                  </h3>
                  <p className="text-lg text-stone-500 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
              {/* Button */}
              <button className={`w-full md:w-auto bg-gradient-to-r ${option.bgGradient} text-stone-900 py-4 px-8 rounded-full font-bold hover:shadow-md hover:scale-[1.02] transition-all`}>
                {option.buttonText} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvolvementOptions;