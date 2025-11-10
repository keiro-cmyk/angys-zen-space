import { MessageCircle, Clock, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const whatsappLink = "https://wa.me/529983995124?text=Hola%2C%20quisiera%20más%20información%20sobre%20los%20masajes";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contacto" className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AM</span>
              </div>
              <span className="font-bold text-xl text-foreground">Angy Massage</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Cuidamos tu cuerpo y tu bienestar
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <Link 
                  to="/masajes"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Masajes
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("agenda")}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Agenda tu cita
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  +52 998 399 5124
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Lun - Dom<br />9:00 am - 9:00 pm
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  Cancún, Quintana Roo
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Angy Massage. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
