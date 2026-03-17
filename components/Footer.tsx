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
    <footer className="border-t border-[#23525F12] bg-[#f8fafb] py-12 md:py-16">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-[#23525F] [font-family:var(--font-inter-tight),sans-serif]">
              {BRAND.name} | {BRAND.signature}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#23525F]/90">
              Estrutura digital para empresas que precisam organizar, corrigir,
              implantar e evoluir sua operação online com mais clareza,
              eficiência e resultado.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#23525F]">
              Soluções
            </h3>
            <ul className="mt-4 space-y-2">
              {SOLUCOES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="link-nav text-sm text-[#23525F]/90"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#23525F]">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="link-nav text-sm text-[#23525F]/90">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#23525F]">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#23525F]/90">
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#23525F]">
              Institucional
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="link-nav text-sm text-[#23525F]/90"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="link-nav text-sm text-[#23525F]/90"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#23525F]">
              Redes sociais
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3 sm:flex-col sm:gap-2">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav text-sm text-[#23525F]/90"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-nav text-sm text-[#23525F]/90"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-sm italic text-[#23525F]/80">
          Da organização da base à evolução da operação digital.
        </p>

        <p className="mt-4 text-center text-xs text-[#23525F]/70">
          © 2025 {COMPANY.razaoSocial}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
