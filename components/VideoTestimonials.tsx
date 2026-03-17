"use client";

import ScrollReveal from "@/components/ScrollReveal";

const SLOTS = [
  {
    id: "video-1",
    name: "Nome do cliente",
    business: "Tipo de negócio",
    caption:
      "Relato sobre como a estrutura ajudou a organizar melhor a operação digital.",
  },
  {
    id: "video-2",
    name: "Nome do cliente",
    business: "Tipo de negócio",
    caption:
      "Relato sobre confiança, atendimento e evolução da presença digital.",
  },
] as const;

export default function VideoTestimonials() {
  return (
    <section id="prova-social" className="bg-[#f8fafb] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
            Prova social
          </p>
          <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
            Clientes que já passaram pela estrutura reconhecem a diferença
          </h2>
          <p className="mt-4 max-w-2xl text-[#23525F]/90 leading-relaxed">
            A melhor prova não é só o que prometemos, mas o que os clientes
            relatam depois da organização da estrutura digital, do atendimento e da
            operação.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SLOTS.map((slot, i) => (
            <ScrollReveal key={slot.id} variant="card" staggerIndex={i}>
              <div className="card-premium flex flex-col overflow-hidden rounded-xl border border-[#23525F15] bg-white shadow-sm">
                <div className="relative aspect-video bg-[#23525F]/10 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#23525F] text-white shadow-lg transition-transform duration-300 hover:scale-105">
                    <svg className="h-7 w-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[#23525F]">
                    {slot.name} | {slot.business}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#23525F]/80">{slot.caption}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {[3, 4].map((n, i) => (
            <ScrollReveal key={n} variant="card" staggerIndex={SLOTS.length + i}>
              <div className="flex flex-col overflow-hidden rounded-xl border border-dashed border-[#23525F25] bg-white/60">
                <div className="aspect-video flex items-center justify-center text-[#23525F]/40 text-sm">
                  Vídeo {n}
                </div>
                <div className="p-5 text-sm text-[#23525F]/50">Em breve</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
