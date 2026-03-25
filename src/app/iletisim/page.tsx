import Contact from '@/components/Contact';
import PageTransition from '@/components/PageTransition';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim ve Konum | Kartal Dinlenme Tesisleri - İkisu/Gümüşhane',
  description: 'Bize ulaşın, konum bilgilerimiz ve yol tarifi alın. İkisu/Gümüşhane konumunda 7/24 ulaşılabilir hizmet.',
  keywords: ['iletişim', 'konum', 'yol tarifi', 'İkisu', 'Gümüşhane', 'adres', 'telefon'],
};

export default function IletisimPage() {
  return (
    <PageTransition>
      <main className="pt-16">
        <div className="bg-brand-dark text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              İletişim
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Bize ulaşın ve yol tarifi alın
            </p>
          </div>
        </div>
        <Contact />
      </main>
    </PageTransition>
  );
}