import BeginnerPrograms from '@/components/home/BeginnerPrograms';

export const metadata = { title: 'Beginner Programs | Sun To Human Foundation' };

export default function BeginnerProgramsPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <BeginnerPrograms />
    </main>
  );
}
