export interface ProductCardProps {
  name: string;
  address: string;
  price: string;
  squareMeter: string;
  imageUrl: string;
}

function ProductCard({ name, address, price, squareMeter, imageUrl }: ProductCardProps) {
  return (
    <div className="border-t-2 border-gray-300 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row gap-4 m-4 p-4">
        <div className="w-full md:w-1/3 h-48 relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex flex-col justify-between p-4 w-full md:w-2/3">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{address}</p>
          </div>
          <div className="flex justify  -between text-gray-800 dark:text-gray-200">
            <span className="font-medium">{price}</span>
            <span className="font-medium">{squareMeter} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;