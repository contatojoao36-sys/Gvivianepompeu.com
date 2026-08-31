// Conteúdo central e editável, baseado no Guia Operacional para Marketing e
// Desenvolvimento — Vitrine Bio | Viviane Pompeu.
// Onde a informação não foi confirmada no briefing, usamos: [NÃO INFORMADO — VERIFICAR]

export const site = {
  brand: "Viviane Pompeu",
  role: "Genealogista profissional",
  tagline: "Pesquisa e Genealogia",
  promise: "Histórias familiares reconstruídas com documentos, método e contexto.",
  proof: ["+2 mil famílias atendidas", "+8 mil árvores analisadas", "Brasil", "Portugal", "Itália"],

  queueNotice: {
    title: "Pesquisas completas têm fila de espera.",
    body: "Para começar sem aguardar, solicite uma análise inicial paga. Essa etapa tem atendimento sem fila.",
  },

  mainCta: {
    label: "Solicitar análise inicial",
    detail: "7 dias + reunião (R$ 647,00)",
    microcopy: "Análise paga · atendimento sem fila",
    // [NÃO INFORMADO — VERIFICAR] — link da página de solicitação de documentos e pagamento.
    // Até a integração ser publicada, o botão abre o WhatsApp com a intenção correta.
    href: "https://wa.me/5515996897532?text=Ol%C3%A1%2C%20quero%20solicitar%20a%20an%C3%A1lise%20inicial%20(7%20dias%20%2B%20reuni%C3%A3o).",
  },

  instagram: "https://www.instagram.com/pesquisaegenealogia/",
  whatsapp:
    "https://wa.me/5515996897532?text=Ol%C3%A1%2C%20conheci%20o%20trabalho%20de%20Viviane%20Pompeu%20pelo%20Instagram%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20%5Bservi%C3%A7o%20de%20interesse%5D.",
  email: "mailto:contato@pompeuecontrucci.com.br",

  footerTagline: "Genealogia sem fonte é mitologia.",
};

export function whatsappFor(serviceLabel: string) {
  const text = `Olá, conheci o trabalho de Viviane Pompeu pelo Instagram e gostaria de informações sobre ${serviceLabel}.`;
  return `https://wa.me/5515996897532?text=${encodeURIComponent(text)}`;
}

export type Card = {
  eyebrow: string;
  title: string;
  /** Última linha do título, em serif itálico destacado */
  titleAccent: string;
  desc: string;
  cta: string;
  href: string;
  tone: "light" | "dark";
  thumb: "portrait" | "documentos" | "arvore" | "europa" | "treinamento";
};

// Os cinco cartões principais de navegação (item 3.4 do briefing).
export const cards: Card[] = [
  {
    eyebrow: "Sobre",
    title: "Quem é\nViviane",
    titleAccent: "Pompeu",
    desc: "Genealogista profissional, pesquisadora, palestrante, escritora e presidente da APGBR. Conheça a trajetória e a abordagem por trás de cada pesquisa.",
    cta: "Conhecer a Viviane",
    href: "/viviane-pompeu",
    tone: "dark",
    thumb: "portrait",
  },
  {
    eyebrow: "Serviços",
    title: "Conhecer nossos\nserviços",
    titleAccent: "de pesquisa",
    desc: "Nove formas de atendimento — da genealogia do zero à cidadania italiana e portuguesa. Escolha a opção que representa o momento da sua pesquisa.",
    cta: "Conhecer os serviços",
    href: "/servicos",
    tone: "light",
    thumb: "documentos",
  },
  {
    eyebrow: "Formação",
    title: "Aulas, cursos e\ntreinamentos",
    titleAccent: "para pesquisar",
    desc: "Formações práticas para quem quer pesquisar a própria família ou atuar profissionalmente com genealogia e documentação histórica.",
    cta: "Conhecer os cursos",
    // [NÃO INFORMADO — VERIFICAR] — URL da página de produtos na Hotmart.
    href: whatsappFor("os cursos e treinamentos"),
    tone: "dark",
    thumb: "treinamento",
  },
  {
    eyebrow: "Gratuito",
    title: "Baixar o guia\ngratuito",
    titleAccent: "para começar",
    desc: "Descubra quais informações reunir, quais documentos procurar e como organizar os primeiros passos da sua pesquisa genealógica.",
    cta: "Quero o guia gratuito",
    href: "/guia-gratuito",
    tone: "light",
    thumb: "arvore",
  },
  {
    eyebrow: "Contato",
    title: "Entrar em\ncontato",
    titleAccent: "com a equipe",
    desc: "Prefere e-mail ou WhatsApp? Escolha o canal mais adequado para a sua mensagem e fale diretamente com a equipe.",
    cta: "Falar com a equipe",
    href: "/contato",
    tone: "dark",
    thumb: "europa",
  },
];
