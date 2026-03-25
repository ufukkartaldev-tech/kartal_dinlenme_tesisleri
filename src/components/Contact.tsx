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
                  href="tel:+904562431002" 
                  className="text-brand-red hover:text-red-700 transition-colors duration-200 text-lg font-medium"
                >
                  +90 (456) 243 10 02
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

          {/* Map */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-semibold text-brand-dark mb-6">
              Konum & Yol Tarifi
            </h3>
            
            <div className="rounded-2xl shadow-lg overflow-hidden h-80 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.883726743958!2d39.37022067645107!3d40.52393434861205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4068e259c9b4fc05%3A0x612e8cf65a43fee1!2sKartal%20Dinlenme%20Tesisleri!5e0!3m2!1str!2str!4v1711398000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kartal Dinlenme Tesisleri Konumu"
              />
            </div>

            {/* Direction Button */}
            <div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=40.5239303,39.3724093"
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