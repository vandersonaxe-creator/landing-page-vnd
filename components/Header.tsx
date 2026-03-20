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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const progressEl = progressRef.current;
    if (!progressEl) return;

    const sectionIds = NAV_LINKS.map((l) => l.href.replace(/^#/, ""));
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    progressEl.style.transition = prefersReduced ? "none" : "transform 120ms linear";

    let raf = 0;
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || 0;
      const scrollDen = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, scrollTop / scrollDen));
      progressEl.style.transform = `scaleX(${progress})`;

      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 64;
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
      raf = window.requestAnimationFrame(() => { raf = 0; update(); });
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
      data-reveal
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,248,0.96)" : "rgba(250,250,248,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "0.5px solid var(--color-border)",
        height: "64px",
      }}
    >
      {/* Progress bar */}
      <div
        ref={progressRef}
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0"
        style={{ background: "var(--color-accent)", opacity: 0.6 }}
      />

      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="#inicio"
          className="shrink-0"
          style={{ fontFamily: "var(--font-display), sans-serif" }}
        >
          <span
            className="text-[var(--color-text)]"
            style={{ fontSize: "16px", fontWeight: 800, letterSpacing: "-0.03em" }}
          >
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="link-nav rounded-full px-3 py-1.5 transition-colors"
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-body), sans-serif",
                color:
                  activeSection === href.replace(/^#/, "")
                    ? "var(--color-text)"
                    : "var(--color-muted)",
                background:
                  activeSection === href.replace(/^#/, "")
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Status indicator — desktop only */}
          <div className="hidden items-center gap-1.5 lg:flex">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Disponível
            </span>
          </div>

          {/* WhatsApp pill */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-pill hidden lg:inline-flex"
          >
            WhatsApp ↗
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[rgba(255,255,255,0.06)] lg:hidden"
            style={{ border: "0.5px solid var(--color-border-hover)", color: "var(--color-text)" }}
            aria-expanded={mobileOpen}
            aria-label="Abrir menu"
          >
            {mobileOpen ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="px-4 py-3 lg:hidden"
          style={{
            background: "rgba(250,250,248,0.98)",
            borderTop: "0.5px solid var(--color-border)",
            backdropFilter: "blur(16px)",
          }}
        >
          <nav className="flex flex-col gap-0.5" aria-label="Menu mobile">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="link-nav rounded-lg px-3 py-3 transition-colors"
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-body), sans-serif",
                  color: activeSection === href.replace(/^#/, "")
                    ? "var(--color-text)"
                    : "var(--color-muted)",
                  background: activeSection === href.replace(/^#/, "")
                    ? "rgba(255,255,255,0.06)"
                    : "transparent",
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-cta-hero mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded px-4 text-sm font-medium uppercase tracking-wide text-white"
            >
              WhatsApp ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
