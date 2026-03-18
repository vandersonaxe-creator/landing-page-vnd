"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL, BRAND } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Estrutura", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Prova Social", href: "#prova-social" },
  { label: "Agendar", href: "#agendar" },
  { label: "Contato", href: "#contato" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const headerRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const activeSectionRef = useRef("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const progressEl = progressRef.current;
    if (!progressEl) return;

    const sectionIds = NAV_LINKS.map((l) => l.href.replace(/^#/, ""));
    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Ajusta transição para ficar "suave" quando permitido e leve quando não.
    progressEl.style.transition = prefersReduced
      ? "none"
      : "transform 120ms linear";

    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const scrollDen = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scrollTop / scrollDen));

      progressEl.style.transform = `scaleX(${progress})`;

      // Scroll spy: seção "ativa" baseada na posição acima do header.
      const headerHeight =
        headerRef.current?.getBoundingClientRect().height ?? 64;
      const y = scrollTop + headerHeight + 12;

      let current = sectionIds[0] ?? "inicio";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }

      if (current !== activeSectionRef.current) {
        activeSectionRef.current = current;
        setActiveSection(current);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-[99] relative transition-all duration-300 ${
        scrolled
          ? "border-b border-[#23525F]/10 bg-white/85 shadow-[0_1px_0_0_rgba(35,82,95,0.06)] backdrop-blur-md"
          : "border-b border-[#23525F]/[0.08] bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div
        ref={progressRef}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#56a8be] via-[#23525F] to-[#56a8be]"
      />

      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 md:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="flex shrink-0 flex-col items-start gap-0 sm:flex-row sm:items-baseline sm:gap-2 [font-family:var(--font-inter-tight),sans-serif]"
        >
          <span className="text-xl font-bold tracking-tight text-[#23525F] md:text-[1.35rem]">
            {BRAND.name}
          </span>
          <span className="text-xs font-medium tracking-wide text-[#23525F]/80 sm:text-sm sm:font-normal">
            {BRAND.signature}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex lg:gap-6 xl:gap-8"
          aria-label="Menu principal"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`link-nav text-sm font-medium ${
                activeSection === href.replace(/^#/, "")
                  ? "rounded-full bg-[#23525F]/10 px-3 py-1.5 text-[#23525F]"
                  : "text-[#23525F]/80 hover:text-[#23525F] rounded-full px-3 py-1.5"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-header hidden items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-white transition-all duration-300 lg:inline-flex"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#23525F20] bg-transparent text-[#23525F] transition-colors hover:bg-[#23525F]/5 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Abrir menu"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#23525F15] bg-white/98 px-4 py-4 backdrop-blur-sm lg:hidden">
          <nav className="flex flex-col gap-0.5" aria-label="Menu mobile">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`link-nav rounded-lg px-3 py-3.5 text-sm font-medium ${
                  activeSection === href.replace(/^#/, "")
                    ? "bg-[#23525F]/8 text-[#23525F]"
                    : "text-[#23525F]"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-cta-header mt-3 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-sm font-medium uppercase text-white"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
