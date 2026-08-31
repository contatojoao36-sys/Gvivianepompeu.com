import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { whatsappFor } from "@/lib/site";

const title = "Serviços de genealogia e pesquisa documental";
const description =
  "Conheça os serviços de pesquisa genealógica, localização de registros, cidadania, mentoria e treinamentos.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicosPage,
});

type Servico = {
  numero: string;
  titulo: string;
  texto: string;
  cta: string;
  observacao?: string;
};

const SERVICOS: Servico[] = [
  {
    numero: "01",
    titulo: "Genealogia do zero",
    texto: "Quero pesquisar minha história familiar, mas não sei por onde começar.",
    cta: "Quero começar minha pesquisa",
  },
  {
    numero: "02",
    titulo: "Assessoria em pesquisa genealógica",
    texto:
      "Já iniciei minha pesquisa e preciso de apoio especializado para continuar, organizar as evidências ou superar uma dificuldade.",
    cta: "Solicitar apoio especializado",
  },
  {
    numero: "03",
    titulo: "Pesquisa de registros no Brasil",
    texto:
      "Preciso localizar ou obter um registro brasileiro específico, como nascimento, batismo, casamento, óbito ou outro documento histórico.",
    cta: "Solicitar pesquisa no Brasil",
  },
  {
    numero: "04",
    titulo: "Pesquisa de registros na Itália ou em Portugal",
    texto: "Preciso localizar ou obter uma certidão ou documento específico na Itália ou em Portugal.",
    cta: "Solicitar pesquisa internacional",
  },
  {
    numero: "05",
    titulo: "Cidadania portuguesa ou italiana — documentação completa",
    texto:
      "Já possuo os documentos necessários e preciso de assessoria para organizar e conduzir as próximas etapas do processo.",
    cta: "Solicitar assessoria para cidadania",
    observacao: "Escopo jurídico e documental em confirmação.",
  },
  {
    numero: "06",
    titulo: "Cidadania portuguesa ou italiana — documentação incompleta",
    texto:
      "Ainda preciso localizar documentos, confirmar a linha familiar ou verificar quais registros serão necessários.",
    cta: "Solicitar diagnóstico documental",
    observacao: "Escopo jurídico e documental em confirmação.",
  },
  {
    numero: "07",
    titulo: "Mentoria individual",
    texto:
      "Acompanhamento individual para quem deseja desenvolver uma pesquisa própria com orientação metodológica e análise dos próximos passos.",
    cta: "Solicitar mentoria individual",
  },
  {
    numero: "08",
    titulo: "Treinamentos para equipes e instituições",
    texto:
      "Formações personalizadas para arquivos, empresas, associações, instituições de ensino e equipes que utilizam genealogia, documentação histórica ou história da família de forma profissional.",
    cta: "Solicitar proposta de treinamento",
  },
  {
    numero: "09",
    titulo: "Reunião com especialista",
    texto:
      "Atendimento individual, mediante agendamento, para análise de uma dúvida, caso ou estratégia de pesquisa. Este é um serviço remunerado.",
    cta: "Agendar reunião remunerada",
    observacao: "Preço, duração e política de reagendamento em confirmação.",
  },
];

function ServicosPage() {
  return (
    <PageShell
      eyebrow="Serviços"
      title="Como podemos ajudar em sua pesquisa?"
      subtitle="Escolha a opção que melhor representa o momento atual da sua pesquisa. A partir das informações fornecidas, nossa equipe indicará o caminho mais adequado."
    >
      <div className="space-y-4">
        {SERVICOS.map((s) => (
          <div
            key={s.numero}
            className="rounded-xl border border-forest/12 bg-card px-5 py-5 shadow-[0_10px_30px_-20px_rgba(122,38,58,0.4)]"
          >
            <div className="flex items-start gap-4">
              <span className="font-display text-xl italic text-accent">{s.numero}</span>
              <div className="flex-1">
                <h2 className="font-display text-lg text-forest">{s.titulo}</h2>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink/75">{s.texto}</p>
                {s.observacao ? (
                  <p className="mt-1.5 text-[0.7rem] italic text-ink/45">{s.observacao}</p>
                ) : null}
                <a
                  href={whatsappFor(s.titulo.toLowerCase())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-forest/90"
                >
                  {s.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
