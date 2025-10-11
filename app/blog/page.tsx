import Card from "./card";
import agent from "@/public/images/agent.webp";

export default function BlogPage() {
  return (
    <main className="m-12 bgray-50 dark:bg-gray-900">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5 bg-white dark:bg-gray-900"> 
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Latest news
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Welcome to our blog! Stay updated with the latest news and articles.
        </p>
      </div>
      <div>
        <Card
          title="Sample Post"
          date="January 1, 2024"
          description="This is a sample blog post description."
          imageUrl={agent.src}
          link="/blog/sample-post"
        />
        <Card
          title="Sample Post"
          date="February 4, 2024"
          description="This is a sample blog post description."
          imageUrl={agent.src}
          link="/blog/sample-post"
        />
        <Card
          title="Sample Post"
          date="March 3, 2024"
          description="This is a sample blog post description."
          imageUrl={agent.src}
          link="/blog/sample-post"
        />
      </div>
    </main>
  );
}
