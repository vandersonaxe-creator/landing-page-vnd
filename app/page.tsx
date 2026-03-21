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
import { WordReveal } from "@/components/ui/WordReveal";
import { StickyServices } from "@/components/sections/StickyServices";
import { CTABanner } from "@/components/ui/CTABanner";

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
        {/* 1 — Hero: problema + VSL */}
        <Hero />

        {/* 2 — Ticker: respiro rápido + lista de soluções */}
        <Marquee items={MARQUEE_ITEMS} />

        {/* 3 — Declaração escura: o problema real (contraste visual + impacto emocional) */}
        <section
          style={{
            background: "#111111",
            borderTop: "0.5px solid rgba(255,255,255,0.06)",
            borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            padding: "clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px)",
          }}
        >
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <p
              data-scroll-reveal
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "28px",
              }}
            >
              O problema real
            </p>

            <p
              data-scroll-reveal
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(22px, 3.2vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "#f0ede6",
                marginBottom: "48px",
              }}
            >
              A maioria das empresas perde cliente todo dia — não por falta de
              produto, mas por falta de estrutura digital que organize, atraia e
              converta.
            </p>

            <div
              data-scroll-reveal
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "clamp(24px, 4vw, 48px)",
                paddingTop: "40px",
                borderTop: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              {[
                {
                  num: "73%",
                  text: "das pequenas empresas não aparecem quando o cliente pesquisa no Google",
                },
                {
                  num: "60%",
                  text: "dos contatos via WhatsApp ficam sem resposta em menos de 24h",
                },
                {
                  num: "3×",
                  text: "mais oportunidades com presença digital estruturada vs. improviso",
                },
              ].map((stat) => (
                <div key={stat.num}>
                  <p
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "clamp(32px, 4.5vw, 52px)",
                      fontWeight: 800,
                      color: "var(--color-accent)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {stat.num}
                  </p>
                  <p
                    style={{
                      marginTop: "10px",
                      fontSize: "13px",
                      color: "rgba(240,237,230,0.5)",
                      fontFamily: "var(--font-body), sans-serif",
                      lineHeight: 1.65,
                    }}
                  >
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 — Manifesto: WordReveal (flui da declaração acima) */}
        <section
          style={{
            padding: "clamp(80px, 10vw, 130px) clamp(24px, 5vw, 80px)",
            background: "var(--color-bg)",
          }}
        >
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <WordReveal
              text="Organizamos sua presença digital com clareza, corrigimos o que trava o seu crescimento e implantamos a estrutura que transforma atendimento em oportunidade real."
              fontSize="clamp(26px, 4vw, 54px)"
            />
          </div>
        </section>

        {/* 5 — Sobre: credibilidade de quem está por trás */}
        <About />

        {/* 6 — O Método: como funciona */}
        <HowItWorks />

        {/* 7 — Portfólio: projetos com contexto, solução e resultado */}
        <PortfolioSection />

        {/* 7b — CTA intermediário após o método e portfólio */}
        <section
          style={{
            background: "var(--color-bg)",
            borderTop: "0.5px solid var(--color-border)",
            borderBottom: "0.5px solid var(--color-border)",
            padding: "clamp(48px, 6vw, 72px) clamp(24px, 5vw, 80px)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <p
              data-scroll-reveal
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(20px, 2.8vw, 32px)",
                fontWeight: 800,
                color: "var(--color-text)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Pronto para organizar sua operação digital?
            </p>
            <p
              data-scroll-reveal
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "15px",
                color: "var(--color-muted)",
                lineHeight: 1.65,
                marginBottom: "28px",
              }}
            >
              A análise é gratuita e leva menos de 20 minutos.
            </p>
            <a
              href="#agendar"
              data-scroll-reveal
              className="btn-cta-hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 36px",
                background: "var(--color-accent)",
                color: "white",
                borderRadius: "4px",
                textDecoration: "none",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.01em",
                boxShadow: "0 8px 28px rgba(232,76,30,0.28)",
                transition: "transform 0.25s, background 0.25s, box-shadow 0.25s",
              }}
            >
              Agendar análise gratuita ↗
            </a>
          </div>
        </section>

        {/* 8 — Soluções: os serviços dentro do método */}
        <StickyServices />

        {/* 9 — Depoimentos: prova social */}
        <VideoTestimonials />

        {/* 10 — CTA intermediário: oportunidade de conversão pós-prova social */}
        <CTABanner />

        {/* 11 — Agendamento: CTA final escalado */}
        <BookingSection />

        {/* 12 — FAQ: objeções antes de sair */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
