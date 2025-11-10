import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import massageRelax from "@/assets/massage-relax.jpg";
import massageStones from "@/assets/massage-stones.jpg";
import massageAromatherapy from "@/assets/massage-aromatherapy.jpg";

interface MassageCardProps {
  name: string;
  description: string;
  tags: string[];
  image: string;
}

const imageMap: Record<string, string> = {
  relax: massageRelax,
  stones: massageStones,
  aromatherapy: massageAromatherapy,
};

const MassageCard = ({ name, description, tags, image }: MassageCardProps) => {
  const imageSrc = imageMap[image] || massageRelax;

  const handleReserve = () => {
    const message = `Hola, soy [TU NOMBRE]. Quisiera agendar un ${name}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/529983995124?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <div className="relative overflow-hidden h-48">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-secondary hover:bg-secondary/80"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <Button 
          variant="spa" 
          className="w-full"
          onClick={handleReserve}
        >
          <MessageCircle className="w-4 h-4" />
          Reservar ahora
        </Button>
      </div>
    </div>
  );
};

export default MassageCard;
