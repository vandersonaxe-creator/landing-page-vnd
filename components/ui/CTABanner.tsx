"use client";

export function CTABanner() {
  return (
    <section
      style={{
        background: "var(--color-accent)",
        padding: "clamp(48px, 6vw, 72px) clamp(24px, 5vw, 80px)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "260px" }}>
          <p
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(22px, 3vw, 36px)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "10px",
            }}
          >
            Pronto para organizar sua operação digital?
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.65,
            }}
          >
            15 minutos. Sem apresentação. Direto ao que trava seu negócio.
          </p>
        </div>

        <a
          href="#agendar"
          className="cta-banner-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "14px 32px",
            background: "white",
            color: "var(--color-accent)",
            borderRadius: "4px",
            textDecoration: "none",
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.01em",
            flexShrink: 0,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
          }}
        >
          Agendar análise gratuita ↗
        </a>
      </div>
    </section>
  );
}
