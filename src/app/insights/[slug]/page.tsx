import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogs";
import { BlogDetail } from "@/components/blog/BlogDetail";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="section-pad py-16">
      <div className="mx-auto max-w-4xl">
        <BlogDetail post={post} />
      </div>
    </main>
  );
}

export const dynamic = "force-static";
