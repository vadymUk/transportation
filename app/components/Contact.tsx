"use client";

import { useRef } from "react";

function getLocalDate() {
  const today = new Date();

  return [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const minimumDate = getLocalDate();

  const handleSubmit = () => {
    // Очищаємо форму після невеликої затримки, щоб форма встигла відправитися
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 100);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
            Контакти та Замовлення
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Контактна інформація */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Звяжіться зі мною
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+48576222842"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl">📞</span>
                  <div>
                    <div className="font-semibold text-gray-900">Телефон</div>
                    <div className="text-blue-600">+48 576 222 842</div>
                  </div>
                </a>

                <a
                  href="viber://chat?number=+48576222842"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-3xl">📱</span>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Viber, WhatsApp
                    </div>
                    <div className="text-blue-600">+48 576 222 842 </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Форма замовлення */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Форма замовлення
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-6 shadow-md"
                target="_blank"
                action="https://formsubmit.co/vadimcicura@gmail.com"
                method="POST"
              >
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Імя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Номер телефону для контакту з вами
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Наприклад: +48 123 456 789"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="from"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Звідки
                    </label>
                    <input
                      placeholder="Наприклад: Польща, Познань"
                      type="text"
                      id="from"
                      name="from"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="to"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Куди
                    </label>
                    <input
                      placeholder="Наприклад: Німеччина, Берлін"
                      type="text"
                      id="to"
                      name="to"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Дата запланованого виїзду
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        min={minimumDate}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="time"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Час запланованого виїзду
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Повідомлення / Коментар
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Відправити запит
                  </button>
                </div>
              </form>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Після відправки форми ми з вами зв&apos;яжемося за вказаним
                номером для підтвердження вашої поїздки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
