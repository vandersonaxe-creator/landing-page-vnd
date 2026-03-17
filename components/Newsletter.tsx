"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: integrar com API de newsletter
  };

  return (
    <section className="bg-[#f8fafb] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1280px] px-4 text-center md:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#23525F]">
          Conteúdo e insights
        </p>
        <h2 className="mx-auto mt-2 max-w-xl text-xl font-bold text-[#23525F] md:text-2xl lg:text-3xl">
          Receba ideias práticas sobre estrutura digital, automação, atendimento
          e geração de clientes
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[#23525F]/90 leading-relaxed">
          Conteúdos objetivos para empresas que querem melhorar presença
          digital, processo comercial e eficiência operacional.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu melhor e-mail"
            required
            className="rounded-lg border border-[#23525F25] px-4 py-3 text-[#23525F] placeholder:text-[#23525F]/50 focus:border-[#23525F] focus:outline-none focus:ring-2 focus:ring-[#23525F]/20"
          />
          <button
            type="submit"
            className="btn-cta-hero shrink-0 rounded-lg px-6 py-3 text-sm font-medium uppercase text-white [font-family:var(--font-inter-tight),sans-serif]"
          >
            Quero receber
          </button>
        </form>
      </div>
    </section>
  );
}
