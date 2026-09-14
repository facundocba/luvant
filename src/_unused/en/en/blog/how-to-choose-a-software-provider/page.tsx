import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to choose a software development provider",
  description:
    "What to ask, what to request as proof, and what red flags to look for before hiring someone to build software for your business.",
  alternates: {
    canonical: "/en/blog/how-to-choose-a-software-provider",
    languages: {
      "es-AR":
        "https://luvant.com.ar/blog/elegir-proveedor-desarrollo-software",
      en: "https://luvant.com.ar/en/blog/how-to-choose-a-software-provider",
      "x-default":
        "https://luvant.com.ar/blog/elegir-proveedor-desarrollo-software",
    },
  },
  openGraph: {
    title: "How to choose a software development provider",
    description:
      "A practical guide to evaluating and hiring development providers. What to ask and what red flags to look for.",
    type: "article",
    publishedTime: "2026-02-25T00:00:00-03:00",
    authors: ["Luvant"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to choose a software development provider",
    description:
      "A practical guide to evaluating and hiring development providers. What to ask and what red flags to look for.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to choose a software development provider",
  description:
    "What to ask, what to request as proof, and what red flags to look for before hiring someone to build software for your business.",
  image:
    "https://luvant.com.ar/en/blog/how-to-choose-a-software-provider/opengraph-image",
  datePublished: "2026-02-25T00:00:00-03:00",
  dateModified: "2026-02-25T00:00:00-03:00",
  author: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  publisher: {
    "@type": "Organization",
    name: "Luvant",
    url: "https://luvant.com.ar",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://luvant.com.ar/en/blog/how-to-choose-a-software-provider",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://luvant.com.ar/en",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://luvant.com.ar/en/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to choose a software development provider",
      item: "https://luvant.com.ar/en/blog/how-to-choose-a-software-provider",
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar locale="en" />
      <main id="main-content">
        {/* Header */}
        <section className="relative overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="pointer-events-none absolute inset-0 dot-grid" />
          <div className="pointer-events-none absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />

          <Container className="relative">
            <Link
              href="/en/blog"
              className="mb-8 inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
            >
              <ArrowLeft size={12} />
              Back to blog
            </Link>

            <div className="mb-4 flex items-center gap-3">
              <Badge variant="outline">Practical guide</Badge>
              <span className="font-mono text-[11px] text-luvant-600">
                February 2026 &middot; 8 min read
              </span>
            </div>

            <h1 className="text-h2 md:text-h1 max-w-3xl leading-[1.1]">
              How to choose a software development provider
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-luvant-400">
              What to ask, what to request as proof, and what red flags to look
              for before hiring someone to build software for your business.
            </p>
          </Container>
        </section>

        {/* Article body */}
        <section className="pb-24 lg:pb-32">
          <Container>
            <article className="prose-luvant mx-auto max-w-3xl">
              <p>
                Choosing who will build software for your business is an
                important decision. It&apos;s not like buying a finished
                product: you&apos;re choosing someone who will understand your
                problem, design a solution, and build it. If the choice is bad,
                the result can be months of wasted work and a system that
                doesn&apos;t solve what you need.
              </p>

              <p>
                This article is a practical guide on what to evaluate, what to
                ask, and what red flags to look for. It applies whether
                you&apos;re hiring a freelancer or a development company.
              </p>

              <h2>Before searching: define what you need</h2>

              <p>
                The most common mistake isn&apos;t choosing the wrong provider,
                but starting to search without being clear on what you need. You
                don&apos;t need a 50-page requirements document, but you should
                be able to answer these questions:
              </p>

              <ul>
                <li>
                  <strong>What problem are you solving?</strong> Not &ldquo;I
                  need an app,&rdquo; but &ldquo;my team loses 3 hours per day
                  entering data manually.&rdquo;
                </li>
                <li>
                  <strong>Who will use the system?</strong> Internal employees?
                  Customers? Both? The end user defines many design decisions.
                </li>
                <li>
                  <strong>
                    What existing systems does it need to work with?
                  </strong>{" "}
                  If you need it to integrate with your ERP or accounting
                  system, that needs to be known from the start.
                </li>
                <li>
                  <strong>What is your approximate budget?</strong> You
                  don&apos;t need an exact number, but knowing whether your
                  budget is $5,000 or $50,000 USD completely changes the
                  possible scope.
                </li>
              </ul>

              <p>
                If you don&apos;t have clear answers to these, consider a{" "}
                <Link
                  href="/en/services/technical-consulting"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  technical consulting
                </Link>{" "}
                engagement first before starting development. It&apos;s better
                to invest in understanding the problem well than to build the
                wrong solution.
              </p>

              <h2>What to ask in the first conversations</h2>

              <p>
                When you already have candidates, these questions will help you
                evaluate whether they&apos;re the right fit:
              </p>

              <h3>About their experience</h3>

              <ul>
                <li>
                  <strong>
                    &ldquo;Have you done something similar before?&rdquo;
                  </strong>{" "}
                  They don&apos;t need to have done exactly the same thing, but
                  experience in the domain (your industry or type of problem) is
                  a big plus.
                </li>
                <li>
                  <strong>
                    &ldquo;Can I see examples of previous projects?&rdquo;
                  </strong>{" "}
                  A serious provider has a portfolio or, at minimum, can
                  describe use cases (even if they can&apos;t show the code due
                  to confidentiality).
                </li>
                <li>
                  <strong>
                    &ldquo;Can I speak with a previous client?&rdquo;
                  </strong>{" "}
                  This is the best possible reference. If they refuse or have no
                  one to offer, that&apos;s a red flag.
                </li>
              </ul>

              <h3>About their process</h3>

              <ul>
                <li>
                  <strong>&ldquo;How do you work?&rdquo;</strong> Look for them
                  to explain their process in simple terms. If they use agile
                  methodologies, there should be partial deliveries you can see
                  and test, not a &ldquo;big reveal&rdquo; at the end.
                </li>
                <li>
                  <strong>&ldquo;How often will I see progress?&rdquo;</strong>{" "}
                  A good answer is every 1-2 weeks. If they tell you &ldquo;in 3
                  months we&apos;ll show you the finished product,&rdquo; be
                  skeptical.
                </li>
                <li>
                  <strong>
                    &ldquo;What happens if I need to change something
                    mid-project?&rdquo;
                  </strong>{" "}
                  Changes are inevitable. Look for a provider that handles them
                  naturally, not one that charges extra for every minor
                  modification.
                </li>
              </ul>

              <h3>About ownership and maintenance</h3>

              <ul>
                <li>
                  <strong>&ldquo;Is the code mine?&rdquo;</strong> The answer
                  must be yes, without ambiguity. You pay for the development,
                  the source code is yours.
                </li>
                <li>
                  <strong>
                    &ldquo;What if I later want someone else to maintain
                    it?&rdquo;
                  </strong>{" "}
                  A trustworthy provider doesn&apos;t create dependency. The
                  code should be documented and use standard technologies that
                  any competent team can maintain.
                </li>
                <li>
                  <strong>
                    &ldquo;Do you offer post-delivery support?&rdquo;
                  </strong>{" "}
                  The first months after launch are critical. Knowing what type
                  of support is included (and how much it costs if it&apos;s
                  additional) is important.
                </li>
              </ul>

              <h2>Red flags</h2>

              <p>
                In our experience, these are the most reliable warning signs:
              </p>

              <ul>
                <li>
                  <strong>
                    They give you a fixed quote without fully understanding the
                    problem
                  </strong>
                  . If in the first meeting they already have a locked-in price,
                  they probably aren&apos;t being serious about the estimate. A
                  good provider needs to understand the scope before committing
                  to a number.
                </li>
                <li>
                  <strong>
                    They don&apos;t ask questions about your business
                  </strong>
                  . If they only ask about features and screens but not about
                  the problem you&apos;re solving or who will use the system,
                  they&apos;ll build something technically functional but that
                  doesn&apos;t solve your need.
                </li>
                <li>
                  <strong>They promise unrealistically short timelines</strong>.
                  If another provider estimated 4 months and this one promises 6
                  weeks, they&apos;re not faster: they&apos;re underestimating
                  the complexity or planning to deliver something incomplete.
                </li>
                <li>
                  <strong>They have no verifiable digital presence</strong>.
                  Website, founders&apos; LinkedIn, some online track record. If
                  you can&apos;t find anything, it&apos;s hard to evaluate
                  whether they&apos;re real.
                </li>
                <li>
                  <strong>They use proprietary technology</strong>. If the
                  provider uses a custom framework or a platform you can&apos;t
                  leave, you&apos;re creating unnecessary dependency. Prefer
                  standard and open-source technologies.
                </li>
              </ul>

              <h2>Fair pricing</h2>

              <p>
                Software development costs vary enormously depending on scope,
                complexity, and who does it. But there are some principles that
                always apply:
              </p>

              <ul>
                <li>
                  <strong>
                    The cheapest option is rarely the cheapest in the long run
                  </strong>
                  . Poorly done development generates maintenance costs, bugs,
                  and eventually the need to redo it from scratch.
                </li>
                <li>
                  <strong>A good provider helps you reduce the scope</strong>.
                  Instead of saying &ldquo;yes to everything,&rdquo; they
                  suggest starting with what&apos;s most important and adding
                  features later. That reduces risk and initial cost.
                </li>
                <li>
                  <strong>Ask for a breakdown</strong>. If the quote is a single
                  number with no detail, you can&apos;t evaluate whether
                  it&apos;s reasonable. A good quote breaks down by module or
                  feature.
                </li>
              </ul>

              <p>
                Be wary of anyone who gives you a price without asking detailed
                questions, and of anyone who accepts everything without pushing
                back on anything.
              </p>

              <h2>The contract</h2>

              <p>
                Regardless of the project size, have a written agreement that
                covers at minimum:
              </p>

              <ol>
                <li>
                  <strong>Scope</strong>: what will be built, described in
                  enough detail that both parties know when the work is done.
                </li>
                <li>
                  <strong>Timeline</strong>: partial deliveries with estimated
                  dates. It doesn&apos;t have to be rigid, but it has to exist.
                </li>
                <li>
                  <strong>Intellectual property</strong>: that the source code
                  and all deliverables are your property once paid for.
                </li>
                <li>
                  <strong>Confidentiality</strong>: especially if the provider
                  will handle your customer data or sensitive business
                  information.
                </li>
                <li>
                  <strong>Payment terms</strong>: payments tied to deliverables
                  is the healthiest arrangement for both parties. Avoid paying
                  everything upfront.
                </li>
                <li>
                  <strong>Warranty and support</strong>: what happens after
                  delivery. A warranty period for bug fixes is standard in the
                  industry.
                </li>
              </ol>

              <h2>In summary</h2>

              <p>
                Choosing a software development provider is choosing a partner
                to solve a problem. The best provider isn&apos;t the cheapest
                one or the one with the prettiest website: it&apos;s the one
                that understands your problem, has relevant experience, works
                transparently, and earns your trust.
              </p>

              <p>
                Ask the uncomfortable questions. Request references. Start with
                a limited scope. And if something doesn&apos;t feel right, trust
                your instincts.
              </p>

              <p>
                If you&apos;re evaluating providers and want a second technical
                opinion,{" "}
                <Link
                  href="/en/contact"
                  className="text-white underline decoration-luvant-700 underline-offset-4 transition-colors hover:decoration-white"
                >
                  reach out to us
                </Link>
                . We can help you evaluate proposals or better define what you
                need before you start searching.
              </p>
            </article>

            {/* Article footer */}
            <div className="mx-auto mt-16 max-w-3xl border-t border-white/[0.06] pt-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/en/blog/signs-you-need-process-automation"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  <ArrowLeft size={12} />
                  Previous: 5 signs you need to automate
                </Link>
                <Link
                  href="/en/blog/why-your-business-needs-custom-software"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-luvant-500 transition-colors hover:text-white"
                >
                  Back to first article
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="gradient-border relative overflow-hidden rounded-2xl">
                <div className="relative p-10 text-center md:p-14">
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.02] to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-white/[0.02] to-transparent" />

                  <div className="relative">
                    <h3 className="mx-auto mb-3 max-w-md text-h3 text-gradient-bright">
                      Have a project in mind?
                    </h3>
                    <p className="mx-auto max-w-sm text-sm text-luvant-400">
                      Tell us what you need and we&apos;ll give you an honest
                      assessment of how we can help.
                    </p>
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                      <Link
                        href="/en/contact"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-luvant-200"
                      >
                        Contact us
                        <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/en/services/custom-software"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40"
                      >
                        View development service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}
