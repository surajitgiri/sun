"use client";
import Image from 'next/image';

export default function ParamMitrasSection() {
  // Sample data based on your reference image layout
  const teamMembers = [
    { name: 'Subah Saraf', role: 'Co-founder', bgColor: 'bg-[#89b3a3]', image: '/team/subah.png' },
    { name: 'Harshvardhan Saraf', role: 'Co-founder', bgColor: 'bg-[#98a863]', image: '/team/harshvardhan.png' },
    { name: 'Radhika Gupta', role: 'Co-Leader of Yoga Wing', bgColor: 'bg-[#b68973]', image: '/team/radhika.png' },
    { name: 'Akshay Jain', role: 'Co-Leader of Yoga Wing', bgColor: 'bg-[#c59849]', image: '/team/akshay.png' },
    { name: 'Rajat Jadon', role: 'Host of 5AM Challenge & Co-Leader of Youth Wing', bgColor: 'bg-[#89b3a3]', image: '/team/rajat.png' },
    { name: 'Himadri Pareek', role: 'Co-Leader of the Youth Wing', bgColor: 'bg-[#98a863]', image: '/team/himadri.png' },
    { name: 'Mini Gupta', role: 'Camp Coordinator', bgColor: 'bg-[#89b3a3]', image: '/team/mini.png' },
    { name: 'Pankaj Kumar', role: 'Graphic Designer', bgColor: 'bg-[#98a863]', image: '/team/pankaj.png' },
    { name: 'Harsha Gharat', role: 'Lead Graphic Designer', bgColor: 'bg-[#c59849]', image: '/team/harsha.png' },
    { name: 'Tanvi Dhane', role: 'Digital Seva', bgColor: 'bg-[#b68973]', image: '/team/tanvi.png' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Photo Container (Matches the image uploaded) */}
              <div className={`w-full aspect-[4/5] ${member.bgColor} rounded-[2rem] mb-4 overflow-hidden relative flex items-end justify-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                {/* Replace the src with actual images. 
                  Make sure your images have transparent backgrounds (PNG) so the background color shows through!
                */}
                <div className="w-[90%] h-[90%] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-bottom"
                    // Fallback to a placeholder if image doesn't exist yet
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </div>

              {/* Name and Role */}
              <h4 className="text-lg font-bold text-gray-900 leading-tight mb-1">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500 font-medium px-2">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-white border-2 border-yellow-400 text-yellow-600 py-3 px-8 rounded-full font-bold hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300 shadow-sm">
            Meet Full Team ↓
          </button>
        </div>
      </div>
    </section>
  );
}