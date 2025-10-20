import { products } from "@/lib/products";
import PropertyDetailsClient from "./PropertyDetailsClient";
import { notFound } from "next/navigation";

// Generate static paths for all products
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function PropertyDetailsPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return <PropertyDetailsClient product={product} />;
}