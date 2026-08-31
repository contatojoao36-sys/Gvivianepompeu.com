import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { whatsappFor } from "@/lib/site";

const title = "Guia gratuito de pesquisa genealógica";
const description = "Baixe o guia introdutório e organize os primeiros passos da sua história familiar.";

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
    <PageShell
      eyebrow="Gratuito"
      title="Por onde começar sua pesquisa genealógica"
      subtitle="Comece sua pesquisa familiar com método e evite os erros mais comuns."
    >
      <p className="text-[0.95rem] leading-relaxed text-ink/85">
        Baixe gratuitamente o guia introdutório e descubra quais informações reunir, quais
        documentos procurar e como organizar os primeiros passos da sua pesquisa genealógica.
      </p>

      <div className="mt-8 rounded-xl border border-forest/15 bg-sand/60 p-6 text-center">
        <p className="text-[0.8rem] text-ink/70">
          O material ainda está em preparação para entrega automática. Peça o guia agora pelo
          WhatsApp e a equipe envia diretamente para você.
        </p>
        <a
          href={whatsappFor("o guia gratuito de pesquisa genealógica")}
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
