import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Routes from "./components/Routes";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Routes />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
