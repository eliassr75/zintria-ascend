import PageShell from "@/components/landing/PageShell";
import { Building2, GraduationCap, Zap, Users, BarChart3, Trophy } from "lucide-react";

interface UseCase {
  icon: React.ElementType;
  segment: string;
  title: string;
  description: string;
  highlights: string[];
  color: string;
}

const useCases: UseCase[] = [
  {
    icon: Building2,
    segment: "Empresas e RH",
    title: "Desenvolvimento interno com dados reais",
    description:
      "Crie um portal corporativo com torres temáticas para as áreas técnicas da sua empresa. Colaboradores sobem andares no próprio ritmo, gerando dados de domínio, afinidade e evolução — sem autoavaliação, sem formulários.",
    highlights: [
      "Portal com subdomínio exclusivo da empresa",
      "Torres por área: backend, frontend, devops, dados",
      "Relatórios de desempenho por colaborador e por equipe",
      "Histórico de partidas e progressão ao longo do tempo",
    ],
    color: "#38bdf8",
  },
  {
    icon: GraduationCap,
    segment: "Educação e treinamento",
    title: "Quiz estruturado para aprendizado ativo",
    description:
      "Transforme conteúdo técnico em desafio progressivo. Organize o material em torres por tema, com andares que aumentam de dificuldade, feedback imediato e ranking que mantém o engajamento ao longo do curso.",
    highlights: [
      "Banco de questões próprio ou importado",
      "Progressão por andar com dificuldade gradual",
      "Ranking entre alunos e turmas",
      "Métricas por tópico para identificar lacunas",
    ],
    color: "#f59e0b",
  },
  {
    icon: Zap,
    segment: "Eventos e hackathons",
    title: "Engajamento gamificado no evento",
    description:
      "Use o Zintria como atividade âncora em eventos técnicos. Crie desafios temáticos, abra para todos os participantes e exiba o ranking ao vivo. Funciona como icebreaker, competição técnica e atração de stand.",
    highlights: [
      "Configuração rápida de torres para o tema do evento",
      "Acesso sem cadastro complexo (link + nome)",
      "Ranking público em tempo real",
      "Resultado por participante ao final do evento",
    ],
    color: "#a78bfa",
  },
  {
    icon: Users,
    segment: "Times de tecnologia",
    title: "Benchmark técnico entre equipes",
    description:
      "Compare o nível técnico de diferentes times ou squads usando as mesmas torres. Identifique onde cada equipe tem domínio sólido e onde existem lacunas que justificam investimento em formação.",
    highlights: [
      "Comparação lado a lado entre squads",
      "Score por categoria de conhecimento",
      "Heatmap de domínio por competência",
      "Subsídio para decisões de contratação e capacitação",
    ],
    color: "#34d399",
  },
  {
    icon: BarChart3,
    segment: "Seleção e recrutamento",
    title: "Triagem técnica com evidência objetiva",
    description:
      "Substitua o teste técnico genérico por uma experiência gamificada que mede domínio real. O candidato resolve andares sob pressão de tempo e ranking — e você recebe dados de score, ritmo e consistência.",
    highlights: [
      "Torres calibradas por vaga e nível",
      "Score, tempo por questão e consistência de resposta",
      "Ranking entre candidatos do mesmo processo",
      "Relatório exportável para o time de RH",
    ],
    color: "#fb7185",
  },
  {
    icon: Trophy,
    segment: "Comunidades e grupos",
    title: "Competições abertas por tema",
    description:
      "Organize campeonatos de quiz técnico para a sua comunidade. Abra uma torre específica por tempo limitado, rankeie os participantes e divulgue os resultados — tudo com a estética do jogo que mantém as pessoas voltando.",
    highlights: [
      "Torres públicas abertas para qualquer participante",
      "Janela de tempo configurável para a competição",
      "Ranking final e resultado individual",
      "Compartilhamento de perfil e score",
    ],
    color: "#4ade80",
  },
];

const CasosDeUsoPage = () => {
  return (
    <PageShell
      title="Casos de uso"
      subtitle="Como diferentes contextos utilizam o Zintria para gerar engajamento, medir conhecimento e tomar decisões com dados reais."
      accent="accent"
    >
      <div className="w-full max-w-5xl space-y-5">
        {useCases.map((useCase) => {
          const Icon = useCase.icon;
          return (
            <div
              key={useCase.segment}
              className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                {/* Left */}
                <div className="md:w-72 shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        background: `${useCase.color}18`,
                        borderColor: `${useCase.color}30`,
                      }}
                    >
                      <Icon className="size-5" style={{ color: useCase.color }} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: useCase.color }}
                    >
                      {useCase.segment}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground leading-snug">
                    {useCase.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>

                {/* Right */}
                <div className="flex-1">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    O que você obtém
                  </p>
                  <ul className="space-y-2.5">
                    {useCase.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full"
                          style={{ background: useCase.color }}
                        />
                        <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5 mt-6">
          <p className="text-sm leading-7 text-muted-foreground">
            <strong className="text-foreground">Tem um caso de uso diferente?</strong>{" "}
            Entre em{" "}
            <a href="/contato" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              contato
            </a>{" "}
            para entender como o Zintria pode se adaptar ao seu contexto específico.
          </p>
        </div>
      </div>
    </PageShell>
  );
};

export default CasosDeUsoPage;
