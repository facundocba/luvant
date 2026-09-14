import type { Dictionary } from "./es";

export const en: Dictionary = {
  nav: {
    links: [
      { label: "Products", href: "/en/products" },
      { label: "Services", href: "/en/services/custom-software" },
      { label: "About", href: "/en/about" },
      { label: "Blog", href: "/en/blog" },
      { label: "Contact", href: "/en/contact" },
    ],
    cta: "Let's talk",
    ctaHref: "/en/contact",
    logoAriaLabel: "Go to homepage",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    servicesPrefix: "/en/services",
  },
  hero: {
    badge: "Custom software development",
    titleLine1: "The software your",
    titleLine2: "business",
    titleHighlight: "needs",
    description:
      "Custom software development, process automation, and systems integration. We build the technology your operation needs to grow.",
    ctaPrimary: "See solutions",
    ctaPrimaryHref: "/en/products",
    ctaSecondary: "Talk to us",
    ctaSecondaryHref: "/en/contact",
    stats: [
      { value: "100%", label: "Custom code" },
      { value: "24/7", label: "Tech support" },
      { value: "API", label: "Integrations" },
    ],
    visual: {
      topBar: "luvant-lens — processing",
      docLabel: "Document",
      dataLabel: "Extracted data",
      fields: [
        { label: "Vendor", value: "TechCorp S.A." },
        { label: "Tax ID", value: "30-71234567-9" },
        { label: "Total", value: "$148,350.00" },
        { label: "Date", value: "02/16/2026" },
      ],
      confidence: "99.2% confidence",
      engineVersion: "OCR Engine v3.1",
      docsCount: "1 of 47 docs",
      processedBadge: "47 processed",
    },
  },
  products: {
    sectionLabel: "Products",
    heading: "Technology that solves real problems",
    lens: {
      badge: "OCR · Documents",
      title: "Luvant Lens",
      description:
        "Extract data from invoices, receipts, prescriptions, and forms automatically. Advanced OCR with machine learning trained for Spanish-language documents.",
      stats: [
        { value: "99.2%", label: "Accuracy" },
        { value: "<500ms", label: "Latency" },
        { value: "15+", label: "Doc types" },
      ],
      cta: "Discover Lens",
      ctaHref: "/en/products/lens",
      miniDemo: {
        fieldsExtracted: "3 fields extracted",
        confidence: "98.7%",
      },
    },
    solutionsLabel: "Solutions",
    solutions: [
      {
        title: "Process automation",
        href: "/en/services/process-automation",
        description:
          "Eliminate hours of manual work. We connect your systems with workflows that run on their own.",
      },
      {
        title: "Systems integration",
        href: "/en/services/systems-integration",
        description:
          "Your ERP, CRM, and internal tools talking to each other. Data synced in real time.",
      },
      {
        title: "Custom software",
        href: "/en/services/custom-software",
        description:
          "Platforms, dashboards, and APIs designed exclusively for your operation.",
      },
      {
        title: "Technical consulting",
        href: "/en/services/technical-consulting",
        description:
          "We evaluate your current stack and help you make the right technology decision.",
      },
    ],
  },
  features: {
    sectionLabel: "Why choose us",
    heading: "Software measured by",
    headingHighlight: "results",
    description:
      "Every project is designed to solve a specific problem in your company. No generic solutions, no features you don't use.",
    cards: {
      custom: {
        title: "Built for you",
        description:
          "We don't adapt templates. We design and build software from scratch, tailored to how your business operates.",
        href: "/en/services/custom-software",
      },
      integration: {
        title: "Connects with everything",
        description:
          "Documented APIs, webhooks, and SDKs. We integrate with your ERP, CRM, or any system you already use.",
        href: "/en/services/systems-integration",
      },
      performance: {
        title: "Enterprise performance",
        description:
          "Architecture optimized to respond in milliseconds. Scales with your business without degrading the experience.",
      },
      support: {
        title: "Human support",
        description: "You talk to engineers, not bots. Response within hours.",
      },
      security: {
        title: "Your data, your control",
        description:
          "End-to-end encryption. Your information never leaves your infrastructure.",
      },
    },
  },
  howItWorks: {
    sectionLabel: "Process",
    heading: "How we work",
    steps: [
      {
        number: "01",
        title: "We understand your problem",
        description:
          "We listen, analyze your processes, and understand what your business needs before writing a single line of code.",
      },
      {
        number: "02",
        title: "We design the solution",
        description:
          "We define the architecture, integrations, and user experience. You approve before we move forward.",
      },
      {
        number: "03",
        title: "We build and show",
        description:
          "We develop in short sprints with demos every 2 weeks. You see real progress, not promises.",
      },
      {
        number: "04",
        title: "We deliver and support",
        description:
          "We deploy, train your team, and stay available. Support doesn't end with delivery.",
      },
    ],
  },
  cta: {
    heading: "Have a project in mind?",
    description:
      "Tell us what you need to solve. We'll analyze your case and propose the most direct technical path.",
    primaryButton: "Schedule a meeting",
    primaryHref: "/en/contact",
  },
  footer: {
    description:
      "Custom software development, process automation, and systems integration.",
    sections: {
      products: {
        title: "Products",
        links: [
          { label: "Luvant Lens", href: "/en/products/lens" },
          { label: "Solutions", href: "/en/products" },
        ],
      },
      services: {
        title: "Services",
        links: [
          {
            label: "Custom development",
            href: "/en/services/custom-software",
          },
          {
            label: "Automation",
            href: "/en/services/process-automation",
          },
          {
            label: "Systems integration",
            href: "/en/services/systems-integration",
          },
          {
            label: "Technical consulting",
            href: "/en/services/technical-consulting",
          },
        ],
      },
      company: {
        title: "Company",
        links: [
          { label: "About", href: "/en/about" },
          { label: "Blog", href: "/en/blog" },
          { label: "Contact", href: "/en/contact" },
        ],
      },
    },
    copyright: "Luvant. All rights reserved.",
  },
  notFound: {
    code: "404",
    title: "Page not found",
    description:
      "The page you're looking for doesn't exist or has been moved. You can go back to the homepage or explore our sections.",
    goHome: "Go to homepage",
    homeHref: "/en",
    contact: "Contact us",
    contactHref: "/en/contact",
    navLinks: [
      { label: "Products", href: "/en/products" },
      { label: "Luvant Lens", href: "/en/products/lens" },
      { label: "About", href: "/en/about" },
      { label: "Blog", href: "/en/blog" },
    ],
    navAriaLabel: "Main links",
  },
  languageSwitcher: {
    es: "ES",
    en: "EN",
  },
};
