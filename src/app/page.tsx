import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import BrandTicker from "@/components/BrandTicker";
import ShowcaseGallery from "@/components/ShowcaseGallery";
import ConciergerieForm from "@/components/ConciergerieForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandTicker />
        <ServicesGrid />
        <ShowcaseGallery />
        <ConciergerieForm />
      </main>
      <Footer />
    </>
  );
}
