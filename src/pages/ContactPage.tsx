import PageShell from "@/components/landing/PageShell";
import { Mail, MessageCircle, ExternalLink, Send } from "lucide-react";

interface ContactChannel {
  icon: React.ElementType;
  label: string;
  description: string;
  action: string;
  href: string;
  color: string;
}

const channels: ContactChannel[] = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Fale com a nossa equipe diretamente pelo WhatsApp para dúvidas, suporte e negociações.",
    action: "Abrir conversa",
    href: "https://wa.me/5554993276132",
    color: "#25d366",
  },
  {
    icon: Send,
    label: "Telegram",
    description: "Prefere Telegram? Envie uma mensagem pelo mesmo número e entraremos em contato.",
    action: "Abrir no Telegram",
    href: "https://t.me/+5554993276132",
    color: "#229ED9",
  },
  {
    icon: Mail,
    label: "E-mail",
    description: "Para propostas, parcerias e documentação formal, nosso e-mail está sempre aberto.",
    action: "Enviar e-mail",
    href: "mailto:elias@etecsystems.com.br",
    color: "hsl(var(--primary))",
  },
  {
    icon: ExternalLink,
    label: "EtecSystems",
    description: "Conheça a empresa por trás do Zintria — desenvolvimento de software e soluções digitais.",
    action: "Visitar site",
    href: "https://etecsystems.com.br",
    color: "hsl(var(--accent))",
  },
];

const ContactPage = () => {
  return (
    <PageShell
      title="Fale com a gente"
      subtitle="Escolha o canal de preferência. Estamos disponíveis para dúvidas, propostas comerciais e suporte."
    >
      <div className="w-full max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-border hover:bg-card/60"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      background: `${channel.color}18`,
                      borderColor: `${channel.color}30`,
                    }}
                  >
                    <Icon className="size-5" style={{ color: channel.color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold text-foreground">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {channel.description}
                    </p>
                  </div>
                </div>

                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                  style={{ color: channel.color }}
                >
                  {channel.action}
                  <ExternalLink className="size-3" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border/40 bg-muted/20 px-6 py-5">
          <p className="text-sm leading-7 text-muted-foreground">
            <strong className="text-foreground">Horário de atendimento:</strong> segunda a sexta, das 9h às 18h (horário de Brasília).
            Para assuntos urgentes, o WhatsApp tem resposta mais rápida.
          </p>
        </div>
      </div>
    </PageShell>
  );
};

export default ContactPage;
