import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

const title = "Trinta lições que mudam o modo como você procura seus antepassados";
const description =
  "Baixe gratuitamente o guia introdutório que eu gostaria de ter lido antes de começar a pesquisar minha própria família.";

export const Route = createFileRoute("/guia-gratuito")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GuiaPage,
});

function GuiaPage() {
  return (
    <PageShell eyebrow="Gratuito" title="Trinta lições que mudam o modo como você procura seus antepassados">
      <p className="text-[0.95rem] leading-relaxed text-ink/85">
        Baixe gratuitamente o guia introdutório que eu gostaria de ter lido antes de começar a
        pesquisar minha própria família. São 30 lições práticas para ajudar você a começar sua
        pesquisa genealógica com mais clareza e evitar erros que podem custar muito tempo.
      </p>

      <div className="mt-8 rounded-xl border border-forest/15 bg-sand/60 p-6 text-center">
        <p className="text-[0.8rem] text-ink/70">
          Baixe agora mesmo, informando nome e e-mail na página de entrega.
        </p>
        <a
          href={site.ebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-forest/90 sm:w-auto"
        >
          Quero receber o guia gratuito
        </a>
      </div>
    </PageShell>
  );
}
