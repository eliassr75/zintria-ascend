import { motion } from "framer-motion";
import { Brain, BarChart3, Flame, Layers } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Engajamento real",
    description: "Mecânicas de progressão, ranking e conquista que mantêm participantes ativos — não por obrigação, mas por vontade.",
  },
  {
    icon: Brain,
    title: "Desenvolvimento de conhecimento",
    description: "Cada desafio é uma oportunidade de aprendizado. A trilha gamificada reforça conteúdos de forma natural e progressiva.",
  },
  {
    icon: BarChart3,
    title: "Leitura de desempenho",
    description: "Identifique afinidades, domínios e gaps com dados reais gerados pela interação — não por autoavaliação.",
  },
  {
    icon: Layers,
    title: "Experiência memorável",
    description: "Torres, andares, níveis e score criam uma jornada que as pessoas comentam, compartilham e querem repetir.",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Mais que um quiz
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Quatro pilares em uma única plataforma
          </h2>
          <p className="text-muted-foreground">
            O Zintria não é só gamificação. É uma plataforma completa que conecta
            engajamento, aprendizado, dados de desempenho e experiência de marca.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-surface-elevated border border-border hover:border-primary/30 transition-all hover:glow-primary"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
