import { motion } from "framer-motion";
import { ChevronDown, Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { MoonMark } from "./MoonMark";

const EASE = [0.16, 1, 0.3, 1] as const;

const SPARKLES = [
  { top: "18%", left: "14%", size: 14, delay: 0 },
  { top: "28%", left: "82%", size: 10, delay: 0.6 },
  { top: "68%", left: "10%", size: 9, delay: 1.1 },
  { top: "74%", left: "86%", size: 13, delay: 0.3 },
  { top: "12%", left: "58%", size: 8, delay: 1.5 },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="nalua-gradient grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-14 text-center text-white"
    >
      {SPARKLES.map((s, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute text-white/80"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          initial={{ opacity: 0.15, scale: 0.8 }}
          animate={{ opacity: [0.15, 0.85, 0.15], scale: [0.8, 1.05, 0.8] }}
          transition={{ duration: 4.5, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0 l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE }}
        className="relative h-24 w-24 sm:h-28 sm:w-28"
      >
        <MoonMark className="h-full w-full" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        className="font-script mt-3 pb-2 text-[clamp(3.4rem,17vw,5.5rem)] leading-[1.45] text-white"
      >
        {site.brandScript}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
        className="mt-1 text-[0.78rem] font-medium uppercase tracking-[0.32em] text-white/95"
      >
        {site.tagline}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.68, ease: EASE }}
        className="mx-auto mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/90 sm:max-w-sm sm:text-base"
      >
        {site.promise}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.82, ease: EASE }}
        className="mt-9 flex w-full max-w-xs flex-col items-center gap-3"
      >
        <a
          href={site.allProductsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_20px_45px_-18px_rgba(44,26,48,0.65)] transition-transform active:scale-95"
        >
          Comprar agora
        </a>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-white/60 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors active:bg-white/10"
        >
          <Instagram className="h-4 w-4" strokeWidth={1.75} />
          Conhecer no Instagram
        </a>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute bottom-6 text-white/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
