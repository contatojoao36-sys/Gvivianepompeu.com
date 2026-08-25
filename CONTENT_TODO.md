# Conteúdo pendente — Dra. Helo Porcelli

Este site foi construído com a arquitetura, o design e o motion design finais,
mas vários conteúdos reais ainda não puderam ser confirmados (a página de
referência `beacons.ai/draheloporcelli` está bloqueada por proteção
anti-bot, e o Instagram não expõe esses dados sem login). Nenhuma informação
foi inventada — os campos abaixo usam textos neutros, prontos para receber o
conteúdo oficial.

Todo o conteúdo do site vem de **`src/lib/content.ts`** — edite os valores
lá; os componentes em `src/components/sections/` já estão preparados para
exibir o conteúdo real assim que ele for preenchido.

## O que falta confirmar

| Campo | Onde está no código | Placeholder atual |
| --- | --- | --- |
| Número de WhatsApp / link de agendamento oficial | `content.ts` → `primaryCta`, `links` | CTAs apontam para o Instagram real (`@draheloporcelli`) |
| Biografia oficial | `content.ts` → `about.paragraphs` | Texto genérico avisando que a bio está em atualização |
| Lista real de procedimentos/serviços (nomes, descrições) | `content.ts` → `services` | 4 slots numerados "Procedimento a confirmar" |
| Credenciais (CRM, formação, especializações, prêmios) | não incluído ainda | — |
| Fotografias oficiais (retrato, clínica, procedimentos) | `Hero.tsx`, `About.tsx`, `Services.tsx`, `VisualExperience.tsx` | Painéis com monograma/gradiente no lugar da foto |
| Outras redes sociais (se houver) | `content.ts` → `links` | Apenas Instagram está populado |
| Favicon / logotipo oficial | `public/favicon.ico` | Favicon padrão do Lovable, não substituído |

## Como adicionar as fotografias reais

Cada componente já tem o espaço e o tratamento visual (moldura, profundidade,
parallax) prontos — basta importar a imagem em `src/assets/` e substituir o
bloco de placeholder pelo `<img>` correspondente:

- `Hero.tsx` — retrato principal (proporção 4:5)
- `About.tsx` — imagem editorial da apresentação (proporção 3:4)
- `Services.tsx` — imagem de cada procedimento no painel de destaque
- `VisualExperience.tsx` — galeria de ambiente/clínica (4 imagens, proporção 3:4)

## Fonte confirmada nesta sessão

- Instagram real: `@draheloporcelli` → https://www.instagram.com/draheloporcelli/
