import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const whatsappLink = "https://wa.me/529983995124?text=Hola%2C%20quisiera%20más%20información%20sobre%20los%20masajes";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-spa-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary-foreground font-bold text-lg">AM</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">Angy Massage</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-accent-foreground transition-colors"
            >
              Inicio
            </button>
            <Link to="/masajes" className="text-foreground hover:text-accent-foreground transition-colors">
              Masajes
            </Link>
            <button
              onClick={() => scrollToSection("populares")}
              className="text-foreground hover:text-accent-foreground transition-colors"
            >
              Populares
            </button>
            <button
              onClick={() => scrollToSection("agenda")}
              className="text-foreground hover:text-accent-foreground transition-colors"
            >
              Agenda tu cita
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-accent-foreground transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* WhatsApp Button */}
          <Button variant="spa" size="default" asChild className="hidden md:inline-flex">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Agendar por WhatsApp
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-left py-2 text-foreground hover:text-accent-foreground transition-colors"
            >
              Inicio
            </button>
            <Link
              to="/masajes"
              className="py-2 text-foreground hover:text-accent-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Masajes
            </Link>
            <button
              onClick={() => scrollToSection("populares")}
              className="text-left py-2 text-foreground hover:text-accent-foreground transition-colors"
            >
              Populares
            </button>
            <button
              onClick={() => scrollToSection("agenda")}
              className="text-left py-2 text-foreground hover:text-accent-foreground transition-colors"
            >
              Agenda tu cita
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-left py-2 text-foreground hover:text-accent-foreground transition-colors"
            >
              Contacto
            </button>
            <Button variant="spa" size="default" asChild className="mt-2">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Agendar por WhatsApp
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
