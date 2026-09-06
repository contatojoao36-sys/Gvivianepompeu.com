import { motion } from "framer-motion";
import { categories } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Categories() {
  return (
    <section id="categorias" className="mx-auto w-full max-w-2xl px-5 pt-20 pb-4 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center"
      >
        <span className="eyebrow">Categorias</span>
        <h2 className="font-display mt-2 text-[clamp(1.7rem,7vw,2.3rem)] italic text-ink">
          Encontre sua peça
        </h2>
      </motion.div>

      <div className="mt-9 grid grid-cols-2 gap-3.5 sm:gap-4">
        {categories.map((cat, i) => (
          <motion.a
            key={cat.name}
            href={cat.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: EASE }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-[0_16px_36px_-22px_rgba(44,26,48,0.5)] ring-1 ring-purple/10 transition-transform duration-300 active:scale-[0.97]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-active:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
              aria-hidden
            />
            <span className="absolute inset-x-0 bottom-0 p-4 text-left text-[0.95rem] font-medium text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
              {cat.name}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
