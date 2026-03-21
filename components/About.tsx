"use client";

const ABOUT_VIDEO_SRC = "/videos/secao.webm";

const FEATURES = [
  "Clareza do que fazer primeiro na operação digital",
  "Automação e integrações que conectam atendimento e captação",
  "Presença e comunicação orientadas a conversão",
  "Jornada comercial organizada do clique ao agendamento",
] as const;

const DIFFERENTIALS = [
  {
    num: "01",
    title: "Visão de sistema",
    text: "Página, tráfego e atendimento atuam como uma operação única.",
  },
  {
    num: "02",
    title: "Prioridade de decisão",
    text: "A recomendação começa pelo que destrava resultado primeiro.",
  },
  {
    num: "03",
    title: "Entrega em etapas",
    text: "Escopo organizado para manter continuidade do funil e reduzir retrabalho.",
  },
] as const;

export default function About() {
  return (
    <section
      id="sobre"
      className="py-16 md:py-24"
      style={{
        background: "var(--color-bg)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* ─── VÍDEO 1:1 (alinhado ao topo do texto; sticky no desktop) ─── */}
          <div
            data-scroll-reveal
            className="relative mx-auto w-full max-w-[min(100%,440px)] shrink-0 lg:sticky lg:top-24 lg:mx-0 lg:max-w-none lg:self-start"
          >
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: "1 / 1" }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={ABOUT_VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Apresentação sobre a proposta NEXU"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,8,0.45) 0%, transparent 55%)",
                }}
              />
            </div>

            {/* Badge flutuante */}
            <div
              className="absolute bottom-5 left-5 md:bottom-6 md:left-6"
              style={{
                padding: "12px 16px",
                borderRadius: "10px",
                border: "0.5px solid var(--color-border-hover)",
                background: "rgba(250,250,248,0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.2,
                }}
              >
                Diagnóstico antes da execução
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--color-muted)",
                  marginTop: "2px",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                Prioridade no que destrava resultado
              </p>
            </div>
          </div>

          {/* ─── TEXTO: mesma linha de base superior que o vídeo ─── */}
          <div className="min-w-0 lg:max-w-[min(100%,36rem)] xl:max-w-[min(100%,38rem)]">
            <div data-scroll-reveal>
              {/* Label */}
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-body), sans-serif",
                  marginBottom: "12px",
                }}
              >
                01 / Sobre a proposta
              </p>

              {/* H2 */}
              <h2
                data-text-reveal
                className="font-bold text-[var(--color-text)] text-[clamp(1.5rem,3.5vw,2.25rem)] leading-tight tracking-tight"
              >
                Não entregamos peças soltas. Montamos uma operação digital que
                faz sentido no seu momento.
              </h2>

              {/* Parágrafo */}
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "clamp(14px, 1.6vw, 15px)",
                  color: "var(--color-muted)",
                  lineHeight: 1.8,
                  maxWidth: "min(100%, 34rem)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                Você não precisa contratar tudo de uma vez. A gente organiza o
                caminho: ajusta o que travou, integra o que desconecta e evolui
                o que já funciona para gerar oportunidades com consistência.
              </p>
            </div>

            {/* Bullets com ícone check */}
            <ul style={{ marginTop: "28px", listStyle: "none", padding: 0 }}>
              {FEATURES.map((item, i) => (
                <li
                  key={item}
                  data-scroll-reveal
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 0",
                    borderBottom:
                      i < FEATURES.length - 1
                        ? "0.5px solid var(--color-border)"
                        : "none",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ flexShrink: 0 }}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 12l3 3 5-5"
                      stroke="var(--color-accent)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-body), sans-serif",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Diferenciais — 3 cards em grid */}
            <div
              data-scroll-reveal
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "var(--color-border)",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              {DIFFERENTIALS.map((d, i) => (
                <div
                  key={d.title}
                  className="group"
                  style={{
                    background: "var(--color-surface)",
                    padding: "20px 16px",
                    borderRadius:
                      i === 0
                        ? "10px 0 0 10px"
                        : i === DIFFERENTIALS.length - 1
                        ? "0 10px 10px 0"
                        : "0",
                    transition: "background 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "var(--color-surface-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "var(--color-surface)";
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-display), sans-serif",
                      fontWeight: 600,
                      marginBottom: "10px",
                    }}
                  >
                    {d.num}
                  </span>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display), sans-serif",
                      lineHeight: 1.3,
                      marginBottom: "6px",
                    }}
                  >
                    {d.title}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-body), sans-serif",
                      lineHeight: 1.6,
                    }}
                  >
                    {d.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
