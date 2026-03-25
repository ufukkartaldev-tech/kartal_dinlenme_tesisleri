import { Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Bize Ulaşın & Yol Tarifi Al
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Konumumuzu öğrenin ve bizimle iletişime geçin
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-brand-dark mb-6">
              İletişim Bilgileri
            </h3>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Telefon</h4>
                <a 
                  href="tel:+904623456789" 
                  className="text-brand-red hover:text-red-700 transition-colors duration-200 text-lg font-medium"
                >
                  +90 (462) 345 67 89
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Adres</h4>
                <p className="text-gray-600 leading-relaxed">
                  Kartal Dinlenme Tesisleri<br />
                  Karadeniz Sahil Yolu Üzeri<br />
                  <span className="font-semibold text-brand-red">İkisu / Gümüşhane</span>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="font-semibold text-brand-dark mb-1">Çalışma Saatleri</h4>
                <p className="text-gray-600">
                  <span className="font-semibold text-green-600">
                    Haftanın 7 Günü 24 Saat Açığız
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-semibold text-brand-dark mb-6">
              Konum & Yol Tarifi
            </h3>
            
            <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Google Haritalar</p>
                <p className="text-gray-400 text-sm mt-2">
                  Harita entegrasyonu yakında eklenecek
                </p>
              </div>
            </div>

            {/* Direction Button */}
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=İkisu,Gümüşhane"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-brand-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;