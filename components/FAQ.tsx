"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section id="contato" className="bg-white py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="title">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
            Perguntas frequentes
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
            Dúvidas comuns antes de organizar melhor a estrutura digital da empresa
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="block">
          <div className="mx-auto mt-8 max-w-2xl space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-[#23525F12] shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="faq-trigger flex min-h-[56px] w-full items-center justify-between bg-[#f8fafb] px-5 py-4 text-left font-medium text-[#23525F] transition-colors hover:bg-[#23525F]/[0.06] focus:outline-none focus:ring-2 focus:ring-[#23525F]/25 focus:ring-offset-2"
                >
                  {item.question}
                  <span
                    className={`ml-3 shrink-0 text-xl font-light text-[#23525F]/70 transition-transform duration-300 ease-out ${
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
                    <div className="border-t border-[#23525F10] bg-white px-5 py-4 text-sm leading-relaxed text-[#23525F]/90">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
