'use client';
import { useState } from 'react';
import { parseMediaUrl } from '@/utils/mediaParser'; // adjust path if needed

export default function StoriesPage() {
  const [stories, setStories] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '', email: '', contactNumber: '', location: '',
    eventAttended: '', story: '', mediaUrl: '', image: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: URL.createObjectURL(e.target.files[0]) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mediaData = formData.mediaUrl ? parseMediaUrl(formData.mediaUrl) : null;

    const newStory = {
      id: Date.now(),
      ...formData,
      mediaData,
      date: new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    // Simulate API call
    setTimeout(() => {
      setStories([newStory, ...stories]);
      setIsSubmitting(false);
      setSuccessMsg('Your beautiful story has been shared. Thank you for inspiring others!');
      setFormData({
        fullName: '', email: '', contactNumber: '', location: '',
        eventAttended: '', story: '', mediaUrl: '', image: null
      });

      setTimeout(() => setSuccessMsg(''), 6000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] pt-20 pb-24 font-sans text-gray-800">

      {/* 1. Hero / Header Area */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 mb-16 text-center pt-12">
        <span className="text-[#c08658] font-semibold tracking-widest uppercase text-xs mb-3 block">
          Your Voice Matters
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#a82424] mb-6 tracking-tight">
          Share Your Healing Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
          Every step back to health is a miracle worth celebrating. Share how right food, technique, and meditation have transformed your life.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* 2. Premium Submission Form Card */}
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mb-24 relative overflow-hidden">

          {/* Decorative background accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#c08658] via-[#eaddd3] to-[#c08658]"></div>

          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">Tell us your story</h2>

          {successMsg && (
            <div className="mb-8 p-5 bg-[#f6fbf6] border border-[#d2eadd] text-[#2c7a4b] rounded-xl text-sm font-medium flex items-center shadow-sm transition-all">
              <svg className="w-5 h-5 mr-3 text-[#2c7a4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {successMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

              {/* Input Group */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#c08658]/20 focus:border-[#c08658] outline-none transition-all placeholder-gray-400" placeholder="Rahul Sharma" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#c08658]/20 focus:border-[#c08658] outline-none transition-all placeholder-gray-400" placeholder="rahul@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                <input required type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#c08658]/20 focus:border-[#c08658] outline-none transition-all placeholder-gray-400" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                <input required type="text" name="location" value={formData.location} onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#c08658]/20 focus:border-[#c08658] outline-none transition-all placeholder-gray-400" placeholder="Mumbai, Maharashtra" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Practice / Event Attended *</label>
              <div className="relative">
                <select required name="eventAttended" value={formData.eventAttended} onChange={handleInputChange}
                  className="w-full px-5 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#c08658]/20 focus:border-[#c08658] outline-none transition-all appearance-none text-gray-700">
                  <option value="" disabled>Select a practice that helped you the most</option>
                  <option value="Navel Hammering">Navel Hammering</option>
                  <option value="Bhago Nahi Jago">Bhago Nahi Jago</option>
                  <option value="Sun Gratitude">Sun Gratitude</option>
                  <option value="Adrishya Diet">Adrishya Diet Program</option>
                  <option value="Other">Other Holistic Practices</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Experience *</label>
              <textarea required name="story" rows="6" value={formData.story} onChange={handleInputChange}
                placeholder="How did you feel before? What changes did you experience in your body and mind?"
                className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#c08658]/20 focus:border-[#c08658] outline-none transition-all resize-none placeholder-gray-400"></textarea>
            </div>

            {/* Media Upload Section - Styled like a dropzone */}
            <div className="bg-[#fcfbfa] p-6 rounded-2xl border border-[#eaddd3] border-dashed relative">
              <h3 className="text-sm font-semibold text-gray-800 mb-5 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#c08658]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
                Attach Media (Highly Recommended)
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Link a Video</label>
                  <input type="url" name="mediaUrl" value={formData.mediaUrl} onChange={handleInputChange}
                    placeholder="Paste Instagram Reel or YouTube Link here..."
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#c08658] focus:border-[#c08658] outline-none text-sm transition-all" />
                </div>

                <div className="flex items-center">
                  <div className="flex-grow border-t border-gray-200"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-widest font-medium">OR</span>
                  <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Upload a Photo</label>
                  <div className="flex items-center">
                    <label className="cursor-pointer bg-white border border-gray-200 hover:border-[#c08658] hover:bg-[#fcfbfa] text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-all shadow-sm">
                      <span>Choose File</span>
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    </label>
                    {formData.image && <span className="ml-3 text-sm text-green-600 font-medium flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Image selected</span>}
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}
              className="w-full bg-[#a82424] text-white py-4 rounded-xl font-medium tracking-wide hover:bg-[#8a1d1d] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Publishing Story...
                </span>
              ) : 'Submit Your Story'}
            </button>
          </form>
        </div>

        {/* 3. Live Display Area (Shows immediately after mock submission) */}
        {stories.length > 0 && (
          <div className="mt-20 animate-fade-in-up">
            <div className="text-center mb-10">
              <span className="text-[#c08658] font-medium tracking-wide uppercase text-sm block mb-1">Community</span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Just Shared</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stories.map((story) => (
                <div key={story.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">

                  {/* Dynamic Media Container */}
                  {story.mediaData?.valid ? (
                    <div className="w-full aspect-[4/3] bg-black relative">
                      <iframe src={story.mediaData.embed} className="absolute top-0 left-0 w-full h-full" frameBorder="0" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                  ) : story.image ? (
                    <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">
                      <img src={story.image} alt="Transformation" className="w-full h-full object-cover" />
                    </div>
                  ) : null}

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-xl font-serif text-gray-900">{story.fullName}</h4>
                        <p className="text-sm text-gray-500 mt-0.5 flex items-center">
                          <svg className="w-3.5 h-3.5 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                          {story.location}
                        </p>
                      </div>
                      <span className="inline-block bg-[#fcfbfa] border border-[#eaddd3] text-[#c08658] text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full font-bold shadow-sm">
                        {story.eventAttended}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm mb-6 italic">"{story.story}"</p>
                    <p className="text-xs text-gray-400 mt-auto pt-4 border-t border-gray-50 font-medium tracking-wide uppercase">{story.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}