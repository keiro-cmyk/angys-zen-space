import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MessageCircle, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { massages } from "@/data/massages";
import { toast } from "sonner";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [massageType, setMassageType] = useState("");
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Por favor ingresa tu nombre");
      return;
    }
    
    if (!massageType) {
      toast.error("Por favor selecciona un tipo de masaje");
      return;
    }
    
    if (!date) {
      toast.error("Por favor selecciona una fecha");
      return;
    }

    const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", { locale: es });
    const message = `Hola, soy ${name}. Quisiera agendar un ${massageType} para el ${formattedDate}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/529983995124?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Reset form
    setName("");
    setMassageType("");
    setDate(undefined);
    toast.success("¡Te estamos redirigiendo a WhatsApp!");
  };

  return (
    <section id="agenda" className="py-20 bg-spa-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Agenda tu cita
            </h2>
            <p className="text-muted-foreground text-lg">
              Completa el formulario y te contactaremos por WhatsApp
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="bg-card rounded-xl shadow-lg p-8 space-y-6 animate-fade-in-up"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Tu nombre</Label>
              <Input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="massage-type">Tipo de masaje</Label>
              <Select value={massageType} onValueChange={setMassageType}>
                <SelectTrigger id="massage-type" className="h-12">
                  <SelectValue placeholder="Selecciona un masaje" />
                </SelectTrigger>
                <SelectContent>
                  {massages.map((massage) => (
                    <SelectItem key={massage.id} value={massage.name}>
                      {massage.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Fecha preferida</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-12 justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP", { locale: es }) : "Selecciona una fecha"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    locale={es}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full h-14 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar por WhatsApp
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Al enviar, serás redirigido a WhatsApp con tu mensaje prellenado
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
