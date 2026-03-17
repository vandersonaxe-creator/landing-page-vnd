import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhaseCards from "@/components/PhaseCards";
import About from "@/components/About";
import TriadeSection from "@/components/TriadeSection";
import Services from "@/components/Services";
import NossoFoco from "@/components/NossoFoco";
import Stats from "@/components/Stats";
import CTAMap from "@/components/CTAMap";
import HowItWorks from "@/components/HowItWorks";
import BookingSection from "@/components/BookingSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import NossasVantagens from "@/components/NossasVantagens";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <Header />
      <main>
        <Hero />
        <PhaseCards />
        <About />
        <TriadeSection />
        <Services />
        <NossoFoco />
        <Stats />
        <CTAMap />
        <HowItWorks />
        <BookingSection />
        <VideoTestimonials />
        <Testimonials />
        <Pricing />
        <NossasVantagens />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
