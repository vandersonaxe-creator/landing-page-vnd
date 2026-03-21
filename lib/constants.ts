/** Domínio público do site (produção) */
export const SITE_URL = "https://nexupro.com.br" as const;

// Marca exibida no site
export const BRAND = {
  name: "NEXU.",
  signature: "Estrutura Digital",
} as const;

// Dados de contato (sem razão social / CNPJ no site)
export const COMPANY = {
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
