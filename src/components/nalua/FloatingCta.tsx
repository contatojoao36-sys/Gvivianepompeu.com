import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={site.allProductsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-2xl px-5 pb-4"
        >
          <span className="flex w-full items-center justify-center rounded-full bg-primary py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_16px_40px_-14px_rgba(178,61,115,0.6)] transition-transform active:scale-[0.98]">
            Comprar agora
          </span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
