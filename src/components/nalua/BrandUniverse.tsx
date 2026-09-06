import { motion } from "framer-motion";
import { inspirations, site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function BrandUniverse() {
  return (
    <section
      id="universo"
      className="relative mt-20 overflow-hidden bg-blush py-16 sm:mt-28 sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_75%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-2xl px-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="eyebrow"
        >
          Universo NaLua
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="font-display mx-auto mt-3 max-w-sm text-[clamp(1.8rem,7.5vw,2.5rem)] italic leading-[1.1] text-ink"
        >
          Feito à mão, peça por peça.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.16, ease: EASE }}
          className="mx-auto mt-5 max-w-md text-[0.92rem] leading-relaxed text-ink/75"
        >
          Cada acessório nasce em biscuit e massa de E.V.A, moldado à mão — por isso muitas peças
          existem em unidade única. Brincos, colares, pulseiras, chaveiros, presilhas e incensários
          inspirados no que a NaLua ama.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.26, ease: EASE }}
          className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-2"
        >
          {inspirations.map((item) => (
            <span
              key={item}
              className="rounded-full border border-purple/20 bg-white/70 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.08em] text-purple"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.34, ease: EASE }}
          className="font-script mt-8 text-[1.5rem] text-primary"
        >
          {site.footerTagline}
        </motion.p>
      </div>
    </section>
  );
}
