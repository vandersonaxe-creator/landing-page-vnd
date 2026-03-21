"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";

// ─────────────────────────────────────────────────────────────────────────────
// TODO: Substitua esta URL pela URL do seu vídeo VSL real (YouTube ou outro)
// Exemplo: "https://www.youtube.com/watch?v=SEU_ID_AQUI"
// ─────────────────────────────────────────────────────────────────────────────
const VSL_YOUTUBE_URL = "https://youtube.com/shorts/mMmLXTaz_jc";

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/+$/, "");
    const shortsMatch = path.match(/\/shorts\/([^/]+)/);
    if (shortsMatch?.[1]) return shortsMatch[1];
    const watchId = u.searchParams.get("v");
    if (watchId) return watchId;
    if (u.hostname === "youtu.be") return path.slice(1);
    const embedMatch = path.match(/\/embed\/([^/]+)/);
    if (embedMatch?.[1]) return embedMatch[1];
    return null;
  } catch {
    return null;
  }
}

export default function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(VSL_YOUTUBE_URL);

  const thumbnail = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : null;

  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&controls=1&modestbranding=1`
    : null;

  return (
    <section
      id="vsl"
      style={{
        background: "var(--color-surface)",
        borderBottom: "0.5px solid var(--color-border)",
        padding:
          "clamp(56px, 8vw, 96px) clamp(24px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <div
          data-scroll-reveal
          style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              fontFamily: "var(--font-body), sans-serif",
              marginBottom: "12px",
            }}
          >
            Como funciona na prática
          </p>
          <h2
            data-text-reveal
            className="font-bold text-[var(--color-text)]"
            style={{ maxWidth: "560px", margin: "0 auto" }}
          >
            Veja em 2 minutos o que entregamos
          </h2>
          <p
            style={{
              marginTop: "14px",
              fontSize: "15px",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body), sans-serif",
              lineHeight: 1.75,
              maxWidth: "440px",
              margin: "14px auto 0",
            }}
          >
            Um vídeo direto sobre como organizamos a estrutura digital de
            empresas que precisam crescer com clareza e consistência.
          </p>
        </div>

        {/* Video player */}
        <div data-scroll-reveal>
          {!isPlaying ? (
            /* ── Thumbnail + play button ── */
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Reproduzir vídeo VSL"
              style={{
                display: "block",
                width: "100%",
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: "16px",
                overflow: "hidden",
                border: "0.5px solid var(--color-border)",
                background: "#111",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {/* Thumbnail */}
              {thumbnail && (
                <Image
                  src={thumbnail}
                  alt={`Assistir vídeo — ${BRAND.name}`}
                  fill
                  className="object-cover"
                  sizes="860px"
                  style={{ transition: "transform 0.5s ease" }}
                />
              )}

              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.38)",
                }}
              />

              {/* Play button */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                }}
              >
                <div
                  className="vsl-play-btn"
                  style={{
                    width: "clamp(64px, 8vw, 88px)",
                    height: "clamp(64px, 8vw, 88px)",
                    borderRadius: "50%",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#111111"
                    style={{ marginLeft: "4px" }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "var(--font-body), sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Assistir agora
                </span>
              </div>

              {/* Duration badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  background: "rgba(0,0,0,0.55)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.9)",
                  fontFamily: "var(--font-body), sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                2:00 min
              </div>
            </button>
          ) : (
            /* ── Embedded iframe ── */
            <div
              style={{
                position: "relative",
                aspectRatio: "16/9",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
                border: "0.5px solid var(--color-border)",
              }}
            >
              {embedUrl && (
                <iframe
                  src={embedUrl}
                  title={`VSL — ${BRAND.name}: Estrutura Digital`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="eager"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              )}
            </div>
          )}
        </div>

        {/* ── Booking CTA — principal call to action below video ── */}
        <div
          data-scroll-reveal
          style={{
            marginTop: "clamp(32px, 5vw, 48px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textAlign: "center",
          }}
        >
          <a
            href="#agendar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 40px",
              borderRadius: "4px",
              background: "var(--color-accent)",
              color: "white",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.01em",
              textDecoration: "none",
              boxShadow: "0 8px 32px rgba(232,76,30,0.30)",
              transition: "transform 0.25s, background 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-2px)";
              el.style.background = "#ff5c2a";
              el.style.boxShadow = "0 14px 40px rgba(232,76,30,0.40)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.background = "var(--color-accent)";
              el.style.boxShadow = "0 8px 32px rgba(232,76,30,0.30)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Agendar análise gratuita
          </a>

          <p style={{
            fontSize: "12px",
            color: "var(--color-muted-2)",
            fontFamily: "var(--font-body), sans-serif",
          }}>
            Sem compromisso · Atendimento direto · Resultado em semanas
          </p>
        </div>

        {/* Trust strip */}
        <div
          data-scroll-reveal
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(20px, 4vw, 48px)",
            marginTop: "clamp(20px, 3vw, 28px)",
            paddingTop: "clamp(16px, 2vw, 24px)",
            borderTop: "0.5px solid var(--color-border)",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "✓", text: "Execução com método" },
            { icon: "✓", text: "Processo estruturado" },
            { icon: "✓", text: "Atendimento direto" },
          ].map((item) => (
            <span
              key={item.text}
              style={{
                fontSize: "12px",
                color: "var(--color-muted)",
                fontFamily: "var(--font-body), sans-serif",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>
                {item.icon}
              </span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
