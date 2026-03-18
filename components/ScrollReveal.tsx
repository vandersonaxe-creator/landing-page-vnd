"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "section" | "title" | "card" | "cta" | "block";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  staggerIndex?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  variant = "section",
  staggerIndex = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [visible, setVisible] = useState(false);

  // Stagger mais discreto no mobile.
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 640px)").matches;
  const staggerMs = isMobile ? 55 : 80;

  // Garante integridade com reduced motion (evita "conteúdo invisível" no primeiro paint).
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const reduced = mql.matches;
      setPrefersReduced(reduced);
      setVisible(reduced);
    };

    apply();

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", apply);
      return () => mql.removeEventListener("change", apply);
    }

    mql.addListener(apply);
    return () => mql.removeListener(apply);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;

    let timeout: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry || !entry.isIntersecting) return;

        const delay = variant === "card" ? staggerIndex * staggerMs : 0;
        timeout = window.setTimeout(() => setVisible(true), delay);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    observer.observe(el);

    return () => {
      if (timeout) window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, [prefersReduced, variant, staggerIndex, staggerMs]);

  const inViewClass = visible ? "is-in-view" : "";

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${inViewClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

