"use client";

const STATS = [
  { label: "12+ anos de experiência no digital" },
  { label: "Estruturas desenvolvidas conforme o cenário de cada negócio" },
  { label: "Soluções aplicadas com foco em clareza, operação e conversão" },
  { label: "Atendimento pensado para evolução, não para improviso" },
] as const;

export default function Stats() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-premium flex min-h-[100px] items-center justify-center rounded-xl border border-[#23525F18] bg-[#f8fafb] p-6 text-center"
            >
              <p className="text-sm font-medium text-[#23525F] leading-relaxed md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
