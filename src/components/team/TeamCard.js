import React from 'react';

const TeamCard = ({ 
  avatar, 
  name, 
  role, 
  bio, 
  socialLinks 
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-3 border border-gray-100">
      <div className="relative overflow-hidden">
        <img 
          src={avatar} 
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-indigo-600 font-semibold text-lg mb-4">{role}</p>
        <p className="text-gray-600 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
