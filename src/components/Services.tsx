import { UtensilsCrossed, ShoppingCart, Church, Car } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: 'Restoran',
      description: 'Yöresel lezzetler, taze çorba ve meşhur sac kavurmamızla hizmetinizdeyiz.',
    },
    {
      icon: ShoppingCart,
      title: 'Market',
      description: 'Yolculuk ihtiyaçlarınız için 7/24 açık zengin ürün yelpazesi.',
    },
    {
      icon: Church,
      title: 'Mescit & WC',
      description: 'Tertemiz dinlenme alanları, bay-bayan mescit ve hijyenik lavabolar.',
    },
    {
      icon: Car,
      title: 'Otopark',
      description: 'Tır ve otobüsler için de uygun, geniş ve güvenli ücretsiz otopark.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Yolculuğunuzda ihtiyaç duyacağınız tüm hizmetleri tek çatı altında sunuyoruz
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-brand-red" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;