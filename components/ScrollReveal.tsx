"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "section" | "title" | "card" | "cta" | "block";

const STAGGER_MS = 80;

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
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [visible, setVisible] = useState(prefersReduced);
  const [motionOk] = useState(!prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        const delay = variant === "card" ? staggerIndex * STAGGER_MS : 0;
        const t = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(t);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced, variant, staggerIndex]);

  const inViewClass = visible ? "is-in-view" : "";

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${inViewClass} ${className}`.trim()}
      style={
        motionOk && variant === "card" && staggerIndex > 0 && !visible
          ? { transitionDelay: `${staggerIndex * STAGGER_MS}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
