"use client";

import CalComEmbed from "@/components/CalComEmbed";

export default function BookingSection() {
  return (
    <section
      id="agendar"
      className="py-14 md:py-20"
      style={{ background: "#080808" }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Inner container */}
        <div
          data-scroll-reveal
          style={{
            background: "var(--color-surface)",
            borderRadius: "16px",
            border: "0.5px solid var(--color-border)",
            padding: "64px 48px",
            boxShadow: "inset 0 1px 0 0 rgba(232,76,30,0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Accent glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "-80px",
              left: "-80px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(232,76,30,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="relative z-[1] max-w-2xl">
            {/* Label */}
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                fontFamily: "var(--font-body), sans-serif",
                marginBottom: "16px",
              }}
            >
              Agendamento
            </p>

            {/* H2 */}
            <h2
              data-text-reveal
              className="font-bold text-[var(--color-text)]"
            >
              Agende uma conversa e entenda o que sua empresa realmente precisa
            </h2>

            {/* Paragraph */}
            <p
              style={{
                marginTop: "16px",
                fontSize: "15px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
                lineHeight: 1.8,
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              Em poucos minutos, avaliamos seu cenário, entendemos o momento do
              seu negócio e mostramos qual estrutura faz mais sentido para
              melhorar sua presença digital, atendimento, operação e geração de
              oportunidades.
            </p>

            <p
              style={{
                fontSize: "12px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
                marginBottom: "16px",
                letterSpacing: "0.05em",
              }}
            >
              Escolha um horário abaixo:
            </p>
          </div>

          {/* Calendar embed */}
          <div
            style={{
              border: "0.5px solid var(--color-border)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <CalComEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
