import PageShell from "@/components/landing/PageShell";

const sections = [
  {
    title: "Escopo e aceitação",
    paragraphs: [
      "Ao acessar ou utilizar o Zintria, o usuário concorda com estes Termos de Uso. O documento se aplica ao ambiente público do jogo, aos perfis compartilháveis, aos rankings e aos portais corporativos disponibilizados para empresas contratantes.",
      "Se o usuário não concordar com estas condições, não deve utilizar a plataforma.",
    ],
  },
  {
    title: "Finalidade da plataforma",
    paragraphs: [
      "O Zintria é uma plataforma de desafios por torres, andares e perguntas, com histórico de partidas, rankings, métricas de afinidade, domínio, skills e progresso.",
      "A plataforma pode ser usada em contextos de aprendizagem, prática técnica, experiências gamificadas, programas internos de desenvolvimento e portais corporativos vinculados a empresas.",
    ],
  },
  {
    title: "Modos de acesso",
    paragraphs: [
      "No ambiente público, o acesso pode depender de nome, email e link de autenticação. Em portais corporativos, o acesso pode depender de nome e email, ou de CPF combinado com matrícula ou data de nascimento, conforme a configuração definida pela empresa responsável pelo portal.",
      "O usuário deve fornecer dados verdadeiros, atualizados e compatíveis com o modo de autenticação exigido no respectivo ambiente.",
    ],
  },
  {
    title: "Integridade da experiência",
    paragraphs: [
      "É proibido manipular resultados, fraudar respostas, explorar falhas, automatizar interações indevidas, compartilhar acessos de forma irregular ou praticar qualquer ato que comprometa a integridade das corridas, rankings, métricas ou da plataforma.",
      "A EtecSystems poderá invalidar partidas, remover pontuações, limitar funcionalidades, suspender acessos ou adotar outras medidas técnicas e administrativas sempre que identificar comportamento incompatível com a integridade do jogo.",
    ],
  },
  {
    title: "Ranking, métricas e perfil público",
    paragraphs: [
      "A plataforma pode exibir nome de jogador, pontuações, progresso, ranking e métricas derivadas da atividade do usuário. Em determinados fluxos, também pode existir perfil compartilhável por URL pública.",
      "Essas informações fazem parte da experiência do produto. Ao utilizar o Zintria, o usuário reconhece que tais elementos podem ser exibidos nos limites do fluxo disponível em cada ambiente.",
    ],
  },
  {
    title: "Portais corporativos",
    paragraphs: [
      "Em portais corporativos, a empresa contratante define o escopo das torres liberadas, o modo de autenticação dos colaboradores e parte das regras operacionais aplicáveis ao portal.",
      "A empresa é responsável pela legitimidade do uso do portal junto aos seus colaboradores, pela adequação da base de identificação que cadastrar e pela observância das regras legais e contratuais aplicáveis à sua operação.",
    ],
  },
  {
    title: "Conteúdo próprio e conteúdo importado",
    paragraphs: [
      "A plataforma permite criar categorias, torres e bancos de questões próprios, além de reaproveitar partes do catálogo público e importar conteúdo por JSON, planilha ou outros fluxos administrativos disponíveis.",
      "Quem cria, importa ou publica conteúdo na plataforma declara possuir os direitos, autorizações e bases necessárias para fazê-lo. A responsabilidade por conteúdo próprio ou importado por empresa ou usuário permanece com quem o forneceu.",
    ],
  },
  {
    title: "Propriedade intelectual",
    paragraphs: [
      "A estrutura da plataforma, a identidade visual, os componentes do produto, a lógica de jogo, a organização da experiência, os materiais próprios e o catálogo original do Zintria pertencem à EtecSystems ou aos respectivos titulares.",
      "É vedado reproduzir, redistribuir, explorar comercialmente ou reutilizar indevidamente elementos da plataforma sem autorização, ressalvados os conteúdos cuja titularidade pertença a terceiros que os tenham inserido legitimamente no sistema.",
    ],
  },
  {
    title: "Disponibilidade e mudanças",
    paragraphs: [
      "A plataforma pode sofrer ajustes, evoluções, mudanças de regra, manutenção, limitação temporária ou descontinuação de funcionalidades, total ou parcial, sem obrigação de continuidade idêntica ao estado atual.",
      "Métricas, regras de progressão, estrutura das corridas, catálogo de torres e elementos visuais podem ser atualizados ao longo do tempo.",
    ],
  },
  {
    title: "Limitação de responsabilidade",
    paragraphs: [
      "O Zintria é uma ferramenta de experiência, avaliação e apoio analítico. Seus resultados, rankings e métricas não substituem, por si só, avaliação humana, pedagógica, técnica, psicológica, acadêmica, trabalhista ou de recrutamento.",
      "A EtecSystems não se responsabiliza por decisões tomadas exclusivamente com base na plataforma, nem por indisponibilidades temporárias, falhas de terceiros, oscilações externas ou conteúdos inseridos por terceiros no ambiente.",
    ],
  },
  {
    title: "Contato, atualizações e foro",
    paragraphs: [
      "Estes Termos podem ser atualizados a qualquer momento, passando a valer a versão vigente publicada nesta página.",
      "Dúvidas sobre uso da plataforma podem ser encaminhadas para contato@etecsystems.com.br. Fica eleito o foro de Gramado/RS, salvo disposição legal em contrário.",
    ],
  },
];

const TermsPage = () => {
  return (
    <PageShell
      title="Termos de Uso"
      subtitle="Condições aplicáveis ao acesso e uso do Zintria, dos portais corporativos e dos ambientes públicos operados pela plataforma."
    >
      <div className="w-full max-w-4xl space-y-4">
        <p className="text-base leading-8 text-muted-foreground mb-8">
          Estes Termos de Uso descrevem as condições aplicáveis ao acesso e uso do{" "}
          <strong className="text-foreground">Zintria</strong>, incluindo sua experiência pública,
          seus rankings e perfis compartilháveis, bem como portais corporativos operados em nome de
          empresas contratantes. O acesso, navegação ou uso da plataforma implica ciência e
          concordância com estes termos e com a política de privacidade vigente.
        </p>

        {sections.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-border/60 bg-card/40 p-6 space-y-3"
          >
            <h2 className="font-display text-xl font-semibold text-foreground">{section.title}</h2>
            <div className="space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
};

export default TermsPage;
