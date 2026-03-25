import { Coffee, UtensilsCrossed, Wine } from 'lucide-react';

const PriceList = () => {
  const menuCategories = [
    {
      title: 'Kahvaltı',
      icon: Coffee,
      items: [
        { name: 'Serpme Kahvaltı', price: '₺85' },
        { name: 'Köy Kahvaltısı', price: '₺75' },
        { name: 'Menemen', price: '₺45' },
        { name: 'Sucuklu Yumurta', price: '₺40' },
      ],
    },
    {
      title: 'Ana Yemekler',
      icon: UtensilsCrossed,
      items: [
        { name: 'Sac Kavurma', price: '₺120' },
        { name: 'Günün Çorbası', price: '₺25' },
        { name: 'Izgara Köfte', price: '₺85' },
        { name: 'Tavuk Şiş', price: '₺95' },
      ],
    },
    {
      title: 'İçecekler',
      icon: Wine,
      items: [
        { name: 'Sınırsız Çay', price: '₺15' },
        { name: 'Türk Kahvesi', price: '₺20' },
        { name: 'Taze Sıkılmış Portakal Suyu', price: '₺35' },
        { name: 'Ayran', price: '₺12' },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Fiyat Listesi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lezzetli yemeklerimiz ve uygun fiyatlarımızla hizmetinizdeyiz
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-brand-red" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">
                    {category.title}
                  </h3>
                </div>

                {/* Menu Items */}
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-700 font-medium flex-1 pr-4">
                        {item.name}
                      </span>
                      <span className="text-brand-red font-bold text-lg">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Price Note */}
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800">
              <span className="font-semibold">Not:</span> Fiyatlarımız dönemsel olarak değişiklik gösterebilir. 
              Lütfen güncel bilgi için sorunuz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;