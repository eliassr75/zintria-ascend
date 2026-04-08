import PageShell from "@/components/landing/PageShell";

const sections = [
  {
    title: "Quem trata os dados e a que esta política se aplica",
    paragraphs: [
      "Esta política se aplica ao tratamento de dados pessoais realizado no Zintria pela EtecSystems, inclusive no ambiente público do produto, nos rankings, nos perfis compartilháveis e nos portais corporativos disponibilizados para empresas contratantes.",
      "Quando uma empresa utiliza portal próprio dentro da plataforma, ela também participa da cadeia de tratamento no âmbito da sua operação, especialmente no fornecimento e gestão da base de colaboradores e do conteúdo próprio que disponibilizar.",
    ],
  },
  {
    title: "Quais dados podem ser coletados",
    paragraphs: [
      "No ambiente público, podem ser coletados nome de exibição, email, tokens de autenticação, histórico de partidas, pontuação, progresso, afinidade, domínio, skills, ranking e interações com a plataforma.",
      "Nos portais corporativos, podem ser tratados dados de identificação e autenticação como nome, email corporativo, CPF normalizado, hash do CPF, últimos 4 dígitos do CPF, matrícula e, conforme o modo de autenticação da empresa, hash da data de nascimento e, quando necessário operacionalmente, versão criptografada do CPF.",
      "Também podem ser coletados dados técnicos de navegação, uso, dispositivo, sessão, logs operacionais e eventos relacionados à integridade da experiência.",
    ],
  },
  {
    title: "Para que os dados são usados",
    paragraphs: [
      "Os dados são utilizados para autenticar o acesso, iniciar e manter corridas, registrar respostas, calcular score, ranking, afinidade, domínio, skills e progresso, disponibilizar perfil do jogador, operar portais corporativos e responder a solicitações de suporte ou exercício de direitos.",
      "Esses dados também podem ser usados para prevenção a fraude, proteção da integridade das corridas, segurança da plataforma, auditoria operacional, melhoria da experiência e cumprimento de obrigações legais e regulatórias.",
    ],
  },
  {
    title: "Base legal e contexto do tratamento",
    paragraphs: [
      "O tratamento ocorre conforme a hipótese legal aplicável a cada caso, podendo envolver execução de serviços, atendimento de solicitação do titular, cumprimento de obrigação legal, exercício regular de direitos, legítimo interesse ou consentimento, quando efetivamente cabível.",
      "Em ambiente corporativo, parte do tratamento decorre da relação entre a empresa contratante e os participantes vinculados ao respectivo portal.",
    ],
  },
  {
    title: "Compartilhamento de dados",
    paragraphs: [
      "Os dados não são vendidos. O compartilhamento pode ocorrer com prestadores de serviço necessários à operação técnica da plataforma, com empresas contratantes no escopo do respectivo portal corporativo e com autoridades ou terceiros quando houver obrigação legal, regulatória ou necessidade de proteção de direitos.",
      "Nos portais corporativos, a empresa contratante pode ter acesso aos dados e resultados que sejam pertinentes ao escopo do portal que administra, incluindo identificação do colaborador, partidas, rankings e métricas ligadas ao ambiente contratado.",
    ],
  },
  {
    title: "Exibição pública e visibilidade de resultados",
    paragraphs: [
      "A plataforma pode exibir nome de jogador, pontuações, posição em ranking, progresso e métricas derivadas da experiência de jogo. Em determinados fluxos, pode existir perfil compartilhável por URL pública.",
      "Ao utilizar o produto, o usuário reconhece que esses elementos podem compor a experiência pública do Zintria ou do portal em que estiver inserido, de acordo com as funcionalidades ativas em cada contexto.",
    ],
  },
  {
    title: "Segurança e retenção",
    paragraphs: [
      "A EtecSystems adota medidas técnicas e organizacionais razoáveis para proteger os dados tratados pela plataforma. Isso inclui, conforme o caso, uso de hash, criptografia, segregação por portal, controle de sessão e mecanismos de proteção contra uso indevido.",
      "Os dados são mantidos pelo tempo necessário para cumprir as finalidades da plataforma, atender obrigações legais, preservar evidências operacionais legítimas ou resguardar direitos, observados os limites e prazos aplicáveis.",
    ],
  },
  {
    title: "Direitos do titular",
    paragraphs: [
      "O titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento e revisão das condições aplicáveis ao tratamento, nos termos da legislação vigente.",
      "As solicitações podem ser encaminhadas para contato@etecsystems.com.br, observadas as verificações razoáveis de identidade e as hipóteses legais de retenção ou restrição.",
    ],
  },
  {
    title: "Atualizações desta política",
    paragraphs: [
      "Esta política pode ser atualizada a qualquer momento para refletir mudanças legais, operacionais ou evoluções do produto. A versão vigente permanece sempre publicada nesta página.",
    ],
  },
];

const PrivacyPage = () => {
  return (
    <PageShell
      title="Política de Privacidade"
      subtitle="Transparência sobre coleta, tratamento, retenção e uso de dados nas experiências públicas e corporativas do Zintria."
    >
      <div className="w-full max-w-4xl space-y-4">
        <p className="text-base leading-8 text-muted-foreground mb-8">
          Esta Política de Privacidade descreve, em nível objetivo e transparente, como o{" "}
          <strong className="text-foreground">Zintria</strong> trata dados pessoais de jogadores,
          visitantes e participantes de portais corporativos.
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

export default PrivacyPage;
