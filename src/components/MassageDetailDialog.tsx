import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock, Heart, Target, Sparkles, DollarSign } from "lucide-react";
import { Massage } from "@/data/massages";
import massageRelax from "@/assets/massage-relax.jpg";
import massageStones from "@/assets/massage-stones.jpg";
import massageAromatherapy from "@/assets/massage-aromatherapy.jpg";

interface MassageDetailDialogProps {
  massage: Massage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const imageMap: Record<string, string> = {
  relax: massageRelax,
  stones: massageStones,
  aromatherapy: massageAromatherapy,
};

const MassageDetailDialog = ({ massage, open, onOpenChange }: MassageDetailDialogProps) => {
  if (!massage) return null;

  const imageSrc = imageMap[massage.image] || massageRelax;

  const handleReserve = () => {
    const message = `Hola, soy [TU NOMBRE]. Quisiera agendar un ${massage.name}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/529983995124?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative w-full h-64 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-lg">
            <img
              src={imageSrc}
              alt={massage.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <DialogTitle className="absolute bottom-4 left-6 text-3xl font-bold text-white">
              {massage.name}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {massage.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <DialogDescription className="text-base text-foreground">
            {massage.description}
          </DialogDescription>

          {/* Key Info Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Duration */}
            <div className="flex items-start gap-3 p-4 bg-spa-highlight rounded-lg">
              <Clock className="w-5 h-5 text-spa-accent mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Duración</h4>
                <p className="text-sm text-muted-foreground">{massage.duration}</p>
              </div>
            </div>

            {/* Price */}
            {massage.price && (
              <div className="flex items-start gap-3 p-4 bg-spa-highlight rounded-lg">
                <DollarSign className="w-5 h-5 text-spa-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Precio</h4>
                  <p className="text-sm text-muted-foreground">{massage.price}</p>
                </div>
              </div>
            )}
          </div>

          {/* Target For */}
          <div className="flex items-start gap-3 p-4 bg-spa-light rounded-lg">
            <Target className="w-5 h-5 text-spa-accent mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Ideal para</h4>
              <p className="text-sm text-muted-foreground">{massage.targetFor}</p>
            </div>
          </div>

          {/* Massage Type */}
          <div className="flex items-start gap-3 p-4 bg-spa-light rounded-lg">
            <Sparkles className="w-5 h-5 text-spa-accent mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">Tipo de Masaje</h4>
              <p className="text-sm text-muted-foreground">{massage.massageType}</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-spa-accent" />
              <h4 className="font-semibold text-foreground">Beneficios</h4>
            </div>
            <ul className="grid md:grid-cols-2 gap-2">
              {massage.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-spa-accent mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reserve Button */}
          <Button 
            variant="spa" 
            size="lg" 
            className="w-full"
            onClick={handleReserve}
          >
            <MessageCircle className="w-5 h-5" />
            Reservar ahora por WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MassageDetailDialog;
