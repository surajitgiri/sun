import FoundationIntro from '@/components/about/FoundationIntro';

export const metadata = { title: 'Sun To Human Foundation' };

export default function FoundationPage() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <FoundationIntro />
    </main>
  );
}
