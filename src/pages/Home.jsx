import Nav from '@/components/site/Nav';
import Hero from '@/components/site/Hero';
import FactsBar from '@/components/site/FactsBar';
import PracticeAreas from '@/components/site/PracticeAreas';
import Statement from '@/components/site/Statement';
import Press from '@/components/site/Press';
import Chamber from '@/components/site/Chamber';
import Contact from '@/components/site/Contact';
import Footer from '@/components/site/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <FactsBar />
        <PracticeAreas />
        <Statement />
        <Press />
        <Chamber />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}