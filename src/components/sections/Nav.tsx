import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { doctor, nav, primaryCta } from "@/lib/content";
import { Magnetic } from "@/components/motion/Magnetic";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > 120 && latest > previous);
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass-nav border-b border-ink/8" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#hero"
          className={`font-display text-lg italic tracking-tight transition-colors duration-500 sm:text-xl ${
            scrolled ? "text-ink" : "text-bone"
          }`}
        >
          {doctor.firstName} Porcelli
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                scrolled ? "text-ink/70 hover:text-ink" : "text-bone/75 hover:text-bone"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Magnetic>
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-champagne px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              {primaryCta.label}
            </a>
          </Magnetic>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menu"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 md:hidden ${
                scrolled ? "text-ink" : "text-bone"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="border-ink/10 bg-bone p-8">
            <SheetTitle className="font-display text-2xl italic text-ink">
              {doctor.fullName}
            </SheetTitle>
            <SheetDescription className="text-ink/60">{doctor.specialty}</SheetDescription>
            <div className="mt-10 flex flex-col gap-6">
              {nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="font-display text-2xl italic text-ink transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </div>
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-bone"
            >
              {primaryCta.label}
            </a>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
