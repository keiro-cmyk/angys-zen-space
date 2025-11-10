import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MassageCard from "@/components/MassageCard";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { massages } from "@/data/massages";

const Index = () => {
  const featuredMassages = massages.filter((m) => m.featured).slice(0, 6);
  const popularMassages = massages.filter((m) => m.popular);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Featured Massages Section */}
      <section id="masajes" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Masajes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descubre nuestra variedad de masajes diseñados para tu bienestar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredMassages.map((massage) => (
              <MassageCard
                key={massage.id}
                name={massage.name}
                description={massage.description}
                tags={massage.tags}
                image={massage.image}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/masajes">
                Ver todos los masajes
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Massages Section */}
      <section id="populares" className="py-20 bg-spa-highlight">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Masajes Populares
            </h2>
            <p className="text-muted-foreground text-lg">
              Los favoritos de nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {popularMassages.map((massage) => (
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

      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
