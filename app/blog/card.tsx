export interface CardProps {
  title: string;
  date: string
  description: string;
  imageUrl: string;
  link: string;
}

function Card({ title, date, description, imageUrl, link }: CardProps) {
  return (
    <a href={link} className="block border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      
      <div className="flex flex-col md:flex-row gap-4 m-4 p-4">
        <div className="flex items-center">
          <p>{date}</p>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
}  

export default Card;