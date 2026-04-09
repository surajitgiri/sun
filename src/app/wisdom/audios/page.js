import AudioGrid from "@/components/wisdom/AudioGrid";

export default function WisdomAudiosPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Wisdom Audios</h1>
        <p className="text-gray-600 mb-8 max-w-2xl text-lg">
          Listen to profound discourses, guided meditations, and practical teachings by Pujya Param Aalay Ji.
        </p>
      </div>

      {/* Integrating the AudioGrid component */}
      <AudioGrid />
    </div>
  );
}