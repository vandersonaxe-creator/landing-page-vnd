// Marca exibida no site (vitrine Vander Pro)
export const BRAND = {
  name: "Vander Pro",
  signature: "Estrutura Digital",
} as const;

// Redes sociais (exibir apenas as que têm URL real)
export const INSTAGRAM_URL = "https://www.instagram.com/vander.pro";
// Facebook e LinkedIn ocultos até terem URL real

// Dados reais da empresa – CLICK AFILIADO
export const COMPANY = {
  razaoSocial:
    "CLICK AFILIADO TECNOLOGIA E DESENVOLVIMENTO DE SISTEMAS LTDA - ME",
  nomeFantasia: "CLICK AFILIADO",
  cnpj: "57.727.545/0001-11",
  dataFundacao: "17/10/2024",
  cidadeUF: "Rio das Ostras/RJ",
  whatsApp: "(21) 97919-7180",
  whatsAppNumber: "5521979197180", // sem formatação para link
  email: "contato@clickafiliado.com.br",
  atendimento: "Rio das Ostras/RJ e online para todo o Brasil",
} as const;

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsAppNumber}`;
export const EMAIL = COMPANY.email;

// Substitua pela URL do seu agendamento Cal.com quando disponível (ex: https://cal.com/seu-usuario/analise)
export const CALCOM_BOOKING_URL = "https://cal.com";
export const CALCOM_EMBED_URL = ""; // opcional: URL do iframe para embed inline
