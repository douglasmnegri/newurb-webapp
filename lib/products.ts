// lib/products.ts
export interface Product {
  id: string;
  name: string;
  address: string;
  price: string;
  squareMeter: string;
  imageUrl: string;
  // Details page data
  images: string[];
  description: string;
  totalArea: string;
  units: string;
  deliveryDate: string;
  developer: string;
  paymentCondition: string;
  constructionStatus: string;
  lastUpdate: string;
  risks: {
    liquidity: string;
    development: string;
    environmental: string;
    interestRate: string;
    maintenanceCost: string;
    iptu: string;
  };
}

export const products: Product[] = [
  {
    id: "modern-apartment",
    name: "Modern Apartment",
    address: "123 Main St, Cityville",
    price: "$250,000",
    squareMeter: "85",
    imageUrl: "/images/land_1.jpeg",
    images: ["/images/land_1.jpeg", "/images/land_2.webp", "/images/land_3.png"],
    description: "Apartamento moderno com acabamento de luxo, localização privilegiada no centro da cidade com fácil acesso a transporte público e comércio.",
    totalArea: "85 m²",
    units: "12",
    deliveryDate: "Junho/2026",
    developer: "Urban Real Estate",
    paymentCondition: "Entrada de 30% e saldo em até 48x diretamente com a construtora.",
    constructionStatus: "Estrutura 60% concluída",
    lastUpdate: "Outubro/2025",
    risks: {
      liquidity: "Alta",
      development: "Em Andamento",
      environmental: "Sem riscos",
      interestRate: "Baixa",
      maintenanceCost: "Médio",
      iptu: "$1,200/ano",
    },
  },
  {
    id: "cozy-cottage",
    name: "Cozy Cottage",
    address: "456 Country Rd, Townsville",
    price: "$180,000",
    squareMeter: "120",
    imageUrl: "/images/land_2.webp",
    images: ["/images/land_2.webp", "/images/land_1.jpeg", "/images/land_3.png"],
    description: "Casa de campo aconchegante, perfeita para quem busca tranquilidade e contato com a natureza. Amplo terreno com área verde.",
    totalArea: "120 m²",
    units: "6",
    deliveryDate: "Março/2026",
    developer: "Countryside Properties",
    paymentCondition: "Entrada de 25% e saldo em até 36x diretamente com a construtora.",
    constructionStatus: "Estrutura 45% concluída",
    lastUpdate: "Setembro/2025",
    risks: {
      liquidity: "Média",
      development: "Inicial",
      environmental: "Baixo risco",
      interestRate: "Moderada",
      maintenanceCost: "Baixo",
      iptu: "$800/ano",
    },
  },
  {
    id: "luxury-villa",
    name: "Luxury Villa",
    address: "789 Ocean Dr, Beach City",
    price: "$1,200,000",
    squareMeter: "350",
    imageUrl: "/images/land_3.png",
    images: ["/images/land_3.png", "/images/land_1.jpeg", "/images/land_2.webp"],
    description: "Vila de luxo à beira-mar com vista panorâmica do oceano. Acabamento premium, piscina infinity, e acesso privado à praia.",
    totalArea: "350 m²",
    units: "4",
    deliveryDate: "Dezembro/2026",
    developer: "Oceanview Estates",
    paymentCondition: "Entrada de 40% e saldo em até 60x diretamente com a construtora.",
    constructionStatus: "Estrutura 80% concluída",
    lastUpdate: "Outubro/2025",
    risks: {
      liquidity: "Muito Alta",
      development: "Avançado",
      environmental: "Sem riscos",
      interestRate: "Alta",
      maintenanceCost: "Alto",
      iptu: "$5,000/ano",
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}