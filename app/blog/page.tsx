import type { Metadata } from "next";
import { getBlogPosts, getBlogCategories } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Artigos sobre Saúde Mental e Psicanálise",
  description: "Leia artigos e conteúdos sobre saúde mental, psicanálise, bem-estar e autoconhecimento.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const categories = getBlogCategories();

  return (
    <div className="bg-white">
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Artigos e conteúdos sobre saúde mental, psicanálise e bem-estar
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {categories.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2 justify-center">
              <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
                Todas
              </span>
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-indigo-50 hover:border-indigo-200 transition-colors cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">
                Ainda não há artigos publicados.
              </p>
              <p className="text-gray-500">
                Em breve teremos conteúdos sobre saúde mental e psicanálise.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

