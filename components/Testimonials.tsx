"use client";

import Image from "next/image";

const BASE = "https://rtlxptnormal.easybuilder.com.br/wp-content/uploads/2025/11";

const TESTIMONIALS = [
  {
    image: `${BASE}/Image_fx-4-1.jpg`,
    name: "Mariana Souza",
    role: "Clínica de Estética",
    text: "Antes, nossa presença digital era confusa e o atendimento demorava muito. Depois da reorganização, passamos a comunicar melhor o serviço, responder com mais agilidade e receber contatos mais qualificados.",
  },
  {
    image: `${BASE}/Image_fx-3-1-1.jpg`,
    name: "Rafael Lima",
    role: "Escritório de Serviços Financeiros",
    text: "O grande diferencial foi enxergar o digital como estrutura e não como peças soltas. A página, a comunicação e o atendimento começaram a trabalhar juntos, e isso melhorou nossa geração de oportunidades.",
  },
  {
    image: `${BASE}/Image_fx-5-1-2.jpg`,
    name: "Eduardo Martins",
    role: "Prestador de Serviço",
    text: "O trabalho trouxe clareza comercial. Hoje meu negócio tem uma apresentação muito mais profissional, e os clientes chegam entendendo melhor o valor do serviço.",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="bg-[#f8fafb] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
          Resultados e percepção
        </p>
        <h2 className="mt-2 text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
          O que os clientes percebem quando a estrutura começa a fazer sentido
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-[#23525F15] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={t.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <p className="mt-4 font-semibold text-[#23525F]">{t.name}</p>
              <p className="text-sm text-[#23525F]/70">{t.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#23525F]/90">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
