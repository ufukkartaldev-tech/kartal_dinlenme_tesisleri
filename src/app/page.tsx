import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PriceList from '@/components/PriceList';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <PriceList />
      <Contact />
      <Footer />
    </main>
  );
}
