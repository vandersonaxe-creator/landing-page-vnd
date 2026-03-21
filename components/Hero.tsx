"use client";

import { usePageReveal } from "@/hooks/usePageReveal";

function PhoneFrame({ width = 260 }: { width?: number }) {
  return (
    <div
      style={{
        background: "#1c1c1e",
        borderRadius: "40px",
        padding: "12px 12px 20px",
        boxShadow:
          "0 32px 72px rgba(0,0,0,0.18), 0 0 0 1.5px rgba(0,0,0,0.14), inset 0 0 0 1px rgba(255,255,255,0.07)",
        width: `${width}px`,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "72px",
          height: "20px",
          background: "#111",
          borderRadius: "0 0 12px 12px",
          margin: "0 auto 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2a2a2a" }} />
        <div style={{ width: "22px", height: "3px", borderRadius: "2px", background: "#2a2a2a" }} />
      </div>
      <div
        style={{
          width: "100%",
          aspectRatio: "9/16",
          borderRadius: "24px",
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
          title="NEXU"
        />
      </div>
      <div
        style={{
          width: "64px",
          height: "4px",
          background: "rgba(255,255,255,0.18)",
          borderRadius: "2px",
          margin: "10px auto 0",
        }}
      />
    </div>
  );
}

const TRUST = [
  "Diagnóstico estratégico",
  "Implantação por prioridade",
  "Foco em resultado real",
];

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="var(--color-accent)" strokeWidth="1.5" />
      <path
        d="M8 12l3 3 5-5"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Badge() {
  return (
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
  );
}

export default function Hero() {
  usePageReveal();

  return (
    <>
      {/* ────────────────────────────────────────────────
          MOBILE  (hidden on md+)
          Layout: badge → H1 → vídeo → CTA → trust
          Padding controlado para começar logo abaixo da navbar
      ──────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="flex flex-col md:hidden"
        style={{
          background: "var(--color-bg)",
          borderBottom: "0.5px solid var(--color-border)",
          padding: "8px 20px 36px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* bg gradient */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,76,30,0.05) 0%, transparent 70%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div
            data-reveal
            style={{ marginBottom: "18px", display: "flex", justifyContent: "center" }}
          >
            <Badge />
          </div>

          {/* H1 */}
          <h1
            data-text-reveal
            className="text-hero"
            style={{
              color: "var(--color-text)",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Pare de perder
            <br />
            cliente por falta
            <br />
            de estrutura.
          </h1>

          {/* Phone frame — imediatamente após o título */}
          <div
            data-reveal
            style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
          >
            <PhoneFrame width={210} />
          </div>

          {/* CTA — imediatamente após o vídeo */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <a
              href="#agendar"
              className="btn-shimmer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 32px",
                background: "var(--color-accent)",
                color: "white",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.01em",
                fontFamily: "var(--font-body), sans-serif",
                boxShadow: "0 8px 24px rgba(232,76,30,0.28)",
                width: "100%",
                maxWidth: "310px",
                textAlign: "center",
              }}
            >
              Agendar análise gratuita ↗
            </a>
          </div>

          {/* Trust */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px 16px",
              paddingTop: "16px",
              borderTop: "0.5px solid var(--color-border)",
            }}
          >
            {TRUST.map((t) => (
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
                <CheckIcon />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────
          DESKTOP  (hidden below md)
          Grid 2 colunas: texto 55% | mockup 45%
          Altura mínima 100vh, alinhado ao centro
      ──────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="hidden md:flex"
        style={{
          minHeight: "100svh",
          alignItems: "center",
          background: "var(--color-bg)",
          borderBottom: "0.5px solid var(--color-border)",
          padding: "80px clamp(48px, 6vw, 96px)",
          gap: "clamp(48px, 5vw, 72px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* bg gradient */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 50% 60% at 10% 50%, rgba(232,76,30,0.06) 0%, transparent 65%)",
          }}
        />

        {/* Left column — text */}
        <div
          style={{
            flex: "1 1 55%",
            maxWidth: "560px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div data-reveal style={{ marginBottom: "24px" }}>
            <Badge />
          </div>

          <h1
            data-text-reveal
            className="text-hero"
            style={{ color: "var(--color-text)", marginBottom: "18px" }}
          >
            Pare de perder
            <br />
            cliente por falta
            <br />
            de estrutura.
          </h1>

          <div
            data-reveal
            style={{
              width: "36px",
              height: "3px",
              background: "var(--color-accent)",
              borderRadius: "2px",
              marginBottom: "20px",
            }}
          />

          <p
            data-reveal
            className="text-body"
            style={{
              color: "var(--color-muted)",
              maxWidth: "420px",
              marginBottom: "32px",
              lineHeight: 1.7,
            }}
          >
            Organizamos sua presença digital, automatizamos seu atendimento e
            conectamos cada canal para você parar de improvisar e começar a
            crescer de verdade.
          </p>

          {/* CTAs */}
          <div
            data-reveal
            style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "32px" }}
          >
            <a
              href="#agendar"
              className="btn-shimmer"
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
                boxShadow: "0 8px 24px rgba(232,76,30,0.22)",
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
                el.style.boxShadow = "0 8px 24px rgba(232,76,30,0.22)";
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

          {/* Trust */}
          <div
            data-reveal
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              paddingTop: "20px",
              borderTop: "0.5px solid var(--color-border)",
            }}
          >
            {TRUST.map((t) => (
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
                <CheckIcon />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — phone mockup, anchored, with 2 floating cards */}
        <div
          data-reveal
          style={{
            flex: "0 0 auto",
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <PhoneFrame width={296} />

            {/* Card 1 — posicionamento: execução com método (+ destaque laranja) */}
            <div
              style={{
                position: "absolute",
                top: "28px",
                right: "-108px",
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(12px)",
                border: "0.5px solid rgba(0,0,0,0.07)",
                borderRadius: "12px",
                padding: "12px 18px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.09)",
                animation: "heroFloat1 4.5s ease-in-out infinite",
                minWidth: "158px",
                maxWidth: "210px",
              }}
            >
              <div
                style={{
                  fontSize: "9px",
                  color: "#999",
                  marginBottom: "6px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 500,
                }}
              >
                Execução
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "21px",
                  fontWeight: 800,
                  color: "#111",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                com método
                <span style={{ color: "var(--color-accent)" }}>+</span>
              </div>
            </div>

            {/* Card 2 — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: "64px",
                left: "-112px",
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(12px)",
                border: "0.5px solid rgba(0,0,0,0.07)",
                borderRadius: "12px",
                padding: "12px 18px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.09)",
                animation: "heroFloat2 5.2s ease-in-out infinite",
                minWidth: "136px",
              }}
            >
              <div
                style={{
                  fontSize: "9px",
                  color: "#999",
                  marginBottom: "4px",
                  letterSpacing: "0.1em",
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
            @keyframes heroFloat1 {
              0%,100% { transform: translateY(0px) rotate(0.5deg); }
              50%      { transform: translateY(-8px) rotate(-0.5deg); }
            }
            @keyframes heroFloat2 {
              0%,100% { transform: translateY(0px) rotate(-0.5deg); }
              50%      { transform: translateY(-6px) rotate(0.5deg); }
            }
          `}</style>
        </div>
      </section>
    </>
  );
}
