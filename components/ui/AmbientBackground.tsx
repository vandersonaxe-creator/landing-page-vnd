"use client";

// Ambient background: 3 large blurred gradient orbs that drift slowly.
// Used by Stripe, Framer, Linear — adds depth without any recognizable shapes.
// Pure CSS animation, pointer-events disabled, z-index: -1 (behind everything).

export function AmbientBackground() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes orb-1 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          33%      { transform: translate(60px, -40px) scale(1.05); }
          66%      { transform: translate(-30px, 50px) scale(0.97); }
        }
        @keyframes orb-2 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          33%      { transform: translate(-50px, 60px) scale(1.04); }
          66%      { transform: translate(40px, -30px) scale(0.98); }
        }
        @keyframes orb-3 {
          0%,100% { transform: translate(0px, 0px) scale(1); }
          50%      { transform: translate(30px, 40px) scale(1.06); }
        }
      `}</style>

      {/* Orb 1 — top-left, accent color tint */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "55vw",
          maxWidth: "700px",
          maxHeight: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,76,30,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "orb-1 38s ease-in-out infinite",
        }}
      />

      {/* Orb 2 — bottom-right, warm neutral */}
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,76,30,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "orb-2 46s ease-in-out infinite",
        }}
      />

      {/* Orb 3 — center-right, very subtle warm */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "10%",
          width: "40vw",
          height: "40vw",
          maxWidth: "500px",
          maxHeight: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(180,140,100,0.04) 0%, transparent 70%)",
          filter: "blur(50px)",
          animation: "orb-3 54s ease-in-out infinite",
        }}
      />
    </div>
  );
}
