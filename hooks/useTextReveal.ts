"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useTextReveal(
  selector: string = "[data-text-reveal]",
  fromScroll: boolean = false
) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Ensure elements are visible regardless
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });

    if (prefersReduced) return;

    // Dynamic import to avoid SSR issues with SplitType
    import("split-type").then(({ default: SplitType }) => {
      const splits: InstanceType<typeof SplitType>[] = [];

      elements.forEach((el) => {
        try {
          const split = new SplitType(el as HTMLElement, { types: "lines" });
          splits.push(split);

          split.lines?.forEach((line) => {
            const wrapper = document.createElement("div");
            wrapper.style.overflow = "hidden";
            line.parentNode?.insertBefore(wrapper, line);
            wrapper.appendChild(line);
          });

          if (split.lines && split.lines.length > 0) {
            const triggerConfig = fromScroll
              ? {
                  scrollTrigger: {
                    trigger: el,
                    start: "top 88%",
                    toggleActions: "play none none none",
                    once: true,
                  },
                }
              : {};

            gsap.fromTo(
              split.lines,
              { yPercent: 105, opacity: 0 },
              {
                ...triggerConfig,
                yPercent: 0,
                opacity: 1,
                duration: 0.95,
                stagger: 0.07,
                ease: "power4.out",
                delay: fromScroll ? 0 : 0.15,
              }
            );
          }
        } catch {
          // Fallback: element stays visible
          (el as HTMLElement).style.opacity = "1";
        }
      });

      return () => {
        splits.forEach((s) => s.revert());
      };
    }).catch(() => {
      // SplitType failed - elements are already visible (set above)
    });
  }, [selector, fromScroll]);
}
