import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PriceList from '@/components/PriceList';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kartal Dinlenme Tesisleri | Gümüşhane - Trabzon Yolu Mola Noktası',
  description: 'Lezzetli sac kavurma, taze çorba ve 7/24 hizmet veren Kartal Dinlenme Tesisleri. İkisu/Gümüşhane konumunda güvenli otopark, temiz WC ve market hizmetleri.',
  keywords: ['sac kavurma', 'taze çorba', '7/24 hizmet', 'dinlenme tesisi', 'Gümüşhane', 'Trabzon yolu', 'mola noktası', 'restoran', 'otopark'],
};

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
