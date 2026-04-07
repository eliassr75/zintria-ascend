import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, GraduationCap, Compass, Wrench } from "lucide-react";

const audiences = [
  {
    id: "empresas",
    icon: Building2,
    label: "Empresas & Times",
    headline: "Engaje times com desafios que geram dados reais",
    points: [
      "Onboarding gamificado que acelera adaptação",
      "Treinamentos que medem domínio real, não apenas presença",
      "Ranking e score por equipe para cultura de performance",
      "Leitura de afinidades e gaps para decisões de RH mais inteligentes",
    ],
    cta: "Falar com time comercial",
  },
  {
    id: "educacao",
    icon: GraduationCap,
    label: "Educação",
    headline: "Transforme conteúdo em experiência de aprendizado ativa",
    points: [
      "Trilhas por disciplina com progressão visual",
      "Gamificação que aumenta adesão e conclusão",
      "Relatórios de desempenho por aluno e por turma",
      "Integração com conteúdo pedagógico existente",
    ],
    cta: "Ver planos para educação",
  },
  {
    id: "catalogo",
    icon: Compass,
    label: "Catálogo & Experiências",
    headline: "Explore desafios temáticos abertos para qualquer público",
    points: [
      "Torres temáticas prontas para uso",
      "Experiências culturais, esportivas e de entretenimento",
      "Ranking público e badges compartilháveis",
      "Curadoria editorial com novos desafios toda semana",
    ],
    cta: "Explorar catálogo",
  },
  {
    id: "custom",
    icon: Wrench,
    label: "Projetos Personalizados",
    headline: "Crie trilhas sob medida para sua marca ou evento",
    points: [
      "Desafios com identidade visual própria",
      "Conteúdo e perguntas 100% customizáveis",
      "Integração com eventos, campanhas e lançamentos",
      "Dados exclusivos sobre o público participante",
    ],
    cta: "Solicitar projeto",
  },
];

const Audiences = () => {
  const [active, setActive] = useState("empresas");
  const current = audiences.find((a) => a.id === active)!;

  return (
    <section id="para-quem" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Para quem
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Uma plataforma, múltiplos contextos
          </h2>
          <p className="text-muted-foreground">
            O Zintria se adapta ao seu objetivo — de times corporativos a experiências abertas.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <button
                key={aud.id}
                onClick={() => setActive(aud.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${active === aud.id
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {aud.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-surface-elevated border border-border">
              <h3 className="text-2xl font-display font-bold mb-6">{current.headline}</h3>
              <ul className="space-y-4 mb-8">
                {current.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-secondary-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity glow-primary">
                {current.cta}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Audiences;
