"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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
  const [isMobile, setIsMobile] = useState(false);

  // One ref per service row
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Detect mobile (no sticky image column)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // IntersectionObserver-driven activation (Lenis-compatible)
  // Fires when a row enters the center 30% of the viewport
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
      {
        // Only activate when the row is in the middle 30% of the viewport
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      }
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
                lineHeight: 1,
                letterSpacing: "-0.03em",
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
                  padding: "clamp(20px, 3vw, 32px) 0",
                  borderBottom: "0.5px solid var(--color-border)",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      color:
                        activeIndex === i
                          ? "var(--color-accent)"
                          : "var(--color-muted-2)",
                      letterSpacing: "0.08em",
                      paddingTop: "5px",
                      flexShrink: 0,
                      transition: "color 0.4s ease",
                      minWidth: "28px",
                    }}
                  >
                    {service.number}
                  </span>

                  <div style={{ flex: 1 }}>
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

                    {/* Expandable content — opens when active (on mobile: always open) */}
                    <div
                      style={{
                        maxHeight: activeIndex === i || isMobile ? "240px" : "0",
                        overflow: "hidden",
                        transition:
                          "max-height 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
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
