import WisdomHero from '@/components/wisdom/WisdomHero';
import BookGrid from '@/components/wisdom/BookGrid';
import AudioGrid from '@/components/wisdom/AudioGrid';
import VideoGrid from '@/components/wisdom/VideoGrid';
import ArticleGrid from '@/components/wisdom/ArticleGrid';

export const metadata = {
  title: 'Wisdom & Literature | Sun To Human Foundation',
};

export default function WisdomPage() {
  return (
    <div>
      <WisdomHero />
      <VideoGrid />
      <BookGrid />
      <AudioGrid />
      <ArticleGrid />
    </div>
  );
}