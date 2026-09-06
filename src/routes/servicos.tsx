import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

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
  link: string;
  observacao?: string;
};

const SERVICOS: Servico[] = [
  {
    numero: "01",
    titulo: "Genealogia do zero",
    texto: "Quero pesquisar minha história familiar, mas não sei por onde começar.",
    cta: "Quero começar minha pesquisa",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20Quero%20iniciar%20minha%20pesquisa%20do%20zero%20e%20preciso%20de%20ajuda",
  },
  {
    numero: "02",
    titulo: "Assessoria em pesquisa genealógica",
    texto: "Já iniciei minha pesquisa e preciso de apoio especializado para continuar.",
    cta: "Solicitar apoio especializado",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20J%C3%A1%20iniciei%20minha%20pesquisa%20e%20preciso%20de%20apoio%20especializado%20para%20continuar.%20",
  },
  {
    numero: "03",
    titulo: "Pesquisa de registros no Brasil",
    texto:
      "Pesquisa de registros no Brasil: localização e obtenção de registros brasileiros específicos.",
    cta: "Solicitar pesquisa no Brasil",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20Preciso%20pesquisar%20%20registros%20no%20Brasil:%20localiza%C3%A7%C3%A3o%20e%20obten%C3%A7%C3%A3o%20de%20registros%20brasileiros%20espec%C3%ADficos.",
  },
  {
    numero: "04",
    titulo: "Pesquisa de registros na Itália ou em Portugal",
    texto:
      "Preciso localizar ou obter uma certidão ou documento específico na Itália ou em Portugal.",
    cta: "Solicitar pesquisa internacional",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20Preciso%20localizar%20ou%20obter%20uma%20certid%C3%A3o%20ou%20documento%20espec%C3%ADfico%20na%20It%C3%A1lia%20ou%20em%20Portugal.",
  },
  {
    numero: "05",
    titulo: "Cidadania portuguesa ou italiana — documentação completa",
    texto:
      "Já possuo os documentos necessários e preciso de assessoria para organizar e conduzir as próximas etapas do processo.",
    cta: "Solicitar assessoria para cidadania",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20J%C3%A1%20possuo%20os%20documentos%20necess%C3%A1rios%20para%20a%20cidadania%20Italiana%20ou%20Portuguesa%20e%20preciso%20de%20assessoria%20para%20organizar%20e%20conduzir%20as%20pr%C3%B3ximas%20etapas%20do%20processo.",
  },
  {
    numero: "06",
    titulo: "Cidadania portuguesa ou italiana — documentação incompleta",
    texto:
      "Ainda preciso localizar documentos, confirmar a linha familiar ou verificar quais registros serão necessários.",
    cta: "Solicitar diagnóstico documental",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20Ainda%20preciso%20localizar%20documentos%2C%20confirmar%20a%20linha%20familiar%20ou%20verificar%20quais%20registros%20ser%C3%A3o%20necess%C3%A1rios.",
  },
  {
    numero: "07",
    titulo: "Mentoria individual",
    texto:
      "Acompanhamento individual para quem deseja desenvolver uma pesquisa própria com orientação metodológica. (Mínimo 5 encontros quinzenais)",
    cta: "Solicitar mentoria individual",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20Quero%20mentoria%20individual%20para%20a%20minha%20pesquisa%20geneal%C3%B3gica.",
  },
  {
    numero: "08",
    titulo: "Treinamentos para equipes e instituições",
    texto:
      "Formações personalizadas para arquivos, empresas, associações, instituições de ensino e equipes que utilizam genealogia, documentação histórica ou história da família de forma profissional.",
    cta: "Solicitar proposta de treinamento",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20Quero%20treinar%20minha%20equipe.",
  },
  {
    numero: "09",
    titulo: "Reunião inicial com especialista",
    texto:
      "Atendimento individual, mediante agendamento, para dúvidas. Este é um serviço remunerado. Tempo: 30 min.",
    cta: "Agendar reunião remunerada",
    link: "https://wa.me/5515997030525?text=Ol%C3%A1%20equipe%20da%20Viviane%20Pompeu.%20Quero%20um%20atendimento%20individual%20pago.%20",
  },
];

function ServicosPage() {
  return (
    <PageShell
      eyebrow="Serviços"
      title="Como podemos ajudar em sua pesquisa?"
      subtitle="Escolha a opção que melhor representa o momento atual da sua pesquisa. A partir das informações fornecidas, nossa equipe seguirá com o atendimento mais adequado."
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
                  href={s.link}
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
