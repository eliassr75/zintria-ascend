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
    a: "Não. O Zintria é uma plataforma de desafios com estrutura de torres, progressão, ranking e leitura de desempenho. A gamificação é o motor — o valor está nos dados de domínio, afinidade e engajamento que a plataforma gera.",
  },
  {
    q: "Para quais tipos de organização o Zintria funciona?",
    a: "Empresas que querem engajar times, instituições de ensino que buscam aprendizado ativo, marcas que desejam experiências interativas e organizadores de eventos que precisam de engajamento digital.",
  },
  {
    q: "Preciso criar meu próprio conteúdo?",
    a: "Você pode criar torres com conteúdo 100% personalizado ou utilizar nosso catálogo temático pronto. Também é possível combinar ambos.",
  },
  {
    q: "Como funciona a leitura de desempenho?",
    a: "Cada interação dentro dos desafios gera dados estruturados. O Zintria mapeia automaticamente domínios, afinidades e lacunas — tudo sem formulários de autoavaliação.",
  },
  {
    q: "Quanto tempo leva para configurar uma torre?",
    a: "Com o catálogo, minutos. Com conteúdo personalizado, o processo é guiado e intuitivo — a maioria dos criadores lança sua primeira torre no mesmo dia.",
  },
  {
    q: "Existe limite de participantes?",
    a: "A infraestrutura suporta milhares de participantes simultâneos. Escale conforme seu público cresce.",
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
                className="bg-surface-elevated border border-border rounded-xl px-6 data-[state=open]:glow-primary transition-all"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
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
