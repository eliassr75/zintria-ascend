import { motion } from "framer-motion";
import { CheckCircle2, Lock, PlayCircle, Star, Zap } from "lucide-react";

type FloorState = "completed" | "active" | "locked";

interface Floor {
  andar: number;
  label: string;
  state: FloorState;
  score?: number;
  acertos?: number;
  total?: number;
}

const floors: Floor[] = [
  { andar: 5, label: "Domínio Absoluto",  state: "locked" },
  { andar: 4, label: "Especialização",    state: "locked" },
  { andar: 3, label: "Nível Avançado",    state: "active",    score: 1240 },
  { andar: 2, label: "Nível Intermediário", state: "completed", score: 980, acertos: 8, total: 10 },
  { andar: 1, label: "Nível Iniciante",   state: "completed", score: 720, acertos: 10, total: 10 },
];

const stateConfig: Record<FloorState, { icon: typeof CheckCircle2; iconClass: string; bgClass: string; borderClass: string; labelClass: string }> = {
  completed: {
    icon: CheckCircle2,
    iconClass: "text-primary",
    bgClass: "bg-primary/15",
    borderClass: "border-border",
    labelClass: "text-foreground",
  },
  active: {
    icon: PlayCircle,
    iconClass: "text-accent",
    bgClass: "bg-accent/15",
    borderClass: "border-accent/50",
    labelClass: "text-foreground",
  },
  locked: {
    icon: Lock,
    iconClass: "text-muted-foreground/50",
    bgClass: "bg-secondary/30",
    borderClass: "border-border/30",
    labelClass: "text-muted-foreground/50",
  },
};

const TowerVisual = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-80 bg-primary/8 blur-[70px] rounded-full" />
        <div className="absolute w-32 h-48 bg-accent/6 blur-[50px] rounded-full translate-y-8" />
      </div>

      {/* Tower header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-sm mb-3 px-1 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold text-accent tracking-wide uppercase">
            Torre Ativa
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="w-3 h-3 text-accent fill-accent/40" />
          <span className="font-medium text-foreground">2.940</span>
          <span>pts</span>
        </div>
      </motion.div>

      {/* Floors */}
      <div className="relative flex flex-col gap-2.5 w-full max-w-sm">
        {floors.map((floor, i) => {
          const config = stateConfig[floor.state];
          const Icon = config.icon;
          const isActive = floor.state === "active";
          const isLocked = floor.state === "locked";

          return (
            <motion.div
              key={floor.andar}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`
                relative flex items-center gap-3.5 px-4 py-3.5 rounded-xl border transition-all
                ${config.borderClass}
                ${isLocked ? "opacity-40" : ""}
                ${isActive ? "ring-1 ring-accent/40 shadow-[0_0_20px_-8px_hsl(43_88%_58%/0.4)]" : ""}
                bg-gradient-to-r from-[hsl(222_18%_15%)] to-[hsl(222_18%_12%)]
              `}
            >
              {/* Andar number */}
              <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center bg-background/60 border border-border/60">
                <span className="text-[10px] font-bold text-muted-foreground">{floor.andar}</span>
              </div>

              {/* Icon */}
              <div className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${config.bgClass}`}>
                <Icon className={`w-4.5 h-4.5 ${config.iconClass}`} />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate ${config.labelClass}`}>
                  {floor.label}
                </p>
                {floor.acertos !== undefined && (
                  <p className="text-[11px] text-muted-foreground">
                    {floor.acertos}/{floor.total} corretas
                  </p>
                )}
                {isActive && (
                  <p className="text-[11px] text-accent font-medium">Em progresso...</p>
                )}
                {isLocked && (
                  <p className="text-[11px] text-muted-foreground/50">Bloqueado</p>
                )}
              </div>

              {/* Score */}
              {floor.score !== undefined && (
                <div className={`shrink-0 text-right ${isActive ? "text-accent" : "text-primary"}`}>
                  <p className="text-sm font-bold">+{floor.score}</p>
                  <p className="text-[10px] text-muted-foreground">pts</p>
                </div>
              )}

              {/* Active score counter */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="shrink-0"
                >
                  <ScoreCounter />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom: progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="mt-5 w-full max-w-sm px-1"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Zap className="w-3 h-3 text-primary" />
            <span>Progresso na torre</span>
          </div>
          <span className="text-xs font-bold text-primary">Andar 3 / 5</span>
        </div>
        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "48%" }}
            transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
          />
        </div>
      </motion.div>
    </div>
  );
};

const ScoreCounter = () => {
  return (
    <motion.div
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex items-center gap-1 px-2.5 py-1 bg-accent/15 border border-accent/30 rounded-full"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      <span className="text-[11px] font-bold text-accent">Ao vivo</span>
    </motion.div>
  );
};

export default TowerVisual;
