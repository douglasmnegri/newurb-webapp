export interface CardProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

function Card({ title, date, description, link }: CardProps) {
  return (
    <a
      href={link}
      className="block border-t-2 border-gray-300 dark:border-gray-800  overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row gap-4 m-4 p-4">
        <div className="flex items-center">
          <p className="text-gray-500 text-opacity-75">{date}</p>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
