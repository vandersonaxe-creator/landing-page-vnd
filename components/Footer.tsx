"use client";

import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { COMPANY, WHATSAPP_URL, BRAND, INSTAGRAM_URL } from "@/lib/constants";

const SOLUCOES_LINKS = [
  { label: "Presença Digital", href: "#servicos" },
  { label: "Google Meu Negócio", href: "#servicos" },
  { label: "Meta e Redes Sociais", href: "#servicos" },
  { label: "WhatsApp e Automação", href: "#servicos" },
  { label: "Landing Pages e Sites", href: "#servicos" },
  { label: "Tráfego Pago", href: "#servicos" },
  { label: "IA e Integrações", href: "#servicos" },
] as const;

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Estrutura", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Prova Social", href: "#prova-social" },
  { label: "Agendamento", href: "#agendar" },
  { label: "Contato", href: "#contato" },
] as const;

const colHeadingStyle: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--color-muted)",
  fontFamily: "var(--font-body), sans-serif",
  fontWeight: 500,
  marginBottom: "16px",
};

const linkStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "var(--color-muted)",
  textDecoration: "none",
  lineHeight: 2,
  display: "block",
  transition: "color 0.2s",
  fontFamily: "var(--font-body), sans-serif",
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "0.5px solid var(--color-border)",
      }}
    >
      {/* ── Footer brand statement — diferente do Hero, fala de crença/filosofia ── */}
      <div
        style={{
          background: "#111111",
          borderBottom: "0.5px solid rgba(255,255,255,0.06)",
          padding:
            "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 80px)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "48px",
            flexWrap: "wrap",
          }}
        >
          {/* Left — brand + philosophy */}
          <div style={{ flex: "1 1 400px" }}>
            {/* Logo */}
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                color: "#f0ede6",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "20px",
              }}
            >
              {BRAND.name}
            </p>

            {/* Accent rule */}
            <div
              style={{
                width: "36px",
                height: "3px",
                background: "var(--color-accent)",
                borderRadius: "2px",
                marginBottom: "20px",
              }}
            />

            {/* Philosophy line — diferente do H1, fala de crença */}
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                color: "rgba(240,237,230,0.55)",
                lineHeight: 1.7,
                maxWidth: "420px",
              }}
            >
              Empresa que tem estrutura digital organizada não improvisa —
              ela executa com clareza e cresce com consistência.
            </p>
          </div>

          {/* Right — CTA */}
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                marginBottom: "16px",
              }}
            >
              Próximo passo
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 28px",
                background: "var(--color-accent)",
                color: "white",
                borderRadius: "4px",
                textDecoration: "none",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                boxShadow: "0 8px 24px rgba(232,76,30,0.3)",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.background = "#ff5c2a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.background = "var(--color-accent)";
              }}
            >
              Agendar análise ↗
            </a>
            <p
              style={{
                marginTop: "12px",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              Ou fale direto:{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#f0ede6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                }
              >
                {COMPANY.whatsApp}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Main grid */}
        <div
          style={{
            paddingTop: "64px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]"
        >
          {/* Col 1 — Brand */}
          <div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--color-text)",
                fontFamily: "var(--font-display), sans-serif",
                marginBottom: "10px",
              }}
            >
              {BRAND.name}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
                lineHeight: 1.7,
                maxWidth: "260px",
                marginBottom: "24px",
              }}
            >
              Estrutura digital para empresas que precisam organizar, corrigir,
              implantar e evoluir sua operação online.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-nav"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "0.5px solid var(--color-border)",
                  background: "var(--color-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-muted)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                aria-label="Instagram"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-nav"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "0.5px solid var(--color-border)",
                  background: "var(--color-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-muted)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Col 2 — Soluções */}
          <div>
            <p style={colHeadingStyle}>Soluções</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {SOLUCOES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="link-nav" style={linkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navegação */}
          <div>
            <p style={colHeadingStyle}>Navegação</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="link-nav" style={linkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contato + Institucional */}
          <div>
            <p style={colHeadingStyle}>Contato</p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 24px 0",
              }}
            >
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav"
                  style={linkStyle}
                >
                  {COMPANY.whatsApp}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="link-nav" style={linkStyle}>
                  {COMPANY.email}
                </a>
              </li>
              <li style={{ ...linkStyle, cursor: "default" }}>
                {COMPANY.atendimento}
              </li>
            </ul>

            <p style={{ ...colHeadingStyle, marginTop: "20px" }}>Institucional</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <Link href="/politica-de-privacidade" className="link-nav" style={linkStyle}>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="link-nav" style={linkStyle}>
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "0.5px solid var(--color-border)",
            marginTop: "48px",
            paddingTop: "24px",
            paddingBottom: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            © 2025 {COMPANY.razaoSocial}. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "var(--color-muted-2)",
              fontFamily: "var(--font-body), sans-serif",
              fontStyle: "italic",
            }}
          >
            Da organização da base à evolução da operação digital.
          </p>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1023px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 639px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
