import { motion } from "framer-motion";
import { Trophy, Zap, Target } from "lucide-react";

const skills = [
  { name: "Gestão de Projetos",       value: 91, color: "primary" },
  { name: "Comunicação Estratégica",  value: 78, color: "primary" },
  { name: "Pensamento Analítico",     value: 85, color: "primary" },
  { name: "Liderança Situacional",    value: 62, color: "accent" },
  { name: "Inovação & Criatividade",  value: 48, color: "accent" },
];

const highlights = [
  { icon: Trophy, label: "Torres completas", value: "12", color: "foreground" },
  { icon: Target,  label: "Badges de domínio", value: "3",  color: "primary" },
  { icon: Zap,     label: "No ranking geral",  value: "7°", color: "accent" },
];

const PerformanceSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[500px] bg-primary/4 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Player card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="p-7 rounded-2xl bg-surface-elevated border border-border shadow-elevated">
              {/* Player header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="font-display font-bold text-primary text-sm">JM</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">João Moreira</p>
                  <p className="text-xs text-muted-foreground">Score acumulado: 2.940 pts</p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <span className="text-accent text-xs font-bold">Top 5%</span>
                </div>
              </div>

              {/* Domain map */}
              <p className="text-[11px] text-muted-foreground mb-4 uppercase tracking-wider font-semibold">
                Mapa de domínio por competência
              </p>
              <div className="space-y-3.5">
                {skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-secondary-foreground text-[13px]">{skill.name}</span>
                      <span className={`font-bold text-[13px] ${skill.color === "accent" ? "text-accent" : "text-primary"}`}>
                        {skill.value}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${skill.color === "accent"
                          ? "bg-gradient-to-r from-accent to-accent/70"
                          : "bg-gradient-to-r from-primary to-primary/70"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Gap indicator */}
              <div className="mt-5 p-3 rounded-xl bg-accent/8 border border-accent/20 flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0 animate-pulse" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-accent font-semibold">Gap identificado:</span> Inovação & Criatividade —
                  recomendado trilha de desafios nível iniciante.
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-6 pt-5 border-t border-border grid grid-cols-3 gap-3 text-center">
                {highlights.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="space-y-1">
                    <div className="flex justify-center">
                      <Icon className={`w-4 h-4 ${
                        color === "primary" ? "text-primary"
                        : color === "accent" ? "text-accent"
                        : "text-foreground"
                      }`} />
                    </div>
                    <p className={`text-lg font-display font-bold ${
                      color === "primary" ? "text-primary"
                      : color === "accent" ? "text-accent"
                      : "text-foreground"
                    }`}>{value}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight">{label}</p>
                  </div>
                ))}
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
              A cada desafio respondido, o Zintria mapeia automaticamente domínios,
              afinidades e lacunas de conhecimento. Sem formulários de autoavaliação.
              Sem achismo. Dados que refletem performance real em contexto de jogo.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Score individual e ranking consolidado por equipe",
                "Mapa de domínio por competência e área temática",
                "Identificação automática de gaps por colaborador",
                "Relatórios exportáveis para tomadas de decisão de RH",
                "Afinidades reveladas sem declaração — só pela interação",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm text-secondary-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-secondary/50 border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Dados gerados pela interação,</span> não por
                autoavaliação. A diferença está no comportamento real de quem joga — e o Zintria captura isso
                com precisão.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
