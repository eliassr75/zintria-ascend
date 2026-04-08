import { motion } from "framer-motion";
import { Globe, Blocks, Users, TrendingUp, BarChart } from "lucide-react";

const steps = [
  {
    icon: Globe,
    step: "01",
    title: "Crie seu portal",
    description:
      "Sua empresa ganha um portal exclusivo em subdomínio próprio. Configure identidade visual e defina quem acessa.",
  },
  {
    icon: Blocks,
    step: "02",
    title: "Monte a torre",
    description:
      "Organize andares por dificuldade, escolha temas e adicione desafios do catálogo ou crie conteúdo próprio.",
  },
  {
    icon: Users,
    step: "03",
    title: "Convide colaboradores",
    description:
      "Colaboradores recebem link de acesso, entram no portal e começam a subir andares respondendo desafios.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Progressão ao vivo",
    description:
      "Ranking em tempo real, score acumulado por andar e conquistas desbloqueáveis mantêm o engajamento ativo.",
  },
  {
    icon: BarChart,
    step: "05",
    title: "Leia os dados",
    description:
      "Painéis de afinidade, domínio e gaps por colaborador. Dados reais para decisões de desenvolvimento mais inteligentes.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/4 blur-[120px] rounded-full" />
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
            Do portal ao painel de dados em cinco passos
          </h2>
          <p className="text-muted-foreground">
            De zero a colaboradores engajados com leitura de desempenho real — sem complexidade técnica.
          </p>
        </motion.div>

        {/* Steps: alternating layout for larger screens */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical connector line */}
          <div className="hidden md:block absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/30 via-border/50 to-border/20" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-start gap-6"
                >
                  {/* Step icon — sits on the connector line */}
                  <div className="relative shrink-0 z-10">
                    <div
                      className={`
                        w-14 h-14 rounded-2xl border flex items-center justify-center
                        ${isLast
                          ? "bg-accent/15 border-accent/40 shadow-[0_0_16px_-4px_hsl(43_88%_58%/0.4)]"
                          : "bg-surface-elevated border-border"
                        }
                      `}
                    >
                      <Icon className={`w-6 h-6 ${isLast ? "text-accent" : "text-primary"}`} />
                    </div>
                    <span
                      className={`
                        absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-bold
                        flex items-center justify-center
                        ${isLast
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                        }
                      `}
                    >
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1 pb-2">
                    <h3 className="font-display font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
