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

    gsap.to(el, {
      y: -10,
      duration: 2.8,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      gsap.to(el, { rotateY: dx * 14, rotateX: -dy * 8, duration: 0.5, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(el, { rotateY: -12, rotateX: 4, duration: 0.8, ease: "power3.out" });
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
    <div className="phone-mockup flex items-center justify-center" style={{ minHeight: "420px" }}>
      <div
        ref={phoneRef}
        className="phone-mockup-inner relative"
        style={{ width: "220px", height: "420px", transform: "rotateY(-12deg) rotateX(4deg)" }}
      >
        {/* Frame */}
        <div
          className="absolute inset-0 rounded-[2.8rem] overflow-hidden"
          style={{
            background: "#1a1a1a",
            border: "2px solid rgba(255,255,255,0.12)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Screen */}
          <div className="absolute inset-[3px] rounded-[2.5rem] overflow-hidden" style={{ background: "#080808" }}>
            <div className="w-full h-full flex flex-col">
              {/* Status bar */}
              <div className="flex justify-between items-center px-5 pt-3 pb-1">
                <span className="text-[10px] text-[var(--color-text)] font-medium" style={{ fontFamily: "var(--font-dm-sans)" }}>9:41</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3.5 h-2 rounded-sm" style={{ background: "linear-gradient(90deg, var(--color-brand) 75%, transparent 75%)", border: "1px solid rgba(255,255,255,0.3)" }} />
                </div>
              </div>
              {/* Notch */}
              <div className="flex justify-center pb-2">
                <div className="rounded-full" style={{ width: "70px", height: "6px", background: "#1a1a1a" }} />
              </div>
              {/* App content */}
              <div className="flex-1 flex flex-col items-center justify-center px-5 gap-4">
                <div className="flex items-center justify-center rounded-2xl" style={{ width: "56px", height: "56px", background: "linear-gradient(135deg, #337182, #56a8be)", boxShadow: "0 8px 20px rgba(86,168,190,0.4)" }}>
                  <span className="text-white font-bold" style={{ fontSize: "22px", fontFamily: "var(--font-display)" }}>V</span>
                </div>
                <div className="text-center">
                  <p className="font-bold text-[var(--color-text)] text-sm" style={{ fontFamily: "var(--font-display)" }}>{brandName}</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-sans)" }}>Estrutura Digital</p>
                </div>
                <div className="flex items-center justify-center rounded-full" style={{ width: "52px", height: "52px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <p className="text-xs" style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-sans)" }}>{duration}</p>
                <div className="w-full rounded-full overflow-hidden" style={{ height: "3px", background: "rgba(255,255,255,0.08)" }}>
                  <div className="h-full rounded-full" style={{ width: "35%", background: "var(--color-brand)" }} />
                </div>
              </div>
              {/* Home indicator */}
              <div className="flex justify-center pb-3">
                <div className="rounded-full" style={{ width: "100px", height: "4px", background: "rgba(255,255,255,0.2)" }} />
              </div>
            </div>
          </div>
        </div>
        {/* Side buttons */}
        <div className="absolute rounded-full" style={{ right: "-3px", top: "100px", width: "3px", height: "36px", background: "#2a2a2a" }} />
        <div className="absolute rounded-full" style={{ left: "-3px", top: "90px", width: "3px", height: "28px", background: "#2a2a2a" }} />
        <div className="absolute rounded-full" style={{ left: "-3px", top: "128px", width: "3px", height: "28px", background: "#2a2a2a" }} />
        {/* Reflection */}
        <div className="absolute inset-0 rounded-[2.8rem] pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)" }} aria-hidden />
      </div>
    </div>
  );
}

export function Phone3DMockupMobile({
  duration = "0:28",
  brandName = "Vander Pro",
}: Phone3DMockupProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
      {/* Badge */}
      <div style={{
        background: "rgba(232,76,30,0.12)",
        border: "0.5px solid rgba(232,76,30,0.35)",
        borderRadius: "20px",
        padding: "4px 14px",
        fontSize: "10px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#e84c1e",
        fontFamily: "var(--font-body), sans-serif",
      }}>
        VSL em breve · ~{duration}
      </div>

      {/* Phone */}
      <div style={{
        width: "180px",
        height: "360px",
        background: "#1a1a1a",
        borderRadius: "32px",
        border: "1.5px solid rgba(255,255,255,0.12)",
        position: "relative",
        transformStyle: "preserve-3d",
        boxShadow: "0 32px 80px rgba(0,0,0,0.7), -4px -4px 30px rgba(232,76,30,0.08)",
        animation: "phoneFloat 4s ease-in-out infinite",
      }}>
        {/* Screen */}
        <div style={{
          position: "absolute",
          inset: "5px",
          borderRadius: "27px",
          background: "#080808",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}>
          {/* Status bar */}
          <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px 4px", fontSize: "9px", color: "#f0ede6", fontWeight: 600, flexShrink: 0 }}>
            <span>9:41</span>
            <div style={{ width: "60px", height: "20px", background: "#0a0a0a", borderRadius: "16px" }} />
            <span>100%</span>
          </div>

          {/* Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "10px 14px 14px" }}>
            {/* Thumbnail area */}
            <div style={{
              width: "100%",
              aspectRatio: "16/9",
              background: "#111",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
              border: "0.5px solid rgba(255,255,255,0.08)",
              marginBottom: "12px",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 80% at 40% 50%, rgba(232,76,30,0.18) 0%, transparent 70%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px" }}>
                <span style={{ fontSize: "12px", fontWeight: 800, color: "#f0ede6", letterSpacing: "-0.02em", fontFamily: "var(--font-display), sans-serif" }}>{brandName}</span>
                <span style={{ fontSize: "7px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", fontFamily: "var(--font-body), sans-serif" }}>Estrutura Digital</span>
              </div>
              {/* Play button */}
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1.5px solid rgba(240,237,230,0.3)", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(8,8,8,0.65)" }}>
                  <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid #f0ede6", marginLeft: "2px" }} />
                </div>
              </div>
              {/* Duration badge */}
              <div style={{ position: "absolute", bottom: "6px", right: "8px", background: "rgba(8,8,8,0.75)", borderRadius: "3px", padding: "2px 5px", fontSize: "7px", color: "#f0ede6", fontFamily: "var(--font-body), sans-serif" }}>{duration}</div>
            </div>

            {/* Title */}
            <div style={{ fontSize: "10px", fontWeight: 700, color: "#f0ede6", textAlign: "center", lineHeight: 1.3, marginBottom: "8px", fontFamily: "var(--font-display), sans-serif" }}>
              Como estruturamos sua<br />operação digital
            </div>

            {/* CTA button */}
            <div style={{ width: "100%", padding: "8px", background: "#e84c1e", borderRadius: "6px", fontSize: "9px", fontWeight: 500, color: "white", textAlign: "center", fontFamily: "var(--font-body), sans-serif" }}>
              Agendar análise ↗
            </div>
          </div>

          {/* Home indicator */}
          <div style={{ display: "flex", justifyContent: "center", paddingBottom: "8px" }}>
            <div style={{ width: "60px", height: "3px", background: "rgba(255,255,255,0.2)", borderRadius: "2px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
