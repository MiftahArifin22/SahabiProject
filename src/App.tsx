import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BpkhValue from "./components/BpkhValue";
import Features from "./components/Features";
import Technology from "./components/Technology";
import Demo from "./components/Demo";
import Documentation from "./components/Documentation";
import ProductGallery from "./components/ProductGallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BpkhValue />
        <Features />
        <Technology />
        <Demo />
        <Documentation />
        <ProductGallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <VideoModal />
    </>
  );
}
