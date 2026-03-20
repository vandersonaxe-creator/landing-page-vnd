"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useTextReveal } from "@/hooks/useTextReveal";
import { Phone3DMockup } from "@/components/ui/Phone3DMockup";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  usePageReveal();
  useTextReveal("[data-text-reveal]", false);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    const update = () => {
      const startY = heroEl.getBoundingClientRect().top + window.scrollY || 0;
      const heroHeight = Math.max(1, heroEl.offsetHeight || 1);
      const endY = startY + heroHeight;
      const scrollY = window.scrollY || 0;
      const t = Math.min(1, Math.max(0, (scrollY - startY) / (endY - startY)));
      const shift = (t - 0.5) * 2 * 12;
      heroEl.style.setProperty("--parallax-y", `${Math.round(shift * 10) / 10}px`);
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
    <section
      id="inicio"
      ref={heroRef}
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
      style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 h-[600px] w-[600px] rounded-full blur-[120px]"
        style={{ background: "rgba(86,168,190,0.06)", transform: "translate3d(0,var(--parallax-y,0),0)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ background: "rgba(232,76,30,0.05)" }}
        aria-hidden
      />

      <div className="container relative z-[2] mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* ─── LEFT COLUMN ─── */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <div data-reveal>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "var(--color-brand)",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--color-accent)" }}
                />
                Estrutura Digital · 2025
              </span>
            </div>

            {/* H1 — text reveal por linha */}
            <h1
              data-text-reveal
              className="font-bold text-[var(--color-text)]"
              style={{
                fontSize: "clamp(32px, 4.5vw, 62px)",
                lineHeight: "1.05",
                letterSpacing: "-0.03em",
              }}
            >
              Organizamos, corrigimos e implantamos a estrutura digital que sua
              empresa precisa para atrair, atender e converter melhor
            </h1>

            {/* Subtítulo */}
            <p
              data-reveal
              className="max-w-xl leading-relaxed"
              style={{
                fontSize: "clamp(15px, 1.2vw, 17px)",
                color: "var(--color-muted)",
                fontFamily: "var(--font-dm-sans), sans-serif",
              }}
            >
              Se sua empresa ainda não tem presença digital bem organizada, nós
              estruturamos do zero. Se já existe operação, corrigimos gargalos,
              melhoramos processos, implantamos automações, páginas, integrações,
              atendimento, tráfego e inteligência artificial conforme a
              necessidade real do negócio.
            </p>

            {/* CTA */}
            <div data-reveal>
              <Link
                href="#agendar"
                className="btn-cta-hero inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Agendar análise estratégica
              </Link>
            </div>

            {/* Trust badges */}
            <div
              data-reveal
              className="flex items-center gap-4 flex-wrap"
              style={{ paddingTop: "8px" }}
            >
              {["Sem contrato fixo", "Atendimento direto", "Entrega por etapas"].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-sans)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ─── RIGHT COLUMN — Phone 3D Mockup ─── */}
          <div data-reveal className="flex items-center justify-center lg:justify-end">
            <Phone3DMockup duration="0:28" brandName="Vander Pro" />
          </div>
        </div>
      </div>
    </section>
  );
}
