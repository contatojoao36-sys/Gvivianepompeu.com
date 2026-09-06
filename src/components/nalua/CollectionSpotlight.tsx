import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const SPOTLIGHT_IMAGE =
  "https://dcdn-us.mitiendanube.com/stores/004/128/752/products/bbokari-2-648a7d3c1c9104f84e17424221430438-480-0.webp";

export function CollectionSpotlight() {
  return (
    <section className="mx-auto w-full max-w-2xl px-5 pt-20 sm:pt-28">
      <motion.a
        href="https://ynalua.lojavirtualnuvem.com.br/produtos/brinco-skzoo-stray-kids/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="group relative block aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-[0_24px_60px_-28px_rgba(44,26,48,0.55)]"
      >
        <img
          src={SPOTLIGHT_IMAGE}
          alt="Coleção SKZoo Stray Kids"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.1s] group-active:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-9">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-gold-soft">
            Destaque da coleção
          </span>
          <h3 className="font-display mt-2 text-[clamp(1.8rem,7.5vw,2.6rem)] italic leading-[1.05] text-white">
            SKZoo
            <span className="block not-italic text-[0.5em] tracking-[0.14em] text-white/80">
              STRAY KIDS
            </span>
          </h3>
          <p className="mt-3 max-w-xs text-[0.85rem] leading-relaxed text-white/85">
            Brincos e chaveiros inspirados nos mascotes do grupo — Bbokari, Dwaekki, Leebit e todo o
            SKZoo, feitos à mão em peça única.
          </p>
          <span className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary transition-transform group-active:scale-95">
            Ver coleção SKZoo
          </span>
        </div>
      </motion.a>
    </section>
  );
}
