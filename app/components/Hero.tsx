export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Перевезення з адреси до адреси — швидко, комфортно, надійно
          </h1>
          <p className="text-xl sm:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Ваш особистий перевізник по Європі на власному авто. Без зайвого
            клопоту, прямо від дверей до дверей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              📞 Зателефонувати
            </a>
            <a
              href="#contact"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              💬 Написати у Viber або WhatsApp
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              🚗 Замовити поїздку
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

