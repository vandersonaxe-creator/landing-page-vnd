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
        {/* 1 — Título */}
        <Hero />

        {/* 2 — Ticker de serviços */}
        <Marquee items={MARQUEE_ITEMS} />

        {/* 4 — Galeria de imagens (seção escura de contraste) */}
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

        {/* 5 — Sobre */}
        <About />

        {/* 7 — Manifesto em scroll */}
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

        {/* 8 — Serviços com imagem sticky */}
        <StickyServices />

        {/* 9 — Como funciona */}
        <HowItWorks />

        {/* 10 — Depoimentos */}
        <VideoTestimonials />

        {/* 11 — Portfólio */}
        <PortfolioSection />

        {/* 12 — Agendamento */}
        <BookingSection />

        {/* 13 — FAQ */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
