"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealInit() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Always ensure elements are visible (fallback)
    document
      .querySelectorAll("[data-scroll-reveal], [data-text-reveal]")
      .forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
      });

    if (prefersReduced) return;

    const timer = window.setTimeout(() => {
      // ── Scroll reveal ──
      document.querySelectorAll("[data-scroll-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
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
          }
        );
      });

      // ── Text reveal (line by line) ──
      import("split-type")
        .then(({ default: SplitType }) => {
          document.querySelectorAll("[data-text-reveal]").forEach((el) => {
            const split = new SplitType(el as HTMLElement, { types: "lines" });
            const lines = split.lines ?? [];

            if (lines.length === 0) return;

            lines.forEach((line) => {
              const wrapper = document.createElement("div");
              wrapper.style.overflow = "hidden";
              wrapper.style.display = "block";
              line.parentNode?.insertBefore(wrapper, line);
              wrapper.appendChild(line);
            });

            gsap.fromTo(
              lines,
              { y: "100%", opacity: 0 },
              {
                y: "0%",
                opacity: 1,
                duration: 0.85,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  toggleActions: "play none none none",
                  once: true,
                },
              }
            );
          });
        })
        .catch(() => {
          // SplitType failed — text remains visible (fallback already applied)
        });
    }, 150);

    return () => {
      window.clearTimeout(timer);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
