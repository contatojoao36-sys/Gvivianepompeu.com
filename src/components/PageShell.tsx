import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <main className="grain relative min-h-screen bg-background pb-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(70%_60%_at_50%_0%,color-mix(in_oklab,var(--sage)_30%,transparent),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-2xl px-5 pt-10 sm:pt-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-forest/70 transition-colors hover:text-forest"
        >
          ← Voltar para a vitrine
        </Link>

        <motion.header
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-accent">
            {eyebrow}
          </span>
          <h1 className="font-display mt-3 text-[clamp(2rem,8vw,2.8rem)] italic leading-[1.05] text-primary">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink/80">
              {subtitle}
            </p>
          ) : null}
        </motion.header>

        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          {children}
        </motion.section>

        <footer className="mt-16 text-center">
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
    </main>
  );
}
