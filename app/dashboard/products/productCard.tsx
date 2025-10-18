import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  id: string;
  name: string;
  address: string;
  price: string;
  squareMeter: string;
  imageUrl: string;
}

export default function ProductCard({
  id,
  name,
  address,
  price,
  squareMeter,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="flex flex-col md:flex-row border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Left Image */}
      <div className="relative w-full md:w-3/5 h-56 md:h-72">
        <Image
          src={imageUrl || "/images/placeholder.jpg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-between w-full p-5">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Lote/Terreno para comprar com {squareMeter} m² em
          </p>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{address}</p>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-between my-6">
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              {price}
            </p>
          </div>
          <div className="flex gap-5">
            <Link href={`/dashboard/products/${id}`}>
              <button className="bg-gray-800 hover:bg-white text-white hover:text-black font-bold hover:underline rounded-lg py-2 px-5">
                View Details
              </button>
            </Link>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg">
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}