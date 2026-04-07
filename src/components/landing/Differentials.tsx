import { motion } from "framer-motion";
import { Sparkles, Shield, Gauge, Eye, Puzzle, Repeat } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Experiência, não formulário",
    description: "Torres com progressão visual, score ao vivo e ranking. Muito além de perguntas e respostas.",
  },
  {
    icon: Eye,
    title: "Dados que revelam",
    description: "Leitura de afinidade, domínio e gaps gerada pela interação — não por autoavaliação.",
  },
  {
    icon: Puzzle,
    title: "Flexibilidade total",
    description: "Monte torres com conteúdo próprio ou explore o catálogo. Adaptável a qualquer tema ou marca.",
  },
  {
    icon: Repeat,
    title: "Recorrência natural",
    description: "A estrutura de níveis e conquistas faz as pessoas voltarem — sem precisar forçar.",
  },
  {
    icon: Gauge,
    title: "Implementação rápida",
    description: "De zero à primeira torre funcionando em minutos. Sem complexidade técnica.",
  },
  {
    icon: Shield,
    title: "Escalável e seguro",
    description: "Infraestrutura pronta para milhares de participantes simultâneos com dados protegidos.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-accent mb-3 tracking-wide uppercase">
            Diferenciais
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Por que o Zintria não é "mais um quiz"
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-surface-elevated border border-border hover:border-accent/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
