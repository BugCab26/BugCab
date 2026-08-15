import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — IT Tips, Startup Tech Guides & Dev Insights | BugCab",
  description:
    "The BugCab blog covers web development, mobile app development, UI/UX, digital marketing & IT strategy — all tailored for startup founders and freelancers across India.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "https://bugcab.com/blog",
    title: "Blog — IT Guides for Startups & Freelancers | BugCab",
    description:
      "Web development, mobile apps, UI/UX, SEO & IT strategy — written for founders and freelancers who need real answers.",
    images: [{ url: "https://bugcab.com/images/og-blog.jpg", width: 1200, height: 630 }],
    siteName: "BugCab IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — IT Guides for Startups & Freelancers | BugCab",
    description:
      "Web development, mobile apps, UI/UX & SEO guides for startup founders across India.",
    images: ["https://bugcab.com/images/og-blog.jpg"],
  },
};

// ── Schema ───────────────────────────────────────────────────────────────────
function BlogIndexSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": "https://bugcab.com/blog",
          name: "BugCab Blog — IT Guides for Startups & Freelancers",
          description:
            "Web development, mobile app, UI/UX, digital marketing & IT strategy articles for startup founders and freelancers across India.",
          url: "https://bugcab.com/blog",
          publisher: { "@id": "https://bugcab.com/#organization" },
          inLanguage: "en-IN",
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://bugcab.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://bugcab.com/blog" },
            ],
          },
        }),
      }}
    />
  );
}

// ── Tag colour map ────────────────────────────────────────────────────────────
const tagColors: Record<string, string> = {
  "Web Development": "bg-blue-500/10  border-blue-500/20  text-blue-400",
  "App Development": "bg-violet-500/10 border-violet-500/20 text-violet-400",
  "Digital Marketing": "bg-lime/10      border-lime/20       text-lime",
  "UI/UX Design": "bg-pink-500/10  border-pink-500/20  text-pink-400",
  Cybersecurity: "bg-red-500/10   border-red-500/20   text-red-400",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="relative pt-24 bg-background text-foreground">
      <BlogIndexSchema />

      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-lime transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">Blog</li>
          </ol>
        </nav>

        <span className="text-xs uppercase tracking-[0.4em] text-lime">— Blog</span>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl text-foreground">
          IT Guides for <span className="text-lime">Startups & Freelancers.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          Web development, mobile apps, UI/UX, SEO, and IT strategy — written for founders and
          freelancers who need real answers, not agency fluff.
        </p>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="mx-auto max-w-7xl px-6 pb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-6">
            Featured Post
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-3xl border border-border bg-card hover:border-lime transition-all duration-300 overflow-hidden"
          >
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${tagColors[featured.tag] ?? "bg-lime/10 border-lime/20 text-lime"}`}
                >
                  {featured.tag}
                </span>
                <time dateTime={featured.date} className="text-xs text-muted-foreground">
                  {new Date(featured.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-xs text-muted-foreground">{featured.readTime}</span>
              </div>
              <h2 className="font-display text-2xl font-bold leading-snug text-foreground group-hover:text-lime transition-colors sm:text-3xl lg:text-4xl max-w-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-lime font-semibold text-sm group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* All Posts Grid */}
      {rest.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-6">
            All Articles
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-lime transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tagColors[post.tag] ?? "bg-lime/10 border-lime/20 text-lime"}`}
                    >
                      {post.tag}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-bold leading-snug text-foreground group-hover:text-lime transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
