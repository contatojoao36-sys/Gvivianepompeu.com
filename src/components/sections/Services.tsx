import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, doctor } from "@/lib/content";
import { RevealUp } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="servicos" className="bg-bone py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealUp>
          <span className="eyebrow text-ink/50">Serviços</span>
        </RevealUp>
        <RevealUp delay={0.08}>
          <h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.08] text-ink">
            Procedimentos
          </h2>
        </RevealUp>

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Lista editorial */}
          <ul>
            {services.map((service, i) => (
              <RevealUp key={service.index} delay={i * 0.06}>
                <li
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group border-t border-ink/10 py-7 last:border-b"
                >
                  <a
                    href={doctor.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-6"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-display text-sm italic text-champagne">
                        {service.index}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-light text-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-[0.8rem] text-ink/45">{service.caption}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-champagne" />
                  </a>
                </li>
              </RevealUp>
            ))}
          </ul>

          {/* Painel de destaque — acompanha o item em foco */}
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-sm bg-ink lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={hovered ?? "default"}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_100%,color-mix(in_oklab,var(--champagne)_18%,transparent),transparent_65%)]"
                  aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                  <span className="font-display text-6xl italic text-bone/15">
                    {services[hovered ?? 0]?.index}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.22em] text-bone/40">
                    Imagem do procedimento — em breve
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
