"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, Clock, Calendar, Sparkles, BookOpen } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { Reveal } from "@/components/Reveal";

const tagColors: Record<string, string> = {
  "Web Development": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  "App Development": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  "Digital Marketing": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  "UI/UX Design": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  Cybersecurity: "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  "Industry Trends": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  "Business Growth": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
};

export default function BlogPage() {
  const posts = useMemo(() => getAllPosts(), []);
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.tag));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = selectedTag === "All" || post.tag === selectedTag;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTag && matchesSearch;
    });
  }, [posts, selectedTag, searchQuery]);

  const featured = filteredPosts[0] ?? posts[0];
  const restPosts = selectedTag === "All" && !searchQuery ? filteredPosts.slice(1) : filteredPosts;

  return (
    <main className="relative pt-28 md:pt-36 pb-24 bg-background text-foreground overflow-hidden">
      {/* Hero Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(255,42,42,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 space-y-12">
        {/* Breadcrumb */}
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              <li>
                <Link href="/" className="hover:text-[#FF2A2A] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Blog</li>
            </ol>
          </nav>
        </Reveal>

        {/* Hero Header */}
        <Reveal>
          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-[#FF2A2A] font-bold block">
              — Our Knowledge Hub
            </span>
            <h1 className="font-display text-4xl font-extrabold sm:text-6xl lg:text-7xl text-foreground uppercase tracking-tighter leading-[1.02]">
              INSIGHTS FOR <span className="text-[#FF2A2A]">FOUNDERS</span> & BUILDERS.
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium max-w-2xl pt-2">
              Actionable guides on Web Development, Mobile Apps, UI/UX, SEO & IT Strategy — written for founders and creators who need real answers, not agency fluff.
            </p>
          </div>
        </Reveal>

        {/* Search & Filter Controls Bar */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-y border-neutral-200/80 dark:border-white/10 py-6">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap border ${
                  selectedTag === cat
                    ? "bg-[#FF2A2A] text-white border-[#FF2A2A] shadow-md shadow-red-500/20 scale-105"
                    : "bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-[#FF2A2A]/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              id="blog-search"
              type="text"
              aria-label="Search articles"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-100/60 dark:bg-neutral-900/60 text-xs text-foreground placeholder:text-neutral-400 focus:border-[#FF2A2A] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Featured Article Card */}
        {selectedTag === "All" && !searchQuery && featured && (
          <section className="space-y-4 pt-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF2A2A] font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Featured Article</span>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="group relative block overflow-hidden rounded-[2.5rem] p-[3px] bg-[linear-gradient(135deg,#FF2A2A_0%,#DC2626_40%,#7F1D1D_75%,#1A0505_100%)] shadow-2xl transition-all duration-500 hover:scale-[1.01]"
            >
              <div className="w-full h-full rounded-[2.3rem] overflow-hidden bg-neutral-950 p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative min-h-[380px]">
                {/* Red glow effect */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(255,42,42,0.25)_0%,transparent_70%)] pointer-events-none blur-2xl" />

                <div className="relative z-10 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${
                        tagColors[featured.tag] ?? "bg-red-500/10 border-red-500/30 text-red-500"
                      }`}
                    >
                      {featured.tag}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#FF2A2A]" />
                      <time dateTime={featured.date}>
                        {new Date(featured.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#FF2A2A]" />
                      <span>{featured.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#FF2A2A] transition-colors max-w-4xl">
                    {featured.title}
                  </h2>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-medium max-w-3xl line-clamp-3">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FF2A2A]/20 border border-[#FF2A2A] text-[#FF2A2A] font-bold text-sm flex items-center justify-center">
                      {featured.author.charAt(0)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">{featured.author}</span>
                      <span className="text-[11px] text-neutral-400 block">{featured.authorRole}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-[#FF2A2A] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg group-hover:bg-[#d92323] transition-all group-hover:translate-x-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Grid of Articles */}
        <section className="space-y-6 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#FF2A2A]" />
              <span>
                {selectedTag === "All" && !searchQuery
                  ? "All Articles"
                  : `Articles in "${selectedTag}" (${filteredPosts.length})`}
              </span>
            </p>
          </div>

          {restPosts.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-3xl p-8">
              <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
                No articles found matching &quot;{searchQuery}&quot;. Try another search term or filter.
              </p>
              <button
                onClick={() => {
                  setSelectedTag("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-bold uppercase text-[#FF2A2A] underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {restPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between rounded-3xl border border-neutral-200/80 dark:border-white/10 bg-card p-6 sm:p-8 hover:border-[#FF2A2A]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                          tagColors[post.tag] ?? "bg-red-500/10 border-red-500/30 text-red-500"
                        }`}
                      >
                        {post.tag}
                      </span>
                      <span className="text-[11px] text-muted-foreground font-medium">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-extrabold leading-snug text-foreground group-hover:text-[#FF2A2A] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-200/60 dark:border-white/10 flex items-center justify-between text-xs font-semibold">
                    <span className="text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#FF2A2A] group-hover:translate-x-1 transition-transform">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* CTA Banner */}
        <section className="pt-16">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#FF2A2A]/30 bg-neutral-950 p-8 sm:p-14 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(255,42,42,0.25)_0%,transparent_70%)] pointer-events-none blur-2xl" />

            <div className="relative z-10 max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF2A2A] font-bold block">
                — Ready to Build?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                HAVE A PROJECT IN MIND OR NEED TECH ADVICE?
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm font-medium leading-relaxed">
                Talk to our engineering lead today. We&apos;ll analyze your requirements and send a transparent fixed-price proposal within 24 hours.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#FF2A2A] hover:bg-[#d92323] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
