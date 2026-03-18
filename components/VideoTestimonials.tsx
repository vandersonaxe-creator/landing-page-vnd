"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

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
        title: "Depoimento | Em breve",
        description: "Novo relato real para completar a seção de prova social.",
        youtubeUrl: "https://youtube.com/shorts/",
        enabled: false,
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

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideoId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <section id="prova-social" className="bg-[#f8fafb] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
            PROVA SOCIAL
          </p>
          <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
            Clientes que já passaram pela estrutura reconhecem a diferença
          </h2>
          <p className="mt-4 max-w-2xl text-[#23525F]/90 leading-relaxed">
            Mais do que promessas, aqui estão relatos reais de clientes que perceberam
            melhora na apresentação, no atendimento, na organização da estrutura
            digital e na forma como o negócio passou a se posicionar online.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleVideos.map((video, i) => {
            const youtubeId = getYouTubeId(video.youtubeUrl);
            const thumbnail = youtubeId
              ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
              : null;

            return (
              <ScrollReveal key={video.id} variant="card" staggerIndex={i}>
                <button
                  type="button"
                  onClick={() => setActiveVideoId(video.id)}
                  className="card-premium group flex w-full flex-col overflow-hidden rounded-xl border border-[#23525F15] bg-white text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23525F]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8fafb]"
                  aria-label={`Assistir: ${video.title}`}
                >
                  <div className="relative aspect-video overflow-hidden bg-[#23525F]/10">
                    {thumbnail ? (
                      <Image
                        src={thumbnail}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        priority={i === 0}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[#23525F] shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <svg className="h-7 w-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-sm font-semibold text-white drop-shadow">
                        Clique para assistir
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-[#23525F]">{video.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#23525F]/80">
                      {video.description}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Vídeo: ${active.title}`}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveVideoId(null);
          }}
        >
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-[#23525F12] px-4 py-3">
              <div className="min-w-0">
                <p className="truncate font-semibold text-[#23525F]">{active.title}</p>
                <p className="truncate text-sm text-[#23525F]/70">{active.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoId(null)}
                className="rounded-full p-2 text-[#23525F]/70 transition hover:bg-[#23525F]/10 hover:text-[#23525F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23525F]/35"
                aria-label="Fechar vídeo"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={getEmbedUrl(active.youtubeId)}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
