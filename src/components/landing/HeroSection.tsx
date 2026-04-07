import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import TowerVisual from "./TowerVisual";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs font-medium text-muted-foreground">
                Plataforma de desafios gamificados
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
              Transforme participação em{" "}
              <span className="text-gradient-primary">progresso real</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Desafios gamificados que unem engajamento, desenvolvimento de conhecimento
              e leitura clara de desempenho — em uma experiência que as pessoas querem repetir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-primary group text-base px-8">
                Explorar a plataforma
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 group">
                <Play className="mr-2 w-4 h-4" />
                Ver como funciona
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-foreground">+50k</span>
                <span>desafios realizados</span>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-foreground">98%</span>
                <span>taxa de engajamento</span>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="hidden sm:flex flex-col">
                <span className="text-2xl font-display font-bold text-foreground">4.9★</span>
                <span>satisfação</span>
              </div>
            </div>
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
