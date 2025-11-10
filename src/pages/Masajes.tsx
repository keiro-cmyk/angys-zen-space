import Header from "@/components/Header";
import MassageCard from "@/components/MassageCard";
import Footer from "@/components/Footer";
import { massages } from "@/data/massages";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Masajes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-spa-highlight">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Todos los Masajes
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explora nuestra colección completa de masajes profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {massages.map((massage) => (
              <MassageCard
                key={massage.id}
                name={massage.name}
                description={massage.description}
                tags={massage.tags}
                image={massage.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Masajes;
