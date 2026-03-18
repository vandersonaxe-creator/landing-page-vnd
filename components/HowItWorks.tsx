"use client";

import ScrollReveal from "@/components/ScrollReveal";

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
    <section id="como-funciona" className="bg-white py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
            Como funciona
          </p>
          <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
            Como a recomendação vira implantação
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.title} variant="card" staggerIndex={i}>
              <div className="card-premium h-full rounded-xl border border-[#23525F12] bg-[#f8fafb] p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#23525F] text-base font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#23525F]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#23525F]/90">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
