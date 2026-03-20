"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Step 1 — detectar touch APENAS no cliente, após montagem
  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    setMounted(true);
  }, []);

  // Step 2 — iniciar GSAP apenas após confirmação de mouse device
  useEffect(() => {
    if (!mounted || isTouchDevice) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Posição inicial fora da tela (evita flash no canto 0,0)
    gsap.set(cursor, { x: -100, y: -100 });
    gsap.set(dot, { x: -100, y: -100 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(dot, {
        x: e.clientX - 3,
        y: e.clientY - 3,
        duration: 0.1,
      });
    };

    const expand = () =>
      gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: "power2.out" });
    const shrink = () =>
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });

    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-expand], input, textarea, select, label"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, [mounted, isTouchDevice]);

  // Não renderiza NADA até montar no cliente, e nunca em touch devices
  if (!mounted || isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden
        suppressHydrationWarning
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          border: "1.5px solid rgba(17,17,17,0.45)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          backdropFilter: "none",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        suppressHydrationWarning
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          background: "var(--color-accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
    </>
  );
}
