"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

const CARDS = [
  {
    title: "Visão de Estrutura",
    description:
      "Não tratamos página, tráfego, automação, Google ou WhatsApp como peças separadas. Tudo faz parte da mesma operação digital.",
    icon: "structure",
  },
  {
    title: "Diagnóstico antes da execução",
    description:
      "Antes de implantar, entendemos o cenário para não vender solução errada.",
    icon: "diagnostic",
  },
  {
    title: "Implantação conforme necessidade",
    description:
      "A empresa não precisa contratar tudo de uma vez. A estrutura é construída de forma inteligente conforme prioridade e momento.",
    icon: "evolution",
  },
] as const;

function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    structure: (
      <svg className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    diagnostic: (
      <svg className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    evolution: (
      <svg className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 .79-.15 1.56-.44 2.25l1.97 1.97C20.04 14.32 20.5 13.19 20.5 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-.79.15-1.56.44-2.25L4.47 8.28C3.96 9.68 3.5 10.81 3.5 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
      </svg>
    ),
  };
  return icons[name] ?? null;
}

export default function NossasVantagens() {
  return (
    <section className="bg-[#23525F] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Diferenciais
          </p>
          <h2 className="mt-2 text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Por que essa proposta é diferente de contratar serviços soltos
          </h2>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} variant="card" staggerIndex={i}>
              <div className="card-premium-dark rounded-xl bg-[#2d6470] p-6 text-white">
                <span className="block text-white/90">
                  <Icon name={card.icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
