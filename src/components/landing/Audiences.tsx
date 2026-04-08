import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, GraduationCap, CalendarDays, Compass } from "lucide-react";

const audiences = [
  {
    id: "empresas",
    icon: Building2,
    label: "RH & T&D",
    headline: "Mapeie competências reais sem autoavaliação",
    context: "Ideal para onboarding, trilhas de desenvolvimento e avaliações de equipes.",
    points: [
      "Onboarding gamificado que acelera adaptação ao negócio",
      "Treinamentos que medem domínio real — não só presença",
      "Ranking e score por equipe para cultura de performance",
      "Mapa de afinidades e gaps para decisões de RH mais precisas",
      "Portal exclusivo com subdomínio e identidade da empresa",
    ],
    cta: "Falar com time comercial",
    link: "https://calendly.com/zintria/onboarding",
    accentColor: "primary",
  },
  {
    id: "educacao",
    icon: GraduationCap,
    label: "Educação Corporativa",
    headline: "Transforme conteúdo em experiência de aprendizado ativa",
    context: "Para cursos internos, academias corporativas e trilhas de capacitação.",
    points: [
      "Trilhas por disciplina com progressão visual por andares",
      "Gamificação que aumenta adesão e taxa de conclusão",
      "Relatórios de desempenho por colaborador e por turma",
      "Integração com conteúdo pedagógico e material existente",
      "Conquistas e badges que motivam a continuidade",
    ],
    cta: "Ver planos para educação",
    link: "https://calendly.com/zintria/educacao",
    accentColor: "primary",
  },
  {
    id: "eventos",
    icon: CalendarDays,
    label: "Eventos & Workshops",
    headline: "Engajamento que o público pede para repetir",
    context: "Perfeito para eventos ao vivo, hackathons, feiras e dinâmicas de equipe.",
    points: [
      "Ranking ao vivo projeta participação em tempo real",
      "Dinâmicas de competição saudável entre equipes",
      "Score e badges compartilháveis geram repercussão orgânica",
      "Criação rápida de torre temática para o evento",
      "Dados de engajamento para relatório pós-evento",
    ],
    cta: "Criar torre para meu evento",
    link: "https://calendly.com/zintria/eventos",
    accentColor: "accent",
  },
  {
    id: "catalogo",
    icon: Compass,
    label: "Catálogo Público",
    headline: "Explore desafios temáticos abertos para qualquer público",
    context: "Torres prontas para comunidades, cursos abertos e experiências culturais.",
    points: [
      "Torres temáticas prontas — sem setup necessário",
      "Experiências de cultura, tecnologia, esportes e mais",
      "Ranking público e badges compartilháveis nas redes",
      "Curadoria editorial com novos desafios toda semana",
      "Gratuito para participar — comece agora",
    ],
    cta: "Explorar catálogo",
    link: "https://calendly.com/zintria/catalogo",
    accentColor: "primary",
  },
];

const Audiences = () => {
  const [active, setActive] = useState("empresas");
  const current = audiences.find((a) => a.id === active)!;
  const isAccent = current.accentColor === "accent";

  return (
    <section id="para-quem" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-primary/4 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            O Zintria se adapta ao seu objetivo — de times corporativos a eventos ao vivo.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
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
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-surface-elevated border border-border">
              <p className={`text-xs font-semibold tracking-wider uppercase mb-3 ${isAccent ? "text-accent" : "text-primary"}`}>
                {current.context}
              </p>
              <h3 className="text-2xl font-display font-bold mb-6">{current.headline}</h3>
              <ul className="space-y-3.5 mb-8">
                {current.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0 ${isAccent ? "bg-accent/15" : "bg-primary/15"}`}>
                      <div className={`w-2 h-2 rounded-full ${isAccent ? "bg-accent" : "bg-primary"}`} />
                    </div>
                    <span className="text-secondary-foreground text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              {/*<button*/}
              {/*  onClick={() => current.link}*/}
              {/*  className={`*/}
              {/*    inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm*/}
              {/*    hover:opacity-90 transition-opacity*/}
              {/*    ${isAccent*/}
              {/*      ? "bg-accent text-accent-foreground glow-accent"*/}
              {/*      : "bg-primary text-primary-foreground glow-primary"*/}
              {/*    }*/}
              {/*  `}*/}
              {/*>*/}
              {/*  {current.cta}*/}
              {/*</button>*/}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Audiences;
