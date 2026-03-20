"use client";

const CARDS = [
  {
    num: "01",
    title: "Sem estrutura ainda",
    text: "Comece com uma base digital clara para atrair e responder com confiança.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Estrutura desorganizada",
    text: "Organizamos WhatsApp, páginas e processos para parar de perder oportunidades.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Estrutura em evolução",
    text: "Aprimoramos automação, IA e tráfego para acelerar resultado sem bagunça.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
] as const;

export default function PhaseCards() {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        background: "#0a0a0a",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div data-scroll-reveal className="mb-12">
          <h2
            data-text-reveal
            className="font-bold text-[var(--color-text)] max-w-2xl"
          >
            Sua empresa pode estar em qualquer fase. Nós estruturamos a próxima.
          </h2>
          <p
            className="mt-3 max-w-xl leading-relaxed"
            style={{
              fontSize: "15px",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Três cenários. Uma direção única: começar com clareza, organizar o
            que está travado e evoluir o que já funciona.
          </p>
          <div
            className="mt-6 h-px"
            style={{ background: "var(--color-border)" }}
          />
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {CARDS.map((card, i) => (
            <div
              key={card.num}
              data-scroll-reveal
              className="group"
              style={{
                background: "var(--color-surface)",
                padding: "36px 28px",
                borderRadius:
                  CARDS.length === 3
                    ? i === 0
                      ? "12px 0 0 12px"
                      : i === CARDS.length - 1
                      ? "0 12px 12px 0"
                      : "0"
                    : "0",
                transition:
                  "background 0.35s, transform 0.35s, border-color 0.35s",
                border: "0.5px solid transparent",
                cursor: "default",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--color-surface-2)";
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "var(--color-border-hover)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--color-surface)";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "transparent";
              }}
            >
              {/* Number */}
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                {card.num}
              </p>

              {/* Separator */}
              <div
                style={{
                  height: "0.5px",
                  background: "var(--color-border)",
                  marginBottom: "20px",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--color-surface-2)",
                  borderRadius: "10px",
                  border: "0.5px solid var(--color-border)",
                  color: "var(--color-muted-2)",
                  marginBottom: "20px",
                }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.25,
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>

              {/* Text */}
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-body), sans-serif",
                  lineHeight: 1.7,
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
