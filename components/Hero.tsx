"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePageReveal } from "@/hooks/usePageReveal";
import { useTextReveal } from "@/hooks/useTextReveal";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const blobRightRef = useRef<HTMLDivElement | null>(null);
  const blobLeftRef = useRef<HTMLDivElement | null>(null);

  usePageReveal();
  useTextReveal("[data-text-reveal]", false);

  useEffect(() => {
    const heroEl = heroRef.current;
    const rightEl = blobRightRef.current;
    const leftEl = blobLeftRef.current;
    if (!heroEl || !rightEl || !leftEl) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    const update = () => {
      const startY =
        heroEl.getBoundingClientRect().top + window.scrollY || 0;
      const heroHeight = Math.max(1, heroEl.offsetHeight || 1);
      const endY = startY + heroHeight;

      const scrollY = window.scrollY || 0;
      const t = Math.min(1, Math.max(0, (scrollY - startY) / (endY - startY)));

      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const maxRight = isMobile ? 10 : 16;
      const maxLeft = isMobile ? 7 : 12;

      const rightShift = (t - 0.5) * 2 * maxRight;
      const leftShift = (t - 0.5) * 2 * maxLeft;

      const r = Math.round(rightShift * 10) / 10;
      const l = Math.round(leftShift * 10) / 10;

      rightEl.style.transform = `translate3d(0, ${r}px, 0)`;
      leftEl.style.transform = `translate3d(0, ${l}px, 0)`;
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
    <section
      id="inicio"
      ref={heroRef}
      className="relative overflow-hidden bg-[#0a0a0a] py-12 md:py-20 lg:py-28"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#56a8be]/[0.04] via-transparent to-transparent"
        aria-hidden
      />
      <div
        aria-hidden
        className="premium-ambient-layer premium-ambient-layer--hero"
      />
      <div
        ref={blobRightRef}
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#56a8be]/[0.04] blur-3xl will-change-transform"
        aria-hidden
      />
      <div
        ref={blobLeftRef}
        className="pointer-events-none absolute bottom-1/4 left-0 h-[350px] w-[350px] rounded-full bg-[#e84c1e]/[0.04] blur-3xl will-change-transform"
        aria-hidden
      />

      <div className="container relative z-[2] mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Subtítulo */}
          <div
            data-reveal
            className="order-1 lg:col-start-1 lg:row-start-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
              Estrutura Digital para Empresas que Querem Crescer
            </p>
          </div>

          {/* Título H1 com text reveal por linha */}
          <div className="order-2 lg:col-start-1 lg:row-start-2">
            <h1
              data-text-reveal
              className="mt-2 font-bold leading-tight text-[var(--color-text)] lg:mt-3"
              style={{ fontSize: "clamp(28px, 4.5vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.03em" }}
            >
              Organizamos, corrigimos e implantamos a estrutura digital que sua
              empresa precisa para atrair, atender e converter melhor
            </h1>
          </div>

          {/* VSL */}
          <div
            data-reveal
            className="order-3 lg:col-start-2 lg:row-start-1 lg:row-span-4"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#111] shadow-[0_20px_60px_-12px_rgba(0,0,0,0.7)]"
              style={{ boxShadow: "0 20px 60px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
              <div className="aspect-video flex flex-col items-center justify-center p-6 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white shadow-inner transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
                  <svg className="h-7 w-7 ml-1 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 text-sm font-medium text-[var(--color-muted)] sm:mt-5">
                  VSL em breve (≈30s)
                </p>
              </div>
              <p className="border-t border-[rgba(255,255,255,0.06)] bg-[#111]/95 px-4 py-3 text-center text-xs text-[var(--color-muted)] sm:px-5 sm:py-3.5">
                Veja em poucos segundos como funciona nossa proposta
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            data-reveal
            className="order-4 flex flex-col lg:col-start-1 lg:row-start-4"
          >
            <Link
              href="#agendar"
              className="btn-cta-hero inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg px-7 py-4 text-sm font-semibold uppercase leading-snug text-white tracking-wide"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Agendar análise estratégica
            </Link>
          </div>

          {/* Parágrafo descritivo */}
          <div
            data-reveal
            className="order-5 lg:col-start-1 lg:row-start-3"
          >
            <p className="mt-1 text-base leading-relaxed text-[var(--color-muted)] md:text-lg lg:mt-0">
              Se sua empresa ainda não tem presença digital bem organizada, nós
              estruturamos do zero. Se já existe operação, corrigimos gargalos,
              melhoramos processos, implantamos automações, páginas, integrações,
              atendimento, tráfego e inteligência artificial conforme a
              necessidade real do negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
