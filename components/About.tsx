"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const BASE = "https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/11";
const ABOUT_IMAGE = `${BASE}/sobre.jpg`;

const FEATURES = [
  "Diagnóstico estratégico do cenário atual",
  "Implantação do que realmente faz sentido",
  "WhatsApp mais organizado e eficiente",
  "Presença digital mais profissional",
  "Integrações, automações e IA aplicadas ao processo",
  "Estrutura pensada para gerar oportunidades e clientes",
] as const;

const CheckIcon = () => (
  <svg
    className="h-5 w-5 shrink-0 text-[#56A8BE]"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default function About() {
  return (
    <section id="sobre" className="bg-[#f8fafb] py-14 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <ScrollReveal variant="block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src={ABOUT_IMAGE}
                alt="Sobre a proposta"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal variant="title">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
                Sobre a proposta
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
                Não entregamos peças soltas. Estruturamos o digital da sua empresa
                de acordo com a necessidade real do negócio.
              </h2>
              <p className="mt-4 max-w-xl text-[#23525F]/90 leading-relaxed">
                Cada empresa chega em um estágio diferente. Algumas precisam
                começar do zero. Outras precisam corrigir o que foi mal feito.
                Outras precisam integrar ferramentas, automatizar atendimento,
                melhorar tráfego, criar páginas, ajustar o Google, fortalecer redes
                sociais e organizar a jornada comercial. O trabalho aqui não é
                vender uma peça isolada, mas montar a estrutura digital certa para
                o momento da empresa.
              </p>
              <ul className="mt-6 space-y-4">
                {FEATURES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[#23525F] leading-relaxed [font-family:var(--font-inter-tight),sans-serif]"
                  >
                    <CheckIcon />
                    <span className="text-sm font-medium md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
