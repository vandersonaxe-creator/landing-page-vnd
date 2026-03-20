"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WordRevealProps {
  text: string;
  fontSize?: string;
  className?: string;
}

export function WordReveal({
  text,
  fontSize = "clamp(24px, 3.5vw, 48px)",
  className,
}: WordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLElement>("[data-word]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 25%",
            scrub: 1.8,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        fontFamily: "var(--font-display)",
        fontSize,
        fontWeight: 800,
        lineHeight: 1.2,
        letterSpacing: "-0.025em",
        color: "var(--color-text)",
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          data-word
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            opacity: 0.12,
            willChange: "opacity",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
