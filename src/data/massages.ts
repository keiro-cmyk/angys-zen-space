export interface Massage {
  id: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
  popular?: boolean;
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
  },
  {
    id: "descontracturante",
    name: "Masaje Descontracturante",
    description: "Ideal para eliminar nudos y dolores musculares profundos. Técnicas especializadas para zonas de tensión.",
    tags: ["Terapéutico", "Espalda"],
    image: "relax",
    featured: true,
  },
  {
    id: "aromaterapia",
    name: "Masaje Aromaterapia",
    description: "Aceites esenciales naturales que equilibran cuerpo y mente. Una experiencia sensorial única.",
    tags: ["Relajante", "Sensorial"],
    image: "aromatherapy",
    featured: true,
  },
  {
    id: "piedras-calientes",
    name: "Masaje Piedras Calientes",
    description: "Relaja profundamente y estimula la energía interna con piedras volcánicas. Calor terapéutico.",
    tags: ["Energético", "Destacado"],
    image: "stones",
    featured: true,
    popular: true,
  },
  {
    id: "reflexologia",
    name: "Masaje Reflexología",
    description: "Mejora la circulación y bienestar general a través de puntos de presión en los pies.",
    tags: ["Pies", "Salud"],
    image: "relax",
    featured: true,
  },
  {
    id: "antiestres",
    name: "Masaje Antiestrés",
    description: "Libera tensión acumulada y calma el sistema nervioso. Recupera tu paz interior.",
    tags: ["Desestresante", "Popular"],
    image: "relax",
    featured: true,
    popular: true,
  },
  {
    id: "deportivo",
    name: "Masaje Deportivo",
    description: "Recupera la elasticidad muscular después del ejercicio. Previene lesiones y mejora el rendimiento.",
    tags: ["Terapéutico", "Deportivo"],
    image: "relax",
  },
  {
    id: "drenaje-linfatico",
    name: "Drenaje Linfático",
    description: "Reduce la retención de líquidos y estiliza el cuerpo. Técnica suave y efectiva.",
    tags: ["Belleza", "Cuerpo"],
    image: "relax",
  },
  {
    id: "cuello-espalda",
    name: "Masaje Cuello y Espalda",
    description: "Alivio rápido para el estrés laboral y tensión de oficina. Sesión express de 30 minutos.",
    tags: ["Express", "Oficina"],
    image: "relax",
  },
  {
    id: "premium-angy",
    name: "Masaje Premium Angy",
    description: "Combina las mejores técnicas con aromaterapia de lujo. La experiencia definitiva de relajación.",
    tags: ["Exclusivo", "Destacado"],
    image: "aromatherapy",
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
