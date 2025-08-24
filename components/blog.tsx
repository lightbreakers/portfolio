import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Blog() {
  const posts = [
    {
      date: "December 15, 2024",
      title: "Building Scalable Microservices Architecture",
      description: "Lessons learned from designing and implementing microservices at scale.",
      readTime: "8 min read",
    },
    {
      date: "November 28, 2024",
      title: "The Future of AI in Software Development",
      description: "How AI is transforming the way we write, test, and deploy code.",
      readTime: "6 min read",
    },
    {
      date: "November 10, 2024",
      title: "System Design Patterns for Modern Apps",
      description: "Essential patterns every software architect should know in 2024.",
      readTime: "12 min read",
    },
  ]

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-semibold text-foreground">Latest Posts</h2>
          <Button variant="ghost" className="text-accent hover:text-accent/80">
            View all posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="flex items-start justify-between mb-2">
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>

              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors mb-2">
                {post.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4">{post.description}</p>

              <Button variant="ghost" className="text-accent hover:text-accent/80 p-0 h-auto">
                Read article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
