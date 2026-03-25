import Services from '@/components/Services';
import PageTransition from '@/components/PageTransition';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Restoran, Market ve Dinlenme Alanları - Kartal Dinlenme Tesisleri',
  description: 'Restoran, market, mescit, WC ve geniş otopark alanlarımızla 7/24 hizmetinizdeyiz. Temiz ve güvenli dinlenme imkanları.',
  keywords: ['restoran hizmetleri', 'market', 'mescit', 'WC', 'otopark', 'dinlenme alanları', 'Gümüşhane'],
};

export default function HizmetlerimizPage() {
  return (
    <PageTransition>
      <main className="pt-16">
        <div className="bg-brand-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hizmetlerimiz
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Yolculuğunuzda ihtiyaç duyacağınız tüm hizmetleri tek çatı altında sunuyoruz
            </p>
          </div>
        </div>
        <Services />
      </main>
    </PageTransition>
  );
}