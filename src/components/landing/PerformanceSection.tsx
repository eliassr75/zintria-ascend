import { motion } from "framer-motion";

const skills = [
  { name: "Liderança", value: 85, color: "bg-primary" },
  { name: "Comunicação", value: 72, color: "bg-primary" },
  { name: "Pensamento estratégico", value: 91, color: "bg-primary" },
  { name: "Resolução de problemas", value: 68, color: "bg-accent" },
  { name: "Inovação", value: 54, color: "bg-accent" },
];

const PerformanceSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="p-8 rounded-2xl bg-surface-elevated border border-border shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-sm">JM</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">João Moreira</p>
                  <p className="text-xs text-muted-foreground">Score geral: 847 pts</p>
                </div>
                <div className="ml-auto px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Top 5%
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider font-medium">
                Mapa de domínio
              </p>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-secondary-foreground">{skill.name}</span>
                      <span className="text-muted-foreground font-medium">{skill.value}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl font-display font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground">Torres completas</p>
                </div>
                <div>
                  <p className="text-xl font-display font-bold text-primary">3</p>
                  <p className="text-xs text-muted-foreground">Badges de domínio</p>
                </div>
                <div>
                  <p className="text-xl font-display font-bold text-accent">7°</p>
                  <p className="text-xs text-muted-foreground">No ranking geral</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Leitura de desempenho
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Entenda quem sabe o quê — com dados reais
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A cada desafio respondido, o Zintria mapeia domínios, afinidades e lacunas
              de conhecimento. Sem formulários de autoavaliação. Sem achismo.
            </p>
            <ul className="space-y-3 text-secondary-foreground">
              {[
                "Score individual e por equipe",
                "Mapa de domínio por competência",
                "Identificação automática de gaps",
                "Relatórios exportáveis para decisões",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
