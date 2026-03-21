"use client";

import { useCallback, useRef } from "react";
import gsap from "gsap";

export function PageCurtain() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const exitStartedRef = useRef(false);

  const playExitAnimation = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;

    const curtain = curtainRef.current;
    if (!curtain) return;

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
        overflow: "hidden",
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
