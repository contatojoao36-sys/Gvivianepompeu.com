import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, ShoppingBag, X } from "lucide-react";
import { site } from "@/lib/site";
import { MoonMark } from "./MoonMark";

const EASE = [0.16, 1, 0.3, 1] as const;

const NAV_LINKS = [
  { label: "Categorias", href: "#categorias" },
  { label: "Mais desejados", href: "#mais-desejados" },
  { label: "Universo NaLua", href: "#universo" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[padding,background-color,box-shadow] duration-500 ${
          scrolled
            ? "bg-cream/90 py-2.5 shadow-[0_10px_30px_-20px_rgba(44,26,48,0.45)] backdrop-blur-sm"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-5">
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 active:scale-95"
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <a
            href="#topo"
            className="font-script text-primary flex items-center gap-1.5 text-[1.6rem] leading-none transition-transform active:scale-95"
            style={{ fontSize: scrolled ? "1.5rem" : "1.75rem" }}
          >
            {site.brandScript}
          </a>

          <a
            href={site.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir para a loja"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 active:scale-95"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="nalua-gradient fixed inset-0 z-50 flex flex-col overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-5 py-4">
              <MoonMark className="h-8 w-8 text-white/90" />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 active:scale-95"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <nav className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-2 px-5 pb-16">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 + i * 0.07, ease: EASE }}
                  className="font-display py-3 text-[2rem] italic text-white transition-opacity active:opacity-70"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href={site.allProductsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 + NAV_LINKS.length * 0.07, ease: EASE }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary shadow-[0_16px_36px_-16px_rgba(0,0,0,0.4)] transition-transform active:scale-95"
              >
                Ver loja completa
              </motion.a>

              <motion.a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12 + (NAV_LINKS.length + 1) * 0.07,
                  ease: EASE,
                }}
                className="mt-8 inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.24em] text-white/90"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.75} />
                {site.handle}
              </motion.a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
