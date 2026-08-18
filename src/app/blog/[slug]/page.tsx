import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Sparkles } from "lucide-react";
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
  "Web Development": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  "App Development": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  "Digital Marketing": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  "UI/UX Design": "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
  Cybersecurity: "bg-red-500/10 border-red-500/30 text-red-500 dark:text-red-400",
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
    <main className="relative pt-28 md:pt-36 pb-24 bg-background text-foreground overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Top Red Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(255,42,42,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <article className="relative mx-auto max-w-4xl px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            <li>
              <Link href="/" className="hover:text-[#FF2A2A] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="hover:text-[#FF2A2A] transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground line-clamp-1">{post.title}</li>
          </ol>
        </nav>

        {/* Tag */}
        <span
          className={`rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-wider ${
            tagColors[post.tag] ?? "bg-red-500/10 border-red-500/30 text-red-500"
          }`}
        >
          {post.tag}
        </span>

        {/* Title */}
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl tracking-tight">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-semibold text-muted-foreground border-b border-neutral-200 dark:border-white/10 pb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-[#FF2A2A]" aria-hidden />
            <span className="text-foreground font-bold">{post.author}</span>
            <span className="text-muted-foreground font-normal">· {post.authorRole}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#FF2A2A]" aria-hidden />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#FF2A2A]" aria-hidden />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Excerpt / Lead Quote Box */}
        <div className="mt-8 p-6 rounded-2xl bg-red-500/5 border-l-4 border-[#FF2A2A]">
          <p className="text-base sm:text-lg text-foreground font-semibold leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Post content */}
        <div className="blog-content mt-10" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Topics / Tags */}
        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-white/10">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-3">
            Topics & Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-3.5 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author box */}
        <div className="mt-10 rounded-3xl border border-neutral-200 dark:border-white/10 bg-neutral-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start gap-5 shadow-xl">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FF2A2A]/20 border border-[#FF2A2A] text-[#FF2A2A] font-display font-extrabold text-2xl">
            {post.author.charAt(0)}
          </div>
          <div className="space-y-1">
            <p className="font-display font-extrabold text-lg text-white">{post.author}</p>
            <p className="text-xs font-semibold text-[#FF2A2A] uppercase tracking-wider">
              {post.authorRole}
            </p>
            <p className="pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-medium">
              Building websites, web apps, mobile apps, and digital marketing strategies for
              startups and businesses across India since 2022.{" "}
              <Link href="/about" className="text-[#FF2A2A] hover:underline font-bold">
                Learn more about BugCab →
              </Link>
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 rounded-3xl bg-[linear-gradient(135deg,#FF2A2A_0%,#B91C1C_40%,#7F1D1D_75%,#350707_100%)] p-8 sm:p-10 text-white text-center space-y-4 shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Need Help With {post.tag}?</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
            Let&apos;s Build Your Product Together.
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
            BugCab delivers custom web applications, mobile apps, and digital marketing for startups
            and businesses. Get a transparent fixed-price quote within 24 hours.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white text-neutral-950 px-7 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              Get a Free Quote →
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
              className="rounded-full border border-white/40 px-7 py-3.5 font-bold text-xs uppercase tracking-wider hover:border-white text-white transition-all"
            >
              View {post.tag} Service
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6">
              Related Articles
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-3xl border border-neutral-200/80 dark:border-white/10 bg-card p-6 hover:border-[#FF2A2A]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <span
                    className={`rounded-full border px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                      tagColors[r.tag] ?? "bg-red-500/10 border-red-500/30 text-red-500"
                    }`}
                  >
                    {r.tag}
                  </span>
                  <h3 className="mt-3 font-display text-base font-extrabold text-foreground group-hover:text-[#FF2A2A] transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-muted-foreground hover:text-[#FF2A2A] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all articles</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
