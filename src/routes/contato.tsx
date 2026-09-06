import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

const title = "Contato | Viviane Pompeu";
const description = "Entre em contato por e-mail ou WhatsApp.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <PageShell
      eyebrow="Contato"
      title="Como prefere falar conosco?"
      subtitle="Escolha o canal mais adequado para a sua mensagem."
    >
      <div className="flex flex-col gap-4">
        <a
          href={site.email}
          className="flex items-center justify-between rounded-xl border border-forest/15 bg-card px-5 py-5 transition-colors hover:bg-sand/50"
        >
          <span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-accent">
              E-mail
            </span>
            <span className="font-display mt-1 block text-lg text-forest">
              contato@pompeuecontrucci.com.br
            </span>
          </span>
          <span className="text-forest/50">→</span>
        </a>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between rounded-xl bg-primary px-5 py-5 text-primary-foreground transition-colors hover:bg-forest/90"
        >
          <span>
            <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/70">
              WhatsApp
            </span>
          </span>
          <span>→</span>
        </a>
      </div>

      <p className="mt-6 text-center text-[0.75rem] italic text-ink/60">
        "Olá, conheci o trabalho de Viviane Pompeu pelo Instagram e gostaria de informações sobre
        [serviço de interesse]."
      </p>
    </PageShell>
  );
}
