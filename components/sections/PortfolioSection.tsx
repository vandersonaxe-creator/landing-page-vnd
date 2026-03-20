"use client";

import Image from "next/image";

const PORTFOLIO_ITEMS = [
  {
    id: "landing-eletricista",
    title: "Landing Page — Eletricista",
    category: "Landing Page · Conversão",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    tag: "01",
    context:
      "Profissional autônomo sem presença digital, perdendo clientes para concorrentes visíveis no Google.",
    solution:
      "Landing page focada em conversão + Google Meu Negócio otimizado + WhatsApp Business estruturado.",
    result: "Primeiro contato via Google chegou em 11 dias.",
  },
  {
    id: "whatsapp-clinica",
    title: "Automação WhatsApp — Clínica",
    category: "Atendimento · Automação",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    tag: "02",
    context:
      "Clínica respondendo mensagens manualmente, perdendo pacientes por demora e falta de seguimento.",
    solution:
      "Fluxo automatizado de atendimento + agendamento integrado + mensagens de follow-up automáticas.",
    result: "Redução de 70% no tempo de resposta. Menos paciente perdido.",
  },
  {
    id: "gmn-local",
    title: "Presença Local — Consultório",
    category: "Presença Local · SEO",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tag: "03",
    context:
      "Consultório com reputação local mas invisível no digital — sem avaliações, sem aparição no Maps.",
    solution:
      "Otimização completa do Google Meu Negócio + estratégia de coleta de avaliações + fotos profissionais.",
    result: "Passou de 4 para 47 avaliações em 60 dias. Aparecem nas buscas locais.",
  },
] as const;

export default function PortfolioSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: "var(--color-surface)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div data-scroll-reveal className="mb-12">
          <p
            className="num-tag mb-3"
            style={{ fontSize: "10px", letterSpacing: "0.12em" }}
          >
            05 / Portfólio
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              data-text-reveal
              className="font-bold text-[var(--color-text)] max-w-xl"
            >
              Projetos com contexto, solução e resultado
            </h2>
            <p
              className="text-sm max-w-xs md:text-right leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Não é galeria. É prova de que o método funciona.
            </p>
          </div>
          <div className="mt-6 h-px" style={{ background: "var(--color-border)" }} />
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              data-scroll-reveal
              className="portfolio-item group relative overflow-hidden rounded-xl"
              style={{
                border: "0.5px solid var(--color-border)",
                background: "var(--color-bg)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.1) 60%, transparent 100%)",
                  }}
                />

                {/* Number tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="num-tag"
                    style={{
                      background: "rgba(8,8,8,0.65)",
                      backdropFilter: "blur(8px)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      border: "0.5px solid rgba(255,255,255,0.12)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Category on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-body), sans-serif",
                      marginBottom: "4px",
                    }}
                  >
                    {item.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "white",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Context + Result */}
              <div
                style={{
                  padding: "20px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Context */}
                <div>
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-muted-2)",
                      fontFamily: "var(--font-body), sans-serif",
                      marginBottom: "4px",
                    }}
                  >
                    Cenário
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body), sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.context}
                  </p>
                </div>

                {/* Separator */}
                <div style={{ height: "0.5px", background: "var(--color-border)" }} />

                {/* Result — destacado */}
                <div
                  style={{
                    background: "var(--color-accent-dim)",
                    border: "0.5px solid rgba(232,76,30,0.15)",
                    borderRadius: "8px",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ flexShrink: 0, marginTop: "1px" }}
                  >
                    <path
                      d="M13 7l5 5-5 5M6 7l5 5-5 5"
                      stroke="var(--color-accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-body), sans-serif",
                      lineHeight: 1.55,
                      fontWeight: 500,
                    }}
                  >
                    {item.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          data-scroll-reveal
          className="mt-8 text-center"
          style={{
            fontSize: "12px",
            color: "var(--color-muted-2)",
            fontFamily: "var(--font-body), sans-serif",
            fontStyle: "italic",
          }}
        >
          * Dados baseados em projetos reais. Resultados variam conforme cenário e nicho.
        </p>
      </div>
    </section>
  );
}
