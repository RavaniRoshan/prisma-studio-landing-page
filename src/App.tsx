import AppsMarquee from "./components/AppsMarquee";
import BuildFromAnywhere from "./components/BuildFromAnywhere";
import CTASection from "./components/CTASection";
import CustomerLogos from "./components/CustomerLogos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyRetool from "./components/WhyRetool";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-cream antialiased">
      <Navbar />
      <main>
        <Hero />
        <AppsMarquee />
        <BuildFromAnywhere />
        <WhyRetool />
        <CustomerLogos />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
