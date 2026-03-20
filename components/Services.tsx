"use client";

import {
  Globe,
  MessageCircle,
  MapPin,
  Share2,
  TrendingUp,
  Cpu,
  ListOrdered,
  Route,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

type Service = {
  num: string;
  title: string;
  description: string;
  features: readonly string[];
  Icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Landing Pages e Sites Estratégicos",
    description:
      "Páginas e sites com foco em apresentação profissional, clareza comercial e conversão.",
    features: ["Página de captura", "Site institucional", "SEO on-page", "Integração com CRM"],
    Icon: Globe,
  },
  {
    num: "02",
    title: "WhatsApp e Atendimento Automatizado",
    description:
      "Organização do atendimento, automações e ganho de agilidade no processo comercial.",
    features: ["Fluxos automáticos", "Respostas rápidas", "CRM de atendimento", "Relatórios"],
    Icon: MessageCircle,
  },
  {
    num: "03",
    title: "Google Meu Negócio e Presença Local",
    description:
      "Ajuste completo da presença local para negócios que dependem de visibilidade.",
    features: ["Perfil otimizado", "Gestão de avaliações", "Posts regulares", "Métricas locais"],
    Icon: MapPin,
  },
  {
    num: "04",
    title: "Meta e Posicionamento nas Redes",
    description:
      "Ajuste de perfil e comunicação para atrair as pessoas certas e conduzir ao atendimento.",
    features: ["Bio e identidade visual", "Estratégia de conteúdo", "Stories e Reels", "Análise de alcance"],
    Icon: Share2,
  },
  {
    num: "05",
    title: "Tráfego Pago e Escala",
    description:
      "Campanhas com intenção comercial e previsibilidade para gerar oportunidades qualificadas.",
    features: ["Google Ads", "Meta Ads", "Públicos segmentados", "Relatório mensal"],
    Icon: TrendingUp,
  },
  {
    num: "06",
    title: "IA, Integrações e Fluxos",
    description:
      "Automações com IA para reduzir atrito e acelerar o caminho até o cliente.",
    features: ["Chatbots com IA", "Zapier / Make", "CRM integrado", "N8N workflows"],
    Icon: Cpu,
  },
  {
    num: "07",
    title: "Prioridade de Entregas",
    description:
      "O que entra primeiro e o que vem depois, para manter continuidade e evitar retrabalho.",
    features: ["Diagnóstico inicial", "Roadmap digital", "Sprints quinzenais", "Ajustes contínuos"],
    Icon: ListOrdered,
  },
  {
    num: "08",
    title: "Jornada do Cliente",
    description:
      "Organização dos pontos de contato para respostas mais rápidas e condução clara ao agendamento.",
    features: ["Mapeamento de funil", "Automação de etapas", "Follow-up estruturado", "Conversão monitorada"],
    Icon: Route,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        background: "var(--color-bg)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      {/* ── Section header ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding:
            "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 80px) clamp(32px, 5vw, 56px)",
          borderBottom: "0.5px solid var(--color-border)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            className="num-tag"
            style={{ marginBottom: "10px", fontSize: "10px", letterSpacing: "0.12em" }}
          >
            02 / Soluções
          </p>
          <h2
            data-text-reveal
            className="font-bold text-[var(--color-text)]"
            style={{ maxWidth: "500px" }}
          >
            Soluções que viram operação
          </h2>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "var(--color-muted)",
            fontFamily: "var(--font-body), sans-serif",
            maxWidth: "280px",
            lineHeight: 1.7,
            textAlign: "right",
          }}
        >
          Ajustamos canais e fluxos para gerar clareza, resposta rápida e
          avanço consistente no funil.
        </p>
      </div>

      {/* ── Cards grid (Linea style) ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding:
            "clamp(32px, 5vw, 56px) clamp(24px, 5vw, 80px) clamp(56px, 8vw, 96px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "clamp(12px, 2vw, 20px)",
        }}
      >
        {SERVICES.map((s) => (
          <div
            key={s.num}
            data-scroll-reveal
            style={{
              background: "var(--color-surface)",
              border: "0.5px solid var(--color-border)",
              borderRadius: "14px",
              padding: "clamp(20px, 3vw, 28px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--color-border-hover)";
              el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--color-border)";
              el.style.boxShadow = "none";
              el.style.transform = "translateY(0)";
            }}
          >
            {/* Number + Icon row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 700,
                }}
              >
                {s.num}
              </span>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  border: "0.5px solid var(--color-border)",
                  background: "var(--color-bg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <s.Icon size={17} strokeWidth={1.5} style={{ color: "var(--color-muted)" }} />
              </div>
            </div>

            {/* Separator */}
            <div style={{ height: "0.5px", background: "var(--color-border)" }} />

            {/* Title */}
            <h3
              style={{
                fontSize: "clamp(14px, 1.6vw, 16px)",
                fontWeight: 600,
                color: "var(--color-text)",
                fontFamily: "var(--font-display), sans-serif",
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {s.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
                lineHeight: 1.7,
                margin: 0,
                flex: 1,
              }}
            >
              {s.description}
            </p>

            {/* Features list (Linea style) */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                paddingTop: "12px",
                borderTop: "0.5px solid var(--color-border)",
              }}
            >
              {s.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "12px",
                    color: "var(--color-muted)",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "var(--color-accent)",
                      flexShrink: 0,
                    }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
