import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";

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

function guiaWhatsappHref(nome: string, email: string) {
  const text =
    `Olá, equipe da Viviane Pompeu. Quero receber o guia gratuito "Trinta lições que mudam o ` +
    `modo como você procura seus antepassados".\nNome: ${nome}\nE-mail: ${email}`;
  return `https://wa.me/5515997030525?text=${encodeURIComponent(text)}`;
}

function GuiaPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const podeEnviar = nome.trim().length > 0 && email.trim().length > 0;

  return (
    <PageShell eyebrow="Gratuito" title="Trinta lições que mudam o modo como você procura seus antepassados">
      <p className="text-[0.95rem] leading-relaxed text-ink/85">
        Baixe gratuitamente o guia introdutório que eu gostaria de ter lido antes de começar a
        pesquisar minha própria família. São 30 lições práticas para ajudar você a começar sua
        pesquisa genealógica com mais clareza e evitar erros que podem custar muito tempo.
      </p>

      <div className="mt-8 rounded-xl border border-forest/15 bg-sand/60 p-6">
        <p className="text-center text-[0.8rem] text-ink/70">
          O material ainda está em preparação para entrega automática. Deixe seu nome e e-mail que
          a equipe envia o guia diretamente para você pelo WhatsApp.
        </p>

        <form
          className="mt-5 flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!podeEnviar) return;
            window.open(guiaWhatsappHref(nome, email), "_blank", "noopener,noreferrer");
          }}
        >
          <input
            type="text"
            required
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full rounded-lg border border-forest/20 bg-card px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-forest/50 focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-forest/20 bg-card px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-forest/50 focus:outline-none"
          />
          <p className="text-[0.7rem] leading-relaxed text-ink/50">
            Ao enviar, você concorda em receber o material e comunicações relacionadas.
          </p>
          <button
            type="submit"
            disabled={!podeEnviar}
            className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Quero receber o guia gratuito
          </button>
        </form>
      </div>
    </PageShell>
  );
}
