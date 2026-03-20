"use client";

const STEPS = [
  {
    num: "01",
    title: "Cenário em foco",
    description:
      "Entendemos como a empresa está hoje: canais, atendimento e presença digital.",
  },
  {
    num: "02",
    title: "Prioridades claras",
    description:
      "Definimos o que destrava resultado primeiro, com visão comercial e operacional.",
  },
  {
    num: "03",
    title: "Plano por etapas",
    description:
      "Organizamos o escopo para executar com clareza, sem complicar sua operação.",
  },
  {
    num: "04",
    title: "Implantamos e ajustamos",
    description:
      "Aplicamos o que foi definido e refinamos o que mais impacta atendimento, captação e conversão.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 md:py-24"
      style={{
        background: "#0c0c0c",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div data-scroll-reveal className="mb-14">
          <p className="num-tag mb-3">Como funciona</p>
          <h2
            data-text-reveal
            className="font-bold text-[var(--color-text)] max-w-2xl"
          >
            Como a recomendação vira implantação
          </h2>
          <div className="mt-6 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* Steps */}
        <div className="grid gap-0 md:grid-cols-4 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "rgba(255,255,255,0.06)", zIndex: 0 }}
          />

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              data-scroll-reveal
              className="relative flex flex-col gap-5 p-6 md:p-8"
              style={{
                borderRight: i < STEPS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              {/* Number accent */}
              <div className="relative z-[1]">
                <span
                  className="font-bold"
                  style={{
                    fontSize: "clamp(36px, 4vw, 52px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-syne), sans-serif",
                    opacity: 0.9,
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold text-[var(--color-text)]"
                  style={{ fontSize: "clamp(15px, 1.4vw, 18px)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "13px",
                    color: "var(--color-muted)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Step indicator dot */}
              <div
                className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-[2]"
                style={{ background: "var(--color-accent)", border: "3px solid #0c0c0c" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
