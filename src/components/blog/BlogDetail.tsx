import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

interface BlogDetailProps {
  post: BlogPost;
}

export function BlogDetail({ post }: BlogDetailProps) {
  const categoryLabel = post.category === "cybersecurity" ? "SECURITY" : "TECHNOLOGY";
  return (
    <article className="prose prose-invert max-w-4xl mx-auto">
      <header className="mb-12 not-prose">
        <div className="section-kicker mb-4">
          <span>{post.category === "cybersecurity" ? "01" : "02"} /</span>
          <span>{post.category === "cybersecurity" ? "Cybersecurity" : "Technology"}</span>
        </div>
        <span className="text-xs font-mono text-muted">{categoryLabel} · {post.readTime} min read</span>
        <h1 className="text-4xl md:text-5xl font-bold text-ink my-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted mb-6">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
        <p className="text-xl text-muted">{post.excerpt}</p>
      </header>

      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
      />

      <footer className="mt-12 pt-8 border-t border-line not-prose">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-paper-light rounded-full text-muted">
              #{tag}
            </span>
          ))}
        </div>
        <Link
          href="/insights"
          className="text-link inline-flex items-center"
        >
          ← Back to Insights
        </Link>
      </footer>
    </article>
  );
}
