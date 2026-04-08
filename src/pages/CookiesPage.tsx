import PageShell from "@/components/landing/PageShell";

const sections = [
  {
    title: "O que são cookies",
    paragraphs: [
      "Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você acessa um site. Eles permitem que a plataforma reconheça o seu navegador, mantenha preferências e colete informações sobre como você interage com o produto.",
    ],
  },
  {
    title: "Cookies estritamente necessários",
    paragraphs: [
      "São cookies indispensáveis para o funcionamento da plataforma. Sem eles, partes essenciais do Zintria não funcionariam corretamente — como autenticação, manutenção de sessão e controle de segurança da corrida.",
      "Esses cookies não podem ser desativados e não armazenam informações de identificação pessoal além do necessário para a operação técnica.",
    ],
    examples: [
      { name: "zintria_session", purpose: "Mantém a sessão autenticada do jogador durante a navegação." },
      { name: "XSRF-TOKEN", purpose: "Proteção contra requisições forjadas (CSRF) em ações do usuário." },
    ],
  },
  {
    title: "Cookies de desempenho e análise",
    paragraphs: [
      "Utilizamos cookies de análise para entender como os usuários interagem com a plataforma — quais páginas são mais acessadas, onde ocorrem problemas de navegação e como melhorar a experiência.",
      "Esses dados são coletados de forma agregada e não identificam você individualmente.",
    ],
  },
  {
    title: "Cookies de portais corporativos",
    paragraphs: [
      "Em portais corporativos, podem ser utilizados cookies adicionais para identificar o contexto do portal acessado, o modo de autenticação vigente e preferências da empresa contratante.",
      "Esses cookies são restritos ao ambiente do portal e não são compartilhados com outros portais ou com o ambiente público.",
    ],
  },
  {
    title: "Armazenamento local (localStorage / sessionStorage)",
    paragraphs: [
      "Além de cookies, a plataforma pode utilizar o armazenamento local do navegador (localStorage e sessionStorage) para manter preferências de interface, estado temporário de partidas e dados que não precisam ser enviados ao servidor a cada requisição.",
      "Esses dados ficam no seu dispositivo e são acessados apenas pelo Zintria.",
    ],
  },
  {
    title: "Controle e gestão",
    paragraphs: [
      "Você pode configurar seu navegador para bloquear ou excluir cookies a qualquer momento. Isso pode impactar o funcionamento de certas funcionalidades do Zintria — especialmente autenticação e continuidade de partidas.",
      "As configurações de cookies variam por navegador. Consulte as instruções do seu navegador para gerenciar suas preferências.",
    ],
  },
  {
    title: "Atualizações desta política",
    paragraphs: [
      "Esta Política de Cookies pode ser atualizada conforme o produto evolui ou a legislação exige. A versão vigente estará sempre disponível nesta página.",
      "Em caso de dúvidas, entre em contato pelo e-mail contato@etecsystems.com.br.",
    ],
  },
];

const CookiesPage = () => {
  return (
    <PageShell
      title="Política de Cookies"
      subtitle="Como o Zintria utiliza cookies e armazenamento local para operar, autenticar e melhorar a experiência da plataforma."
      accent="accent"
    >
      <div className="w-full max-w-4xl space-y-4">
        <p className="text-base leading-8 text-muted-foreground mb-8">
          Esta política descreve como o <strong className="text-foreground">Zintria</strong> utiliza
          cookies e tecnologias similares de armazenamento no dispositivo do usuário.
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
              {"examples" in section && section.examples && (
                <div className="mt-4 overflow-hidden rounded-xl border border-border/40">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/40 bg-muted/30">
                        <th className="px-4 py-2.5 text-left font-semibold text-foreground">Cookie</th>
                        <th className="px-4 py-2.5 text-left font-semibold text-foreground">Finalidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.examples.map((ex) => (
                        <tr key={ex.name} className="border-b border-border/20 last:border-0">
                          <td className="px-4 py-3 font-mono text-xs text-primary">{ex.name}</td>
                          <td className="px-4 py-3 text-muted-foreground">{ex.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
};

export default CookiesPage;
