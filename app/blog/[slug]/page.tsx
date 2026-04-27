import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-posts";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Enklaris`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  "WhatsApp API": "#25D366",
  "AI Agent": "#7BA7A0",
  "Database": "#C17F5A",
  "Geo Analytics": "#6B7280",
  "Industry Insights": "#8B5CF6",
};

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 2);

  const others = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  ).slice(0, Math.max(0, 3 - related.length));

  const relatedPosts = [...related, ...others].slice(0, 3);

  return (
    <main
      style={{ background: "#F8F6F1", minHeight: "100vh" }}
      className="pt-24 pb-24"
    >
      {/* Back button */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
          style={{ color: "#7BA7A0" }}
        >
          ← Kembali ke Blog
        </Link>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <header className="mb-10">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-5"
            style={{
              background:
                (CATEGORY_COLORS[post.category] || "#7BA7A0") + "18",
              color: CATEGORY_COLORS[post.category] || "#7BA7A0",
              border: `1px solid ${(CATEGORY_COLORS[post.category] || "#7BA7A0")}40`,
            }}
          >
            {post.category}
          </span>
          <h1
            className="text-3xl md:text-4xl font-extrabold leading-tight mb-6"
            style={{ color: "#1A1A2E" }}
          >
            {post.title}
          </h1>
          <div
            className="flex flex-wrap items-center gap-4 text-sm"
            style={{ color: "#9CA3AF" }}
          >
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} menit baca</span>
          </div>
          <div
            className="mt-6 border-t"
            style={{ borderColor: "rgba(26,26,46,0.1)" }}
          />
        </header>

        {/* Content */}
        <div
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            color: "#374151",
            fontSize: "1.0625rem",
            lineHeight: "1.8",
          }}
        />

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{ background: "#1A1A2E" }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#7BA7A0" }}
          >
            Diskusikan Bersama Kami
          </p>
          <p
            className="text-lg font-medium mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Tertarik berdiskusi tentang solusi untuk bisnis Anda?
          </p>
          <Link
            href="/#kontak-form"
            className="inline-block px-8 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #7BA7A0, #4a8c84)" }}
          >
            Hubungi Kami →
          </Link>
        </div>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 mt-20">
          <h2
            className="text-xl font-bold mb-8"
            style={{ color: "#1A1A2E" }}
          >
            Artikel Lainnya
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group block rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 2px 12px rgba(26,26,46,0.07)",
                }}
              >
                <div
                  className="h-1"
                  style={{
                    background:
                      CATEGORY_COLORS[related.category] || "#7BA7A0",
                  }}
                />
                <div className="p-5">
                  <span
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: CATEGORY_COLORS[related.category] || "#7BA7A0" }}
                  >
                    {related.category}
                  </span>
                  <p
                    className="text-sm font-semibold mt-2 leading-snug line-clamp-2 group-hover:opacity-70 transition-opacity"
                    style={{ color: "#1A1A2E" }}
                  >
                    {related.title}
                  </p>
                  <p
                    className="text-xs mt-2"
                    style={{ color: "#9CA3AF" }}
                  >
                    {related.readTime} menit baca
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
