"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// ── Brand / platform icons, one per service ──────────────────

function IconGlobe() {
  // 01 — Landing Pages: Web / Globe
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#4a90d9" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#4a90d9" strokeWidth="1.5" />
      <path d="M2 12h20" stroke="#4a90d9" strokeWidth="1.5" />
      <path d="M4.5 7h15M4.5 17h15" stroke="#4a90d9" strokeWidth="1.2" strokeDasharray="2 1" />
    </svg>
  );
}

function IconWhatsApp() {
  // 02 — WhatsApp
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path
        d="M17 14.8c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.9-.1.2-.3.2-.5.1-.8-.3-1.5-.8-2.1-1.4-.6-.6-1-1.3-1.2-2.1 0-.2 0-.3.2-.5.1-.1.3-.3.4-.5.1-.1.1-.3.1-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3H9c-.2 0-.4.1-.6.3-.6.6-.9 1.3-.9 2 .1 1.1.5 2 1.2 2.8 1.3 1.5 2.8 2.3 4.5 2.6.5.1 1 0 1.4-.2.5-.2.9-.6 1.1-1.1.1-.3.1-.5 0-.8z"
        fill="white"
      />
    </svg>
  );
}

function IconGoogle() {
  // 03 — Google Meu Negócio
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21.8 12.2c0-.8-.1-1.5-.2-2.2H12v4.2h5.5c-.2 1.2-1 2.2-2 2.9v2.4h3.2c1.9-1.7 3-4.3 3-7.3z" fill="#4285F4" />
      <path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.4c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4H3.1v2.5C4.7 19.9 8.1 22 12 22z" fill="#34A853" />
      <path d="M6.4 14.2c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.7H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.5l3.3-2.3z" fill="#FBBC05" />
      <path d="M12 6c1.5 0 2.8.5 3.9 1.5l2.9-2.9C17 3 14.7 2 12 2 8.1 2 4.7 4.1 3.1 7.2l3.3 2.5C7.2 7.7 9.4 6 12 6z" fill="#EA4335" />
    </svg>
  );
}

function IconInstagram() {
  // 04 — Meta / Instagram
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="ig-svc" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FED373" />
          <stop offset="35%" stopColor="#F15245" />
          <stop offset="70%" stopColor="#D92E7F" />
          <stop offset="100%" stopColor="#9B36B7" />
        </linearGradient>
      </defs>
      <rect width="22" height="22" x="1" y="1" rx="6" fill="url(#ig-svc)" />
      <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
      <circle cx="16.2" cy="7.8" r="1" fill="white" />
    </svg>
  );
}

function IconGoogleAds() {
  // 05 — Tráfego Pago (Google Ads + Meta Ads)
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M3 17l4-8 4 5 3-3 4 6" stroke="#4285F4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="17" r="2" fill="#EA4335" />
      <circle cx="7" cy="9" r="1.5" fill="#FBBC05" />
    </svg>
  );
}

function IconAI() {
  // 06 — IA, Integrações e Fluxos
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l1.5 4H18l-3.5 2.5 1.3 4-3.8-2.7-3.8 2.7 1.3-4L6 6h4.5L12 2z" stroke="#8b5cf6" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <circle cx="5" cy="18" r="2.5" stroke="#8b5cf6" strokeWidth="1.4" fill="none" />
      <circle cx="19" cy="18" r="2.5" stroke="#8b5cf6" strokeWidth="1.4" fill="none" />
      <path d="M7.5 18h9" stroke="#8b5cf6" strokeWidth="1.4" strokeDasharray="2 1" />
    </svg>
  );
}

function IconRoadmap() {
  // 07 — Prioridade de Entregas
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="3" rx="1.5" fill="#e84c1e" />
      <rect x="3" y="10.5" width="13" height="3" rx="1.5" fill="#e84c1e" opacity="0.6" />
      <rect x="3" y="17" width="8" height="3" rx="1.5" fill="#e84c1e" opacity="0.35" />
    </svg>
  );
}

function IconJourney() {
  // 08 — Jornada do Cliente
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="4" cy="12" r="2.5" stroke="#10b981" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="6" r="2.5" stroke="#10b981" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="12" r="2.5" stroke="#10b981" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="18" r="2.5" stroke="#10b981" strokeWidth="1.5" fill="none" />
      <path d="M6.5 12h3M14.5 12h3M12 8.5v3M12 15.5v0" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5.8 10.2l4.4-2.6M13.8 7.6l4.4 2.6M18.2 13.8l-4.4 2.6M10.2 16.4L5.8 13.8" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const SERVICE_ICONS = [
  <IconGlobe key="globe" />,
  <IconWhatsApp key="whatsapp" />,
  <IconGoogle key="google" />,
  <IconInstagram key="instagram" />,
  <IconGoogleAds key="ads" />,
  <IconAI key="ai" />,
  <IconRoadmap key="roadmap" />,
  <IconJourney key="journey" />,
];

const SERVICES = [
  {
    number: "01",
    title: "Landing Pages e Sites Estratégicos",
    description:
      "Páginas e sites com foco em apresentação profissional, clareza comercial e conversão.",
    tags: ["Design Responsivo", "SEO Técnico", "Alta Conversão", "Next.js"],
    image: {
      url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",
      alt: "Design de landing page moderna",
    },
  },
  {
    number: "02",
    title: "WhatsApp e Atendimento Automatizado",
    description:
      "Organização do atendimento, automações, fluxos e ganho de agilidade no processo comercial.",
    tags: ["WhatsApp Business", "Chatbot", "Fluxos Automáticos", "CRM"],
    image: {
      url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=80",
      alt: "Automação de WhatsApp e atendimento",
    },
  },
  {
    number: "03",
    title: "Google Meu Negócio e Presença Local",
    description:
      "Ajuste completo da presença local para negócios que dependem de visibilidade e confiança.",
    tags: ["Google Maps", "Reviews", "SEO Local", "Visibilidade"],
    image: {
      url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&q=80",
      alt: "Presença digital local e Google",
    },
  },
  {
    number: "04",
    title: "Meta e Posicionamento nas Redes",
    description:
      "Ajuste de perfil e comunicação para atrair as pessoas certas e conduzir para o atendimento.",
    tags: ["Instagram", "Facebook", "Conteúdo", "Identidade Visual"],
    image: {
      url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
      alt: "Redes sociais e marketing digital",
    },
  },
  {
    number: "05",
    title: "Tráfego Pago e Escala",
    description:
      "Campanhas com intenção comercial e previsibilidade para gerar oportunidades qualificadas.",
    tags: ["Google Ads", "Meta Ads", "ROI", "Escala"],
    image: {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
      alt: "Dashboard de campanhas e tráfego pago",
    },
  },
  {
    number: "06",
    title: "IA, Integrações e Fluxos",
    description:
      "Integrações e automações com IA para reduzir atrito e acelerar o caminho até o cliente.",
    tags: ["ChatGPT", "Make", "Zapier", "Automação"],
    image: {
      url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
      alt: "Inteligência artificial e automações",
    },
  },
  {
    number: "07",
    title: "Prioridade de Entregas",
    description:
      "O que entra primeiro e o que vem depois, para manter continuidade e evitar retrabalho.",
    tags: ["Diagnóstico", "Roadmap", "Sprints", "Ajustes"],
    image: {
      url: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=900&q=80",
      alt: "Planejamento e gestão de projetos",
    },
  },
  {
    number: "08",
    title: "Jornada do Cliente",
    description:
      "Organização dos pontos de contato para respostas rápidas e condução clara ao agendamento.",
    tags: ["Mapeamento", "Funil", "Follow-up", "Conversão"],
    image: {
      url: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=900&q=80",
      alt: "Jornada e experiência do cliente",
    },
  },
] as const;

export function StickyServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // IntersectionObserver-driven (Lenis-compatible — no window.scroll needed).
  // Activates immediately when a row enters the central 30% of the viewport.
  useEffect(() => {
    const rows = rowRefs.current.filter((r): r is HTMLDivElement => r !== null);
    if (!rows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = rows.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) setActiveIndex(idx);
        });
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

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
          padding:
            "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 80px) clamp(56px, 8vw, 96px)",
        }}
      >
        {/* ── Section header ── */}
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
              className="num-tag"
              style={{
                marginBottom: "10px",
                fontSize: "10px",
                letterSpacing: "0.12em",
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
            Role para ver cada solução — a imagem acompanha conforme você desce.
          </p>
        </div>

        {/* ── Layout: list left + sticky image right ── */}
        <div
          className="sticky-services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "start",
          }}
        >
          {/* Left: service rows */}
          <div>
            {SERVICES.map((service, i) => (
              <div
                key={service.number}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                style={{
                    padding: "clamp(28px, 3.5vw, 40px) 0",
                    borderBottom: "0.5px solid var(--color-border)",
                    cursor: "default",
                    minHeight: "72px",   // ensures the observer fires reliably on mobile
                  }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  {/* Icon + number stacked */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "4px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: activeIndex === i
                          ? "var(--color-surface-2)"
                          : "var(--color-surface)",
                        border: `0.5px solid ${activeIndex === i ? "var(--color-border-hover)" : "var(--color-border)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.4s ease, border-color 0.4s ease",
                        opacity: activeIndex === i ? 1 : 0.55,
                      }}
                    >
                      {SERVICE_ICONS[i]}
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: activeIndex === i
                          ? "var(--color-accent)"
                          : "var(--color-muted-2)",
                        letterSpacing: "0.08em",
                        transition: "color 0.4s ease",
                      }}
                    >
                      {service.number}
                    </span>
                  </div>

                  <div style={{ flex: 1, paddingTop: "4px" }}>
                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "clamp(15px, 1.8vw, 20px)",
                        fontWeight: 600,
                        color:
                          activeIndex === i
                            ? "var(--color-text)"
                            : "var(--color-muted)",
                        lineHeight: 1.3,
                        transition: "color 0.4s ease",
                        margin: 0,
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Expandable content — opens when active (same on desktop and mobile) */}
                    <div
                      style={{
                        maxHeight: activeIndex === i ? "240px" : "0",
                        overflow: "hidden",
                        transition:
                          "max-height 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
                        opacity: activeIndex === i ? 1 : 0,
                        transitionProperty: "max-height, opacity",
                        transitionDuration: "0.6s, 0.4s",
                        transitionDelay: activeIndex === i ? "0s, 0.1s" : "0s, 0s",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--color-muted)",
                          fontFamily: "var(--font-body), sans-serif",
                          lineHeight: 1.75,
                          marginTop: "10px",
                          marginBottom: "12px",
                        }}
                      >
                        {service.description}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "6px",
                          paddingBottom: "4px",
                        }}
                      >
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontSize: "10px",
                              padding: "4px 10px",
                              border:
                                "0.5px solid var(--color-border-hover)",
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: sticky image (hidden on mobile via CSS) */}
          <div
            className="sticky-services-image-col"
            style={{ position: "sticky", top: "96px", alignSelf: "start" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                borderRadius: "16px",
                overflow: "hidden",
                border: "0.5px solid var(--color-border)",
              }}
            >
              {SERVICES.map((service, i) => (
                <div
                  key={service.number}
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: activeIndex === i ? 1 : 0,
                    transition:
                      "opacity 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                >
                  <Image
                    src={service.image.url}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                      transform:
                        activeIndex === i ? "scale(1.04)" : "scale(1)",
                      transition:
                        "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "40px 24px 24px",
                      background:
                        "linear-gradient(to top, rgba(8,8,8,0.78) 0%, transparent 100%)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.55)",
                        letterSpacing: "0.08em",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {service.number}
                    </span>
                    <p
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "white",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress indicator dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginTop: "16px",
              }}
            >
              {SERVICES.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: activeIndex === i ? "20px" : "5px",
                    height: "5px",
                    borderRadius: "3px",
                    background:
                      activeIndex === i
                        ? "var(--color-accent)"
                        : "var(--color-border-hover)",
                    transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
