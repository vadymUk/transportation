import Image from "next/image";

export default function About() {
  const benefits = [
    {
      icon: "🚗",
      title: "Комфортне авто",
      description: "Renault Scenic — затишний тa надійний автомобіль",
    },
    {
      icon: "🕒",
      title: "Гнучкий графік",
      description: "Підлаштуюся під ваші потреби та терміни",
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
              alt="Перевезення по Європі від адреси до адресу"
              width={800}
              height={600}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Я — Вадим, приватний перевізник. Маю власний автомобіль Renault
              Scenic, регулярно виконую поїздки по Європі. Заберу вас прямо від
              дверей і доставлю куди потрібно — без черг, пересадок і затримок.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="h-full rounded-xl border border-gray-200 bg-white p-5 text-center transition-shadow hover:shadow-lg sm:p-6"
            >
              <div className="mb-4 text-4xl">{benefit.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
