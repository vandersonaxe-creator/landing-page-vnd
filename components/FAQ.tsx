"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Vocês atendem empresas que ainda não têm nada estruturado?",
    answer:
      "Sim. Se a empresa ainda não tem presença digital organizada, páginas, canais alinhados ou processo comercial funcionando bem, nós podemos estruturar desde a base.",
  },
  {
    question: "Vocês também atendem empresas que já estão rodando?",
    answer:
      "Sim. Se já existe operação, analisamos o que está travando resultado, atendimento, conversão, automação ou escala, e propomos as melhorias certas.",
  },
  {
    question:
      "É possível contratar só uma parte, como tráfego, WhatsApp ou automação?",
    answer:
      "Sim, mas a recomendação sempre parte de uma análise. Em alguns casos a empresa precisa apenas de uma frente específica. Em outros, vale mais corrigir a estrutura antes de escalar.",
  },
  {
    question: "Como funciona o investimento?",
    answer:
      "Depois da análise, montamos uma proposta com tabela de implantação, mostrando o que faz sentido para o seu cenário, os valores de cada etapa e a melhor forma de execução.",
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="contato"
      className="py-14 md:py-20"
      style={{
        background: "var(--color-bg)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div data-scroll-reveal className="mb-10">
          <p className="num-tag mb-3 text-center" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>07 / Perguntas frequentes</p>
          <h2
            data-text-reveal
            className="mx-auto max-w-2xl text-center font-bold text-[var(--color-text)]"
          >
            Dúvidas comuns antes de organizar melhor a estrutura digital da empresa
          </h2>
          <div
            className="mx-auto mt-6 h-px max-w-2xl"
            style={{ background: "var(--color-border)" }}
          />
        </div>

        {/* Accordion */}
        <div
          data-scroll-reveal
          className="mx-auto max-w-2xl"
        >
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom: "0.5px solid var(--color-border)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between text-left transition-colors focus:outline-none"
                style={{
                  padding: "22px 0",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-display), sans-serif",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span style={{ paddingRight: "32px" }}>{item.question}</span>
                <span
                  aria-hidden
                  style={{
                    fontSize: "20px",
                    lineHeight: 1,
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-display), sans-serif",
                    fontWeight: 300,
                    flexShrink: 0,
                    transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer — CSS grid expand trick */}
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: openIndex === i ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    style={{
                      paddingBottom: "22px",
                      fontSize: "14px",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body), sans-serif",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
