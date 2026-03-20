"use client";

import Link from "next/link";
import { usePageReveal } from "@/hooks/usePageReveal";
import { Phone3DMockup } from "@/components/ui/Phone3DMockup";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function Hero() {
  usePageReveal();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(232,76,30,0.07) 0%, transparent 70%), " +
          "radial-gradient(ellipse 40% 60% at 80% 30%, rgba(255,255,255,0.02) 0%, transparent 60%), " +
          "var(--color-bg)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <AnimatedBackground />

      <div
        className="relative z-[1] mx-auto w-full max-w-[1280px]"
        style={{
          padding: "100px 48px 80px",
          display: "flex",
          alignItems: "center",
          gap: "64px",
        }}
      >
        {/* ─── LEFT COLUMN ─── */}
        <div
          style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: "0" }}
        >
          {/* Eyebrow */}
          <div data-reveal style={{ marginBottom: "28px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "40px",
                border: "0.5px solid var(--color-border-hover)",
                background: "rgba(255,255,255,0.03)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
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
              Estrutura Digital · 2025
            </span>
          </div>

          {/* H1 — 3 linhas impactantes */}
          <h1
            data-text-reveal
            className="font-bold"
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 0.93,
              letterSpacing: "-0.03em",
              color: "var(--color-text)",
              marginBottom: "24px",
            }}
          >
            <span style={{ display: "block" }}>Organizamos.</span>
            <span style={{ display: "block" }}>Corrigimos.</span>
            <span
              style={{
                display: "block",
                WebkitTextStroke: "1px rgba(240,237,230,0.25)",
                color: "transparent",
              }}
            >
              Implantamos.
            </span>
          </h1>

          {/* Parágrafo */}
          <p
            data-reveal
            style={{
              fontSize: "15px",
              color: "var(--color-muted)",
              lineHeight: 1.75,
              maxWidth: "380px",
              marginBottom: "36px",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Estrutura digital completa para empresas que querem crescer com
            clareza, consistência e resultado.
          </p>

          {/* Botões */}
          <div
            data-reveal
            style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}
          >
            <Link
              href="#agendar"
              className="btn-cta-hero"
              style={{ padding: "14px 28px" }}
            >
              Agendar análise estratégica ↗
            </Link>

            <Link
              href="#como-funciona"
              style={{
                fontSize: "13px",
                color: "var(--color-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                fontFamily: "var(--font-body), sans-serif",
              }}
              className="link-nav"
            >
              Ver como funciona →
            </Link>
          </div>

          {/* Trust badges */}
          <div
            data-reveal
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "0.5px solid var(--color-border)",
            }}
          >
            {["Sem contrato fixo", "Atendimento direto", "Entrega por etapas"].map((t) => (
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
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="var(--color-brand)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ─── RIGHT COLUMN — Phone3DMockup ─── */}
        <div
          data-reveal
          className="hidden lg:flex"
          style={{ flexShrink: 0, alignItems: "center", justifyContent: "flex-end" }}
        >
          <Phone3DMockup duration="0:28" brandName="Vander Pro" />
        </div>
      </div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 1023px) {
          #inicio > div {
            flex-direction: column !important;
            padding: 100px 24px 60px !important;
            gap: 40px !important;
            align-items: flex-start !important;
          }
          #inicio h1 {
            font-size: clamp(32px, 8vw, 44px) !important;
          }
        }
      `}</style>
    </section>
  );
}
