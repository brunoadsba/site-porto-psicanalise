import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white">
      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700 mb-8"
          >
            ← Voltar ao blog
          </Link>

          <header className="mb-8">
            {post.category && (
              <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                {post.category}
              </span>
            )}
            <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
              {post.title}
            </h1>
            <time
              dateTime={post.date}
              className="text-gray-500 text-sm"
            >
              {formatDate(post.date)}
            </time>
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-indigo-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>
    </div>
  );
}

