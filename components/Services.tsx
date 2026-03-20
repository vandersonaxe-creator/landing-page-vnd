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
  Icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Landing Pages e Sites Estratégicos",
    description:
      "Páginas e sites com foco em apresentação profissional, clareza comercial e conversão.",
    Icon: Globe,
  },
  {
    num: "02",
    title: "WhatsApp e Atendimento Automatizado",
    description:
      "Organização do atendimento, automações, fluxos e ganho de agilidade no processo comercial.",
    Icon: MessageCircle,
  },
  {
    num: "03",
    title: "Google Meu Negócio e Presença Local",
    description:
      "Ajuste completo da presença local para negócios que dependem de visibilidade e confiança.",
    Icon: MapPin,
  },
  {
    num: "04",
    title: "Meta e Posicionamento nas Redes",
    description:
      "Ajuste de perfil e comunicação para atrair as pessoas certas e conduzir para o atendimento.",
    Icon: Share2,
  },
  {
    num: "05",
    title: "Tráfego Pago e Escala",
    description:
      "Campanhas com intenção comercial e previsibilidade para gerar oportunidades qualificadas.",
    Icon: TrendingUp,
  },
  {
    num: "06",
    title: "IA, Integrações e Fluxos",
    description:
      "Integrações e automações com IA para reduzir atrito e acelerar o caminho até o cliente.",
    Icon: Cpu,
  },
  {
    num: "07",
    title: "Prioridade de Entregas",
    description:
      "O que entra primeiro e o que vem depois, para manter continuidade e evitar retrabalho.",
    Icon: ListOrdered,
  },
  {
    num: "08",
    title: "Jornada do Cliente",
    description:
      "Organização dos pontos de contato para respostas mais rápidas e uma condução mais clara até o agendamento.",
    Icon: Route,
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-14 md:py-20"
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
            <p
              className="max-w-xs md:text-right leading-relaxed"
              style={{
                fontSize: "13px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Ajustamos canais e fluxos para gerar clareza, resposta rápida e
              avanço consistente no funil.
            </p>
          </div>
          <div className="mt-6 h-px" style={{ background: "var(--color-border)" }} />
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {SERVICES.map((s) => (
            <div
              key={s.num}
              data-scroll-reveal
              className="group"
              style={{
                background: "var(--color-surface)",
                padding: "28px 24px",
                transition: "background 0.3s, border-color 0.3s",
                border: "0.5px solid transparent",
                position: "relative",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--color-surface-2)";
                el.style.borderColor = "var(--color-border-hover)";
                const icon = el.querySelector<SVGElement>(".service-icon");
                if (icon) icon.style.color = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "var(--color-surface)";
                el.style.borderColor = "transparent";
                const icon = el.querySelector<SVGElement>(".service-icon");
                if (icon) icon.style.color = "var(--color-muted)";
              }}
            >
              {/* Number */}
              <p
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 600,
                  marginBottom: "16px",
                }}
              >
                {s.num}
              </p>

              {/* Icon container */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--color-surface-2)",
                  borderRadius: "10px",
                  border: "0.5px solid var(--color-border)",
                  marginBottom: "0",
                }}
              >
                <s.Icon
                  className="service-icon"
                  size={18}
                  strokeWidth={1.5}
                  style={{
                    color: "var(--color-muted)",
                    transition: "color 0.3s",
                  }}
                />
              </div>

              {/* Separator */}
              <div
                style={{
                  height: "0.5px",
                  background: "var(--color-border)",
                  margin: "16px 0",
                }}
              />

              {/* Title */}
              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  fontFamily: "var(--font-display), sans-serif",
                  lineHeight: 1.3,
                  marginBottom: "8px",
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
                }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
