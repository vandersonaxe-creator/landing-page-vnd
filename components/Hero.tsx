"use client";

import { usePageReveal } from "@/hooks/usePageReveal";

// Phone frame extracted as JSX so we can render it
// in two positions: inline (mobile) and right column (desktop)
function PhoneFrame() {
  return (
    <div
      style={{
        background: "#1c1c1e",
        borderRadius: "44px",
        padding: "14px 14px 22px",
        boxShadow:
          "0 48px 96px rgba(0,0,0,0.18), 0 0 0 1.5px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.08)",
        width: "260px",
        position: "relative",
      }}
    >
      {/* Notch */}
      <div
        style={{
          width: "80px",
          height: "22px",
          background: "#111",
          borderRadius: "0 0 14px 14px",
          margin: "0 auto 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#2a2a2a",
          }}
        />
        <div
          style={{
            width: "24px",
            height: "4px",
            borderRadius: "2px",
            background: "#2a2a2a",
          }}
        />
      </div>

      {/* Video screen — 9:16 */}
      <div
        style={{
          width: "100%",
          aspectRatio: "9/16",
          borderRadius: "28px",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/mMmLXTaz_jc?rel=0&modestbranding=1&playsinline=1"
          style={{ width: "100%", height: "100%", border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          title="Depoimento Vander Pro"
        />
      </div>

      {/* Home bar */}
      <div
        style={{
          width: "72px",
          height: "4px",
          background: "rgba(255,255,255,0.25)",
          borderRadius: "2px",
          margin: "12px auto 0",
        }}
      />
    </div>
  );
}

export default function Hero() {
  usePageReveal();

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding:
          "clamp(96px, 12vw, 130px) clamp(20px, 5vw, 80px) clamp(60px, 8vw, 90px)",
        position: "relative",
        overflow: "hidden",
        gap: "clamp(40px, 5vw, 64px)",
        background: "var(--color-bg)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
      className="flex-col md:flex-row"
    >
      {/* Subtle accent gradient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 50% 55% at 15% 50%, rgba(232,76,30,0.06) 0%, transparent 65%)",
        }}
      />

      {/* ── LEFT COLUMN — text + mobile video ── */}
      <div
        style={{
          flex: "0 0 50%",
          position: "relative",
          zIndex: 1,
          maxWidth: "560px",
          width: "100%",
        }}
        className="mx-auto md:mx-0"
      >
        {/* Availability badge */}
        <div data-reveal style={{ marginBottom: "clamp(18px, 3vw, 24px)" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "0.5px solid var(--color-border-hover)",
              background: "var(--color-surface)",
              borderRadius: "40px",
              padding: "6px 16px",
            }}
          >
            <span
              className="animate-pulse"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4ade80",
                flexShrink: 0,
              }}
            />
            <span
              className="text-label"
              style={{ color: "var(--color-muted)" }}
            >
              Disponível para novos projetos
            </span>
          </span>
        </div>

        {/* H1 — outcome-focused */}
        <h1
          data-text-reveal
          className="text-hero"
          style={{
            color: "var(--color-text)",
            marginBottom: "clamp(20px, 3vw, 28px)",
            textAlign: "left",
          }}
        >
          Pare de perder
          <br />
          cliente por falta
          <br />
          de estrutura.
        </h1>

        {/* ── MOBILE ONLY: phone frame immediately after title ── */}
        <div
          className="md:hidden"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            marginBottom: "clamp(24px, 5vw, 32px)",
          }}
        >
          {/* Video in phone frame */}
          <PhoneFrame />

          {/* Primary CTA — mobile, right after video */}
          <a
            href="#agendar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              maxWidth: "280px",
              padding: "15px 28px",
              background: "var(--color-accent)",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.01em",
              fontFamily: "var(--font-body), sans-serif",
              boxShadow: "0 8px 24px rgba(232,76,30,0.30)",
              textAlign: "center",
            }}
          >
            Agendar análise gratuita ↗
          </a>
        </div>

        {/* Accent rule */}
        <div
          data-reveal
          style={{
            width: "40px",
            height: "3px",
            background: "var(--color-accent)",
            borderRadius: "2px",
            marginBottom: "clamp(16px, 2.5vw, 24px)",
          }}
        />

        {/* Description */}
        <p
          data-reveal
          className="text-body"
          style={{
            color: "var(--color-muted)",
            maxWidth: "400px",
            marginBottom: "clamp(24px, 4vw, 36px)",
          }}
        >
          Organizamos sua presença digital, automatizamos seu atendimento e
          conectamos cada canal para você parar de improvisar e começar a
          crescer de verdade.
        </p>

        {/* Desktop CTAs */}
        <div
          data-reveal
          className="hidden md:flex"
          style={{
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#agendar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              background: "var(--color-accent)",
              color: "white",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.02em",
              fontFamily: "var(--font-body), sans-serif",
              boxShadow: "0 8px 24px rgba(232,76,30,0.25)",
              transition: "transform 0.25s, background 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-2px)";
              el.style.background = "#ff5c2a";
              el.style.boxShadow = "0 12px 32px rgba(232,76,30,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "";
              el.style.background = "var(--color-accent)";
              el.style.boxShadow = "0 8px 24px rgba(232,76,30,0.25)";
            }}
          >
            Agendar análise gratuita ↗
          </a>
          <a
            href="#como-funciona"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              color: "var(--color-muted)",
              textDecoration: "none",
              fontFamily: "var(--font-body), sans-serif",
              transition: "color 0.2s",
              padding: "13px 0",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-muted)")
            }
          >
            Ver o método →
          </a>
        </div>

        {/* Trust indicators */}
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px, 2vw, 24px)",
            flexWrap: "wrap",
            marginTop: "clamp(20px, 3vw, 32px)",
            paddingTop: "clamp(16px, 2vw, 24px)",
            borderTop: "0.5px solid var(--color-border)",
          }}
        >
          {[
            "47+ empresas atendidas",
            "Sem contrato fixo",
            "Entrega por etapas",
          ].map((t) => (
            <span
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 12l3 3 5-5"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── RIGHT COLUMN — desktop only phone frame with floating cards ── */}
      <div
        data-reveal
        className="hidden md:flex"
        style={{
          flex: "0 0 46%",
          position: "relative",
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <PhoneFrame />

          {/* Floating cards */}
          {/* Card: clients */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              right: "-72px",
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(12px)",
              border: "0.5px solid var(--color-border)",
              borderRadius: "12px",
              padding: "12px 16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              animation: "heroCardFloat1 4s ease-in-out infinite",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                color: "var(--color-muted)",
                marginBottom: "3px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Empresas atendidas
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 800,
                color: "var(--color-text)",
                lineHeight: 1,
              }}
            >
              47<span style={{ color: "var(--color-accent)" }}>+</span>
            </div>
          </div>

          {/* Card: time */}
          <div
            style={{
              position: "absolute",
              bottom: "48px",
              left: "-80px",
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(12px)",
              border: "0.5px solid var(--color-border)",
              borderRadius: "12px",
              padding: "12px 16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              animation: "heroCardFloat2 4s ease-in-out infinite",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                color: "var(--color-muted)",
                marginBottom: "3px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Resultado visível em
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 800,
                color: "var(--color-accent)",
                lineHeight: 1,
              }}
            >
              2–3 semanas
            </div>
          </div>
        </div>

        <style>{`
          @keyframes heroCardFloat1 {
            0%,100% { transform: translateY(0px); }
            50%      { transform: translateY(-6px); }
          }
          @keyframes heroCardFloat2 {
            0%,100% { transform: translateY(0px); }
            50%      { transform: translateY(-4px); }
          }
        `}</style>
      </div>
    </section>
  );
}
