"use client";

import { useCallback, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

/** Curva próxima a cubic-bezier(0.87, 0, 0.13, 1) */
const INTRO_EASE = CustomEase.create(
  "introLux",
  "M0,0 C0.87,0 0.13,1 1,1"
);

export function PageCurtain() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const exitStartedRef = useRef(false);

  const playExitAnimation = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;

    const curtain = curtainRef.current;
    if (!curtain) return;

    gsap.fromTo(
      curtain,
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        scale: 1.75,
        opacity: 0,
        filter: "blur(22px)",
        duration: 1.1,
        ease: INTRO_EASE,
        transformOrigin: "50% 50%",
        onStart: () => {
          curtain.style.pointerEvents = "none";
          const videoEl = curtain.querySelector("video");
          if (videoEl) (videoEl as HTMLVideoElement).style.pointerEvents = "none";
          window.dispatchEvent(new CustomEvent("intro-exit-start"));
        },
        onComplete: () => {
          curtain.style.display = "none";
          gsap.set(curtain, { clearProps: "scale,opacity,filter,transform" });
        },
      }
    );
  }, []);

  return (
    <div
      ref={curtainRef}
      data-page-curtain
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        background: "#111111",
        zIndex: 9998,
        transformOrigin: "center center",
        pointerEvents: "none",
        overflow: "hidden",
        willChange: "transform, opacity, filter",
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={playExitAnimation}
        onError={playExitAnimation}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 9998,
        }}
      >
        <source src="/intro.webm" type="video/webm" />
      </video>
    </div>
  );
}
