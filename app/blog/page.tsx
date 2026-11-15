"use client";

import { useState } from "react";
import Link from "next/link";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog-posts";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  "WhatsApp API": "#25D366",
  "AI Agent": "#8E6BB0",
  "Lead Generation": "#6B3F8F",
  "Industry Insights": "#8B5CF6",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featured = BLOG_POSTS.find((p) => p.featured);
  const showFeatured = activeCategory === "All" && featured;

  return (
    <main
      style={{ background: "#FBFAFD", minHeight: "100vh" }}
      className="pt-24 pb-24"
    >
      {/* Hero */}
      <section
        className="py-20 px-6"
        style={{ background: "#2A1638" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#8E6BB0" }}
          >
            Enklaris Blog
          </p>
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Insights and perspectives
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(251,250,253,0.65)" }}
          >
            Our thinking on lead generation, AI agents and customer
            conversations in Indonesia.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center py-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background:
                  activeCategory === cat ? "#2A1638" : "rgba(42,22,56,0.07)",
                color: activeCategory === cat ? "#FFFFFF" : "#2A1638",
                border: activeCategory === cat
                  ? "2px solid #8E6BB0"
                  : "2px solid transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured article */}
        {showFeatured && featured && (
          <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
            <div
              className="rounded-2xl overflow-hidden grid md:grid-cols-2"
              style={{ background: "#2A1638" }}
            >
              {/* Color block placeholder */}
              <div
                className="hidden md:block"
                style={{
                  background:
                    "linear-gradient(135deg, #8E6BB0 0%, #55306F 100%)",
                  minHeight: "280px",
                }}
              />
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                  style={{
                    background: CATEGORY_COLORS[featured.category] + "22",
                    color: CATEGORY_COLORS[featured.category] || "#8E6BB0",
                    border: `1px solid ${CATEGORY_COLORS[featured.category] || "#8E6BB0"}40`,
                  }}
                >
                  {featured.category}
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-celadon transition-colors"
                  style={{ color: "#FFFFFF" }}
                >
                  {featured.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(251,250,253,0.65)" }}
                >
                  {featured.excerpt}
                </p>
                <div
                  className="flex items-center gap-4 text-xs"
                  style={{ color: "rgba(251,250,253,0.45)" }}
                >
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime} min read</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered
            .filter((p) => !(showFeatured && p.featured))
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 2px 16px rgba(42,22,56,0.07)",
                }}
              >
                {/* Top color bar */}
                <div
                  className="h-2"
                  style={{
                    background:
                      CATEGORY_COLORS[post.category] || "#8E6BB0",
                  }}
                />
                <div className="p-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
                    style={{
                      background:
                        (CATEGORY_COLORS[post.category] || "#8E6BB0") + "18",
                      color: CATEGORY_COLORS[post.category] || "#8E6BB0",
                    }}
                  >
                    {post.category}
                  </span>
                  <h3
                    className="text-base font-bold leading-snug mb-3 group-hover:text-celadon transition-colors line-clamp-2"
                    style={{ color: "#2A1638" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5 line-clamp-3"
                    style={{ color: "#6B7280" }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center justify-between text-xs"
                    style={{ color: "#9CA3AF" }}
                  >
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <div
                    className="mt-4 text-sm font-semibold transition-colors"
                    style={{ color: "#8E6BB0" }}
                  >
                    Read more
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {filtered.length === 0 && (
          <p
            className="text-center py-16 text-lg"
            style={{ color: "#9CA3AF" }}
          >
            No articles in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}
