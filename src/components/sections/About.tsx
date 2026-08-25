import { about, doctor } from "@/lib/content";
import { RevealUp, DrawLine } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-bone py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Painel editorial — preparado para a fotografia oficial */}
        <RevealUp className="order-2 lg:order-1">
          <Parallax speed={0.08} className="relative mx-auto aspect-[3/4] w-full max-w-sm">
            <div className="relative h-full w-full overflow-hidden rounded-sm bg-gradient-to-b from-blush/70 via-blush/30 to-bone">
              <div
                className="absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_100%,color-mix(in_oklab,var(--champagne)_20%,transparent),transparent_65%)]"
                aria-hidden
              />
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-ink/45">
                  Fotografia editorial — em breve
                </span>
              </div>
            </div>
          </Parallax>
        </RevealUp>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <RevealUp>
            <span className="eyebrow text-ink/50">{about.eyebrow}</span>
          </RevealUp>

          <RevealUp delay={0.08}>
            <h2 className="font-display mt-4 max-w-lg text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.08] text-ink">
              {about.heading}
            </h2>
          </RevealUp>

          <DrawLine className="mt-8 max-w-[6rem]" delay={0.2} />

          <div className="mt-8 max-w-lg space-y-5">
            {about.paragraphs.map((p, i) => (
              <RevealUp key={p} delay={0.24 + i * 0.1}>
                <p className="text-[1rem] leading-relaxed text-ink/70">{p}</p>
              </RevealUp>
            ))}
          </div>

          <RevealUp delay={0.45}>
            <p className="font-display mt-10 max-w-lg text-xl italic leading-snug text-ink/85">
              “{doctor.tagline}”
            </p>
          </RevealUp>
        </div>
      </div>
    </section>
  );
}
