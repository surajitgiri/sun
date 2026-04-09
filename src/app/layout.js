import './globals.css';
import CustomCursor from '@/components/global/CustomCursor';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import ScrollJourney from '@/components/global/ScrollJourney';
import ErrorBoundary from '@/components/global/ErrorBoundary';

export const metadata = {
  title: 'Param Aalay | Sun To Human Foundation',
  description: 'Transform Your Life This Season',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300&family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Roboto:wght@300;400;500;700&family=Inter:wght@300;400;500;600&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Mukta:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <Footer />
        <ScrollJourney />
      </body>
    </html>
  );
}