"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global scroll-reveal initializer — must be rendered ONCE on the page.
 * Animates all [data-scroll-reveal] elements on first scroll into view.
 */
export default function ScrollRevealInit() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // Small delay to ensure all components are mounted
    const timer = window.setTimeout(() => {
      const elements = document.querySelectorAll("[data-scroll-reveal]");

      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none",
              once: true,
            },
            // Stagger for sibling cards (elements with same parent)
            delay: 0,
          }
        );
      });
    }, 120);

    return () => {
      window.clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
