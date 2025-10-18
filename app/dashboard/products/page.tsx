// app/dashboard/products/page.tsx
import ProductCard from "./productCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="m-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5 bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Our Products
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Explore our range of products available for you.
        </p>
      </div>

      <div className="space-y-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            address={product.address}
            price={product.price}
            squareMeter={product.squareMeter}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}