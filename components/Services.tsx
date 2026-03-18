"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const SERVICES = [
  {
    title: "Landing Pages e Sites Estratégicos",
    description:
      "Páginas e sites com foco em apresentação profissional, clareza comercial e conversão.",
    icon: "page",
  },
  {
    title: "WhatsApp e Atendimento Automatizado",
    description:
      "Organização do atendimento, automações, fluxos e ganho de agilidade no processo comercial.",
    icon: "whatsapp",
  },
  {
    title: "Google Meu Negócio e Presença Local",
    description:
      "Ajuste completo da presença local para negócios que dependem de visibilidade e confiança.",
    icon: "place",
  },
  {
    title: "Meta e Posicionamento nas Redes",
    description:
      "Ajuste de perfil e comunicação para atrair as pessoas certas e conduzir para o atendimento.",
    icon: "social",
  },
  {
    title: "Tráfego Pago e Escala",
    description:
      "Campanhas com intenção comercial e previsibilidade para gerar oportunidades qualificadas.",
    icon: "traffic",
  },
  {
    title: "IA, Integrações e Fluxos",
    description:
      "Integrações e automações com IA para reduzir atrito e acelerar o caminho até o cliente.",
    icon: "ai",
  },
  {
    title: "Prioridade de entregas",
    description:
      "O que entra primeiro e o que vem depois, para manter continuidade e evitar retrabalho.",
    icon: "diagnostic",
  },
  {
    title: "Jornada do Cliente",
    description:
      "Organização dos pontos de contato para respostas mais rápidas e uma condução mais clara até o agendamento.",
    icon: "journey",
  },
] as const;

function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    page: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
      </svg>
    ),
    whatsapp: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    place: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    social: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    ),
    traffic: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15v-4H7v4H5V7h2.5l1-2h3l1 2H19v10h-2v-4h-3v4h-2z" />
      </svg>
    ),
    ai: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1c2.76 0 5 2.24 5 5h1v1h-1c0 1.66-1.34 3-3 3h-1v3h2v2H8v-2h2v-3h-1c-1.66 0-3-1.34-3-3H6v-1h1c0-2.76 2.24-5 5-5h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      </svg>
    ),
    diagnostic: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    journey: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  };
  return icons[name] ?? null;
}

export default function Services() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="servicos" className="bg-[#23525F] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <ScrollReveal variant="title">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            O que estruturamos
          </p>
          <h2 className="mt-2 text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Soluções que viram operação
          </h2>
          <p className="mt-3 max-w-2xl text-white/90">
            Ajustamos canais e fluxos para gerar clareza, resposta rápida e avanço consistente no funil.
          </p>
        </ScrollReveal>
        <div className="mt-9 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description, icon }, i) => {
            const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };
            const whileInView = { opacity: 1, y: 0 };

            return (
              <motion.div
                key={icon}
                className="flex h-full flex-col rounded-xl p-6 text-white backdrop-blur-sm bg-[#2d6470]/50 border border-white/10 transition-colors hover:border-[#56a8be]/60"
                initial={initial}
                whileInView={whileInView}
                viewport={{ once: true }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : {
                        delay: i * 0.1,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.05,
                      }
                }
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 text-white/90">
                  <Icon name={icon} />
                </span>
                <h3 className="mt-3 text-base font-semibold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/90 md:text-base">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
