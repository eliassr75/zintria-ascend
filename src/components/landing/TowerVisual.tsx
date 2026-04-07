import { motion } from "framer-motion";
import { Trophy, Star, Zap, Target, Crown } from "lucide-react";

const floors = [
  { label: "Mestre", icon: Crown, level: 5, filled: false, color: "accent" },
  { label: "Especialista", icon: Trophy, level: 4, filled: false, color: "accent" },
  { label: "Avançado", icon: Star, level: 3, filled: true, color: "primary" },
  { label: "Intermediário", icon: Zap, level: 2, filled: true, color: "primary" },
  { label: "Iniciante", icon: Target, level: 1, filled: true, color: "primary" },
];

const TowerVisual = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Glow behind tower */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-96 bg-primary/10 blur-[80px] rounded-full" />
      </div>

      <div className="relative flex flex-col gap-3 w-full max-w-sm">
        {floors.map((floor, i) => {
          const Icon = floor.icon;
          const isActive = i === 2; // "Avançado" is the current position
          return (
            <motion.div
              key={floor.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.12 }}
              className={`
                relative flex items-center gap-4 px-5 py-4 rounded-xl border transition-all
                ${floor.filled
                  ? "bg-surface-elevated border-border"
                  : "bg-secondary/30 border-border/30 opacity-50"
                }
                ${isActive ? "ring-1 ring-primary/50 glow-primary" : ""}
              `}
            >
              <div
                className={`
                  w-10 h-10 rounded-lg flex items-center justify-center shrink-0
                  ${floor.filled ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"}
                  ${floor.color === "accent" && !floor.filled ? "bg-accent/10 text-accent/40" : ""}
                `}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${floor.filled ? "text-foreground" : "text-muted-foreground"}`}>
                  {floor.label}
                </p>
                <p className="text-xs text-muted-foreground">Nível {floor.level}</p>
              </div>
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="px-2.5 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full"
                >
                  Você está aqui
                </motion.div>
              )}
              {!floor.filled && (
                <div className="w-5 h-5 rounded-full border-2 border-border/50" />
              )}
              {floor.filled && !isActive && (
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Progress bar */}
        <div className="mt-4 px-2">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Progresso geral</span>
            <span className="text-primary font-semibold">60%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TowerVisual;
