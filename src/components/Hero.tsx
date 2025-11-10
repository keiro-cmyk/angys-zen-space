import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/spa-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(180deg, hsl(351 60% 95%), hsl(0 100% 98%))",
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-spa-card px-4 py-2 rounded-full shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Centro de masajes profesionales</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Relájate, renueva tu energía y cuida tu bienestar
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Descubre los masajes profesionales de Angy Massage y disfruta de un momento solo para ti.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection("masajes")}
              >
                <Sparkles className="w-5 h-5" />
                Ver Masajes
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection("agenda")}
                className="border-2 hover:bg-accent/10"
              >
                <Calendar className="w-5 h-5" />
                Agendar Cita
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src={heroImage}
                alt="Spa ambiente relajante"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Decorations */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(0 0% 99%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
