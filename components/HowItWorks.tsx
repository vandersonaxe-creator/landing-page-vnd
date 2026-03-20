"use client";

const STEPS = [
  {
    title: "Cenário em foco",
    description:
      "Entendemos como a empresa está hoje: canais, atendimento e presença digital.",
  },
  {
    title: "Prioridades claras",
    description:
      "Definimos o que destrava resultado primeiro, com visão comercial e operacional.",
  },
  {
    title: "Plano por etapas",
    description:
      "Organizamos o escopo para executar com clareza, sem complicar sua operação.",
  },
  {
    title: "Implantamos e ajustamos",
    description:
      "Aplicamos o que foi definido e refinamos o que mais impacta atendimento, captação e conversão.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-14 md:py-20 lg:py-24"
      style={{
        background: "#0a0a0a",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div data-scroll-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Como funciona
          </p>
          <h2 className="mt-2 font-bold text-[var(--color-text)]">
            Como a recomendação vira implantação
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              data-scroll-reveal
              className="h-full rounded-xl p-6 card-premium"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white"
                style={{ background: "var(--color-accent)" }}
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
