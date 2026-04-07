import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "O nível de engajamento que atingimos com o Zintria superou qualquer treinamento tradicional. Os times pedem mais desafios toda semana.",
    name: "Carla Mendes",
    role: "Head de People, TechCorp",
  },
  {
    quote: "Conseguimos identificar gaps de conhecimento que nunca apareceriam em avaliações convencionais. Mudou nossa forma de desenvolver talentos.",
    name: "Rafael Santos",
    role: "Diretor Acadêmico, Instituto Nova",
  },
  {
    quote: "A experiência de torre e progressão cria algo que as pessoas querem compartilhar. Nosso evento ganhou uma camada de engajamento única.",
    name: "Juliana Park",
    role: "Produtora de Eventos, Cultura Lab",
  },
];

const SocialProof = () => {
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
              className="p-6 rounded-2xl bg-surface-elevated border border-border flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-secondary-foreground leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <span className="text-primary text-sm font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
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
