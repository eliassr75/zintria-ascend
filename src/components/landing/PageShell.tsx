import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface PageShellProps {
  children: React.ReactNode;
  /** Hero title — supports JSX for gradient spans */
  title: React.ReactNode;
  subtitle?: string;
  accent?: "primary" | "accent";
}

const PageShell = ({ children, title, subtitle, accent = "primary" }: PageShellProps) => {
  const accentClass = accent === "accent" ? "text-accent" : "text-primary";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.12),transparent_60%)]" />
        <div className="container mx-auto flex flex-col items-center px-6 relative z-10 text-center">
          <div className="w-full max-w-3xl">
            <h1 className={`font-display text-5xl md:text-6xl font-black tracking-tight leading-[1.06] mb-5 ${accentClass}`}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto flex flex-col items-center px-6 pb-24">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageShell;
