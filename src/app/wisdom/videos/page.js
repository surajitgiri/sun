import VideoGrid from "@/components/wisdom/VideoGrid";

export default function WisdomVideosPage() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Wisdom Videos</h1>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Instructional videos and technique demonstrations for home practice,
          featuring sessions by Pujya Param Aalay Ji.
        </p>
      </div>

      {/* Integrating the VideoGrid component */}
      <VideoGrid />
    </div>
  );
}