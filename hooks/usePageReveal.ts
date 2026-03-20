"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function usePageReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Ensure elements are visible as fallback
    const elements = document.querySelectorAll("[data-reveal]");
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });

    if (prefersReduced) return;

    gsap.fromTo(
      "[data-reveal]",
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, []);
}
