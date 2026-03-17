"use client";

const CARDS = [
  {
    title: "Google Meu Negócio",
    text: "Organização completa do perfil, categorias, descrição, informações, posicionamento local e presença para ser encontrado com mais confiança.",
  },
  {
    title: "Meta: Instagram e Facebook",
    text: "Ajuste de perfil, bio, links, comunicação, organização da presença e preparação para captação e anúncios.",
  },
  {
    title: "WhatsApp e automação",
    text: "Estruturação do atendimento, mensagens, fluxo, organização comercial e automações para não perder oportunidades.",
  },
] as const;

export default function TriadeSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
          Base estratégica
        </p>
        <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
          Para muitos negócios, a base da operação digital começa aqui
        </h2>
        <p className="mt-4 max-w-2xl text-[#23525F]/90 leading-relaxed">
          Em negócios locais e em muitas pequenas empresas, três canais costumam
          concentrar o impacto direto na geração de oportunidades: Google Meu
          Negócio, Meta e WhatsApp. Quando esses três pontos estão
          desorganizados, a empresa perde visibilidade, confiança e atendimento.
          Quando estão alinhados, a operação comercial melhora.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-[#23525F20] bg-[#f8fafb] p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-[#23525F]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#23525F]/90">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
