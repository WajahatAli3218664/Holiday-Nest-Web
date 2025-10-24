import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import VisaServices from "@/components/VisaServices";
import WorldDestinations from "@/components/WorldDestinations";
import TravelGallery from "@/components/TravelGallery";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <WhyChoose />
        <VisaServices />
        <WorldDestinations />
        <TravelGallery />
        <BlogPreview />
  <Testimonials />
  <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
