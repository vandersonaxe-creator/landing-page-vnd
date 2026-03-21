"use client";

import { useState, useRef, useCallback } from "react";
import CalComEmbed from "@/components/CalComEmbed";

const FB = "var(--font-body), sans-serif";
const FD = "var(--font-display), sans-serif";
const ACCENT = "var(--color-accent)";

const CARD_STYLE: React.CSSProperties = {
  background: "#FFFFFF",
  borderRadius: "20px",
  padding: "clamp(24px, 4vw, 40px)",
  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
};

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: "#FFFFFF",
  border: "1.5px solid rgba(0,0,0,0.12)",
  borderRadius: "10px",
  fontSize: "15px",
  color: "#111111",
  fontFamily: FB,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#888888",
  fontFamily: FB,
  marginBottom: "8px",
};

function maskWhatsApp(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (!d.length) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const TRUST_ITEMS = ["Sem compromisso", "Dura cerca de 20 minutos", "100% online"];

function TrustStrip() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(16px, 3vw, 36px)",
        flexWrap: "wrap",
        marginBottom: "24px",
      }}
    >
      {TRUST_ITEMS.map((item) => (
        <span
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            color: "var(--color-muted)",
            fontFamily: FB,
          }}
        >
          <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span>
          {item}
        </span>
      ))}
    </div>
  );
}

function getWelcomeMessage(name: string, segment: string): string {
  const seg = segment.trim();
  if (seg.length < 2) {
    return "Na análise, entendemos seu contexto e mostramos o que destrava resultado no seu caso.";
  }
  return `Com base no segmento “${seg}”, na análise vamos alinhar prioridades e o caminho mais rápido para sua operação digital.`;
}

export default function BookingQuiz() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [segment, setSegment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const scrollTop = useCallback(() => {
    setTimeout(
      () =>
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }),
      80
    );
  }, []);

  const canSubmit =
    name.trim().length >= 2 &&
    whatsapp.replace(/\D/g, "").length === 11 &&
    segment.trim().length >= 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
    scrollTop();
  };

  if (submitted) {
    return (
      <div ref={topRef}>
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: "16px",
            padding: "clamp(24px, 4vw, 40px)",
            marginBottom: "32px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: ACCENT,
              fontFamily: FB,
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            Próximo passo
          </p>
          <p
            style={{
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "#111111",
              fontFamily: FB,
              lineHeight: 1.75,
              marginBottom: "16px",
            }}
          >
            {getWelcomeMessage(name, segment)}
          </p>
          <div
            style={{
              paddingTop: "12px",
              borderTop: "1px solid rgba(0,0,0,0.08)",
              fontSize: "13px",
              color: "#888888",
              fontFamily: FB,
              lineHeight: 1.6,
            }}
          >
            Olá,{" "}
            <strong style={{ color: "#111111" }}>{name.trim()}</strong> — escolha
            o melhor horário abaixo para conversarmos.
          </div>
        </div>

        <TrustStrip />

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
    );
  }

  return (
    <div ref={topRef}>
    <form onSubmit={handleSubmit} style={CARD_STYLE}>
      <h3
        style={{
          fontFamily: FD,
          fontSize: "clamp(22px, 4vw, 28px)",
          fontWeight: 800,
          color: "#0a0a0a",
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
          marginBottom: "8px",
        }}
      >
        Sua análise gratuita
      </h3>
      <p
        style={{
          fontSize: "14px",
          color: "rgba(0,0,0,0.5)",
          fontFamily: FB,
          marginBottom: "28px",
          lineHeight: 1.65,
          maxWidth: "480px",
        }}
      >
        Preencha os dados abaixo. Em seguida, escolha um horário no calendário.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          maxWidth: "480px",
          marginBottom: "28px",
        }}
      >
        <div>
          <label htmlFor="bq-name" style={LABEL_STYLE}>
            Nome *
          </label>
          <input
            id="bq-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            autoComplete="name"
            style={INPUT_STYLE}
            onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")
            }
          />
        </div>
        <div>
          <label htmlFor="bq-wa" style={LABEL_STYLE}>
            WhatsApp *
          </label>
          <input
            id="bq-wa"
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(maskWhatsApp(e.target.value))}
            placeholder="(11) 99999-9999"
            autoComplete="tel"
            style={INPUT_STYLE}
            onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")
            }
          />
        </div>
        <div>
          <label htmlFor="bq-seg" style={LABEL_STYLE}>
            Segmento da empresa *
          </label>
          <input
            id="bq-seg"
            type="text"
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
            placeholder="Ex.: clínica, oficina, loja…"
            autoComplete="organization"
            style={INPUT_STYLE}
            onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")
            }
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        style={{
          padding: "14px 28px",
          background: canSubmit ? ACCENT : "rgba(0,0,0,0.15)",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontFamily: FB,
          fontSize: "15px",
          fontWeight: 600,
          cursor: canSubmit ? "pointer" : "not-allowed",
          letterSpacing: "0.01em",
          boxShadow: canSubmit ? "0 8px 24px rgba(232,76,30,0.25)" : "none",
          opacity: canSubmit ? 1 : 0.65,
          transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          if (!canSubmit) return;
          e.currentTarget.style.background = "#ff5c2a";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          if (!canSubmit) return;
          e.currentTarget.style.background = ACCENT;
          e.currentTarget.style.transform = "";
        }}
      >
        Quero minha análise gratuita →
      </button>
    </form>
    </div>
  );
}
