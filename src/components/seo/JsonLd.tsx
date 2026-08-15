import React from "react";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bugcab.com/#organization",
        name: "BugCab IT Solutions",
        url: "https://bugcab.com",
        logo: {
          "@type": "ImageObject",
          url: "https://bugcab.com/images/logo.png",
          width: 120,
          height: 40,
        },
        description:
          "BugCab is an IT solutions company building websites, mobile apps, UI/UX designs, and digital marketing strategies for startups and freelancers.",
        foundingDate: "2022",
        email: "hello@bugcab.com",
        telephone: "+91-9876543210",
        priceRange: "₹₹",
        areaServed: ["IN", "Erode", "Salem", "Chennai", "Bangalore", "Tamil Nadu", "India"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Brough Road, Perundurai Road",
          addressLocality: "Erode",
          addressRegion: "Tamil Nadu",
          postalCode: "638001",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "11.3410",
          longitude: "77.7172",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "hello@bugcab.com",
          telephone: "+91-9876543210",
          availableLanguage: ["English", "Tamil"],
        },
        sameAs: [
          "https://twitter.com/bugcab",
          "https://linkedin.com/company/bugcab",
          "https://github.com/bugcab",
          "https://instagram.com/bugcab",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://bugcab.com/#website",
        url: "https://bugcab.com",
        name: "BugCab IT Solutions",
        description:
          "IT solutions for startups and freelancers — web development, mobile apps, UI/UX design, and digital marketing.",
        publisher: {
          "@id": "https://bugcab.com/#organization",
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What IT services does BugCab offer for startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BugCab offers five core services tailored for startups and freelancers: web development (Next.js, React), mobile app development (React Native, Flutter), UI/UX design (Figma), digital marketing & SEO, and cybersecurity. You can hire us for one service or hand us the entire stack.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to build a website or app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every project is scoped individually based on features, database complexity, and design requirements. We offer transparent, fixed-cost quotes so co-founders and solo founders know the exact investment beforehand. Contact us for a free quote and we'll give you a transparent, itemised estimate within 24 hours.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build an MVP for a startup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A focused MVP typically takes 6 to 8 weeks with BugCab. We work in two-week agile sprints so you see progress continuously. Larger platforms can take 3 to 5 months.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with freelancers and solo founders, not just companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely — freelancers and solo founders are a core part of who we build for. We offer startup-friendly budgets, flexible engagement models, and clear communication throughout.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide post-launch support and maintenance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every project includes a 30-day post-launch support window at no extra cost. After that, we offer monthly maintenance retainers covering bug fixes, security updates, performance monitoring, and minor feature additions.",
        },
      },
      {
        "@type": "Question",
        name: "Which technologies does BugCab use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For web: Next.js, React, TypeScript, Node.js, PostgreSQL, and Tailwind CSS. For mobile: React Native and Flutter. For design: Figma. For marketing: Google Analytics 4, Search Console, and modern SEO tooling.",
        },
      },
      {
        "@type": "Question",
        name: "Can BugCab handle both design and development for my project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — BugCab handles UI/UX design, frontend development, backend development, and deployment end-to-end, giving you a single point of accountability.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with BugCab?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fill out our contact form or email us with a brief description of your project. We'll schedule a free 30-minute discovery call and send you a detailed proposal within 48 hours. No commitment required.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServicesJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://bugcab.com/services/web-development",
        name: "Web Development for Startups",
        alternateName: "Custom Website Development",
        description:
          "Custom websites and web apps built with Next.js, React, and TypeScript for startups and freelancers. Mobile-first, SEO-optimised, and production-ready.",
        provider: {
          "@id": "https://bugcab.com/#organization",
        },
        serviceType: "Web Development",
        url: "https://bugcab.com/services/web-development",
      },
      {
        "@type": "Service",
        "@id": "https://bugcab.com/services/mobile-app-development",
        name: "Mobile App Development for Startups",
        alternateName: "React Native Flutter App Development",
        description:
          "Cross-platform iOS and Android mobile apps built with React Native and Flutter for startups and freelancers.",
        provider: {
          "@id": "https://bugcab.com/#organization",
        },
        serviceType: "Mobile App Development",
        url: "https://bugcab.com/services/mobile-app-development",
      },
      {
        "@type": "Service",
        "@id": "https://bugcab.com/services/ui-ux-design",
        name: "UI/UX Design Services for Startups",
        alternateName: "Figma UI Design",
        description:
          "User interface and UX design services for startups — wireframes, Figma prototypes, and design systems that convert visitors into customers.",
        provider: {
          "@id": "https://bugcab.com/#organization",
        },
        serviceType: "UI/UX Design",
        url: "https://bugcab.com/services/ui-ux-design",
      },
      {
        "@type": "Service",
        "@id": "https://bugcab.com/services/digital-marketing",
        name: "Digital Marketing & SEO for Startups",
        alternateName: "SEO Agency for Startups",
        description:
          "SEO audits, keyword strategy, and content marketing campaigns that drive organic traffic for startups and freelancers.",
        provider: {
          "@id": "https://bugcab.com/#organization",
        },
        serviceType: "Digital Marketing",
        url: "https://bugcab.com/services/digital-marketing",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AboutJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://bugcab.com/about/#webpage",
        url: "https://bugcab.com/about",
        name: "About BugCab — IT Solutions Company for Startups & Freelancers",
        description:
          "BugCab is an IT solutions company helping startups and freelancers ship websites, mobile apps, and digital products faster and more affordably.",
        isPartOf: { "@id": "https://bugcab.com/#website" },
        about: { "@id": "https://bugcab.com/#organization" },
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": "https://bugcab.com/#founder",
        name: "Dinesh Kumar",
        jobTitle: "Founder & Full-Stack Developer",
        worksFor: { "@id": "https://bugcab.com/#organization" },
        url: "https://bugcab.com/about",
        sameAs: ["https://github.com/bugcab", "https://linkedin.com/in/dineshkumar0202"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WorkJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://bugcab.com/work/#webpage",
        url: "https://bugcab.com/work",
        name: "Our Work — Web & App Development Projects | BugCab IT Solutions",
        description:
          "Portfolio of web development, mobile app, and digital marketing projects delivered by BugCab for businesses.",
        isPartOf: { "@id": "https://bugcab.com/#website" },
        inLanguage: "en",
      },
      {
        "@type": "CreativeWork",
        name: "Zero Two Four Motorsport — Web Platform",
        description:
          "Full-stack web platform and custom admin panel with real-time analytics and media management, built by BugCab.",
        creator: { "@id": "https://bugcab.com/#organization" },
        dateCreated: "2025",
        genre: "Web Development",
        url: "https://bugcab.com/work",
      },
      {
        "@type": "CreativeWork",
        name: "MAAC Salem — Education Platform",
        description:
          "Web development and technical support for Maya Academy of Advanced Creativity, Salem's leading media education institute.",
        creator: { "@id": "https://bugcab.com/#organization" },
        dateCreated: "2025",
        genre: "Web Development",
        url: "https://bugcab.com/work",
      },
      {
        "@type": "CreativeWork",
        name: "Etrezzo — Digital Marketing Campaign",
        description:
          "End-to-end digital marketing strategy, campaign deployment and lead generation for Etrezzo, an appliance repair platform.",
        creator: { "@id": "https://bugcab.com/#organization" },
        dateCreated: "2025",
        genre: "Digital Marketing",
        url: "https://bugcab.com/work",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://bugcab.com/contact/#webpage",
        url: "https://bugcab.com/contact",
        name: "Contact BugCab — Hire an IT Company for Your Startup Project",
        description:
          "Contact BugCab to get a free quote for web development, mobile app development, UI/UX design, or digital marketing.",
        isPartOf: { "@id": "https://bugcab.com/#website" },
        inLanguage: "en",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://bugcab.com" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact",
              item: "https://bugcab.com/contact",
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://bugcab.com/#organization",
        name: "BugCab IT Solutions",
        url: "https://bugcab.com",
        email: "hello@bugcab.com",
        availableLanguage: ["English", "Tamil"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "hello@bugcab.com",
            availableLanguage: ["English", "Tamil"],
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "10:00",
              closes: "19:00",
            },
          },
          {
            "@type": "ContactPoint",
            contactType: "sales",
            contactOption: "TollFree",
            email: "hello@bugcab.com",
            availableLanguage: ["English", "Tamil"],
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function TestimonialsJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bugcab.com/#organization",
        name: "BugCab IT Solutions",
        url: "https://bugcab.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "24",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Ethan Moore" },
            datePublished: "2024-11-15",
            reviewBody:
              "BugCab turned our ideas into a sharp, clean brand & web platform. Fast, easy, and right on point.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Rajesh Kannan" },
            datePublished: "2024-12-02",
            reviewBody:
              "The absolute best choice for Indian startups. Shipped our MVP in weeks, not months.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Sarah Jenkins" },
            datePublished: "2025-01-10",
            reviewBody:
              "Exceptional UI/UX design and fast delivery. They helped us scale our platform seamlessly.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PricingJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://bugcab.com/pricing/#webpage",
        url: "https://bugcab.com/pricing",
        name: "IT Company Pricing India — BugCab Transparent Service Pricing",
        description:
          "Itemised pricing breakdown for web development, mobile apps, UI/UX design, and digital marketing retainers for startups in India.",
        isPartOf: { "@id": "https://bugcab.com/#website" },
      },
      {
        "@type": "PriceSpecification",
        name: "Landing Page Development",
        price: "15000",
        priceCurrency: "INR",
      },
      {
        "@type": "PriceSpecification",
        name: "Full Company Website",
        price: "25000",
        priceCurrency: "INR",
      },
      {
        "@type": "PriceSpecification",
        name: "E-Commerce Website",
        price: "35000",
        priceCurrency: "INR",
      },
      {
        "@type": "PriceSpecification",
        name: "SaaS / Full Stack MVP",
        price: "60000",
        priceCurrency: "INR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
