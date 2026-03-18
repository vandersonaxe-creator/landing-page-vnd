"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CalComEmbed from "@/components/CalComEmbed";

export default function BookingSection() {
  return (
    <section
      id="agendar"
      className="relative overflow-hidden bg-[#23525F] py-14 md:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#2d6470] via-transparent to-[#1e454f]/80"
        aria-hidden
      />
      <div
        aria-hidden
        className="premium-ambient-layer premium-ambient-layer--dark"
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-[350px] w-[350px] rounded-full bg-white/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="container relative z-[2] mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="section" className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Agendamento
          </p>
          <h2 className="mt-3 text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Agende uma conversa e entenda o que sua empresa realmente precisa
          </h2>
          <p className="mt-4 text-white/90 leading-relaxed">
            Em poucos minutos, avaliamos seu cenário, entendemos o momento do seu
            negócio e mostramos qual estrutura faz mais sentido para melhorar sua
            presença digital, atendimento, operação e geração de oportunidades.
          </p>
        </ScrollReveal>

        <div className="mt-8 md:mt-10">
          <p className="mb-4 text-sm text-white/80">
            Escolha um horário abaixo:
          </p>
          <div className="overflow-hidden rounded-xl bg-white/5 shadow-lg ring-1 ring-white/10">
            <CalComEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
