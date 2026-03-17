"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/11";

export default function CTAMap() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:py-28"
      style={{ backgroundImage: `url(${BASE}/map.png)` }}
    >
      <div className="absolute inset-0 bg-[#23525F]/90" />
      <div className="container relative mx-auto max-w-[1280px] px-4 text-center md:px-6 lg:px-8">
        <ScrollReveal variant="section">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Sua empresa não precisa de mais improviso. Precisa de uma estrutura
            digital que faça sentido.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90 leading-relaxed">
            Se você ainda não tem uma operação digital organizada ou sente que
            sua estrutura atual está travando crescimento, atendimento ou
            conversão, o próximo passo é entender o cenário e montar a implantação
            certa.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="#agendar"
              className="btn-cta-hero inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-medium uppercase text-white [font-family:var(--font-inter-tight),sans-serif]"
            >
              Agendar análise estratégica
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10 [font-family:var(--font-inter-tight),sans-serif]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
