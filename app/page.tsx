import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PhaseCards from "@/components/PhaseCards";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import BookingSection from "@/components/BookingSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#171717]">
      <Header />
      <main>
        <Hero />
        <About />
        <PhaseCards />
        <Services />
        <HowItWorks />
        <VideoTestimonials />
        <BookingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
