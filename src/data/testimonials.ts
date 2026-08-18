export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  company: string;
  tag: string;
  rating: number;
  date: string;
  review: string;
  project: string;
  avatarColor: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Founder",
    company: "Fintrax",
    tag: "Web Development",
    rating: 5,
    date: "2025-01-10",
    review:
      "BugCab built our entire SaaS platform from scratch in under 8 weeks. The Next.js architecture they chose has scaled perfectly as we've grown. The code quality and delivery speed were both exceptional. Worth every rupee.",
    project: "SaaS dashboard + admin panel",
    avatarColor: "bg-blue-600",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Independent Consultant",
    company: "Priya Nair Consulting",
    tag: "UI/UX Design",
    rating: 5,
    date: "2025-01-18",
    review:
      "I needed a professional website that would win clients from the first impression. BugCab delivered a Figma-to-production design that genuinely looks enterprise-grade. Every screen was approved before they wrote a single line of code.",
    project: "Consultant portfolio website + UI design",
    avatarColor: "bg-pink-600",
  },
  {
    id: 3,
    name: "Rajan Krishnamurthy",
    role: "Co-Founder",
    company: "Edunova",
    tag: "Digital Marketing",
    rating: 5,
    date: "2025-02-05",
    review:
      "Their digital marketing team took us from zero to 5,000 monthly organic visitors in four months. The SEO strategy they built — technical fixes first, then content — is still compounding today. We rank on page one for our three main keywords.",
    project: "SEO strategy + content marketing",
    avatarColor: "bg-emerald-600",
  },
  {
    id: 4,
    name: "Karthik Sundaram",
    role: "CTO",
    company: "LogiStack",
    tag: "Mobile App Development",
    rating: 5,
    date: "2025-02-20",
    review:
      "We evaluated four agencies before choosing BugCab. What made the difference was their transparent pricing and the fact they advised us to build in Flutter over React Native for our specific use case. That honesty won our trust immediately.",
    project: "Cross-platform logistics app (Flutter)",
    avatarColor: "bg-violet-600",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    role: "Founder",
    company: "StyleCircle",
    tag: "Web Development",
    rating: 5,
    date: "2025-03-10",
    review:
      "BugCab took our e-commerce idea from wireframe to live store in 5 weeks. The Razorpay integration worked perfectly from day one and the admin panel they built makes managing inventory genuinely easy. Post-launch support was excellent.",
    project: "E-commerce website + Razorpay integration",
    avatarColor: "bg-blue-500",
  },
  {
    id: 6,
    name: "Vikram Anand",
    role: "Solo Founder",
    company: "TaskBlast",
    tag: "IT Consulting",
    rating: 5,
    date: "2025-03-25",
    review:
      "I came to BugCab with three conflicting tech stack recommendations from three different developers. Their IT consulting session gave me a clear, documented recommendation with reasoning. That 2-hour session saved me from making a ₹60,000 mistake.",
    project: "Tech stack advisory + architecture planning",
    avatarColor: "bg-amber-600",
  },
  {
    id: 7,
    name: "Divya Ramesh",
    role: "Product Manager",
    company: "HealthBridge",
    tag: "UI/UX Design",
    rating: 5,
    date: "2025-04-08",
    review:
      "The UI/UX design BugCab delivered for our patient portal was so well thought out that our development team had almost no questions during implementation. The Figma file with developer handoff specs was the most complete design handoff I've seen.",
    project: "Patient portal UI design + design system",
    avatarColor: "bg-pink-500",
  },
  {
    id: 8,
    name: "Sathish Kumar",
    role: "Director",
    company: "MAAC Salem",
    tag: "Cybersecurity",
    rating: 5,
    date: "2025-04-20",
    review:
      "BugCab handled our security audit and ongoing technical support with complete professionalism. Our learning platform now handles thousands of students without any vulnerability risks. Performance improved by 60%.",
    project: "Security audit + cloud defense",
    avatarColor: "bg-red-600",
  },
];
