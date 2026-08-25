import { doctor, primaryCta } from "@/lib/content";
import { RevealUp } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function CTA() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-28 text-center sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_100%,color-mix(in_oklab,var(--champagne)_16%,transparent),transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <RevealUp>
          <span className="eyebrow text-champagne/80">{doctor.specialty}</span>
        </RevealUp>
        <RevealUp delay={0.08}>
          <h2 className="font-display mt-5 text-[clamp(2.2rem,6vw,3.6rem)] font-light leading-[1.05] text-bone">
            Agende sua avaliação
          </h2>
        </RevealUp>
        <RevealUp delay={0.16}>
          <p className="mx-auto mt-5 max-w-md text-[0.98rem] leading-relaxed text-bone/60">
            {doctor.tagline}
          </p>
        </RevealUp>
        <RevealUp delay={0.26}>
          <div className="mt-10 flex justify-center">
            <Magnetic>
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-champagne px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_25px_60px_-20px_color-mix(in_oklab,var(--champagne)_65%,transparent)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {primaryCta.label} · {primaryCta.sublabel}
              </a>
            </Magnetic>
          </div>
        </RevealUp>
      </div>
    </section>
  );
}
