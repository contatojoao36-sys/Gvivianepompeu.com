import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { cards, site, type Card } from "@/lib/site";
import portrait from "@/assets/viviane-perfil.jpg";
import thumbDocumentos from "@/assets/thumb-documentos.jpg";
import thumbArvore from "@/assets/thumb-arvore.jpg";
import thumbEuropa from "@/assets/thumb-europa.jpg";
import thumbTreinamento from "@/assets/thumb-treinamento.jpg";

const THUMBS: Record<Card["thumb"], string> = {
  portrait,
  documentos: thumbDocumentos,
  arvore: thumbArvore,
  europa: thumbEuropa,
  treinamento: thumbTreinamento,
};

const EASE = [0.16, 1, 0.3, 1] as const;

const title = "Pesquisa e Genealogia | Viviane Pompeu";
const description =
  "Soluções de Viviane Pompeu em genealogia: pesquisa familiar documentada, ascendência italiana e portuguesa, treinamentos e árvore genealógica ilustrada.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function BannerCard({ card, index }: { card: Card; index: number }) {
  const dark = card.tone === "dark";
  const external = /^https?:\/\//.test(card.href);

  return (
    <motion.a
      href={card.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: EASE }}
      className={`group relative block overflow-hidden rounded-2xl shadow-[0_18px_50px_-24px_rgba(52,73,58,0.55)] ring-1 transition-transform duration-500 hover:-translate-y-1 ${
        dark ? "bg-forest text-cream ring-forest/40" : "bg-sand/70 text-ink ring-forest/10"
      }`}
    >
      <div className="grid grid-cols-[1fr_38%] items-stretch sm:grid-cols-[1fr_34%]">
        {/* Texto */}
        <div className="px-5 py-7 sm:px-9 sm:py-10">
          <div className="flex items-center gap-3">
            <span
              className={`text-[0.6rem] font-medium uppercase tracking-[0.3em] ${
                dark ? "text-accent" : "text-forest/70"
              }`}
            >
              {card.eyebrow}
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>

          <h2
            className={`font-display mt-3 whitespace-pre-line text-[clamp(1.6rem,6.5vw,2.4rem)] font-normal leading-[1.02] ${
              dark ? "text-cream" : "text-forest"
            }`}
          >
            {card.title}
            <span className="block italic text-accent">{card.titleAccent}</span>
          </h2>

          <p
            className={`mt-4 max-w-sm text-[0.82rem] leading-relaxed sm:text-sm ${
              dark ? "text-cream/80" : "text-ink/75"
            }`}
          >
            {card.desc}
          </p>

          <span className="mt-6 inline-flex items-center rounded-lg bg-accent px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-forest transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:text-[0.65rem]">
            {card.cta}
          </span>
        </div>

        {/* Imagem */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 -left-6 w-14 -skew-x-6 bg-accent" aria-hidden />
          <img
            src={THUMBS[card.thumb]}
            alt={`${card.eyebrow} — ${card.title.replace(/\n/g, " ")} ${card.titleAccent}`}
            loading={index === 0 ? "eager" : "lazy"}
            className="relative h-full w-full object-cover object-center transition-transform duration-[1.2s] group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 ${
              dark
                ? "bg-gradient-to-r from-forest via-forest/25 to-transparent"
                : "bg-gradient-to-r from-sand/90 via-sand/20 to-transparent"
            }`}
            aria-hidden
          />
        </div>
      </div>

      {/* Faixa inferior diagonal */}
      <div className="h-3 w-full origin-left -skew-y-[0.6deg] bg-accent" aria-hidden />
    </motion.a>
  );
}

function Home() {
  return (
    <main className="grain relative min-h-screen bg-background pb-28">
      {/* Brilho suave de fundo */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--sage)_38%,transparent),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-2xl px-5 pt-14 sm:pt-20">
        {/* Cabeçalho */}
        <header className="text-center">
          <motion.div
            className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-accent/60 sm:h-28 sm:w-28"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <img
              src={portrait}
              alt="Retrato de Viviane Pompeu, genealogista profissional"
              width={653}
              height={653}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.span
            className="mt-5 inline-block text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-accent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            {site.role}
          </motion.span>

          <motion.h1
            className="font-display mt-2 text-[clamp(2.6rem,13vw,4rem)] italic leading-[0.95] text-primary"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: EASE }}
          >
            {site.brand}
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink/80"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            {site.promise}
          </motion.p>

          <motion.p
            className="mx-auto mt-5 max-w-md text-[0.68rem] uppercase tracking-[0.18em] text-forest/70"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
          >
            {site.proof.join("  ·  ")}
          </motion.p>

          {/* Aviso sobre a fila */}
          <motion.div
            className="mx-auto mt-8 max-w-md rounded-xl border border-forest/15 bg-sand/60 px-5 py-4 text-left"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.48, ease: EASE }}
          >
            <p className="text-sm font-semibold text-forest">{site.queueNotice.title}</p>
            <p className="mt-1 text-[0.82rem] leading-relaxed text-ink/75">{site.queueNotice.body}</p>
          </motion.div>

          {/* CTA principal — análise inicial */}
          <motion.a
            href={site.mainCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full flex-col items-center justify-center gap-0.5 rounded-xl bg-primary px-5 py-4 text-primary-foreground shadow-[0_18px_40px_-16px_rgba(122,38,58,0.55)] transition-colors hover:bg-forest/90"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.56, ease: EASE }}
          >
            <span className="text-[0.85rem] font-semibold uppercase tracking-[0.14em]">
              {site.mainCta.label}
            </span>
            <span className="text-[0.7rem] text-primary-foreground/85">{site.mainCta.detail}</span>
          </motion.a>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.16em] text-accent">
            {site.mainCta.microcopy}
          </p>
        </header>

        {/* Cards */}
        <section className="mt-12 space-y-7 sm:mt-16 sm:space-y-9">
          {cards.map((card, i) => (
            <BannerCard key={card.eyebrow} card={card} index={i} />
          ))}
        </section>

        {/* Rodapé */}
        <footer className="mt-14 text-center">
          <div className="rule-line mx-auto max-w-xs" />
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-[0.7rem] uppercase tracking-[0.28em] text-forest/70 transition-colors hover:text-forest"
          >
            @pesquisaegenealogia
          </a>
          <p className="mt-3 font-display text-sm italic text-forest/80">{site.footerTagline}</p>
          <p className="mt-2 text-[0.7rem] text-ink/50">
            {site.brand} — {site.tagline}
          </p>
        </footer>
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-2xl px-5 pb-4"
      >
        <span className="flex w-full items-center justify-center rounded-xl bg-forest py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_16px_40px_-14px_rgba(122,38,58,0.7)] transition-colors hover:bg-primary">
          Quero falar no WhatsApp
        </span>
      </a>
    </main>
  );
}
