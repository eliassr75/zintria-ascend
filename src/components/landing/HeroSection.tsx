import { motion } from "framer-motion";
import { ArrowRight, Building2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TowerVisual from "./TowerVisual";

const features = [
  "Progressão real por andares e pontuação ao vivo",
  "Mapa de domínio gerado pela interação — sem formulários",
  "Portal exclusivo por empresa com subdomínio próprio",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/6 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[110px]" />
        {/* SAO-style grid */}
        <div className="absolute inset-0 bg-hex-grid opacity-100" />
        <div className="absolute inset-0 bg-scanlines" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-8"
            >
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                Plataforma B2B2C de desafios gamificados
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
              Cada resposta gera{" "}
              <span className="text-gradient-primary">dado real.</span>
              <br />
              Cada andar,{" "}
              <span className="text-gradient-accent">progresso visível.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Desafios gamificados em estrutura de torres que engajam colaboradores,
              desenvolvem conhecimento e revelam competências reais — tudo em uma
              experiência que as pessoas querem repetir.
            </p>

            {/* Feature bullets */}
            <ul className="space-y-2.5 mb-10">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary-foreground">{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => window.open('https://wa.me/5554993276132')} size="lg" className="glow-primary group text-base px-8">
                Criar portal da minha empresa
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => window.open('https://app.zintria.com.br')} variant="outline" size="lg" className="text-base px-8 border-border/60 text-muted-foreground hover:text-foreground">
                Explorar desafios públicos
              </Button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Configuração em minutos · Portal exclusivo por empresa · Sem setup técnico
            </p>
          </motion.div>

          {/* Right: Tower Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <TowerVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
