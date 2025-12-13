export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-gray-400">
                © {new Date().getFullYear()} Приватний Перевізник. Всі права
                захищені.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="tel:+48576222842"
                className="text-gray-400 hover:text-white transition-colors"
              >
                📞 +48 576 222 842
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

