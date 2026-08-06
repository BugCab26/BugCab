import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/blog";

// ── Static params for build-time generation ────────────────────────────────
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ── Dynamic metadata per post ──────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://bugcab.com/blog/${post.slug}`;

  return {
    title: `${post.title} | BugCab Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author, url: "https://bugcab.com/about" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.coverImage
        ? [
            {
              url: `https://bugcab.com${post.coverImage}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [{ url: "https://bugcab.com/images/og-blog.jpg", width: 1200, height: 630 }],
      siteName: "BugCab IT Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage
        ? [`https://bugcab.com${post.coverImage}`]
        : ["https://bugcab.com/images/og-blog.jpg"],
    },
  };
}

// ── Tag colour map ─────────────────────────────────────────────────────────
const tagColors: Record<string, string> = {
  "Web Development": "bg-blue-500/10  border-blue-500/20  text-blue-400",
  "App Development": "bg-violet-500/10 border-violet-500/20 text-violet-400",
  "Digital Marketing": "bg-lime/10      border-lime/20       text-lime",
  "UI/UX Design": "bg-pink-500/10  border-pink-500/20  text-pink-400",
  Cybersecurity: "bg-red-500/10   border-red-500/20   text-red-400",
};

// ── Page ──────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.tag);
  const url = `https://bugcab.com/blog/${post.slug}`;

  // ── Schema ──────────────────────────────────────────────────────────────
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": url,
        headline: post.title,
        description: post.excerpt,
        url: url,
        datePublished: post.date,
        dateModified: post.updatedDate ?? post.date,
        inLanguage: "en-IN",
        keywords: post.tags.join(", "),
        articleSection: post.tag,
        wordCount: post.content.replace(/<[^>]+>/g, "").split(/\s+/).length,
        author: {
          "@type": "Person",
          "@id": "https://bugcab.com/#founder",
          name: post.author,
          jobTitle: post.authorRole,
          url: "https://bugcab.com/about",
        },
        publisher: { "@id": "https://bugcab.com/#organization" },
        ...(post.coverImage && {
          image: {
            "@type": "ImageObject",
            url: `https://bugcab.com${post.coverImage}`,
            width: 1200,
            height: 630,
          },
        }),
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://bugcab.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://bugcab.com/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        },
      },
    ],
  };

  return (
    <main className="relative pt-24 bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="mx-auto max-w-3xl px-6 pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-lime transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="hover:text-lime transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground line-clamp-1">{post.title}</li>
          </ol>
        </nav>

        {/* Tag */}
        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${tagColors[post.tag] ?? "bg-lime/10 border-lime/20 text-lime"}`}
        >
          {post.tag}
        </span>

        {/* Title */}
        <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" aria-hidden />
            <span>{post.author}</span>
            <span className="text-muted-foreground/50">· {post.authorRole}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" aria-hidden />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Excerpt / lead paragraph */}
        <p className="mt-8 text-lg text-foreground font-medium leading-relaxed border-l-2 border-lime pl-4">
          {post.excerpt}
        </p>

        {/* Post content */}
        <div className="blog-content mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
            Topics
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author box */}
        <div className="mt-10 rounded-2xl border border-border bg-card/40 p-6 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime/20 text-lime font-display font-bold text-xl">
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="font-display font-bold text-foreground">{post.author}</p>
            <p className="text-sm text-muted-foreground">{post.authorRole}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Building websites, apps, and digital marketing strategies for startups and freelancers
              across India since 2022.{" "}
              <Link href="/about" className="text-lime hover:underline">
                Learn more →
              </Link>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl bg-lime/5 border border-lime/20 p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Need help with {post.tag}?
          </h2>
          <p className="mt-2 text-muted-foreground text-sm">
            BugCab has delivered 50+ projects for startups and freelancers. Free quote within 24
            hours. No commitment required.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-lime px-6 py-2.5 font-bold text-black text-sm hover:bg-lime/90 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href={`/services/${
                post.tag === "Web Development"
                  ? "web-development"
                  : post.tag === "App Development"
                    ? "mobile-app-development"
                    : post.tag === "UI/UX Design"
                      ? "ui-ux-design"
                      : post.tag === "Digital Marketing"
                        ? "digital-marketing"
                        : "web-development"
              }`}
              className="rounded-full border border-border px-6 py-2.5 font-semibold text-sm hover:border-lime transition-colors"
            >
              View {post.tag} Service →
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-12">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-6">
              Related Articles
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 hover:border-lime transition-all"
                >
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tagColors[r.tag] ?? "bg-lime/10 border-lime/20 text-lime"}`}
                  >
                    {r.tag}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-foreground group-hover:text-lime transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-lime transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </Link>
        </div>
      </article>
    </main>
  );
}
