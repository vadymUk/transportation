export default function Reviews() {
  const reviews = [
    {
      name: "Олена",
      text: "Все дуже просто зателефонувала водієві домовилися за дату та час поїздки, відіслала свою локацію. Забрали прямо від дверей та відвезли за вказаною адресою в Німеччині, все було комфортно та швидко.За проханням пасажирів робили зупинки на каву,туалет або інші необхідні потреби. Рекомендую!",
      rating: 5,
    },
    {
      name: "Михайло",
      text: "Професійний підхід не дорого за такий сервіс враховуючі зараз ціни на паливо та інші витрати, пунктуальність на висоті. Дякую за якісну послугу!",
      rating: 5,
    },
    {
      name: "Анна",
      text: "Дуже зручно не траба шататися по тим вокзалам, шукати як доїхати, робити декілька пересадок щоб добратися до свого місця призначення, мовний барєр при замовленні квитків на вокзалах тощо, просто сів у автомобіль заплатив і через декілька годин вже на місці під дверями того місця що потрібно. Водій приємний та відповідальний.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Відгуки клієнтів
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;{review.text}&quot;
                </p>
                <p className="text-gray-900 font-semibold">— {review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span>Рейтинг:</span>
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-gray-600 text-lg">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
