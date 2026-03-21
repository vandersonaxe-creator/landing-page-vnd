"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const METRICS = [
  { value: 6, suffix: "", label: "Soluções integradas" },
  { value: 4, suffix: "", label: "Fases do método" },
  { value: 3, suffix: "+", label: "Anos de operação" },
] as const;

export default function MetricsStrip() {
  return (
    <section
      data-scroll-reveal
      style={{
        borderBottom: "0.5px solid var(--color-border)",
        padding: "0 48px 80px",
        background: "var(--color-bg)",
      }}
    >
      <div
        className="metrics-grid mx-auto max-w-[1280px]"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--color-border)",
          border: "0.5px solid var(--color-border)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {METRICS.map((item, i) => (
          <div
            key={i}
            style={{
              background: "var(--color-surface)",
              padding: "40px 32px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 800,
                color: "var(--color-text)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              <AnimatedCounter end={item.value} suffix={item.suffix} />
            </p>
            <p
              style={{
                marginTop: "8px",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile: 1 coluna */}
      <style>{`
        @media (max-width: 640px) {
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
