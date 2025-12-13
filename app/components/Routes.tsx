export default function Routes() {
  const routes = [
    { from: "Познань", to: "Берлін", icon: "🇵🇱🇩🇪" },
    { from: "Вроцлав", to: "Амстердам", icon: "🇵🇱🇳🇱" },
    { from: "Індивідуальні", to: "маршрути", icon: "🗺️" },
  ];

  const services = [
    {
      title: "Пасажирські перевезення",
      description: "Комфортна поїздка для вас та ваших близьких",
      icon: "👥",
    },
    {
      title: "Кур'єрські доставки",
      description: "Швидка доставка документів та невеликих вантажів",
      icon: "📦",
    },
    {
      title: "Трансфер до вокзалу/аеропорту",
      description: "Зручний трансфер без затримок",
      icon: "✈️",
    },
  ];

  return (
    <section id="routes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Напрямки та Послуги
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
              Популярні маршрути
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4 text-center">{route.icon}</div>
                  <div className="text-center">
                    <div className="text-xl font-semibold text-gray-900">
                      {route.from}
                    </div>
                    <div className="text-blue-600 my-2">↔</div>
                    <div className="text-xl font-semibold text-gray-900">
                      {route.to}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-gray-600">
              Також виконую індивідуальні маршрути за домовленістю
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
              Мої послуги
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

