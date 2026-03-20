"use client";

import { usePageReveal } from "@/hooks/usePageReveal";
import { VSLContainer } from "@/components/ui/VSLContainer";

export default function Hero() {
  usePageReveal();

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "clamp(96px, 12vw, 130px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 90px)",
        position: "relative",
        overflow: "hidden",
        gap: "clamp(40px, 6vw, 72px)",
        background: "var(--color-bg)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
      className="flex-col md:flex-row"
    >
      {/* Subtle radial gradient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 55% 60% at 15% 50%, rgba(232,76,30,0.07) 0%, transparent 65%)," +
            "radial-gradient(ellipse 35% 50% at 85% 20%, rgba(0,0,0,0.02) 0%, transparent 60%)",
        }}
      />

      {/* ── LEFT COLUMN — text ── */}
      <div
        style={{
          flex: "0 0 42%",
          position: "relative",
          zIndex: 1,
          maxWidth: "520px",
        }}
        className="w-full text-center md:text-left mx-auto md:mx-0"
      >
        {/* Availability badge */}
        <div data-reveal style={{ marginBottom: "clamp(20px, 3vw, 28px)" }}>
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

        {/* H1 — 3 compact lines */}
        <h1
          data-text-reveal
          className="text-hero"
          style={{
            color: "var(--color-text)",
            marginBottom: "clamp(16px, 2.5vw, 24px)",
          }}
        >
          Organizamos.
          <br />
          Corrigimos.
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(17,17,17,0.25)",
            }}
          >
            Implantamos.
          </span>
        </h1>

        {/* Description */}
        <p
          data-reveal
          className="text-body"
          style={{
            color: "var(--color-muted)",
            maxWidth: "380px",
            marginBottom: "clamp(24px, 4vw, 36px)",
          }}
        >
          Estrutura digital completa para empresas que querem crescer com
          clareza, consistência e resultado real.
        </p>

        {/* CTAs */}
        <div
          data-reveal
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
          className="justify-center md:justify-start"
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
            Agendar análise estratégica ↗
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
            Ver como funciona →
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
          className="justify-center md:justify-start"
        >
          {["Sem contrato fixo", "Atendimento direto", "Entrega por etapas"].map(
            (t) => (
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
            )
          )}
        </div>
      </div>

      {/* ── RIGHT COLUMN — VSL container ── */}
      <div
        data-reveal
        style={{
          flex: "0 0 54%",
          position: "relative",
          zIndex: 1,
          paddingRight: "20px", // give space for floating cards
        }}
        className="w-full max-w-[560px] mx-auto md:mx-0 md:max-w-none"
      >
        <VSLContainer videoUrl="mMmLXTaz_jc" isYouTube isShorts />
      </div>
    </section>
  );
}
