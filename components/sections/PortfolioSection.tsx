"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

const MODEL_NICHES = [
  "Eletricista",
  "Ar-condicionado",
  "Clínica Odontológica",
  "Barbearia",
  "Advocacia",
  "Consultório Médico",
  "Restaurante",
  "Academia / Personal",
  "Imobiliária",
  "Contabilidade",
  "Pet Shop",
  "Loja de Roupas",
] as const;

const PORTFOLIO_ITEMS = [
  {
    id: "sites-landing",
    tag: "01",
    category: "SITES & LANDING PAGES · CONVERSÃO",
    title: "Modelos prontos para o seu negócio",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    scenario:
      "Empresas que precisam de presença digital profissional rápida, sem pagar do zero por um site personalizado.",
    result: "» Escolha um modelo, personalize e publique em dias.",
    showModelsButton: true as const,
  },
  {
    id: "ia-atendimento",
    tag: "02",
    category: "ATENDIMENTO · INTELIGÊNCIA ARTIFICIAL",
    title: "IA que qualifica leads e avisa o dono na hora",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    scenario:
      "Empresa recebia contatos misturados — clientes reais, curiosos e fornecedores no mesmo canal, sem filtro. O dono perdia tempo respondendo quem nunca compraria.",
    result:
      "» IA filtra, qualifica e envia resumo direto para o WhatsApp do dono.",
  },
  {
    id: "proximo-case",
    tag: "03",
    category: "SEU NEGÓCIO · PRÓXIMO CASE",
    title: "Seu negócio pode ser o próximo",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    scenario:
      "Cada projeto começa com um diagnóstico real. Entendemos o cenário, identificamos o gargalo e implantamos a solução certa para o seu momento.",
    result: "» Agende uma análise gratuita e veja o que é possível.",
    resultHref: "#agendar" as const,
  },
] as const;

export default function PortfolioSection() {
  const [modelsModalOpen, setModelsModalOpen] = useState(false);

  const closeModal = useCallback(() => setModelsModalOpen(false), []);

  useEffect(() => {
    if (!modelsModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [modelsModalOpen, closeModal]);

  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: "var(--color-surface)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div data-scroll-reveal className="mb-12">
          <p
            className="num-tag mb-3"
            style={{ fontSize: "10px", letterSpacing: "0.12em" }}
          >
            03 / Portfólio
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              data-text-reveal
              className="font-bold text-[var(--color-text)] max-w-xl"
            >
              Projetos com contexto, solução e resultado
            </h2>
            <p
              className="text-sm max-w-xs md:text-right leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Não é galeria. É prova de que o método funciona.
            </p>
          </div>
          <div className="mt-6 h-px" style={{ background: "var(--color-border)" }} />
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              data-scroll-reveal
              className="portfolio-item group relative overflow-hidden rounded-xl"
              style={{
                border: "0.5px solid var(--color-border)",
                background: "var(--color-bg)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image — card 01: área superior clicável (abre modal de modelos) */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  ...("showModelsButton" in item && item.showModelsButton
                    ? { cursor: "pointer" }
                    : {}),
                }}
                {...("showModelsButton" in item && item.showModelsButton
                  ? {
                      role: "button" as const,
                      tabIndex: 0,
                      "aria-label": "Ver modelos disponíveis",
                      onClick: () => setModelsModalOpen(true),
                      onKeyDown: (e: ReactKeyboardEvent<HTMLDivElement>) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setModelsModalOpen(true);
                        }
                      },
                    }
                  : {})}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.1) 60%, transparent 100%)",
                  }}
                />

                {/* Number tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="num-tag"
                    style={{
                      background: "rgba(8,8,8,0.65)",
                      backdropFilter: "blur(8px)",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      border: "0.5px solid rgba(255,255,255,0.12)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Category on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-body), sans-serif",
                      marginBottom: "4px",
                    }}
                  >
                    {item.category}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "white",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Context + Result */}
              <div
                style={{
                  padding: "20px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Cenário */}
                <div>
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-muted-2)",
                      fontFamily: "var(--font-body), sans-serif",
                      marginBottom: "4px",
                    }}
                  >
                    Cenário
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body), sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.scenario}
                  </p>
                </div>

                {/* Separator */}
                <div style={{ height: "0.5px", background: "var(--color-border)" }} />

                {/* Result — destacado */}
                {"resultHref" in item && item.resultHref ? (
                  <a
                    href={item.resultHref}
                    style={{
                      background: "var(--color-accent-dim)",
                      border: "0.5px solid rgba(232,76,30,0.15)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      textDecoration: "none",
                      transition: "opacity 0.2s, box-shadow 0.2s",
                    }}
                    className="hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "1px" }}
                      aria-hidden
                    >
                      <path
                        d="M13 7l5 5-5 5M6 7l5 5-5 5"
                        stroke="var(--color-accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-body), sans-serif",
                        lineHeight: 1.55,
                        fontWeight: 500,
                      }}
                    >
                      {item.result}
                    </p>
                  </a>
                ) : (
                  <div
                    style={{
                      background: "var(--color-accent-dim)",
                      border: "0.5px solid rgba(232,76,30,0.15)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: "1px" }}
                      aria-hidden
                    >
                      <path
                        d="M13 7l5 5-5 5M6 7l5 5-5 5"
                        stroke="var(--color-accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-body), sans-serif",
                        lineHeight: 1.55,
                        fontWeight: 500,
                      }}
                    >
                      {item.result}
                    </p>
                  </div>
                )}

                {"showModelsButton" in item && item.showModelsButton ? (
                  <button
                    type="button"
                    onClick={() => setModelsModalOpen(true)}
                    style={{
                      marginTop: "4px",
                      alignSelf: "flex-start",
                      background: "transparent",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--color-accent)",
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    Ver modelos disponíveis →
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          data-scroll-reveal
          className="mt-8 text-center"
          style={{
            fontSize: "12px",
            color: "var(--color-muted-2)",
            fontFamily: "var(--font-body), sans-serif",
            fontStyle: "italic",
          }}
        >
          * Dados baseados em projetos reais. Resultados variam conforme cenário e nicho.
        </p>
      </div>

      {/* Modal — modelos disponíveis (card 01) */}
      {modelsModalOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-models-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          style={{ background: "rgba(0,0,0,0.72)" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-[900px] max-h-[min(92vh,900px)] overflow-y-auto rounded-xl shadow-2xl"
            style={{
              background: "var(--color-bg)",
              border: "0.5px solid var(--color-border)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[var(--color-surface)]"
              style={{
                color: "var(--color-muted)",
                border: "0.5px solid var(--color-border)",
                background: "var(--color-bg)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="p-6 pb-8 pt-14 md:p-8 md:pt-12">
              <h2
                id="portfolio-models-title"
                className="font-bold text-[var(--color-text)]"
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "clamp(22px, 3vw, 28px)",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}
              >
                Modelos disponíveis
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-muted)",
                  fontFamily: "var(--font-body), sans-serif",
                  marginBottom: "24px",
                }}
              >
                Clique em qualquer modelo para visualizar
              </p>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
                {MODEL_NICHES.map((name) => (
                  <a
                    key={name}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group relative block rounded-lg transition-transform duration-200 hover:-translate-y-0.5"
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-lg"
                      style={{
                        background: "#F5F5F5",
                        border: "0.5px solid var(--color-border)",
                      }}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{ aspectRatio: "16/9" }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            letterSpacing: "0.06em",
                            color: "var(--color-muted-2)",
                            fontFamily: "var(--font-body), sans-serif",
                          }}
                        >
                          Em breve
                        </span>
                      </div>
                      {/* Hover badge */}
                      <div
                        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        style={{ background: "rgba(0,0,0,0.45)" }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "white",
                            fontFamily: "var(--font-body), sans-serif",
                            padding: "6px 10px",
                            borderRadius: "6px",
                            background: "rgba(0,0,0,0.55)",
                            border: "0.5px solid rgba(255,255,255,0.2)",
                          }}
                        >
                          Em breve
                        </span>
                      </div>
                    </div>
                    <p
                      className="mt-2 text-center"
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--color-text)",
                        fontFamily: "var(--font-body), sans-serif",
                        lineHeight: 1.35,
                      }}
                    >
                      {name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
