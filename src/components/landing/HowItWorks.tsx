import { motion } from "framer-motion";
import { Blocks, Gamepad2, TrendingUp, BarChart } from "lucide-react";

const steps = [
  {
    icon: Blocks,
    step: "01",
    title: "Monte a torre",
    description: "Defina o tema, organize os andares por dificuldade e configure desafios com conteúdos próprios ou do catálogo.",
  },
  {
    icon: Gamepad2,
    step: "02",
    title: "Convide e engaje",
    description: "Participantes entram na torre, sobem andares respondendo desafios e acumulam score em tempo real.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Progressão e ranking",
    description: "Cada acerto move o participante. Ranking ao vivo, conquistas desbloqueáveis e badges de domínio mantêm o ritmo.",
  },
  {
    icon: BarChart,
    step: "04",
    title: "Leia os dados",
    description: "Painéis de desempenho revelam afinidades, domínios, gaps e padrões — dados reais para decisões mais inteligentes.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Da criação à leitura de desempenho em quatro passos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-border" />
                )}

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-surface-elevated border border-border mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
