export interface Massage {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
  popular?: boolean;
  duration: string;
  benefits: string[];
  targetFor: string;
  massageType: string;
  price?: string;
}

export const massages: Massage[] = [
  {
    id: "relax-total",
    name: "Masaje Relax Total",
    description: "Alivia tensión muscular y mejora la circulación sanguínea. Perfecto para desconectar del estrés diario.",
    tags: ["Destacado", "Relajante"],
    image: "relax",
    featured: true,
    popular: true,
    duration: "60 minutos",
    benefits: [
      "Reduce el estrés y la ansiedad",
      "Mejora la circulación sanguínea",
      "Alivia la tensión muscular",
      "Promueve un sueño reparador",
      "Aumenta la sensación de bienestar"
    ],
    targetFor: "Personas con estrés laboral, insomnio o tensión generalizada",
    massageType: "Masaje sueco con técnicas de relajación profunda",
    price: "$800 MXN"
  },
  {
    id: "descontracturante",
    name: "Masaje Descontracturante",
    description: "Ideal para eliminar nudos y dolores musculares profundos. Técnicas especializadas para zonas de tensión.",
    tags: ["Terapéutico", "Espalda"],
    image: "relax",
    featured: true,
    duration: "75 minutos",
    benefits: [
      "Elimina contracturas y nudos musculares",
      "Reduce el dolor crónico",
      "Mejora la movilidad articular",
      "Alivia dolores de espalda y cuello",
      "Libera tensión acumulada"
    ],
    targetFor: "Personas con dolor muscular crónico, contracturas o trabajo físico intenso",
    massageType: "Masaje de tejido profundo con presión firme",
    price: "$900 MXN"
  },
  {
    id: "aromaterapia",
    name: "Masaje Aromaterapia",
    description: "Aceites esenciales naturales que equilibran cuerpo y mente. Una experiencia sensorial única.",
    tags: ["Relajante", "Sensorial"],
    image: "aromatherapy",
    featured: true,
    duration: "90 minutos",
    benefits: [
      "Equilibra las emociones",
      "Mejora el estado de ánimo",
      "Hidrata y nutre la piel",
      "Estimula los sentidos",
      "Promueve la relajación profunda"
    ],
    targetFor: "Personas que buscan equilibrio emocional y una experiencia sensorial completa",
    massageType: "Masaje holístico con aceites esenciales de lavanda, eucalipto y bergamota",
    price: "$1,100 MXN"
  },
  {
    id: "piedras-calientes",
    name: "Masaje Piedras Calientes",
    description: "Relaja profundamente y estimula la energía interna con piedras volcánicas. Calor terapéutico.",
    tags: ["Energético", "Destacado"],
    image: "stones",
    featured: true,
    popular: true,
    duration: "90 minutos",
    benefits: [
      "Relaja los músculos profundamente",
      "Estimula la circulación",
      "Equilibra la energía vital",
      "Reduce el dolor muscular",
      "Induce un estado de calma profunda"
    ],
    targetFor: "Personas con tensión extrema, fatiga crónica o que buscan equilibrio energético",
    massageType: "Terapia con piedras volcánicas basálticas a temperatura controlada",
    price: "$1,200 MXN"
  },
  {
    id: "reflexologia",
    name: "Masaje Reflexología",
    description: "Mejora la circulación y bienestar general a través de puntos de presión en los pies.",
    tags: ["Pies", "Salud"],
    image: "relax",
    featured: true,
    duration: "45 minutos",
    benefits: [
      "Mejora la circulación sanguínea",
      "Equilibra los órganos internos",
      "Reduce el dolor en pies y piernas",
      "Promueve la desintoxicación",
      "Alivia dolores de cabeza"
    ],
    targetFor: "Personas con problemas circulatorios, dolor en pies o que buscan bienestar holístico",
    massageType: "Técnica de presión en puntos reflejos de pies y tobillos",
    price: "$650 MXN"
  },
  {
    id: "antiestres",
    name: "Masaje Antiestrés",
    description: "Libera tensión acumulada y calma el sistema nervioso. Recupera tu paz interior.",
    tags: ["Desestresante", "Popular"],
    image: "relax",
    featured: true,
    popular: true,
    duration: "60 minutos",
    benefits: [
      "Reduce los niveles de cortisol",
      "Calma el sistema nervioso",
      "Mejora la claridad mental",
      "Alivia la ansiedad",
      "Restaura el equilibrio emocional"
    ],
    targetFor: "Personas con alto estrés laboral, ansiedad o agotamiento mental",
    massageType: "Combinación de técnicas suecas y shiatsu con enfoque en relajación",
    price: "$850 MXN"
  },
  {
    id: "deportivo",
    name: "Masaje Deportivo",
    description: "Recupera la elasticidad muscular después del ejercicio. Previene lesiones y mejora el rendimiento.",
    tags: ["Terapéutico", "Deportivo"],
    image: "relax",
    duration: "60 minutos",
    benefits: [
      "Acelera la recuperación muscular",
      "Previene lesiones deportivas",
      "Mejora la flexibilidad",
      "Reduce el ácido láctico",
      "Aumenta el rendimiento deportivo"
    ],
    targetFor: "Atletas, deportistas y personas con actividad física intensa",
    massageType: "Masaje especializado pre y post entrenamiento con estiramientos",
    price: "$850 MXN"
  },
  {
    id: "drenaje-linfatico",
    name: "Drenaje Linfático",
    description: "Reduce la retención de líquidos y estiliza el cuerpo. Técnica suave y efectiva.",
    tags: ["Belleza", "Cuerpo"],
    image: "relax",
    duration: "75 minutos",
    benefits: [
      "Reduce la retención de líquidos",
      "Elimina toxinas del cuerpo",
      "Mejora el aspecto de la piel",
      "Reduce la celulitis",
      "Estiliza la silueta"
    ],
    targetFor: "Personas con retención de líquidos, hinchazón o que buscan mejorar su apariencia",
    massageType: "Técnica manual suave que estimula el sistema linfático",
    price: "$950 MXN"
  },
  {
    id: "cuello-espalda",
    name: "Masaje Cuello y Espalda",
    description: "Alivio rápido para el estrés laboral y tensión de oficina. Sesión express de 30 minutos.",
    tags: ["Express", "Oficina"],
    image: "relax",
    duration: "30 minutos",
    benefits: [
      "Alivia el dolor de cuello y espalda",
      "Reduce la tensión por trabajo de oficina",
      "Mejora la postura",
      "Alivia dolores de cabeza tensionales",
      "Aumenta la movilidad cervical"
    ],
    targetFor: "Trabajadores de oficina, personas con dolor cervical o poco tiempo disponible",
    massageType: "Masaje focalizado en zona cervical y dorsal alta",
    price: "$450 MXN"
  },
  {
    id: "premium-angy",
    name: "Masaje Premium Angy",
    description: "Combina las mejores técnicas con aromaterapia de lujo. La experiencia definitiva de relajación.",
    tags: ["Exclusivo", "Destacado"],
    image: "aromatherapy",
    duration: "120 minutos",
    benefits: [
      "Experiencia de relajación total",
      "Combina múltiples técnicas terapéuticas",
      "Incluye aromaterapia premium",
      "Rejuvenece cuerpo y mente",
      "Tratamiento personalizado exclusivo"
    ],
    targetFor: "Personas que buscan la experiencia más completa y lujosa de bienestar",
    massageType: "Fusión de técnicas: sueco, shiatsu, piedras calientes y aromaterapia",
    price: "$1,500 MXN"
  },
];

export const getImageForMassage = (imageKey: string) => {
  const imageMap: Record<string, string> = {
    relax: "massage-relax",
    stones: "massage-stones",
    aromatherapy: "massage-aromatherapy",
  };
  return imageMap[imageKey] || imageMap.relax;
};
