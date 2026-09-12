const questions = [
  {
    question: "Як забронювати поїздку?",
    answer:
      "Зателефонуйте, напишіть у Viber або WhatsApp, або заповніть форму замовлення на сайті. Повідомте маршрут, бажану дату, час і кількість пасажирів. Я перевірю можливість поїздки та підтверджу бронювання.",
  },
  {
    question: "Яка вартість поїздки?",
    answer:
      "170 євро або в злотих (PLN) за курсом на момент поїздки з людини. Багаж включено у вартість.",
  },
  {
    question: "Звідки ви забираєте пасажирів і куди доставляєте?",
    answer:
      "Забираю з адреси пасажира та доставляю до вказаного місця призначення. Можна домовитися про індивідуальний маршрут між містами Польщі, Німеччини, Нідерландів та інших країн Європи.",
  },
  {
    question: "Скільки багажу можна взяти?",
    answer:
      "Звичайний багаж входить у поїздку. Якщо маєте багато валіз, дитячий візок або великогабаритні речі, повідомте про це під час бронювання, щоб я заздалегідь перевірив місце в автомобілі.",
  },
  {
    question: "Які документи потрібні для поїздки?",
    answer:
      "Візьміть чинний документ, що посвідчує особу, та документи, необхідні для перетину німецько-польського кордону (зазвичай це паспорт та карта побиту). Перевірити термін дії документів і право на в'їзд до країни призначення потрібно до поїздки. Нелегалів або осіб без відповідних документів не перевожу.",
  },
  {
    question: "Скільки пасажирів може їхати в автомобілі?",
    answer: "До чотирьох пасажирів може їхати в автомобілі одночасно.",
  },
  {
    question: "Як можна оплатити поїздку?",
    answer:
      "Оплату можна здійснити готівкою водієві під час поїздки або за домовленістю іншим зручним способом.",
  },
  {
    question: "Що робити, якщо потрібно змінити або скасувати поїздку?",
    answer:
      "Повідомте мене якомога раніше телефоном або в месенджері. Я перевірю, чи можна змінити дату, час або маршрут, і повідомлю про можливі умови скасування.",
  },
  {
    question: "Чи можна робити зупинки під час поїздки?",
    answer:
      "Так, можна за кожним проханням пасажира ми робимо зупинку на туалет, перекус або інші необхідні потреби.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Часті питання
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Відповіді на питання, які найчастіше виникають перед поїздкою.
          </p>

          <div className="space-y-4">
            {questions.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-gray-200 bg-gray-50 transition-shadow hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-semibold text-gray-900 sm:p-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-2xl font-normal text-blue-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="border-t border-gray-200 px-5 pb-5 pt-4 leading-relaxed text-gray-600 sm:px-6 sm:pb-6">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
