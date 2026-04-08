import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "O nível de engajamento que atingimos com o Zintria superou qualquer treinamento tradicional. Os times pedem mais desafios toda semana — e os dados de domínio mudaram como tomamos decisões de desenvolvimento.",
    name: "Carla Mendes",
    role: "Head de People & Desenvolvimento",
    segment: "RH & T&D",
  },
  {
    quote:
      "Conseguimos identificar gaps de conhecimento que nunca apareceriam em avaliações convencionais. A leitura de afinidade por competência virou referência nos nossos processos internos.",
    name: "Rafael Santos",
    role: "Diretor de Educação Corporativa",
    segment: "Educação Corporativa",
  },
  {
    quote:
      "A estrutura de torre e progressão criou algo que o público quis compartilhar nas redes. Nosso evento ganhou uma camada de engajamento que nunca conseguimos com dinâmicas tradicionais.",
    name: "Juliana Park",
    role: "Produtora de Experiências",
    segment: "Eventos",
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/3 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Quem já usa
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold">
            Resultados que falam por si
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-surface-elevated border border-border flex flex-col group hover:border-primary/20 transition-all"
            >
              {/* Segment badge */}
              <span className="inline-block self-start px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold mb-4">
                {t.segment}
              </span>

              <Quote className="w-7 h-7 text-primary/25 mb-3" />
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <span className="text-primary text-xs font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
