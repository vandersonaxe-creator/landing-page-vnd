"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80";

const FEATURES = [
  "Clareza do que fazer primeiro na operação digital",
  "Automação e integrações que conectam atendimento e captação",
  "Presença e comunicação orientadas a conversão",
  "Jornada comercial organizada do clique ao agendamento",
] as const;

const DIFFERENTIALS = [
  {
    num: "01",
    title: "Visão de sistema",
    text: "Página, tráfego e atendimento atuam como uma operação única.",
  },
  {
    num: "02",
    title: "Prioridade de decisão",
    text: "A recomendação começa pelo que destrava resultado primeiro.",
  },
  {
    num: "03",
    title: "Entrega em etapas",
    text: "Escopo organizado para manter continuidade do funil e reduzir retrabalho.",
  },
] as const;

const METRICS = [
  { end: 50, suffix: "+", label: "Projetos implantados" },
  { end: 8, suffix: "+", label: "Canais integrados" },
  { end: 100, suffix: "%", label: "Foco em resultado" },
] as const;

export default function About() {
  return (
    <section
      id="sobre"
      className="py-16 md:py-24"
      style={{
        background: "#080808",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div
          className="grid lg:grid-cols-2"
          style={{ gap: "80px", alignItems: "start" }}
        >
          {/* ─── IMAGEM ─── */}
          <div data-scroll-reveal className="relative">
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "3/4",
                position: "relative",
              }}
            >
              <Image
                src={ABOUT_IMAGE}
                alt="Profissional em reunião de estratégia digital"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Badge flutuante */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                left: "24px",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "0.5px solid var(--color-border-hover)",
                background: "rgba(8,8,8,0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.2,
                }}
              >
                47+ empresas atendidas
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--color-muted)",
                  marginTop: "2px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                desde 2022
              </p>
            </div>
          </div>

          {/* ─── TEXTO ─── */}
          <div>
            <div data-scroll-reveal>
              {/* Label */}
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-body), sans-serif",
                  marginBottom: "12px",
                }}
              >
                Sobre a proposta
              </p>

              {/* H2 */}
              <h2
                data-text-reveal
                className="font-bold text-[var(--color-text)]"
              >
                Não entregamos peças soltas. Montamos uma operação digital que
                faz sentido no seu momento.
              </h2>

              {/* Parágrafo */}
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "15px",
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                  maxWidth: "480px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                Você não precisa contratar tudo de uma vez. A gente organiza o
                caminho: ajusta o que travou, integra o que desconecta e evolui
                o que já funciona para gerar oportunidades com consistência.
              </p>
            </div>

            {/* Bullets com ícone check */}
            <ul style={{ marginTop: "28px", listStyle: "none", padding: 0 }}>
              {FEATURES.map((item, i) => (
                <li
                  key={item}
                  data-scroll-reveal
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 0",
                    borderBottom:
                      i < FEATURES.length - 1
                        ? "0.5px solid var(--color-border)"
                        : "none",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 12l3 3 5-5"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-body), sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Métricas */}
            <div
              data-scroll-reveal
              className="grid grid-cols-3 gap-4"
              style={{
                borderTop: "0.5px solid var(--color-border)",
                borderBottom: "0.5px solid var(--color-border)",
                padding: "24px 0",
                marginTop: "24px",
              }}
            >
              {METRICS.map((m) => (
                <div key={m.label} className="text-center">
                  <p
                    className="font-bold"
                    style={{
                      fontSize: "clamp(24px, 3vw, 40px)",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-display), sans-serif",
                    }}
                  >
                    <AnimatedCounter end={m.end} suffix={m.suffix} />
                  </p>
                  <p
                    style={{
                      marginTop: "4px",
                      fontSize: "11px",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body), sans-serif",
                    }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Diferenciais — 3 cards em grid */}
            <div
              data-scroll-reveal
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "var(--color-border)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {DIFFERENTIALS.map((d, i) => (
                <div
                  key={d.title}
                  className="group"
                  style={{
                    background: "var(--color-surface)",
                    padding: "20px 16px",
                    borderRadius:
                      i === 0
                        ? "10px 0 0 10px"
                        : i === DIFFERENTIALS.length - 1
                        ? "0 10px 10px 0"
                        : "0",
                    transition: "background 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "var(--color-surface-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "var(--color-surface)";
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-display), sans-serif",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    {d.num}
                  </span>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display), sans-serif",
                      lineHeight: 1.3,
                      marginBottom: "6px",
                    }}
                  >
                    {d.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body), sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    {d.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
