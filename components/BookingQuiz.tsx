"use client";

import { useState, useRef, useCallback } from "react";
import CalComEmbed from "@/components/CalComEmbed";

// ── Types ─────────────────────────────────────────────────────────────────────
type AnswerKey = "step1" | "step2" | "step3" | "step4";

type Answers = {
  step1?: string;   // texto livre — segmento
  step2?: string[]; // como consegue clientes
  step3?: string;   // principal dificuldade
  step4?: string[]; // o que tem hoje
};

// ── Quiz steps 2-4 (step 1 é texto livre, tratado separadamente) ──────────────
const QUIZ_STEPS: {
  stepNum: number;
  key: AnswerKey;
  title: string;
  multi: boolean;
  hint: string;
  options: string[];
}[] = [
  {
    stepNum: 2,
    key: "step2",
    title: "Como você consegue clientes hoje?",
    multi: true,
    hint: "Pode selecionar mais de uma opção",
    options: [
      "Indicação",
      "Instagram",
      "WhatsApp",
      "Google",
      "Tráfego pago (anúncios)",
      "Não sei / Não tenho consistência",
    ],
  },
  {
    stepNum: 3,
    key: "step3",
    title: "Qual é sua principal dificuldade hoje?",
    multi: false,
    hint: "Selecione uma opção",
    options: [
      "Poucos clientes",
      "Não apareço no Google",
      "Instagram fraco",
      "Atendimento desorganizado",
      "Demora para responder leads",
      "Não tenho site ou página",
    ],
  },
  {
    stepNum: 4,
    key: "step4",
    title: "O que você tem hoje?",
    multi: true,
    hint: "Pode selecionar mais de uma opção",
    options: [
      "Perfil no Instagram",
      "Perfil no Google Meu Negócio",
      "Site ou landing page",
      "WhatsApp Business",
      "Não tenho nada disso",
    ],
  },
];

const TRUST_ITEMS = ["Sem compromisso", "Dura cerca de 20 minutos", "100% online"];

// ── Helpers ───────────────────────────────────────────────────────────────────
function maskWhatsApp(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (!d.length) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function getResultMessage(answers: Answers): string {
  const dif = answers.step3 ?? "";
  const cap = answers.step2 ?? [];
  if (dif === "Não apareço no Google")
    return "Identificamos que sua maior oportunidade está na presença local. Vamos montar um plano para você aparecer quando seu cliente buscar.";
  if (dif === "Poucos clientes" && cap.includes("Indicação") && cap.length <= 2)
    return "Você depende de indicação, o que é frágil. Vamos estruturar canais que geram clientes de forma previsível.";
  if (dif === "Atendimento desorganizado" || dif === "Demora para responder leads")
    return "Seu gargalo está no processo comercial. Com pequenos ajustes no atendimento você para de perder clientes na resposta.";
  if (dif === "Instagram fraco")
    return "Identificamos que sua presença nas redes sociais precisa de estrutura. Vamos definir o caminho para atrair clientes pelo Instagram.";
  if (dif === "Não tenho site ou página")
    return "Sem uma página estratégica, você perde clientes a cada busca. Vamos criar a base digital que falta para sua operação.";
  return "Identificamos pontos claros para melhorar sua captação e presença digital. Na análise, mostramos o caminho mais rápido.";
}

// ── Style tokens ──────────────────────────────────────────────────────────────
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

// ── Sub-components ────────────────────────────────────────────────────────────
function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: ACCENT,
            fontFamily: FB,
            fontWeight: 500,
          }}
        >
          Etapa {current} de {total}
        </span>
        <span style={{ fontSize: "11px", color: "#888888", fontFamily: FB }}>
          {pct}%
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "rgba(0,0,0,0.08)",
          borderRadius: "2px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: ACCENT,
            borderRadius: "2px",
            transition: "width 0.45s ease",
          }}
        />
      </div>
    </div>
  );
}

function QuestionHeading({ title, hint }: { title: string; hint: string }) {
  return (
    <>
      <h3
        style={{
          fontFamily: FD,
          fontSize: "22px",
          fontWeight: 700,
          color: "#111111",
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
          marginBottom: "6px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "13px",
          color: "#888888",
          fontFamily: FB,
          marginBottom: "20px",
          lineHeight: 1.6,
        }}
      >
        {hint}
      </p>
    </>
  );
}

function OptionButton({
  label,
  selected,
  multi,
  onClick,
}: {
  label: string;
  selected: boolean;
  multi: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "12px 16px",
        background: selected ? "rgba(232,76,30,0.06)" : "#FFFFFF",
        border: `1.5px solid ${selected ? ACCENT : "rgba(0,0,0,0.12)"}`,
        borderRadius: "10px",
        color: selected ? "#111111" : "#444444",
        fontFamily: FB,
        fontSize: "14px",
        fontWeight: selected ? 500 : 400,
        textAlign: "left",
        cursor: "pointer",
        transition: "background 0.18s, border-color 0.18s, color 0.18s",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        lineHeight: 1.4,
        width: "100%",
      }}
    >
      <span
        style={{
          width: "16px",
          height: "16px",
          borderRadius: multi ? "4px" : "50%",
          border: `1.5px solid ${selected ? ACCENT : "rgba(0,0,0,0.2)"}`,
          background: selected ? ACCENT : "transparent",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.18s",
        }}
      >
        {selected && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
            <path
              d="M1 3.5L3.5 6L8 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}

function NavButtons({
  showBack,
  canContinue,
  onBack,
  onNext,
  nextLabel = "Continuar →",
}: {
  showBack: boolean;
  canContinue: boolean;
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "4px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "8px",
      }}
    >
      {showBack && (
        <button
          type="button"
          onClick={onBack}
          style={{
            padding: "12px 16px",
            background: "transparent",
            border: "none",
            color: "#888888",
            fontFamily: FB,
            fontSize: "13px",
            fontWeight: 400,
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#444444")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
        >
          ← Voltar
        </button>
      )}
      <button
        type="button"
        onClick={canContinue ? onNext : undefined}
        style={{
          padding: "12px 24px",
          background: ACCENT,
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontFamily: FB,
          fontSize: "14px",
          fontWeight: 600,
          cursor: canContinue ? "pointer" : "not-allowed",
          transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
          boxShadow: canContinue ? "0 6px 20px rgba(232,76,30,0.22)" : "none",
          letterSpacing: "0.01em",
          opacity: canContinue ? 1 : 0.4,
        }}
        onMouseEnter={(e) => {
          if (!canContinue) return;
          e.currentTarget.style.background = "#ff5c2a";
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 10px 28px rgba(232,76,30,0.32)";
        }}
        onMouseLeave={(e) => {
          if (!canContinue) return;
          e.currentTarget.style.background = ACCENT;
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(232,76,30,0.22)";
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}

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

// ── Main component ────────────────────────────────────────────────────────────
// step 0 → segmento (texto livre)
// step 1-3 → escolhas múltiplas (QUIZ_STEPS[0-2])
// step 4 → formulário de contato
// step 5 → diagnóstico + calendário
export default function BookingQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ step2: [], step4: [] });
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  const scrollTop = useCallback(() => {
    setTimeout(
      () =>
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }),
      80
    );
  }, []);

  const goNext = () => {
    setStep((s) => s + 1);
    scrollTop();
  };
  const goBack = () => {
    setStep((s) => s - 1);
    scrollTop();
  };

  const toggleOption = (key: AnswerKey, option: string, multi: boolean) => {
    if (!multi) {
      setAnswers((a) => ({ ...a, [key]: option }));
    } else {
      setAnswers((a) => {
        const cur = (a[key] as string[] | undefined) ?? [];
        const next = cur.includes(option)
          ? cur.filter((o) => o !== option)
          : [...cur, option];
        return { ...a, [key]: next };
      });
    }
  };

  const isSelected = (key: AnswerKey, option: string): boolean => {
    const val = answers[key];
    if (Array.isArray(val)) return val.includes(option);
    return val === option;
  };

  const canContinue = (): boolean => {
    if (step === 0) return (answers.step1?.trim().length ?? 0) >= 3;
    if (step >= 1 && step <= 3) {
      const { key } = QUIZ_STEPS[step - 1];
      const val = answers[key];
      if (Array.isArray(val)) return val.length > 0;
      return !!val;
    }
    if (step === 4)
      return (
        name.trim().length > 0 && whatsapp.replace(/\D/g, "").length === 11
      );
    return false;
  };

  // ── RESULTADO + CALENDÁRIO (step 5) ──────────────────────────────────────
  if (step === 5) {
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
            🎯 Seu diagnóstico
          </p>
          <p
            style={{
              fontSize: "clamp(14px, 1.8vw, 16px)",
              color: "#111111",
              fontFamily: FB,
              lineHeight: 1.75,
              marginBottom: "20px",
            }}
          >
            {getResultMessage(answers)}
          </p>
          <div
            style={{
              paddingTop: "16px",
              borderTop: "1px solid rgba(0,0,0,0.08)",
              fontSize: "13px",
              color: "#888888",
              fontFamily: FB,
              lineHeight: 1.6,
            }}
          >
            Olá,{" "}
            <strong style={{ color: "#111111" }}>{name}</strong> — escolha o
            melhor horário abaixo para conversarmos.
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

  // ── FORMULÁRIO DE CONTATO (step 4) ────────────────────────────────────────
  if (step === 4) {
    return (
      <div ref={topRef} style={CARD_STYLE}>
        <ProgressBar current={5} total={5} />
        <QuestionHeading
          title="Seus dados para agendar"
          hint="Usamos apenas para personalizar sua análise. Nada de spam."
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            maxWidth: "480px",
            marginBottom: "32px",
          }}
        >
          <div>
            <label style={LABEL_STYLE}>Nome *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              autoComplete="name"
              style={INPUT_STYLE}
              onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")
              }
            />
          </div>
          <div>
            <label style={LABEL_STYLE}>WhatsApp *</label>
            <input
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
        </div>
        <NavButtons
          showBack
          canContinue={canContinue()}
          onBack={goBack}
          onNext={goNext}
          nextLabel="Ver meu diagnóstico e agendar →"
        />
      </div>
    );
  }

  // ── STEP 0: SEGMENTO (texto livre) ────────────────────────────────────────
  if (step === 0) {
    return (
      <div ref={topRef} style={CARD_STYLE}>
        <ProgressBar current={1} total={5} />
        <QuestionHeading
          title="Qual é o segmento da sua empresa?"
          hint="Ex: clínica odontológica, loja de roupas, oficina mecânica..."
        />
        <div style={{ maxWidth: "480px", marginBottom: "32px" }}>
          <input
            type="text"
            value={answers.step1 ?? ""}
            onChange={(e) =>
              setAnswers((a) => ({ ...a, step1: e.target.value }))
            }
            placeholder="Digite o segmento do seu negócio"
            autoFocus
            style={INPUT_STYLE}
            onFocus={(e) => (e.currentTarget.style.borderColor = ACCENT)}
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)")
            }
          />
        </div>
        <NavButtons
          showBack={false}
          canContinue={canContinue()}
          onBack={goBack}
          onNext={goNext}
        />
      </div>
    );
  }

  // ── STEPS 1-3: MÚLTIPLA ESCOLHA (QUIZ_STEPS[0-2]) ────────────────────────
  const current = QUIZ_STEPS[step - 1];

  return (
    <div ref={topRef} style={CARD_STYLE}>
      <ProgressBar current={current.stepNum} total={5} />
      <QuestionHeading title={current.title} hint={current.hint} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
          gap: "10px",
          marginBottom: "32px",
        }}
      >
        {current.options.map((option) => (
          <OptionButton
            key={option}
            label={option}
            selected={isSelected(current.key, option)}
            multi={current.multi}
            onClick={() => toggleOption(current.key, option, current.multi)}
          />
        ))}
      </div>
      <NavButtons
        showBack={step > 0}
        canContinue={canContinue()}
        onBack={goBack}
        onNext={goNext}
      />
    </div>
  );
}
