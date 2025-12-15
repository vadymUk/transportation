import Image from "next/image";

export default function About() {
  const benefits = [
    {
      icon: "🚗",
      title: "Комфортне авто",
      description: "Renault Scenic — затишний та надійний автомобіль",
    },
    {
      icon: "🕒",
      title: "Гнучкий графік",
      description: "Підлаштуюся під ваші потреби та терміни",
    },
    {
      icon: "📦",
      title: "Доставка вантажів",
      description: "Можу взяти передачу або невеликий вантаж",
    },
    {
      icon: "💰",
      title: "Доступна ціна",
      description: "Чесні та прозорі ціни без прихованих платежів",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Про мене
          </h2>
          <div className="mb-12 flex justify-center">
            <Image
              src="/images/car.png"
              // alt="Перевезення по Європі від адреси до адресу"
              alt="..."
              width={800}
              height={600}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Я — Вадим, приватний перевізник.
              Маю власний автомобіль Renault Scenic, регулярно виконую поїздки
              по Європі. Заберу вас прямо від дверей і доставлю куди потрібно —
              без черг, пересадок і затримок.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

