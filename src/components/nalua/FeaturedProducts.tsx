import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, products, site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FeaturedProducts() {
  return (
    <section id="mais-desejados" className="mx-auto w-full max-w-2xl px-5 pt-20 sm:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-center"
      >
        <span className="eyebrow">Mais desejados</span>
        <h2 className="font-display mt-2 text-[clamp(1.7rem,7vw,2.3rem)] italic text-ink">
          Peças que estão saindo
        </h2>
        <p className="mx-auto mt-3 max-w-xs text-[0.85rem] leading-relaxed text-ink/65">
          {site.materials}
        </p>
      </motion.div>

      <div className="mt-9 grid grid-cols-2 gap-3.5 sm:gap-4">
        {products.map((product, i) => (
          <motion.a
            key={product.name}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.08, ease: EASE }}
            className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_16px_36px_-24px_rgba(44,26,48,0.45)] ring-1 ring-purple/10 transition-transform duration-300 active:scale-[0.97]"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-active:scale-110"
              />
              {product.badge ? (
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-primary shadow-sm">
                  {product.badge}
                </span>
              ) : null}
            </div>
            <div className="flex flex-1 flex-col gap-1 px-3.5 py-3.5">
              <span className="font-display text-[0.95rem] italic leading-tight text-ink">
                {product.name}
              </span>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="text-[0.9rem] font-semibold text-primary">
                  {formatPrice(product.price)}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-accent transition-transform group-active:translate-x-0.5 group-active:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="mt-8 flex justify-center"
      >
        <a
          href={site.allProductsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-primary transition-opacity active:opacity-60"
        >
          Ver todos os produtos
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </motion.div>
    </section>
  );
}
