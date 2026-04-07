import zintriaIcon from "@/assets/zintria-icon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-xs">Z</span>
              </div>
              <span className="font-display font-bold text-lg">Zintria</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desafios gamificados que transformam participação em progresso, engajamento e leitura de desempenho.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-semibold text-sm mb-4">Produto</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Catálogo</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4">Recursos</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Central de ajuda</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Casos de uso</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Termos de uso</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zintria. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-muted-foreground text-xs">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">X (Twitter)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
