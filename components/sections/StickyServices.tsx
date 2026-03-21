"use client";

// ── Brand / platform icons ────────────────────────────────────

function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#4a90d9" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#4a90d9" strokeWidth="1.5" />
      <path d="M2 12h20" stroke="#4a90d9" strokeWidth="1.5" />
      <path d="M4.5 7h15M4.5 17h15" stroke="#4a90d9" strokeWidth="1.2" strokeDasharray="2 1" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path d="M17 14.8c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.9-.1.2-.3.2-.5.1-.8-.3-1.5-.8-2.1-1.4-.6-.6-1-1.3-1.2-2.1 0-.2 0-.3.2-.5.1-.1.3-.3.4-.5.1-.1.1-.3.1-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3H9c-.2 0-.4.1-.6.3-.6.6-.9 1.3-.9 2 .1 1.1.5 2 1.2 2.8 1.3 1.5 2.8 2.3 4.5 2.6.5.1 1 0 1.4-.2.5-.2.9-.6 1.1-1.1.1-.3.1-.5 0-.8z" fill="white" />
    </svg>
  );
}
function IconGoogle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21.8 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.5c-.2 1.2-1 2.2-2 2.9v2.4h3.2c1.9-1.7 3-4.3 3-7.3z" fill="#4285F4" />
      <path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.4c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4H3.1v2.5C4.7 19.9 8.1 22 12 22z" fill="#34A853" />
      <path d="M6.4 14.2c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.7H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.5l3.3-2.3z" fill="#FBBC05" />
      <path d="M12 6c1.5 0 2.8.5 3.9 1.5l2.9-2.9C17 3 14.7 2 12 2 8.1 2 4.7 4.1 3.1 7.2l3.3 2.5C7.2 7.7 9.4 6 12 6z" fill="#EA4335" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="ig-card" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FED373" />
          <stop offset="35%" stopColor="#F15245" />
          <stop offset="70%" stopColor="#D92E7F" />
          <stop offset="100%" stopColor="#9B36B7" />
        </linearGradient>
      </defs>
      <rect width="22" height="22" x="1" y="1" rx="6" fill="url(#ig-card)" />
      <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="16.2" cy="7.8" r="1" fill="white" />
    </svg>
  );
}
function IconGoogleAds() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 17l4-8 4 5 3-3 4 6" stroke="#4285F4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="17" r="2" fill="#EA4335" />
      <circle cx="7" cy="9" r="1.5" fill="#FBBC05" />
    </svg>
  );
}
function IconAI() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l1.5 4H18l-3.5 2.5 1.3 4-3.8-2.7-3.8 2.7 1.3-4L6 6h4.5L12 2z" stroke="#8b5cf6" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <circle cx="5" cy="18" r="2.5" stroke="#8b5cf6" strokeWidth="1.4" fill="none" />
      <circle cx="19" cy="18" r="2.5" stroke="#8b5cf6" strokeWidth="1.4" fill="none" />
      <path d="M7.5 18h9" stroke="#8b5cf6" strokeWidth="1.4" strokeDasharray="2 1" />
    </svg>
  );
}
// ── Service data ──────────────────────────────────────────────

const SERVICES = [
  {
    number: "01",
    icon: <IconGlobe />,
    title: "Landing Pages e Sites Estratégicos",
    description: "Páginas e sites com foco em apresentação profissional, clareza comercial e conversão.",
    tags: ["Design Responsivo", "SEO Técnico", "Alta Conversão", "Next.js"],
  },
  {
    number: "02",
    icon: <IconWhatsApp />,
    title: "WhatsApp e Atendimento Automatizado",
    description: "Organização do atendimento, automações, fluxos e ganho de agilidade no processo comercial.",
    tags: ["WhatsApp Business", "Chatbot", "Fluxos Automáticos", "CRM"],
  },
  {
    number: "03",
    icon: <IconGoogle />,
    title: "Google Meu Negócio e Presença Local",
    description: "Ajuste completo da presença local para negócios que dependem de visibilidade e confiança.",
    tags: ["Google Maps", "Reviews", "SEO Local", "Visibilidade"],
  },
  {
    number: "04",
    icon: <IconInstagram />,
    title: "Meta e Posicionamento nas Redes",
    description: "Ajuste de perfil e comunicação para atrair as pessoas certas e conduzir para o atendimento.",
    tags: ["Instagram", "Facebook", "Conteúdo", "Identidade Visual"],
  },
  {
    number: "05",
    icon: <IconGoogleAds />,
    title: "Tráfego Pago e Escala",
    description: "Campanhas com intenção comercial e previsibilidade para gerar oportunidades qualificadas.",
    tags: ["Google Ads", "Meta Ads", "ROI", "Escala"],
  },
  {
    number: "06",
    icon: <IconAI />,
    title: "IA, Integrações e Fluxos",
    description: "Integrações e automações com IA para reduzir atrito e acelerar o caminho até o cliente.",
    tags: ["ChatGPT", "Make", "Zapier", "Automação"],
  },
];

// ── Component — static, no scroll logic ──────────────────────

export function StickyServices() {
  return (
    <section
      id="servicos"
      style={{
        background: "var(--color-bg)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 80px)",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            marginBottom: "clamp(40px, 6vw, 64px)",
            paddingBottom: "clamp(24px, 4vw, 40px)",
            borderBottom: "0.5px solid var(--color-border)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                marginBottom: "10px",
              }}
            >
              02 / Soluções
            </p>
            <h2
              data-text-reveal
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 800,
                color: "var(--color-text)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Soluções que
              <br />
              viram operação.
            </h2>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body), sans-serif",
              maxWidth: "260px",
              lineHeight: 1.7,
              textAlign: "right",
              margin: 0,
            }}
          >
            Cada canal, cada ferramenta — organizada dentro de um sistema que funciona junto.
          </p>
        </div>

        {/* ── Grid de cards ── */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "var(--color-border)",
            border: "0.5px solid var(--color-border)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.number}
              data-scroll-reveal
              style={{
                background: "var(--color-bg)",
                padding: "clamp(24px, 3vw, 36px)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--color-surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--color-bg)";
              }}
            >
              {/* Icon + number row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "var(--color-surface)",
                    border: "0.5px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--color-muted-2)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {service.number}
                </span>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "0.5px",
                  background: "var(--color-border)",
                  margin: "0",
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(14px, 1.5vw, 17px)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "13px",
                  color: "var(--color-muted)",
                  lineHeight: 1.7,
                  margin: 0,
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      padding: "3px 10px",
                      border: "0.5px solid var(--color-border-hover)",
                      borderRadius: "20px",
                      color: "var(--color-muted)",
                      background: "var(--color-surface)",
                      fontFamily: "var(--font-body), sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Responsive: 1 column on mobile ── */}
      <style>{`
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
