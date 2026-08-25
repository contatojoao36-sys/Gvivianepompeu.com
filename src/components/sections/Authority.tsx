import { RevealUp } from "@/components/motion/Reveal";

const VALUES = ["Sofisticação", "Técnica", "Sensibilidade", "Confiança"];

export function Authority() {
  return (
    <section className="border-y border-ink/8 bg-bone py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 sm:px-8">
        {VALUES.map((value, i) => (
          <RevealUp key={value} delay={i * 0.08} y={10} blur={false}>
            <span className="flex items-center gap-10">
              <span className="font-display text-sm italic text-ink/60 sm:text-base">{value}</span>
              {i < VALUES.length - 1 ? (
                <span className="hidden h-4 w-px bg-ink/15 sm:block" aria-hidden />
              ) : null}
            </span>
          </RevealUp>
        ))}
      </div>
    </section>
  );
}
