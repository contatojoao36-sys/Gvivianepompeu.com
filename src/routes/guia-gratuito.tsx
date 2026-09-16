import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

const title = "15 dicas que eu separei para ajudar no início da pesquisa de vocês!";
const description =
  "Por R$3,97 você receberá as 15 dicas que eu gostaria que alguém tivesse me contado antes de iniciar minha pesquisa.";

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
    <PageShell eyebrow="Guia" title="15 dicas que eu separei para ajudar no início da pesquisa de vocês!">
      <p className="text-[0.95rem] leading-relaxed text-ink/85">
        Por R$3,97 você receberá as 15 dicas que eu gostaria que alguém tivesse me contado antes
        de iniciar minha pesquisa.
      </p>

      <div className="mt-8 rounded-xl border border-forest/15 bg-sand/60 p-6 text-center">
        <a
          href={site.ebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-forest/90 sm:w-auto"
        >
          Quero o E-book
        </a>
      </div>
    </PageShell>
  );
}
