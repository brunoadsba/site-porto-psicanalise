import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-indigo-200 h-full flex flex-col">
        {post.category && (
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
            {post.category}
          </span>
        )}
        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="text-indigo-600 font-medium hover:text-indigo-700">
            Ler mais →
          </span>
        </div>
      </article>
    </Link>
  );
}

