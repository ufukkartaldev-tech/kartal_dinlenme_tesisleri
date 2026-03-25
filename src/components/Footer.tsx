import { Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import WeatherWidget from '@/components/WeatherWidget';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Weather Widget */}
        <div className="flex justify-center mb-8">
          <WeatherWidget />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Slogan */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/assets/kartal-logo.png"
                  alt="Kartal Dinlenme Tesisleri Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-4xl font-bold text-brand-red">
                KARTAL
              </h3>
            </div>
            <p className="text-gray-300 text-lg font-medium mb-2">
              Yolculuğun Konforlu Durağı
            </p>
            <p className="text-gray-400 leading-relaxed">
              Kaliteli hizmet anlayışımızla, yolculuğunuzun en güvenli ve lezzetli molasını sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 text-center">
            <h4 className="text-xl font-semibold mb-6 text-white">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li>
                <a href="/hizmetlerimiz" className="text-gray-300 hover:text-brand-red transition-colors duration-200 text-lg">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="/fiyat-listesi" className="text-gray-300 hover:text-brand-red transition-colors duration-200 text-lg">
                  Fiyat Listesi
                </a>
              </li>
              <li>
                <a href="/iletisim" className="text-gray-300 hover:text-brand-red transition-colors duration-200 text-lg">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Directions */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">Konum & İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Karadeniz Sahil Yolu Üzeri<br />
                    <span className="font-semibold text-white">İkisu / Gümüşhane</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <a 
                  href="tel:+904562431002" 
                  className="text-gray-300 hover:text-brand-red transition-colors duration-200"
                >
                  +90 (456) 243 10 02
                </a>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                <a 
                  href="https://www.google.com/maps/place/Kartal+Dinlenme+Tesisleri/@40.5240062,39.3725031,20.5z/data=!4m14!1m7!3m6!1s0x4064e25bc9b4fc05:0x612e8cf65a43fe1b!2sKartal+Dinlenme+Tesisleri!8m2!3d40.5239303!4d39.3724092!16s%2Fg%2F113h9k2__!3m5!1s0x4064e25bc9b4fc05:0x612e8cf65a43fe1b!8m2!3d40.5239303!4d39.3724092!16s%2Fg%2F113h9k2__?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-red transition-colors duration-200"
                >
                  Google Haritalar'dan yol tarifi alın →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm leading-relaxed">
              © 2026 Kartal Dinlenme Tesisleri - Tüm Hakları Saklıdır. | 
              <span className="text-gray-300"> Akçaabat, Trabzon & İkisu, Gümüşhane</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;