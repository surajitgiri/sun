import ProgramHero from '@/components/programs/ProgramHero';
import ProgramCard from '@/components/programs/ProgramCard';

export const metadata = {
  title: 'Programs | Sun To Human Foundation',
};

export default function ProgramsPage() {
  return (
    <div>
      <ProgramHero />
      
      <section className="sr" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="sec-head" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="sec-h2">Available Journeys</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <ProgramCard 
            title="Home Journey" 
            type="Digital Program" 
            description="Guided home practice for Naye Drishtikon transformation at your own pace." 
            icon="🏡" 
            color="linear-gradient(145deg, #2e7d32, #1b5e20)"
            tag="Beginner"
            link="/programs/beginner/home-journey" 
          />
          <ProgramCard 
            title="Param Navratri Shivir" 
            type="Advanced Residential" 
            description="11-day residential camp for deep mind awakening." 
            icon="🔥" 
            color="linear-gradient(145deg, #3d0000, #7A0000)"
            tag="Advanced"
            link="/programs/advanced/navratri" 
          />
        </div>
      </section>
    </div>
  );
}