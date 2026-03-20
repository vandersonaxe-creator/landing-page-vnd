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
      className="py-14 md:py-20 lg:py-24"
      style={{
        background: "#080808",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div data-scroll-reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Perguntas frequentes
          </p>
          <h2 data-text-reveal className="mx-auto mt-2 max-w-2xl text-center font-bold text-[var(--color-text)]">
            Dúvidas comuns antes de organizar melhor a estrutura digital da empresa
          </h2>
        </div>
        <div data-scroll-reveal className="mx-auto mt-8 max-w-2xl space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl transition-shadow"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex min-h-[56px] w-full items-center justify-between px-5 py-4 text-left font-medium text-[var(--color-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(86,168,190,0.35)] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                style={{
                  background: openIndex === i ? "#1a1a1a" : "#111111",
                }}
              >
                {item.question}
                <span
                  className={`ml-3 shrink-0 text-xl font-light text-[var(--color-brand)] transition-transform duration-300 ease-out ${
                    openIndex === i ? "rotate-45" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className="px-5 py-4 text-sm leading-relaxed text-[var(--color-muted)]"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0d0d0d" }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
