import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryLabel = post.category === "cybersecurity" ? "SECURITY" : "TECHNOLOGY";
  return (
    <article className="border border-line rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-mono text-muted">{categoryLabel}</span>
        <span className="text-xs text-muted">·</span>
        <span className="text-xs text-muted">{post.readTime} min read</span>
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
        <Link href={`/insights/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="text-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted">{post.author}</span>
        <span className="text-sm text-muted">{post.date}</span>
      </div>
    </article>
  );
}

interface BlogListProps {
  posts: BlogPost[];
  category?: string;
  title?: string;
}

export function BlogList({ posts, category, title }: BlogListProps) {
  return (
    <section className="section-pad py-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker mb-4">
          <span>{posts.length} /</span>
          <span>Articles</span>
        </div>
        {title && <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">{title}</h1>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
