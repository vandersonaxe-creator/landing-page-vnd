import Link from "next/link";
import { COMPANY, BRAND } from "@/lib/constants";

export const metadata = {
  title: `Termos de Uso | ${BRAND.name}`,
  description: `Termos de Uso do site ${BRAND.name} - ${BRAND.signature}.`,
};

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-white [font-family:var(--font-inter-tight),sans-serif]">
      <header className="sticky top-0 z-10 border-b border-[#23525F12] bg-white/95 py-4 backdrop-blur-sm">
        <div className="container mx-auto flex max-w-[800px] items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-baseline gap-2 text-[#23525F] transition-colors hover:text-[#23525F]/80"
          >
            <span className="text-lg font-bold">{BRAND.name}</span>
            <span className="text-sm text-[#23525F]/80">{BRAND.signature}</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#23525F] underline-offset-2 hover:underline"
          >
            Voltar ao site
          </Link>
        </div>
      </header>
      <main className="container mx-auto max-w-[800px] px-4 py-10 md:px-6 md:py-14">
        <h1 className="text-2xl font-bold leading-tight text-[#23525F] md:text-3xl">
          Termos de Uso
        </h1>
        <p className="mt-2 text-sm text-[#23525F]/70">
          Última atualização: 17 de março de 2026
        </p>

        <div className="mt-8 space-y-8 text-[#23525F]/90 md:space-y-10">
          <p className="text-base leading-relaxed md:text-lg">
            Estes Termos de Uso regulam o acesso e a utilização deste site, de
            titularidade da {COMPANY.razaoSocial}, inscrita no CNPJ sob o nº{" "}
            {COMPANY.cnpj}, com sede em {COMPANY.cidadeUF}.
          </p>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              1. Aceitação dos termos
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Ao acessar e utilizar este site, você declara estar ciente e de
              acordo com estes Termos de Uso. Caso não concorde com qualquer
              condição aqui prevista, recomendamos que não utilize o site.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              2. Objetivo do site
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Este site tem como finalidade apresentar informações
              institucionais, soluções, conteúdos, formas de contato,
              agendamento e oportunidades de contratação relacionadas aos
              serviços prestados pela empresa.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              3. Uso adequado
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              O usuário compromete-se a utilizar o site de forma ética, lícita
              e de acordo com a legislação vigente, abstendo-se de praticar
              atos que possam comprometer o funcionamento do site, a segurança
              da plataforma ou os direitos da empresa e de terceiros.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              4. Propriedade intelectual
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Os textos, imagens, marcas, elementos visuais, identidade,
              estrutura, layout, conteúdos e materiais presentes neste site são
              protegidos por direitos de propriedade intelectual e não podem ser
              reproduzidos, distribuídos, modificados ou utilizados sem
              autorização prévia, salvo nas hipóteses permitidas por lei.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              5. Limitação de responsabilidade
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              A empresa envida esforços para manter as informações do site
              corretas e atualizadas, mas não garante ausência de erros,
              interrupções, indisponibilidades temporárias ou total
              compatibilidade com todos os dispositivos e navegadores. O uso do
              site é de responsabilidade do próprio usuário.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              6. Links e serviços de terceiros
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              O site poderá conter links, integrações e serviços de terceiros,
              como ferramentas de agenda, comunicação, vídeos e plataformas
              externas. A empresa não se responsabiliza por conteúdos, políticas,
              práticas ou disponibilidade desses serviços.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              7. Contato e formulários
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Ao preencher formulários, clicar em botões de contato, iniciar
              conversa por WhatsApp ou solicitar agendamento, o usuário se
              responsabiliza pela veracidade das informações fornecidas.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              8. Possíveis alterações no site
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              A empresa poderá modificar, suspender, atualizar ou descontinuar, a
              qualquer momento e sem aviso prévio, conteúdos, recursos,
              páginas, funcionalidades, layout, ofertas e condições apresentadas
              neste site.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              9. Privacidade e dados pessoais
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              O tratamento de dados pessoais realizado neste site seguirá o
              disposto na{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-[#23525F] underline hover:no-underline"
              >
                Política de Privacidade
              </Link>
              , que deve ser lida em conjunto com estes Termos de Uso.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              10. Legislação aplicável
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Estes Termos de Uso serão regidos pelas leis da República
              Federativa do Brasil, especialmente pela legislação civil e pela
              legislação aplicável à proteção de dados pessoais.
            </p>
          </section>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              11. Contato
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
            </p>
            <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm md:text-base">
              <li>{COMPANY.razaoSocial}</li>
              <li>
                E-mail:{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[#23525F] underline hover:no-underline"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${COMPANY.whatsAppNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23525F] underline hover:no-underline"
                >
                  {COMPANY.whatsApp}
                </a>
              </li>
            </ul>
          </section>
        </div>

        <p className="mt-12 border-t border-[#23525F12] pt-6">
          <Link
            href="/"
            className="text-sm font-medium text-[#23525F] underline-offset-2 hover:underline"
          >
            ← Voltar ao site
          </Link>
        </p>
      </main>
    </div>
  );
}
