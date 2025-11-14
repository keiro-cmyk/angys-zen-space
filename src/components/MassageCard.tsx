import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import massageRelax from "@/assets/massage-relax.jpg";
import massageStones from "@/assets/massage-stones.jpg";
import massageAromatherapy from "@/assets/massage-aromatherapy.jpg";
import { Massage } from "@/data/massages";

interface MassageCardProps {
  massage: Massage;
  onDetailsClick: (massage: Massage) => void;
}

const imageMap: Record<string, string> = {
  relax: massageRelax,
  stones: massageStones,
  aromatherapy: massageAromatherapy,
};

const MassageCard = ({ massage, onDetailsClick }: MassageCardProps) => {
  const imageSrc = imageMap[massage.image] || massageRelax;

  return (
    <div 
      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
      onClick={() => onDetailsClick(massage)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={imageSrc}
          alt={massage.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {massage.price && (
          <div className="absolute top-3 right-3 bg-spa-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {massage.price}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {massage.tags.map((tag, index) => (
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
          {massage.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {massage.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-spa-accent" />
          <span>{massage.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default MassageCard;
