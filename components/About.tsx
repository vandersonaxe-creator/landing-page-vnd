"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

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

const METRICS = [
  { end: 50, suffix: "+", label: "Projetos implantados" },
  { end: 8, suffix: "+", label: "Canais integrados" },
  { end: 100, suffix: "%", label: "Foco em resultado" },
] as const;

const CheckIcon = () => (
  <svg
    className="h-5 w-5 shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
    style={{ color: "var(--color-brand)" }}
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default function About() {
  return (
    <section
      id="sobre"
      className="py-14 md:py-20 lg:py-24"
      style={{
        background: "#0a0a0a",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div data-scroll-reveal>
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            >
              <Image
                src={ABOUT_IMAGE}
                alt="Sobre a proposta"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>

          <div>
            <div data-scroll-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Sobre a proposta
              </p>
              <h2 className="mt-2 font-bold text-[var(--color-text)]">
                Não entregamos peças soltas. Montamos uma operação digital que
                faz sentido no seu momento.
              </h2>
              <p className="mt-4 max-w-xl text-[var(--color-muted)] leading-relaxed">
                Você não precisa contratar tudo de uma vez. A gente organiza o
                caminho: ajusta o que travou, integra o que desconecta e evolui o
                que já funciona para gerar oportunidades com consistência.
              </p>
              <ul className="mt-6 space-y-4">
                {FEATURES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--color-text)] leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    <CheckIcon />
                    <span className="text-sm font-medium md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Métricas com AnimatedCounter */}
            <div
              data-scroll-reveal
              className="mt-8 grid grid-cols-3 gap-4"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "1.5rem",
              }}
            >
              {METRICS.map((m) => (
                <div key={m.label} className="text-center">
                  <p
                    className="font-bold text-[var(--color-accent)]"
                    style={{
                      fontSize: "clamp(24px, 3vw, 40px)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    <AnimatedCounter end={m.end} suffix={m.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-muted)] leading-tight">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Diferenciais
              </p>
              <div
                data-scroll-reveal
                className="mt-4 grid gap-4 sm:grid-cols-2"
              >
                {DIFFERENTIALS.map((d) => (
                  <div
                    key={d.title}
                    className="rounded-xl p-4 card-premium"
                    style={{
                      background: "#111111",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <p className="text-sm font-semibold text-[var(--color-text)]">
                      {d.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      {d.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
