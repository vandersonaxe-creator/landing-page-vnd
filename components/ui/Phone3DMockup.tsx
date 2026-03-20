"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Phone3DMockupProps {
  duration?: string;
  brandName?: string;
}

export function Phone3DMockup({
  duration = "0:28",
  brandName = "Vander Pro",
}: Phone3DMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = phoneRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    // Floating animation
    gsap.to(el, {
      y: -10,
      duration: 2.8,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Mouse tilt
    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      gsap.to(el, {
        rotateY: dx * 14,
        rotateX: -dy * 8,
        duration: 0.5,
        ease: "power2.out",
      });
    };
    const onLeave = () => {
      gsap.to(el, {
        rotateY: -12,
        rotateX: 4,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div
      className="phone-mockup flex items-center justify-center"
      style={{ minHeight: "420px" }}
    >
      <div
        ref={phoneRef}
        className="phone-mockup-inner relative"
        style={{
          width: "220px",
          height: "420px",
          transform: "rotateY(-12deg) rotateX(4deg)",
        }}
      >
        {/* Phone frame */}
        <div
          className="absolute inset-0 rounded-[2.8rem] overflow-hidden"
          style={{
            background: "#1a1a1a",
            border: "2px solid rgba(255,255,255,0.12)",
            boxShadow:
              "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Screen */}
          <div
            className="absolute inset-[3px] rounded-[2.5rem] overflow-hidden"
            style={{ background: "#080808" }}
          >
            {/* Screen content */}
            <div className="w-full h-full flex flex-col">
              {/* Status bar */}
              <div className="flex justify-between items-center px-5 pt-3 pb-1">
                <span
                  className="text-[10px] text-[var(--color-text)] font-medium"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  9:41
                </span>
                <div className="flex gap-1 items-center">
                  <div
                    className="w-3.5 h-2 rounded-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-brand) 75%, transparent 75%)",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  />
                </div>
              </div>
              {/* Notch */}
              <div className="flex justify-center pb-2">
                <div
                  className="rounded-full"
                  style={{
                    width: "70px",
                    height: "6px",
                    background: "#1a1a1a",
                  }}
                />
              </div>

              {/* App content */}
              <div className="flex-1 flex flex-col items-center justify-center px-5 gap-4">
                {/* Logo mark */}
                <div
                  className="flex items-center justify-center rounded-2xl"
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "linear-gradient(135deg, #337182, #56a8be)",
                    boxShadow: "0 8px 20px rgba(86,168,190,0.4)",
                  }}
                >
                  <span
                    className="text-white font-bold"
                    style={{ fontSize: "22px", fontFamily: "var(--font-syne)" }}
                  >
                    V
                  </span>
                </div>

                {/* Title */}
                <div className="text-center">
                  <p
                    className="font-bold text-[var(--color-text)] text-sm"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {brandName}
                  </p>
                  <p
                    className="text-[10px] mt-0.5"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-sans)" }}
                  >
                    Estrutura Digital
                  </p>
                </div>

                {/* Play button */}
                <div
                  className="flex items-center justify-center rounded-full cursor-none"
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="ml-0.5"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Duration */}
                <p
                  className="text-xs"
                  style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-sans)" }}
                >
                  {duration}
                </p>

                {/* Progress bar */}
                <div
                  className="w-full rounded-full overflow-hidden"
                  style={{ height: "3px", background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "35%",
                      background: "var(--color-brand)",
                    }}
                  />
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pb-3">
                <div
                  className="rounded-full"
                  style={{
                    width: "100px",
                    height: "4px",
                    background: "rgba(255,255,255,0.2)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div
          className="absolute rounded-full"
          style={{
            right: "-3px",
            top: "100px",
            width: "3px",
            height: "36px",
            background: "#2a2a2a",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            left: "-3px",
            top: "90px",
            width: "3px",
            height: "28px",
            background: "#2a2a2a",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            left: "-3px",
            top: "128px",
            width: "3px",
            height: "28px",
            background: "#2a2a2a",
          }}
        />

        {/* Reflection */}
        <div
          className="absolute inset-0 rounded-[2.8rem] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
