"use client";

import { useState } from "react";
import Image from "next/image";

interface VSLContainerProps {
  videoUrl?: string;
  thumbnailUrl?: string;
  isYouTube?: boolean;
}

export function VSLContainer({
  videoUrl,
  thumbnailUrl,
  isYouTube = false,
}: VSLContainerProps) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoUrl) return;
    setPlaying(true);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Floating badge — only when no video yet */}
      {!videoUrl && (
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(232,76,30,0.1)",
            border: "0.5px solid rgba(232,76,30,0.3)",
            borderRadius: "20px",
            padding: "5px 14px",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--color-accent)",
              flexShrink: 0,
            }}
            className="animate-pulse"
          />
          VSL em breve · ~30s
        </div>
      )}

      {/* Main video container */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          border: "0.5px solid var(--color-border)",
          background: "#0e0e0e",
          boxShadow:
            "0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.10)",
        }}
      >
        {/* Playing state */}
        {playing && videoUrl && (
          isYouTube ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <video
              src={videoUrl}
              autoPlay
              controls
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )
        )}

        {/* Placeholder / thumbnail */}
        {!playing && (
          <>
            {/* Dark gradient background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 80% 70% at 30% 60%, rgba(232,76,30,0.14) 0%, transparent 60%)," +
                  "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 50%)",
              }}
            />

            {/* Subtle grid */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.04,
                backgroundImage:
                  "linear-gradient(rgba(240,237,230,0.5) 1px, transparent 1px)," +
                  "linear-gradient(90deg, rgba(240,237,230,0.5) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Custom thumbnail */}
            {thumbnailUrl && (
              <Image
                src={thumbnailUrl}
                alt="VSL thumbnail"
                fill
                style={{ objectFit: "cover", opacity: 0.7 }}
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            )}

            {/* Center branding when no thumbnail */}
            {!thumbnailUrl && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(18px, 3vw, 28px)",
                    fontWeight: 800,
                    color: "#f0ede6",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Vander Pro
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#666",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  Estrutura Digital
                </span>
              </div>
            )}

            {/* Play button overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                cursor: videoUrl ? "pointer" : "default",
              }}
              onClick={handlePlay}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  border: `1.5px solid ${videoUrl ? "rgba(240,237,230,0.55)" : "rgba(240,237,230,0.2)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(8,8,8,0.55)",
                  backdropFilter: "blur(8px)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  if (videoUrl) {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 10px rgba(232,76,30,0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: `18px solid ${videoUrl ? "#f0ede6" : "rgba(240,237,230,0.3)"}`,
                    marginLeft: "4px",
                  }}
                />
              </div>

              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: videoUrl
                    ? "rgba(240,237,230,0.75)"
                    : "rgba(240,237,230,0.3)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {videoUrl ? "Assistir — ~30s" : "Vídeo em produção"}
              </span>
            </div>

            {/* Duration chip */}
            <div
              style={{
                position: "absolute",
                bottom: "14px",
                right: "16px",
                background: "rgba(8,8,8,0.75)",
                backdropFilter: "blur(8px)",
                borderRadius: "6px",
                padding: "4px 10px",
                fontSize: "11px",
                color: "rgba(240,237,230,0.65)",
                border: "0.5px solid rgba(255,255,255,0.08)",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              0:28
            </div>
          </>
        )}
      </div>

      {/* Floating info cards — desktop only */}
      <div className="hidden md:block">
        {/* Card: duration */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "-16px",
            background: "rgba(14,14,14,0.92)",
            backdropFilter: "blur(12px)",
            border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            padding: "10px 16px",
            animation: "vslCardFloat1 4s ease-in-out infinite",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: "9px",
              color: "#666",
              marginBottom: "3px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Duração
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "17px",
              fontWeight: 700,
              color: "var(--color-accent)",
            }}
          >
            ~30s
          </div>
        </div>

        {/* Card: clients */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "-16px",
            background: "rgba(14,14,14,0.92)",
            backdropFilter: "blur(12px)",
            border: "0.5px solid rgba(255,255,255,0.1)",
            borderRadius: "10px",
            padding: "10px 16px",
            animation: "vslCardFloat2 4s ease-in-out infinite",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: "9px",
              color: "#666",
              marginBottom: "3px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Empresas atendidas
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "17px",
              fontWeight: 700,
              color: "#f0ede6",
            }}
          >
            47<span style={{ color: "var(--color-accent)" }}>+</span>
          </div>
        </div>
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes vslCardFloat1 {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }
        @keyframes vslCardFloat2 {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}

/*
  ── COMO USAR ──────────────────────────────────────────────
  Sem vídeo (estado atual):
    <VSLContainer />

  Com YouTube (quando o vídeo estiver pronto):
    <VSLContainer videoUrl="ID_DO_VIDEO" isYouTube />

  Com thumbnail customizada:
    <VSLContainer thumbnailUrl="/images/vsl-thumb.jpg" videoUrl="ID" isYouTube />
*/
