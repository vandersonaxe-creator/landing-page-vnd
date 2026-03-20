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
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { Marquee } from "@/components/ui/Marquee";
import PortfolioSection from "@/components/sections/PortfolioSection";

const MARQUEE_ITEMS = [
  "Landing Pages",
  "WhatsApp",
  "Tráfego Pago",
  "IA e Automação",
  "Google Meu Negócio",
  "Meta e Redes",
  "Presença Digital",
  "Integrações",
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <ScrollRevealInit />
      <Header />
      <main>
        <Hero />
        <Marquee items={MARQUEE_ITEMS} />
        <About />
        <PhaseCards />
        <Services />
        <HowItWorks />
        <VideoTestimonials />
        <PortfolioSection />
        <BookingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
