// Conteúdo central da vitrine premium da Dra. Helo Porcelli.
//
// Fontes verificadas nesta sessão:
//  - Nome e handle: confirmados pelo usuário como @draheloporcelli (Instagram real).
//  - Área de atuação (medicina estética): descrita pelo próprio briefing do projeto.
//
// Tudo o que NÃO pôde ser confirmado (bio, procedimentos, números, certificações,
// WhatsApp, link de agendamento) está marcado como PENDENTE abaixo e listado em
// CONTENT_TODO.md na raiz do repositório. Nenhum dado foi inventado — os campos
// pendentes usam textos genéricos e neutros, prontos para receber o conteúdo real.

export const doctor = {
  fullName: "Dra. Helo Porcelli",
  firstName: "Helo",
  lastName: "Porcelli",
  specialty: "Medicina Estética",
  tagline: "Medicina estética autoral, com técnica e sensibilidade.",
  instagramHandle: "@draheloporcelli",
  instagramUrl: "https://www.instagram.com/draheloporcelli/",
};

// PENDENTE — número de WhatsApp / link de agendamento oficiais não confirmados.
// Enquanto isso, os CTAs de contato direcionam para o Instagram real da Dra. Helo.
export const primaryCta = {
  label: "Agendar avaliação",
  sublabel: "Via Instagram",
  href: doctor.instagramUrl,
};

export const nav = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

// PENDENTE — biografia oficial. Texto abaixo é neutro, sem afirmações,
// formações, títulos ou números que não foram confirmados.
export const about = {
  eyebrow: "Apresentação",
  heading: "Uma abordagem autoral em medicina estética",
  paragraphs: [
    "A trajetória, a formação e a abordagem da Dra. Helo Porcelli estão sendo reunidas para esta apresentação — o texto oficial entra aqui assim que confirmado.",
    "Esta seção já está no formato editorial definitivo, pronta para receber a biografia completa com a mesma sofisticação do restante da experiência.",
  ],
};

// PENDENTE — lista real de procedimentos/serviços. Nenhum nome de procedimento,
// técnica ou resultado foi presumido. Estrutura pronta para receber o conteúdo.
export const services = Array.from({ length: 4 }, (_, i) => ({
  index: String(i + 1).padStart(2, "0"),
  title: "Procedimento a confirmar",
  caption: "Descrição oficial em atualização.",
}));

// PENDENTE — demais canais (WhatsApp, agendamento, site) aguardando confirmação.
// Apenas o Instagram é um link real e ativo; os demais aparecem como "em breve".
export const links = [
  {
    label: "Instagram",
    detail: doctor.instagramHandle,
    href: doctor.instagramUrl,
    pending: false,
  },
  {
    label: "WhatsApp",
    detail: "Em breve",
    href: undefined,
    pending: true,
  },
  {
    label: "Agendamento",
    detail: "Em breve",
    href: undefined,
    pending: true,
  },
] as const;

export const footer = {
  tagline: doctor.tagline,
  legal: `© ${new Date().getFullYear()} ${doctor.fullName}. Todos os direitos reservados.`,
};
