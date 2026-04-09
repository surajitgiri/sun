import React from 'react';

const TeamGrid = ({ teamMembers = [] }) => {
  return (
    <div className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="group bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 p-8 border border-gray-100 overflow-hidden">
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto rounded-3xl overflow-hidden ring-8 ring-indigo-100/50 group-hover:ring-indigo-200/75 transition-all">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-lg"></div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
              <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
              <div className="flex gap-3 justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a href={`mailto:${member.email}`} className="w-12 h-12 bg-indigo-100 hover:bg-indigo-200 rounded-2xl flex items-center justify-center text-indigo-600 hover:text-indigo-700 transition-all">
                  ✉
                </a>
                <a href={member.linkedin} className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-2xl flex items-center justify-center text-blue-600 hover:text-blue-700 transition-all">
                  💼
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
