import ProgramDetailHero from '@/components/programs/ProgramDetailHero';
import ProgramTimer from '@/components/programs/ProgramTimer';
import ProgramBenefits from '@/components/programs/ProgramBenefits';
import ProgramFAQ from '@/components/programs/ProgramFAQ';
import ProgramRegistration from '@/components/programs/ProgramRegistration';
import ProgramTestimonials from '@/components/programs/ProgramTestimonials';

export const metadata = {
  title: 'Home Journey | Sun To Human Foundation',
};

export default function HomeJourneyPage() {
  return (
    <div>
      <ProgramDetailHero 
        title="Your Home, Your Journey" 
        date="Start Anytime" 
        location="Digital Access" 
        badge="Beginner Level" 
      />
      
      <section className="sr" style={{ padding: '4rem 2rem', textAlign: 'center', background: '#fff' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Next Live Q&A Session Starts In:</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProgramTimer />
        </div>
      </section>

      <ProgramBenefits />
      <ProgramTestimonials />
      <ProgramFAQ />
      
      <ProgramRegistration 
        price="499" 
        programName="Home Journey Digital Access" 
      />
    </div>
  );
}