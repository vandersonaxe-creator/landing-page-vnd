"use client";

import Link from "next/link";
import { usePageReveal } from "@/hooks/usePageReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

// Linea-style: each word on its own line, stacked vertically
const TITLE_WORDS = ["Estrutura", "Digital", "para", "Empresas", "Reais."] as const;

export default function Hero() {
  usePageReveal();

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderBottom: "0.5px solid var(--color-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top-right gradient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,76,30,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          padding:
            "clamp(80px, 12vw, 140px) clamp(24px, 5vw, 80px) clamp(60px, 8vw, 100px)",
        }}
      >
        {/* ── Trust badge (Linea style: "4.9 · 300+ Brands") ── */}
        <div data-reveal style={{ marginBottom: "clamp(28px, 5vw, 48px)" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "7px 16px",
              borderRadius: "100px",
              border: "0.5px solid var(--color-border-hover)",
              background: "var(--color-surface)",
              fontSize: "12px",
              letterSpacing: "0.04em",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            <span
              className="animate-pulse"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#4ade80",
                flexShrink: 0,
              }}
            />
            <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
              47+
            </strong>{" "}
            Empresas Atendidas &nbsp;·&nbsp; Desde 2022
          </span>
        </div>

        {/* ── STACKED WORDS (Linea signature) ── */}
        <div data-reveal>
          {TITLE_WORDS.map((word) => (
            <p
              key={word}
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(24px, 9vw, 120px)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                color: "var(--color-text)",
                margin: 0,
                padding: "0 0 0.06em 0",
              }}
            >
              {word}
            </p>
          ))}
        </div>

        {/* ── Description + CTAs ── */}
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "clamp(24px, 4vw, 48px)",
            flexWrap: "wrap",
            marginTop: "clamp(28px, 5vw, 52px)",
            paddingTop: "24px",
            borderTop: "0.5px solid var(--color-border)",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "var(--color-muted)",
              lineHeight: 1.8,
              maxWidth: "440px",
              fontFamily: "var(--font-body), sans-serif",
              margin: 0,
            }}
          >
            Organizamos, corrigimos e implantamos a estrutura digital que sua
            empresa precisa para atrair, atender e converter melhor.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              flexShrink: 0,
            }}
          >
            <MagneticButton href="#agendar" variant="primary">
              Agendar análise ↗
            </MagneticButton>
            <Link
              href="#vsl"
              className="link-nav"
              style={{
                fontSize: "13px",
                color: "var(--color-muted)",
                textDecoration: "none",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Ver como funciona →
            </Link>
          </div>
        </div>

        {/* ── Trust indicators row ── */}
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px, 3vw, 32px)",
            flexWrap: "wrap",
            marginTop: "clamp(20px, 3vw, 36px)",
          }}
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
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="var(--color-accent)" strokeWidth="1.5" />
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
    </section>
  );
}
