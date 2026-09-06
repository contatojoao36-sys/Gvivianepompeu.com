// Conteúdo real da NaLua — extraído da identidade da marca (cartão de visita:
// wordmark "Yna Lua", lua crescente, gradiente dourado/rosa/lilás, tagline
// "acessórios personalizados", @ynalua.arte) e do catálogo real da loja em
// https://ynalua.lojavirtualnuvem.com.br/. Nenhuma informação foi inventada —
// nomes, preços, fotos e links de produto vêm diretamente da loja atual.

export const site = {
  brand: "NaLua",
  brandScript: "Yna Lua",
  handle: "@ynalua.arte",
  tagline: "Acessórios personalizados",
  promise: "Peças exclusivas, feitas à mão — inspiradas no que você ama.",

  storeUrl: "https://ynalua.lojavirtualnuvem.com.br/",
  allProductsUrl: "https://ynalua.lojavirtualnuvem.com.br/produtos/",
  contactUrl: "https://ynalua.lojavirtualnuvem.com.br/contato/",
  instagramUrl: "https://www.instagram.com/ynalua.arte/",

  materials: "Biscuit e massa de E.V.A · feito à mão, peça por peça",

  footerTagline: "Cada peça NaLua é feita à mão — uma de cada vez.",
} as const;

export type Category = {
  name: string;
  href: string;
  image: string;
};

// Categorias reais do menu da loja (as com foto de produto confirmada).
export const categories: Category[] = [
  {
    name: "Brincos",
    href: "https://ynalua.lojavirtualnuvem.com.br/brincos/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/cooky-1-d267291c4cd65eee2317389861104151-480-0.webp",
  },
  {
    name: "Colares",
    href: "https://ynalua.lojavirtualnuvem.com.br/colares/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/susuwatari-2932551af4f54550f317355017702141-480-0.webp",
  },
  {
    name: "Pulseiras",
    href: "https://ynalua.lojavirtualnuvem.com.br/pulseiras/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/ursinhos-2-cc8698e8025f7d409e17109129007104-480-0.webp",
  },
  {
    name: "Chaveiros",
    href: "https://ynalua.lojavirtualnuvem.com.br/chaveiros/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/dwaekki-749df00de47c53990d17424211033127-480-0.webp",
  },
  {
    name: "Presilhas",
    href: "https://ynalua.lojavirtualnuvem.com.br/presilhas/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/meitu_20250608_111827870-88597ebedfb9575cbf17496149780304-480-0.webp",
  },
  {
    name: "Incensários",
    href: "https://ynalua.lojavirtualnuvem.com.br/incensarios/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/totoro-ad2965504fc76650ba17168565232198-480-0.webp",
  },
];

export type Product = {
  name: string;
  price: number;
  href: string;
  image: string;
  badge?: string;
};

// Produtos reais (nome, preço e foto confirmados na página de cada produto).
export const products: Product[] = [
  {
    name: "Brinco BT21",
    price: 35,
    href: "https://ynalua.lojavirtualnuvem.com.br/produtos/brinco-bt21/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/cooky-1-d267291c4cd65eee2317389861104151-480-0.webp",
    badge: "Peça única",
  },
  {
    name: "Brinco SKZoo Stray Kids",
    price: 35,
    href: "https://ynalua.lojavirtualnuvem.com.br/produtos/brinco-skzoo-stray-kids/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/bbokari-2-648a7d3c1c9104f84e17424221430438-480-0.webp",
    badge: "Peça única",
  },
  {
    name: "Colar Susuwatari",
    price: 40,
    href: "https://ynalua.lojavirtualnuvem.com.br/produtos/colar-susuwatari/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/susuwatari-2932551af4f54550f317355017702141-480-0.webp",
    badge: "Peça única",
  },
  {
    name: "Incensário Totoro",
    price: 50,
    href: "https://ynalua.lojavirtualnuvem.com.br/produtos/incensario-totoro/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/totoro-ad2965504fc76650ba17168565232198-480-0.webp",
    badge: "Peça única",
  },
  {
    name: "Pulseira Gummy Bears",
    price: 35,
    href: "https://ynalua.lojavirtualnuvem.com.br/produtos/pulseira-gummy-bears/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/ursinhos-2-cc8698e8025f7d409e17109129007104-480-0.webp",
    badge: "Peça única",
  },
  {
    name: "Brinco Hello Kitty",
    price: 30,
    href: "https://ynalua.lojavirtualnuvem.com.br/produtos/brinco-hello-kitty/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/hello-kitty-2-2d7810645926d4bbd317107907326692-480-0.webp",
    badge: "Peça única",
  },
  {
    name: "Presilha Sanrio",
    price: 20,
    href: "https://ynalua.lojavirtualnuvem.com.br/produtos/presilha-sanrio/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/meitu_20250608_111827870-88597ebedfb9575cbf17496149780304-480-0.webp",
    badge: "Peça única",
  },
  {
    name: "Chaveiro SKZoo Stray Kids",
    price: 30,
    href: "https://ynalua.lojavirtualnuvem.com.br/produtos/chaveiro-skzoo-stray-kids/",
    image:
      "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/dwaekki-749df00de47c53990d17424211033127-480-0.webp",
    badge: "Peça única",
  },
];

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// Universos/fandoms reais que aparecem no catálogo — usados na seção
// "Universo NaLua" para descrever a marca sem inventar histórico.
export const inspirations = [
  "K-pop · BT21 & Stray Kids",
  "Studio Ghibli",
  "Sanrio",
  "Cultura pop & animes",
];
