"use client";

import Link from "next/link";
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

export default function Footer() {
  return (
    <footer
      className="py-12 md:py-16"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="lg:col-span-2">
            <h3
              className="text-base font-bold text-[var(--color-text)]"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
            >
              {BRAND.name} | {BRAND.signature}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              Estrutura digital para empresas que precisam organizar, corrigir,
              implantar e evoluir sua operação online com mais clareza,
              eficiência e resultado.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Soluções
            </h3>
            <ul className="mt-4 space-y-2">
              {SOLUCOES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="link-nav text-sm text-[var(--color-muted)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="link-nav text-sm text-[var(--color-muted)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav"
                >
                  WhatsApp: {COMPANY.whatsApp}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="link-nav">
                  E-mail: {COMPANY.email}
                </a>
              </li>
              <li>Atendimento: {COMPANY.atendimento}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Institucional
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="link-nav text-sm text-[var(--color-muted)]"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="link-nav text-sm text-[var(--color-muted)]"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Redes sociais
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3 sm:flex-col sm:gap-2">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav text-sm text-[var(--color-muted)]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav text-sm text-[var(--color-muted)]"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-sm italic text-[var(--color-muted)]">
          Da organização da base à evolução da operação digital.
        </p>

        <p className="mt-4 text-center text-xs text-[var(--color-muted)]">
          © 2025 {COMPANY.razaoSocial}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
