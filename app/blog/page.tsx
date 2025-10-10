import Card from "./card";
import agent from "@/public/images/agent.webp";

export default function BlogPage() {
  return (
    <main>
      <Card
        title="Sample Post"
        date="January 1, 2024"
        description="This is a sample blog post description."
        imageUrl={agent.src}
        link="/blog/sample-post"
      />
      <Card
        title="Sample Post"
        date="January 1, 2024"
        description="This is a sample blog post description."
        imageUrl={agent.src}
        link="/blog/sample-post"
      />
      <Card
        title="Sample Post"
        date="January 1, 2024"
        description="This is a sample blog post description."
        imageUrl={agent.src}
        link="/blog/sample-post"
      />
    </main>
  );
}
