export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  ogImage: string;
  date: string;
}

const MOCK_POSTS: Record<string, Post> = {
  "how-much-does-a-website-cost-2025": {
    slug: "how-much-does-a-website-cost-2025",
    title: "How Much Does It Cost to Build a Website in 2025?",
    excerpt:
      "A transparent, itemised breakdown of website development costs — from a basic landing page to a full SaaS platform.",
    content:
      "Building a website in 2025 comes with varying cost ranges depending on the complexity, tech stack, and scope. From basic landing pages to custom enterprise systems, the total cost depends entirely on the design requirements, database architecture, and required integrations. At BugCab, we follow a transparent fixed-cost model so you receive a detailed estimate before any development begins, ensuring there are no hidden costs or surprise invoices.",
    ogImage: "/og-image.png",
    date: "2025-01-15",
  },
  "flutter-vs-react-native-startup-2025": {
    slug: "flutter-vs-react-native-startup-2025",
    title: "Flutter vs React Native — Which Should Your Startup Choose in 2025?",
    excerpt:
      "A practical comparison of Flutter and React Native for startup founders — performance, cost, hiring, and when to pick each.",
    content:
      "Choosing the right cross-platform mobile development framework is critical for early-stage startups. Flutter (by Google) and React Native (by Meta) are the industry leaders. Flutter uses the Dart language and compiles to machine code, providing pixel-perfect canvas rendering and highly consistent UI performance across older devices. React Native uses JavaScript/TypeScript and renders native platform components, offering closer integration with the host OS and an easier transition for React web developers. If your application requires intensive platform integrations or relies on a large pool of JavaScript developers, React Native is the ideal choice. If your focus is a custom branded experience with rapid UI prototyping, Flutter is highly effective. Both support 60fps speeds and compilation to both App Store and Google Play Store from a single codebase.",
    ogImage: "/og-image.png",
    date: "2025-01-22",
  },
  "seo-for-startups-90-day-plan": {
    slug: "seo-for-startups-90-day-plan",
    title: "SEO for Startups — A 90-Day Plan to Get on Page One",
    excerpt:
      "A step-by-step SEO roadmap for startup founders who want organic traffic without an expensive agency retainer.",
    content:
      "Search Engine Optimization (SEO) is the highest-ROI channel for startup growth. To rank on page one of Google without a high monthly retainer, startups should follow a structured 90-day plan. Phase 1 (Days 1-30) focuses on technical SEO foundation: ensuring your site uses SSR (Server-Side Rendering) with frameworks like Next.js, setting up correct canonical meta tags, optimizing images, and establishing structural JSON-LD schema markup. Phase 2 (Days 31-60) is keyword research and on-page alignment: identifying bottom-of-funnel queries with search volume and matching them with dedicated landing pages. Phase 3 (Days 61-90) is content volume and backlinks: publishing high-quality articles, submitting your startup to high-domain listings like Clutch and Google Maps, and monitoring search traffic in Google Search Console.",
    ogImage: "/og-image.png",
    date: "2025-02-01",
  },
};

export async function getPost(slug: string): Promise<Post | undefined> {
  // Simulate database latency
  await new Promise((resolve) => setTimeout(resolve, 50));
  return MOCK_POSTS[slug];
}

export async function getPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 30));
  return Object.values(MOCK_POSTS);
}
