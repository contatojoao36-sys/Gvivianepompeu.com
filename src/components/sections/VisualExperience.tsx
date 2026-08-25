import { Parallax } from "@/components/motion/Parallax";
import { RevealUp } from "@/components/motion/Reveal";

const PANELS = [
  { tone: "from-champagne/25 via-ink to-ink", speed: 0.1 },
  { tone: "from-blush/20 via-ink to-ink", speed: -0.16 },
  { tone: "from-ink via-ink to-champagne/20", speed: 0.18 },
  { tone: "from-ink via-ink to-blush/15", speed: -0.1 },
];

export function VisualExperience() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealUp>
          <span className="eyebrow text-champagne/80">Experiência</span>
        </RevealUp>
        <RevealUp delay={0.08}>
          <h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,4.5vw,3.2rem)] font-light leading-[1.08] text-bone">
            Ambiente e cuidado
          </h2>
        </RevealUp>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {PANELS.map((panel, i) => (
            <Parallax
              key={i}
              speed={panel.speed}
              className={i % 2 === 1 ? "mt-10 sm:mt-16" : ""}
            >
              <RevealUp delay={i * 0.08} y={40}>
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-sm border border-bone/8 bg-gradient-to-b ${panel.tone}`}
                >
                  <div
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "radial-gradient(60% 40% at 50% 20%, rgba(255,255,255,0.35), transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="text-[0.55rem] uppercase tracking-[0.2em] text-bone/35">
                      Galeria — em breve
                    </span>
                  </div>
                </div>
              </RevealUp>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
