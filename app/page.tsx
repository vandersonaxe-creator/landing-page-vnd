import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import BookingSection from "@/components/BookingSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { Marquee } from "@/components/ui/Marquee";
import PortfolioSection from "@/components/sections/PortfolioSection";
import MetricsStrip from "@/components/MetricsStrip";
import VSLSection from "@/components/VSLSection";
import { DualImageMarquee } from "@/components/ui/DualImageMarquee";
import { WordReveal } from "@/components/ui/WordReveal";
import { StickyServices } from "@/components/sections/StickyServices";

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

        {/* Text ticker */}
        <Marquee items={MARQUEE_ITEMS} />

        {/* BLOCO A — Dual image marquee (dark contrast section) */}
        <section
          style={{
            background: "#111111",
            borderTop: "0.5px solid rgba(255,255,255,0.06)",
            borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            padding: "52px 0",
          }}
        >
          <DualImageMarquee />
        </section>

        {/* VSL — Video Sales Letter */}
        <VSLSection />

        <About />
        <MetricsStrip />

        {/* BLOCO B — Word-by-word manifesto reveal */}
        <section
          style={{
            padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)",
            borderBottom: "0.5px solid var(--color-border)",
            background: "var(--color-bg)",
            maxWidth: "960px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <WordReveal
            text="Organizamos sua presença digital com clareza, corrigimos o que trava o seu crescimento e implantamos a estrutura que transforma atendimento em oportunidade real."
            fontSize="clamp(22px, 3.2vw, 46px)"
          />
        </section>

        {/* BLOCO C — StickyServices replaces Services */}
        <StickyServices />

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
