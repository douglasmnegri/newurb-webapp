import ProductCard from "./productCard";
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
        <ProductCard
          id="modern-apartment" 
          name="Modern Apartment"
          address="123 Main St, Cityville"
          price="$250,000"
          squareMeter="85"
          imageUrl="/images/land_1.jpeg" // ✅ right path
        />
        <ProductCard
          id="cozy-cottage" 
          name="Cozy Cottage"
          address="456 Country Rd, Townsville"
          price="$180,000"
          squareMeter="120"
          imageUrl="/images/land_2.webp"
        />
        <ProductCard
          id="luxury-villa" 
          name="Luxury Villa"
          address="789 Ocean Dr, Beach City"
          price="$1,200,000"
          squareMeter="350"
          imageUrl="/images/land_3.png"
        />
      </div>
    </main>
  );
}
