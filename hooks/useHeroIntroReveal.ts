"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Anima título, subtítulo e mockup (data-hero-intro) após o evento da intro,
 * com delay de 0.2s em relação ao início do zoom do olho.
 */
export function useHeroIntroReveal() {
  const playedRef = useRef(false);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const els = document.querySelectorAll("[data-hero-intro]");
    if (prefersReduced) {
      gsap.set(els, { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }
    gsap.set(els, { opacity: 0, y: 40 });
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const animateIn = (delay: number) => {
      if (playedRef.current) return;
      playedRef.current = true;
      gsap.to("[data-hero-intro]", {
        y: 0,
        opacity: 1,
        duration: 0.95,
        stagger: 0.1,
        ease: "power3.out",
        delay,
        clearProps: "transform",
      });
    };

    const onIntroExit = () => animateIn(0.2);

    window.addEventListener("intro-exit-start", onIntroExit);

    const curtain = document.querySelector("[data-page-curtain]");
    if (curtain && window.getComputedStyle(curtain).display === "none") {
      animateIn(0.2);
    }

    return () => window.removeEventListener("intro-exit-start", onIntroExit);
  }, []);
}
