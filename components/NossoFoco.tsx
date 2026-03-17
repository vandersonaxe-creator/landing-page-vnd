"use client";

import Image from "next/image";

const BASE = "https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/11";

const BULLETS = [
  "Organizar a base digital certa para o momento da empresa",
  "Corrigir gargalos que travam atendimento, captação e conversão",
  "Implantar melhorias práticas com visão comercial e operacional",
] as const;

const CheckIcon = () => (
  <svg
    className="h-5 w-5 shrink-0 text-[#23525F]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default function NossoFoco() {
  return (
    <section className="bg-[#f8fafb] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
              Nosso foco
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
              Clareza, estrutura e resultado para empresas em qualquer estágio
              digital
            </h2>
            <ul className="mt-6 space-y-3">
              {BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[#23525F] [font-family:var(--font-inter-tight),sans-serif]"
                >
                  <CheckIcon />
                  <span className="text-sm font-medium md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={`${BASE}/back.jpg`}
              alt="Nosso foco"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
