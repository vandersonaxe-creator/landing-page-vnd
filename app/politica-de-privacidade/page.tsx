import Link from "next/link";
import { COMPANY, BRAND } from "@/lib/constants";

export const metadata = {
  title: `Política de Privacidade | ${BRAND.name}`,
  description: `Política de Privacidade do site ${BRAND.name} - ${BRAND.signature}.`,
};

export default function PoliticaDePrivacidade() {
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
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-[#23525F]/70">
          Última atualização: 17 de março de 2026
        </p>

        <div className="mt-8 space-y-8 text-[#23525F]/90 md:space-y-10">
          <p className="text-base leading-relaxed md:text-lg">
            A {COMPANY.razaoSocial}, inscrita no CNPJ sob o nº {COMPANY.cnpj},
            com sede em {COMPANY.cidadeUF}, respeita a sua privacidade e está
            comprometida com a proteção dos dados pessoais coletados por meio
            deste site.
          </p>

          <section className="leading-relaxed">
            <h2 className="text-lg font-semibold text-[#23525F]">
              1. Quem somos
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm md:text-base">
              <li>Nome empresarial: {COMPANY.razaoSocial}</li>
              <li>Nome fantasia: {COMPANY.nomeFantasia}</li>
              <li>CNPJ: {COMPANY.cnpj}</li>
              <li>E-mail para contato: {COMPANY.email}</li>
              <li>WhatsApp: {COMPANY.whatsApp}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              2. Quais dados podemos coletar
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Podemos coletar dados fornecidos diretamente por você, como nome,
              e-mail, telefone, empresa e outras informações enviadas por
              formulários, WhatsApp, agendamento de reunião ou contato direto.
              Também podemos coletar dados de navegação, como endereço IP,
              tipo de dispositivo, navegador, páginas acessadas, tempo de
              permanência e interações no site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              3. Como utilizamos os dados
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Utilizamos os dados para responder contatos, agendar reuniões,
              prestar atendimento, enviar comunicações relacionadas ao serviço,
              melhorar a experiência do usuário, analisar o desempenho do site,
              personalizar a navegação e cumprir obrigações legais e
              regulatórias.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              4. Compartilhamento de dados
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Os dados podem ser compartilhados com plataformas e ferramentas
              utilizadas na operação do site e do atendimento, como serviços de
              hospedagem, analytics, formulários, automação, agenda online e
              comunicação, sempre na medida necessária para a execução dos
              serviços. Também poderemos compartilhar dados quando houver
              obrigação legal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              5. Cookies e tecnologias de rastreamento
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Este site pode utilizar cookies e tecnologias semelhantes para
              melhorar a experiência de navegação, entender o comportamento dos
              visitantes, analisar métricas e otimizar campanhas. Você pode
              configurar seu navegador para bloquear cookies, ciente de que
              algumas funcionalidades podem ser afetadas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              6. Base legal para o tratamento
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              O tratamento de dados pode ocorrer com base no consentimento do
              usuário, na execução de procedimentos preliminares relacionados a
              contrato, no legítimo interesse do controlador e no cumprimento de
              obrigações legais, conforme aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              7. Armazenamento e proteção dos dados
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Adotamos medidas técnicas e organizacionais razoáveis para
              proteger os dados pessoais contra acessos não autorizados, perda,
              alteração, divulgação ou destruição indevida. Ainda assim, nenhum
              ambiente digital é completamente imune a riscos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              8. Seus direitos
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Nos termos da legislação aplicável, você pode solicitar
              confirmação da existência de tratamento, acesso aos dados,
              correção de informações incompletas ou desatualizadas,
              anonimização, bloqueio ou eliminação de dados desnecessários,
              portabilidade, informações sobre compartilhamento e revogação do
              consentimento, quando aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              9. Retenção dos dados
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Os dados serão armazenados pelo tempo necessário para cumprir as
              finalidades informadas nesta política, atender exigências legais,
              regulatórias e resguardar direitos da empresa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              10. Links para terceiros
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Este site pode conter links para sites, plataformas e serviços de
              terceiros. Não somos responsáveis pelas práticas de privacidade
              desses ambientes externos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              11. Alterações nesta política
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Esta Política de Privacidade pode ser atualizada a qualquer
              momento para refletir mudanças legais, operacionais ou
              tecnológicas. Recomendamos consulta periódica desta página.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#23525F]">
              12. Contato
            </h2>
            <p className="mt-3 text-sm leading-relaxed md:text-base">
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o
              tratamento de dados pessoais, entre em contato:
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

        <p className="mt-12 pt-6 border-t border-[#23525F12]">
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
