import { Instagram, MessageCircle, CalendarDays, ArrowUpRight } from "lucide-react";
import { links } from "@/lib/content";
import { RevealUp } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

const ICONS = { Instagram, WhatsApp: MessageCircle, Agendamento: CalendarDays } as const;

export function Links() {
  return (
    <section id="contato" className="bg-bone py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <RevealUp>
          <span className="eyebrow text-ink/50">Canais</span>
        </RevealUp>
        <RevealUp delay={0.08}>
          <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.08] text-ink">
            Fale com a Dra. Helo
          </h2>
        </RevealUp>

        <div className="mt-14 flex flex-col gap-4">
          {links.map((link, i) => {
            const Icon = ICONS[link.label as keyof typeof ICONS];
            const row = (
              <div
                className={`group flex items-center justify-between rounded-sm border px-6 py-5 transition-colors duration-300 ${
                  link.pending
                    ? "cursor-default border-ink/8 bg-ink/[0.02]"
                    : "border-ink/12 bg-porcelain hover:border-champagne/60"
                }`}
              >
                <span className="flex items-center gap-4">
                  <Icon
                    className={`h-5 w-5 ${link.pending ? "text-ink/25" : "text-champagne"}`}
                  />
                  <span>
                    <span
                      className={`block font-display text-xl italic ${link.pending ? "text-ink/40" : "text-ink"}`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`block text-[0.75rem] ${link.pending ? "text-ink/35" : "text-ink/55"}`}
                    >
                      {link.detail}
                    </span>
                  </span>
                </span>
                {!link.pending ? (
                  <ArrowUpRight className="h-5 w-5 text-ink/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-champagne" />
                ) : null}
              </div>
            );

            return (
              <RevealUp key={link.label} delay={i * 0.08} y={16}>
                {link.pending ? (
                  row
                ) : (
                  <Magnetic strength={4}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                      {row}
                    </a>
                  </Magnetic>
                )}
              </RevealUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
