import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import retrato from "@/assets/viviane-retrato.jpg";

const title = "Quem é Viviane Pompeu | Genealogista";
const description =
  "Conheça a trajetória, as especialidades e a atuação profissional de Viviane Pompeu.";

export const Route = createFileRoute("/viviane-pompeu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SobrePage,
});

const AUTORIDADE = [
  "Mais de 3.000 famílias atendidas.",
  "Mais de 10.000 árvores genealógicas analisadas.",
  "Presidente da Associação Profissional de Genealogistas do Brasil.",
  "Palestrante da RootsTech nos anos de 2023, 2024, 2025 e 2026.",
  "Atuação em genealogia brasileira, portuguesa e italiana.",
];

function SobrePage() {
  return (
    <PageShell
      eyebrow="Sobre"
      title="Quem é Viviane Pompeu"
      subtitle="Genealogista profissional, pesquisadora, palestrante, escritora e presidente da APGBR."
    >
      <div className="overflow-hidden rounded-2xl ring-1 ring-forest/10">
        <img
          src={retrato}
          alt="Retrato de Viviane Pompeu, genealogista profissional"
          className="h-auto w-full object-cover"
          loading="eager"
        />
      </div>

      <p className="mt-8 text-[0.95rem] leading-relaxed text-ink/85">
        Genealogista Profissional, fundadora e presidente da Associação dos Profissionais
        Genealogistas do Brasil (APGBR). Pesquisa história da família, metodologia genealógica e
        fontes arquivísticas, com atuação em genealogia portuguesa, italiana e brasileira.
        Palestrante, dedica-se à difusão da Genealogia por meio de cursos, palestras, produção de
        conteúdo, projetos de preservação da memória e formação de genealogistas.
      </p>
      <p className="mt-4 text-[0.8rem] text-ink/60">
        ORCID:{" "}
        <a
          href="https://orcid.org/0009-0009-1049-3201"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          0009-0009-1049-3201
        </a>
        . ID Lattes:{" "}
        <a
          href="http://lattes.cnpq.br/7838542352281750"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          7838542352281750
        </a>
        .
      </p>

      <ul className="mt-8 space-y-3 rounded-xl border border-forest/15 bg-sand/60 p-5">
        {AUTORIDADE.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[0.85rem] text-ink/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/servicos"
          className="flex flex-1 items-center justify-center rounded-lg bg-primary px-5 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-forest/90"
        >
          Conhecer nossos serviços
        </Link>
        <Link
          to="/contato"
          className="flex flex-1 items-center justify-center rounded-lg border border-forest/25 bg-transparent px-5 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-forest transition-colors hover:bg-sand/60"
        >
          Entrar em contato
        </Link>
      </div>

      <p className="mt-6 text-center text-[0.7rem] text-ink/45">
        Instagram de referência:{" "}
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="underline">
          @pesquisaegenealogia
        </a>
      </p>
    </PageShell>
  );
}
