import { Link } from "react-router-dom";
import zintriaIcon from "@/assets/zintria-icon.png";

const APP_URL = "https://app.zintria.com.br";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={zintriaIcon} alt="Zintria" className="w-8 h-8 rounded-full" />
              <span className="font-display font-bold text-lg">Zintria</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desafios gamificados que transformam participação em progresso, engajamento e leitura de desempenho.
            </p>
          </div>

          {/* Produto */}
          <div>
            <p className="font-semibold text-sm mb-4">Produto</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Hub
                </a>
              </li>
              <li>
                <a href={`${APP_URL}/desafios/categorias`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Categorias
                </a>
              </li>
              <li>
                <a href={`${APP_URL}/desafios/torres`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Torres
                </a>
              </li>
              <li>
                <a href={`${APP_URL}/desafios/metricas`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Métricas
                </a>
              </li>
              <li>
                <a href={`${APP_URL}/desafios/ranking`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Ranking Global
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <p className="font-semibold text-sm mb-4">Recursos</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://wa.me/5554993276132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Central de ajuda
                </a>
              </li>
              <li>
                <Link to="/casos-de-uso" className="hover:text-foreground transition-colors">
                  Casos de uso
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-foreground transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold text-sm mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/termos" className="hover:text-foreground transition-colors">
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-foreground transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zintria · EtecSystems. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-muted-foreground text-xs">
            <a href="https://etecsystems.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              EtecSystems
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
