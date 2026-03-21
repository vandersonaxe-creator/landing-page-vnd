/** Domínio público do site (produção) */
export const SITE_URL = "https://nexupro.com.br" as const;

// Marca exibida no site
export const BRAND = {
  name: "NEXU.",
  signature: "Estrutura Digital",
} as const;

// Redes sociais — ajuste quando o perfil oficial estiver definido
export const INSTAGRAM_URL = "https://www.instagram.com/nexupro";

// Dados da empresa (razão social mantida; nome fantasia = marca no site)
export const COMPANY = {
  razaoSocial:
    "CLICK AFILIADO TECNOLOGIA E DESENVOLVIMENTO DE SISTEMAS LTDA - ME",
  nomeFantasia: "NEXU",
  cnpj: "57.727.545/0001-11",
  dataFundacao: "17/10/2024",
  cidadeUF: "Rio das Ostras/RJ",
  whatsApp: "(21) 97919-7180",
  whatsAppNumber: "5521979197180", // sem formatação para link
  email: "contato@nexupro.com.br",
  atendimento: "Rio das Ostras/RJ e online para todo o Brasil",
} as const;

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsAppNumber}`;
export const EMAIL = COMPANY.email;

// Substitua pela URL do seu agendamento Cal.com quando disponível (ex: https://cal.com/seu-usuario/analise)
export const CALCOM_BOOKING_URL = "https://cal.com";
export const CALCOM_EMBED_URL = ""; // opcional: URL do iframe para embed inline
