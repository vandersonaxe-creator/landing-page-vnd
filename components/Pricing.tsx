"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const CARDS = [
  {
    title: "Diagnóstico e direcionamento",
    text: "Entendemos o cenário atual da empresa, identificamos gargalos e definimos o que precisa ser corrigido, implantado ou evoluído.",
  },
  {
    title: "Estruturação da base",
    text: "Organizamos os canais principais, a presença digital, o atendimento, páginas, fluxos e os pontos críticos da operação comercial.",
  },
  {
    title: "Evolução e escala",
    text: "Para empresas que precisam avançar com automação, inteligência artificial, integrações, tráfego e melhorias mais robustas.",
  },
] as const;

export default function Pricing() {
  return (
    <section className="bg-[#f8fafb] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
            Investimento e implantação
          </p>
          <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
            A recomendação depende da estrutura que sua empresa precisa
          </h2>
          <p className="mt-4 max-w-2xl text-[#23525F]/90 leading-relaxed">
            Cada empresa chega em um estágio diferente. Algumas precisam começar
            do zero. Outras precisam corrigir gargalos, integrar canais,
            organizar atendimento, implantar automações, estruturar páginas ou
            escalar com tráfego. Por isso, o primeiro passo é uma análise para
            entender o cenário e definir a melhor implantação.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <ScrollReveal key={card.title} variant="card" staggerIndex={i}>
              <div className="card-premium flex h-full flex-col rounded-xl border border-[#23525F15] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#23525F]">
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#23525F]/90">
                  {card.text}
                </p>
                <Link
                  href="#agendar"
                  className="btn-cta-hero mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg px-5 py-3 text-sm font-medium uppercase text-white [font-family:var(--font-inter-tight),sans-serif]"
                >
                  Agendar análise estratégica
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
