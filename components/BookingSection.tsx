"use client";

import Link from "next/link";
import CalComEmbed from "@/components/CalComEmbed";

export default function BookingSection() {
  return (
    <section
      id="agendar"
      style={{
        background: "var(--color-surface)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      {/* ── "Let's GET STARTED" style header (Agencia) ── */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding:
            "clamp(56px, 9vw, 120px) clamp(24px, 5vw, 80px) clamp(40px, 6vw, 80px)",
          borderBottom: "0.5px solid var(--color-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent radial glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-120px",
            right: "10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,76,30,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Top row: label + rotating circle */}
        <div
          data-scroll-reveal
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            marginBottom: "clamp(24px, 5vw, 56px)",
          }}
        >
          {/* Label */}
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontFamily: "var(--font-body), sans-serif",
              paddingTop: "4px",
            }}
          >
            05 / Agendamento
          </p>

          {/* ── Rotating circle (Agencia's signature CTA element) ── */}
          <Link
            href="#agendar"
            aria-label="Agendar análise estratégica"
            style={{
              position: "relative",
              width: "clamp(120px, 14vw, 180px)",
              height: "clamp(120px, 14vw, 180px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            {/* Rotating text ring */}
            <svg
              viewBox="0 0 180 180"
              className="rotate-circle"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
              aria-hidden
            >
              <defs>
                <path
                  id="bookingCirclePath"
                  d="M 90,90 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                />
              </defs>
              <text
                style={{
                  fontSize: "10.5px",
                  fontFamily: "var(--font-body), sans-serif",
                  letterSpacing: "0.22em",
                  fill: "var(--color-muted)",
                  textTransform: "uppercase",
                }}
              >
                <textPath href="#bookingCirclePath" startOffset="0%">
                  AGENDAR · VANDER PRO · AGENDAR · VANDER PRO ·
                </textPath>
              </text>
            </svg>

            {/* Center button */}
            <div
              style={{
                width: "clamp(48px, 6vw, 72px)",
                height: "clamp(48px, 6vw, 72px)",
                borderRadius: "50%",
                background: "var(--color-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s, background 0.3s",
                boxShadow: "0 8px 24px rgba(232,76,30,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "scale(1.1)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "#ff5c2a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "scale(1)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "var(--color-accent)";
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </Link>
        </div>

        {/* ── CTA title ── */}
        <div data-scroll-reveal>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 6vw, 72px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
              margin: 0,
            }}
          >
            Vamos agendar
            <br />
            <span style={{ color: "var(--color-accent)" }}>sua análise.</span>
          </h2>
        </div>

        {/* Subtitle row */}
        <div
          data-scroll-reveal
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            marginTop: "clamp(24px, 5vw, 48px)",
            paddingTop: "24px",
            borderTop: "0.5px solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body), sans-serif",
              lineHeight: 1.8,
              maxWidth: "480px",
            }}
          >
            15 minutos. Sem apresentação. Direto ao que trava sua operação
            digital — atendimento, captação ou conversão. Escolha o horário
            que funciona para você.
          </p>
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
                lineHeight: 1.6,
              }}
            >
              Sem compromisso · Atendimento direto
            </p>
            <p
              style={{
                marginTop: "4px",
                fontSize: "12px",
                color: "var(--color-accent)",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 500,
              }}
            >
              Vagas limitadas por mês
            </p>
          </div>
        </div>
      </div>

      {/* ── Calendar embed ── */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "clamp(32px, 5vw, 64px) clamp(24px, 5vw, 80px)",
        }}
      >
        <div
          style={{
            border: "0.5px solid var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <CalComEmbed />
        </div>
      </div>
    </section>
  );
}
