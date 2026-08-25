import { motion } from "framer-motion";
import { Instagram, ArrowDown } from "lucide-react";
import { doctor, primaryCta } from "@/lib/content";
import { SplitWords } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { Parallax } from "@/components/motion/Parallax";
import { TiltCard } from "@/components/motion/TiltCard";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-bone"
    >
      {/* Camadas de luz volumétrica — profundidade em parallax */}
      <Parallax speed={0.12} className="pointer-events-none absolute -left-24 top-[-10%] h-[60vh] w-[60vh]">
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--champagne)_22%,transparent),transparent)] blur-2xl" />
      </Parallax>
      <Parallax
        speed={-0.18}
        className="pointer-events-none absolute -right-32 bottom-[-15%] h-[70vh] w-[70vh]"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--blush)_16%,transparent),transparent)] blur-2xl" />
      </Parallax>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--champagne)_10%,transparent),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-24">
        {/* Texto */}
        <div className="order-2 lg:order-1">
          <motion.span
            className="eyebrow inline-flex items-center gap-3 text-champagne"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="h-px w-8 bg-champagne/70" />
            {doctor.specialty}
          </motion.span>

          <h1 className="font-display mt-5 text-[clamp(2.6rem,7.5vw,5rem)] font-light leading-[0.98] text-bone">
            <SplitWords text={doctor.fullName} immediate delay={0.15} />
          </h1>

          <motion.p
            className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-bone/70"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: EASE }}
          >
            {doctor.tagline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.72, ease: EASE }}
          >
            <Magnetic>
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-champagne px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--champagne)_70%,transparent)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </a>
            </Magnetic>

            <a
              href={doctor.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.78rem] text-bone/70 transition-colors hover:text-champagne"
            >
              <Instagram className="h-4 w-4" />
              {doctor.instagramHandle}
            </a>
          </motion.div>
        </div>

        {/* Retrato — moldura preparada para receber a fotografia oficial */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none"
            style={{ perspective: "1200px" }}
          >
            <TiltCard className="relative h-full w-full" maxTilt={4}>
              <div className="relative h-full w-full overflow-hidden rounded-sm border border-champagne/20 bg-gradient-to-br from-ink-soft via-ink to-ink shadow-[0_40px_90px_-30px_rgba(0,0,0,0.65)]">
                <div
                  className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,color-mix(in_oklab,var(--champagne)_14%,transparent),transparent_60%)]"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[7rem] italic text-bone/10 sm:text-[9rem]">
                    HP
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-bone/10 bg-ink/60 px-5 py-3 backdrop-blur-sm">
                  <span className="text-[0.6rem] uppercase tracking-[0.22em] text-bone/50">
                    Fotografia oficial
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.22em] text-champagne/80">
                    Em breve
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        className="absolute inset-x-0 bottom-8 mx-auto hidden w-fit flex-col items-center gap-2 text-bone/50 transition-colors hover:text-champagne sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Explorar</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
