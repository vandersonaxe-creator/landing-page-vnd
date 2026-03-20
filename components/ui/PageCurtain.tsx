"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function PageCurtain() {
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const curtain = curtainRef.current;
    if (!curtain) return;

    // Slight delay to ensure font/layout has settled
    gsap.to(curtain, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.9,
      ease: "power4.inOut",
      delay: 0.15,
      onComplete: () => {
        curtain.style.display = "none";
      },
    });
  }, []);

  return (
    <div
      ref={curtainRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        background: "#111111",
        zIndex: 9998,
        transformOrigin: "top",
        pointerEvents: "none",
      }}
    />
  );
}
