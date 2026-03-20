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
    <section
      className="py-12 md:py-16 lg:py-20"
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div data-scroll-reveal>
          <h2 className="font-bold text-[var(--color-text)]">
            Sua empresa pode estar em qualquer fase. Nós estruturamos a próxima.
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--color-muted)] md:text-lg">
            Três cenários. Uma direção única: começar com clareza, organizar o que
            está travado e evoluir o que já funciona.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              data-scroll-reveal
              className="rounded-xl p-6 card-premium"
              style={{
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
