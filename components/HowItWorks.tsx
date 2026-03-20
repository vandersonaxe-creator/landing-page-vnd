"use client";

const STEPS = [
  {
    num: "01",
    label: "Diagnóstico",
    title: "Cenário em foco",
    description:
      "Entendemos como a empresa está hoje: canais, atendimento e presença digital.",
  },
  {
    num: "02",
    label: "Estratégia",
    title: "Prioridades claras",
    description:
      "Definimos o que destrava resultado primeiro, com visão comercial e operacional.",
  },
  {
    num: "03",
    label: "Planejamento",
    title: "Plano por etapas",
    description:
      "Organizamos o escopo para executar com clareza, sem complicar sua operação.",
  },
  {
    num: "04",
    label: "Execução",
    title: "Implantamos e ajustamos",
    description:
      "Aplicamos o que foi definido e refinamos o que mais impacta atendimento, captação e conversão.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-14 md:py-20"
      style={{
        background: "#0c0c0c",
        borderTop: "0.5px solid var(--color-border)",
        borderBottom: "0.5px solid var(--color-border)",
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
          <div className="mt-6 h-px" style={{ background: "var(--color-border)" }} />
        </div>

        {/* Timeline */}
        <div className="max-w-2xl">
          {STEPS.map((step, i) => (
            <div key={step.num} data-scroll-reveal>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  padding: "0",
                }}
              >
                {/* Left: timeline column */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {/* Circle */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "0.5px solid var(--color-border)",
                      background: "var(--color-surface)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-display), sans-serif",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        height: "64px",
                        background:
                          "linear-gradient(to bottom, var(--color-border), transparent)",
                        margin: "4px 0",
                      }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div
                  style={{
                    paddingBottom: i < STEPS.length - 1 ? "48px" : "0",
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body), sans-serif",
                      marginBottom: "6px",
                    }}
                  >
                    {step.label}
                  </p>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display), sans-serif",
                      marginBottom: "8px",
                      lineHeight: 1.25,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body), sans-serif",
                      lineHeight: 1.75,
                      maxWidth: "520px",
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Separator between intermediate steps */}
                  {i < STEPS.length - 1 && (
                    <div
                      style={{
                        height: "0.5px",
                        background: "var(--color-border)",
                        marginTop: "32px",
                        opacity: 0.5,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
