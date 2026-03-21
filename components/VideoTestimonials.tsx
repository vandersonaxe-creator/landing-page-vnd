"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type VideoItem = {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  enabled: boolean;
};

function getYouTubeId(inputUrl: string) {
  try {
    const url = new URL(inputUrl);
    const path = url.pathname.replace(/\/+$/, "");
    const shortsMatch = path.match(/\/shorts\/([^/]+)/);
    if (shortsMatch?.[1]) return shortsMatch[1];
    const watchId = url.searchParams.get("v");
    if (watchId) return watchId;
    const embedMatch = path.match(/\/embed\/([^/]+)/);
    if (embedMatch?.[1]) return embedMatch[1];
    const youtuBeMatch = url.hostname === "youtu.be" ? path.slice(1) : "";
    if (youtuBeMatch) return youtuBeMatch;
    return null;
  } catch {
    return null;
  }
}

function getEmbedUrl(youtubeId: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const params = new URLSearchParams({
    autoplay: "1",
    controls: "1",
    rel: "0",
    fs: "0",
    playsinline: "1",
    iv_load_policy: "3",
    enablejsapi: "1",
  });
  if (origin) params.set("origin", origin);
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;
}

export default function VideoTestimonials() {
  const videos: VideoItem[] = useMemo(
    () => [
      {
        id: "eletricista",
        title: "Depoimento | Rafael",
        description:
          "Relato real sobre confiança, atendimento e percepção de valor no serviço prestado.",
        youtubeUrl: "https://youtube.com/shorts/mMmLXTaz_jc",
        enabled: true,
      },
      {
        id: "nutricionista",
        title: "Depoimento | Anne",
        description:
          "Relato real sobre experiência, profissionalismo e resultado percebido na estrutura digital.",
        youtubeUrl: "https://youtube.com/shorts/rUkzBbWWbGU",
        enabled: true,
      },
      {
        id: "depoimento-3",
        title: "Depoimento | Cliente",
        description:
          "Relato real sobre clareza, estrutura digital e impacto nos resultados do negócio.",
        youtubeUrl: "https://youtube.com/shorts/RW2aDlfkl-U",
        enabled: true,
      },
    ],
    []
  );

  const visibleVideos = useMemo(() => videos.filter((v) => v.enabled), [videos]);

  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const active = useMemo(() => {
    if (!activeVideoId) return null;
    const video = videos.find((v) => v.id === activeVideoId);
    if (!video) return null;
    const youtubeId = getYouTubeId(video.youtubeUrl);
    if (!youtubeId) return null;
    return { ...video, youtubeId };
  }, [activeVideoId, videos]);

  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const didPreconnectRef = useRef(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const [modalPhase, setModalPhase] = useState<"entering" | "entered" | "exiting">("entering");
  const [playerLoaded, setPlayerLoaded] = useState(false);

  const isReducedMotion = useCallback(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const ensureYouTubePreconnect = useCallback(() => {
    if (typeof document === "undefined") return;
    if (didPreconnectRef.current) return;
    didPreconnectRef.current = true;
    const head = document.head;
    const addPreconnect = (href: string) => {
      if (head.querySelector(`link[rel="preconnect"][href="${href}"]`)) return;
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      link.crossOrigin = "anonymous";
      head.appendChild(link);
    };
    addPreconnect("https://www.youtube-nocookie.com");
    addPreconnect("https://i.ytimg.com");
  }, []);

  const openVideo = useCallback(
    (videoId: string) => {
      lastActiveElementRef.current = (document.activeElement as HTMLElement | null) ?? null;
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setPlayerLoaded(false);
      ensureYouTubePreconnect();
      if (isReducedMotion()) {
        setModalPhase("entered");
      } else {
        setModalPhase("entering");
      }
      setActiveVideoId(videoId);
    },
    [ensureYouTubePreconnect, isReducedMotion]
  );

  const requestClose = useCallback(() => {
    if (!activeVideoId) return;
    if (isReducedMotion()) {
      if (closeTimeoutRef.current) { window.clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; }
      setActiveVideoId(null);
      return;
    }
    setModalPhase("exiting");
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = window.setTimeout(() => { closeTimeoutRef.current = null; setActiveVideoId(null); }, 180);
  }, [activeVideoId, isReducedMotion]);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") requestClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, requestClose]);

  useEffect(() => {
    if (!active) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const raf = window.requestAnimationFrame(() => setModalPhase("entered"));
    const raf2 = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => { window.cancelAnimationFrame(raf); window.cancelAnimationFrame(raf2); };
  }, [activeVideoId, active]);

  useEffect(() => {
    if (!active) return;
    const modalEl = modalRef.current;
    if (!modalEl) return;
    const getFocusable = (): HTMLElement[] => {
      const selectors = ['a[href]', 'button:not([disabled])', '[tabindex]:not([tabindex="-1"])'];
      return Array.from(modalEl.querySelectorAll<HTMLElement>(selectors.join(","))).filter((n) => n.offsetParent !== null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = getFocusable();
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;
      if (e.shiftKey) { if (!activeEl || activeEl === first) { e.preventDefault(); last.focus(); } }
      else { if (!activeEl || activeEl === last) { e.preventDefault(); first.focus(); } }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeVideoId, active]);

  useEffect(() => {
    if (activeVideoId) return;
    const last = lastActiveElementRef.current;
    if (last && typeof last.focus === "function") last.focus();
  }, [activeVideoId]);

  return (
    <section
      id="prova-social"
      className="py-14 md:py-20"
      style={{
        background: "var(--color-surface)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div data-scroll-reveal className="mb-10">
          <p className="num-tag mb-3" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>05 / Prova Social</p>
          <h2 data-text-reveal className="font-bold text-[var(--color-text)]">
            Depoimentos reais em vídeo
          </h2>
          <p
            className="mt-3 max-w-xl leading-relaxed"
            style={{
              fontSize: "15px",
              color: "var(--color-muted)",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            Você vê na prática como a operação fica mais clara, o atendimento
            melhora e a jornada passa a conduzir para o agendamento.
          </p>
          <div className="mt-6 h-px" style={{ background: "var(--color-border)" }} />
        </div>

        {/* Grid 2 columns */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleVideos.map((video, i) => {
            const youtubeId = getYouTubeId(video.youtubeUrl);
            const thumbnail = youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg` : null;

            return (
              <div key={video.id} data-scroll-reveal>
                <button
                  type="button"
                  onClick={() => openVideo(video.id)}
                  className="group w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(86,168,190,0.4)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    borderRadius: "12px",
                    border: "0.5px solid var(--color-border)",
                    background: "var(--color-surface)",
                    transition: "border-color 0.3s",
                  }}
                  aria-label={`Assistir: ${video.title}`}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-border)";
                  }}
                >
                  {/* Thumbnail 16:9 */}
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16/9",
                      position: "relative",
                      overflow: "hidden",
                      background: "var(--color-surface-2)",
                    }}
                  >
                    {thumbnail ? (
                      <Image
                        src={thumbnail}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        priority={i === 0}
                      />
                    ) : null}

                    {/* Dark overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "rgba(0,0,0,0.35)" }}
                    />

                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2"
                      style={{ background: "rgba(0,0,0,0.4)" }}
                    >
                      {/* Play circle */}
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "50%",
                          border: "2px solid white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ marginLeft: "2px" }}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "white",
                          fontFamily: "var(--font-body), sans-serif",
                        }}
                      >
                        Clique para assistir
                      </p>
                    </div>

                    {/* Static play button (always visible) */}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <span
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.9)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#1a1a1a" style={{ marginLeft: "2px" }}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div
                    style={{
                      padding: "18px 20px",
                      position: "relative",
                    }}
                  >
                    {/* Decorative quote */}
                    <span
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "16px",
                        fontSize: "48px",
                        lineHeight: 1,
                        color: "var(--color-accent)",
                        opacity: 0.25,
                        fontFamily: "var(--font-display), sans-serif",
                        fontWeight: 800,
                        userSelect: "none",
                      }}
                    >
                      "
                    </span>

                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        fontFamily: "var(--font-display), sans-serif",
                        lineHeight: 1.3,
                      }}
                    >
                      {video.title}
                    </p>
                    <p
                      style={{
                        marginTop: "4px",
                        fontSize: "13px",
                        color: "var(--color-muted)",
                        fontFamily: "var(--font-body), sans-serif",
                        lineHeight: 1.6,
                      }}
                    >
                      {video.description}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {active ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-8 transition-opacity duration-180 ${
            modalPhase === "entered" ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`video-dialog-title-${active.id}`}
          onMouseDown={(e) => { if (e.target === e.currentTarget) requestClose(); }}
        >
          <div
            ref={modalRef}
            className={`w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl transition-transform duration-180 ${
              modalPhase === "entered" ? "translate-y-0 scale-100" : "translate-y-2 scale-[0.98]"
            }`}
            style={{
              background: "#111",
              border: "0.5px solid var(--color-border-hover)",
            }}
            tabIndex={-1}
          >
            <div
              className="flex items-center justify-between gap-3 px-4 py-3"
              style={{ borderBottom: "0.5px solid var(--color-border)" }}
            >
              <div className="min-w-0">
                <p id={`video-dialog-title-${active.id}`} className="truncate font-semibold text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
                  {active.title}
                </p>
                <p className="truncate text-sm text-[var(--color-muted)]" style={{ fontFamily: "var(--font-body)" }}>{active.description}</p>
              </div>
              <button
                type="button"
                onClick={requestClose}
                ref={closeButtonRef}
                className="rounded-full p-2 text-[var(--color-muted)] transition hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--color-text)] focus-visible:outline-none"
                aria-label="Fechar vídeo"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <div aria-hidden className={`absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent transition-opacity duration-200 ${playerLoaded ? "opacity-0" : "opacity-100"}`} />
              <iframe
                className="absolute inset-0 h-full w-full"
                src={getEmbedUrl(active.youtubeId)}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
                onLoad={() => setPlayerLoaded(true)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
