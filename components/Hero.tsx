"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";

const VSL_SCRIPT =
  "Se a sua empresa ainda não tem uma estrutura digital organizada, a gente cria isso com você. E se você já está no mercado, mas sente que o WhatsApp, o Instagram, o Google, o atendimento, o tráfego ou a automação não estão funcionando como deveriam, a gente entra para corrigir, organizar e implantar o que for necessário. O objetivo é simples: fazer sua empresa atrair melhor, atender melhor e converter melhor. Clica no botão e vamos entender o que seu negócio precisa.";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#f8fafb] py-12 md:py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-[#23525F]/[0.02]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#23525F]/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-0 h-[300px] w-[300px] rounded-full bg-[#56a8be]/[0.05] blur-3xl"
        aria-hidden
      />

      <div className="container relative mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        {/* Mobile: ordem 1 subtítulo → 2 título → 3 vídeo → 4 botões → 5 parágrafo → 6 apoio → 7 link → 8 card. Desktop: col1 = 1,2,5,6 | col2 = 3,4,7,8 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* 1. Subtítulo - mobile primeiro, desktop col1 */}
          <ScrollReveal
            variant="title"
            className="order-1 lg:col-start-1 lg:row-start-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F] [font-family:var(--font-inter-tight),sans-serif]">
              Estrutura Digital para Empresas que Querem Crescer
            </p>
          </ScrollReveal>

          {/* 2. Título */}
          <ScrollReveal
            variant="title"
            className="order-2 lg:col-start-1 lg:row-start-2"
          >
            <h1 className="mt-3 text-2xl font-bold leading-tight text-[#23525F] sm:text-3xl md:text-4xl lg:mt-4 lg:text-[2.5rem] lg:leading-tight">
              Organizamos, corrigimos e implantamos a estrutura digital que sua
              empresa precisa para atrair, atender e converter melhor
            </h1>
          </ScrollReveal>

          {/* 3. VSL – no mobile logo abaixo do título; desktop col2 destaque */}
          <ScrollReveal
            variant="block"
            className="order-3 lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#23525F12] bg-[#23525F] shadow-[0_20px_50px_-12px_rgba(35,82,95,0.35)] ring-1 ring-black/5">
              <div className="aspect-video flex flex-col items-center justify-center p-6 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white shadow-inner transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16">
                  <svg className="h-7 w-7 ml-1 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium text-white/95 sm:mt-5">
                  VSL em breve (≈30s)
                </p>
              </div>
              <p className="border-t border-white/10 bg-[#23525F]/95 px-4 py-3 text-center text-xs text-white/90 sm:px-5 sm:py-3.5">
                Veja em poucos segundos como funciona nossa proposta
              </p>
            </div>
          </ScrollReveal>

          {/* 4. Botões – logo abaixo do vídeo no mobile */}
          <ScrollReveal
            variant="cta"
            className="order-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-start-2 lg:row-start-3"
          >
            <Link
              href="#agendar"
              className="btn-cta-hero inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium uppercase leading-snug text-white [font-family:var(--font-inter-tight),sans-serif]"
            >
              Agendar análise estratégica
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-[#23525F] bg-transparent px-6 py-3.5 text-sm font-medium text-[#23525F] [font-family:var(--font-inter-tight),sans-serif]"
            >
              Falar no WhatsApp
            </a>
          </ScrollReveal>

          {/* 5. Parágrafo descritivo – depois dos botões no mobile */}
          <ScrollReveal
            variant="title"
            className="order-5 lg:col-start-1 lg:row-start-3"
          >
            <p className="mt-2 text-base leading-relaxed text-[#23525F]/90 md:text-lg lg:mt-0">
              Se sua empresa ainda não tem presença digital bem organizada, nós
              estruturamos do zero. Se já existe operação, corrigimos gargalos,
              melhoramos processos, implantamos automações, páginas, integrações,
              atendimento, tráfego e inteligência artificial conforme a
              necessidade real do negócio.
            </p>
          </ScrollReveal>

          {/* 6. Linha de apoio */}
          <ScrollReveal
            variant="block"
            className="order-6 lg:col-start-1 lg:row-start-4"
          >
            <p className="mt-4 text-sm leading-relaxed text-[#23525F]/80 [font-family:var(--font-inter-tight),sans-serif] lg:mt-5">
              Do básico ao avançado: presença digital, atendimento, automação,
              IA, tráfego, integração e implantação estratégica
            </p>
          </ScrollReveal>

          {/* 7. Link "Quero agendar" – desktop col2 */}
          <ScrollReveal
            variant="block"
            className="order-7 lg:col-start-2 lg:row-start-4"
          >
            <Link
              href="#agendar"
              className="text-center text-sm font-semibold text-[#23525F] underline underline-offset-2 transition-colors hover:no-underline hover:text-[#23525F]/90 [font-family:var(--font-inter-tight),sans-serif]"
            >
              Quero agendar minha conversa
            </Link>
          </ScrollReveal>

          {/* 8. Card "Nossa proposta em uma frase" – desktop col2 */}
          <ScrollReveal
            variant="block"
            className="order-8 lg:col-start-2 lg:row-start-5"
          >
            <div className="rounded-xl border border-[#23525F12] bg-white p-4 shadow-sm sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#23525F]/80">
                Nossa proposta em uma frase
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#23525F]/90">
                {VSL_SCRIPT}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
