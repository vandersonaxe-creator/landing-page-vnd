"use client";

import { useEffect, useState } from "react";

// ── SVG icon components ──────────────────────────────────────

function GoogleG({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M43.6 24.5c0-1.6-.15-3.1-.42-4.5H24v8.52h11.04c-.48 2.4-1.92 4.44-4.08 5.8v4.8h6.6C41.12 35.56 43.6 30.4 43.6 24.5z"
        fill="#4285F4"
      />
      <path
        d="M24 44c5.4 0 9.94-1.8 13.26-4.88l-6.6-4.8c-1.8 1.2-4.1 1.9-6.66 1.9-5.12 0-9.46-3.46-11.02-8.1H6.24v4.96C9.54 40.12 16.22 44 24 44z"
        fill="#34A853"
      />
      <path
        d="M12.98 28.12A11.87 11.87 0 0 1 12.4 24c0-1.44.24-2.84.58-4.12V14.92H6.24A19.97 19.97 0 0 0 4 24c0 3.22.76 6.28 2.24 8.96l6.74-4.84z"
        fill="#FBBC05"
      />
      <path
        d="M24 12.18c2.88 0 5.46 1 7.5 2.94l5.62-5.62C33.92 6.34 29.38 4.4 24 4.4c-7.78 0-14.46 3.88-17.76 9.52l6.74 4.96C14.54 15.22 18.88 12.18 24 12.18z"
        fill="#EA4335"
      />
    </svg>
  );
}

function FacebookF({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="10" fill="#1877F2" />
      <path
        d="M31.5 16H27.5C26.4 16 26 16.5 26 17.6V21h5.5l-.7 5H26V38h-5.5V26h-3.5v-5h3.5v-3.4C20.5 13.4 22.8 11 26.7 11c1.9 0 3.8.2 5.3.4V16z"
        fill="white"
      />
    </svg>
  );
}

function InstagramCamera({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id={`ig-${size}`} x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FED373" />
          <stop offset="30%" stopColor="#F15245" />
          <stop offset="65%" stopColor="#D92E7F" />
          <stop offset="100%" stopColor="#9B36B7" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="11" fill={`url(#ig-${size})`} />
      <rect x="11" y="11" width="26" height="26" rx="7" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="33.5" cy="14.5" r="2" fill="white" />
    </svg>
  );
}

// ── Types ────────────────────────────────────────────────────

type IconType = "google" | "facebook" | "instagram";

interface Flake {
  id: number;
  type: IconType;
  x: number;        // % from left
  size: number;     // px
  delay: number;    // s
  duration: number; // s
  opacity: number;
  drift: number;    // px horizontal drift
}

const ICON_TYPES: IconType[] = ["google", "facebook", "instagram"];

// ── Component ────────────────────────────────────────────────

export function SocialSnowfall() {
  const [flakes, setFlakes] = useState<Flake[]>([]);

  useEffect(() => {
    const generated: Flake[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      type: ICON_TYPES[i % 3],
      x: Math.random() * 98,
      size: 12 + Math.random() * 8,        // 12–20px (smaller)
      delay: Math.random() * 36,           // 0–36s stagger (more spread)
      duration: 32 + Math.random() * 22,  // 32–54s (much slower, more elegant)
      opacity: 0.04 + Math.random() * 0.05, // 0.04–0.09 (barely visible)
      drift: (Math.random() - 0.5) * 50,  // ±25px (subtler drift)
    }));
    setFlakes(generated);
  }, []);

  if (!flakes.length) return null;

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
        @keyframes social-fall {
          0%   { transform: translateY(-60px) translateX(0px) rotate(0deg); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateY(110vh) translateX(var(--sf-drift)) rotate(180deg); opacity: 0; }
        }
      `}</style>

      {flakes.map((f) => (
        <div
          key={f.id}
          style={
            {
              position: "absolute",
              left: `${f.x}%`,
              top: "-60px",
              opacity: f.opacity,
              filter: "grayscale(100%)",
              "--sf-drift": `${f.drift}px`,
              animation: `social-fall ${f.duration}s ${f.delay}s linear infinite`,
              willChange: "transform",
            } as React.CSSProperties
          }
        >
          {f.type === "google"    && <GoogleG       size={f.size} />}
          {f.type === "facebook"  && <FacebookF     size={f.size} />}
          {f.type === "instagram" && <InstagramCamera size={f.size} />}
        </div>
      ))}
    </div>
  );
}
