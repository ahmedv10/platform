import { blogPosts } from "@/lib/blogs";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata = {
  title: "Insights | OYOON ALTAQNYA",
  description: "Technical guides, cybersecurity advisories, and practical perspectives for leaders making consequential technology decisions.",
};

export default function InsightsPage() {
  return (
    <main className="section-pad py-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-kicker mb-4">
          <span>03 /</span>
          <span>Insights</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-8">
          Useful thinking for<br />
          <em>what comes next.</em>
        </h1>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          Technical guides, cybersecurity advisories, and practical perspectives
          for leaders making consequential technology decisions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
