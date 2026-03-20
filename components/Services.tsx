"use client";

const SERVICES = [
  {
    num: "01",
    title: "Landing Pages e Sites Estratégicos",
    description:
      "Páginas e sites com foco em apresentação profissional, clareza comercial e conversão.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "WhatsApp e Atendimento Automatizado",
    description:
      "Organização do atendimento, automações, fluxos e ganho de agilidade no processo comercial.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Google Meu Negócio e Presença Local",
    description:
      "Ajuste completo da presença local para negócios que dependem de visibilidade e confiança.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Meta e Posicionamento nas Redes",
    description:
      "Ajuste de perfil e comunicação para atrair as pessoas certas e conduzir para o atendimento.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Tráfego Pago e Escala",
    description:
      "Campanhas com intenção comercial e previsibilidade para gerar oportunidades qualificadas.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    num: "06",
    title: "IA, Integrações e Fluxos",
    description:
      "Integrações e automações com IA para reduzir atrito e acelerar o caminho até o cliente.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    num: "07",
    title: "Prioridade de Entregas",
    description:
      "O que entra primeiro e o que vem depois, para manter continuidade e evitar retrabalho.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/>
        <line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
  },
  {
    num: "08",
    title: "Jornada do Cliente",
    description:
      "Organização dos pontos de contato para respostas mais rápidas e uma condução mais clara até o agendamento.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
] as const;

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-16 md:py-24"
      style={{ background: "#080808" }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div data-scroll-reveal className="mb-12">
          <p className="num-tag mb-3">O que estruturamos</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              data-text-reveal
              className="font-bold text-[var(--color-text)] max-w-2xl"
            >
              Soluções que viram operação
            </h2>
            <p className="text-sm text-[var(--color-muted)] max-w-xs md:text-right leading-relaxed"
               style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Ajustamos canais e fluxos para gerar clareza, resposta rápida e
              avanço consistente no funil.
            </p>
          </div>
          <div className="mt-6 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* Grid */}
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4"
             style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
          {SERVICES.map((s) => (
            <div
              key={s.num}
              data-scroll-reveal
              className="group relative flex flex-col gap-4 p-6 transition-colors"
              style={{
                background: "#111111",
                borderRight: "1px solid rgba(255,255,255,0.06)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Number */}
              <span className="num-tag">{s.num}</span>

              {/* Icon */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                style={{
                  color: "var(--color-brand)",
                  background: "rgba(86,168,190,0.08)",
                  border: "1px solid rgba(86,168,190,0.15)",
                }}
              >
                {s.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold text-[var(--color-text)]"
                  style={{ fontSize: "clamp(14px, 1.2vw, 16px)", lineHeight: 1.3 }}
                >
                  {s.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "13px",
                    color: "var(--color-muted)",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                  }}
                >
                  {s.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--color-accent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
