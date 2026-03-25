import PriceList from '@/components/PriceList';
import PageTransition from '@/components/PageTransition';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Güncel Menü ve Fiyat Listesi | Kartal Dinlenme Tesisleri',
  description: 'Kahvaltı, ana yemekler ve içeceklerimizin güncel fiyat listesi. Serpme kahvaltı, sac kavurma ve daha fazlası uygun fiyatlarla.',
  keywords: ['menü fiyatları', 'serpme kahvaltı', 'sac kavurma', 'günün çorbası', 'fiyat listesi', 'yemek menüsü'],
};

export default function FiyatListesiPage() {
  return (
    <PageTransition>
      <main className="pt-16">
        <div className="bg-brand-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fiyat Listesi
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lezzetli yemeklerimiz ve uygun fiyatlarımızla hizmetinizdeyiz
            </p>
          </div>
        </div>
        <PriceList />
      </main>
    </PageTransition>
  );
}