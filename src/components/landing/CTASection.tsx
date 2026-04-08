import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-accent/5 blur-[80px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            Pronto para transformar{" "}
            <span className="text-gradient-primary">participação</span>{" "}
            em <span className="text-gradient-accent">progresso real</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Crie o portal da sua empresa, monte torres, engaje colaboradores
            e leia desempenho como nunca antes. Sem setup complexo.
          </p>

          {/* Two clear paths */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button onClick={() => window.open('https://wa.me/5554993276132')} size="lg" className="glow-primary group text-base px-10">
              Criar portal da minha empresa
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => window.open('https://app.zintria.com.br')}
              variant="outline"
              size="lg"
              className="text-base px-10 border-border/60 text-muted-foreground hover:text-foreground group"
            >
              <Compass className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" />
              Explorar desafios públicos
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Empresas · Portal exclusivo · Setup em minutos &nbsp;·&nbsp;
            Público · Catálogo gratuito · Sem cadastro
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
