import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: '#', label: 'Instagram' },
    { icon: Mail, href: '#', label: 'Facebook' },
    { icon: Mail, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-brand-red mb-4">
              KARTAL
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Yolculuğunuzun en konforlu ve güvenli durağı. 
              Kaliteli hizmet anlayışımızla hizmetinizdeyiz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/hizmetlerimiz" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="/fiyat-listesi" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Fiyat Listesi
                </a>
              </li>
              <li>
                <a href="/iletisim" className="text-gray-300 hover:text-white transition-colors duration-200">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-red" />
                <a 
                  href="tel:+904623456789" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +90 (462) 345 67 89
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-red" />
                <p className="text-gray-300 text-sm">
                  İkisu / Gümüşhane
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-brand-red rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2026 Kartal Dinlenme Tesisleri. Yolculuğun Konforlu Durağı.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;