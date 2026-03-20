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
      // Animate color from readable gray → full dark text
      // Opacity stays high so every word is always readable
      gsap.fromTo(
        words,
        { color: "#b0b0b0", opacity: 0.55 },
        {
          color: "#111111",
          opacity: 1,
          stagger: 0.07,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "bottom 30%",
            scrub: 2,
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
        fontWeight: 700,
        lineHeight: 1.45,
        letterSpacing: "-0.01em",
        color: "var(--color-text)",
        wordSpacing: "0.05em",
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          data-word
          style={{
            display: "inline",
            color: "#b0b0b0",
            opacity: 0.55,
            willChange: "color, opacity",
          }}
        >
          {word}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
}
