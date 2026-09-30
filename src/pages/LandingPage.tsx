import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Capabilities from '@/components/Capabilities';
import Process from '@/components/Process';
import Professionals from '@/components/Professionals';
import Trust from '@/components/Trust';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Capabilities />
        <Process />
        <Professionals />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
