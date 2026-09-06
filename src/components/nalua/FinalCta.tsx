import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { MoonMark } from "./MoonMark";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FinalCta() {
  return (
    <section className="nalua-gradient relative mt-20 overflow-hidden px-6 py-20 text-center text-white sm:mt-28 sm:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto h-14 w-14"
      >
        <MoonMark className="h-full w-full" withSparkles={false} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
        className="font-display mx-auto mt-4 max-w-xs text-[clamp(1.9rem,8vw,2.6rem)] italic leading-[1.1] text-white"
      >
        Encontre sua próxima peça NaLua
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
        className="mx-auto mt-8 max-w-xs"
      >
        <a
          href={site.allProductsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_20px_45px_-18px_rgba(44,26,48,0.6)] transition-transform active:scale-95"
        >
          Explorar a loja
        </a>
      </motion.div>
    </section>
  );
}
