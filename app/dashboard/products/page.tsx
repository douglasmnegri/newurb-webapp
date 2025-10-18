import ProductCard from "./productCard";

export default function ProductsPage() {
  return (
    <main className="m-12 bg-gray-50 dark:bg-gray-900">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5 bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Our Products
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Explore our range of products available for you.
        </p>
      </div>
      <div className="space-y-6">
        <ProductCard
          name="Modern Apartment"
          address="123 Main St, Cityville"
          price="$250,000"
          squareMeter="85"
          imageUrl=""
        />
        <ProductCard
          name="Cozy Cottage"
          address="456 Country Rd, Townsville"
          price="$180,000"
          squareMeter="120"
          imageUrl=""
        />
        <ProductCard
          name="Luxury Villa"
          address="789 Ocean Dr, Beach City"
          price="$1,200,000"
          squareMeter="350"
          imageUrl=""
        />
      </div>
    </main>
  );
}
