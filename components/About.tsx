"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/11";
const ABOUT_IMAGE = `${BASE}/sobre.jpg`;

const FEATURES = [
  "Clareza do que fazer primeiro na operação digital",
  "Automação e integrações que conectam atendimento e captação",
  "Presença e comunicação orientadas a conversão",
  "Jornada comercial organizada do clique ao agendamento",
] as const;

const DIFFERENTIALS = [
  {
    title: "Visão de sistema",
    text: "Página, tráfego e atendimento atuam como uma operação única.",
  },
  {
    title: "Prioridade de decisão",
    text: "A recomendação começa pelo que destrava resultado primeiro.",
  },
  {
    title: "Entrega em etapas",
    text: "Escopo organizado para manter continuidade do funil e reduzir retrabalho.",
  },
] as const;

const CheckIcon = () => (
  <svg
    className="h-5 w-5 shrink-0 text-[#56A8BE]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default function About() {
  return (
    <section id="sobre" className="bg-[#f8fafb] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal variant="block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src={ABOUT_IMAGE}
                alt="Sobre a proposta"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal variant="title">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
                Sobre a proposta
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
                Não entregamos peças soltas. Montamos uma operação digital que
                faz sentido no seu momento.
              </h2>
              <p className="mt-4 max-w-xl text-[#23525F]/90 leading-relaxed">
                Você não precisa contratar tudo de uma vez. A gente organiza o
                caminho: ajusta o que travou, integra o que desconecta e evolui o
                que já funciona para gerar oportunidades com consistência.
              </p>
              <ul className="mt-6 space-y-4">
                {FEATURES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#23525F] leading-relaxed [font-family:var(--font-inter-tight),sans-serif]"
                  >
                    <CheckIcon />
                    <span className="text-sm font-medium md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
                  Diferenciais
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {DIFFERENTIALS.map((d) => (
                    <div
                      key={d.title}
                      className="rounded-xl border border-[#23525F15] bg-white/60 p-4"
                    >
                      <p className="text-sm font-semibold text-[#23525F]">{d.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-[#23525F]/80">
                        {d.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
