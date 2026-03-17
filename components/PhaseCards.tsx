"use client";

const CARDS = [
  {
    title: "Sem estrutura ainda",
    text: "Para empresas que ainda não têm presença digital bem organizada e precisam começar com base certa.",
  },
  {
    title: "Estrutura desorganizada",
    text: "Para negócios que já estão online, mas com WhatsApp, redes, páginas e processos desalinhados.",
  },
  {
    title: "Estrutura em evolução",
    text: "Para empresas que já operam e precisam melhorar automação, IA, tráfego, atendimento e escala.",
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
          Tem negócio que ainda não começou direito no digital. Tem negócio que
          já começou, mas está desorganizado. E tem negócio que já roda
          campanhas, atendimento e operação, mas precisa melhorar eficiência,
          integração e escala. Em todos os casos, o trabalho começa entendendo o
          cenário e desenhando a estrutura certa.
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
