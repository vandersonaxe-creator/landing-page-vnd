"use client";

const CARDS = [
  {
    title: "Sem estrutura ainda",
    text: "Comece com uma base digital clara para atrair e responder com confiança.",
  },
  {
    title: "Estrutura desorganizada",
    text: "Organizamos WhatsApp, páginas e processos para parar de perder oportunidades.",
  },
  {
    title: "Estrutura em evolução",
    text: "Aprimoramos automação, IA e tráfego para acelerar resultado sem bagunça.",
  },
] as const;

export default function PhaseCards() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
          Sua empresa pode estar em qualquer fase. Nós estruturamos a próxima.
        </h2>
        <p className="mt-3 max-w-2xl text-[#23525F]/90 md:text-lg">
          Três cenários. Uma direção única: começar com clareza, organizar o que
          está travado e evoluir o que já funciona.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-[#23525F15] bg-[#f8fafb] p-6 transition-shadow hover:shadow-md"
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
