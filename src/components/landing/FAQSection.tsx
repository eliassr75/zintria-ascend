import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O Zintria é só um quiz gamificado?",
    a: "Não. O Zintria é uma plataforma de desafios com estrutura de torres, progressão por andares, ranking ao vivo e leitura de desempenho. A gamificação é o motor — o valor real está nos dados de domínio, afinidade e engajamento que a plataforma gera automaticamente.",
  },
  {
    q: "Como funciona o portal exclusivo para empresas?",
    a: "Cada empresa recebe um subdomínio próprio (ex: suaempresa.zintria.com.br) com identidade visual configurável. Os colaboradores acessam via link ou e-mail e jogam dentro do ambiente da empresa, com dados isolados e relatórios exclusivos.",
  },
  {
    q: "Preciso criar meu próprio conteúdo?",
    a: "Você pode criar torres com conteúdo 100% personalizado ou utilizar nosso catálogo temático pronto. Também é possível combinar ambos — torre com andares de conteúdo próprio mesclados com desafios do catálogo.",
  },
  {
    q: "Como funciona a leitura de desempenho?",
    a: "Cada interação dentro dos desafios gera dados estruturados. O Zintria mapeia automaticamente domínios, afinidades e lacunas por colaborador — tudo sem formulários de autoavaliação. Os dados refletem comportamento real em contexto de jogo.",
  },
  {
    q: "Os dados dos colaboradores ficam protegidos?",
    a: "Sim. A plataforma opera com isolamento de dados por empresa, autenticação por token, e conformidade com as diretrizes da LGPD. Nenhum dado de colaboradores é compartilhado entre empresas ou exposto publicamente sem permissão.",
  },
  {
    q: "Quanto tempo leva para configurar uma torre?",
    a: "Com o catálogo, minutos. Com conteúdo personalizado, o processo é guiado e intuitivo — a maioria dos criadores lança sua primeira torre no mesmo dia. Não é necessário conhecimento técnico.",
  },
  {
    q: "A plataforma integra com sistemas de RH ou LMS?",
    a: "Atualmente os relatórios são exportáveis em formatos compatíveis com planilhas e sistemas de gestão. Integrações via API estão disponíveis para planos corporativos — entre em contato com nosso time para detalhes.",
  },
  {
    q: "Existe limite de participantes?",
    a: "A infraestrutura suporta milhares de participantes simultâneos com ranking ao vivo. Escale conforme seu público cresce — sem degradação de performance.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-surface-elevated border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:glow-primary transition-all"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5 text-[15px]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
