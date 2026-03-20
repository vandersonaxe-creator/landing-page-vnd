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
  },
  {
    id: "whatsapp-clinica",
    title: "Automação WhatsApp — Clínica",
    category: "Atendimento · Automação",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    tag: "02",
  },
  {
    id: "gmn-local",
    title: "Presença Local — Google Meu Negócio",
    category: "Presença Local · SEO",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tag: "03",
  },
] as const;

export default function PortfolioSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div data-scroll-reveal className="mb-12">
          <p className="num-tag mb-3" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>05 / Portfólio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              data-text-reveal
              className="font-bold text-[var(--color-text)] max-w-xl"
            >
              Projetos que viram operação real
            </h2>
            <p className="text-sm text-[var(--color-muted)] max-w-xs md:text-right leading-relaxed">
              Resultados concretos aplicados em negócios como o seu.
            </p>
          </div>
          {/* Divider */}
          <div
            className="mt-6 h-px"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              data-scroll-reveal
              className="portfolio-item group relative overflow-hidden rounded-xl"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)",
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="portfolio-item-overlay absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(232,76,30,0.15)" }}
                >
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--color-accent)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M7 17L17 7M17 7H7M17 7v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                </div>

                {/* Number tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="num-tag"
                    style={{
                      background: "rgba(8,8,8,0.7)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div
                className="p-5"
                style={{ background: "var(--color-surface-2)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: "var(--color-brand)" }}
                >
                  {item.category}
                </p>
                <h3
                  className="font-semibold text-[var(--color-text)]"
                  style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
