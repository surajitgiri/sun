import AboutHero from '@/components/about/AboutHero';
import FoundationIntro from '@/components/about/FoundationIntro';
import GurujiIntro from '@/components/about/GurujiIntro';
import RetreatCentreSection from '@/components/about/RetreatCentreSection';
import ParamMitrasSection from '@/components/about/ParamMitrasSection';
import MediaCoverageSection from '@/components/about/MediaCoverageSection';

export const metadata = {
  title: 'About Us | Sun To Human Foundation',
  description: 'Discover the vision of Pujya Param Aalay Ji and the profound equation of Right Food, Right Technique, and Right Meditation.',
};

export default function AboutPage() {
  return (
    <div>
      {/* 1. The Hero Banner */}
      <AboutHero />

      {/* 2. The Core Philosophy and Mission */}
      <FoundationIntro />

      {/* 3. The Visionary / Founder Section */}
      <GurujiIntro />

      {/* 4. The Physical Location / Ashram */}
      <RetreatCentreSection />

      {/* 5. The Volunteer Community */}
      <ParamMitrasSection />

      {/* 6. Social Proof / News */}
      <MediaCoverageSection />
    </div>
  );
}